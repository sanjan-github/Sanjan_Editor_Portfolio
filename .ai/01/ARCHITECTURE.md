ARCHITECTURE
1. Architectural Goal
Build a lightweight, static, high-performance portfolio website for sanjanedits.
The architecture must support:

Professional presentation
Fast initial loading
High-quality video playback
Easy portfolio updates
Responsive behavior
Accessible interactions
AI-assisted development by multiple coding models
Clear separation of responsibilities
Minimal dependencies

The architecture must remain simple enough that an AI coding agent can understand and modify individual parts without unnecessarily affecting unrelated parts.

2. Technology Stack
Required

HTML5
CSS3
Vanilla JavaScript
Git
GitHub
GitHub Pages
Cloudinary for video storage and delivery

Preferred
Use native browser APIs whenever practical.
Examples:

IntersectionObserver
HTML <dialog> where suitable
<video>
<picture>
loading="lazy"
CSS custom properties
CSS Grid
Flexbox
clamp()
aspect-ratio

Avoid by default
Do not introduce:

React
Vue
Angular
Next.js
Tailwind
Bootstrap
jQuery
GSAP
Three.js
WebGL
large UI libraries
large animation libraries
unnecessary npm dependencies

A technology may only be introduced if there is a clear requirement that cannot reasonably be solved using the existing stack.
Any such change must be documented in 13-DESIGN-DECISIONS.md.

3. Site Structure
The site consists of two primary pages.
/
└── index.html

/projects.html

Homepage
Purpose:

Introduce Sanjan
Establish professionalism
Present strongest work
Communicate editing style
Provide showreel
Explain capabilities
Encourage contact

Projects Page
Purpose:

Display the larger portfolio archive
Allow visitors to browse projects
Allow visitors to watch selected edits
Allow visitors to access Instagram posts where appropriate

The homepage is curated.
The projects page is comprehensive.

4. Homepage Information Architecture
The homepage should follow this section order unless intentionally changed through a documented design decision.
HEADER / NAVIGATION
        ↓
HERO
        ↓
SELECTED WORK
        ↓
SHOWREEL
        ↓
WHAT I EDIT
        ↓
EDITING PHILOSOPHY
        ↓
ABOUT SANJAN
        ↓
CONTACT CTA
        ↓
FOOTER


5. Navigation
The navigation is global site chrome.
Responsibilities:

Brand identity
Navigation to major sections/pages
Projects page access
Contact access where useful
Mobile navigation

The navigation must remain lightweight.
Desktop and mobile navigation must share the same source of truth wherever practical.
Do not create completely separate navigation implementations unless required.

6. Hero
Purpose:
Immediately communicate:

Who Sanjan is
What Sanjan does
The quality/style of the work
Where the visitor should go next

Core message:
Sanjan / sanjanedits — Video Editor
Supporting positioning:
Short-form edits built around rhythm, impact and motion.
The exact copy may evolve, but the hero must remain concise.
The hero may use Sanjan's photograph and/or an extremely lightweight visual media treatment.
The hero must not become a heavy video background.
If video is used in the hero:

It must be optimized
It must not block initial rendering
It must not autoplay with sound
It must not significantly increase first-load cost


7. Selected Work
Purpose:
Show the strongest portfolio pieces immediately after the hero.
Initial composition:

1 primary featured edit
4 supporting edits

Total:
5 featured projects
The strongest edit should receive the highest visual prominence.
The section should use an editorial/asymmetric layout where appropriate rather than forcing every item into identical cards.
Each project card should support:

Poster image
Project title or identifier
Category where useful
Play interaction
Optional Instagram link

The selected-work section must not load all videos immediately.
Initial page load should primarily use poster/thumbnail images.

8. Showreel
The showreel is the primary demonstration of Sanjan's editing ability.
The showreel may be derived from Sanjan's Instagram content.
The showreel should appear as a visually important section.
Expected behavior:
SHOWREEL POSTER
      ↓
User interaction
      ↓
Video loads
      ↓
Video plays

Do not autoplay sound.
The implementation must prioritize user control and page performance.

9. What I Edit
Purpose:
Quickly communicate the types of editing Sanjan provides.
Initial categories:

Short-form
Cinematic
Music-driven

Possible examples:

Instagram Reels
Movie edits
Beat synchronization
High-energy transitions
Phonk/funk-driven edits

The section should not imply unsupported professional services.

10. Editing Philosophy
Purpose:
Communicate how Sanjan approaches editing rather than merely listing software or services.
Core concept:
Editing for impact.
Themes may include:

rhythm
timing
tension
drops
movement
visual elevation
deliberate cuts

This section is primarily informational and brand-positioning oriented.

11. About
Purpose:
Humanize the portfolio and establish basic credibility.
The section should contain:

Sanjan's photograph
Short introduction
Accurate editing experience
Relevant editing volume

Current factual information:

70+ edits created
Approximately 45 published on Instagram
Current editing software: CapCut

Do not present software as the main selling point.
Do not invent professional experience.

