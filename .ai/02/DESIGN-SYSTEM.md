DESIGN SYSTEM
1. Purpose
This document defines the visual language of the sanjanedits portfolio.
The design system exists to keep the website visually consistent across:

Homepage
Projects page
Portfolio cards
Video player
Navigation
Buttons
Typography
Images
Animations
Contact sections
Future additions

AI coding agents must treat this document as the visual source of truth.
Do not introduce visual patterns that contradict this system without an explicit design decision.

2. Core Design Concept
Primary Direction
Dark cinematic editorial.
The website should combine:

Cinematic presentation
Editorial typography
Strong visual hierarchy
High contrast
Controlled energy
Premium simplicity
Modern motion
Large-scale media

The design should visually communicate the characteristics of Sanjan's editing:
rhythm → tension → movement → impact
The website should feel like the portfolio of a serious short-form editor.

3. Desired Emotional Response
A visitor should feel:

Immediately impressed
Curious to watch the work
Confident in the editor's ability
That the site feels professionally made
That Sanjan understands visual presentation
That their content would be handled seriously

The intended reaction is:

"This is a professional editor I could trust with my brand."

The site should NOT make the primary reaction:

"This website has lots of cool effects."

The editing work is the star.

4. Visual Personality
The design should be:
Confident
Large typography and decisive layouts.
Cinematic
Media should have strong visual presence.
Energetic
Motion and interaction should have impact.
Minimal
Do not add elements simply to fill empty space.
Premium
Spacing, typography, alignment and consistency should feel intentional.
Modern
Use current web design patterns without blindly following trends.
Editorial
Layouts may use asymmetry and unconventional proportions while remaining easy to understand.

5. What the Design Must Avoid
Avoid the following unless explicitly approved:

Generic SaaS layouts
Generic freelancer templates
Corporate stock imagery
Excessive glassmorphism
Excessive gradients
Excessive neon
Rainbow color palettes
Excessive rounded cards
Excessive pills
Excessive shadows
Decorative particles
Constant background animations
3D objects without a clear purpose
WebGL decoration
Fake cinematic film effects
Fake client logos
Fake testimonials
Fake statistics
Excessive text
Visually noisy layouts
Unnecessary UI elements

The design should feel expensive because of composition and restraint, not because of visual clutter.

6. Color System
Core Palette
Background
#090909

Primary page background.
Use as the default dark canvas.
Primary Text
#F5F5F2

Use for:

Main headings
Important labels
Primary navigation
Primary buttons
High-priority content

Secondary Text
#8A8A8A

Use for:

Supporting descriptions
Metadata
Secondary navigation
Less-important information

Accent
#C8FF00

Use sparingly for:

Primary action emphasis
Active navigation state
Selected states
Small visual accents
Important indicators
Interactive highlights

The accent must remain an accent.
Do not use it for large areas of the page unless a specific design decision requires it.

7. Color Tokens
All colors must be defined centrally using CSS custom properties.
Example:
:root {
    --color-bg: #090909;
    --color-text-primary: #F5F5F2;
    --color-text-secondary: #8A8A8A;
    --color-accent: #C8FF00;
}

Do not scatter hardcoded color values throughout CSS.
If a new recurring color is required, add it to the design token system rather than repeatedly writing a hex value.

8. Color Usage Rules
Preferred hierarchy:
Background
    ↓
Primary text
    ↓
Secondary text
    ↓
Accent

The accent must have visual meaning.
Do not use the accent on:

Every heading
Every border
Every icon
Every button
Every card
Every hover state

Too much accent destroys visual hierarchy.

9. Typography
Display Font
Plus Jakarta Sans
Primary use:

Hero typography
Section headings
Large statements
Major labels
Prominent numbers
High-impact text

Body/UI Font
Inter
Primary use:

Body text
Navigation
Metadata
Buttons
Supporting information
Small labels

Do not introduce additional fonts unless explicitly approved.

