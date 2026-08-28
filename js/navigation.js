export function initNavigation() {
    const nav = document.querySelector("[data-nav]");

    if (!nav) {
        return;
    }

    const toggle = nav.querySelector("[data-nav-toggle]");
    const panel = nav.querySelector("[data-nav-panel]");

    if (!toggle || !panel) {
        return;
    }

    const closeMenu = () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
        nav.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
    };

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.contains("is-open");

        if (isOpen) {
            closeMenu();
            return;
        }

        openMenu();
    });

    panel.addEventListener("click", (event) => {
        const link = event.target.closest("a");

        if (link) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && nav.classList.contains("is-open")) {
            closeMenu();
            toggle.focus();
        }
    });

    document.addEventListener("click", (event) => {
        if (!nav.classList.contains("is-open")) {
            return;
        }

        if (!nav.contains(event.target)) {
            closeMenu();
        }
    });
}