12. Contact
The contact section is a primary conversion section.
Primary contact methods:

Instagram
WhatsApp

Instagram:
sanjanedits
WhatsApp:
Use the supported username-based contact mechanism.
Do not display Sanjan's phone number publicly.
The primary CTA should be highly visible and easy to understand.
The contact section should not make visitors search for how to get in touch.

13. Footer
The footer should remain minimal.
Possible contents:

sanjanedits
Instagram
WhatsApp
Projects link
Copyright/year where appropriate

Do not fill the footer with unnecessary navigation or decorative content.

14. Projects Page Architecture
The projects page should support the complete portfolio archive.
Initial expected portfolio size:
Approximately 45 projects.
The architecture must make adding future projects straightforward.
Projects should not require copying large blocks of HTML for every new project.
Prefer a centralized project-data structure.
Example conceptual structure:
const projects = [
  {
    id: "edit-01",
    title: "Project Title",
    category: "movie",
    poster: "...",
    video: "...",
    instagram: "..."
  }
];

The exact schema may evolve, but project content should be separated from rendering logic wherever practical.

15. Project Categories
Initial categories may include:

all
reels
movie
cinematic
music
other

Categories must only be used if they provide meaningful browsing value.
Do not create unnecessary filtering complexity.
If filtering is implemented, it must:

work without page reload
remain accessible
not duplicate project data
not load every video


16. Project Rendering
Project cards should be rendered from centralized project data.
Rendering logic should be separate from:

project data
video playback logic
global site logic

Avoid embedding large amounts of project-specific JavaScript directly into HTML.

17. Video Architecture
Storage
All portfolio videos should be stored externally from the GitHub repository.
Primary video provider:
Cloudinary
GitHub contains the site code and lightweight assets.
Cloudinary contains the heavy video assets.

Video Loading
The default portfolio state should be:
poster first, video later.
Do not automatically load every project video on page load.
Conceptual flow:
PROJECT CARD
     ↓
POSTER IMAGE
     ↓
USER CLICKS PLAY
     ↓
CREATE / ACTIVATE VIDEO
     ↓
LOAD CLOUDINARY SOURCE
     ↓
PLAY VIDEO

The implementation may use:

dynamic source assignment
modal player
inline player activation
<dialog>
another lightweight native approach

Choose the simplest implementation that gives the best UX.

18. Video Player
The site should preferably provide its own lightweight presentation layer rather than relying on Instagram's embedded player for the main portfolio experience.
The player should support:

Play/pause
Audio control through native browser controls or lightweight custom controls
Close/back interaction when modal-based
Mobile usability
Keyboard accessibility
Proper poster frame
Correct aspect ratio

Do not build a feature-heavy media player.
Do not recreate a complete professional video-editing interface.
The objective is simple:
Let visitors watch the edit quickly and comfortably.

19. Instagram Integration
Instagram remains an external proof/source platform.
Each project may optionally contain an Instagram URL.
The visitor may see:
View on Instagram →
The primary portfolio experience should not require leaving the website.
Avoid relying on dozens of Instagram embeds because of:

performance cost
limited visual control
external dependencies
inconsistent presentation

Instagram links are preferred over large numbers of embedded Instagram posts.

20. Media Architecture
Images
Lightweight optimized poster images should be used for portfolio cards.
Preferred formats:

WebP
AVIF where practical

Use appropriate dimensions.
Do not serve unnecessarily large images to small devices.
Video
Cloudinary-hosted video.
Video should be encoded/compressed appropriately for web playback.
Do not use source/export files that are unnecessarily large.

21. Asset Structure
Recommended repository structure:
assets/
├── images/
│   ├── profile/
│   │   └── sanjan.webp
│   │
│   ├── posters/
│   │   ├── edit-01.webp
│   │   ├── edit-02.webp
│   │   └── ...
│   │
│   └── icons/
│
└── fonts/

Actual video files should not be stored here.
Video files belong in Cloudinary.

22. CSS Architecture
CSS should be organized by responsibility.
Recommended structure:
css/
├── base.css
├── layout.css
├── components.css
├── sections.css
├── animations.css
└── responsive.css

Alternative organization is acceptable if it improves maintainability.
The important rule is that CSS responsibilities must remain understandable.
Do not create dozens of tiny CSS files without a clear purpose.

23. JavaScript Architecture
Recommended structure:
js/
├── main.js
├── navigation.js
├── videos.js
└── projects.js

Responsibilities:
main.js

Global initialization
Shared site behavior
Initialization of modules

navigation.js

Mobile navigation
Navigation interactions
Active-state behavior where required

videos.js

Lazy video activation
Video modal/player behavior
Playback state
Video cleanup

projects.js

Project data
Project rendering
Filtering
Project-specific interactions

Do not allow unrelated responsibilities to spread across modules.

24. JavaScript Principles
Prefer:

native DOM APIs
event delegation where appropriate
modular functions
small functions
predictable state
progressive enhancement

