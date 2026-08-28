PERFORMANCE RULES
1. Purpose
This document defines the performance requirements for the sanjanedits portfolio.
Performance is a first-class product requirement.
The website must feel:

Fast
Responsive
Snappy
Lightweight
Stable
Reliable on mobile
Reliable on slower connections

The visual quality of the website must never depend on excessive technical weight.

2. Primary Performance Objective
The target is:
High perceived quality with low technical cost.
The site should feel visually rich while keeping the initial page lightweight.
The performance strategy is:
MINIMAL INITIAL PAYLOAD
        ↓
FAST FIRST RENDER
        ↓
SHOW IMPORTANT CONTENT
        ↓
LOAD NON-CRITICAL CONTENT LATER
        ↓
LOAD VIDEO ONLY WHEN NEEDED

Lazy loading reduces the critical rendering path by deferring resources that are not immediately needed. This is particularly important for a portfolio containing many images and videos.

3. Performance Priority Order
When making a technical decision, prioritize:

User-perceived speed
Initial page loading
Interaction responsiveness
Layout stability
Video startup performance
Mobile performance
Runtime efficiency
Bandwidth efficiency
Maintainability
Decorative effects

Decorative effects are never more important than the first nine priorities.

4. Performance Budget Philosophy
The website should remain intentionally small.
There is no artificial requirement that every file stay below a particular number of KB, because actual performance matters more than arbitrary file-size numbers.
However:
Every asset and dependency must justify its cost.
Do not add:

large libraries
frameworks
unnecessary fonts
unnecessary scripts
unnecessary video files
duplicate images
large background assets
third-party widgets

without a clear reason.

5. Critical Rendering Path
The browser should prioritize resources required to understand and use the page immediately.
Critical content includes:

Hero
Primary typography
Primary navigation
Main CTA
Initial portfolio imagery

Non-critical content includes:

Below-the-fold videos
Secondary project images
Decorative effects
Optional integrations
Non-essential scripts

Non-critical resources should not block the initial experience.

6. Initial Load Philosophy
The homepage should initially load primarily:
HTML
+
critical CSS
+
required fonts
+
hero imagery
+
small number of visible poster images
+
minimal JavaScript

It should NOT initially load:
all portfolio videos
+
all project images
+
all project player state
+
large third-party embeds


7. Video Is the Largest Performance Risk
Video is expected to be the heaviest part of the portfolio.
The architecture must therefore treat video as:
on-demand content.
Never treat the existence of a video element as permission to download the video.

8. Video Storage
Portfolio videos are stored in:
Cloudinary
Do not store the full portfolio video library in the GitHub repository.
GitHub should contain the application and lightweight assets.

9. Video Loading Strategy
Default state:
Poster only.
Preferred flow:
PROJECT CARD
     ↓
POSTER
     ↓
USER ACTIVATES VIDEO
     ↓
VIDEO SOURCE IS ATTACHED
     ↓
VIDEO LOADS
     ↓
PLAYBACK

This prevents visitors from downloading videos they never choose to watch.
MDN specifically recommends preload="none" when video is unlikely to be played immediately.

10. Video Preload
Do not use:
preload="auto"

for portfolio videos unless there is a specific measured UX reason.
Default preference:
preload="none"

When appropriate:
preload="metadata"

may be used when the interface genuinely needs metadata before playback.
preload="none" tells the browser not to preload video data before playback is requested, which can significantly reduce unnecessary data usage.

11. Lazy Video Loading
Video may also use:
loading="lazy"

where supported and appropriate.
However, do not assume loading="lazy" alone solves all video performance problems.
The primary architecture should still ensure that the heavy source is not unnecessarily requested.
MDN documents that loading="lazy" can defer video data and poster loading until the video is near the viewport, while preload controls how much data is requested once loading begins.

12. Poster-First Architecture
Every portfolio video should have a lightweight poster image where appropriate.
Example:
<video
    controls
    playsinline
    preload="none"
    poster="/assets/images/posters/edit-01.webp"
>

The poster should represent the actual edit and should load substantially faster than the video.

13. Video Dimensions
Video containers must reserve appropriate space before the video loads.
Use:
aspect-ratio

or explicit dimensions.
This prevents layout shifts when media loads.
MDN specifically recommends explicit dimensions for videos, especially lazy-loaded videos, to avoid disruptive reflow.

