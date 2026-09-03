export function initHeroParallax() {
    const heroSection = document.querySelector(".hero-container") || document.querySelector(".hero");

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (prefersReducedMotion.matches) {
        return;
    }

    let ticking = false;

    function updateParallax() {
        const scrollDistance = window.scrollY;
        const windowHeight = window.innerHeight;

        if (heroSection) {
            const rect = heroSection.getBoundingClientRect();
            if (rect.bottom > 0 && rect.top < windowHeight) {
                const bgOffset = scrollDistance * 0.45;
                const fgOffset = scrollDistance * 0.18;
                const textScale = Math.min(1.22, 1 + scrollDistance * 0.0005);

                heroSection.style.setProperty("--hero-bg-y", `${bgOffset}px`);
                heroSection.style.setProperty("--hero-fg-y", `${fgOffset}px`);
                heroSection.style.setProperty("--hero-text-scale", `${textScale}`);
            }
        }

        const parallaxSections = document.querySelectorAll(".section:not(.hero-container)");
        parallaxSections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom > 0) {
                const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
                const shiftY = (progress - 0.5) * -35;
                section.style.setProperty("--section-parallax-y", `${shiftY}px`);

                const oddShift = (progress - 0.5) * -20;
                const evenShift = (progress - 0.5) * 20;
                section.style.setProperty("--card-parallax-odd", `${oddShift}px`);
                section.style.setProperty("--card-parallax-even", `${evenShift}px`);

                const showreelFrame = section.querySelector(".showreel__frame");
                if (showreelFrame) {
                    const frameShift = (progress - 0.5) * -40;
                    showreelFrame.style.setProperty("--showreel-parallax-y", `${frameShift}px`);
                }
            }
        });

        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateParallax();
}
