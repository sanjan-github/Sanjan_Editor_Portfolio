CSS RULES
1. Purpose
This document defines the CSS architecture, styling conventions, responsive behavior, animation rules, and performance requirements for the sanjanedits portfolio.
CSS is responsible for:

Visual presentation
Layout
Typography
Color
Spacing
Responsive adaptation
Visual states
Animation and transitions
Decorative styling

CSS must not contain application logic.
JavaScript must control behavior.
HTML must define semantic structure.

2. Core CSS Principle
The CSS system must be:

Predictable
Maintainable
Responsive
Lightweight
Component-oriented
Accessible
Performance-conscious
Easy for multiple AI agents to modify safely

The most important rule is:
A local styling change must not unexpectedly alter unrelated parts of the website.
Avoid global selectors and specificity patterns that make localized changes dangerous.

3. CSS Architecture
Preferred file structure:
css/
├── base.css
├── layout.css
├── components.css
├── sections.css
├── animations.css
└── responsive.css

Responsibilities:
base.css
Contains:

CSS custom properties
Reset/normalization
Base element styles
Typography defaults
Global accessibility defaults

layout.css
Contains:

Containers
Page layout
Grids
Section spacing
Major structural layout

components.css
Contains:

Buttons
Navigation components
Project cards
Video controls
Modal/dialog styling
Reusable UI components

sections.css
Contains:

Hero-specific styling
Selected-work layout
Showreel section
About section
Contact section
Other section-specific composition

animations.css
Contains:

Reusable keyframes
Entry animations
Hover/micro-interactions
Motion utilities

responsive.css
Contains:

Broad viewport-specific adjustments
Mobile adaptations
Tablet adaptations
Large-screen adaptations

An alternative organization may be used if it is demonstrably clearer, but responsibilities must remain separated.

4. Cascade Layers
Use CSS cascade layers where they improve predictability.
Recommended conceptual order:
@layer reset, base, layout, components, sections, utilities, overrides;

The exact layer set may be adjusted during implementation.
Cascade layers allow precedence to be controlled explicitly instead of relying heavily on selector specificity and source order.
Do not create excessive layers.
The purpose is to prevent specificity wars, not create another complicated system.

5. Specificity
Keep selector specificity low.
Prefer:
.project-card {}
.project-card__title {}
.project-card:hover {}

Avoid:
main section:nth-child(3) .container > div article h2 span {}

Do not increase specificity simply to defeat another rule.
When specificity conflicts appear, simplify the CSS architecture rather than stacking more selectors.

6. Class Naming
Use descriptive, predictable class names.
Examples:
site-header
site-nav
hero
hero__title
projects-grid
project-card
project-card__media
project-card__title
contact-cta
video-dialog

The naming convention may use another consistent component methodology, but it must be applied consistently.
Do not mix unrelated naming systems within the same project.

7. Avoid Meaningless Classes
Avoid names such as:
box
box2
thing
cool
big
left
red
magic
container2

Class names should describe role or purpose rather than current appearance.
Bad:
<div class="green-text">

Better:
<span class="project-card__category">

Color belongs in CSS, not semantic naming.

8. Global CSS
Global selectors should be limited to genuinely global behavior.
Reasonable examples:
html
body
*
:root
::selection

Do not globally style every element type unless there is a clear reason.
For example, avoid broad rules that unexpectedly affect components:
div {
    ...
}

a {
    ...
}

unless the rule is genuinely intended as a global baseline.

9. CSS Custom Properties
Use CSS custom properties as the primary source of truth for reusable design tokens.
Example:
:root {
    --color-bg: #090909;
    --color-text-primary: #f5f5f2;
    --color-text-secondary: #8a8a8a;
    --color-accent: #c8ff00;

    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.5rem;
    --space-6: 2rem;
    --space-7: 3rem;
    --space-8: 4rem;
    --space-9: 6rem;
    --space-10: 8rem;

    --radius-sm: 0.25rem;
    --radius-md: 0.5rem;

    --container-max: 1200px;
}

The actual values may evolve.
Repeated values should be tokenized rather than duplicated throughout the stylesheet.

10. Token Rules
Create tokens for recurring:

Colors
Spacing
Typography
Border radius
Shadows if required
Transition durations
Container widths
Z-index layers where needed

