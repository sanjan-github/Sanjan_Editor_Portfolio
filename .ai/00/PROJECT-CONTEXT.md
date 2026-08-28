PROJECT CONTEXT
Project
Name: Sanjan Portfolio
Owner: Sanjan
Project Type: Personal freelance video-editor portfolio website
Primary Objective
Create a highly professional, attractive, polished, and trustworthy portfolio website that converts visitors from freelancing platforms, Instagram, and direct referrals into potential paying clients.
The primary conversion goal is:
Get potential clients to contact Sanjan for paid video-editing work.
The website should make a potential client think:

"This is a professional editor I could trust with my brand."

The website must prioritize trust, quality of work, clarity, and conversion over unnecessary visual gimmicks.

About Sanjan
Sanjan is a short-form video editor.
He has created 70+ short-form video edits, with approximately 45 edits published on Instagram.
Instagram username:
sanjanedits
Current editing software:
CapCut
Do not present CapCut as a major selling point. Clients care about the quality and effectiveness of the final result, not the software used to produce it.

Editing Focus
Sanjan primarily creates:

Instagram Reels
Short-form videos
Movie edits
Music-driven edits
Cinematic edits
High-energy edits
Beat-synchronized edits

Common characteristics of the editing style:

Phonk and funk music
Sudden music drops
Strong beat synchronization
High visual elevation
Fast pacing
Energetic transitions
Impact-focused cuts
Cinematic visual moments
Rhythm-driven editing

The website's visual language should reflect these characteristics without becoming a generic gaming/neon website.

Target Audience
The site is intended for:

Freelance clients
Content creators
Influencers
YouTubers
Businesses
Brands
Agencies
Anyone looking to hire a video editor

Do not assume a single niche unless explicitly specified later.
The website should therefore communicate professional editing ability broadly while still showcasing Sanjan's strongest short-form editing style.

Current Business Stage
Sanjan is currently building his freelance career and is aiming to secure his first/early paid clients.

Do not exaggerate Sanjan's professional history or credibility to make the website appear more established than it actually is.
The portfolio must be honest.

Credibility Rules
Never invent or imply:

Fake clients
Fake testimonials
Fake brand partnerships
Fake years of experience
Fake revenue
Fake client results
Fake performance metrics
Fake awards
Fake professional affiliations
Fake agency experience
Fake client logos
Fake statistics

Only use real information provided by Sanjan.
The portfolio should build credibility through:

Quality of work
Consistency
Presentation
Professional design
Clear communication
Editing volume
Strong positioning
Clear contact experience


Brand Identity
Display name:
Sanjanedits
Do not invent a studio name, agency name, or alternate brand name.
The site should feel like a polished professional portfolio belonging to an individual editor, not a fake large agency.
Sanjan's photograph will be used on the website.
The photograph is currently the Instagram profile picture/DP and will be supplied by Sanjan.

Website Pages
Homepage
Primary purpose:
Introduce Sanjan, establish credibility, showcase the strongest work, and convert visitors into contacts.
Planned sections:

Navigation
Hero
Selected Work
Showreel
What I Edit
Editing Philosophy
About Sanjan
Contact
Footer

Projects Page
Path:
/projects.html
Purpose:
Show the larger collection of Sanjan's edits.
The projects page will eventually contain approximately 45 published edits and may grow over time.
It should support browsing and viewing projects without making the page unnecessarily heavy.

Portfolio Content
Homepage portfolio:

1 strongest featured edit
4 supporting edits

Total:
5 featured edits
Projects page:

All selected published edits
Approximately 45 currently
Designed so additional projects can be added later

Sanjan will personally choose which edits are shown.
Do not automatically select or invent portfolio content.

Video Hosting
Website hosting:
GitHub Pages
Source code/version control:
GitHub
Video hosting and delivery:
Cloudinary
Do not store the complete portfolio video library directly inside the GitHub repository unless explicitly instructed.
The GitHub repository should remain lightweight.

Video Loading Strategy
Performance is a first-class requirement.
Do NOT load every portfolio video when the page initially loads.
Preferred behavior:

Display an optimized poster/thumbnail.
Avoid downloading the actual video initially.
Load the video only when the visitor intentionally requests playback.
Play the selected video inside the website.
Provide an optional link to the original Instagram post where appropriate.

Do not autoplay videos with sound.
Do not create a page that downloads dozens of large video files immediately.
The exact implementation may change during development, but the performance principle must remain:
Do not make the visitor download media they did not ask to watch.

Instagram
Instagram username:
sanjanedits
Instagram is an additional destination and credibility source.
The portfolio should not depend on Instagram embeds for the primary video experience unless explicitly determined later to be superior for a specific use case.
Primary portfolio playback should preferably happen inside the website using Cloudinary-hosted media.
Individual projects may provide:
View on Instagram →
when useful.

Contact
Primary contact methods:
Instagram
sanjanedits
WhatsApp
Use WhatsApp username-based contact.
Do not visibly disclose Sanjan's personal phone number on the website.
The exact WhatsApp URL/implementation will be determined during implementation based on supported username behavior.

Hosting
Hosting platform:
GitHub Pages
The project should work as a static website.
Preferred architecture:
Vanilla HTML + CSS + JavaScript
Do not introduce a frontend framework unless there is a clear, documented requirement that cannot reasonably be solved with vanilla technologies.