14. Video Aspect Ratio
Use the actual source aspect ratio whenever practical.
For vertical Instagram-style videos, the expected ratio will usually be approximately:
9 / 16

Do not force every video into one ratio if doing so meaningfully damages the composition.

15. Video Autoplay
Do not autoplay portfolio videos with sound on page load.
Reasons:

Unwanted audio
Browser restrictions
Bandwidth usage
User-control concerns

User intent should initiate meaningful playback.

16. Muted Preview Videos
A muted preview may be used where it creates a major UX benefit.
If implemented:

Must be muted
Must not require audio
Must remain lightweight
Must have a poster fallback
Must not cause significant initial loading cost

Never use video previews merely because they look impressive if they significantly harm performance.

17. Muted Video Optimization
If a video is permanently used without sound, consider creating a video version without an audio track.
MDN notes that removing an unnecessary audio stream from always-muted video can reduce bandwidth usage.
Do not remove audio from the actual playable portfolio master if users are expected to hear the music.
Use a separate preview asset when appropriate.

18. Video Resource Cleanup
When a video is closed or no longer needed:

Pause playback
Remove unnecessary listeners
Avoid continued playback
Release resources where appropriate
Prevent hidden video elements from remaining active

A video that is no longer visible should not continue consuming unnecessary resources.

19. Simultaneous Videos
Avoid allowing several portfolio videos to play simultaneously.
Preferred behavior:
Edit A playing
      ↓
User plays Edit B
      ↓
Pause Edit A
      ↓
Play Edit B

This reduces:

CPU usage
memory usage
bandwidth usage
audio conflicts


20. Video Format Strategy
Use modern web-appropriate video encoding.
Cloudinary should be used to deliver optimized web media where practical.
Do not upload unnecessarily large source exports directly as the final delivery asset when a properly compressed version can provide equivalent perceived quality.

21. Video Quality
Do not optimize video purely by maximizing compression.
The objective is:
minimum practical file size while preserving the visual quality necessary to judge the edit.
Portfolio video must still look good enough for clients to evaluate the work.

22. Poster Image Optimization
Posters are critical because they represent videos before playback.
Each poster should be:

Correctly cropped
Appropriately sized
Compressed
Sharp enough for its rendered dimensions

Do not use original-resolution images if the rendered size is substantially smaller.

23. Image Formats
Prefer modern image formats when supported by the workflow:

WebP
AVIF where practical

Use JPEG/PNG when compatibility or asset characteristics make them more appropriate.
Do not convert assets blindly.
Choose based on quality, size and practical browser support.

24. Responsive Images
Use responsive image delivery where useful:
srcset
sizes
<picture>

This prevents small devices from unnecessarily downloading large desktop-sized images.
MDN recommends responsive image techniques and loading images at appropriate sizes to reduce network and memory costs.

25. Image Dimensions
Provide explicit:
width=""
height=""

for important images where practical.
This allows the browser to reserve space and helps prevent layout shifts when images load.

26. Image Lazy Loading
Below-the-fold, non-critical images should generally use:
loading="lazy"

Do not blindly lazy-load the primary image that is necessary for the initial viewport.
The browser should be allowed to load critical content immediately.

27. Hero Image Priority
If Sanjan's photograph is a major above-the-fold visual and contributes significantly to the initial visual experience, it may receive higher loading priority.
Possible:
fetchpriority="high"

Use this selectively.
Do not mark many images as high priority.
MDN describes fetchpriority as a hint for adjusting the priority of resources such as important LCP images, and recommends using it sparingly.

28. Preload
rel="preload" should be used only for resources that are:

Critical
Discovered too late by the browser
Proven to benefit from earlier fetching

Do not preload:

Every image
Every font
Every video
Every stylesheet variant
Every project

Preloading too many resources defeats prioritization.
MDN documents preload as a way to accelerate genuinely high-priority resources, but it should be used intentionally.

29. Fonts
Use only the required fonts and weights.
Current design:
Plus Jakarta Sans

700
800

Inter

400
500
600

Do not load unused font weights.

30. Font Loading
Avoid delaying the entire page because of fonts.
Use an appropriate:
font-display

strategy.
The page must remain usable even if the custom font loads later or fails.
MDN notes that font requests can delay text rendering and that font loading strategy should be considered as part of overall lazy/critical resource loading.

