import { initNavigation } from "./navigation.js";
import { initProjects } from "./projects.js";
import { initVideos } from "./videos.js";

function initReveal() {
    const revealTargets = Array.from(document.querySelectorAll("[data-reveal]"));

    if (!revealTargets.length) {
        return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
        revealTargets.forEach((target) => target.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                currentObserver.unobserve(entry.target);
            });
        },
        {
            rootMargin: "0px 0px -10% 0px",
            threshold: 0.15
        }
    );

    revealTargets.forEach((target) => observer.observe(target));
}

initNavigation();
initProjects();
initVideos();
initReveal();

