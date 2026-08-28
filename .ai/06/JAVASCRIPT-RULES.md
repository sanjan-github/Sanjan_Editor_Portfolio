JAVASCRIPT RULES
1. Purpose
This document defines the JavaScript architecture, behavior, performance, accessibility, state management, and AI-editing rules for the sanjanedits portfolio.
JavaScript is responsible for:

User interactions
UI state
Navigation behavior
Video playback behavior
Project filtering
Dialog/modal behavior
Progressive enhancement
Small interactive effects

JavaScript must not be used to replace HTML semantics or CSS presentation unnecessarily.
The fundamental separation is:
HTML
→ structure and meaning

CSS
→ appearance and animation

JavaScript
→ behavior and state


2. Core Principle
JavaScript should be:

Minimal
Modular
Predictable
Readable
Performant
Accessible
Easy to debug
Easy for multiple AI agents to modify safely

Do not add JavaScript merely because an effect could technically be implemented with JavaScript.
Prefer the simplest solution that achieves the required behavior.

3. Technology
Use:
Vanilla JavaScript
Do not introduce:

React
Vue
Angular
jQuery
GSAP
large animation libraries
state-management libraries
unnecessary utility libraries

unless explicitly approved and documented in:
.ai/13-DESIGN-DECISIONS.md


4. JavaScript Files
Preferred structure:
js/
├── main.js
├── navigation.js
├── videos.js
└── projects.js

Responsibilities must remain separated.

5. main.js
main.js is responsible for:

Initializing site-wide JavaScript
Detecting available modules
Calling module initialization functions
Shared global behavior when genuinely necessary

It should not contain the complete implementation of every feature.
Example conceptual structure:
import { initNavigation } from "./navigation.js";
import { initVideos } from "./videos.js";
import { initProjects } from "./projects.js";

initNavigation();
initVideos();
initProjects();

The exact implementation may vary.

6. navigation.js
Responsible for:

Mobile navigation
Menu open/close state
Navigation-specific interactions
Navigation accessibility

It must not contain:

Video playback logic
Project rendering
Portfolio data
Hero animation logic


7. videos.js
Responsible for:

Portfolio video activation
Lazy video loading
Video playback
Video modal/dialog behavior
Video cleanup
Playback state
Video-related error handling

It must not contain:

Project filtering logic
Global navigation logic
Global typography/layout logic


8. projects.js
Responsible for:

Project data
Project rendering
Project filtering
Project card interactions that are specific to projects

It should not contain the internal implementation of video playback.
Instead:
projects.js
    ↓
identifies selected project
    ↓
videos.js
    ↓
handles playback


9. Modules
Use ES modules where practical.
Example:
<script type="module" src="/js/main.js"></script>

and:
import { initVideos } from "./videos.js";

Modules should have clear responsibilities.
Avoid making every file dependent on every other file.

10. Initialization
Initialization should happen predictably.
Prefer:
function init() {
    ...
}

init();

or an equivalent module initialization pattern.
Do not scatter initialization calls randomly across files.

11. DOM Ready
When scripts use type="module" and are placed appropriately, there may be no need for a separate DOMContentLoaded wrapper.
Do not automatically write:
document.addEventListener("DOMContentLoaded", () => {
    ...
});

everywhere.
Use it only when actually necessary.

12. DOM Selection
Prefer clear DOM references.
Example:
const projectGrid = document.querySelector(".projects-grid");

Do not repeatedly query the same DOM element unnecessarily.
Where appropriate, cache frequently used references during module initialization.

13. Selectors
JavaScript selectors must remain stable.
Prefer:
document.querySelector(".project-card");

or:
document.querySelector("[data-project-id]");

Avoid fragile structural selectors:
document.querySelector("main > div:nth-child(3) > div:nth-child(2)");

JavaScript must not depend on the visual arrangement of the DOM.

14. Data Attributes
Use data-* attributes when JavaScript needs a small amount of metadata attached to an element.
Example:
<article
    class="project-card"
    data-project-id="edit-01"
>

Use them for behavior/data relationships.
Do not use data attributes as a substitute for CSS classes when the information is purely visual.