Do not create tokens for every single one-off value.
Tokens should represent meaningful recurring decisions.

11. Color Rules
Use the established design system:
Background:       #090909
Primary text:     #F5F5F2
Secondary text:   #8A8A8A
Accent:           #C8FF00

Use CSS variables rather than repeatedly writing hex values.
Example:
color: var(--color-text-primary);

Do not introduce new recurring colors without documenting the design decision.

12. Color Contrast
Maintain sufficient contrast for readable text and important controls.
Do not use the secondary gray for text that must be highly prominent.
Do not reduce contrast merely to create a "minimal" appearance.
Accessibility takes priority over aesthetic subtlety.

13. Typography
Display font:
Plus Jakarta Sans
Body/UI font:
Inter
Do not introduce additional fonts without explicit approval.
Preferred font weights:
Plus Jakarta Sans

700
800

Inter

400
500
600

Load only required weights.

14. Fluid Typography
Prefer fluid typography for major responsive elements.
Use:
clamp()

where appropriate.
Example:
.hero__title {
    font-size: clamp(4rem, 12vw, 10rem);
}

clamp() is useful for fluid responsive sizing because it establishes minimum, preferred, and maximum values.
Do not use enormous fixed font sizes that require many breakpoint overrides.

15. Typography Line Height
Use appropriate line heights.
General guidance:

Large headings: relatively tight
Body text: comfortably readable
Small metadata: avoid excessively tight line-height

Do not globally apply a single line-height value to everything.

16. Typography Width
Use max-width for long text blocks.
Do not allow body copy to stretch across extremely wide screens.
The purpose is readability, not maximum content width.

17. Typography Spacing
Use consistent spacing between:

Headings
Paragraphs
Labels
Buttons
Sections

Avoid arbitrary margin values scattered throughout the CSS.
Use spacing tokens where practical.

18. CSS Reset
Use a small, intentional reset.
Typical foundation may include:
*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
}

img,
video,
svg {
    display: block;
    max-width: 100%;
}

The exact reset should remain minimal.
Do not import a large reset framework for a small static site.

19. Body Defaults
The body should establish:

Background
Text color
Font family
Base font size
Line height
Antialiasing behavior if intentionally used

Do not use body-level styling to solve component-specific problems.

20. Box Sizing
Use:
box-sizing: border-box;

for all elements through a global reset.
This makes sizing behavior more predictable.

21. Layout System
Use:

CSS Grid for major compositions
Flexbox for one-dimensional alignment
Normal document flow wherever practical

Avoid absolute positioning as the primary layout system.
Absolute/fixed positioning may be used for:

overlays
decorative elements
video controls
intentional floating UI
modal layers


22. Containers
Use a shared content-container pattern.
Conceptually:
.container {
    width: min(100% - 2rem, var(--container-max));
    margin-inline: auto;
}

The exact values should be tuned to the design.
Do not create separate arbitrary container widths for every section unless the composition genuinely requires it.

23. Logical Properties
Prefer logical properties when appropriate:
margin-inline
padding-inline
margin-block
padding-block
inset-inline
inset-block

over unnecessary directional assumptions.
This improves adaptability and reduces duplicated directional CSS.

24. Grid
Use Grid for:

Selected Work
Projects archive
Editorial compositions
Multi-column layouts
Asymmetric compositions

Prefer declarative grid definitions over excessive absolute positioning.

25. Flexbox
Use Flexbox for:

Navigation
Button groups
Inline controls
Small UI alignments
Horizontal/vertical component alignment

Do not use Flexbox to simulate a complex two-dimensional grid when CSS Grid is more appropriate.

26. Gap
Prefer:
gap
row-gap
column-gap

for spacing between flex/grid children.
Avoid excessive child-specific margin rules when gap provides a clearer structure.

27. Aspect Ratio
Use:
aspect-ratio

for media containers where appropriate.
Example:
.project-card__media {
    aspect-ratio: 9 / 16;
}

This helps maintain stable geometry before media loads.

28. Responsive Strategy
Use a responsive-first strategy.
The default CSS should work reasonably well on small screens.
Then enhance the layout for larger screens.
Do not design desktop first and then attempt to repair it with dozens of mobile overrides.

29. Media Queries
Use media queries for viewport-level layout changes.
Example:
@media (width >= 48rem) {
    ...
}

