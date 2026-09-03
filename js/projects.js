const projectCatalog = [
    {
        id: "srujan-edit",
        serial: "01",
        title: "Srujan Edit",
        category: "reels",
        categoryLabel: "Featured Reel",
        statusLabel: "Featured Cut",
        description: "Main highlighted short-form edit featuring high-impact beat synchronization and cinematic cuts.",
        video: "https://res.cloudinary.com/sdsqadch/video/upload/v1787904198/srujan-edit.mp4",
        instagram: "https://www.instagram.com/sanjanedits/"
    },
    {
        id: "sai-saviour",
        serial: "02",
        title: "Sai Saviour",
        category: "cinematic",
        categoryLabel: "Cinematic Cut",
        statusLabel: "Supporting Cut",
        description: "Action-driven movie edit focusing on visual pacing, contrast control, and atmospheric drops.",
        video: "https://res.cloudinary.com/sdsqadch/video/upload/v1787904812/Sai_Saviour.mp4",
        instagram: "https://www.instagram.com/sanjanedits/"
    },
    {
        id: "athadu-brahmi",
        serial: "03",
        title: "Athadu Brahmi",
        category: "reels",
        categoryLabel: "Rhythm Edit",
        statusLabel: "Supporting Cut",
        description: "Rhythm-led short-form cut with precision timing and audio synchronization.",
        video: "https://res.cloudinary.com/sdsqadch/video/upload/v1787904770/athadu_brahmi.mp4",
        instagram: "https://www.instagram.com/sanjanedits/"
    },
    {
        id: "srujan-dude",
        serial: "04",
        title: "Srujan Dude",
        category: "short-form",
        categoryLabel: "Beat Sync",
        statusLabel: "Supporting Cut",
        description: "High-energy social content edit featuring fast-cut transitions and music drops.",
        video: "https://res.cloudinary.com/sdsqadch/video/upload/v1787903555/Srujan-Dude.mp4",
        instagram: "https://www.instagram.com/sanjanedits/"
    },
    {
        id: "space-og",
        serial: "05",
        title: "Space OG",
        category: "cinematic",
        categoryLabel: "Visual FX",
        statusLabel: "Supporting Cut",
        description: "Atmospheric space and movie edit built around visual depth and rhythm.",
        video: "https://res.cloudinary.com/sdsqadch/video/upload/v1787892867/Space-OG.mp4",
        instagram: "https://www.instagram.com/sanjanedits/"
    }
];

const featuredProjectIds = ["srujan-edit", "sai-saviour", "athadu-brahmi", "srujan-dude", "space-og"];

function createProjectCard(project) {
    const article = document.createElement("article");
    article.className = project.featured ? "project-card project-card--primary" : "project-card";
    article.dataset.reveal = "";

    const media = document.createElement("div");
    media.className = "project-card__media";

    if (project.poster) {
        const image = document.createElement("img");
        image.className = "project-card__image";
        image.src = project.poster;
        image.alt = "";
        image.loading = "lazy";
        media.append(image);
    } else {
        const placeholder = document.createElement("div");
        placeholder.className = "project-card__placeholder";
        placeholder.setAttribute("aria-hidden", "true");

        const serial = document.createElement("span");
        serial.className = "project-card__serial";
        serial.textContent = project.serial || "00";

        placeholder.append(serial);

        if (project.statusLabel) {
            const marker = document.createElement("span");
            marker.className = "project-card__marker";
            marker.textContent = project.statusLabel;
            placeholder.append(marker);
        }

        media.append(placeholder);
    }

    const meta = document.createElement("div");
    meta.className = "project-card__meta";

    const category = document.createElement("p");
    category.className = "project-card__category";
    category.textContent = project.categoryLabel;

    const title = document.createElement("h3");
    title.className = "project-card__title";
    title.textContent = project.title;

    const text = document.createElement("p");
    text.className = "project-card__text";
    text.textContent = project.description;

    const button = document.createElement("button");
    button.className = "button button--text";
    button.type = "button";
    button.dataset.action = "open-video";
    button.textContent = project.video ? "Watch edit" : "Open slot";

    if (project.id) {
        button.dataset.projectId = project.id;
    }

    if (!project.video) {
        button.dataset.slotTitle = project.title;
        button.dataset.slotDescription = project.description;
    }

    meta.append(category, title, text, button);

    if (project.instagram) {
        const instagramLink = document.createElement("a");
        instagramLink.className = "button button--text";
        instagramLink.href = project.instagram;
        instagramLink.textContent = "View on Instagram";
        meta.append(instagramLink);
    }

    article.append(media, meta);

    return article;
}