15. Project Data
Project data should have a single source of truth.
Example:
const projects = [
    {
        id: "edit-01",
        title: "Project Title",
        category: "movie",
        poster: "/assets/images/posters/edit-01.webp",
        video: "https://res.cloudinary.com/...",
        instagram: "https://www.instagram.com/..."
    }
];

Do not duplicate the same:

title
category
poster URL
video URL
Instagram URL

across multiple JavaScript files.

16. Project IDs
Every project should have a stable unique ID.
Example:
edit-01
edit-02
movie-01
reel-01

Do not use array indexes as the only identity of a project.
Array indexes can change when projects are added, removed or reordered.

17. Project Rendering
Project cards should be generated from project data where practical.
Rendering logic should:

Receive project data.
Create semantic markup.
Insert required content.
Attach necessary interaction hooks.

Do not create large amounts of duplicated HTML strings manually for every project.

18. Avoid Unsafe HTML Injection
Prefer DOM APIs and textContent for text content.
Example:
title.textContent = project.title;

Avoid unnecessary:
element.innerHTML = userValue;

Do not insert untrusted content into HTML without appropriate sanitization.
Even though project data is currently developer-controlled, safe DOM practices keep the architecture robust.

19. Event Listeners
Use:
addEventListener()

for event handling.
Example:
button.addEventListener("click", handleClick);

Do not use inline HTML event handlers:
onclick="..."

Do not mix several different event-handling approaches without a reason.
MDN recommends addEventListener() and documents its support for structured event management.

20. Event Delegation
Use event delegation when many similar interactive elements exist.
For example, instead of attaching separate listeners to dozens of project cards:
projectGrid.addEventListener("click", handleProjectClick);

then identify the relevant project with:
event.target.closest("[data-project-id]");

Event delegation can reduce the number of listeners and simplify dynamically rendered interfaces. MDN specifically recommends delegation when appropriate for many child elements.

21. Event Listener Cleanup
If an event listener is temporary, remove it when it is no longer needed.
Prefer either:
element.removeEventListener("click", handler);

or an AbortController for groups of listeners when appropriate.
Example:
const controller = new AbortController();

element.addEventListener("click", handler, {
    signal: controller.signal
});

controller.abort();

MDN documents AbortSignal as a way to remove associated event listeners together.
Do not create listeners that remain active forever when their feature has already been destroyed.

22. Event Listener Duplication
Do not accidentally register the same listener repeatedly.
Bad:
function openProject() {
    button.addEventListener("click", handler);
}

if openProject() can run repeatedly.
Before adding listeners, ensure the initialization architecture does not execute twice.

23. Event Frequency
Be careful with high-frequency events such as:

mousemove
pointermove
scroll
resize
touchmove

Do not perform heavy DOM work on every event.
Events that fire continuously can become expensive, and MDN recommends reducing unnecessary work and listeners for these cases.

24. requestAnimationFrame
Use requestAnimationFrame() when JavaScript genuinely needs to update something visually based on continuous input.
Example conceptual pattern:
let frameId = null;

window.addEventListener("pointermove", (event) => {
    latestX = event.clientX;

    if (frameId === null) {
        frameId = requestAnimationFrame(() => {
            updateCursor(latestX);
            frameId = null;
        });
    }
});

Do not perform repeated DOM writes directly on every mousemove/pointermove event.

25. Pointer Effects
The custom cursor or pointer interactions must:

Run only where useful
Be disabled or simplified on touch devices
Avoid expensive calculations
Avoid excessive DOM updates
Never block normal interaction

A decorative cursor must never become the only way to understand interaction.

26. Scroll Handling
Avoid heavy scroll listeners.
If a requirement can be handled with:
IntersectionObserver

prefer that approach.
IntersectionObserver is designed to efficiently observe when elements enter or leave the viewport and is useful for lazy-loading and reveal behavior.

27. IntersectionObserver
Use IntersectionObserver for:

Reveal animations
Lazy media activation
Visibility-based enhancements

Example conceptual flow:
element approaches viewport
        ↓
IntersectionObserver fires
        ↓