Use a small number of meaningful breakpoints.
Do not create breakpoints for every individual device.

30. Container Queries
Container queries may be used for reusable components that need to respond to their containing width rather than the viewport.
Example:
.project-grid {
    container-type: inline-size;
}

Then:
@container (width >= 40rem) {
    ...
}

Container queries are designed specifically to let components respond to the size of their containing element rather than the viewport.
Do not use container queries everywhere.
Use them when component-level responsiveness genuinely improves the architecture.

31. Breakpoint Strategy
Do not use:
375px
390px
412px
430px
480px
540px
600px
768px
820px
834px

simply because common devices exist at those widths.
Instead, add a breakpoint when the layout actually needs to change.

32. Mobile
At mobile widths:

Preserve readability
Preserve hierarchy
Keep touch targets usable
Reduce decorative complexity if necessary
Maintain video prominence
Avoid hover-dependent styling

Desktop-only effects may be disabled or simplified.

33. Desktop
Desktop may use:

Large typography
Asymmetric grids
Expanded whitespace
Pointer-based interactions
More complex composition

Do not simply scale mobile layout upward.

34. Large Screens
Large screens should use maximum-width constraints.
Do not allow text or card grids to become excessively wide.
Use whitespace intentionally.

35. Images
Use image styling appropriate to their role.
Common behavior:
img {
    display: block;
    max-width: 100%;
}

For cropped visual media:
object-fit: cover;

Do not force object-fit: cover on every image if cropping would remove meaningful content.

36. Video Styling
Portfolio video containers should:

Preserve aspect ratio
Avoid layout shifts
Have intentional overflow behavior
Be responsive
Remain visually dominant

Example:
.video-frame {
    aspect-ratio: 9 / 16;
    overflow: hidden;
}

The exact ratio should correspond to the actual portfolio asset when appropriate.

37. Overflow
Use overflow: hidden only when content genuinely must be clipped.
Do not globally hide overflow to fix layout problems.
Never use:
body {
    overflow: hidden;
}

as a casual solution.
This can interfere with scrolling and accessibility.

38. Positioning
Prefer normal document flow.
Use:
static
relative
absolute
fixed
sticky

intentionally.
Do not use absolute positioning to manually place most of the website.
If a section requires dozens of absolute coordinates, the layout architecture is probably wrong.

39. Z-Index
Use a small, documented stacking hierarchy.
Example conceptual values:
base
navigation
overlay
modal

Do not create arbitrary z-index numbers such as:
999
9999
99999
9999999

Stacking contexts should remain understandable.

40. Navigation CSS
Navigation should have:

Clear hierarchy
Strong contrast
Predictable positioning
Responsive adaptation
Visible focus state
Clear active state

Avoid unnecessary visual complexity.

41. Button Styling
Buttons should use reusable component styles.
Example conceptual variants:
.button--primary
.button--secondary
.button--text

Do not create a unique button design for every section.

42. Focus States
Every interactive element needs a visible focus state.
Do not remove:
outline: none;

unless a clear accessible replacement is provided.
Preferred approach may involve:
:focus-visible

for keyboard-focused elements.
Example:
:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 4px;
}

The exact treatment may be refined visually.

43. Hover States
Hover effects should enhance interaction.
They should not be required for understanding.
Hover animations must not create layout shifts.
Prefer:
transform
opacity

for lightweight interactions.

44. Active States
Buttons, navigation items, filters and selected projects should have clear active states where necessary.
Do not communicate selected state using color alone.
Use visual changes such as:

weight
underline
border
indicator
position
icon


45. Disabled States
If an interaction can genuinely be unavailable, style the disabled state clearly.
Do not make unavailable-looking content appear clickable.
Avoid creating disabled states unnecessarily.

46. Transition Rules
Keep transitions short and intentional.
Typical ranges may be approximately:
150ms–250ms

for micro-interactions.
Longer durations may be appropriate for larger editorial transitions, but should be used sparingly.
Do not make basic UI actions feel slow.

47. Easing
Use appropriate easing curves.
Avoid making every animation use a different easing function.
Create a small transition-token system if repeated timings/easings are needed.
Example:
:root {
    --ease-standard: cubic-bezier(.2, .8, .2, 1);
}

