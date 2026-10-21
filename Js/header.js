
document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <!-- TOP BAR -->
    <div class="top-bar">
      <div class="top-bar-inner">

        <div class="top-info">
          <a class="top-item"
             href="https://www.google.com/maps/search/?api=1&query=D-24+Radha+Vihar+New+Sanganer+Road+Jaipur"
             target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-location-dot"></i>
            <span>D-24 Radha Vihar, New Sanganer Road, Jaipur</span>
          </a>

          <a class="top-item" href="mailto:info@rebuilttechz.com">
            <i class="fa-solid fa-envelope"></i>
            <span>info@rebuilttechz.com</span>
          </a>

          <a class="top-item" href="tel:+919358938057">
            <i class="fa-solid fa-phone"></i>
            <span>+91 9358 938 057</span>
          </a>
        </div>

        <div class="top-right">

          <div class="working-hours">
            <i class="fa-regular fa-clock"></i>
            <span>Mon - Sat : 9:00 AM - 7:00 PM</span>
          </div>
        </div>

      </div>
    </div>

    <!-- MAIN NAVBAR -->
    <header class="navbar" id="mainNavbar">
      <div class="nav-inner">

        <a href="index.html" class="logo">
          <img src="img/Rebuilt Techz Logo.png"
               alt="Rebuilt Techz">
        </a>

        <nav class="main-nav" aria-label="Main navigation">
          <ul class="nav-links" id="navLinks">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="service.html">Services</a></li>
            <li><a href="project.html">Projects</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>

        <div class="nav-actions">

          <a class="nav-whatsapp"
             href="https://wa.me/919358938057"
             target="_blank" rel="noopener noreferrer"
             aria-label="Chat on WhatsApp">
            <span class="whatsapp-icon">
              <i class="fa-brands fa-whatsapp"></i>
            </span>
            <span class="whatsapp-text">
              <strong>Chat on WhatsApp</strong>
              <small>Quick Support</small>
            </span>
          </a>

          <a href="contact.html" class="quote-btn">
            <i class="fa-regular fa-file-lines"></i>
            <span>Get a Free Quote</span>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <button class="menu-toggle" id="menuToggle"
                type="button"
                aria-label="Toggle navigation"
                aria-expanded="false"
                aria-controls="navLinks">
          <i class="fa-solid fa-bars"></i>
        </button>

      </div>
    </header>
  `;

  const container = document.getElementById("site-header");
  if (!container) return;

  container.innerHTML = headerHTML;

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const navbar = document.getElementById("mainNavbar");

  // Active navigation link
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === (["residentaial.html", "commercial.html", "industrial.html", "infrastructure.html"].includes(currentPage) ? "service.html" : currentPage)) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  // Mobile menu
  menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.querySelector("i").className =
      isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.querySelector("i").className = "fa-solid fa-bars";
    });
  });

  // Sticky navbar shadow
  function handleScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  function closeMenu() {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.querySelector("i").className = "fa-solid fa-bars";
  }

  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    const menuWasOpen = navLinks.classList.contains("open");
    closeMenu();
    if (menuWasOpen) menuToggle.focus();
  });

  document.addEventListener("click", event => {
    if (!navbar.contains(event.target)) closeMenu();
  });
});
