
document.addEventListener("DOMContentLoaded", function () {

  // Automatic Hero Slider
  const slides = document.querySelectorAll(".hero-slide");
  let currentSlide = 0;

  if (slides.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(function () {
      slides[currentSlide].classList.remove("active");

      currentSlide = (currentSlide + 1) % slides.length;

      slides[currentSlide].classList.add("active");
    }, 5000);
  }


});




// about section js
document.addEventListener("DOMContentLoaded", function () {

  // ====================================
  // ABOUT IMAGE GALLERY
  // ====================================

  const mainImage = document.getElementById("aboutMainImg");
  const thumbnails = document.querySelectorAll(".about-thumb");

  if (mainImage && thumbnails.length > 0) {

    thumbnails.forEach(function (thumb) {

      thumb.addEventListener("click", function () {

        const newImage = thumb.getAttribute("data-img");

        if (!newImage || mainImage.getAttribute("src") === newImage) {
          return;
        }

        mainImage.classList.add("changing");

        const preloadImage = new Image();


        preloadImage.onload = function () {

          mainImage.src = newImage;
          mainImage.classList.remove("changing");

          thumbnails.forEach(function (item) {
            item.classList.remove("active");
            item.setAttribute("aria-pressed", "false");
          });

          thumb.classList.add("active");
          thumb.setAttribute("aria-pressed", "true");

        };

        preloadImage.onerror = function () {
          mainImage.classList.remove("changing");
        };

        preloadImage.src = newImage;

      });

    });

  }

  // ====================================
  // ABOUT SCROLL ANIMATION
  // ====================================

  const aboutSection = document.querySelector(".about-sec");

  if (
    aboutSection &&
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {

    aboutSection.classList.add("about-animate-ready");

    const observer = new IntersectionObserver(function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {
          aboutSection.classList.add("animate");
          observer.unobserve(aboutSection);
        }

      });

    }, {
      threshold: 0.1
    });

    observer.observe(aboutSection);

  }

});




// what we offer section js
document.addEventListener("DOMContentLoaded", function () {

  // ====================================
  // SERVICES DATA ARRAY
  // ====================================

  const services = [
    {
      title: "Electrical Panels",
      description:
        "LT panels, DG automation panels, APFC panels, timer panels and feeder panels for reliable electrical control and distribution.",
      icon: "fa-solid fa-sliders",
      image: "img/electrical-panel.png",
      link: "service.html"
    },
    {
      title: "Electrical Infrastructure",
      description:
        "Electrical cabling, cable tray installation, conduiting and wiring systems engineered for safe and efficient infrastructure.",
      icon: "fa-solid fa-bolt",
      image: "img/Electrical-Infrastructure.png",
      link: "service.html"
    },
    {
      title: "Earthing & Protection",
      description:
        "Earthing systems and lightning arrestor installations designed to improve electrical safety and system protection.",
      icon: "fa-solid fa-shield-halved",
      image: "img/Earthing-Protection.png",
      link: "service.html"
    },
    {
      title: "Lighting Solutions",
      description:
        "Pole lights, bollard lights, pathway lighting and high mast lighting for reliable outdoor and infrastructure illumination.",
      icon: "fa-solid fa-lightbulb",
      image: "img/Lighting-Solutions.png",
      link: "service.html"
    },
    {
      title: "Power Systems",
      description:
        "Transformer installation and maintenance, HT/LT electrical services and testing solutions for dependable power systems.",
      icon: "fa-solid fa-tower-broadcast",
      image: "img/Power-Systems.png",
      link: "service.html"
    },
    {
      title: "EV Charger",
      description:
        "Smart EV charging solutions designed for safe, reliable and efficient electric vehicle charging across residential and commercial spaces.",
      icon: "fa-solid fa-charging-station",
      image: "img/EV-charger.png",
      link: "service.html"
    }
  ];

  // ====================================
  // ONE REUSABLE SERVICE CARD
  // ====================================

  function createServiceCard(service) {

    const card = document.createElement("article");
    card.className = "service-card";

    card.style.setProperty(
      "--service-img",
      `url("${new URL(service.image, document.baseURI).href}")`
    );

    const iconBox = document.createElement("div");
    iconBox.className = "service-icon-box";

    const icon = document.createElement("i");
    icon.className = service.icon;
    icon.setAttribute("aria-hidden", "true");
    iconBox.appendChild(icon);

    const content = document.createElement("div");
    content.className = "service-card-content";

    const title = document.createElement("h3");
    title.textContent = service.title;

    const line = document.createElement("span");
    line.className = "service-line";

    const description = document.createElement("p");
    description.textContent = service.description;

    content.append(title, line, description);

    const link = document.createElement("a");
    link.className = "service-corner";
    link.href = service.link;
    link.setAttribute(
      "aria-label",
      `Explore ${service.title}`
    );

    const arrow = document.createElement("i");
    arrow.className = "fa-solid fa-arrow-right";
    arrow.setAttribute("aria-hidden", "true");
    link.appendChild(arrow);

    card.append(iconBox, content, link);

    return card;
  }

  // ====================================
  // RENDER ALL CARDS FROM ARRAY
  // ====================================

  const servicesGrid = document.getElementById("servicesGrid");

  if (!servicesGrid) return;

  const fragment = document.createDocumentFragment();

  services.forEach(function (service) {
    fragment.appendChild(createServiceCard(service));
  });

  servicesGrid.appendChild(fragment);

  // ====================================
  // SCROLL ANIMATION
  // ====================================

  const servicesSection = document.querySelector(".services-sec");

  if (
    servicesSection &&
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {

    servicesSection.classList.add("services-animate-ready");

    const observer = new IntersectionObserver(function (entries) {

      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          servicesSection.classList.add("animate");
          observer.unobserve(servicesSection);
        }
      });

    }, {
      threshold: 0.1
    });

    observer.observe(servicesSection);
  }

});