31. Font Count
Do not add additional typefaces without an explicit design decision.
Multiple font families increase requests and visual complexity.
The site is intentionally built around:

Plus Jakarta Sans
Inter


32. CSS Performance
CSS is render-blocking by default.
Therefore:

Keep CSS reasonably thin
Avoid unnecessary files
Avoid huge generated stylesheets
Avoid redundant rules
Avoid excessive selector complexity

MDN identifies CSS as part of the critical rendering path and recommends keeping it lean.

33. CSS Dependencies
Do not import large external CSS frameworks.
No:

Bootstrap
Tailwind CDN
Foundation
UI frameworks

unless the architecture is explicitly changed.

34. CSS Selector Performance
Prefer simple, local selectors.
Good:
.project-card__title

Avoid:
main section:nth-child(4) > div > div article h3 span

The second approach is both fragile and unnecessarily difficult for AI agents to maintain.

35. CSS Specificity
Keep specificity low.
Do not repeatedly increase specificity to override previous AI-generated CSS.
If specificity becomes difficult to manage:

Identify the conflicting rule.
Simplify the selector.
Use cascade layers where useful.
Establish proper ownership.

Do not create a specificity arms race.

36. CSS Animation Performance
Prefer:
transform
opacity

for movement and fades.
Avoid continuous animation of layout-affecting properties such as:

width
height
top
left
margin
padding

when transform-based alternatives work.

37. Paint-Heavy Effects
Use caution with:

large blurs
large shadows
animated filters
huge gradients
repeated clip-path animations
complex backdrop filters

A visually sophisticated effect is not automatically performant.

38. Continuous Animation
Do not animate an element continuously unless it adds meaningful value.
Avoid:
permanent floating
+
permanent background particles
+
permanent glow
+
permanent cursor effects
+
permanent parallax

The page should spend most of its time doing very little.

39. JavaScript Performance
JavaScript must have a small initial execution footprint.
Avoid:

unnecessary initialization
large libraries
unnecessary DOM traversal
repeated DOM rebuilding
excessive timers
continuous calculations
large loops running on every frame


40. JavaScript Modules
Use JavaScript modules to keep features separated.
Only initialize functionality when the relevant component exists.
Example:
const projectGrid = document.querySelector(".projects-grid");

if (projectGrid) {
    initProjects();
}

MDN notes that splitting JavaScript into modules/entry points can reduce the code needed initially.

41. Avoid Unnecessary JavaScript
Before adding JavaScript, ask:
Can HTML do it?
Then:
Can CSS do it?
Only use JavaScript when behavior genuinely requires it.

42. Event Handling
Use event delegation where multiple similar elements exist.
Do not attach dozens of unnecessary listeners to project cards when one delegated listener can handle the same behavior.

43. High-Frequency Events
Treat the following as potentially expensive:

scroll
resize
mousemove
pointermove
touchmove
wheel

Do not execute heavy operations directly on every event.

44. RequestAnimationFrame
Use:
requestAnimationFrame()

for continuous visual updates where necessary.
Do not use it to update dozens of unrelated elements continuously.

45. IntersectionObserver
Prefer:
IntersectionObserver

for:

reveal animations
lazy activation
visibility-based effects
viewport-triggered enhancements

Rather than manually calculating element position on every scroll event.
MDN identifies IntersectionObserver as a useful mechanism for lazy-loading and viewport-aware behavior.

46. DOM Work
Minimize unnecessary DOM manipulation.
Avoid repeatedly:
query
read
write
query
read
write

inside tight loops.
Batch work where appropriate.

47. Layout Thrashing
Avoid code that repeatedly alternates between:
read layout
↓
modify layout
↓
read layout
↓
modify layout

This can cause unnecessary rendering work.
Prefer:
read required values
↓
calculate
↓
perform writes

where practical.

48. DOM Size
Keep the DOM as simple as practical.
For approximately 45 projects, a normal project grid is acceptable.
Do not create:

hidden duplicates
duplicate modal structures for every project
unnecessary wrapper layers
repeated controls

when one reusable structure is sufficient.

49. Project Rendering
Project data should drive project rendering.
Do not store 45 large project blocks redundantly in:

HTML
JavaScript
data attributes

Maintain a single source of truth.