The exact curve may be refined during implementation.

48. Animation Properties
Prefer animations involving properties that can generally be handled efficiently by the browser, especially:

transform
opacity

Use more expensive effects such as:

large box-shadow
heavy filter
repeated clip-path

carefully.
Test before assuming an effect is cheap.

49. Layout-Animating Properties
Avoid frequent animations of properties such as:

width
height
top
left
margin
padding

when transform-based alternatives can achieve the same visual result.
Frequent layout changes can cause unnecessary rendering work.

50. Transform Strategy
Prefer transforms for movement and scaling.
Example:
.project-card:hover .project-card__media {
    transform: scale(1.02);
}

Keep scale subtle.
Do not use extreme scaling that distorts the media.

51. Opacity
Opacity can be used for:

Fade transitions
Reveal animations
Interaction states

Do not make important content permanently low-opacity.
Readable content must remain readable.

52. Clip-Path
clip-path may be used for cinematic reveal effects.
Use it selectively.
Do not apply complex clip-path animation to dozens of elements simultaneously.

53. Blur
Blur can be visually effective but may be expensive.
Avoid continuously animating large blurred areas.
Use blur primarily for short transitions or controlled visual effects.

54. Box Shadow
Use shadows sparingly.
Do not create glowing shadows around every component.
If an effect requires large animated shadows everywhere, reconsider the design.

55. Will-Change
Do not use will-change as a general optimization technique.
Only use it when there is a demonstrated rendering problem and a specific element benefits from the hint.
MDN explicitly recommends using will-change sparingly and as a last resort because excessive use can increase memory usage and actually reduce performance.
Never apply:
* {
    will-change: transform;
}

or:
body {
    will-change: transform;
}


56. Content Visibility
content-visibility: auto may be used for large off-screen sections where it provides measurable value.
Example:
.projects-section {
    content-visibility: auto;
    contain-intrinsic-size: auto 800px;
}

Use it only when appropriate.
Modern browsers can skip layout and rendering work for off-screen content when content-visibility: auto is used, while contain-intrinsic-size can help reserve space and avoid layout shifts.
Do not apply content visibility blindly to interactive or critical content.

57. CSS Containment
contain may be used for genuinely independent components where it provides a measurable rendering benefit.
Example:
.project-card {
    contain: content;
}

Only use containment when its behavior is understood.
Containment can isolate rendering and reduce propagation of layout/style/paint work.
Do not add containment everywhere simply because it sounds performant.

58. Reduced Motion
Provide a reduced-motion mode.
Example:
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

The final implementation may use more targeted rules rather than disabling everything globally.
The key requirement is that non-essential motion must be reduced.

59. Scroll Behavior
Smooth scrolling may be used for normal anchor navigation.
Do not use CSS or JavaScript to hijack scrolling.
Do not create a scroll experience that fights the browser's normal behavior.

60. :hover and Touch
Do not make functionality dependent on hover.
Use hover as an enhancement.
All important interactions must work through touch and keyboard.

61. Pointer Media Queries
When creating desktop-specific pointer interactions, consider:
@media (hover: hover) and (pointer: fine) {
    ...
}

This can prevent hover effects from being unnecessarily applied to touch devices.

62. Custom Cursor
A custom cursor may exist on desktop only.
If implemented:

Hide on touch devices
Do not block native pointer interaction
Do not replace focus states
Do not reduce usability
Keep JavaScript work minimal

The cursor must enhance, not complicate, the interface.

63. Selection Styling
Custom text selection styling may be used sparingly.
Example:
::selection {
    background: var(--color-accent);
    color: var(--color-bg);
}

Do not make selection styling inaccessible or visually confusing.

64. Scrollbars
Do not heavily customize scrollbars merely for aesthetics.
Native scrollbar behavior is usually preferable.
If customization is used, it must preserve usability and contrast.

65. Background Effects
Background effects may include:

subtle gradients
texture
fine lines
extremely restrained motion

They must remain secondary to the content.
Do not create heavy animated backgrounds.

66. Gradients
Gradients are allowed only when they strengthen the composition.
Do not use gradients by default.
Avoid:

rainbow gradients
excessive glowing gradients
background gradients covering the entire page without purpose

The visual identity relies primarily on contrast, typography, media and composition.

