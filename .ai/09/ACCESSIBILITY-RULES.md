ACCESSIBILITY RULES
1. Purpose
This document defines the accessibility requirements for the sanjanedits portfolio.
The site should target:
WCAG 2.2 Level AA
Accessibility must be treated as part of the core implementation, not as a final polish step.
The site must remain usable for people who:

Use only a keyboard
Use screen readers
Have low vision
Have color-vision differences
Have motor impairments
Prefer reduced motion
Use touch devices
Use browser zoom
Use assistive technologies

WCAG 2.2 is the current W3C accessibility standard and includes requirements covering keyboard operation, contrast, focus, target size, reflow, and other accessibility concerns.

2. Core Principle
Accessibility must not fight the visual design.
The objective is:
POLISHED DESIGN
        +
SEMANTIC HTML
        +
KEYBOARD ACCESS
        +
CLEAR FOCUS
        +
SUFFICIENT CONTRAST
        +
ACCESSIBLE MEDIA
        =
PROFESSIONAL UX

Do not make the site visually impressive at the expense of usability.

3. Accessibility Priority
When making an accessibility decision, prioritize:

Keyboard access
Semantic structure
Focus visibility
Meaningful text alternatives
Sufficient contrast
Accessible controls
Accessible video playback
Reduced-motion support
Touch target size
Zoom/reflow
Screen-reader clarity
Decorative enhancements


4. Semantic HTML First
Use native HTML elements whenever possible.
Prefer:
<button>
<a>
<nav>
<main>
<header>
<footer>
<section>
<article>
<h1>
<h2>
<img>
<video>
<dialog>

Do not replace semantic HTML with generic <div> elements when a native element exists.
MDN specifically recommends semantic HTML and native controls because browsers already provide important keyboard and accessibility behavior for them.

5. Native Controls Before ARIA
Use native HTML behavior before adding ARIA.
Prefer:
<button>

over:
<div role="button">

Prefer:
<a href="...">

over:
<div onclick="...">

Prefer:
<dialog>

over building a modal system entirely from <div> elements.
ARIA should enhance semantics where necessary.
It should not replace appropriate HTML.

6. ARIA Rule
Do not add ARIA attributes simply because they look professional.
Every ARIA attribute must have a purpose.
Bad:
<div
    role="button"
    aria-label="button"
    aria-live="polite"
    aria-expanded="false"
>

when a native button would solve the problem.
Good:
<button
    aria-expanded="false"
    aria-controls="mobile-menu"
>
    Menu
</button>


7. Page Language
The root HTML element must specify the page language.
Example:
<html lang="en">

Do not omit lang.

8. Page Title
Every page must have a meaningful <title>.
Example:
<title>Sanjanedits — Video Editor</title>

The Projects page should have a page-appropriate title.
Do not use:
<title>Home</title>

when a more descriptive title is available.

9. Main Landmark
Every primary page should have one clear:
<main>

element.
The main content should not be hidden inside arbitrary <div> structures.

10. Header Landmark
Use:
<header>

for the site's header.
Do not create a header only through:
<div class="header">

when the content represents the page/site header.

11. Navigation
Use:
<nav>

for primary navigation.
Example:
<nav aria-label="Primary">

The navigation must be understandable without visual styling.

12. Multiple Navigation Regions
If more than one navigation region exists, provide distinguishable labels.
Example:
<nav aria-label="Primary">

and:
<nav aria-label="Footer">

Do not create ambiguous multiple navigation landmarks.

13. Footer
Use:
<footer>

for the site footer.
Contact/social links should be contained within an appropriate semantic structure.

14. Heading Hierarchy
Use headings to represent content hierarchy.
Typical structure:
H1
 ├── H2
 │    ├── H3
 │    └── H3
 └── H2
      └── H3

Do not select heading levels based purely on font size.
CSS controls appearance.
HTML headings communicate structure.

15. One Primary H1
Each page should have one clear primary <h1>.
Example homepage:
<h1>Sanjanedits</h1>

The exact visible copy can evolve with the design, but the page must have an identifiable primary heading.

16. Do Not Skip Headings for Styling
Do not write:
<h4>My Work</h4>

simply because <h4> visually looks smaller.
Use the semantically correct heading level and style it with CSS.

17. Sections
Use <section> when the content represents a distinct thematic section.
A section should generally have a meaningful heading when appropriate.
Do not replace every <div> with <section>.

18. Articles
Project cards may use:
<article>

