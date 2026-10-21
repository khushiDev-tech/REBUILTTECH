document.addEventListener("DOMContentLoaded", () => {
        // All quick-contact cards are created from one data array.
        const quickContactCards = [
          {
            title: "Call Our Team",
            description:
              "Speak directly with our electrical experts for quick assistance.",
            icon: "fa-solid fa-phone",
            action: "Call Now",
            href: "tel:+919358938057",
          },
          {
            title: "Email Us",
            description: "Send your project details and our team will respond.",
            icon: "fa-solid fa-envelope",
            action: "Email Us",
            href: "mailto:info@rebuilttechz.com?subject=Electrical%20Service%20Enquiry",
          },
          {
            title: "WhatsApp Us",
            description: "Get quick assistance on your queries via WhatsApp.",
            icon: "fa-brands fa-whatsapp",
            action: "Chat Now",
            href: "https://wa.me/919358938057?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20electrical%20services.",
          },
        ];
        function createQuickContactCard(item) {
          const card = document.createElement("article");
          card.className = "quick-contact-card";
          const iconWrap = document.createElement("div");
          iconWrap.className = "quick-contact-icon";
          const icon = document.createElement("i");
          icon.className = item.icon;
          icon.setAttribute("aria-hidden", "true");
          iconWrap.append(icon);
          const title = document.createElement("h3");
          title.textContent = item.title;
          const desc = document.createElement("p");
          desc.textContent = item.description;
          const link = document.createElement("a");
          link.className = "quick-contact-btn";
          link.href = item.href;
          if (item.href.startsWith("https:")) {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
          }
          const label = document.createElement("span");
          label.textContent = item.action;
          const arrow = document.createElement("i");
          arrow.className = "fa-solid fa-arrow-right";
          arrow.setAttribute("aria-hidden", "true");
          link.append(label, arrow);
          card.append(iconWrap, title, desc, link);
          return card;
        }
        const cardContainer = document.querySelector(
          ".quick-contact-container",
        );
        if (cardContainer)
          cardContainer.replaceChildren(
            ...quickContactCards.map(createQuickContactCard),
          );

        // Frontend-only validation. No submission or email delivery occurs.
        const form = document.getElementById("contactForm");
        const success = document.getElementById("formSuccess");
        if (form) {
          const fields = ["name", "phone", "email", "service", "message"].map(
            (id) => document.getElementById(id),
          );
          function setError(field, message) {
            const group = field.closest(".form-group");
            group.classList.toggle("error", Boolean(message));
            field.setAttribute("aria-invalid", String(Boolean(message)));
            const small = group.querySelector(".error-message");
            if (small) small.textContent = message;
          }
          function validate(field) {
            const value = field.value.trim();
            let message = "";
            if (!value) message = "This field is required.";
            else if (field.id === "name" && value.length < 2)
              message = "Please enter at least 2 characters.";
            else if (
              field.id === "phone" &&
              !/^[6-9]\d{9}$/.test(
                value.replace(/[\s-]/g, "").replace(/^\+91/, ""),
              )
            )
              message = "Enter a valid 10-digit Indian mobile number.";
            else if (
              field.id === "email" &&
              !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            )
              message = "Enter a valid email address.";
            setError(field, message);
            return !message;
          }
          fields.forEach((field) => {
            field.addEventListener("input", () => {
              if (field.closest(".form-group").classList.contains("error"))
                validate(field);
              if (success) success.classList.remove("show");
            });
            field.addEventListener("change", () => validate(field));
          });
          form.addEventListener("submit", (event) => {
            event.preventDefault();
            const results = fields.map(validate);
            if (!results.every(Boolean)) {
              fields[results.indexOf(false)].focus();
              if (success) success.classList.remove("show");
              return;
            }
            if (success) success.classList.add("show");
            // Preserve enquiry details until a delivery service is connected.
            fields.forEach((field) => field.removeAttribute("aria-invalid"));
          });
        }
        // Reveal animation only when supported and permitted.
        if (
          "IntersectionObserver" in window &&
          !matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
          const sections = document.querySelectorAll(
            ".contact-section, .quick-contact-section, .office-section",
          );
          sections.forEach((section) =>
            section.classList.add("contact-reveal-ready"),
          );
          const observer = new IntersectionObserver(
            (entries) =>
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("is-visible");
                  observer.unobserve(entry.target);
                }
              }),
            { threshold: 0.08 },
          );
          sections.forEach((section) => observer.observe(section));
        }
      });
    