add state class
        ↓
CSS performs animation

Do not continuously calculate viewport position manually with scroll.

28. Observer Cleanup
When an observer is no longer needed, disconnect it:
observer.disconnect();

Do not leave observers running indefinitely for destroyed components.

29. CSS and JavaScript Separation
JavaScript should generally change state.
CSS should determine appearance.
Prefer:
element.classList.add("is-active");

with CSS:
.is-active {
    ...
}

Avoid directly setting a large number of style properties from JavaScript.
Bad:
element.style.transform = "...";
element.style.opacity = "...";
element.style.color = "...";
element.style.padding = "...";

Use direct style updates only where dynamic values genuinely require them.

30. State Management
Keep UI state explicit.
Examples:
is-open
is-active
is-playing
is-loading
is-error

JavaScript should maintain a clear relationship between application state and DOM state.
Do not create hidden state that exists only inside arbitrary closures when the UI needs to reflect it.

31. Avoid Global Mutable State
Do not create a large collection of global variables:
let currentProject;
let currentVideo;
let currentModal;
let currentFilter;
let currentMouse;
let isPlaying;
...

Global state becomes difficult for multiple AI agents to reason about.
Keep state local to the module that owns it.

32. Constants
Use constants for values that should not change.
Example:
const SELECTORS = {
    projectGrid: ".projects-grid",
    videoDialog: "#video-dialog"
};

Do not create constants for values that are used only once unless doing so substantially improves readability.

33. Magic Strings
Avoid repeatedly scattering state strings throughout JavaScript.
Example:
const STATES = {
    open: "open",
    closed: "closed",
    loading: "loading"
};

Only introduce such abstractions where repetition justifies them.
Do not over-engineer simple state.

34. Functions
Functions should have one clear responsibility.
Prefer:
openVideo()
closeVideo()
loadVideo()
renderProject()
filterProjects()

over one giant function such as:
handleEverything()


35. Function Size
Avoid extremely large functions.
If a function has multiple unrelated responsibilities, split it.
However, do not create dozens of tiny functions that make simple logic harder to follow.
Prioritize readability.

36. Naming
Use descriptive names.
Good:
openVideoDialog()
loadProjectVideo()
renderProjects()
applyProjectFilter()

Bad:
doThing()
handleIt()
x()
process()
magicFunction()

Names should communicate intent.

37. Boolean Naming
Boolean variables should communicate their state.
Prefer:
isOpen
isPlaying
isLoading
hasVideo

instead of:
open
play
loadingStateThing


38. Error Handling
Dynamic features must handle failure gracefully.
Potential failures include:

Cloudinary video fails to load
Network unavailable
Project data missing
DOM element unavailable
Video playback rejected
External resource unavailable

Errors should not leave the interface permanently broken.

39. Video Error Handling
When a video fails:

Keep the poster visible when possible.
Stop loading if appropriate.
Show a comprehensible error state.
Provide a retry option when practical.
Provide the Instagram link when available.

Do not display raw browser/network errors to visitors.

40. Video Loading Architecture
Videos must be loaded only when necessary.
Preferred:
project data
    ↓
poster shown
    ↓
visitor activates project
    ↓
Cloudinary URL assigned
    ↓
video loads
    ↓
video plays

Do not create requests for all 45 videos on page initialization.
MDN recommends lazy loading non-critical video/media to reduce initial network and processing costs.

41. Cloudinary URLs
Cloudinary video URLs should be stored in project data.
Do not duplicate Cloudinary URLs throughout multiple HTML files and JavaScript modules.
Example:
{
    id: "edit-01",
    video: "https://res.cloudinary.com/..."
}

The implementation should consume the stored URL.

42. Dynamic Video Source Assignment
If using dynamic loading, do not set the heavy video source until the video is actually required.
Conceptual:
video.src = project.video;
video.load();
video.play();

The exact implementation may vary.
The core requirement is:
No unnecessary video network request before user intent.

43. Video Cleanup
When closing a video modal:

Pause playback.
Reset relevant state.
Release unnecessary resources where appropriate.
Prevent hidden playback.
Restore focus.