Avoid:

unnecessary global variables
duplicated event listeners
repeated DOM queries where avoidable
giant single-file scripts
unnecessary abstractions
framework-like architecture without a framework


25. Animation Architecture
Animations should primarily use CSS.
JavaScript should trigger state changes rather than continuously calculate animation whenever possible.
Preferred properties:

transform
opacity
clip-path

Use caution with:

filter
blur
large box-shadow animations

Avoid expensive continuous animation.
Animation should never interfere with:

navigation
reading
video playback
mobile usability
page loading


26. Responsive Architecture
Use a responsive-first layout system.
Prefer:

fluid sizing
CSS Grid
Flexbox
clamp()
relative units
container-based layouts
aspect-ratio

Avoid excessive breakpoint-specific overrides.
The design must adapt rather than simply shrink.

27. Dependency Architecture
The default production page should require no external JavaScript library.
External resources should be minimized.
Each external dependency adds:

network requests
failure points
maintenance
potential performance cost
AI-agent complexity

Only use an external dependency when its benefit is clearly justified.

28. Data Architecture
Portfolio content should be separated from visual rendering logic.
Preferred:
project data
     ↓
rendering logic
     ↓
HTML cards
     ↓
interaction

Not:
HTML
+ duplicated video logic
+ duplicated metadata
+ duplicated URLs
+ duplicated event listeners

This makes portfolio updates easier and reduces AI-generated inconsistency.

29. AI-Agent Safety Architecture
This project will be edited by multiple AI coding systems.
Therefore:

Components must have clear boundaries.
Files must have clear responsibilities.
Shared design tokens should have a single source of truth.
Project data should have a single source of truth.
Global behavior should not be duplicated.
Unrelated sections must not depend on fragile selectors.
Avoid overly clever abstractions.
Prefer readable code over compressed code.

The architecture must make localized changes possible.
Example:
Changing a portfolio-card hover effect should not require modifying the hero.
Changing the hero should not require modifying project data.
Changing project data should not require rewriting video-player logic.

30. Single Source of Truth
The following must each have one authoritative location wherever practical:
Design tokens
Global CSS custom properties.
Project data
Central project data structure.
Video behavior
videos.js.
Navigation behavior
navigation.js.
Global initialization
main.js.
Project architecture
This file.
Current project state
12-CURRENT-STATE.md.
Do not create competing sources of truth without a documented reason.

31. URL and Path Architecture
The site must work correctly when hosted on GitHub Pages.
Use paths that remain compatible with static hosting.
Avoid assumptions about:

server-side rendering
backend routing
server rewrites
Node.js runtime
database access

The site must function as a static GitHub Pages project.

32. SEO Architecture
The site should contain basic static-site SEO foundations:

meaningful <title>
meta description
semantic headings
descriptive URLs
appropriate image alt text
canonical URL when a domain is later established
Open Graph metadata
Twitter/X card metadata where useful
robots.txt
sitemap.xml

Do not add SEO spam.
The content should remain written for humans.

33. Accessibility Architecture
Interactive components must have:

keyboard access
focus management where necessary
semantic controls
visible focus states
accessible labels
appropriate ARIA only when native HTML is insufficient

Modals/video dialogs must support:

opening by keyboard
closing by keyboard
sensible focus behavior
escape-key closing where appropriate
mobile usability


34. Performance Architecture
Performance is a core architectural requirement, not a final optimization step.
Initial page should prioritize:

HTML
Critical CSS
essential fonts
lightweight imagery
only then non-critical resources

Heavy videos must not be part of the initial critical path.
Avoid:

unnecessary third-party embeds
unnecessary JavaScript
large libraries
oversized images
eager loading of every video
blocking resources that do not need to block rendering


35. Progressive Enhancement
The basic website should remain understandable and usable even if advanced JavaScript interactions fail.
Examples:
A project should still have:

title
poster
link

even if its enhanced video interaction fails.
A navigation link should remain a normal link.
A contact link should remain usable without JavaScript.

36. Future Extensibility
The architecture should make these future changes reasonably easy:

Add new portfolio projects
Remove projects
Change project categories
Change Cloudinary URLs
Change poster images
Add testimonials later
Add custom domain later
Add additional contact methods later
Add additional portfolio sections later

Do not prematurely architect for:

user accounts
databases
CMS systems
complex authentication
dashboards
e-commerce

Those are outside the current project scope.

37. Architecture Non-Negotiables
The following are locked unless explicitly changed:

Static website.
GitHub Pages hosting.
Vanilla HTML/CSS/JS.
Cloudinary for portfolio video storage/delivery.
No mass loading of portfolio videos.
Poster-first media architecture.
Homepage + projects page.
Centralized project data.
Lightweight dependency footprint.
Performance is a first-class requirement.
Portfolio playback should preferably happen on the website.
Instagram remains a secondary external destination.
Architecture must support safe localized AI-assisted changes.

Any change to these principles must be explicitly documented in 13-DESIGN-DECISIONS.md.