50. Re-rendering
Do not rebuild the entire page because one small state changed.
Examples:
Changing a filter should update the project area, not recreate:

navigation
hero
about
footer

Opening a video should not rebuild the entire project grid.

51. Third-Party Resources
Third-party resources should be treated as expensive.
Avoid unnecessary:

iframes
analytics
fonts
widgets
embedded social posts
external scripts

Every third-party resource can introduce additional network and execution overhead.

52. Instagram Embeds
Do not embed dozens of Instagram posts/reels as the primary portfolio implementation.
Use the site's own Cloudinary-hosted video playback.
Provide an Instagram link separately.
This keeps presentation under our control and reduces unnecessary third-party loading.

53. External Links
External links should not require JavaScript.
A normal anchor should work:
<a href="...">

This keeps navigation fast and robust.

54. Animations and Performance
Animations must not delay access to content.
Do not create:
page loads
↓
3-second logo animation
↓
hero appears

Prefer:
page loads
↓
hero visible immediately
↓
subtle enhancement begins

MDN's performance guidance emphasizes minimizing initial load and making important interaction available as soon as possible.

55. Loading Screens
Do not implement a full-screen loading screen unless a genuine application-level loading state exists.
This is a static portfolio.
The page should not pretend it is loading something substantial when it isn't.

56. Skeleton Screens
Skeleton screens are not required for the initial static page.
Do not add skeleton loaders simply because modern applications use them.
They are appropriate only when meaningful asynchronous content actually requires waiting.

57. Layout Stability
Prevent unexpected layout shifts.
Important techniques:

explicit image dimensions
explicit video dimensions
aspect-ratio
reserved spaces for dynamic content
stable font strategy

Unexpected movement during loading negatively affects perceived quality.

58. Core Web Vitals
Performance should be evaluated using modern user-experience metrics, particularly:

Largest Contentful Paint (LCP)
Interaction to Next Paint (INP)
Cumulative Layout Shift (CLS)

These should be considered during optimization rather than relying only on subjective "it feels fast" judgment.

59. LCP
Largest Contentful Paint measures how quickly the primary large content becomes visible.
The likely LCP candidate on this site could be:

Hero image
Large hero text block
Major hero media

Do not accidentally make the LCP resource lazy or low priority if it is genuinely critical.
Use high-priority loading selectively where justified.

60. LCP Optimization
To improve LCP:

Keep critical CSS lean
Optimize hero imagery
Avoid unnecessarily large hero assets
Avoid loading unrelated videos
Avoid blocking scripts
Use appropriate font loading
Use fetchpriority="high" only when justified
Avoid unnecessary preload chains

MDN documents image prioritization as an important technique for improving LCP when the browser cannot otherwise infer the correct priority.

61. CLS
Cumulative Layout Shift must remain low.
Avoid:

images without known dimensions
videos without reserved aspect ratios
dynamically injected content that changes layout unexpectedly
fonts causing large layout movement
animations that change document flow

Prefer transforms for visual movement rather than layout changes.

62. INP
Interaction to Next Paint measures how responsive the page is to user interactions.
The site should respond quickly to:

navigation
project filtering
opening video
closing video
mobile menu
CTA clicks

Do not run expensive JavaScript immediately after every interaction.

63. Interaction Responsiveness
When a visitor clicks:
Watch Edit
the interface should acknowledge the interaction immediately.
If video loading takes time:
click
↓
modal opens / loading state appears
↓
video loads
↓
playback begins

Do not leave the interface appearing frozen while the network request happens.

64. Network Dependency Chains
Avoid long chains where:
HTML
↓
CSS
↓
JavaScript
↓
external library
↓
external asset
↓
video player

must all complete before meaningful content appears.
Prefer direct, short dependency paths.

65. JavaScript Loading
Use module scripts appropriately.
Example:
<script type="module" src="/js/main.js"></script>

Module scripts are deferred by default, reducing the need for custom script-loading hacks.

66. Resource Hints
Possible resource hints include:

preload
preconnect
dns-prefetch
prefetch

Use them only when they have a concrete performance justification.
Do not add every possible hint.

67. Cloudinary Connection
If Cloudinary is the primary video host, a connection optimization such as preconnect may be considered only if it measurably improves startup for videos that users commonly watch immediately.
Do not preconnect to every external service by default.