10. Typography Personality
Typography should feel:

Bold
Modern
Clean
Confident
Spacious
Editorial

Large headings should create visual impact.
Body copy should remain highly readable.
Do not compensate for weak copy with enormous text.

11. Font Weights
Preferred starting weights:
Plus Jakarta Sans

700
800

Inter

400
500
600

Do not load every available font weight.
Use only the weights actually required.

12. Responsive Typography
Typography must scale fluidly.
Prefer:
clamp()

for major headings where appropriate.
Example:
font-size: clamp(4rem, 12vw, 10rem);

Do not rely on fixed desktop font sizes and then repeatedly override them at many breakpoints.

13. Typography Hierarchy
A general hierarchy should resemble:
HERO DISPLAY
    ↓
SECTION HEADING
    ↓
PROJECT TITLE
    ↓
BODY / DESCRIPTION
    ↓
METADATA / MICROCOPY

Each level must be visually distinguishable.
Do not create ten competing heading sizes.

14. Line Length
Body text should remain readable.
Avoid excessively long paragraphs across very wide screens.
Use appropriate max-width values for textual content.
Large display statements may intentionally use wider or unusual compositions.

15. Letter Spacing
Use letter spacing intentionally.
Good candidates:

Small uppercase labels
Navigation microcopy
Metadata
Editorial section labels

Large display headings generally should not be heavily letter-spaced unless visually justified.
Do not apply letter-spacing globally.

16. Case Usage
Preferred:

Large editorial headings: uppercase or strong title case depending on composition
Body text: normal sentence case
Small metadata: uppercase may be used sparingly

Do not make everything uppercase.

17. Spacing System
Use a consistent spacing scale.
Prefer CSS custom properties for commonly repeated spacing values.
Example:
:root {
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
}

The exact scale may be adjusted during implementation, but spacing must remain systematic.

18. Whitespace
Whitespace is a major component of the visual identity.
Do not automatically fill empty areas.
Large empty space may be intentionally used to:

Increase importance
Create tension
Separate sections
Highlight typography
Make media feel larger
Create a cinematic feeling

Do not compress sections simply because they contain unused space.

19. Layout Philosophy
The website should favor:

Strong grids
Large media
Editorial asymmetry
Intentional alignment
Clear hierarchy
Responsive composition

Layouts should not feel like a collection of standard cards stacked vertically.
Use asymmetry when it improves visual storytelling.
Do not introduce asymmetry merely for novelty.

20. Containers
Content should use a consistent maximum-width system.
The exact maximum width can be tuned during implementation.
Large screens should not stretch content unnecessarily across the full viewport.
Full-bleed media may intentionally break the normal content container.

21. Grid System
CSS Grid is the preferred method for complex page composition.
Use it for:

Selected work
Projects archive
Editorial sections
Asymmetric content layouts

Flexbox is preferred for:

Navigation
Buttons
Small component alignment
Horizontal groups

Do not use absolute positioning as the primary layout mechanism.
Absolute positioning may be used for controlled overlays and decorative elements.

22. Border Radius
The visual language should prefer relatively sharp forms.
Use small or moderate radius where useful.
Avoid:

Everything being pill-shaped
Excessively rounded cards
Huge rounded containers

Rounded corners should serve usability or visual hierarchy, not be added automatically.

23. Borders
Borders should be subtle.
Use borders mainly for:

Separation
Interactive boundaries
Navigation states
Modal controls
Project metadata

Avoid outlining every element.

24. Shadows
Shadows should be used sparingly.
The design should rely primarily on:

Contrast
Spacing
Typography
Scale
Media
Motion

rather than heavy shadow effects.
Avoid large glowing shadows that make the site feel artificial.

25. Images
Images should feel cinematic and intentional.
Preferred treatment:

Strong cropping
High visual contrast
Consistent aspect ratios where appropriate
Minimal unnecessary decoration