67. Glassmorphism
Glassmorphism should not be a primary visual language.
If translucent surfaces are used at all, they should be limited and justified.
Do not create an interface where every element is translucent.

68. Shadows and Glow
Glow effects must be restrained.
The lime accent should not become an omnipresent neon glow.
Use accent color primarily as a visual signal.

69. Section Styling
Each major section may have its own visual composition while preserving global:

typography
colors
spacing
component styles
interaction conventions

Do not make each section feel like a different website.

70. Project Cards
Project cards should prioritize:

Media
Project identity
Play interaction

Use a reusable project-card component style.
Avoid introducing a unique card layout for every project.

71. Project Card Hover
Possible behavior:

Slight media scale
Subtle overlay
Play indicator movement
Small text movement
Controlled accent interaction

Do not use large rotations or exaggerated 3D effects.

72. Video Player Styling
The video player must prioritize:

Video visibility
Controls
Close action
Clean composition

Do not surround the player with excessive UI decoration.
The player's appearance should integrate with the portfolio's visual system.

73. Modal Styling
The modal backdrop should:

Clearly separate foreground from background
Not obscure the controls
Avoid excessive blur if unnecessary
Prevent background distraction

The modal should feel immersive without feeling like a completely separate application.

74. Modal Layering
Keep modal z-index behavior predictable.
Do not use arbitrary massive z-index values.
The modal should sit above:

navigation
page content
decorative layers


75. Decorative Layers
Decorative elements should not capture pointer events unless intentionally interactive.
Use:
pointer-events: none;

for purely decorative overlays when appropriate.

76. Pointer Events
Do not disable pointer events on meaningful interactive elements.
A decorative overlay must never accidentally block:

buttons
links
video controls
navigation


77. CSS Pseudo-Elements
::before and ::after may be used for:

decorative lines
overlays
visual accents
controlled interaction effects

Do not use pseudo-elements to hold essential content.
Important content must exist in HTML.

78. CSS Generated Content
Do not use content: to create meaningful information that users need to understand.
Bad:
.project::before {
    content: "Movie Edit";
}

if "Movie Edit" is meaningful project information.
That content belongs in HTML.
Pseudo-elements are for presentation.

79. Utility Classes
Utility classes may be introduced for genuinely reusable behavior.
Examples:
.visually-hidden
.text-balance
.flow
.no-scroll

Do not create hundreds of utilities.
Prefer semantic component styles when they improve readability.

80. Visually Hidden Content
A standard visually-hidden utility may be used for content that should remain accessible but not visually displayed.
It must not be used to hide important content from users as an SEO trick.

81. CSS Nesting
Modern CSS nesting may be used if it improves readability.
Example:
.project-card {
    ...

    &:hover {
        ...
    }
}

However, nesting should not become excessively deep.
Deep nesting makes selectors harder to reason about and can increase specificity complexity.
MDN documents native CSS nesting support and its interaction with at-rules and cascade layers.

82. Selector Depth
Keep selectors shallow.
Prefer:
.project-card__title

over:
.projects-section .container .projects-grid article .project-card__content h3

The component should own its styling.

83. :has()
:has() may be used when it creates a significantly cleaner solution.
Do not use it unnecessarily.
Complex relational selectors should be used carefully because they can increase style-calculation cost. MDN specifically notes performance considerations around :has().

84. calc()
Use calc() when it produces a genuinely useful fluid relationship.
Avoid unnecessarily complicated formulas.
Prefer readable CSS over mathematical cleverness.

85. min(), max(), clamp()
These modern CSS functions are encouraged when they simplify responsive behavior.
Typical uses:

Fluid type
Container widths
Responsive spacing
Media sizing

Avoid formulas so complex that another developer/AI agent cannot understand them.

86. Absolute Units
Use:

rem
%
vw
vh
dvh
ch
clamp()

where appropriate.
Avoid hardcoding everything in pixels.
Pixels are still valid for certain visual details such as:

borders
fine shadows
icons
exact small dimensions

Use judgment rather than banning units.

87. Dynamic Viewport Units
For full-height layouts on mobile, prefer dynamic viewport units where appropriate:
min-height: 100dvh;

instead of assuming 100vh behaves identically across mobile browsers.
Do not use full viewport height if the content does not require it.