68. Prefetching
Do not prefetch all project videos.
Possible future use:
A highly probable next page or resource may be prefetched only if there is a strong evidence-based UX benefit.
The default behavior should remain conservative.

69. Project Page Loading
The Projects page contains approximately 45 edits.
Initial loading should prioritize:

page structure
visible posters
minimal project metadata

Do not download all videos.

70. Project Image Strategy
The Projects page should not download oversized poster images for projects that are rendered as small cards.
Use appropriately sized images.
Responsive images should be used where worthwhile.

71. Virtualization
Do not implement virtual scrolling for approximately 45 projects.
The project count is nowhere near large enough to justify the complexity.
Use normal document rendering plus lazy media.

72. Pagination
Do not add pagination simply to reduce DOM size.
Approximately 45 projects is small enough for a single browsing page.
Use pagination only if the portfolio grows substantially or usability demonstrates a need.

73. Infinite Scroll
Do not implement infinite scrolling initially.
A portfolio should remain easy to navigate and share.
A complete projects page is preferable.

74. Filters
Filtering approximately 45 projects is computationally trivial.
Do not introduce a complex performance architecture for filtering.
Keep the implementation simple.

75. Mobile Performance
Mobile receives special priority.
Assume:

slower CPU
limited memory
slower network
smaller viewport
touch input

Desktop visual effects must not automatically be copied to mobile.

76. Mobile Media
On mobile:

Use appropriately sized posters
Avoid unnecessary preview video
Preserve aspect ratios
Avoid huge background imagery
Avoid continuous decorative animation


77. Mobile JavaScript
Avoid expensive pointer interactions on touch devices.
Custom cursor behavior should not run on coarse pointer devices.

78. Mobile Animation
Simplify expensive effects on mobile if necessary.
The goal is not:
"same number of effects everywhere."
The goal is:
"same perceived quality with appropriate implementation."

79. Data Usage
Assume some visitors have limited or expensive mobile data.
Do not force them to download content simply because it exists below the fold.
Lazy loading is therefore both a technical and UX requirement.

80. Memory Usage
Images and videos consume memory after download.
Avoid simultaneously keeping many large media elements active.
Especially on mobile:

one active video is preferable
off-screen videos should not be actively playing
unnecessary large decoded images should be avoided


81. Background Videos
Do not use a large full-screen video background as the default hero technique.
If a background video is ever used:

It must be extremely optimized.
It must be muted.
It must have a fallback poster.
It must not block initial rendering.
It must demonstrate clear UX value.

The preferred default is still static imagery or a lightweight visual treatment.

82. Background Images
Do not use enormous full-resolution background images when a normal <img> or optimized asset can achieve the same result.
Using normal image elements also provides better loading and priority control.

83. CSS Background Images
Background images are appropriate for genuinely decorative visuals.
Important content should generally use semantic <img> elements.
This also gives the browser clearer image-loading semantics. MDN notes that content images using <img> are assigned higher loading priority than CSS background images in many situations.

84. Image Quality
Do not over-compress images to the point where clients can see visible artifacts.
The objective is:
best perceived quality per byte.

85. Duplicate Assets
Do not keep multiple copies of the same image/video unless they serve clearly different purposes.
Examples of legitimate variants:

thumbnail
poster
mobile-specific crop
desktop-specific crop
muted preview

Each variant must have a reason.

86. Asset Naming
Use predictable names.
Example:
edit-01.webp
edit-01-poster.webp
edit-01-preview.mp4

Do not use:
final-final-2-new.mp4
IMG_9382.jpg
cooleditlatest2.mp4

Predictable naming helps both developers and AI agents.

87. Compression
Compress all web assets before production.
For images:

resize appropriately
convert where appropriate
compress

For video:

use web-appropriate encoding
remove unnecessary tracks
keep resolution appropriate
avoid source-export bloat


88. SVG Optimization
SVG icons should be small and clean.
Remove unnecessary metadata and path complexity where practical.
Do not use enormous exported SVGs from design software when a simple icon can be represented much more efficiently.

89. CSS File Count
Do not split CSS into dozens of tiny files.
The purpose of the current architecture is organization without unnecessary request overhead or AI confusion.
Use the defined files unless a measurable or architectural reason requires change.