Use object-fit: cover when an image needs to fill a fixed visual frame.
Do not crop important parts of Sanjan's photograph without considering composition.

26. Profile Photograph
Sanjan's photo should feel integrated into the design.
Avoid presenting it like a standard resume/profile card.
Preferred approaches include:

Editorial crop
Large image block
Asymmetrical placement
Image interacting with typography
Subtle motion
Strong contrast

The photograph should support the brand rather than dominate the website unnecessarily.

27. Video Presentation
Video is the most important visual medium on the website.
Videos should be treated as portfolio artwork, not generic <video> elements.
Preferred characteristics:

Large display area
Strong poster frame
Clear play affordance
Minimal surrounding UI
Correct aspect ratio
Smooth transition into playback

Video cards should feel visually integrated into the page.

28. Poster Images
Poster images should be:

Lightweight
Sharp
Correctly cropped
Representative of the actual edit
Optimized for their rendered size

Do not use a giant source image when a smaller version is sufficient.
Posters should communicate the video's quality before playback begins.

29. Buttons
Buttons should be:

Clear
High contrast
Easy to identify
Responsive
Minimal

Primary CTA buttons should have strong visual emphasis.
Example conceptual hierarchy:
PRIMARY ACTION
→ strong contrast

SECONDARY ACTION
→ lower visual emphasis

TEXT LINK
→ minimal visual weight

Avoid designing every button as the same visual priority.

30. Primary CTA
The primary CTA is:
Contact / Start a Project
It should be obvious without being aggressive.
The visitor should never need to hunt for the contact action.

31. Links
Links should have recognizable interaction states.
At minimum:

Default
Hover
Focus
Active/selected where applicable

Hover states should feel intentional and fast.
Do not rely solely on color changes to communicate interaction.

32. Navigation
Navigation should feel lightweight and confident.
Avoid oversized navigation panels unless the interaction genuinely requires them.
The brand name should remain recognizable.
The Projects and Contact actions should be easy to discover.

33. Motion Principles
Motion is an important part of the visual identity.
The motion language should reflect:
build → tension → movement → impact
Motion should feel:

Fast when appropriate
Smooth
Precise
Controlled
Intentional

Do not animate elements simply because animation is possible.

34. Motion Hierarchy
Use different motion intensity depending on importance.
Major elements
Examples:

Hero
Featured project
Showreel

May have stronger entrance/transition effects.
Supporting elements
Examples:

Metadata
Secondary text
Small cards

Should use subtler motion.
Utility elements
Examples:

Footer
Basic links

Should use minimal motion.

35. Animation Style
Preferred animation techniques:

Transform
Opacity
Clip-path
Scale
Subtle blur where performance allows
CSS transitions
CSS keyframes
IntersectionObserver-triggered state changes

Avoid continuous expensive animation.

36. Hover Behavior
Desktop hover interactions may include:

Slight scale
Image movement
Overlay changes
Accent movement
Cursor response
Text displacement
Play indicator movement

Keep hover effects subtle enough that the interface still feels professional.

37. Cursor Interaction
A custom cursor may be used on desktop if it meaningfully improves the experience.
Requirements:

Must not interfere with usability
Must not replace visible interaction states
Must not exist on touch devices
Must remain lightweight
Must respect reduced-motion preferences

Do not create an elaborate cursor simply because it looks technically impressive.

38. Scroll-Based Animation
Scroll animations may be used to reveal:

Headings
Images
Project cards
Supporting information

They should generally occur once or at appropriate visibility thresholds.
Do not continuously animate every element based on scroll position.

39. Reduced Motion
The design must respect:
@media (prefers-reduced-motion: reduce)

When reduced motion is enabled:

Disable non-essential movement
Reduce transitions
Remove complex transforms
Avoid parallax
Keep functionality intact

Accessibility takes priority over animation.

40. Interactive States
All interactive components should have clear states:
default
hover
focus
active
disabled (when relevant)