when each project represents an independent piece of content.
Example:
<article class="project-card">

This gives the project content a meaningful semantic boundary.

19. Links vs Buttons
Use a link when the user navigates somewhere.
Use a button when the user performs an action.
Link
<a href="/projects.html">

Button
<button type="button">

Do not use buttons for navigation.
Do not use links as fake buttons when the action does not navigate.

20. Button Type
Buttons outside forms should explicitly use:
<button type="button">

This prevents accidental form submission if the button later appears inside a form.

21. Clickable Project Cards
If a project card performs an action, use a real interactive control.
Do not make:
<div class="project-card">

the only clickable target through JavaScript.
Use an appropriate:
<a>

or:
<button>

depending on the action.

22. Keyboard Access
Every interactive feature must work using a keyboard.
WCAG 2.2 requires functionality to be operable through a keyboard interface, and MDN recommends ensuring clickable controls have interactive semantics and keyboard behavior.
The following must work without a mouse:

Navigation
Mobile menu
Project selection
Video opening
Video closing
Filters
External links
Contact actions


23. No Mouse-Only Features
Do not make essential functionality depend on:

hover
mouse movement
pointer position
drag
custom cursor

If an interaction exists on desktop hover, provide an equivalent interaction for keyboard and touch users.

24. Keyboard Focus
Every interactive element must have a visible focus state.
Do not remove browser focus indicators without replacing them with a better one.
Bad:
*:focus {
    outline: none;
}

Do not use this.

25. Focus Design
Focus indicators should be visually obvious.
They should not depend solely on:

subtle color changes
tiny shadows
low-contrast borders

WCAG 2.2 includes specific requirements around focus visibility and focus not being obscured.

26. Focus Contrast
Focus indicators should have sufficient contrast against surrounding colors.
Do not use a focus ring that disappears against the background.
For the project's dark/neutral visual system, focus states should remain clearly visible without destroying the design.

27. Focus Not Obscured
Sticky headers, overlays, modals, or floating elements must not completely hide the focused control.
WCAG 2.2 specifically requires focused components to not be entirely obscured by author-created content at Level AA.

28. Focus Order
Keyboard focus order should follow the visual/content order.
Typical:
Skip link
↓
Logo
↓
Navigation
↓
Hero actions
↓
Main content
↓
Projects
↓
Contact
↓
Footer

Do not create strange focus jumps.

29. Avoid Positive tabindex
Do not use:
tabindex="5"
tabindex="10"

to manually control focus order.
MDN specifically recommends avoiding positive tabindex values.
Prefer natural DOM order.

30. tabindex="0"
Use:
tabindex="0"

only when a custom focusable element genuinely requires it.
Prefer native interactive elements instead.

31. tabindex="-1"
Use:
tabindex="-1"

when an element needs to be programmatically focusable but should not enter the normal Tab sequence.
A modal/dialog container may be an appropriate example.

32. Skip Link
Provide a skip link for keyboard users.
Example:
<a href="#main-content" class="skip-link">
    Skip to main content
</a>

The link may visually appear only when focused.

33. Skip Link Behavior
When focused:

It must be visible.
It must have sufficient contrast.
It must be easy to activate.

When activated:
Focus should reach the main content appropriately.

34. Focus Visibility During Navigation
When navigating using keyboard:

Focus must remain visible.
Sticky UI must not cover it.
Animated transitions must not hide it.


35. Mobile Navigation Accessibility
The mobile menu button must communicate whether the menu is open.
Example:
<button
    type="button"
    aria-expanded="false"
    aria-controls="mobile-menu"
>

JavaScript must update:
aria-expanded="true"

when opened.

36. Mobile Menu Focus
When a mobile menu opens:

Keyboard users must be able to reach its links.
The close action must be reachable.
Focus should not become trapped unexpectedly.
Escape should provide a sensible closing mechanism where the interaction behaves like an overlay.


37. Mobile Menu Closing
The user must be able to close the menu through:

Close button
Escape where appropriate
Selecting a navigation destination

Do not require a mouse-only gesture.

38. Dialogs
For the video viewer, prefer the native:
<dialog>

element.
The native modal dialog behavior provides useful browser accessibility behavior, including focus handling and Escape dismissal.

39. Dialog Opening
When a video dialog opens:

Focus must move appropriately.
The dialog must have a meaningful accessible name.
The close control must be reachable.

MDN recommends explicitly considering the appropriate initial focus when opening a dialog.