Do not allow invisible videos to continue consuming CPU/network resources.

44. Video Autoplay
Do not force audible autoplay on initial page load.
User intent should initiate normal portfolio playback.
Muted preview behavior may be implemented where useful.

45. Native Video
Use the native HTML <video> API.
Prefer native functionality for:

Play/pause
Seeking
Audio
Fullscreen where appropriate

Do not recreate browser video functionality unnecessarily.

46. Video Modal
If videos open in a dialog, prefer the native <dialog> element.
Opening:
dialog.showModal();

Closing:
dialog.close();

The native modal behavior provides useful browser semantics, including background inertness and Escape handling.

47. Dialog Accessibility
When opening a video dialog:

Ensure focus moves appropriately.
Ensure the close button is reachable.
Ensure the dialog has a meaningful label.
Ensure Escape closes it.
Restore focus to the triggering control after closing where appropriate.

The native <dialog> element provides important modal behavior, but the implementation must still provide an explicit close mechanism.

48. Dialog State
Do not represent modal visibility only through an arbitrary JavaScript boolean.
Prefer the native dialog state:
dialog.open

or an explicit semantic state class where needed for styling.

49. Filter Architecture
Project filtering should operate on project data.
Preferred:
filter selected
    ↓
filter projects array
    ↓
render visible projects

Do not manipulate dozens of independently maintained card states when the project data is already authoritative.

50. Filter Performance
Filtering approximately 45 projects is trivial.
Do not introduce:

Web Workers
complex memoization
expensive state systems
virtual scrolling

unless the portfolio grows to a size where these are genuinely necessary.

51. Filtering and Video State
Filtering must not leave hidden videos playing.
When project results change:

Stop playback where necessary.
Close active project dialogs if appropriate.
Preserve a coherent user state.


52. Navigation Behavior
Navigation should primarily use normal links.
JavaScript should enhance navigation only when required.
Do not intercept every anchor click just to create custom transitions.
A normal link must remain functional.

53. Mobile Menu
Mobile menu JavaScript should control state only.
Preferred conceptual flow:
button click
    ↓
toggle menu state
    ↓
CSS handles visual appearance

The menu should remain accessible by keyboard.

54. Mobile Menu Escape
If the mobile navigation is implemented as a modal/overlay interaction, allow a sensible keyboard closing mechanism such as Escape.
Do not trap users inside an open navigation menu.

55. Body Scroll Lock
If a fullscreen mobile menu or video dialog genuinely requires background scrolling to stop, implement scroll locking carefully.
Do not blindly apply:
document.body.style.overflow = "hidden";

without restoring the prior state.
Do not leave the page permanently unscrollable if an interaction fails.

56. History API
Do not introduce custom URL/history management unless there is a clear UX requirement.
The site is static and simple.
Normal links are preferred.

57. Local Storage
Do not use localStorage unless there is a real requirement.
Do not persist arbitrary UI state merely because it is possible.
Examples of things that should generally not be persisted:

temporary video state
modal state
hover state
animation state


58. Cookies
Do not introduce cookies unless a genuine feature requires them.
The current portfolio has no account system or personalization requirement.

59. Timers
Avoid unnecessary setInterval() loops.
Prefer event-driven behavior or requestAnimationFrame() when continuous visual updates genuinely require it.
If a timer is created, ensure it can be cleared.

60. Animation Ownership
JavaScript should generally initiate or toggle animation state.
CSS should perform the visual animation.
Example:
element.classList.add("is-visible");

CSS:
.is-visible {
    opacity: 1;
    transform: translateY(0);
}

Do not implement the majority of page animations as JavaScript-controlled frame-by-frame calculations.

61. Scroll Reveal
Preferred:
IntersectionObserver
        ↓
add .is-visible
        ↓
CSS transition

Avoid:
scroll event
    ↓
calculate position
    ↓
calculate opacity
    ↓
calculate transform
    ↓
update every frame

unless a genuinely continuous effect requires it.

62. Custom Cursor Architecture
If implemented:

Only initialize when pointer interaction is appropriate.
Detect coarse/touch pointers.
Avoid running unnecessary updates.
Use requestAnimationFrame() for visual tracking when needed.
Keep the cursor purely supplemental.

Never allow the custom cursor to determine whether a user can click something.

63. matchMedia
Use window.matchMedia() when JavaScript behavior genuinely depends on a media feature.
Example:
const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)");

This is preferred over making assumptions based on viewport width alone.

64. Reduced Motion
All non-essential motion must respect:
prefers-reduced-motion

JavaScript must not force animations that contradict the user's reduced-motion preference.
Where appropriate, skip:

custom cursor motion
large reveal animations
parallax
decorative movement

CSS should handle most reduced-motion behavior.

65. Touch Detection
Do not use unreliable browser-sniffing to determine whether a device is mobile.
Prefer capability detection where appropriate:
window.matchMedia("(hover: hover) and (pointer: fine)");

and:
window.matchMedia("(pointer: coarse)");

Behavior should be based on capability, not assumed device names.

66. Feature Detection
Use feature detection when a modern API is optional.
Example:
if ("IntersectionObserver" in window) {
    ...
}

Do not create elaborate browser-detection logic.

67. Graceful Degradation
If a JavaScript enhancement fails:

Basic navigation should still work.
Important links should still work.
Project identity should remain visible.
Contact links should still work.
The page should not become unusable.

JavaScript is enhancement, not the only source of meaning.

68. Error Isolation
One failed feature should not break unrelated features.
For example:
If a project video fails to initialize:
Navigation must continue working.
If the custom cursor fails:
Portfolio playback must continue working.
If one project has malformed data:
Other projects should remain usable when practical.
Avoid giant initialization blocks where one exception aborts everything.

69. Defensive DOM Handling
Modules should gracefully handle missing optional elements.
Example:
const dialog = document.querySelector("#video-dialog");

if (!dialog) {
    return;
}

Do not assume every page contains every component.
This is especially important because:

index.html
projects.html

will not contain identical markup.

70. Page-Specific Initialization
Initialize features only where they exist.
For example:
const projectGrid = document.querySelector(".projects-grid");

if (projectGrid) {
    initProjects();
}

Do not generate errors because a component is absent from another page.

71. Avoid Monolithic JavaScript
Do not create:
script.js

containing several thousand lines responsible for everything.
Keep modules focused.

72. Avoid Premature Abstraction
Do not create generic frameworks inside the project.
For example, do not build:
BaseComponent
ComponentManager
StateManager
EventBus
RenderEngine
AnimationController

unless the project's actual complexity requires them.
The site is intentionally lightweight.

73. Avoid Duplicate Utilities
Before creating a helper:
function debounce(...)

or:
function getProjectById(...)

check whether an equivalent already exists.
Do not create multiple versions of the same helper.

74. Utility Functions
Shared utilities may be placed in a dedicated utility module if the project genuinely develops reusable logic.
Do not create a utils.js file simply because it seems professional.
A utility should have a real reuse case.

75. Async Code
Use async/await where asynchronous operations exist.
Keep asynchronous flows easy to understand.
Do not introduce promises for operations that are actually synchronous.

76. Fetch
fetch() may be used if the project later needs external data.
However, the current architecture should not require a backend or external API for project data.
Portfolio data should remain local and static unless a future requirement changes this.

77. No Runtime Backend Assumptions
JavaScript must not assume:

Node.js runtime
server-side rendering
database
server API
authentication backend

The site is hosted as a static GitHub Pages website.

78. Third-Party Scripts
Avoid third-party JavaScript unless absolutely necessary.
Every third-party script adds:

network cost
execution cost
privacy considerations
failure points
maintenance
AI-agent complexity

Do not add analytics, chat widgets or tracking scripts by default.

79. Analytics
Analytics are outside the initial scope.
Do not add analytics simply because portfolios commonly have them.
If analytics are added later, document:

provider
purpose
performance impact
privacy implications

in 13-DESIGN-DECISIONS.md.

80. Console Output
Do not leave debugging statements in production:
console.log("HERE");
console.log(project);
console.log(data);