The focus state must be visible for keyboard users.
Do not design interactions that only work visually with a mouse.

41. Cards
Portfolio cards should not look like generic SaaS cards.
They should prioritize:

Media
Project identity
Interaction

Avoid unnecessary:

Shadows
Card headers
Long descriptions
Decorative icons
Excessive padding

The video itself should dominate.

42. Project Metadata
Metadata should remain secondary.
Possible metadata:

Project title
Category
Number/index
Short descriptor

Do not allow metadata to visually overpower the video.

43. Section Labels
Small labels can be used to introduce sections.
Examples:
01 / SELECTED WORK
02 / THE REEL
03 / ABOUT

Numbered labels are optional and should only be used when they improve hierarchy.
Do not force numbering everywhere.

44. Editorial Composition
The site may use:

Oversized type
Cropped imagery
Asymmetrical grids
Large negative space
Unexpected alignment
Overlapping elements

However:
Experimental composition must never compromise readability or navigation.

45. Responsive Design Rules
The visual system must remain coherent across:
Mobile
Prioritize:

readability
touch targets
media
simple navigation
vertical composition

Tablet
Maintain editorial hierarchy while adapting grid density.
Desktop
Use:

large type
expanded layouts
asymmetric grids
stronger visual spacing

Large desktop
Do not simply stretch everything.
Use maximum content widths and controlled expansion.

46. Mobile-Specific Design
Do not shrink desktop layouts mechanically.
On mobile:

Recompose layouts
Reduce unnecessary decorative interactions
Increase touch-friendly spacing
Preserve hierarchy
Maintain video prominence
Simplify complex compositions when necessary

Hover-only functionality must never be required on mobile.

47. Iconography
Icons should remain minimal.
Preferred:

Simple SVG icons
Minimal stroke-based icons
Consistent visual weight

Avoid large decorative icon sets.
Do not introduce an icon library for a handful of icons unless there is a clear benefit.

48. Decorative Elements
Decorative elements may be used when they strengthen the visual identity.
Examples:

Fine lines
Small labels
Subtle grid details
Controlled accent marks
Minimal geometric shapes

Decorative elements must never compete with the portfolio work.

49. Design Consistency Rule
Once a component pattern is established, reuse it.
Do not create a slightly different version of the same:

button
card
heading
modal
link
metadata label
spacing rule

unless there is a genuine semantic or visual reason.
Consistency is more valuable than novelty.

50. Design Change Rule
A request to improve one component does not automatically authorize redesigning the entire page.
For example:

"Improve the project card."

means:

project card only
related interaction if necessary

It does NOT mean:

redesign hero
change global colors
replace typography
redesign navigation
change page architecture

The smallest visual change capable of satisfying the request should be preferred.

51. New Visual Elements
Before introducing a new visual pattern, determine:

Why it is needed.
Which existing design token/pattern it can reuse.
Whether it creates inconsistency.
Whether it affects performance.
Whether it improves UX.

Do not add visual features simply because an AI model thinks they look better.

52. Design Quality Standard
The website should look polished because of:

Typography
Spacing
Composition
Media selection
Hierarchy
Interaction
Consistency
Restraint

Not because of:

Maximum number of effects
Maximum animation
Maximum gradients
Maximum complexity

The goal is:
high perceived quality with low technical waste.

53. Non-Negotiable Visual Rules

Dark cinematic editorial direction.
High contrast.
Plus Jakarta Sans for display.
Inter for body/UI.
Near-black primary background.
Off-white primary text.
Gray secondary text.
Lime accent used sparingly.
Large, confident typography.
Portfolio media remains the visual focus.
Motion should be intentional.
No visual clutter.
No generic SaaS aesthetic.
No excessive neon/glassmorphism.
No redesign of unrelated sections during localized changes.
Accessibility and usability override decorative ambition.
Performance must not be sacrificed for visual effects.