40. Dialog Label
The video dialog should have a meaningful label.
Example:
<dialog aria-labelledby="video-title">

or another appropriate native/ARIA naming mechanism.
Do not leave the dialog unnamed.

41. Dialog Close Button
Always provide an explicit close button.
Example:
<button type="button" aria-label="Close video">
    ...
</button>

MDN recommends providing an explicit close mechanism rather than relying solely on Escape.

42. Escape
The video dialog should close using Escape where native dialog behavior supports it.
Do not override Escape behavior unnecessarily.

43. Dialog Focus Restoration
When the video dialog closes:
Focus should return to the control that opened it where appropriate.
Example:
Project 7 → Open
          ↓
Video dialog
          ↓
Close
          ↓
Project 7 control receives focus


44. No Keyboard Trap
Users must be able to leave every component using only the keyboard.
WCAG explicitly prohibits keyboard traps.
Test:
Tab
Shift + Tab
Escape

through every interactive component.

45. Video Accessibility
Video controls must be usable through:

Keyboard
Pointer
Touch

Do not create a video player that works only through mouse interaction.

46. Native Video Controls
Prefer native:
<video controls>

unless there is a compelling reason to create custom controls.
Native controls provide browser accessibility behavior without requiring the project to recreate it.

47. Custom Video Controls
If custom controls are introduced:
Every control must have:

accessible name
keyboard support
focus state
appropriate state communication

Examples:
Play
Pause
Mute
Unmute
Fullscreen
Close

Do not rely solely on icons.

48. Play Button Labels
A play icon alone may be visually obvious but should have an accessible name.
Example:
<button aria-label="Play movie edit">


49. Close Button Labels
Do not create:
<button>
    ×
</button>

without an accessible name.
Prefer:
<button aria-label="Close video">
    ×
</button>


50. Video Captions
If portfolio videos contain meaningful spoken dialogue or narration, captions should be considered.
For purely music-driven edits, captions may not be applicable to the musical track itself.
Do not pretend music needs textual captions merely to satisfy a checklist.

51. Video Audio
Do not autoplay videos with audio.
Visitors should deliberately initiate audible playback.
This is especially important for:

screen-reader users
mobile users
users in public environments
users with cognitive/attention needs


52. Audio Controls
If audio is available, users must have access to volume/mute controls.
Do not create an interface where audio can start but cannot be controlled.

53. Images
Every meaningful image must have an appropriate alternative.
Example:
<img
    src="sanjan.webp"
    alt="Sanjan"
>


54. Decorative Images
If an image conveys no meaningful information:
<img
    src="decorative.webp"
    alt=""
>

Do not provide meaningless alt text such as:
alt="image"
alt="photo"
alt="decorative image"


55. Profile Photograph
The profile photo is meaningful content.
Its alt text should identify its purpose rather than describe unnecessary visual details.
Good:
alt="Sanjan"

Potentially:
alt="Sanjan, video editor"

if that context is genuinely useful.

56. Project Posters
Project posters should have meaningful alternative text when the poster communicates information.
Possible:
alt="Movie edit featuring ..."

However, do not write enormous descriptions for every thumbnail.
The project title and surrounding text should also communicate identity.

57. Avoid Redundant Alt Text
If the project card already contains:
Movie Edit

and the image immediately next to it is purely illustrative, repeating:
alt="Movie Edit"

may be redundant.
Use empty alt text if the image adds no independent information.

58. Images of Text
Do not use images as replacements for important text.
For example:
Do not turn:
Available for video editing

into a PNG just to achieve a visual effect.
Text should remain real HTML text.

59. SVG Accessibility
Decorative SVGs should generally be hidden from assistive technology.
Example:
<svg aria-hidden="true">

Interactive SVG controls require accessible labeling through their button/link.

60. Icon-Only Buttons
Every icon-only button needs an accessible name.
Example:
<button aria-label="Open menu">

not:
<button>
    [hamburger icon]
</button>


61. Link Purpose
Links should communicate their destination or purpose.
Avoid vague links like:
Click here
Here
More
View

when the destination is unclear.
Prefer:
View all projects
View edit on Instagram
Contact Sanjan


62. External Links
If a link opens an external destination, the visible label should make sense in context.
Example:
View on Instagram

is clearer than:
Open


63. WhatsApp
The WhatsApp contact action must be understandable without revealing the phone number in visible text.
The link/button should clearly communicate its purpose.
Example:
Chat on WhatsApp