90. JavaScript File Count
Likewise, do not create dozens of small JS modules.
Keep the current responsibility-based structure:
main.js
navigation.js
videos.js
projects.js

Add another module only when the responsibility genuinely deserves separation.

91. Dependency Count
Track third-party dependencies.
The ideal number is:
as close to zero as practical.
Do not add dependencies for functionality easily achievable with native APIs.

92. Third-Party Fonts
Avoid third-party font-loading services if equivalent self-hosting or a similarly lightweight approach is practical.
If external font hosting is used, document it.

93. Third-Party Analytics
Analytics are outside the initial scope.
Do not add analytics automatically.
If later introduced, evaluate:

network cost
JavaScript cost
privacy
blocking behavior
actual business value


94. Third-Party Social Widgets
Avoid social widgets unless they provide a clear advantage.
A simple Instagram link is preferred over a large embedded social feed.

95. Performance and Accessibility
Do not improve performance by breaking accessibility.
Examples:
Do not:

remove focus states
disable keyboard interaction
remove labels
hide controls
disable user preferences

Performance and accessibility must be optimized together.

96. Reduced Motion
Respect:
@media (prefers-reduced-motion: reduce)

JavaScript-driven motion should also respect the same preference.
Do not perform expensive animation when the user has requested reduced motion.

97. Idle Work
Non-essential work should not execute during the most important interaction/loading moments.
If a feature can safely wait until after the initial page becomes useful, defer it.
Examples:

analytics
optional enhancements
decorative initialization
low-priority prefetching


98. Performance on Interaction
When a user triggers an interaction:

provide immediate visual feedback
avoid blocking the main thread
defer expensive work where possible
display loading state when necessary

The user should never feel that the interface has stopped responding.

99. Long Tasks
Avoid large synchronous JavaScript operations.
Potentially expensive operations should be broken into smaller tasks when necessary.
However, do not create complex scheduling architecture unless real performance measurements justify it.

100. Measurement Over Guessing
Do not make performance claims based purely on assumptions.
Use actual measurements when optimizing.
Useful tools include:

Chrome DevTools
Lighthouse
PageSpeed Insights
WebPageTest where appropriate
Browser Performance panel
Network panel


101. Lighthouse
Lighthouse may be used as a diagnostic tool.
Do not optimize purely for an arbitrary Lighthouse score.
A high score is useful, but actual user experience and measured behavior matter more.

102. Core Web Vitals Testing
When practical, test:

LCP
INP
CLS

Also inspect:

total page weight
image weight
video request behavior
JavaScript execution
network waterfall


103. Network Waterfall
When testing the page, inspect:
What loads first?
What blocks rendering?
Which assets are unexpectedly requested?
Are videos loading before interaction?
Are images larger than necessary?
Are third-party resources present?

If a portfolio video is requested before the visitor asks to watch it, investigate immediately.

104. Mobile Network Testing
Do not test only on fast broadband.
At minimum, test under throttled mobile-like conditions in development tools.
The site must remain useful even when the connection is significantly slower than the developer's own connection.

105. Cache Strategy
Static assets should be named predictably.
Where a future deployment strategy allows it, immutable/fingerprinted assets may benefit from long-lived caching.
Do not create cache-busting complexity before the project needs it.

106. GitHub Pages
The static site should remain compatible with GitHub Pages.
Do not introduce server-side performance dependencies.
The website must work from static files.

107. Build Process
Avoid requiring a complicated build process unless it provides measurable benefit.
The current preferred architecture is:
HTML
+
CSS
+
JS
+
static assets

A build tool may be introduced later only if project size genuinely justifies it.

108. Minification
Source files must remain readable in Git.
Minification may be introduced as a deployment optimization if necessary.
Do not make the development repository unreadable simply to save a tiny amount of transfer size.

109. Compression
Where supported by the host/CDN:

Serve compressed text assets.
Use modern media compression.
Avoid serving redundant data.

Cloudinary should handle media transformation/delivery where appropriate.

110. Cloudinary Optimization
When configuring Cloudinary delivery, favor:

optimized formats
appropriate dimensions
appropriate video quality
CDN delivery
transformations that reduce unnecessary payload

Do not request maximum resolution by default.

111. Cloudinary Transformation Principle
A transformation should exist because the visitor needs it.
Do not serve:
4K video

to a:
390px-wide phone

unless there is an actual reason.