Temporary debugging is acceptable during development but should be removed before completion.
Meaningful error logging may remain where appropriate.

81. Error Messages
Visitor-facing errors must be human-readable.
Do not expose:

stack traces
raw network errors
internal identifiers
Cloudinary implementation details


82. Browser APIs
Prefer standard browser APIs over custom implementations where practical.
Examples:

IntersectionObserver
HTMLDialogElement
matchMedia
AbortController
requestAnimationFrame
native <video> API

Use APIs according to their intended purpose.

83. Performance Budget
JavaScript should have a small initial footprint.
Avoid large bundles.
Avoid loading code for features that are not used on the current page.
If the project grows, page-specific modules may be loaded only where required.

84. Lazy Code Initialization
Feature code may initialize only when its relevant component exists.
Example:
if (document.querySelector(".projects-grid")) {
    initProjects();
}

Do not initialize project filtering on a page that contains no project grid.

85. DOM Size
JavaScript should not unnecessarily create large numbers of DOM nodes.
For approximately 45 portfolio cards this is manageable, but each card should contain only information necessary for browsing.
Do not create hidden duplicate cards for every possible state.

86. Re-rendering
Avoid repeatedly rebuilding the entire page for tiny state changes.
For example:
Changing a filter may require re-rendering the project grid, but opening a video should not rebuild all 45 project cards.
Update only what actually changed.

87. DOM Reads and Writes
Avoid unnecessary patterns that repeatedly alternate between:
read layout
write style
read layout
write style

when a feature performs many visual updates.
Batch DOM changes where appropriate.

88. innerHTML
innerHTML is allowed when rendering trusted static/project-controlled markup where it genuinely simplifies implementation.
However:

Never inject untrusted input.
Prefer textContent for text.
Avoid using innerHTML repeatedly for tiny state changes.
Do not use it merely because it is convenient.


89. Accessibility State
JavaScript must update appropriate accessible state when relevant.
Examples:
button.setAttribute("aria-expanded", String(isOpen));

Use ARIA where it communicates dynamic state that native HTML does not automatically expose.
Do not add arbitrary ARIA attributes without semantic need.

90. Mobile Menu Accessibility
If a menu button controls a menu, keep the state synchronized.
Conceptually:
<button
    aria-expanded="false"
    aria-controls="mobile-menu"
>

JavaScript must update aria-expanded.
Do not allow the visual menu state and accessibility state to diverge.

91. Dialog Accessibility
When opening a dialog:

Update or rely on native dialog state.
Move focus appropriately.
Ensure the close control is available.

When closing:

Stop playback.
Restore appropriate focus.

Native <dialog> behavior should be used instead of recreating modal mechanics unnecessarily.

92. Keyboard Events
Use keyboard events only where necessary.
Do not globally listen for:
document.addEventListener("keydown", ...)

unless the feature genuinely requires document-level keyboard handling.
When handling Escape:

Scope it to the relevant active component where possible.
Do not interfere with unrelated browser behavior.


93. Event Propagation
Do not use:
event.stopPropagation()

as a default solution to interaction bugs.
First understand the event structure.
Use propagation control only when the component's interaction model genuinely requires it.

94. Prevent Default
Do not use:
event.preventDefault()

automatically in every event handler.
Only prevent browser behavior when that default action conflicts with the intended experience.
Navigation links, forms and controls should retain normal browser behavior whenever possible.

95. Passive Events
For touch/wheel/scroll listeners that do not call preventDefault(), consider passive listeners where appropriate.
Example:
window.addEventListener("scroll", handler, {
    passive: true
});

Do not add passive options blindly where they change required behavior.

96. Debounce and Throttle
Use debouncing or throttling when a feature genuinely processes high-frequency events.
Examples:

resize calculations
input filtering
continuous pointer behavior

Do not add debounce/throttle solely because it sounds like a performance best practice.

97. Memory Leaks
Avoid retaining unnecessary references to:

DOM nodes
event handlers
observers
timers
media objects

When components are destroyed or replaced:

remove listeners where required
disconnect observers
clear timers
release media resources where appropriate


98. Timers Cleanup
If using:
setTimeout()
setInterval()

