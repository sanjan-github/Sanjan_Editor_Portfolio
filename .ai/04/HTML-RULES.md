HTML RULES
1. Purpose
This document defines the HTML standards for the sanjanedits portfolio.
HTML is responsible for:

Document structure
Content hierarchy
Semantic meaning
Accessibility semantics
Navigation
Media structure
Metadata
Progressive enhancement

HTML must not be used as a substitute for CSS or JavaScript.
The goal is to produce HTML that is:

Semantic
Accessible
Valid
Readable
Maintainable
SEO-friendly
Lightweight
Easy for AI coding agents to understand


2. Core HTML Principle
Always use:
the most appropriate HTML element for the content or behavior.
Prefer semantic HTML over generic containers.
Examples:
<nav>
<section>
<article>
<header>
<footer>
<main>
<figure>
<figcaption>
<button>
<a>

instead of using <div> for everything.
Semantic HTML provides built-in browser and accessibility behavior and generally reduces the amount of JavaScript required to reproduce native functionality.

3. Document Declaration
Every HTML document must begin with:
<!doctype html>

Use:
<html lang="en">

unless the primary language of the page is intentionally changed.

4. Basic Document Structure
Every page should follow a predictable structure:
<!doctype html>
<html lang="en">
<head>
    ...
</head>

<body>
    <header>
        ...
    </header>

    <main>
        ...
    </main>

    <footer>
        ...
    </footer>
</body>
</html>

Do not place the primary page content outside <main>.
A page should normally have one primary <main> element.

5. Head Element
Every page must have a meaningful <head> containing at minimum:

Character encoding
Viewport configuration
Page title
Meta description where appropriate

Recommended foundation:
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>...</title>
<meta name="description" content="...">

The viewport meta tag is required for proper responsive behavior on mobile devices.

6. Page Titles
Each page must have a unique and meaningful <title>.
Example:
<title>sanjanedits — Video Editor</title>

Projects page:
<title>Projects — sanjanedits</title>

Do not use:
<title>Home</title>

unless there is a strong reason.
The title should identify both the page and the brand where practical.

7. Meta Description
Each primary page should have a concise, accurate meta description.
Do not stuff keywords into the description.
The description should explain what the visitor can expect.
Example concept:
<meta
    name="description"
    content="Short-form video editing portfolio by sanjanedits, featuring cinematic, music-driven and high-impact edits."
>

Do not claim unsupported experience, clients or results.

8. Open Graph Metadata
The site should include Open Graph metadata for sharing where practical.
Examples:
<meta property="og:title" content="sanjanedits — Video Editor">
<meta property="og:description" content="...">
<meta property="og:type" content="website">
<meta property="og:image" content="...">

Social preview assets must be real project assets.
Do not use fake imagery.

9. Language
Use clear, human-readable language.
Avoid unnecessary abbreviations and ambiguous labels.
HTML content should be understandable when read without visual styling.
MDN recommends clear language and meaningful text labels as part of accessible HTML.

10. Heading Hierarchy
Use headings according to document structure, not visual size.
Preferred hierarchy:
<h1>
    ↓
<h2>
    ↓
<h3>

Do not skip levels merely to obtain a desired font size.
CSS controls visual size.
HTML controls semantic hierarchy.

11. One Primary H1
Each page should normally have one primary <h1>.
Homepage example:
<h1>Video Editor</h1>

The exact visual presentation may be extremely large, but it remains an HTML heading.
Projects page should have its own meaningful <h1>.
Do not use multiple <h1> elements simply because several things appear visually important.

12. Sections
Use <section> when a region represents a distinct thematic section.
Example:
<section aria-labelledby="work-heading">
    <h2 id="work-heading">Selected Work</h2>
    ...
</section>

Do not wrap every visual block in <section>.
A section should have a meaningful purpose.

13. Articles
Use <article> for self-contained pieces of content that could conceptually stand independently.
Portfolio project cards are good candidates:
<article class="project-card">
    ...
</article>

Do not use <article> simply because a block looks like a card.
Semantic meaning determines the element.

14. Header
Use <header> for introductory content or page/section header content.
The site-wide header may contain:

Brand
Navigation
Primary navigation controls

A section may also have its own <header> where appropriate.

15. Navigation
Use:
<nav>

for navigation links.
Example:
<nav aria-label="Primary">
    <a href="/">Home</a>
    <a href="/projects.html">Projects</a>
</nav>

