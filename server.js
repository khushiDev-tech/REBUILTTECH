const path = require("path");
const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const root = __dirname;
const port = Number(process.env.PORT) || 3000;

const services = {
  "electrical-installation": "Electrical Installation",
  "electrical-maintenance": "Electrical Maintenance",
  "industrial-electrical": "Industrial Electrical Services",
  "power-distribution": "Power Distribution",
  "electrical-consultation": "Electrical Consultation",
};

const hits = new Map();

app.disable("x-powered-by");
app.use(express.json({ limit: "32kb" }));

app.use((req, res, next) => {
  const urlPath = decodeURIComponent(req.path);
  if (
    urlPath.includes("..") ||
    urlPath.startsWith("/node_modules") ||
    urlPath === "/server.js" ||
    urlPath === "/package.json" ||
    urlPath === "/package-lock.json" ||
    urlPath.startsWith("/.env")
  ) {
    return res.status(404).end();
  }
  next();
});

app.use(express.static(root, { dotfiles: "deny", index: "index.html" }));

function clean(value, max) {
  return String(value || "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .trim()
    .slice(0, max);
}

function mailReady() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.MAIL_TO,
  );
}

app.post("/api/contact", async (req, res) => {
  const ip = req.ip || "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((time) => now - time < 10 * 60 * 1000);
  if (recent.length >= 5) {
    return res.status(429).json({
      error: "Too many enquiries. Please wait a few minutes and try again.",
    });
  }

  const name = clean(req.body.name, 80);
  const phone = clean(req.body.phone, 20).replace(/[\s-]/g, "").replace(/^\+91/, "");
  const email = clean(req.body.email, 120);
  const service = clean(req.body.service, 40);
  const message = clean(req.body.message, 4000);

  if (name.length < 2) {
    return res.status(400).json({ error: "Please enter your name." });
  }
  if (!/^[6-9]\d{9}$/.test(phone)) {
    return res.status(400).json({ error: "Enter a valid 10-digit Indian mobile number." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Enter a valid email address." });
  }
  if (!services[service]) {
    return res.status(400).json({ error: "Please choose a service." });
  }
  if (message.length < 2) {
    return res.status(400).json({ error: "Please tell us about your requirement." });
  }
  if (!mailReady()) {
    return res.status(503).json({
      error: "Email is not configured yet. Add the mailbox password in the .env file and restart the server.",
    });
  }

  recent.push(now);
  hits.set(ip, recent);

  try {
    await sendMail({
      from: `"Rebuilt Techz Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New Website Enquiry – ${services[service]}`,
      text: [
        "A new enquiry was submitted on the Rebuilt Techz website.",
        "",
        `Name: ${name}`,
        `Phone: +91 ${phone}`,
        `Email: ${email}`,
        `Service: ${services[service]}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: enquiryEmailHtml({
        name,
        phone: `+91 ${phone}`,
        email,
        service: services[service],
        message,
      }),
    });

    res.json({ ok: true });
  } catch (error) {
    console.error("Contact email failed:", error.message);
    res.status(502).json({
      error: "The enquiry could not be emailed. Please call or WhatsApp us.",
    });
  }
});

app.post("/api/newsletter", async (req, res) => {
  const ip = req.ip || "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((time) => now - time < 10 * 60 * 1000);
  if (recent.length >= 5) {
    return res.status(429).json({
      error: "Too many requests. Please wait a few minutes and try again.",
    });
  }

  const email = clean(req.body.email, 120);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Enter a valid email address." });
  }
  if (!mailReady()) {
    return res.status(503).json({
      error: "Email is not configured yet. Add the mailbox password in the .env file and restart the server.",
    });
  }

  recent.push(now);
  hits.set(ip, recent);

  try {
    await sendMail({
      from: `"Rebuilt Techz Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Newsletter signup from ${email}`,
      text: [
        "Someone subscribed on the Rebuilt Techz website.",
        "",
        `Email: ${email}`,
      ].join("\n"),
    });
    res.json({ ok: true });
  } catch (error) {
    console.error("Newsletter email failed:", error.message);
    res.status(502).json({
      error: "The subscription could not be emailed. Please try again later.",
    });
  }
});

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function enquiryEmailHtml({ name, phone, email, service, message }) {
  const details = [
    ["Name", name],
    ["Phone", phone],
    ["Email", email],
    ["Service", service],
  ]
    .map(
      ([label, value]) => `
        <tr>
          <td width="130" valign="top" style="width:130px;padding:12px 16px;border-bottom:1px solid #e6ebf2;color:#6b7280;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;line-height:1.4;">${escapeHtml(label)}</td>
          <td valign="top" style="padding:12px 16px;border-bottom:1px solid #e6ebf2;color:#172b4d;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  const messageHtml = escapeHtml(message).replace(/\r\n|\n|\r/g, "<br>");

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Website Enquiry</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f6f8;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f6f8;margin:0;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:#ffffff;border:1px solid #e6ebf2;border-radius:8px;">
            <tr>
              <td style="background:#082d63;padding:22px 24px;border-bottom:4px solid #f15a24;">
                <p style="margin:0;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:20px;font-weight:bold;line-height:1.3;">Rebuilt Techz</p>
                <p style="margin:6px 0 0;color:#d6e2f2;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.4;">New website enquiry</p>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 8px 0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  ${details}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 24px 8px;">
                <p style="margin:0 0 8px;color:#082d63;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;letter-spacing:0.4px;text-transform:uppercase;">Message</p>
                <p style="margin:0;color:#172b4d;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;">${messageHtml}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 24px 22px;">
                <p style="margin:0;padding-top:16px;border-top:1px solid #e6ebf2;color:#6b7280;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;">This email was automatically generated from the Rebuilt Techz website.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function sendMail(message) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: Number(process.env.SMTP_PORT) !== 587,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  return transporter.sendMail(message);
}

app.listen(port, () => {
  console.log(`Rebuilt Techz site: http://localhost:${port}`);
  if (!mailReady()) {
    console.log("SMTP password is empty. Enquiries will not send until .env is filled in.");
  }
});