store the timer ID when cleanup is required.
Example:
const timeoutId = setTimeout(...);

clearTimeout(timeoutId);

Never create repeated timers that have no defined lifecycle.

99. Video Resource Cleanup
When video playback ends or is closed:

Pause the video.
Remove unnecessary listeners.
Reset state when appropriate.
Release resources if the implementation dynamically creates video elements.

Do not retain multiple hidden active video players unnecessarily.

100. Multiple Video Prevention
The portfolio should prevent accidental simultaneous playback of multiple edits where appropriate.
A reasonable default is:
User plays Edit A
    ↓
Edit B currently playing?
    ↓
Pause Edit B
    ↓
Play Edit A

Do not allow the site to become an uncontrolled collection of simultaneous videos.

101. Audio State
Do not force global audio behavior across unrelated videos.
Each playback interaction should respect user control.
Avoid unexpected volume changes.

102. Focus Management
When JavaScript changes the interface meaningfully, consider whether focus should move.
Important examples:

Opening video dialog
Opening mobile menu
Closing dialog
Switching meaningful dynamic content

Do not move focus unnecessarily.

103. Focus Restoration
When a modal closes, focus should generally return to the control that opened it.
Store the triggering element when necessary:
let lastTrigger = null;

Then restore focus after closing where appropriate.

104. Accessibility Without JS Dependency
Do not make basic accessibility dependent entirely on JavaScript.
Native HTML should provide the foundation.
JavaScript should synchronize dynamic states.

105. URL Parameters
Project filtering may use URL parameters in the future if useful.
This is optional.
Do not introduce query-string state simply because it is technically possible.
Keep initial behavior simple.

106. Browser Compatibility
Use broadly supported APIs.
Before relying on a newer API, verify that browser support is appropriate for the intended audience.
Native <dialog> and common APIs such as IntersectionObserver are widely supported, but feature detection may still be used when it meaningfully improves resilience.

107. No Browser Sniffing
Do not write logic based on:
navigator.userAgent.includes("iPhone")

or similar browser/device sniffing unless there is an extraordinary requirement.
Prefer capability detection.

108. Debugging
When debugging:

Identify the specific failure.
Inspect relevant state.
Inspect event flow.
Inspect DOM state.
Make the smallest fix.
Test the relevant feature.
Test adjacent behavior.

Do not rewrite the entire module just because one interaction is broken.

109. JavaScript Change Scope
If asked:

"Fix the mobile menu."

Do not modify:

Video playback
Project rendering
Hero behavior
Contact logic

unless the requested fix genuinely requires it.

110. JavaScript Refactoring Rule
Do not combine feature work with unrelated refactoring.
Example:
A request to improve video loading does not authorize:

renaming every function
changing project data structure
rewriting navigation
replacing every DOM query
restructuring all JavaScript files

Keep changes focused.

111. AI-Agent Rule: Inspect Before Editing
Before modifying JavaScript, the AI agent must:

Read this document.
Read 01-ARCHITECTURE.md.
Read 04-HTML-RULES.md.
Read 05-CSS-RULES.md when visual state is involved.
Identify the owning JavaScript module.
Identify the existing state/interaction flow.
Determine the smallest safe change.


112. AI-Agent Rule: Preserve Existing Behavior
When modifying a feature, preserve unrelated behavior.
Example:
Changing project filtering must not accidentally change:

Video URLs
Video loading strategy
Navigation
Modal keyboard behavior

unless explicitly required.

113. AI-Agent Rule: No Rewrites by Preference
An AI model must not replace a working implementation simply because it personally prefers:

a different pattern
another architecture
another library
another abstraction
another framework

The project's documented architecture takes precedence over model preference.

114. AI-Agent Rule: No Architecture Drift
Do not gradually introduce:
one small library
→ another library
→ utility framework
→ animation library
→ framework

without explicit authorization.
Architecture must remain intentional.

115. AI-Agent Rule: Report Scope
After a significant JavaScript change, the agent should report:
Changed:
- ...

Not changed:
- ...

Dependencies added:
- none

Performance impact:
- ...