Do not use <div> plus click handlers for navigation.
Navigation should remain usable without JavaScript.

16. Main
Use exactly one primary <main> for the page's unique content.
Example:
<main id="main-content">
    ...
</main>

The id can also support a skip link.

17. Footer
Use <footer> for site-level closing content.
Potential content:

Brand
Contact links
Social links
Copyright
Additional navigation

Do not fill the footer with unnecessary content purely for visual density.

18. Skip Link
Include a keyboard-accessible skip link where appropriate:
<a class="skip-link" href="#main-content">
    Skip to main content
</a>

The link may be visually minimized until focused.
It must become visible when keyboard focused.
This improves navigation for keyboard and assistive-technology users.

19. Div Usage
<div> is allowed.
It should be used for generic layout/grouping when no more meaningful semantic element exists.
Do not ban <div>.
Do not use <div> as a replacement for:

<button>
<a>
<nav>
<section>
<article>
<header>
<footer>
headings

when those semantic elements are appropriate.

20. Span Usage
<span> is appropriate for:

Inline styling hooks
Small text fragments
Decorative text wrappers

Do not use <span> as a button or link.

21. Buttons
Use <button> for actions.
Examples:

Open video
Open mobile menu
Close video dialog
Change project filter
Toggle playback controls

Example:
<button type="button">
    Watch Edit
</button>

Do not build buttons using:
<div onclick="...">

or:
<span onclick="...">

Native buttons provide keyboard accessibility and browser behavior automatically.

22. Links
Use <a> for navigation.
Example:
<a href="/projects.html">
    View Projects
</a>

External:
<a href="https://instagram.com/sanjanedits">
    View on Instagram
</a>

Do not use <button> when the action is fundamentally navigation.

23. Link Text
Links must describe their destination or action.
Prefer:
View Projects
Watch Reel
View on Instagram
Message on WhatsApp

Avoid:
Click here
More
Go
Here

Meaningful link text benefits accessibility because links may be encountered outside their surrounding context.

24. External Links
External links must contain real URLs.
Do not invent destinations.
Instagram:
https://www.instagram.com/sanjanedits/

The final implementation may use the appropriate canonical URL.
Do not expose Sanjan's private WhatsApp phone number.

25. Images
Use <img> for meaningful images.
Example:
<img
    src="/assets/images/profile/sanjan.webp"
    alt="Sanjan"
    width="..."
    height="..."
>

Every meaningful image must have an appropriate alt.

26. Decorative Images
If an image is purely decorative:
<img src="..." alt="">

Do not put meaningless descriptions into alt.
Do not write:
alt="image"

or:
alt="photo"

unless that is genuinely meaningful.

27. Profile Photograph Alt Text
The profile image should have meaningful alternative text.
Example:
alt="Sanjan"

Do not write a long artificial description when a concise identification is sufficient.

28. Portfolio Poster Alt Text
Portfolio poster images should communicate the relevant project identity.
Example:
alt="Cinematic movie edit"

The exact alt text should reflect the actual project.
Do not include unnecessary marketing language.

29. Width and Height
Images should include explicit intrinsic dimensions where practical.
Example:
<img
    src="..."
    alt="..."
    width="1200"
    height="1500"
>

Explicit dimensions help the browser reserve the correct space and reduce layout instability. MDN specifically recommends using width and height for media to avoid jerky layout updates while resources load.

30. Responsive Images
Use responsive image techniques where beneficial.
Possible tools:
<picture>

and:
srcset
sizes

Example:
<img
    src="poster-800.webp"
    srcset="
        poster-480.webp 480w,
        poster-800.webp 800w,
        poster-1200.webp 1200w
    "
    sizes="(max-width: 768px) 100vw, 50vw"
    width="1200"
    height="1500"
    alt="..."
>

Do not serve unnecessarily large images to small screens.

31. Lazy Loading Images
Below-the-fold non-critical images may use:
loading="lazy"

Example:
<img
    src="..."
    loading="lazy"
    alt="..."
>

Do not blindly lazy-load every image.
Critical above-the-fold imagery should be handled intentionally.

32. Fetch Priority
Use fetchpriority only when there is a clear performance reason.
Example:
fetchpriority="high"

may be appropriate for a genuinely critical hero image.
Do not mark multiple resources as high priority.
The browser should be allowed to prioritize most resources normally.

33. Video
Use the native <video> element for portfolio playback.
Example:
<video
    controls
    playsinline
    preload="none"
    poster="/assets/images/posters/edit-01.webp"
