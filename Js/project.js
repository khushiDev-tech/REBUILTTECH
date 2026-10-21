
/* =========================================================
   REBUILT TECHZ - PROJECTS PAGE JAVASCRIPT
   File: js/project.js

   01. Project Data
   02. Helper Functions
   03. Image & Logo Fallback
   04. Original Front Card
   05. Services Back Card
   06. 3D Flip Functionality
   07. Render Project Cards
   08. Hero Reveal Animation
   09. Card Reveal Animation
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =====================================================
     SECTION 01: PROJECT DATA ARRAY
  ===================================================== */

  const projects = [

    /* PROJECT 01 */
    {
      name: "CKS Medicare Pvt Ltd",
      category: "Healthcare",
      icon: "fa-hospital",
      image: "img/cks.png",
      logo: "img/cks-logo.png",
      description:
        "Reliable electrical infrastructure solutions supporting safe and efficient healthcare facilities.",
      services: [
        "Electrical Installation",
        "Power Distribution",
        "Electrical Maintenance",
        "Testing & Commissioning"
      ],
      link: ""
    },

    /* PROJECT 02 */
    {
      name: "Pink Pearl Hotel",
      category: "Hospitality",
      icon: "fa-hotel",
      image: "img/pinkPearl.png",
      logo: "img/pink-logo.png",
      description:
        "Modern electrical solutions designed to support dependable hospitality operations and guest comfort.",
      services: [
        "Electrical Installation",
        "Lighting Solutions",
        "Power Distribution",
        "Electrical Maintenance"
      ],
      link: ""
    },

    /* PROJECT 03 */
    {
      name: "Chokhi Dhani the Palace Hotel",
      category: "Hospitality",
      icon: "fa-hotel",
      image: "img/chokhiDhani.png",
      logo: "img/chokhiDhani-logo.png",
      description:
        "Efficient electrical infrastructure solutions for safe and reliable hospitality environments.",
      services: [
        "Electrical Infrastructure",
        "Indoor & Outdoor Lighting",
        "Power Distribution",
        "Testing & Commissioning"
      ],
      link: ""
    },

    /* PROJECT 04 */
    {
      name: "Swastik Electrotch Pvt Ltd",
      category: "Industrial",
      icon: "fa-industry",
      image: "",
      logo: "",
      description:
        "Electrical engineering solutions supporting efficient industrial infrastructure and daily operations.",
      services: [
        "Industrial Electrical Installation",
        "Power Distribution Systems",
        "Cable Laying & Termination",
        "Electrical Maintenance"
      ],
      link: ""
    },

    /* PROJECT 05 */
    {
      name: "JNU Hospital",
      category: "Healthcare",
      icon: "fa-hospital",
      image: "",
      logo: "",
      description:
        "Reliable electrical solutions designed to support safe and dependable healthcare infrastructure.",
      services: [
        "Electrical Installation",
        "Power Distribution",
        "Emergency Power Systems",
        "Testing & Commissioning"
      ],
      link: ""
    },

    /* PROJECT 06 */
    {
      name: "The LNMIIT",
      category: "Education",
      icon: "fa-graduation-cap",
      image: "img/lnmiit-bg.png",
      logo: "img/lnmiit.png",
      description:
        "Electrical engineering solutions supporting safe, efficient and reliable educational infrastructure.",
      services: [
        "Campus Electrical Infrastructure",
        "Lighting Installation",
        "Power Distribution",
        "Electrical Maintenance"
      ],
      link: ""
    },

    /* PROJECT 07 */
    {
      name: "IITJ (Jodhpur)",
      category: "Education",
      icon: "fa-graduation-cap",
      image: "",
      logo: "",
      description:
        "Dependable electrical infrastructure solutions supporting modern educational and research facilities.",
      services: [
        "Institutional Electrical Works",
        "Power Distribution",
        "Cable Laying & Termination",
        "Testing & Commissioning"
      ],
      link: ""
    },

    /* PROJECT 08 */
    {
      name: "The TCS Centers",
      category: "Corporate",
      icon: "fa-building",
      image: "",
      logo: "",
      description:
        "Efficient electrical infrastructure solutions for reliable corporate facilities and operations.",
      services: [
        "Commercial Electrical Installation",
        "Office Lighting Systems",
        "Power Distribution",
        "Electrical Maintenance"
      ],
      link: ""
    },

    /* PROJECT 09 */
    {
      name: "L&T",
      category: "Engineering",
      icon: "fa-gears",
      image: "",
      logo: "",
      description:
        "Electrical engineering solutions supporting industrial development and infrastructure requirements.",
      services: [
        "Electrical Engineering Works",
        "Industrial Power Distribution",
        "Cable Installation",
        "Testing & Commissioning"
      ],
      link: ""
    },

    /* PROJECT 10 */
    {
      name: "CISF",
      category: "Government",
      icon: "fa-shield-halved",
      image: "img/cisf.png",
      logo: "img/cisf-logo.png",
      description:
        "Dependable electrical infrastructure solutions supporting essential government facilities.",
      services: [
        "Government Building Electrical Works",
        "Lighting Installation",
        "Power Distribution",
        "Electrical Maintenance"
      ],
      link: ""
    },

    /* PROJECT 11 */
    {
      name: "PWD",
      category: "Government",
      icon: "fa-landmark",
      image: "img/pwd-bg.png",
      logo: "img/pwd.png",
      description:
        "Electrical infrastructure solutions designed for efficient and reliable public facilities.",
      services: [
        "Public Infrastructure Electrical Works",
        "Electrical Installation",
        "Power Distribution",
        "Testing & Commissioning"
      ],
      link: ""
    },

    /* PROJECT 12 */
    {
      name: "CPWD",
      category: "Government",
      icon: "fa-landmark",
      image: "img/cpwd-bg.png",
      logo: "img/cpwd.png",
      description:
        "Electrical infrastructure solutions supporting reliable power distribution and government facilities.",
      services: [
        "Government Electrical Infrastructure",
        "Building Electrical Installation",
        "Lighting Systems",
        "Electrical Maintenance"
      ],
      link: ""
    },

    /* PROJECT 13 */
    {
      name: "Canara Bank",
      category: "Banking",
      icon: "fa-building-columns",
      image: "img/canara.png",
      logo: "img/c-logo.png",
      description:
        "Reliable electrical solutions supporting safe and efficient banking infrastructure.",
      services: [
        "Commercial Electrical Installation",
        "Lighting Solutions",
        "Power Distribution",
        "Electrical Maintenance"
      ],
      link: ""
    },

    /* PROJECT 14 */
    {
      name: "Alkem Laboratories Ltd",
      category: "Pharmaceuticals",
      icon: "fa-flask",
      image: "img/alkem.png",
      logo: "img/alkem-logo.png",
      description:
        "Electrical engineering solutions supporting dependable pharmaceutical facility operations.",
      services: [
        "Industrial Electrical Installation",
        "Power Distribution Systems",
        "Cable Laying & Termination",
        "Testing & Commissioning"
      ],
      link: ""
    },

    /* PROJECT 15 */
    {
      name: "Barala Hospital",
      category: "Healthcare",
      icon: "fa-hospital",
      image: "img/barala.png",
      logo: "img/barala-logo.png",
      description:
        "Safe and reliable electrical infrastructure solutions supporting modern healthcare environments.",
      services: [
        "Hospital Electrical Installation",
        "Power Distribution",
        "Emergency Lighting",
        "Electrical Maintenance"
      ],
      link: ""
    }

  ];


  /* =====================================================
     SECTION 02: GET PROJECT GRID
  ===================================================== */

  const portfolioGrid = document.getElementById(
    "portfolioGrid"
  );

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


  /* =====================================================
     SECTION 03: HELPER FUNCTIONS
  ===================================================== */

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


  function createIcon(iconName) {

    const icon = document.createElement("i");

    icon.className = `fa-solid ${iconName}`;

    icon.setAttribute("aria-hidden", "true");

    return icon;
  }


  /* =====================================================
     SECTION 04: IMAGE & LOGO FALLBACK
  ===================================================== */

  function createImageFallback(project) {

    const fallback = createElement(
      "div",
      "portfolio-image-fallback"
    );

    fallback.appendChild(
      createIcon(project.icon)
    );

    return fallback;
  }


  function createLogoFallback(project) {

    const fallback = createElement(
      "div",
      "portfolio-logo-fallback"
    );

    fallback.appendChild(
      createIcon(project.icon)
    );

    return fallback;
  }


  /* =====================================================
     SECTION 05: CREATE PROJECT CARD
  ===================================================== */

  function createProjectCard(project, index) {

    /* -----------------------------------------
       MAIN CARD
    ----------------------------------------- */

    const card = createElement(
      "article",
      "portfolio-card"
    );

    const flipInner = createElement(
      "div",
      "portfolio-flip-inner"
    );


    /* =========================================
       FRONT SIDE - ORIGINAL DESIGN
    ========================================= */

    const front = createElement(
      "div",
      "portfolio-front"
    );


    /* PROJECT IMAGE */

    const imageBox = createElement(
      "div",
      "portfolio-image"
    );

    if (project.image) {

      const image = document.createElement("img");

      image.src = project.image;
      image.alt = project.name + " Project";
      image.loading = "lazy";
      image.decoding = "async";

      image.addEventListener(
        "error",
        function () {

          image.replaceWith(
            createImageFallback(project)
          );

        },
        { once: true }
      );

      imageBox.appendChild(image);

    } else {

      imageBox.appendChild(
        createImageFallback(project)
      );

    }


    /* CATEGORY BADGE */

    const categoryBadge = createElement(
      "span",
      "portfolio-category",
      project.category
    );

    imageBox.appendChild(categoryBadge);


    /* COMPANY LOGO */

    const logoBox = createElement(
      "div",
      "portfolio-logo"
    );

    if (project.logo) {

      const logoImage = document.createElement("img");

      logoImage.src = project.logo;
      logoImage.alt = project.name + " Logo";
      logoImage.loading = "lazy";
      logoImage.decoding = "async";

      logoImage.addEventListener(
        "error",
        function () {

          logoImage.replaceWith(
            createLogoFallback(project)
          );

        },
        { once: true }
      );

      logoBox.appendChild(logoImage);

    } else {

      logoBox.appendChild(
        createLogoFallback(project)
      );

    }


    /* PROJECT CONTENT */

    const content = createElement(
      "div",
      "portfolio-content"
    );


    /* PROJECT TITLE */

    const title = createElement(
      "h3",
      "portfolio-title",
      project.name
    );


    /* PROJECT CATEGORY */

    const sectorText = createElement(
      "p",
      "portfolio-subtitle",
      project.category
    );


    /* PROJECT DESCRIPTION */

    const description = createElement(
      "p",
      "portfolio-description",
      project.description
    );


    /* CARD FOOTER */

    const footer = createElement(
      "div",
      "portfolio-footer"
    );


    /* VIEW PROJECT TEXT */

    const viewProject = createElement(
      "span",
      "portfolio-view-text",
      "View Project"
    );


    /* ARROW */

    const arrow = createElement(
      "span",
      "portfolio-arrow"
    );

    arrow.appendChild(
      createIcon("fa-arrow-right")
    );

    arrow.setAttribute(
      "aria-hidden",
      "true"
    );


    /* LINK / FLIP BUTTON */

    let projectAction;

    if (project.link) {

      projectAction = createElement(
        "a",
        "portfolio-project-link"
      );

      projectAction.href = project.link;

      projectAction.setAttribute(
        "aria-label",
        "View " + project.name + " project"
      );

    } else {

      projectAction = createElement(
        "button",
        "portfolio-project-link portfolio-flip-button"
      );

      projectAction.type = "button";

      projectAction.setAttribute(
        "aria-label",
        "View services for " + project.name
      );

      projectAction.setAttribute(
        "aria-pressed",
        "false"
      );

    }

    projectAction.append(
      viewProject,
      arrow
    );

    footer.appendChild(projectAction);


    /* COMPLETE FRONT CONTENT */

    content.append(
      title,
      sectorText,
      description,
      footer
    );

    front.append(
      imageBox,
      logoBox,
      content
    );


    /* =========================================
       BACK SIDE - SERVICES PROVIDED
    ========================================= */

    const back = createElement(
      "div",
      "portfolio-back"
    );

    const backContent = createElement(
      "div",
      "portfolio-back-content"
    );


    /* SERVICE ICON */

 
/* =========================================
   BACK SIDE - COMPANY LOGO
========================================= */

const backIcon = createElement(
  "div",
  "portfolio-back-icon"
);

if (project.logo) {

  const backLogo = document.createElement("img");

  backLogo.src = project.logo;
  backLogo.alt = project.name + " Logo";
  backLogo.loading = "lazy";
  backLogo.decoding = "async";

  backLogo.addEventListener(
    "error",
    function () {
      backLogo.replaceWith(
        createLogoFallback(project)
      );
    },
    { once: true }
  );

  backIcon.appendChild(backLogo);

} else {

  backIcon.appendChild(
    createLogoFallback(project)
  );

}



    /* SERVICE LABEL */

    const backLabel = createElement(
      "span",
      "portfolio-back-label",
      "SERVICES PROVIDED"
    );


    /* CLIENT NAME */

    const backTitle = createElement(
      "h3",
      "portfolio-back-title",
      project.name
    );


    /* ORANGE LINE */

    const backLine = createElement(
      "span",
      "portfolio-back-line"
    );


    /* SERVICES LIST */

    const servicesList = createElement(
      "ul",
      "portfolio-back-services"
    );

    project.services.forEach(function (service) {

      const serviceItem = createElement(
        "li",
        "portfolio-back-service"
      );

      const checkIcon = createIcon(
        "fa-circle-check"
      );

      const serviceText = createElement(
        "span",
        "",
        service
      );

      serviceItem.append(
        checkIcon,
        serviceText
      );

      servicesList.appendChild(
        serviceItem
      );

    });


    /* BACK BUTTON */

    const backButton = createElement(
      "button",
      "portfolio-back-button",
      "Back to Project"
    );

    backButton.type = "button";


    /* COMPLETE BACK */

    backContent.append(
      backIcon,
      backLabel,
      backTitle,
      backLine,
      servicesList,
      backButton
    );

    back.appendChild(backContent);


    /* =========================================
       FLIP FUNCTIONALITY
    ========================================= */

    function setFlipped(isFlipped) {

      card.classList.toggle(
        "is-flipped",
        isFlipped
      );

      front.inert = isFlipped;
      back.inert = !isFlipped;

      if (
        projectAction.tagName === "BUTTON"
      ) {

        projectAction.setAttribute(
          "aria-pressed",
          String(isFlipped)
        );

      }

    }


    setFlipped(false);


    /* MOBILE / BUTTON FLIP */

    if (
      projectAction.tagName === "BUTTON"
    ) {

      projectAction.addEventListener(
        "click",
        function () {

          setFlipped(true);

          backButton.focus({
            preventScroll: true
          });

        }
      );

    }


    /* BACK BUTTON */

    backButton.addEventListener(
      "click",
      function () {

        setFlipped(false);

        if (
          projectAction.tagName === "BUTTON"
        ) {

          projectAction.focus({
            preventScroll: true
          });

        }

      }
    );


    /* RESET WHEN MOUSE LEAVES */

    card.addEventListener(
      "mouseleave",
      function () {

        if (
          window.matchMedia(
            "(hover: hover)"
          ).matches
        ) {

          setFlipped(false);

        }

      }
    );


    /* ESC KEY */

    card.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key === "Escape" &&
          card.classList.contains("is-flipped")
        ) {

          setFlipped(false);

        }

      }
    );


    /* COMPLETE CARD */

    flipInner.append(
      front,
      back
    );

    card.appendChild(
      flipInner
    );

    return card;

  }


  /* =====================================================
     SECTION 06: RENDER ALL 15 PROJECT CARDS
  ===================================================== */

  if (portfolioGrid) {

    const fragment = document.createDocumentFragment();

    projects.forEach(function (
      project,
      index
    ) {

      const card = createProjectCard(
        project,
        index
      );

      fragment.appendChild(card);

    });

    portfolioGrid.replaceChildren(
      fragment
    );

  }


  /* =====================================================
     SECTION 07: HERO REVEAL ANIMATION
  ===================================================== */

  const heroElements = document.querySelectorAll(
    ".hero-reveal"
  );

  heroElements.forEach(function (
    element,
    index
  ) {

    if (prefersReducedMotion) {

      element.classList.add(
        "active"
      );

      return;
    }

    setTimeout(function () {

      element.classList.add(
        "active"
      );

    }, 120 * index);

  });


  /* =====================================================
     SECTION 08: PROJECT CARD REVEAL ANIMATION
  ===================================================== */

  const projectCards = document.querySelectorAll(
    ".portfolio-card"
  );

  if (
    "IntersectionObserver" in window &&
    !prefersReducedMotion
  ) {

    projectCards.forEach(function (card) {

      card.classList.add(
        "portfolio-reveal"
      );

    });


    const observer = new IntersectionObserver(

      function (entries) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "portfolio-visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },

      {
        threshold: 0.1,
        rootMargin: "0px 0px 40px 0px"
      }

    );


    projectCards.forEach(function (card) {

      observer.observe(card);

    });

  } else {

    projectCards.forEach(function (card) {

      card.classList.add(
        "portfolio-visible"
      );

    });

  }

});