Accessibility impact:
- ...

This helps detect accidental scope expansion.

116. AI-Agent Rule: Validate
After a JavaScript change, verify:

Console is clean
Navigation works
Video playback works
Modal can close
Keyboard interactions work
Mobile behavior works
Reduced-motion behavior works
No unrelated component is broken

Only validate the areas affected by the change deeply, but always perform a basic regression check.

117. No Silent Failure
If an expected API, element or asset is unavailable, do not silently fail when the user should receive feedback.
Use appropriate fallback behavior or a meaningful error state.

118. No Unnecessary JS
Before adding JavaScript, ask:
Can this be done with HTML?
If yes:
Use HTML.
Then:
Can this be done with CSS?
If yes:
Use CSS.
Only then:
Does it genuinely require JavaScript?
If yes:
Use JavaScript.
This rule is especially important for keeping the site lightweight.

119. Performance Priority
When two implementations provide equivalent UX, prefer the one with:

Less JavaScript
Fewer listeners
Less DOM work
Less continuous execution
Fewer dependencies
Less memory usage
Simpler state
Easier maintenance


120. Core JavaScript Architecture
The intended architecture is:
                 main.js
                    │
          ┌─────────┼─────────┐
          ↓         ↓         ↓
   navigation.js videos.js projects.js
                           │
                           ↓
                     project data

Dependencies should remain understandable.
Do not create circular dependencies.

121. Dependency Direction
Preferred:
main
 ↓
feature modules
 ↓
shared data/utilities

Avoid:
navigation → videos → projects → navigation

Circular dependencies make AI-assisted maintenance significantly harder.

122. Project/Data Separation
Project data should describe projects.
Rendering code should render projects.
Video code should play videos.
Navigation code should control navigation.
No module should become responsible for everything.

123. Source of Truth
The following must have a single authoritative source:
Project information
Project data.
Video behavior
videos.js.
Navigation behavior
navigation.js.
Global initialization
main.js.
Visual appearance
CSS.
Semantic structure
HTML.
Do not duplicate behavior across multiple modules.

124. Testing Checklist
Before declaring a meaningful JavaScript feature complete:
Desktop

Mouse interaction
Keyboard interaction
Video playback
Modal behavior
Navigation

Mobile

Touch interaction
Mobile navigation
Video playback
Modal close
No horizontal overflow

Accessibility

Keyboard
Focus
Escape behavior
Reduced motion
Accessible dynamic state

Performance

No unnecessary repeated work
No runaway timers
No excessive listeners
No unnecessary video requests
No console errors


125. Final JavaScript Principles
The JavaScript code should be:
small enough to understand, modular enough to change, and restrained enough to stay fast.
The website should not feel "interactive" because JavaScript is everywhere.
It should feel interactive because the few interactions that exist are:

polished
intentional
fast
predictable
accessible


126. Non-Negotiable JavaScript Rules

Use vanilla JavaScript.
Keep JavaScript modular.
Keep feature responsibilities separated.
Prefer native browser APIs.
Use addEventListener().
Use event delegation where appropriate.
Clean up temporary listeners and observers.
Avoid high-frequency expensive event handlers.
Prefer IntersectionObserver for visibility-based behavior.
Use requestAnimationFrame() for continuous visual updates when genuinely necessary.
Keep visual presentation in CSS.
Use JavaScript primarily to control state and behavior.
Keep project data centralized.
Do not load all portfolio videos on page initialization.
Load video when user intent requires it.
Use native <video> functionality.
Prefer native <dialog> for modal video playback.
Maintain keyboard and focus behavior.
Respect reduced-motion preferences.
Do not use browser/device sniffing when capability detection is sufficient.
Avoid unnecessary third-party JavaScript.
Avoid global mutable state.
Avoid monolithic scripts.
Avoid premature abstractions.
Do not rewrite unrelated features during localized changes.
Do not introduce frameworks or libraries by model preference.
Handle dynamic failures gracefully.
Keep one clear source of truth for each responsibility.
Validate changes before considering them complete.
Prefer less JavaScript whenever HTML/CSS can solve the problem.