Do not display the phone number simply for accessibility if the user specifically wants the number private.

64. Instagram
Use a clear accessible name:
Instagram

or:
View Sanjanedits on Instagram

Do not use only the Instagram logo without an accessible label.

65. Color
Color must not be the only way information is communicated.
Bad:
Green = available
Red = unavailable

without any textual/state indicator.
Good:
Available
Unavailable

with color as an additional cue.

66. Contrast
Normal text should meet at least:
4.5:1
Large text may use:
3:1
WCAG 2.2 defines these minimum contrast requirements for text.

67. Large Text
Do not assume that any large-looking heading qualifies as large text.
The contrast requirement depends on the rendered font size and weight according to WCAG definitions.
When uncertain:
Use stronger contrast.

68. UI Component Contrast
Important interface components and their visual states should have sufficient non-text contrast.
WCAG 2.2 requires at least 3:1 contrast for visual information needed to identify UI components and states in applicable cases.
This applies to things such as:

Buttons
Form controls
Focus indicators
Important borders
Active states


69. Focus Contrast
Focus indicators must remain visible against both:

the component
the surrounding background

Do not use a focus color that disappears over a dark image or gradient.

70. Contrast on Images
Text placed over photographs or video must maintain sufficient contrast.
Do not assume a gradient overlay automatically solves the problem.
Test the actual rendered composition.

71. Glass / Blur Effects
If the design uses:

glassmorphism
transparency
blur
translucent panels

ensure text remains readable against the actual background.
Do not prioritize aesthetic translucency over contrast.

72. Color Palette
The design system must define accessible combinations.
Do not invent new colors during implementation without checking contrast.
Any new text/background combination must be evaluated.

73. Zoom
Content must remain usable when text is enlarged.
WCAG 2.2 requires text to be resizable up to 200% without loss of content or functionality under the applicable criterion.
Do not build layouts that collapse when users zoom.

74. Reflow
The site should remain usable at narrow viewport widths and high zoom.
Do not force users into unnecessary horizontal scrolling for normal page content.
Exceptions may naturally apply to media such as video.
WCAG 2.2 includes reflow requirements for content at narrow effective viewport widths.

75. Fixed Elements
Sticky/fixed UI must not:

cover focused controls
hide important content
block keyboard navigation
create unexpected scrolling problems


76. Responsive Text
Do not convert important text into fixed-size images.
Text must remain actual HTML.

77. Font Scaling
Do not disable browser text resizing.
Avoid JavaScript that attempts to prevent zoom.
Never use:
<meta name="viewport" content="..., user-scalable=no">

to prevent accessibility zoom.

78. Touch Targets
Interactive targets should generally be at least:
24 × 24 CSS pixels
or have appropriate spacing that satisfies WCAG 2.2's Target Size (Minimum) requirements.
For this portfolio, prefer larger targets when practical.

79. Recommended Touch Target
Where design permits, aim closer to:
44 × 44 CSS pixels
for important mobile controls.
WCAG 2.2 defines 44 × 44 CSS pixels as the Level AAA enhanced target size, while Level AA minimum is 24 × 24 with exceptions.

80. Button Spacing
Do not pack tiny buttons directly beside each other.
This is especially important for:

Video controls
Close buttons
Filter controls
Mobile navigation


81. Mobile Close Button
The video close button must be easy to tap.
Do not create a tiny:
×

in the corner with a 12px hit area.

82. Motion
The site's visual identity uses energetic edits, sudden drops, and elevation.
That does not mean the interface itself should constantly move.
Motion must be purposeful.

83. Reduced Motion
Respect:
@media (prefers-reduced-motion: reduce)

Users who request reduced motion should receive a significantly calmer experience.
MDN documents prefers-reduced-motion specifically for adapting animations and transitions according to the user's operating-system accessibility preference.

84. Reduced Motion Behavior
When reduced motion is enabled:
Reduce or disable non-essential:

page reveals
parallax
cursor effects
large transforms
looping decorative animations
aggressive transitions

Keep essential functionality intact.

85. Do Not Remove All Motion Blindly
Reduced motion does not necessarily mean:
* {
    animation: none !important;
    transition: none !important;
}

MDN explicitly notes that prefers-reduced-motion: reduce means users prefer minimized movement, not necessarily that every animation must disappear.
Use judgment.

86. Essential Motion
Motion that communicates necessary information may remain when removing it would harm usability.
However, non-essential decorative movement should be minimized.