>
    <source src="..." type="video/mp4">
</video>

The exact implementation may use JavaScript to assign the video source only when required.

34. Video Poster
Video elements should use a representative poster image whenever practical.
Example:
poster="/assets/images/posters/edit-01.webp"

The poster must visually represent the actual edit.
Do not use generic placeholder graphics.

35. Video Preload
Default portfolio behavior should avoid unnecessary video downloads.
Prefer:
preload="none"

when the video is not immediately required.
The actual video source may be assigned after user interaction.
Do not preload dozens of portfolio videos.
MDN documents the native <video> element and its loading controls, including preload.

36. Video Controls
Native video controls are preferred unless a custom interface provides a real UX benefit.
If custom controls are created, they must not remove essential functionality or accessibility.
Do not create a visually beautiful video player that is difficult to operate.

37. Video Captions and Text Alternatives
If a video contains meaningful spoken dialogue, captions or appropriate text alternatives should be considered.
For music-driven edits with no meaningful speech, captions may not be relevant.
Do not create fake captions solely to satisfy a checklist.
Accessible multimedia should provide appropriate alternatives for the actual content.

38. Audio
Do not use automatic audible playback on initial page load.
If media is intentionally started by the visitor, normal audio controls must remain available.

39. Dialog / Video Modal
If portfolio videos open in a modal, prefer semantic dialog behavior.
Possible implementation:
<dialog>
    ...
</dialog>

A dialog should have:

Meaningful accessible labeling
Close control
Keyboard support
Focus management
Sensible return focus

Use native semantics where possible rather than recreating dialog behavior from generic <div> elements.

40. Forms
A contact form is not currently required.
If one is added later, use native form elements:
<form>
    <label for="name">Name</label>
    <input id="name" name="name" type="text">

    <label for="message">Message</label>
    <textarea id="message" name="message"></textarea>

    <button type="submit">Send</button>
</form>

Every input must have an associated accessible label.
MDN explicitly recommends semantic form controls and proper <label> associations.

41. Forms and GitHub Pages
Do not assume GitHub Pages provides server-side form processing.
If a form is introduced later, its submission mechanism must explicitly use a suitable external service or client-side mechanism.
Do not create a fake form that appears to work but cannot actually deliver messages.

42. ARIA
Use ARIA only when native HTML semantics are insufficient.
First preference:
native HTML
Second preference:
appropriate ARIA enhancement
Do not add ARIA attributes everywhere.
Incorrect ARIA can make accessibility worse rather than better.

43. ARIA Roles
Do not add redundant roles.
For example, avoid:
<button role="button">

because <button> already has button semantics.
Likewise, do not replace native semantics with custom roles unnecessarily.

44. ARIA Labels
Use aria-label or aria-labelledby only when visible text does not adequately label the control.
Example:
<button
    type="button"
    aria-label="Close video"
>
    ×
</button>

Do not add an ARIA label that conflicts with visible text.

45. Hidden Content
Use appropriate techniques depending on the desired behavior.
Do not use:
display: none;

when content is supposed to remain available to assistive technologies.
Do not hide meaningful content merely to create visual effects.

46. Semantic Source Order
HTML source order should make sense even without CSS.
The basic reading/navigation order should remain logical:
Header
Hero
Work
Showreel
Capabilities
About
Contact
Footer

Do not rely on CSS positioning to completely reorder the meaning of the document.
Source order is important for accessibility and logical navigation.

47. CSS Is Not HTML
Do not use HTML elements solely because they produce a desired default visual appearance.
Examples:
Do not use:
<h2>

just because you want large text.
Do not use:
<button>

just because you want a rounded rectangle.
The HTML element must represent the actual meaning/function.
CSS controls the appearance.

48. JavaScript Is Not HTML
Do not use JavaScript to reproduce behavior already provided natively by HTML.
Examples:
Do not create a custom click handler for basic navigation.
Do not create a custom keyboard handler for a button that could simply be a <button>.
Do not recreate form semantics unnecessarily.
Native HTML should handle as much behavior as practical.

49. Data Attributes
data-* attributes may be used for machine-readable metadata needed by JavaScript.
Example:
<article
    class="project-card"
    data-project-id="edit-01"
    data-category="movie"
>

Use data attributes for behavior/data, not styling.
Do not store large amounts of duplicate data in HTML if the project-data architecture already provides a centralized source of truth.