112. Video CDN Delivery
Video playback should use Cloudinary's delivery infrastructure rather than routing video files through GitHub Pages.
GitHub Pages is the application host.
Cloudinary is the media delivery layer.

113. Initial Homepage Media Budget
The homepage should aim to initially request only:

hero-critical image(s)
visible/near-visible poster images
required icons
required fonts
core code

The actual portfolio videos should remain deferred.

114. Projects Page Media Budget
The Projects page may load poster images progressively as the user explores.
The actual videos remain on-demand.

115. Preloading the Showreel
The showreel is important, but do not automatically preload its entire video file.
A poster can load immediately.
A full video request should be justified by user intent or a measured UX benefit.

116. Showreel Startup UX
When a visitor clicks the showreel:
click
↓
immediate player/open state
↓
visible loading feedback if required
↓
video loads
↓
playback

The interface must acknowledge the action immediately.

117. Poster and Video Consistency
The poster should closely correspond to the first visual moment of the video.
This prevents an awkward transition where:
poster
↓
video suddenly shows completely different frame


118. Previews
If preview videos are used:

Keep them short.
Keep them muted.
Keep them compressed.
Prefer no audio track.
Avoid loading them all immediately.

A preview is an enhancement, not the default data payload.

119. Data Saver Consideration
Where practical, users with reduced-data preferences should not be forced into unnecessary media playback or previews.
Respect browser/user hints when they have clear applicability.
Do not force heavy animation or video solely for branding.

120. No Automatic Media Download
The site must never intentionally download every project video just to make future playback faster.
The architecture values:
reasonable startup + on-demand playback
over:
massive upfront download to achieve instant playback later.

121. Browser Caching
When a user watches multiple videos, normal browser/Cloudinary caching may naturally improve subsequent interactions.
Do not build a custom client-side media cache unless there is a demonstrated need.

122. Service Worker
Do not add a service worker initially.
A service worker adds complexity and can introduce caching bugs.
Consider one only if there is a clear offline/PWA/business requirement.

123. Web App / PWA
The site is not currently a PWA.
Do not add:

offline caching
install prompts
service-worker infrastructure

unless explicitly requested.

124. Performance and SEO
Performance improvements should also support discoverability.
Do not hide important content behind JavaScript merely for perceived speed.
Important textual information should remain available in the HTML.

125. Performance and UX
The fastest page is not automatically the best page.
A tiny page that makes users wait for everything after clicking can feel worse than a slightly larger page with excellent interaction feedback.
Optimize for:
perceived performance + actual performance.

126. Perceived Performance
Use:

Immediate visual feedback
Stable layout
Early meaningful content
Lightweight transitions
Clear loading states where necessary
Progressive disclosure

Do not fake speed with meaningless animations.

127. Loading Indicators
Only use a loading indicator when the user is genuinely waiting for something.
Examples:

video network loading
dynamic project data in a future architecture

Do not show a global loader for ordinary HTML/CSS rendering.

128. Error Recovery
If an optimized resource fails:

Maintain the surrounding layout.
Preserve the poster where possible.
Offer retry where practical.
Provide Instagram fallback when appropriate.

Performance optimization must never make failure catastrophic.

129. Failed Video Request
If Cloudinary playback fails:
poster remains
+
error state
+
retry
+
Instagram link if available

Do not turn the project into an empty card.

130. Performance Regression Protection
Any meaningful visual or technical change must be checked for performance regression.
A change that improves appearance but causes:

dramatically larger page weight
excessive CPU usage
slow interaction
unexpected video downloads
mobile jank

should not be accepted without strong justification.

131. Performance Regression Examples
Reject changes such as:
"Improve the cards"
→ add a 2 MB animation library

or:
"Make hero cinematic"
→ add 25 MB background video

or:
"Make project grid smoother"
→ load every project video on page load

These violate the project architecture.

132. AI-Agent Performance Rules
AI agents must never assume:
"More code = better performance."
They must prefer the simplest implementation.
Before adding a performance optimization, the agent should understand:

What problem exists?
What is currently slow?
What resource causes it?
Does the proposed change actually address it?


133. AI-Agent Prohibited Performance Behavior
Do not:

Add unnecessary libraries
Add large animation libraries
Add service workers
Add aggressive preloading
Add will-change everywhere
Add infinite animation loops
Preload every video
Load every image eagerly
Add dozens of resource hints
Duplicate media assets without justification
Rewrite the architecture for speculative performance gains


134. Performance Change Scope
If asked:
"Make the portfolio cards load faster."
The agent should investigate:

poster size
poster format
lazy loading
dimensions
image delivery

It should not automatically:

redesign the page
change fonts
replace the JS architecture
remove animations globally


135. Performance Optimization Rule
Optimize the actual bottleneck.
Do not optimize:
what seems technically interesting

Optimize:
what measurably affects the user experience


136. Performance Measurement Before/After
For significant performance changes, compare:
Before
↓
implement change
↓
After

Where practical, compare:

network requests
transfer size
LCP
INP
CLS
video requests
JavaScript execution


137. No Premature Optimization
Do not complicate the site before a problem exists.
Examples:
Do not introduce:

code splitting for four tiny JS files
complex caching
service workers
virtual DOM
workers
elaborate resource schedulers

unless the project actually needs them.

138. Performance and Maintainability
A performance optimization that makes the project dramatically harder for AI agents and humans to maintain must have a strong measurable benefit.
A slightly simpler implementation is often preferable when the performance difference is negligible.

139. Performance and Design
Visual quality may be ambitious.
Implementation must remain disciplined.
The intended philosophy is:
Cinematic appearance
        +
Minimal technical waste
        =
Portfolio quality


140. Performance Testing Matrix
Important performance changes should be checked under:
Desktop

Fast connection
Normal connection

Mobile

Slow connection
Mid-range device conditions

Interaction

Video opening
Video closing
Project filtering
Mobile menu

Accessibility

Reduced motion


141. Final Performance Checklist
Before production:
Initial loading

Critical content appears quickly.
Hero is not blocked by unnecessary media.
No unnecessary videos load.
No unnecessary third-party resources load.

Images

Appropriate formats.
Appropriate dimensions.
Lazy-loaded when appropriate.
Explicit dimensions where practical.
Responsive images where beneficial.

Video

Cloudinary-hosted.
Poster-first.
preload="none" or equivalent on demand.
No mass video downloads.
Correct aspect ratio.
No unexpected autoplay sound.
Hidden videos do not continue playing.

CSS

No unnecessary framework.
No giant stylesheet.
Reasonable selector complexity.
No excessive expensive effects.

JavaScript

Modular.
Small initial execution cost.
No unnecessary high-frequency work.
No unnecessary libraries.
No duplicate listeners.

Mobile

No horizontal overflow.
No excessive animation.
No huge assets.
Video interaction remains usable.


142. Non-Negotiable Performance Rules

Performance is a first-class requirement.
Optimize for real user experience, not arbitrary technical complexity.
Keep the initial payload small.
Do not load portfolio videos on initial page load.
Use poster-first video architecture.
Use Cloudinary for video delivery.
Prefer on-demand video loading.
Use preload="none" for videos that do not need immediate loading.
Reserve space for media using dimensions or aspect ratio.
Use optimized poster images.
Use responsive image techniques where beneficial.
Lazy-load non-critical images.
Do not blindly lazy-load critical hero content.
Use fetchpriority sparingly.
Use preload sparingly.
Keep CSS lean.
Keep JavaScript lean.
Avoid unnecessary third-party resources.
Prefer native browser APIs.
Prefer CSS over JavaScript for visual effects.
Prefer transform/opacity for animation.
Avoid expensive continuous animation.
Do not use will-change as a blanket optimization.
Use IntersectionObserver for viewport-based enhancements where appropriate.
Avoid expensive high-frequency event handlers.
Avoid layout thrashing.
Avoid unnecessary DOM rebuilding.
Do not load duplicate media assets without justification.
Do not add complex performance infrastructure prematurely.
Test performance on mobile-like conditions.
Check LCP, INP and CLS.
Inspect the network waterfall when diagnosing media performance.
Measure significant optimizations instead of guessing.
Never sacrifice accessibility for performance.
Never sacrifice usability for a performance trick.
Never sacrifice major visual quality without a meaningful performance reason.
Never allow an AI agent to introduce performance complexity without identifying the actual problem it solves.
A local optimization must not break unrelated site behavior.
The simplest implementation that meets the performance requirement is preferred.
The website should feel expensive without being technically expensive.

