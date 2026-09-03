const projectCatalog = [
    {
        id: "srujan-edit",
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
        title: "Space OG",
        category: "cinematic",
        categoryLabel: "Visual FX",
        statusLabel: "Supporting Cut",
        description: "Atmospheric space and movie edit built around visual depth and rhythm.",
        video: "https://res.cloudinary.com/sdsqadch/video/upload/v1787892867/Space-OG.mp4",
        instagram: "https://www.instagram.com/sanjanedits/"
    }
];

window.projectCatalog = projectCatalog;
const featuredProjectIds = projectCatalog.map((project) => project.id);

function createProjectCard(project) {
    const article = document.createElement("article");
    article.className = project.featured ? "project-card project-card--primary" : "project-card";
    article.dataset.reveal = "";

    const media = document.createElement("div");
    media.className = "project-card__media";

    if (project.video) {
        const preview = document.createElement("video");
        preview.className = "project-card__video";
        preview.muted = true;
        preview.loop = true;
        preview.autoplay = true;
        preview.playsInline = true;
        preview.preload = "metadata";
        preview.src = project.video;
        preview.setAttribute("aria-hidden", "true");
        media.append(preview);
    } else {
        const placeholder = document.createElement("div");
        placeholder.className = "project-card__placeholder";
        placeholder.setAttribute("aria-hidden", "true");
        if (project.statusLabel) {
            const marker = document.createElement("span");
            marker.className = "project-card__marker";
            marker.textContent = project.statusLabel;
            placeholder.append(marker);
        }
        media.append(placeholder);
    }

    const mediaButton = document.createElement("button");
    mediaButton.className = "project-card__media-action";
    mediaButton.type = "button";
    mediaButton.dataset.action = "open-video";
    mediaButton.dataset.projectId = project.id;
    mediaButton.setAttribute("aria-label", `Play ${project.title} in the video player`);
    media.append(mediaButton);

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
    button.dataset.projectId = project.id;
    button.textContent = "Watch edit";

    meta.append(category, title, text, button);

    if (project.instagram) {
        const instagramLink = document.createElement("a");
        instagramLink.className = "button button--text";
        instagramLink.href = project.instagram;
        instagramLink.target = "_blank";
        instagramLink.rel = "noopener noreferrer";
        instagramLink.textContent = "View on Instagram";
        meta.append(instagramLink);
    }

    article.append(media, meta);
    return article;
}

function buildCategories(projects) {
    const categories = new Map([["all", "All"]]);
    projects.forEach((project) => {
        if (project.category && !categories.has(project.category)) categories.set(project.category, project.categoryLabel || project.category);
    });
    return categories;
}

function renderArchive(projects, activeFilter) {
    const grid = document.querySelector("[data-project-grid]");
    const status = document.querySelector("[data-project-status]");
    if (!grid) return;

    const visibleProjects = activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);
    grid.classList.toggle("projects-grid--empty", visibleProjects.length === 0);

    if (!visibleProjects.length) {
        const emptyState = document.createElement("article");
        emptyState.className = "empty-state";
        const heading = document.createElement("h3");
        heading.textContent = "No projects in this view yet";
        const copy = document.createElement("p");
        copy.textContent = "Switch back to All to browse the available edits.";
        emptyState.append(heading, copy);
        grid.replaceChildren(emptyState);
        if (status) status.textContent = "No edits in this view.";
        return;
    }

    grid.replaceChildren(...visibleProjects.map(createProjectCard));
    if (status) status.textContent = activeFilter === "all" ? "Browse the selected edits below." : "Browse the filtered selection below.";
}

function renderFilters(projects) {
    const filterBar = document.querySelector("[data-filter-bar]");
    if (!filterBar || !projects.length) return;

    const categories = buildCategories(projects);
    let activeFilter = "all";
    const applyFilter = (filterValue) => {
        activeFilter = filterValue;
        renderArchive(projects, activeFilter);
        filterBar.querySelectorAll("[data-filter]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.filter === activeFilter)));
    };

    filterBar.replaceChildren(...Array.from(categories.entries()).map(([value, label]) => {
        const button = document.createElement("button");
        button.className = "button filter-button";
        button.type = "button";
        button.dataset.filter = value;
        button.setAttribute("aria-pressed", String(value === activeFilter));
        button.textContent = label;
        button.addEventListener("click", () => applyFilter(value));
        return button;
    }));
    renderArchive(projects, activeFilter);
}

export function getProjectById(projectId) {
    return projectCatalog.find((project) => project.id === projectId) ?? null;
}

export function initProjects() {
    const grid = document.querySelector("[data-project-grid]");
    const featuredGrid = document.querySelector("[data-featured-grid]");
    if (featuredGrid) featuredGrid.replaceChildren(...featuredProjectIds.map((id) => createProjectCard(getProjectById(id))));
    if (grid) renderFilters(projectCatalog);
}