function renderFeaturedProjects() {
    const grid = document.querySelector("[data-featured-grid]");

    if (!grid || !featuredProjectIds.length || !projectCatalog.length) {
        return;
    }

    const featuredProjects = featuredProjectIds
        .map((projectId) => getProjectById(projectId))
        .filter(Boolean)
        .map((project, index) => ({
            ...project,
            featured: index === 0
        }));

    if (!featuredProjects.length) {
        return;
    }

    grid.replaceChildren(...featuredProjects.map(createProjectCard));
}

function buildCategories(projects) {
    const categories = new Map();
    categories.set("all", "All");

    projects.forEach((project) => {
        if (!project.category || categories.has(project.category)) {
            return;
        }

        const label = project.categoryLabel || project.category;
        categories.set(project.category, label);
    });

    return categories;
}

function renderArchive(projects, activeFilter) {
    const grid = document.querySelector("[data-project-grid]");
    const status = document.querySelector("[data-project-status]");

    if (!grid) {
        return;
    }

    const visibleProjects = activeFilter === "all"
        ? projects
        : projects.filter((project) => project.category === activeFilter);

    grid.classList.toggle("projects-grid--empty", visibleProjects.length === 0);

    if (!visibleProjects.length) {
        const emptyState = document.createElement("article");
        emptyState.className = "empty-state";
        emptyState.dataset.reveal = "";

        const heading = document.createElement("h3");
        heading.textContent = "No projects in this view yet";

        const copy = document.createElement("p");
        copy.textContent = activeFilter === "all"
            ? "Project metadata has not been added yet. Connect real project entries in js/projects.js to publish the archive."
            : "No projects have been assigned to this category yet. Switch back to All once entries are available.";

        emptyState.append(heading, copy);
        grid.replaceChildren(emptyState);

        if (status) {
            status.textContent = activeFilter === "all"
                ? "No project metadata has been connected yet."
                : `Showing 0 projects for ${activeFilter}.`;
        }

        return;
    }

    grid.replaceChildren(...visibleProjects.map(createProjectCard));

    if (status) {
        status.textContent = `Showing ${visibleProjects.length} project${visibleProjects.length === 1 ? "" : "s"}.`;
    }
}

function renderFilters(projects) {
    const filterBar = document.querySelector("[data-filter-bar]");

    if (!filterBar || !projects.length) {
        return;
    }

    const categories = buildCategories(projects);
    let activeFilter = "all";

    const applyFilter = (filterValue) => {
        activeFilter = filterValue;
        renderArchive(projects, activeFilter);

        filterBar.querySelectorAll("[data-filter]").forEach((button) => {
            const isActive = button.dataset.filter === activeFilter;
            button.setAttribute("aria-pressed", String(isActive));
        });
    };

    const buttons = Array.from(categories.entries()).map(([value, label]) => {
        const button = document.createElement("button");
        button.className = "button filter-button";
        button.type = "button";
        button.dataset.filter = value;
        button.setAttribute("aria-pressed", String(value === activeFilter));
        button.textContent = label;
        button.addEventListener("click", () => applyFilter(value));
        return button;
    });

    filterBar.replaceChildren(...buttons);
    renderArchive(projects, activeFilter);
}

export function getProjectById(projectId) {
    return projectCatalog.find((project) => project.id === projectId) ?? null;
}

export function initProjects() {
    renderFeaturedProjects();

    if (!document.querySelector("[data-project-grid]")) {
        return;
    }

    if (!projectCatalog.length) {
        return;
    }

    renderFilters(projectCatalog);
}