// WORK PROCESS
document.addEventListener("DOMContentLoaded", function () {

  // ====================================
  // WORK PROCESS DATA ARRAY
  // ====================================

  const processSteps = [
    {
      number: "01",
      title: "Book a Consultation",
      description:
        "Call, text, or book online. We’ll confirm your appointment and send a technician profile so you know exactly who’s coming.",
      icon: "fa-solid fa-headset",
      bottomIcon: "fa-regular fa-calendar-check"
    },
    {
      number: "02",
      title: "On-Site Assessment",
      description:
        "Our electrician evaluates your needs, checks current conditions, and answers all your questions before touching anything.",
      icon: "fa-solid fa-magnifying-glass",
      bottomIcon: "fa-solid fa-clipboard-check"
    },
    {
      number: "03",
      title: "Clear Written Quote",
      description:
        "You receive a detailed, itemized quote with no vague line items. You approve the price before any work begins.",
      icon: "fa-regular fa-file-lines",
      bottomIcon: "fa-solid fa-file-invoice-dollar"
    },
    {
      number: "04",
      title: "Complete & Inspect",
      description:
        "We complete the work, run full safety tests, clean up the site, and walk you through everything before we consider the job done.",
      icon: "fa-solid fa-shield-halved",
      bottomIcon: "fa-solid fa-user-check"
    }
  ];

  // ====================================
  // ONE REUSABLE PROCESS CARD
  // ====================================

  function createProcessCard(step, index, total) {

    const article = document.createElement("article");
    article.className = "process-item";

    // TOP ICON WRAPPER
    const iconWrap = document.createElement("div");
    iconWrap.className = "process-icon-wrap";

    const iconCircle = document.createElement("div");
    iconCircle.className = "process-icon";

    const mainIcon = document.createElement("i");
    mainIcon.className = step.icon;
    mainIcon.setAttribute("aria-hidden", "true");

    iconCircle.appendChild(mainIcon);
    iconWrap.appendChild(iconCircle);

    // CONNECTOR ARROW
    if (index < total - 1) {
      const arrow = document.createElement("span");
      arrow.className = "process-arrow";
      arrow.setAttribute("aria-hidden", "true");

      const arrowIcon = document.createElement("i");
      arrowIcon.className = "fa-solid fa-chevron-right";

      arrow.appendChild(arrowIcon);
      iconWrap.appendChild(arrow);
    }

    // PROCESS CARD
    const card = document.createElement("div");
    card.className = "process-card";

    const number = document.createElement("span");
    number.className = "process-number";
    number.textContent = step.number;

    const heading = document.createElement("h3");
    heading.textContent = step.title;

    const smallLine = document.createElement("span");
    smallLine.className = "process-small-line";

    const description = document.createElement("p");
    description.textContent = step.description;

    const bottomIconBox = document.createElement("div");
    bottomIconBox.className = "process-bottom-icon";

    const bottomIcon = document.createElement("i");
    bottomIcon.className = step.bottomIcon;
    bottomIcon.setAttribute("aria-hidden", "true");

    bottomIconBox.appendChild(bottomIcon);

    card.append(
      number,
      heading,
      smallLine,
      description,
      bottomIconBox
    );

    article.append(iconWrap, card);

    return article;
  }

  // ====================================
  // RENDER PROCESS CARDS
  // ====================================

  const processWrapper = document.getElementById("processWrapper");

  if (!processWrapper) return;

  const fragment = document.createDocumentFragment();

  processSteps.forEach(function (step, index) {
    fragment.appendChild(
      createProcessCard(step, index, processSteps.length)
    );
  });

  processWrapper.appendChild(fragment);

  // ====================================
  // SCROLL ANIMATION
  // ====================================

  const processSection = document.querySelector(".process-sec");

  if (
    processSection &&
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {

    processSection.classList.add("process-animate-ready");

    const observer = new IntersectionObserver(function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {
          processSection.classList.add("animate");
          observer.unobserve(processSection);
        }

      });

    }, {
      threshold: 0.1
    });

    observer.observe(processSection);
  }

});


