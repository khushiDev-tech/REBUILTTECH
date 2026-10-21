
/* =========================================================
   REBUILT TECHZ - ABOUT US PAGE JAVASCRIPT
   File: js/about.js
========================================================= */


/* =========================================================
   SECTION 01: CERTIFICATE SLIDER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const slider =
        document.querySelector("#certificateSlider");

    const prevButton =
        document.querySelector(".cert-prev");

    const nextButton =
        document.querySelector(".cert-next");


    if (slider && prevButton && nextButton) {

        /* -----------------------------------------
           CALCULATE SLIDER SCROLL DISTANCE
        ----------------------------------------- */

        const getScrollAmount = () => {

            const card =
                slider.querySelector(".certificate-card");

            if (!card) return 0;

            const gap = parseFloat(window.getComputedStyle(slider).columnGap) || 25;

            return card.offsetWidth + gap;

        };


        /* -----------------------------------------
           NEXT BUTTON
        ----------------------------------------- */

        nextButton.addEventListener("click", () => {

            slider.scrollBy({
                left: getScrollAmount(),
                behavior: "smooth"
            });

        });


        /* -----------------------------------------
           PREVIOUS BUTTON
        ----------------------------------------- */

        prevButton.addEventListener("click", () => {

            slider.scrollBy({
                left: -getScrollAmount(),
                behavior: "smooth"
            });

        });

    }



    /* =====================================================
       SECTION 02: CERTIFICATE SCROLL ANIMATION
    ===================================================== */

    const section =
        document.querySelector(".cert-section");


    if (section && (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches)) {
        section.classList.add("cert-visible");
    } else if (section) {

        const observer = new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        section.classList.add(
                            "cert-visible"
                        );

                        observer.unobserve(section);

                    }

                });

            },

            {
                threshold: 0.12
            }

        );

        observer.observe(section);

    }

});



/* =========================================================
   SECTION 03: WHY CHOOSE US ANIMATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const section =
        document.querySelector(".rt-why-v2");

    if (!section) return;
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
        section.classList.add("is-visible");
        section.querySelectorAll(".rt-bar-track span").forEach(bar => { bar.style.width = bar.getAttribute("data-progress") + "%"; });
        return;
    }


    /* -----------------------------------------
       INTERSECTION OBSERVER
    ----------------------------------------- */

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (!entry.isIntersecting) return;


                /* ---------------------------------
                   SHOW SECTION ANIMATION
                --------------------------------- */

                section.classList.add("is-visible");


                /* ---------------------------------
                   PROGRESS BAR ANIMATION
                --------------------------------- */

                const bars =
                    section.querySelectorAll(
                        ".rt-bar-track span"
                    );


                bars.forEach(function (bar, index) {

                    const value =
                        bar.getAttribute("data-progress");


                    setTimeout(function () {

                        bar.style.width = value + "%";

                    }, 250 + (index * 180));

                });


                /* ---------------------------------
                   STOP OBSERVING AFTER ANIMATION
                --------------------------------- */

                observer.unobserve(section);

            });

        },

        {
            threshold: 0.15
        }

    );


    observer.observe(section);

});

// Native dialog shows every page of a certificate while retaining PDF link fallbacks.
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("#certificateSlider .certificate-card > a");
  if (!links.length || !("HTMLDialogElement" in window)) return;
  const viewer = document.createElement("dialog");
  viewer.className = "certificate-viewer";
  viewer.setAttribute("aria-label", "Certificate pages");
  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "certificate-viewer-close";
  closeButton.setAttribute("aria-label", "Close certificate preview");
  closeButton.textContent = "\u00d7";
  const heading = document.createElement("p");
  heading.className = "certificate-viewer-heading";
  const pagesContainer = document.createElement("div");
  pagesContainer.className = "certificate-viewer-pages";
  viewer.append(closeButton, heading, pagesContainer);
  document.body.appendChild(viewer);
  let opener = null;
  let previousOverflow = "";
  closeButton.addEventListener("click", () => viewer.close());
  viewer.addEventListener("click", event => {
    if (event.target === viewer) viewer.close();
  });
  viewer.addEventListener("close", () => {
    document.body.style.overflow = previousOverflow;
    pagesContainer.replaceChildren();
    if (opener && opener.isConnected) opener.focus({ preventScroll: true });
  });
  links.forEach(link => {
    const preview = link.querySelector("img");
    if (!preview) return;
    link.setAttribute("aria-label", "View all pages of " + preview.alt);
    link.setAttribute("aria-haspopup", "dialog");
    link.addEventListener("click", event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      opener = link;
      const sources = (link.dataset.pages || preview.src).split("|");
      const figures = sources.map((src, index) => {
        const figure = document.createElement("figure");
        const image = document.createElement("img");
        image.className = "certificate-viewer-image";
        image.src = src;
        image.alt = preview.alt + ", page " + (index + 1) + " of " + sources.length;
        image.decoding = "async";
        const caption = document.createElement("figcaption");
        caption.textContent = "Page " + (index + 1) + " of " + sources.length;
        figure.append(image, caption);
        return figure;
      });
      pagesContainer.replaceChildren(...figures);
      pagesContainer.classList.toggle("certificate-single-page", sources.length === 1);
      heading.textContent = sources.length > 1 ? sources.length + " pages - scroll down to view all" : "Certificate preview";
      previousOverflow = document.body.style.overflow;
      viewer.showModal();
      viewer.scrollTop = 0;
      document.body.style.overflow = "hidden";
      closeButton.focus({ preventScroll: true });
    });
  });
});