88. Safe Areas
If full-screen mobile UI is used, consider device safe areas where appropriate.
Example:
padding-inline:
    max(1rem, env(safe-area-inset-left))
    max(1rem, env(safe-area-inset-right));

Use only when necessary.

89. Performance Principle
CSS must contribute as little unnecessary rendering work as practical.
Avoid:

Excessive shadows
Continuous blur
Large filters
Huge animated gradients
Excessive DOM-dependent selectors
Hundreds of simultaneous animations
Unnecessary layout-triggering animations
Permanent will-change

Performance should be assessed by actual behavior, not assumptions.

90. Critical CSS
Keep above-the-fold styling available without unnecessary dependency chains.
Do not create an elaborate critical-CSS build system for this project unless the project grows enough to justify it.
The priority is a clean static stylesheet structure.

91. Stylesheet Loading
Use normal stylesheet loading initially.
If the project later demonstrates a real need for CSS splitting or media-specific loading, optimize based on measurements.
MDN notes that CSS can affect the critical rendering path, and media-specific stylesheets can reduce blocking from styles known not to apply.
Do not prematurely optimize into a complicated setup.

92. External CSS
Avoid external CSS frameworks.
Do not load:

Bootstrap
Tailwind CDN
Foundation
large component libraries

unless the architecture is explicitly changed.
The site should remain self-contained and lightweight.

93. Inline CSS
Do not use large inline style blocks inside HTML.
Keep normal styling in CSS files.
Small inline styles may be appropriate only for genuinely dynamic values and only when the architecture explicitly requires them.

94. JavaScript-Driven CSS
JavaScript should preferably toggle classes or data attributes rather than directly manipulating many style properties.
Prefer:
element.classList.add("is-open");

then CSS controls the presentation.
Avoid:
element.style.width = "...";
element.style.opacity = "...";
element.style.transform = "...";

unless dynamic calculation genuinely requires direct style updates.

95. State Classes
Use explicit state classes where useful.
Examples:
.is-active
.is-open
.is-playing
.is-loading
.is-visible
.is-error

State classes should have consistent naming and meaning.

96. Data Attributes for State
Data attributes may be used where they make state relationships clearer.
Example:
data-state="open"

Do not create both a state class and a state data attribute for the same purpose unless there is a clear reason.

97. Animation State
Animations should generally respond to semantic state.
Example:
.video-dialog.is-open {
    ...
}

Avoid selectors based on DOM position.

98. Scroll Reveal
If reveal animations are implemented:
initial state
    ↓
JavaScript adds is-visible
    ↓
CSS performs transition

Prefer this over JavaScript continuously manipulating animation properties on scroll.

99. Intersection Observer Integration
IntersectionObserver should trigger CSS state changes when appropriate.
Example conceptual flow:
Element enters viewport
        ↓
JS adds .is-visible
        ↓
CSS performs reveal

This keeps the animation definition in CSS and behavior in JavaScript.

100. Animation Timing
Avoid long delays before content becomes visible.
A visitor should not wait several seconds for a section to appear simply because it uses an entrance animation.
Motion should reveal content quickly.

101. Initial Hidden Content
Do not hide large amounts of critical content in CSS waiting for JavaScript.
If JavaScript fails, the site should remain usable.
Animation should enhance visibility, not gate access to content.

102. Reduced-Motion Fallback
Any major animation must have a reduced-motion equivalent.
Example:
Normal:
translate + opacity + clip reveal

Reduced motion:
simple opacity or immediate visibility


103. Mobile Animation
Animations may be simplified on mobile when necessary.
Do not assume the same effect that performs well on a powerful desktop will perform equally well on a mid-range phone.

104. Performance Testing
When adding a visually expensive effect, evaluate:

Frame smoothness
CPU usage
GPU behavior
Mobile performance
Scroll performance
Memory usage
Interaction responsiveness

Do not assume an effect is cheap because it uses CSS.

105. Browser Compatibility
Prefer modern widely supported CSS features.
Use progressive enhancement for newer features where necessary.
Examples of acceptable modern CSS:

clamp()
CSS Grid
container queries
cascade layers
:focus-visible
logical properties
content-visibility

Check compatibility when using less-established features.

106. Fallbacks
When a non-essential modern CSS feature is unsupported, the core interface should still work.
Do not make the entire layout dependent on an experimental feature.