87. Flashing
Do not introduce rapid flashing effects.
The site's aggressive visual identity must not turn into seizure-risk-inducing interface animation.
WCAG includes specific requirements addressing flashing and physical reactions.

88. Video Flashing
Portfolio videos themselves may naturally contain fast edits.
The website should not add additional flashing effects around video playback.
Do not add:
flash
flash
flash

as a decorative play transition.

89. Auto-Playing Animation
Do not automatically play decorative animation indefinitely.
If an animation does not provide meaningful information, it should not consume continuous attention/resources.

90. Hover Content
Important content must not exist only on hover.
A touch user cannot hover.
A keyboard user may not interact the same way.
WCAG specifically addresses content that appears/disappears on hover or focus and requires mechanisms such as dismissibility and accessibility of the additional content in applicable cases.

91. Hover Project Cards
If project cards reveal information on hover:
That information must also be accessible through:

keyboard
touch
normal card interaction


92. Custom Cursor
The custom cursor is decorative.
It must never:

replace normal cursor functionality
hide focus
be required for interaction
communicate information that exists nowhere else


93. Custom Cursor on Touch
Do not initialize custom cursor behavior on devices that do not have an appropriate fine pointer.

94. Pointer Interaction
Do not require:

precise mouse movement
dragging
rapid pointer gestures

for essential functionality.
WCAG 2.2 adds requirements around dragging movements and pointer interaction.

95. Dragging
The portfolio should not require dragging for:

navigation
project selection
filtering
video playback
contact actions

If a future feature introduces dragging, an alternative single-pointer interaction must be provided where applicable.

96. Forms
The initial portfolio has minimal/no form functionality.
If a contact form is introduced later:
Every input must have:

visible label
programmatic label association
clear instructions
error identification
keyboard access


97. Form Labels
Never rely solely on:
placeholder="Email"

as the label.
Use:
<label for="email">Email</label>
<input id="email" ...>


98. Error Messages
Errors must be:

understandable
specific
associated with the relevant field
visible to assistive technology where necessary

Do not write:
Invalid input.

when a useful explanation is possible.

99. Required Fields
Do not make fields required without communicating that requirement.

100. Contact Links
Because this portfolio primarily uses:

WhatsApp
Instagram

prefer direct contact links over unnecessarily complex forms.
This reduces interaction complexity and accessibility burden.

101. Semantic Contact Links
Use real anchors.
Example:
<a href="...">
    Chat on WhatsApp
</a>

Do not require JavaScript merely to open a contact link.

102. Screen Reader Navigation
The page should make sense when headings and landmarks are navigated independently.
A screen-reader user should be able to understand:
Header
Navigation
Main
Hero
Selected work
About
Contact
Footer

without seeing the visual design.

103. Screen Reader Text
Do not add enormous amounts of hidden text just to make the site "accessible."
Use concise, meaningful accessible names.

104. Visually Hidden Content
If content must be visually hidden but remain available to assistive technology, use an established visually-hidden CSS pattern.
Do not use:
display: none;

for content that must remain accessible to screen readers.

105. aria-hidden
Do not use:
aria-hidden="true"

on an element that contains essential interactive content.
Never hide a keyboard-accessible control from assistive technology accidentally.

106. aria-label
Use aria-label when an interactive element needs a concise accessible name and visible text is unavailable.
Do not use it to replace meaningful visible text unnecessarily.

107. Accessible Names
Every interactive control must have an accessible name.
Examples:
Menu
Close video
Play edit
View project
View on Instagram
Chat on WhatsApp


108. Accessible State
Dynamic components must expose their state where appropriate.
Examples:
aria-expanded
aria-current
aria-pressed

Use only when semantically appropriate.

109. Current Navigation
The active page/link should be communicated appropriately.
For example:
aria-current="page"

may be used on the active navigation link.

110. Filter Controls
If project filters are implemented as buttons:
Their selected state should be communicated.
Possible:
aria-pressed="true"

for toggle-style filter buttons.
Do not use arbitrary ARIA states without understanding their semantics.

111. Filter Accessibility
Project filtering must work with:

keyboard
screen readers
touch

A visitor should not need a mouse hover to understand the selected filter.

112. Dynamic Project Updates
When filtering changes the project grid:
Do not unnecessarily announce every project individually.
If an announcement is useful, provide a concise update such as:
Showing 12 projects.

Use live regions carefully.

113. Live Regions
Do not add:
aria-live="polite"

