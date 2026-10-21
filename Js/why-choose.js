// Shared Home, About and Services Why Choose Us cards.
document.addEventListener("DOMContentLoaded", function () {

  // ====================================
  // WHY CHOOSE US DATA ARRAY
  // ====================================

  const whyChooseData = [
    {
      number: "01",
      title: "Licensed and Insured",
      description:
        "Work carried out by qualified electricians following safety requirements.",
      icon: "fa-solid fa-shield-halved"
    },
    {
      number: "02",
      title: "Clear Communication",
      description:
        "We keep you informed about the work, explain the process clearly, and answer your questions.",
      icon: "fa-regular fa-comment-dots"
    },
    {
      number: "03",
      title: "Reliable Scheduling",
      description:
        "Appointments are managed with respect for your time and availability.",
      icon: "fa-regular fa-calendar"
    },
    {
      number: "04",
      title: "Clean Work Process",
      description:
        "We keep work areas organized and complete the job responsibly.",
      icon: "fa-solid fa-gear"
    }
  ];

  // ====================================
  // ONE REUSABLE WHY CARD
  // ====================================

  function createWhyCard(item) {

    const card = document.createElement("div");
    card.className = "why-item";

    const iconSide = document.createElement("div");
    iconSide.className = "why-icon-side";

    const node = document.createElement("span");
    node.className = "why-node";
    node.setAttribute("aria-hidden", "true");

    const iconCircle = document.createElement("div");
    iconCircle.className = "why-icon-circle";

    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("viewBox", "0 0 66 66");
    icon.setAttribute("aria-hidden", "true");
    icon.setAttribute("focusable", "false");
    const iconPaths = [
      "<path d=\"M32 5c7 5 14 7 22 9v19c0 12-9 21-22 27C19 54 10 45 10 33V14c8-2 15-4 22-9Z\"/><path class=\"why-accent\" d=\"m22 32 7 7 14-17\"/>",
      "<path d=\"M19 11h28c9 0 14 6 14 16v6c0 9-6 15-15 15H28L13 58l3-14C8 41 6 36 6 29v-3c0-9 4-15 13-15Z\"/><circle class=\"why-accent\" cx=\"22\" cy=\"30\" r=\"2\"/><circle class=\"why-accent\" cx=\"34\" cy=\"30\" r=\"2\"/><circle class=\"why-accent\" cx=\"46\" cy=\"30\" r=\"2\"/>",
      "<rect x=\"7\" y=\"12\" width=\"46\" height=\"39\" rx=\"4\"/><path d=\"M7 24h46M18 6v13M43 6v13\"/><circle cx=\"47\" cy=\"45\" r=\"14\" fill=\"white\"/><path class=\"why-accent\" d=\"M47 35v11l7 4\"/>",
      "<path d=\"M24.20 11.75 L26.67 4.70 L39.33 4.70 L41.80 11.75 L41.80 11.75 L48.54 8.51 L57.49 17.46 L54.25 24.20 L54.25 24.20 L61.30 26.67 L61.30 39.33 L54.25 41.80 L54.25 41.80 L57.49 48.54 L48.54 57.49 L41.80 54.25 L41.80 54.25 L39.33 61.30 L26.67 61.30 L24.20 54.25 L24.20 54.25 L17.46 57.49 L8.51 48.54 L11.75 41.80 L11.75 41.80 L4.70 39.33 L4.70 26.67 L11.75 24.20 L11.75 24.20 L8.51 17.46 L17.46 8.51 L24.20 11.75Z\"/><circle cx=\"33\" cy=\"33\" r=\"13\"/><path class=\"why-accent\" d=\"m26 33 5 5 10-12\"/>"
];
    icon.innerHTML = iconPaths[Number(item.number) - 1];

    iconCircle.appendChild(icon);
    iconSide.append(node, iconCircle);

    const content = document.createElement("div");
    content.className = "why-content";

    const number = document.createElement("span");
    number.className = "why-number";
    number.textContent = item.number;

    const heading = document.createElement("h3");
    heading.textContent = item.title;

    const line = document.createElement("span");
    line.className = "why-small-line";

    const description = document.createElement("p");
    description.textContent = item.description;

    content.append(number, heading, line, description);

    card.append(iconSide, content);

    return card;
  }

  // ====================================
  // RENDER ALL CARDS
  // ====================================

  const whyList = document.getElementById("whyList");

  if (!whyList) return;

  const fragment = document.createDocumentFragment();

  whyChooseData.forEach(function (item) {
    fragment.appendChild(createWhyCard(item));
  });

  whyList.appendChild(fragment);

  // ====================================
  // SCROLL ANIMATION
  // ====================================

  const whySection = document.querySelector(".why-sec");

  if (
    whySection &&
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {

    whySection.classList.add("why-animate-ready");

    const observer = new IntersectionObserver(function (entries) {

      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          whySection.classList.add("animate");
          observer.unobserve(whySection);
        }
      });

    }, {
      threshold: 0.1
    });

    observer.observe(whySection);
  }

});