50. IDs
IDs must be unique within a document.
Use IDs primarily for:

Fragment navigation
Labels
Relationships such as aria-labelledby
JavaScript hooks when a unique element is required

Do not generate unnecessary IDs.

51. Classes
Classes are primarily for styling and reusable behavior hooks.
Use descriptive names.
Prefer:
project-card
hero-content
video-dialog
site-nav
contact-cta

Avoid meaningless names such as:
box1
thing
container2
magic


52. JavaScript Hooks
When an element exists specifically as a JavaScript hook, use an understandable convention.
For example:
<button data-action="open-video">

or a clearly named class.
Do not make JavaScript depend on fragile selectors such as:
main > div:nth-child(4) > div:nth-child(2)

The HTML should remain understandable even after content changes.

53. SEO Structure
Important content should exist in the HTML as actual text.
Do not put important information exclusively inside:

Images
Canvas
SVG
JavaScript-generated effects

Search engines and assistive technologies should be able to access important textual content through the document structure.
Semantic HTML benefits accessibility and can also support search-engine understanding.

54. SEO and Headings
Use headings for actual content hierarchy.
Do not create:
<h1>View Projects</h1>

when it is actually just a button or link.
Do not stuff headings with search keywords.

55. Lists
Use semantic lists where content is genuinely a list.
Examples:
Navigation:
<ul>
    <li><a href="/">Home</a></li>
    <li><a href="/projects.html">Projects</a></li>
</ul>

Project filters may also use lists where semantically appropriate.
Do not use lists simply to achieve a particular layout.

56. Figures
Use <figure> and <figcaption> when an image/video and its caption form a meaningful content unit.
Example:
<figure>
    <img src="..." alt="...">
    <figcaption>Movie edit</figcaption>
</figure>

Do not use <figure> automatically for every image.

57. Decorative SVG
Inline SVG may be used for icons and decorative visuals.
If an SVG is meaningful content, provide appropriate accessible labeling.
If purely decorative, make it appropriately ignored by assistive technologies.
Do not turn every decorative SVG into an announced element.

58. SVG Icons
Prefer inline SVG or simple external SVG assets for project icons and controls.
Do not add a full icon library for a few icons.
Interactive SVG icons must remain inside semantic controls.
Example:
<button type="button" aria-label="Play edit">
    <svg aria-hidden="true">
        ...
    </svg>
</button>


59. Inline Styles
Do not use inline CSS for normal visual styling.
Avoid:
<div style="color: red;">

Visual styling belongs in CSS.
Inline style may only be used when there is a specific architectural reason.

60. Inline JavaScript
Do not use inline event handlers.
Avoid:
<button onclick="openVideo()">

Prefer JavaScript event listeners.
This keeps behavior separate from structure and makes the codebase easier to maintain.

61. Comments
HTML comments may be used for genuinely useful architectural notes.
Do not litter markup with comments describing obvious code.
Good:
<!-- Featured project: intentionally loaded before supporting projects -->

Bad:
<!-- This is a div -->
<div>


62. Duplicate Content
Avoid duplicating the same project information across:

HTML
JavaScript
data attributes
multiple pages

Portfolio metadata should have a centralized source of truth whenever practical.

63. Dynamic Project Rendering
The Projects page may use JavaScript to render project cards from centralized project data.
Generated HTML must still use semantic elements.
Example:
<article>
    <h2>Project Title</h2>
    ...
</article>

Do not sacrifice semantic HTML simply because content is generated dynamically.
Semantic HTML remains valuable when generated by JavaScript.

64. Noscript
Do not rely on <noscript> as a replacement for proper architecture.
Where reasonable, important navigation and basic content should already exist as normal HTML.
JavaScript should enhance the experience rather than unnecessarily create the entire site's fundamental structure.

65. Progressive Enhancement
The page should remain fundamentally understandable if JavaScript fails.
At minimum:

Navigation should work.
Text content should exist.
Project identity should exist.
External links should work.
Contact links should work.

Advanced interactions such as video modals and filtering may require JavaScript.

66. Loading States
If a video or dynamic component requires loading, its HTML should reserve appropriate space.
Do not create layout jumps when dynamic content appears.
Use:

known aspect ratios
explicit dimensions
placeholders/posters
appropriate containers


67. Error States
Dynamic content should have understandable fallback HTML where practical.
For example, if a video fails:

Project title remains visible.
Poster remains available if possible.
Instagram link remains usable when available.