// WHY CHOOSE US 





 // ====================================
  // CTA FEATURES ARRAY
  // ====================================


document.addEventListener("DOMContentLoaded", function () {

  // ====================================
  // CTA FEATURES ARRAY
  // ====================================

  const ctaFeatures = [
    {
      title: "Licensed & Insured",
      icon: "fa-solid fa-shield-halved"
    },
    {
      title: "Clear Communication",
      icon: "fa-regular fa-comments"
    },
    {
      title: "On-Time & Reliable",
      icon: "fa-regular fa-clock"
    }
  ];

  // ====================================
  // RENDER FEATURES
  // ====================================

  const featuresContainer =
    document.getElementById("parallaxFeatures");

  if (featuresContainer) {

    const fragment = document.createDocumentFragment();

    ctaFeatures.forEach(function (feature, index) {

      // Divider between features
      if (index > 0) {
        const divider = document.createElement("div");
        divider.className = "feature-divider";
        divider.setAttribute("aria-hidden", "true");
        fragment.appendChild(divider);
      }

      const featureBox = document.createElement("div");
      featureBox.className = "parallax-feature";

      const icon = document.createElement("i");
      icon.className = feature.icon;
      icon.setAttribute("aria-hidden", "true");

      const title = document.createElement("span");
      title.textContent = feature.title;

      featureBox.append(icon, title);
      fragment.appendChild(featureBox);

    });

    featuresContainer.appendChild(fragment);
  }

  // ====================================
  // CTA SCROLL ANIMATION
  // ====================================

  const ctaSection = document.querySelector(".parallax-cta");

  if (
    ctaSection &&
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {

    ctaSection.classList.add("cta-animate-ready");

    const observer = new IntersectionObserver(function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {
          ctaSection.classList.add("active");
          observer.unobserve(ctaSection);
        }

      });

    }, {
      threshold: 0.15
    });

    observer.observe(ctaSection);
  }

});

 // TESTIMONIAL

