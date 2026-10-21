
/* ==========================================================
   REBUILT TECHZ - SERVICES PAGE JAVASCRIPT

   01. Services Data
   02. Why Choose Us Data
   03. Working Process Data
   04. Industries Data
   05. Dynamic Rendering
   06. Hero Animation
   07. Scroll Reveal Animation

   Header and Footer JS are separate.
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ========================================================
     01. SERVICES DATA ARRAY
  ======================================================== */

  const services = [
    {
      id: 1,
      title: "Electrical Panels",
      image: "img/electrical-panel.png",
      icon: "fa-solid fa-sliders",
      description:
        "LT Panels, DG Automation Panels, APFC Panels, Timer Panels and Feeder Panels.",
      link: "contact.html"
    },
    {
      id: 2,
      title: "Electrical Infrastructure",
      image: "img/Electrical-Infrastructure.png",
      icon: "fa-solid fa-bolt",
      description:
        "Electrical cabling, cable tray installation, conduiting and professional wiring systems.",
      link: "contact.html"
    },
    {
      id: 3,
      title: "Earthing & Protection",
      image: "img/Earthing-Protection.png",
      icon: "fa-solid fa-shield-halved",
      description:
        "Reliable earthing systems and lightning arrestor installation for electrical safety.",
      link: "contact.html"
    },
    {
      id: 4,
      title: "Lighting Solutions",
      image: "img/Lighting-Solutions.png",
      icon: "fa-solid fa-lightbulb",
      description:
        "Pole lights, bollard lights, pathway lighting and high mast lighting solutions.",
      link: "contact.html"
    },
    {
      id: 5,
      title: "Power Systems",
      image: "img/Power-Systems.png",
      icon: "fa-solid fa-plug-circle-bolt",
      description:
        "Transformer installation and maintenance, HT/LT services and electrical testing.",
      link: "contact.html"
    },
    {
      id: 6,
      title: "EV Charger",
      image: "img/EV-charger.png",
      icon: "fa-solid fa-charging-station",
      description:
        "EV charging infrastructure installation, charger setup, electrical connections and safety checks.",
      link: "contact.html"
    }
  ];


  /* ========================================================
     02. WHY CHOOSE US DATA ARRAY
  ======================================================== */

  const advantages = [
    {
      id: 1,
      title: "Experienced Professionals",
      icon: "fa-solid fa-users",
      description:
        "Skilled and experienced electrical engineers and technicians."
    },
    {
      id: 2,
      title: "Safety First",
      icon: "fa-solid fa-shield-halved",
      description:
        "Strict adherence to safety standards, compliance and industry best practices."
    },
    {
      id: 3,
      title: "Modern Tools & Equipment",
      icon: "fa-solid fa-gears",
      description:
        "Modern tools and quality resources for reliable and efficient project execution."
    },
    {
      id: 4,
      title: "Timely Execution",
      icon: "fa-solid fa-clock",
      description:
        "Efficient and on-time project delivery without compromising quality."
    }
  ];


  /* ========================================================
     03. WORKING PROCESS DATA ARRAY
  ======================================================== */

  const processSteps = [
    {
      number: "01",
      title: "Requirement Analysis",
      icon: "fa-solid fa-comments",
      description:
        "Understand client requirements and site conditions."
    },
    {
      number: "02",
      title: "Strategy Planning",
      icon: "fa-solid fa-file-lines",
      description:
        "Detailed planning, layouts and workflow scheduling."
    },
    {
      number: "03",
      title: "Resource Allocation",
      icon: "fa-solid fa-gears",
      description:
        "Skilled professionals, quality materials and modern tools."
    },
    {
      number: "04",
      title: "Execution & Implementation",
      icon: "fa-solid fa-user-gear",
      description:
        "Professional execution with safety and quality compliance."
    },
    {
      number: "05",
      title: "Quality Check & Delivery",
      icon: "fa-solid fa-clipboard-check",
      description:
        "Final inspection, testing and successful project delivery."
    }
  ];


  /* ========================================================
     04. INDUSTRIES DATA ARRAY
  ======================================================== */

  const industries = [
    {
      id: 1,
      title: "Residential",
      link: "residentaial.html",
      image: "img/residential.png",
      icon: "fa-solid fa-house"
    },
    {
      id: 2,
      title: "Commercial",
      link: "commercial.html",
      image: "img/commercials.png",
      icon: "fa-solid fa-building"
    },
    {
      id: 3,
      title: "Industrial",
      link: "industrial.html",
      image: "img/industrials.png",
      icon: "fa-solid fa-industry"
    },
    {
      id: 4,
      title: "Infrastructure",
      link: "infrastructure.html",
      image: "img/infrastructure.png",
      icon: "fa-solid fa-road-bridge"
    }
  ];


  /* ========================================================
     05. HELPER FUNCTIONS
  ======================================================== */

  function createElement(tag, className, text) {

    const element = document.createElement(tag);

    if (className) {
      element.className = className;
    }

    if (text !== undefined) {
      element.textContent = text;
    }

    return element;
  }


  function createIcon(iconClass) {

    const icon = document.createElement("i");

    icon.className = iconClass;

    icon.setAttribute("aria-hidden", "true");

    return icon;
  }


  function createImage(filename, altText) {

    const image = document.createElement("img");

    image.src = filename;

    image.alt = altText;

    image.loading = "lazy";

    image.decoding = "async";

    image.addEventListener("error", () => {

      image.style.visibility = "hidden";

      if (image.parentElement) {

        image.parentElement.style.backgroundColor =
          "#082d63";

      }

    });

    return image;
  }


  /* ========================================================
     06. RENDER SERVICES CARDS
  ======================================================== */

  function renderServices() {

    const grid = document.getElementById("servicesGrid");

    if (!grid) return;

    const fragment = document.createDocumentFragment();

    services.forEach((service) => {

      const card = createElement(
        "article",
        "service-card"
      );

      /* IMAGE */

      const imageWrapper = createElement(
        "div",
        "service-image"
      );

      const image = createImage(
        service.image,
        service.title
      );

      /* ICON */

      const iconWrapper = createElement(
        "div",
        "service-icon"
      );

      iconWrapper.appendChild(
        createIcon(service.icon)
      );

      imageWrapper.appendChild(image);
      imageWrapper.appendChild(iconWrapper);

      /* CONTENT */

      const content = createElement(
        "div",
        "service-content"
      );

      const title = createElement(
        "h3",
        "",
        service.title
      );

      const description = createElement(
        "p",
        "",
        service.description
      );

      const link = createElement(
        "a",
        "",
        "Learn More"
      );

      link.href = service.link;

      link.setAttribute(
        "aria-label",
        `Enquire about ${service.title}`
      );

      link.appendChild(
        createIcon("fa-solid fa-arrow-right")
      );

      content.appendChild(title);
      content.appendChild(description);
      content.appendChild(link);

      card.appendChild(imageWrapper);
      card.appendChild(content);

      fragment.appendChild(card);

    });

    grid.replaceChildren(fragment);
  }


  /* ========================================================
     07. RENDER WHY CHOOSE US CARDS
  ======================================================== */

  function renderAdvantages() {

    const grid = document.getElementById("whyGrid");

    if (!grid) return;

    const fragment = document.createDocumentFragment();

    advantages.forEach((advantage) => {

      const card = createElement(
        "article",
        "why-card"
      );

      const iconWrapper = createElement(
        "div",
        "why-icon"
      );

      iconWrapper.appendChild(
        createIcon(advantage.icon)
      );

      const title = createElement(
        "h3",
        "",
        advantage.title
      );

      const description = createElement(
        "p",
        "",
        advantage.description
      );

      card.appendChild(iconWrapper);
      card.appendChild(title);
      card.appendChild(description);

      fragment.appendChild(card);

    });

    grid.replaceChildren(fragment);
  }


  /* ========================================================
     08. RENDER WORKING PROCESS
  ======================================================== */

  function renderProcess() {

    const wrapper = document.getElementById(
      "processWrapper"
    );

    if (!wrapper) return;

    const fragment = document.createDocumentFragment();

    processSteps.forEach((step) => {

      const card = createElement(
        "div",
        "process-step"
      );

      const iconWrap = createElement(
        "div",
        "process-icon-wrap"
      );

      const number = createElement(
        "div",
        "step-number",
        step.number
      );

      const iconBox = createElement(
        "div",
        "process-icon"
      );

      iconBox.appendChild(
        createIcon(step.icon)
      );

      iconWrap.appendChild(number);
      iconWrap.appendChild(iconBox);

      const title = createElement(
        "h3",
        "",
        step.title
      );

      const description = createElement(
        "p",
        "",
        step.description
      );

      card.appendChild(iconWrap);
      card.appendChild(title);
      card.appendChild(description);

      fragment.appendChild(card);

    });

    wrapper.replaceChildren(fragment);
  }


  /* ========================================================
     09. RENDER INDUSTRIES CARDS
  ======================================================== */

  function renderIndustries() {

    const grid = document.getElementById(
      "industriesGrid"
    );

    if (!grid) return;

    const fragment = document.createDocumentFragment();

    industries.forEach((industry) => {

      const card = createElement(
        industry.link ? "a" : "div",
        "industry-card"
      );
      if (industry.link) {
        card.href = industry.link;
        card.setAttribute("aria-label", "Explore " + industry.title + " electrical services");
      }

      const image = createImage(
        industry.image,
        `${industry.title} Electrical Solutions`
      );

      const overlay = createElement(
        "div",
        "industry-overlay"
      );

      const content = createElement(
        "div",
        "industry-content"
      );

      const iconWrapper = createElement(
        "div",
        "industry-icon"
      );

      iconWrapper.appendChild(
        createIcon(industry.icon)
      );

      const title = createElement(
        "h3",
        "",
        industry.title
      );

      content.appendChild(iconWrapper);
      content.appendChild(title);

      card.appendChild(image);
      card.appendChild(overlay);
      card.appendChild(content);

      fragment.appendChild(card);

    });

    grid.replaceChildren(fragment);
  }


  /* ========================================================
     10. HERO ENTRANCE ANIMATION
  ======================================================== */

  function initHeroAnimation() {

    const elements = document.querySelectorAll(
      ".services-hero .hero-animate"
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    elements.forEach((element, index) => {

      if (reducedMotion) {

        element.classList.add("show");

        return;
      }

      setTimeout(() => {

        element.classList.add("show");

      }, index * 120);

    });
  }


  /* ========================================================
     11. SCROLL REVEAL ANIMATION
  ======================================================== */

  function initScrollReveal() {

    const elements = document.querySelectorAll(
      ".services-section .service-card, " +
      ".why-choose-section .why-card, " +
      ".work-process .process-step, " +
      ".industries-section .industry-card"
    );

    if (!elements.length) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reducedMotion ||
      !("IntersectionObserver" in window)
    ) {

      elements.forEach((element) => {

        element.classList.add("is-visible");

      });

      return;
    }

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
        threshold: 0.1,
        rootMargin: "0px 0px 30px 0px"
      }

    );

    elements.forEach((element) => {

      observer.observe(element);

    });
  }


  /* ========================================================
     12. INITIALIZE SERVICES PAGE
  ======================================================== */

  renderServices();

  renderAdvantages();

  renderProcess();

  renderIndustries();

  initHeroAnimation();

  initScrollReveal();

});