Do not replace the whole project card with a blank region.

68. Performance-Friendly HTML
Keep the HTML structure as simple as possible.
Avoid deeply nested markup without a reason.
Bad:
<div>
    <div>
        <div>
            <div>
                ...
            </div>
        </div>
    </div>
</div>

Prefer meaningful, shallow structure.
The DOM should contain what the page needs, not what a visual effect happens to need.

69. Third-Party Embeds
Avoid third-party iframe embeds unless they provide a strong user benefit.
Primary portfolio playback should use Cloudinary-hosted videos rather than embedding dozens of Instagram posts.
If an iframe is genuinely required, document the reason because third-party embeds can introduce additional network, performance and privacy considerations.

70. Security
Do not insert untrusted user-controlled strings directly into HTML using unsafe mechanisms.
When dynamically inserting project content:

Use textContent for plain text where possible.
Use safe DOM APIs.
Avoid unnecessary innerHTML.
Never execute project metadata as code.

Portfolio data is currently developer-controlled, but safe patterns should still be used.

71. File Paths
Use predictable relative paths compatible with GitHub Pages.
Examples:
/assets/images/profile/sanjan.webp
/assets/images/posters/edit-01.webp
/projects.html

Avoid local development paths or filesystem-specific URLs.
Never use:
C:\Users\Sanjan\...

inside production HTML.

72. External URLs
External URLs must use HTTPS where the service supports it.
Do not use insecure HTTP URLs unless there is a specific unavoidable requirement.

73. HTML Validation
Before considering an HTML change complete, inspect for:

Invalid nesting
Missing closing tags
Duplicate IDs
Broken links
Missing alt
Missing labels
Incorrect heading hierarchy
Invalid attributes
Broken paths
Console errors caused by markup assumptions

Use a standards-oriented validator when practical.

74. Formatting
HTML should be readable.
Use consistent indentation.
Prefer:
<section class="projects-section">
    <div class="container">
        <h2>Selected Work</h2>
    </div>
</section>

over compressed unreadable markup.
Do not minify source HTML during development.
Production optimization should not make the source repository difficult to maintain.

75. Naming Conventions
Use lowercase filenames.
Prefer:
index.html
projects.html

not:
Index.HTML
ProjectsPage.HTML

Class names should be descriptive and consistent.

76. Accessibility Priority
When visual requirements conflict with semantic/accessibility requirements:
Accessibility and correct semantics win.
The visual appearance should be achieved through CSS rather than breaking HTML semantics.
MDN emphasizes that correct semantic HTML provides substantial accessibility benefits without requiring complex additional code.

77. AI-Agent Editing Rules
AI agents modifying HTML must:

Read this document before making structural changes.
Preserve semantic structure.
Avoid replacing semantic elements with generic containers.
Avoid changing unrelated sections.
Avoid changing heading hierarchy without a clear reason.
Preserve existing IDs and classes unless modification is necessary.
Avoid duplicating project data.
Avoid adding unnecessary wrappers.
Avoid adding ARIA unnecessarily.
Validate the resulting document structure.


78. HTML Change Scope
A request affecting one component should normally modify only the relevant markup.
Example:
"Change the portfolio card layout."
May modify:
Project card markup

Does not automatically authorize:
Hero markup
Navigation markup
Contact markup
Global metadata

Unless the change genuinely requires it.

79. HTML Source of Truth
HTML should define:
What the content is.
CSS should define:
What the content looks like.
JavaScript should define:
How the content behaves.
Do not mix these responsibilities unnecessarily.

80. Non-Negotiable HTML Rules

Use semantic HTML.
Use one primary <main> per page.
Maintain a logical heading hierarchy.
Use <button> for actions.
Use <a> for navigation.
Use meaningful link text.
Provide appropriate image alt text.
Use explicit media dimensions/aspect ratios where practical.
Use native <video> for portfolio playback.
Use poster images for videos.
Avoid loading unnecessary videos.
Avoid third-party embeds unless justified.
Keep important content available as HTML text.
Use ARIA only when native HTML is insufficient.
Preserve keyboard-accessible native controls.
Keep source order logical.
Keep the DOM reasonably shallow.
Keep project data centralized.
Keep HTML readable and maintainable.
Do not allow AI-generated visual changes to compromise semantic structure.
Do not use HTML elements solely to obtain a desired visual appearance.
Prefer progressive enhancement.
Preserve existing structure during localized changes.
Validate structural changes before considering them complete.

