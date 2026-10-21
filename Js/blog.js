
/* ==========================================================
   REBUILT TECHZ - BLOG PAGE JAVASCRIPT

   01. Blog Data Array
   02. Dynamic Blog Cards
   03. Hero Animation
   04. Scroll Reveal Animation
   05. Newsletter Validation

   Header and Footer JS are separate.
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ========================================================
     01. BLOG DATA ARRAY
  ======================================================== */

  const blogs = [
    {
      "id": 1,
      "image": "Power-Systems.png",
      "date": "25 Sep 2026",
      "category": "Industry Trends",
      "title": "The Future of Power Distribution in India: Key Trends to Watch",
      "description": "India’s power sector is entering a new era. With rising demand from industries, smart cities, and households, the way electricity is distributed will define the nation’s growth story....",
      "link": "blog-power-distribution.html"
    },
    {
      "id": 2,
      "image": "Earthing-Protection.png",
      "date": "18 Sep 2026",
      "category": "Safety & Compliance",
      "title": "Top 10 Electrical Safety Practices for Industrial Sites",
      "description": "Electrical safety isn’t just a checklist — it’s the foundation of every successful industrial operation. In high-power environments, even a minor oversight can lead to serious hazards....",
      "link": "blog-electrical-safety.html"
    },
    {
      "id": 3,
      "image": "electrical-panel.png",
      "date": "12 Sep 2026",
      "category": "Substation & Transmission",
      "title": "Understanding Substation Components and Their Role",
      "description": "Modern industries depend on substations to deliver stable, efficient, and safe electrical power. A wellengineered substation is not just a collection of equipment — it’s a coordinated...",
      "link": "blog-substation-components.html"
    },
    {
      "id": 4,
      "image": "Electrical-Infrastructure.png",
      "date": "08 Sep 2026",
      "category": "Electrical Solutions",
      "title": "Renewable Energy Integration: Opportunities & Challenges",
      "description": "India’s energy landscape is shifting rapidly toward sustainability. As industries and utilities embrace solar, wind, and hybrid systems, renewable integration has become both a technical...",
      "link": "blog-renewable-energy.html"
    },
    {
      "id": 5,
      "image": "electrical-panel.png",
      "date": "03 Sep 2026",
      "category": "Tips & Guides",
      "title": "A Beginner’s Guide to Electrical Panel Maintenance",
      "description": "Electrical panels are the nerve center of any industrial or commercial facility. They distribute power, protect circuits, and ensure smooth operation. Proper maintenance isn’t just about...",
      "link": "blog-panel-maintenance.html"
    },
    {
      "id": 6,
      "image": "Lighting-Solutions.png",
      "date": "28 Aug 2026",
      "category": "Project Insights",
      "title": "How to Choose the Right Electrical Partner for Your Project",
      "description": "Selecting the right electrical partner can make or break your project’s success. Whether you’re building an industrial facility, upgrading infrastructure, or integrating renewable...",
      "link": "blog-electrical-partner.html"
    }
  ];


  /* ========================================================
     02. DYNAMIC BLOG CARDS RENDERING
  ======================================================== */

  const blogGrid = document.getElementById(
    "latestBlogsGrid"
  );

  function renderBlogs() {

    if (!blogGrid) return;

    blogGrid.innerHTML = "";

    const fragment = document.createDocumentFragment();

    blogs.forEach((blog) => {

      /* CREATE CARD */

      const card = document.createElement("article");

      card.className = "latest-blog-card";

      card.setAttribute(
        "aria-labelledby",
        `blog-title-${blog.id}`
      );


      /* IMAGE WRAPPER */

      const imageWrapper = document.createElement("div");

      imageWrapper.className = "latest-blog-image";


      /* BLOG IMAGE */

      const image = document.createElement("img");

      image.src = `img/${blog.image}`;
      image.alt = blog.title;
      image.loading = "lazy";
      image.decoding = "async";


      /* IMAGE ERROR HANDLING */

      image.addEventListener("error", () => {

        image.style.display = "none";

        imageWrapper.style.background =
          "linear-gradient(135deg, #082d63, #061f47)";

      });


      /* DATE BADGE */

      const date = document.createElement("span");

      date.className = "latest-blog-date";

      date.textContent = blog.date;


      imageWrapper.appendChild(image);
      imageWrapper.appendChild(date);


      /* CONTENT WRAPPER */

      const content = document.createElement("div");

      content.className = "latest-blog-content";


      /* CATEGORY */

      const category = document.createElement("span");

      category.className = "latest-blog-category";

      category.textContent = blog.category;


      /* TITLE */

      const title = document.createElement("h3");

      title.id = `blog-title-${blog.id}`;

      title.textContent = blog.title;


      /* DESCRIPTION */

      const description = document.createElement("p");

      description.textContent = blog.description;


      /* READ MORE */

      const readMore = document.createElement("a");

      readMore.className = "latest-blog-readmore";

      if (blog.link) {

        readMore.href = blog.link;

        readMore.setAttribute(
          "aria-label",
          `Read more about ${blog.title}`
        );

        readMore.innerHTML = `
          <span>Read More</span>
          <i
            class="fa-solid fa-arrow-right"
            aria-hidden="true"
          ></i>
        `;

      } else {

        // Article link not available yet

        readMore.removeAttribute("href");

        readMore.setAttribute(
          "aria-disabled",
          "true"
        );

        readMore.title = "Full article coming soon";

        readMore.style.cursor = "default";

        readMore.innerHTML = `
          <span>Coming Soon</span>
          <i
            class="fa-regular fa-clock"
            aria-hidden="true"
          ></i>
        `;

      }


      /* APPEND CONTENT */

      content.appendChild(category);
      content.appendChild(title);
      content.appendChild(description);
      content.appendChild(readMore);


      /* APPEND CARD */

      card.appendChild(imageWrapper);
      card.appendChild(content);

      fragment.appendChild(card);

    });

    blogGrid.appendChild(fragment);

  }


  /* ========================================================
     03. HERO ANIMATION
  ======================================================== */

  function initHeroAnimation() {

    const heroContent = document.querySelector(
      ".blog-hero .hero-content"
    );

    if (!heroContent) return;

    requestAnimationFrame(() => {

      heroContent.classList.add("visible");

    });

  }


  /* ========================================================
     04. BLOG CARDS SCROLL ANIMATION
  ======================================================== */

  function initBlogAnimations() {

    const cards = document.querySelectorAll(
      ".latest-blog-card"
    );

    if (!cards.length) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


    /* SHOW WITHOUT ANIMATION */

    if (
      reducedMotion ||
      !("IntersectionObserver" in window)
    ) {

      cards.forEach((card) => {

        card.classList.add("is-visible");

      });

      return;

    }


    /* SCROLL OBSERVER */

    const observer = new IntersectionObserver(

      (entries, currentObserver) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "is-visible"
            );

            currentObserver.unobserve(
              entry.target
            );

          }

        });

      },

      {
        threshold: 0.12,
        rootMargin: "0px 0px 40px 0px"
      }

    );


    cards.forEach((card) => {

      observer.observe(card);

    });

  }


  /* ========================================================
     05. BLOG NEWSLETTER VALIDATION
  ======================================================== */

  function initBlogNewsletter() {

    const form = document.getElementById(
      "blogNewsletterForm"
    );

    const emailInput = document.getElementById(
      "blogNewsletterEmail"
    );

    const message = document.getElementById(
      "blogNewsletterMessage"
    );

    if (!form || !emailInput || !message) return;


    /* FORM SUBMIT */

    form.addEventListener("submit", (event) => {

      event.preventDefault();

      const email = emailInput.value.trim();

      message.textContent = "";


      /* EMPTY EMAIL */

      if (!email) {

        message.textContent =
          "Please enter your email address.";

        emailInput.focus();

        return;

      }


      /* INVALID EMAIL */

      if (!emailInput.checkValidity()) {

        message.textContent =
          "Please enter a valid email address.";

        emailInput.focus();

        return;

      }


      /* BACKEND NOT CONNECTED */

      message.textContent =
        "Newsletter subscription is not available yet. Please check back soon.";

      // Add newsletter API integration here.
      // Show success only after backend confirmation.

    });


    /* CLEAR MESSAGE WHILE TYPING */

    emailInput.addEventListener("input", () => {

      message.textContent = "";

    });

  }


  /* ========================================================
     06. INITIALIZE BLOG PAGE
  ======================================================== */

  renderBlogs();

  initHeroAnimation();

  initBlogAnimations();

  initBlogNewsletter();

});