to large containers by default.
Live regions can become noisy.
Use them only when a dynamic update needs to be announced.

114. Loading States
If video loading takes time, a meaningful loading state may be communicated visually and, where necessary, accessibly.
Do not repeatedly announce every network event to screen readers.

115. Error States
If video playback fails, the error should be understandable to the user.
Example:
Unable to load this video. Try again or view it on Instagram.

The exact wording may vary.

116. Accessible Loading
Do not make a spinner the only indication of loading.
Provide meaningful context where possible.

117. Page Transitions
Do not make page transitions prevent navigation.
Normal links must remain usable.
Avoid trapping focus during decorative transitions.

118. Reduced Motion and Page Transitions
If page transitions exist:
prefers-reduced-motion: reduce

must reduce or remove non-essential movement.

119. Content Order
The DOM order should make sense without CSS.
Do not rely on:
order

to completely rearrange the semantic reading order.

120. CSS Visual Reordering
Visual reordering should not create a confusing keyboard/screen-reader sequence.
If the visual order is significantly different from DOM order, reconsider the structure.

121. Mobile Navigation DOM
The mobile menu should remain logically connected to the navigation structure.
Do not create a completely duplicated navigation system solely for mobile unless necessary.

122. Duplicate Content
Avoid maintaining separate desktop and mobile copies of the same important content.
Duplicated content can cause:

screen-reader repetition
inconsistent links
maintenance problems
AI-agent drift

Prefer one semantic structure with responsive CSS.

123. Hidden Content
When content is intentionally unavailable:
Use the correct mechanism.
Do not simply visually hide something while leaving it unexpectedly accessible.

124. display: none
Use display: none or the hidden attribute when content should genuinely be removed from the accessibility tree and interaction.
Do not use them when content needs to remain accessible.

125. Inert Content
When a modal is open, background content must not remain accidentally interactive.
Native modal <dialog> behavior is preferred because the browser handles important aspects of modal interaction.

126. Video Dialog Background
When the video dialog is open:

Background controls must not receive accidental keyboard focus.
Background should not remain interactable.
Focus must remain within the intended interaction context.


127. Focus Return
After closing the video:
Return focus to the initiating control when appropriate.
This avoids leaving keyboard users somewhere unpredictable in the document.

128. Browser Zoom
Never block:

pinch zoom
browser zoom
text resizing

The site should remain usable when users enlarge content.

129. Minimum Text Size
Do not create extremely small body text simply for visual minimalism.
Normal text must remain comfortable to read on mobile.

130. Line Length
Do not create excessively long text lines.
Readable content should have a reasonable measure.

131. Text Spacing
The layout should tolerate increased text spacing without destroying content.
Do not hard-code heights around paragraphs that assume one exact line-height.

132. Overflow
Do not use:
overflow: hidden;

globally without understanding its accessibility consequences.
It can:

clip focused content
hide enlarged text
prevent scrolling
interfere with dialogs

Use it only where the component genuinely requires it.

133. Horizontal Scrolling
Normal page content should not require horizontal scrolling at common zoom levels.
Media itself may naturally have a constrained two-dimensional presentation.

134. Sticky Header
If the header is sticky:

It must not obscure focused content.
It must not hide anchor targets.
It must not make keyboard navigation confusing.

Use appropriate scroll-margin where necessary.

135. Anchor Navigation
When linking to sections:
<a href="#projects">

ensure the destination is visible beneath any sticky header.
CSS may use:
scroll-margin-top

to prevent the heading from being hidden.

136. Page Skip Navigation
Keyboard users should be able to skip repetitive navigation and reach the main content quickly.

137. Keyboard Testing
At minimum, test the entire site using:
Tab
Shift + Tab
Enter
Space
Escape
Arrow keys where appropriate

Do not rely on mouse testing as evidence of accessibility.

138. Keyboard Test
A complete keyboard-only pass should verify:
Homepage

Skip link
Navigation
Hero CTA
Project cards
Showreel
Contact links
Footer links

Projects

Filters
Project cards
Video viewer
Close button
Instagram links


139. Screen Reader Testing
At least one screen-reader test should be performed before production.
Potential tools:

NVDA on Windows
VoiceOver on macOS/iOS
TalkBack on Android

Do not assume automated testing catches everything.

140. Automated Accessibility Testing
Use automated tools as a supplement.
Potential tools:

Lighthouse
axe DevTools
browser accessibility inspection

