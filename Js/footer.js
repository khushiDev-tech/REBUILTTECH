
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("site-footer");
  if (!container) return;

  container.innerHTML = `
    <footer class="footer">
      <div class="footer-overlay"></div>

      <div class="footer-container">

        <!-- QUICK LINKS -->
        <div class="footer-column">
          <h3 class="footer-title">Quick Links</h3>
          <div class="title-line" aria-hidden="true"><span></span></div>

          <ul class="footer-links">
            <li><a href="index.html"><i class="fa-solid fa-chevron-right"></i>Home</a></li>
            <li><a href="about.html"><i class="fa-solid fa-chevron-right"></i>About Us</a></li>
            <li><a href="service.html"><i class="fa-solid fa-chevron-right"></i>Services</a></li>
            <li><a href="project.html"><i class="fa-solid fa-chevron-right"></i>Projects</a></li>
            <li><a href="blog.html"><i class="fa-solid fa-chevron-right"></i>Blog</a></li>
            <li><a href="contact.html"><i class="fa-solid fa-chevron-right"></i>Contact</a></li>
          </ul>
        </div>

        <!-- SERVICES -->
        <div class="footer-column">
          <h3 class="footer-title">Our Services</h3>
          <div class="title-line" aria-hidden="true"><span></span></div>

          <ul class="service-list">
            <li>
              <span class="service-icon"><i class="fa-solid fa-bolt"></i></span>
              <a href="service.html">Electrical Solutions</a>
            </li>
            <li>
              <span class="service-icon"><i class="fa-solid fa-plug"></i></span>
              <a href="service.html">Electrical Installation</a>
            </li>
            <li>
              <span class="service-icon"><i class="fa-solid fa-screwdriver-wrench"></i></span>
              <a href="service.html">Maintenance &amp; Support</a>
            </li>
            <li>
              <span class="service-icon"><i class="fa-solid fa-gears"></i></span>
              <a href="service.html">Industrial Solutions</a>
            </li>
            <li>
              <span class="service-icon"><i class="fa-solid fa-building"></i></span>
              <a href="service.html">Commercial Projects</a>
            </li>
          </ul>
        </div>

        <!-- CONTACT -->
        <div class="footer-column">
          <h3 class="footer-title">Get In Touch</h3>
          <div class="title-line" aria-hidden="true"><span></span></div>

          <div class="contact-list">
            <div class="contact-item">
              <span class="contact-icon">
                <i class="fa-solid fa-location-dot"></i>
              </span>
              <div class="contact-text">
                D-24 Radha Vihar,<br>
                New Sanganer Road,<br>
                Jaipur, Rajasthan
              </div>
            </div>

            <div class="contact-item">
              <span class="contact-icon">
                <i class="fa-solid fa-phone"></i>
              </span>
              <div class="contact-text">
                <a href="tel:+919358938057">+91 9358 938 057</a>
              </div>
            </div>

            <div class="contact-item">
              <span class="contact-icon">
                <i class="fa-solid fa-envelope"></i>
              </span>
              <div class="contact-text">
                <a href="mailto:info@rebuilttechz.com">
                  info@rebuilttechz.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- FOLLOW US -->
        <div class="footer-column">
          <h3 class="footer-title">Stay Updated</h3>
          <div class="title-line" aria-hidden="true"><span></span></div>

          <div class="newsletter">
            <h3>Newsletter</h3>
            <p>Subscriptions are not available yet.</p>
            <p>
              Subscribe to receive our latest updates,
              projects and electrical solutions.
            </p>

            <form class="newsletter-form" id="newsletterForm">
              <input type="email" id="newsletterEmail"
                disabled placeholder="Coming soon"
                aria-label="Email address" required>

              <button type="submit" disabled aria-label="Subscribe (coming soon)">
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </form>

            <div class="newsletter-message"
              id="newsletterMessage" role="status" aria-live="polite"></div>
          </div>
        </div>

      </div>

      <!-- FOOTER BOTTOM -->
      <div class="footer-bottom">
        <div class="footer-bottom-inner">
          <p>&copy; ${new Date().getFullYear()} Rebuilt Techz. All Rights Reserved.</p>

          <div class="bottom-links">
            <span class="policy-pending">Privacy Policy ? coming soon</span>
            <span></span>
            <span class="policy-pending">Terms &amp; Conditions ? coming soon</span>
          </div>
        </div>
      </div>
    </footer>
  `;

  const backToTop = document.createElement("button");
  backToTop.type = "button";
  backToTop.className = "site-back-to-top";
  backToTop.setAttribute("aria-label", "Back to top");
  backToTop.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20V4m-7 7 7-7 7 7"/></svg>';
  document.body.appendChild(backToTop);
  function updateBackToTop() {
    backToTop.hidden = window.scrollY <= 300;
  }
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  });
  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();

  const newsletterForm = document.getElementById("newsletterForm");
  const newsletterMessage = document.getElementById("newsletterMessage");

  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    newsletterMessage.textContent =
      "Subscription service is not connected yet.";
  });
});