document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // TESTIMONIAL ARRAY
  // ==========================================

  const testimonials = [
    {
      name: "Michael Anderson",
      role: "Homeowner",
      location: "Gujarat, India",
      image: "img/Rebuilt Techz Logo.png",
      rating: 5,
      review:
        "Rebuilt Techz did an excellent job rewiring our entire home. The team was professional, on time, and kept everything clean. Highly recommended!"
    },
    {
      name: "Jessica Martinez",
      role: "Office Manager",
      location: "Ajmer, India",
      image: "img/Rebuilt Techz Logo.png",
      rating: 5,
      review:
        "We hired Rebuilt Techz for our office electrical upgrades. Great communication, fair pricing, and the work was completed exactly on schedule."
    },
    {
      name: "David Thompson",
      role: "Business Owner",
      location: "Jaipur, India",
      image: "img/Rebuilt Techz Logo.png",
      rating: 5,
      review:
        "From the first call to the final inspection, everything was smooth and stress-free. The team is skilled, reliable, and truly cares about customer satisfaction."
    },
    {
      name: "Robert Wilson",
      role: "Facility Manager",
      location: "Udaipur, India",
      image: "img/Rebuilt Techz Logo.png",
      rating: 5,
      review:
        "The team handled our electrical maintenance professionally and explained every step clearly. The overall service was efficient and reliable."
    }
  ];

  // ==========================================
  // STATISTICS ARRAY
  // ==========================================

  const stats = [
    {
      value: "500+",
      label: "Happy Clients",
      icon: "fa-solid fa-users"
    },
    {
      value: "4.5",
      label: "Average Rating",
      icon: "fa-solid fa-star"
    },
    {
      value: "10+",
      label: "Years of Experience",
      icon: "fa-solid fa-calendar-check"
    },
    {
      value: "90%",
      label: "Client Satisfaction",
      icon: "fa-solid fa-handshake"
    }
  ];

  const section = document.querySelector(".testimonial-sec");
  if (!section) return;

  const track = section.querySelector("#testimonialTrack");
  const viewport = section.querySelector("#testimonialViewport");
  const dotsBox = section.querySelector("#testimonialDots");
  const statsBox = section.querySelector("#testimonialStats");
  const prevBtn = section.querySelector(".testimonial-prev");
  const nextBtn = section.querySelector(".testimonial-next");

  // ==========================================
  // ONE REUSABLE TESTIMONIAL CARD
  // ==========================================

  function createTestimonialCard(item) {

    const card = document.createElement("article");
    card.className = "testimonial-card";

    const body = document.createElement("div");
    body.className = "testimonial-body";

    const quote = document.createElement("div");
    quote.className = "quote-icon";
    quote.innerHTML =
      '<i class="fa-solid fa-quote-left" aria-hidden="true"></i>';

    const review = document.createElement("p");
    review.className = "testimonial-text";
    review.textContent = item.review;

    const divider = document.createElement("span");
    divider.className = "testimonial-divider";

    const stars = document.createElement("div");
    stars.className = "testimonial-stars";

    const rating = Math.max(
      0,
      Math.min(5, Math.round(Number(item.rating) || 0))
    );

    stars.setAttribute(
      "aria-label",
      `${rating} out of 5 stars`
    );

    for (let i = 0; i < 5; i++) {
      const star = document.createElement("i");

      star.className =
        i < rating
          ? "fa-solid fa-star"
          : "fa-regular fa-star";

      star.setAttribute("aria-hidden", "true");
      stars.appendChild(star);
    }

    body.append(quote, review, divider, stars);

    // CLIENT DETAILS

    const user = document.createElement("div");
    user.className = "testimonial-user";

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.name;
    image.loading = "lazy";

    const info = document.createElement("div");
    info.className = "testimonial-user-info";

    const name = document.createElement("h4");
    name.textContent = item.name;

    const role = document.createElement("p");
    role.textContent = item.role;

    const location = document.createElement("span");

    const locationIcon = document.createElement("i");
    locationIcon.className = "fa-solid fa-location-dot";
    locationIcon.setAttribute("aria-hidden", "true");

    const locationText = document.createElement("span");
    locationText.textContent = item.location;

    location.append(locationIcon, locationText);
    info.append(name, role, location);
    user.append(image, info);

    card.append(body, user);

    return card;
  }

  // ==========================================
  // RENDER TESTIMONIALS
  // ==========================================

  const fragment = document.createDocumentFragment();

  testimonials.forEach((item) => {
    fragment.appendChild(createTestimonialCard(item));
  });

  track.replaceChildren(fragment);

  // ==========================================
  // ONE REUSABLE STAT CARD
  // ==========================================

  function createStatCard(item) {

    const stat = document.createElement("div");
    stat.className = "testimonial-stat";

    const iconBox = document.createElement("div");
    iconBox.className = "testimonial-stat-icon";

    const icon = document.createElement("i");
    icon.className = item.icon;
    icon.setAttribute("aria-hidden", "true");

    iconBox.appendChild(icon);

    const content = document.createElement("div");
    content.className = "testimonial-stat-content";

    const value = document.createElement("h3");
    value.textContent = item.value;

    const label = document.createElement("p");
    label.textContent = item.label;

    content.append(value, label);
    stat.append(iconBox, content);

    return stat;
  }

  const statsFragment = document.createDocumentFragment();

  stats.forEach((item) => {
    statsFragment.appendChild(createStatCard(item));
  });

  statsBox.replaceChildren(statsFragment);

  // ==========================================
  // SLIDER LOGIC
  // ==========================================

  let currentIndex = 0;
  let maxIndex = 0;

  function getVisibleCards() {
    if (window.innerWidth <= 700) return 1;
    if (window.innerWidth <= 1050) return 2;
    return 3;
  }

  function updateSlider() {

    const firstCard = track.querySelector(".testimonial-card");
    if (!firstCard) return;

    currentIndex = Math.max(
      0,
      Math.min(currentIndex, maxIndex)
    );

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const cardWidth = firstCard.getBoundingClientRect().width;
    const offset = currentIndex * (cardWidth + gap);

    track.style.transform = `translateX(-${offset}px)`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === maxIndex;

    dotsBox.querySelectorAll(".testimonial-dot")
      .forEach((dot, index) => {
        const active = index === currentIndex;

        dot.classList.toggle("active", active);
        dot.setAttribute("aria-current", active ? "true" : "false");
      });
  }

  function createDots() {

    dotsBox.replaceChildren();

    for (let index = 0; index <= maxIndex; index++) {

      const dot = document.createElement("button");

      dot.type = "button";
      dot.className = "testimonial-dot";

      dot.setAttribute(
        "aria-label",
        `Go to testimonial position ${index + 1}`
      );

      dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
      });

      dotsBox.appendChild(dot);
    }
  }

  function setupSlider() {

    const visibleCards = getVisibleCards();

    maxIndex = Math.max(
      0,
      testimonials.length - visibleCards
    );

    createDots();
    updateSlider();
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  });

  viewport.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight" && currentIndex < maxIndex) {
      event.preventDefault();
      currentIndex++;
      updateSlider();
    }

    if (event.key === "ArrowLeft" && currentIndex > 0) {
      event.preventDefault();
      currentIndex--;
      updateSlider();
    }
  });

  // ResizeObserver keeps slider aligned
  // when its container changes width.

  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(() => {
      updateSlider();
    });

    resizeObserver.observe(viewport);
  }

  window.addEventListener("resize", setupSlider);

  setupSlider();

  // ==========================================
  // SCROLL ANIMATION
  // ==========================================

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if ("IntersectionObserver" in window && !reducedMotion) {

    section.classList.add("testimonial-animate-ready");

    const observer = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("animate");
          observer.unobserve(section);
        }
      });

    }, {
      threshold: 0.1
    });

    observer.observe(section);
  }

});