Automated testing can detect many common issues but cannot establish complete accessibility by itself.

141. Accessibility Testing Philosophy
Use:
Automated testing
+
Keyboard testing
+
Screen-reader testing
+
Zoom testing
+
Mobile testing

Do not rely on one method.

142. Color Testing
Check important text/UI combinations with a contrast checker.
Do not judge contrast only by looking at the page.

143. Reduced Motion Testing
Test with the operating system/browser preference:
Reduce Motion = ON

Verify:

Page remains functional
Important transitions still make sense
Decorative motion is reduced
Video playback remains available


144. Zoom Testing
Test:

100%
200%
higher zoom where practical

Check:

navigation
project cards
dialog
buttons
text
contact section


145. Mobile Accessibility
Test on actual touch devices where possible.
Verify:

touch targets
navigation
video controls
close button
readable text
focus/interaction behavior
no accidental taps


146. Accessibility and Performance
Do not fix accessibility by adding huge JavaScript systems.
Prefer:

native HTML
CSS
native browser behavior
small JavaScript enhancements

This aligns accessibility and performance.

147. Accessibility and Design
Do not redesign the entire visual language merely because accessibility requires a stronger focus state or contrast ratio.
Solve accessibility within the established design system.
Example:
Instead of replacing the entire palette:
Existing brand color
+
accessible text pairing
+
strong focus treatment


148. Accessibility and Animation
The visual style can remain energetic.
Accessibility means the user controls their exposure to non-essential movement.
The design must not become boring simply because reduced-motion support exists.

149. Accessibility and Video
The portfolio's core content is video.
Therefore accessibility must not be treated as an afterthought.
The video experience must provide:

clear activation
keyboard access
accessible controls
close behavior
focus management
appropriate audio behavior
meaningful project labels


150. Accessibility and Instagram
Instagram links should remain ordinary accessible links.
Do not require JavaScript to open Instagram.

151. Accessibility and WhatsApp
WhatsApp contact should remain an ordinary link wherever possible.
Do not hide the contact action behind hover-only behavior.

152. Accessibility and Custom Effects
Any decorative effect must fail safely.
If JavaScript fails:

navigation still works
links still work
project titles remain accessible
basic content remains readable


153. JavaScript Failure
The site should not become completely inaccessible because a decorative script failed.
Semantic HTML must remain the foundation.

154. CSS Failure
Content should remain structurally understandable if CSS fails.
This is another reason semantic HTML matters.

155. AI-Agent Accessibility Rule
Before modifying accessibility-sensitive code, the AI agent must read:
01-ARCHITECTURE.md
04-HTML-RULES.md
05-CSS-RULES.md
06-JS-RULES.md
07-PERFORMANCE-RULES.md
08-MEDIA-RULES.md

Then identify:

semantic structure
interactive control
focus behavior
media behavior
relevant CSS state

before editing.

156. AI-Agent No ARIA Guessing
AI agents must not invent ARIA attributes because they "seem accessible."
Before adding ARIA:

Determine whether native HTML already solves the problem.
Identify the exact semantic requirement.
Verify the ARIA pattern.
Add only the necessary attribute/state.


157. AI-Agent No Accessibility Rewrites
A request such as:

"Fix the mobile menu accessibility."

does not authorize rewriting:

navigation architecture
typography
page layout
video system
animation system

unless required.

158. AI-Agent Accessibility Scope
A localized accessibility change must remain localized.
Example:
Fixing:
aria-expanded

must not trigger an unrelated redesign of the entire header.

159. AI-Agent Accessibility Regression
After accessibility changes, verify:

keyboard navigation
focus
screen-reader name
visual state
mobile interaction
reduced motion where relevant


160. AI-Agent Accessibility Validation
The agent should report:
Accessibility change:
- ...

Keyboard behavior:
- ...

ARIA changes:
- ...

Focus behavior:
- ...

Unrelated behavior preserved:
- yes/no


161. No Accessibility Theater
Do not add accessibility features simply to claim the site is accessible.
Examples:
Bad:
20 ARIA attributes
+
poor keyboard navigation

Good:
semantic HTML
+
native controls
+
correct focus
+
clear names
+
appropriate ARIA


162. Accessibility Source of Truth
Accessibility responsibility is distributed:
HTML
→ semantics

CSS
→ visual accessibility
   contrast
   focus
   reduced motion

JavaScript
→ dynamic state
   focus management
   interaction