Technical Philosophy
The website should be:

Fast
Lightweight
Responsive
Accessible
Maintainable
Easy to update
Visually polished
Dependency-light
Static-first

Avoid unnecessary complexity.
Do not add a framework, library, package, animation engine, UI kit, or external dependency simply because it is popular or familiar.
Every dependency must have a clear benefit that justifies its cost.

Visual Direction
Primary direction:
Dark cinematic editorial
Desired characteristics:

Near-black background
High contrast
Large typography
Strong visual hierarchy
Cinematic imagery
Sharp editorial composition
Energetic motion
Premium appearance
Restrained accent color
Strong use of negative space
Asymmetric layouts where appropriate

The site should feel:

Professional
Confident
Modern
Cinematic
Energetic
Premium
Fast

It should NOT feel:

Like a generic SaaS website
Like a generic freelancer template
Like a gaming-themed website
Like an agency pretending to be larger than it is
Overloaded with neon
Overloaded with gradients
Overloaded with glassmorphism
Overloaded with rounded cards
Like an award-site experiment that sacrifices usability


Motion Direction
The website should feel highly polished and interactive.
Motion level:
Noticeable to immersive, while remaining fast.
Motion should reinforce Sanjan's editing identity:
build → tension → movement → impact
Preferred techniques:

CSS transitions
CSS transforms
Opacity transitions
Clip-path reveals
Scale transitions
IntersectionObserver-driven reveals
Lightweight pointer interactions
Subtle hover states
Smooth modal transitions

Avoid expensive continuous animations.
Avoid unnecessary WebGL.
Avoid Three.js unless explicitly justified.
Avoid particle systems.
Avoid large animation libraries unless a specific requirement genuinely needs one.
The site should feel animated because the interactions are well designed, not because the browser is constantly rendering effects.

Typography Direction
Preferred display font:
Plus Jakarta Sans
Preferred body/UI font:
Inter
Do not introduce additional fonts without explicit approval.
Keep the number of loaded font weights to the minimum practical set.
Typography should use responsive sizing where appropriate, including CSS clamp().

Initial Color Direction
Primary background:
#090909
Primary text:
#F5F5F2
Secondary text:
#8A8A8A
Initial accent:
#C8FF00
These are initial project decisions and should be treated as the default design tokens unless changed through a documented design decision.
Do not introduce random new colors throughout the project.

Responsive Design
The website must be designed for:

Mobile
Tablet
Desktop
Large desktop screens

Mobile is not an afterthought.
The site should preserve the visual hierarchy and quality of the desktop design while adapting the layout appropriately to smaller screens.
Do not simply shrink the desktop design.

Accessibility
Accessibility is part of the project's quality standard.
The site should include:

Semantic HTML
Correct heading hierarchy
Keyboard accessibility
Visible focus states
Accessible buttons
Meaningful link text
Appropriate image alt text
Reduced-motion support
Sufficient text contrast
Usable mobile interactions

Never sacrifice basic accessibility solely for visual appearance.

Performance Priorities
Performance has high priority.
Prioritize:

Small initial payload
Optimized images
Optimized video delivery
Lazy loading
Minimal JavaScript
Minimal dependencies
Explicit media dimensions/aspect ratios
No unnecessary network requests
No unnecessary third-party embeds
Efficient CSS
Efficient DOM structure

The site should feel fast even on slower mobile connections.
Visual quality must not be achieved by making the site unnecessarily heavy.

Code Ownership and AI-Assisted Development
This project is being built using AI-assisted/vibe coding.
Tools may include:

OpenAI Codex
Google Antigravity
Cline
NVIDIA NIM models
Qwen Coder
DeepSeek
Other coding models

Different AI models may work on the same codebase.
Therefore:
The project specification files are the source of truth.
Models must not rely solely on their own interpretation of the current codebase.
Before making significant changes, models should consult the relevant .ai/ documentation.
Models must preserve existing architecture and decisions unless explicitly instructed to change them.

Core AI Behavior
AI coding agents must:

Read relevant project rules before modifying code.
Understand the requested scope before editing.
Make the smallest viable change.
Preserve unrelated functionality.
Avoid unnecessary refactoring.
Avoid changing unrelated visual sections.
Avoid introducing new technologies without justification.
Avoid inventing missing requirements.
Ask for clarification only when genuinely necessary.
Prefer existing project patterns over inventing new ones.
Test/inspect the result after making changes.
Report what was changed.
Report important things that were intentionally left unchanged.

A request such as:
"Make this section look better"
does NOT authorize redesigning the entire website.
A request should be interpreted within its relevant scope.

Source of Truth
When instructions conflict, use this priority order:

Explicit user instruction
PROJECT CONTEXT
ARCHITECTURE
DESIGN SYSTEM
UX RULES
PERFORMANCE RULES
HTML/CSS/JS RULES
Existing implementation
AI/model preference

AI preference must never override an explicit project decision without authorization.

Core Principle
The portfolio is not intended to demonstrate how much technology was used to build it.
It is intended to demonstrate:
how good Sanjan's editing is and why a client should trust him with their content.
Every design and technical decision should support that objective.