107. Print Styles
A print stylesheet is not a priority for this portfolio.
Do not spend significant implementation effort on print-specific styling unless a real requirement appears.

108. Dark Theme
The portfolio's primary theme is dark.
Do not automatically introduce a light-mode theme.
A theme switcher is outside the current scope unless explicitly requested.

109. Selection of New CSS Features
Before using a new CSS feature, ask:

Does it simplify the implementation?
Is browser support sufficient?
Does it improve UX?
Does it create maintenance complexity?
Does it affect performance?
Can the same result be achieved more simply?

Prefer the simplest reliable solution.

110. No Magic Numbers Without Reason
Avoid unexplained values such as:
margin-top: 137px;
left: 43px;
transform: translateX(-17px);
z-index: 743;

One-off values are allowed when the design genuinely requires them.
But an unexplained collection of magic numbers is usually evidence of a fragile layout.

111. Component Ownership
A component should primarily own its own visual styles.
Example:
project-card
    owns:
    - card layout
    - media
    - title
    - metadata
    - hover state

Do not style a project card by relying on unrelated global selectors.

112. Section Ownership
Section-level layout belongs to the section.
Example:
hero
    owns hero composition

projects-section
    owns portfolio grid composition

about-section
    owns about layout

Global layout primitives should provide reusable foundations without forcing every section into the same composition.

113. Responsive Ownership
A component should control its own responsive behavior where practical.
Container queries may be used for truly reusable components.
Page-level media queries should control major page composition.
Do not scatter responsive rules for the same component across many unrelated files.

114. CSS File Responsibilities
Before adding CSS to a file, determine whether that file actually owns the relevant responsibility.
Do not place project-card styling in hero.css.
Do not place global typography rules in projects.css.
Do not place animation definitions randomly across unrelated files.

115. CSS Change Scope
A request to change one section must remain localized whenever possible.
Example:
"Make Selected Work feel more premium."
Allowed:

Selected Work layout
Project-card presentation
Relevant project-card animation

Not automatically allowed:

Hero redesign
Global palette change
Typography replacement
Navigation redesign
About section redesign


116. CSS Refactoring Rule
Do not refactor unrelated CSS while implementing a localized feature.
Example:
If asked to change:
project-card hover

do not simultaneously:

rename every CSS class
reorganize every stylesheet
rewrite the reset
replace the entire grid system

unless the requested change genuinely requires it.

117. Before Adding a Rule
Before adding a new CSS rule, check:

Does an existing class already represent this component?
Does an existing token provide the required value?
Can an existing pattern be reused?
Will this selector affect other components?
Can the rule remain local?

Avoid duplicate patterns.

118. After Adding a Rule
Check:

Desktop
Tablet
Mobile
Hover
Focus
Active
Reduced motion
Overflow
Layout stability

Check for unintended changes to neighboring components.

119. CSS Debugging Rule
Do not solve CSS problems by blindly increasing specificity.
Preferred debugging order:

Identify the source of the conflicting rule.
Determine whether the cascade is correct.
Determine whether the component boundary is correct.
Simplify selectors.
Use an explicit layer or state if necessary.
Only then consider a more specific selector.


120. No !important by Default
Do not use !important as a normal way to solve conflicts.
If !important becomes necessary:

Understand why.
Determine whether the cascade architecture is wrong.
Use it only for genuinely justified cases.

Never scatter !important throughout the stylesheet.

121. CSS and Accessibility
Do not use CSS to hide important meaning from assistive technologies.
Do not:

hide focus indicators
hide essential text
make contrast insufficient
disable pointer interactions on necessary controls
rely solely on visual animation for state

Visual design and accessibility must coexist.

122. CSS and Semantics
CSS must not determine semantic meaning.
Do not style arbitrary <div> elements into behaving visually like complex semantic components while the HTML remains incorrect.
HTML semantics come first.
CSS provides presentation.

123. CSS and Content
Do not put important content into:
content:

unless it is genuinely decorative.
Important project names, descriptions, categories and CTAs belong in HTML.

124. CSS Quality
CSS should optimize for:
clarity > cleverness
Prefer:
.project-card__title {
    color: var(--color-text-primary);
}

over complicated selector tricks that produce the same visual result.

125. CSS Performance Priority
When choosing between two visually equivalent implementations, prefer the one with:

Less CSS
Simpler selectors
Fewer simultaneously animated elements
Fewer expensive effects
Less layout recalculation
Less DOM dependency
Better maintainability


126. Performance Features Must Be Intentional
Features such as:

will-change
contain
content-visibility
complex :has()
heavy filters
elaborate clipping

must be introduced based on a clear reason.
Do not add them merely because they are "performance features."

127. Design-System Consistency
Every component must use established:

Colors
Typography
Spacing
Radius
Motion
Interaction states

Do not invent a new visual language for individual components.

128. Visual Restraint
A component does not become better by adding:

More shadows
More gradients
More borders
More animation
More colors
More effects

When improving a component, first improve:

Composition
Spacing
Typography
Contrast
Hierarchy
Interaction

Only then add decoration if necessary.

129. AI-Agent Rules
Before modifying CSS, an AI agent must:

Read this document.
Read 02-DESIGN-SYSTEM.md.
Identify the affected component/section.
Determine the smallest relevant CSS scope.
Check existing tokens and patterns.
Avoid modifying unrelated styles.

After modification, the agent should verify that unrelated components were not changed.

130. AI-Agent Prohibited Behavior
An AI agent must not:

Rewrite all CSS to solve a local issue.
Add a framework.
Introduce arbitrary colors.
Introduce arbitrary fonts.
Add excessive breakpoints.
Add !important throughout the stylesheet.
Add global selectors to solve local issues.
Add will-change everywhere.
Add continuous animations everywhere.
Change the entire visual identity because a task says "make it better."
Replace the established design system without authorization.


131. Visual Improvement Requests
When the instruction is vague, such as:
"Make this look better."
The agent must interpret the request within the current design system.
It should improve the target component using existing:

Typography
Colors
Spacing
Motion
Composition

It must not treat the request as authorization to redesign the entire website.

132. CSS Validation
Before considering a CSS change complete, inspect for:

Broken selectors
Unused styles introduced by the change
Specificity conflicts
Overflow problems
Mobile regressions
Focus-state regressions
Reduced-motion regressions
Unexpected animation
Layout shift
Invalid CSS


133. Browser Testing
Meaningful CSS changes should be checked in at least:

Mobile-width viewport
Tablet-width viewport
Desktop-width viewport

Interactive changes should also be checked for:

Mouse
Touch
Keyboard
Reduced-motion preference


134. Source Formatting
Keep CSS readable.
Use consistent indentation and formatting.
Do not minify source CSS during development.
Production optimization must not destroy the maintainability of the source repository.

135. Documentation of Significant CSS Decisions
If a major CSS architectural decision is introduced, document it in:
.ai/13-DESIGN-DECISIONS.md

Examples:

Introduction of container queries
Change to token architecture
Major breakpoint redesign
New animation system
New CSS dependency
Major performance technique


136. Final CSS Principles
The CSS system should feel:
Simple underneath, sophisticated on screen.
The visitor should experience:

polished typography
cinematic media
strong composition
responsive layouts
smooth interaction

while the code remains:

understandable
modular
lightweight
predictable
safe for AI-assisted modification


137. Non-Negotiable CSS Rules

Use the established design system.
Use CSS custom properties for recurring tokens.
Keep selector specificity low.
Keep component styles localized.
Prefer Grid for two-dimensional layouts.
Prefer Flexbox for one-dimensional layouts.
Use fluid responsive sizing where appropriate.
Use clamp() for major fluid typography/sizing when beneficial.
Use a small number of meaningful breakpoints.
Use container queries selectively.
Prefer transforms and opacity for animation.
Do not animate layout properties unnecessarily.
Do not use will-change as a default optimization.
Use containment/content-visibility only intentionally.
Respect reduced-motion preferences.
Do not rely on hover for essential functionality.
Preserve visible focus states.
Avoid excessive shadows, blur, glow and gradients.
Do not use !important as a routine solution.
Do not use global selectors to fix local problems.
Do not introduce arbitrary colors, fonts or breakpoints.
Do not rewrite unrelated CSS during localized tasks.
Keep CSS and JavaScript responsibilities separate.
Keep CSS readable and maintainable.
Measure performance before adding expensive visual effects.
Never sacrifice usability or accessibility for visual decoration.