Media
→ accessible playback
   alt text
   captions where applicable

No single file should attempt to solve all accessibility concerns.

163. Accessibility Checklist — Structure
Before production:

[ ] Page has lang
[ ] Page has meaningful title
[ ] One primary H1
[ ] Heading hierarchy is logical
[ ] Main landmark exists
[ ] Navigation uses <nav>
[ ] Footer uses <footer>
[ ] Semantic HTML is used
[ ] Links are links
[ ] Buttons are buttons


164. Accessibility Checklist — Keyboard

[ ] Skip link works
[ ] Every interactive feature works with keyboard
[ ] Focus is visible
[ ] No keyboard traps
[ ] Focus order is logical
[ ] No positive tabindex
[ ] Dialog can be closed with keyboard
[ ] Mobile menu works with keyboard
[ ] Video controls work with keyboard


165. Accessibility Checklist — Visual

[ ] Text contrast passes
[ ] UI component contrast is adequate
[ ] Focus indicator is visible
[ ] Color is not the only information cue
[ ] Text can be resized
[ ] Layout survives zoom
[ ] Focus isn't hidden behind sticky UI
[ ] Important content remains readable over media


166. Accessibility Checklist — Motion

[ ] Reduced-motion preference is respected
[ ] Non-essential motion is reduced
[ ] No unnecessary flashing
[ ] No essential information depends on animation
[ ] Custom cursor is optional
[ ] Hover effects have non-hover alternatives


167. Accessibility Checklist — Media

[ ] Meaningful images have useful alt text
[ ] Decorative images use empty alt
[ ] SVG icons are appropriately exposed/hidden
[ ] Video has accessible activation
[ ] Video controls are accessible
[ ] Video dialog has an accessible name
[ ] Video dialog has a close button
[ ] Focus is managed
[ ] Audio is user-controlled
[ ] Captions are considered where applicable


168. Accessibility Checklist — Mobile

[ ] Touch targets are sufficiently large
[ ] Controls have adequate spacing
[ ] Mobile menu is keyboard/screen-reader understandable
[ ] Video controls work with touch
[ ] Close button is easy to hit
[ ] No hover-only functionality
[ ] No forced zoom restriction
[ ] No horizontal overflow for normal content


169. Accessibility Checklist — Testing

[ ] Lighthouse accessibility check
[ ] axe or equivalent check
[ ] Keyboard-only test
[ ] Screen-reader test
[ ] 200% zoom test
[ ] Reduced-motion test
[ ] Mobile touch test
[ ] Contrast verification


170. Non-Negotiable Accessibility Rules

Target WCAG 2.2 Level AA.
Use semantic HTML first.
Prefer native controls over custom ARIA widgets.
Every interactive feature must work with a keyboard.
Never remove focus indicators without replacement.
Focus must remain visible.
Focus must not be completely obscured by site UI.
Do not use positive tabindex.
Provide a skip link.
Use logical heading hierarchy.
Use one primary H1 per page.
Use links for navigation.
Use buttons for actions.
Give every interactive control an accessible name.
Icon-only controls require accessible labels.
Meaningful images require appropriate alt text.
Decorative images should not create unnecessary screen-reader content.
Do not rely on color alone to communicate information.
Normal text should meet 4.5:1 contrast.
Large text should meet 3:1 contrast where applicable.
Important UI component states should have sufficient non-text contrast.
Do not disable browser zoom.
Support text resizing and reflow.
Use sufficiently large touch targets.
Prefer 44px-class targets when practical even though WCAG AA's minimum is 24px with exceptions.
Do not make essential functionality hover-only.
Respect prefers-reduced-motion.
Avoid unnecessary flashing.
Do not make dragging essential.
Use native <dialog> for the video modal where appropriate.
Provide an explicit dialog close button.
Manage focus when dialogs open and close.
Do not allow keyboard traps.
Keep video playback keyboard accessible.
Do not autoplay audible portfolio video.
Keep audio controls accessible.
Consider captions when video contains meaningful speech.
Do not hide essential content with aria-hidden.
Do not add ARIA without a specific semantic reason.
Test with keyboard, screen reader, zoom, reduced motion, mobile, and automated tools.
Accessibility fixes must not unnecessarily damage performance.
Accessibility improvements must not trigger unrelated architectural rewrites.
AI agents must preserve existing accessibility behavior when modifying unrelated features.
If a user cannot understand, reach, operate, or exit a feature without relying on a mouse, the feature is not finished.

