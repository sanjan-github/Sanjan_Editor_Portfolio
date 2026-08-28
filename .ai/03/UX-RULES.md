UX RULES
1. Purpose
This document defines how visitors should experience and interact with the sanjanedits portfolio.
The objective is not merely to make the website attractive.
The objective is to make the website:

Easy to understand
Fast to navigate
Easy to explore
Enjoyable to interact with
Focused on Sanjan's work
Trustworthy
Conversion-oriented
Accessible
Predictable
Fast

The design can be visually experimental, but the underlying user experience must remain clear.

2. Primary UX Goal
The primary user journey is:
DISCOVER
   ↓
UNDERSTAND WHO SANJAN IS
   ↓
SEE STRONGEST WORK
   ↓
WATCH EDITS
   ↓
BUILD TRUST
   ↓
CONTACT SANJAN

Every major homepage section should support this journey.
Do not introduce sections or interactions that distract from it.

3. Five-Second Rule
Within approximately the first few seconds, a new visitor should be able to understand:

The website belongs to Sanjan/sanjanedits.
Sanjan is a video editor.
The site contains actual editing work.
There is an obvious path to view that work.

The hero must communicate identity and profession immediately.
Do not force visitors to scroll before understanding what the website is about.

4. Primary User Types
The site should work for several visitor types.
Potential Client
Wants to quickly determine:

What Sanjan does
Whether the editing style fits their needs
Whether the work is good
Whether Sanjan looks trustworthy
How to contact him

This is the highest-priority user.
Portfolio Browser
Wants to:

Watch several edits
Browse different categories
Explore more work

The Projects page should serve this user.
Existing Follower
May arrive from Instagram.
They should immediately recognize:

sanjanedits
Sanjan's visual identity
The relationship between the portfolio and Instagram


5. User Priority
When multiple goals conflict, prioritize:

Understanding what Sanjan does
Viewing the work
Contacting Sanjan
Exploring additional information
Decorative/experimental interactions

Never sacrifice the first three for the last two.

6. Visual Hierarchy
Every section must have a clear primary element.
The visitor should not have to determine:

"What am I supposed to look at?"

The hierarchy should generally be:
PRIMARY MESSAGE
      ↓
PRIMARY VISUAL / WORK
      ↓
SUPPORTING INFORMATION
      ↓
SECONDARY ACTION

Do not give equal visual emphasis to everything.

7. Call-to-Action Hierarchy
The site should have a clear primary action.
Primary action:
Contact / Start a Project
Secondary actions:

View My Work
Watch Reel
View Projects
View on Instagram

Do not present five buttons with equal visual weight.
The user should always be able to identify the most important next action.

8. CTA Copy
CTA labels must clearly describe the action.
Prefer:

View My Work
Watch Reel
View Projects
Start a Project
Contact Me
View on Instagram

Avoid vague labels such as:

Click Here
Explore
Go
Let's Go
More
Submit

unless their meaning is completely obvious from context.
Nielsen Norman Group's current CTA guidance emphasizes an actionable verb and clear expectation of what happens after the click.

9. Navigation
Navigation must be predictable and simple.
The main navigation should provide easy access to:

Home
Projects
About where appropriate
Contact

Do not add navigation items merely because a section exists.
The navigation should remain visually lightweight.

10. Familiar Interaction Patterns
Do not reinvent common web interactions unnecessarily.
Visitors should understand:

Links
Buttons
Menus
Video controls
Close buttons
Navigation
Scroll behavior

without needing instructions.
Creative visual design is encouraged.
Creative interaction confusion is not.
Nielsen Norman Group recommends adhering to familiar web standards on homepages so visual novelty does not damage usability.

11. Progressive Disclosure
Show the most important information first.
Secondary information can be revealed after the user demonstrates interest.
Examples:
PORTFOLIO CARD
    ↓
POSTER + TITLE
    ↓
USER SELECTS PROJECT
    ↓
VIDEO + MORE INFORMATION

Do not expose every detail on the initial card.
Progressive disclosure reduces unnecessary interface complexity and keeps the user's attention on the primary task.

12. Homepage Length
The homepage may be long.
Length itself is not a problem if the content has a clear narrative.
The page should feel like a progression:
INTRODUCTION
    ↓
PROOF
    ↓
CAPABILITY
    ↓
PERSONAL CREDIBILITY
    ↓
CONTACT

Do not create long sections whose only purpose is to make the page longer.

13. Scroll Experience
Scrolling should feel intentional.
Use clear visual transitions between major sections.
Visitors should understand that additional content exists.
Avoid:

Invisible content boundaries
Abrupt unexplained layout changes
Excessive scroll hijacking
Forced scrolling
Long animated transitions that delay access to content

Do not override normal browser scrolling unless there is an extremely strong reason.

14. Avoid False Floors
The bottom of a viewport should not accidentally look like the end of the page when substantial content remains below.
Use:

partial continuation of visual elements
clear scroll cues
section spacing
visible navigation
natural content continuation

Nielsen Norman Group specifically identifies false floors as a common homepage usability problem.

15. Video UX Philosophy
Video is the core portfolio medium.
The video experience must be:
Immediate after intent, but not intrusive before intent.
Preferred flow:
POSTER
   ↓
PLAY AFFORDANCE
   ↓
USER INTENTIONALLY ACTIVATES
   ↓
VIDEO LOADS
   ↓
VIDEO PLAYS

Do not force users to wait for videos they did not ask to watch.

16. Video Autoplay
Do not autoplay audible video on initial page load.
Reason:

It can surprise users.
Browsers may block it.
It consumes bandwidth.
It removes user control.

Browsers commonly restrict autoplay when media contains audible audio, and MDN recommends using autoplay carefully.

17. Muted Preview Video
A muted preview may be used when it provides meaningful UX value.
Requirements:

Muted
Lightweight
Short
Non-essential
Must not significantly affect initial loading
Must have a poster fallback

A preview should enhance a card, not become a prerequisite for understanding it.

18. Play Affordance
Every playable project must visually communicate that it is playable.
Use:

play icon
explicit Play label
recognizable interactive treatment

Do not make users guess whether a project card is clickable.

19. Video Controls
Users must retain meaningful control over playback.
At minimum, the experience must make it obvious how to:

Play
Pause
Adjust audio
Stop/close the player
Return to the portfolio

Do not create a custom player that hides essential controls merely for aesthetic reasons.

20. Video Modal
If a modal/dialog player is used:

The player must be visually dominant.
Background content must not compete with the video.
Closing must be obvious.
Escape should close the modal.
Keyboard navigation must work.
Focus must be managed correctly.
Focus should return to the element that opened the modal when the dialog closes.

The native HTML <dialog> element should be preferred when appropriate because it provides useful browser-level dialog behavior, including modal focus and Escape handling.

21. Video Loading Behavior
Never load all portfolio videos merely because their cards exist.
Initial state:
poster only
After user intent:
load selected video
When video is closed:

Stop playback.
Release unnecessary resources where appropriate.
Do not continue playing hidden media.

Performance is part of the UX.

22. Instagram Links
Instagram should be treated as a secondary destination.
The portfolio should preferably allow users to watch the work without leaving the site.
An Instagram link may appear as:
View on Instagram ↗
Do not force every visitor to leave the portfolio just to watch a project.

23. Projects Page UX
The Projects page should support exploration without becoming overwhelming.
Recommended flow:
PAGE TITLE
     ↓
CATEGORY FILTERS
     ↓
PROJECT GRID
     ↓
SELECT PROJECT
     ↓
WATCH
     ↓
OPTIONAL INSTAGRAM LINK

The grid should remain visually scannable.

24. Filtering
Filtering should only exist if it makes browsing easier.
If filtering is used:

"All" should be available.
The selected filter must be visually obvious.
Results should update quickly.
No full page reload.
Empty categories should not be presented.
Filter state should be understandable.

Do not create filters for arbitrary distinctions that users do not care about.

25. Project Cards
Cards should communicate at a glance:

What the project is
That it is playable
Possibly what category it belongs to

Keep secondary information secondary.
Avoid putting large descriptions on every card.
The visual focus should remain on the edit.

26. Contact UX
The visitor should never have to search for how to contact Sanjan.
Contact should be available:

Through the homepage CTA
Near the end of the homepage
Through navigation when appropriate

Primary contact methods:

Instagram
WhatsApp


27. WhatsApp UX
Use the WhatsApp username-based mechanism.
Never expose the phone number publicly.
The WhatsApp CTA should clearly indicate that it will open WhatsApp/contact.
Do not make the user copy and paste a username manually.

28. Contact Expectations
Before opening a contact destination, the visitor should understand what will happen.
For example:
Message on WhatsApp
is preferable to:
Continue
The action should be self-explanatory.

29. External Links
External links should clearly indicate that the visitor is leaving the portfolio when this isn't obvious.
For relevant external links:

Instagram ↗
WhatsApp ↗

Use a visual external-link cue where helpful.
Do not overuse external-link icons.

30. Loading Experience
The user should see meaningful content as quickly as possible.
Do not create an artificial loading screen merely to hide normal browser rendering.
Avoid:

Full-screen preloaders
Long logo animations
Fake loading percentages
Delayed navigation
Waiting for all videos before displaying the page

A polished website should begin becoming useful immediately.

31. Interaction Speed
Interactions should feel immediate.
Avoid unnecessary delays before:

opening menus
opening video players
changing filters
clicking links
closing dialogs

Animations may provide visual feedback, but they must not make basic actions feel slow.

32. Motion UX
Motion should communicate:

hierarchy
transition
cause and effect
interaction feedback

It should not exist only as decoration.
Prefer short, purposeful transitions.
Avoid long cinematic sequences that make visitors wait.

33. Reduced Motion
Honor the user's operating-system preference:
@media (prefers-reduced-motion: reduce)

When reduced motion is enabled:

Remove non-essential movement.
Reduce transitions.
Disable parallax.
Remove large-scale motion.
Reduce animated scrolling effects.
Preserve functionality.

The reduced-motion experience must remain fully usable.
The prefers-reduced-motion media feature is specifically intended to allow sites to reduce or replace motion when users request it.

34. Avoid Motion Overload
Do not animate:

Every heading
Every paragraph
Every card
Every icon
Every background
Every cursor interaction

simultaneously.
The visitor should know what deserves attention.
Motion hierarchy should reinforce visual hierarchy.

35. Hover UX
Hover interactions are enhancements, not requirements.
A user must still understand and use the site without hover.
Hover effects should:

Confirm interactivity
Add polish
Remain subtle
Not create layout shifts
Not hide important information

Do not hide essential project information until hover.

36. Mobile Interaction
Touch devices do not have hover.
Therefore:

Critical information must be visible without hover.
Important controls must be tappable.
Touch targets must be sufficiently large.
Hover-only interactions must have an equivalent tap behavior or be removed.

Do not design desktop interactions that depend entirely on pointer hover.

37. Keyboard UX
Everything interactive must be usable with a keyboard.
Interactive elements must:

Be focusable
Have interactive semantics
Be activatable with the keyboard
Have visible focus styling

Do not use <div> or <span> as buttons when a native <button> or <a> is appropriate.
MDN's accessibility guidance specifically requires keyboard-operable interactions and visible focus styling.

38. Focus States
Never remove focus outlines without replacing them with a clearly visible equivalent.
Focus states should be:

Visible
High contrast
Consistent
Easy to identify

Focus indicators must not depend only on subtle color changes.

39. Modal Accessibility
If a video modal is used:
When opening:

Move focus into the modal.

While open:

Keep keyboard focus within the modal where necessary.
Ensure the close control is reachable.

When closing:

Restore focus to the triggering element.

The modal must have a meaningful accessible label.
MDN recommends proper focus management and a reliable close mechanism for dialogs.

40. Button vs Link
Use:
<button>
for actions that change something on the current page.
Examples:

Open video modal
Open mobile menu
Play/pause
Apply filter

<a>
for navigation to another URL.
Examples:

Projects page
Instagram
WhatsApp
External destinations

Do not use one as a substitute for the other.

41. Error Handling
Errors should be understandable.
If a video fails to load:

Keep the poster visible.
Inform the user that playback failed.
Provide a retry option when practical.
Provide the Instagram link if available.

Do not show raw technical errors such as:
ERR_NETWORK_FAILED
to visitors.

42. Empty States
If a project filter produces no results:

Explain that no projects are available.
Provide a clear way back to "All".
Do not leave a completely blank page.

However, the preferred architecture should prevent intentionally empty categories from being displayed.

43. Accessibility and Color
Color must not be the sole way to communicate:

Selected state
Error
Interactivity
Focus
Category

Use additional cues such as:

underline
shape
text
icon
border
position
weight

Maintain sufficient text contrast.

44. Content UX
Content should be concise.
A visitor came to see the editing work.
Do not bury the portfolio beneath long explanations about Sanjan.
Use short, purposeful copy.
Prioritize:

Strong statements
Clear descriptions
Useful metadata
Relevant credibility
Direct CTAs


45. About Section UX
The About section should answer:

Who is Sanjan?
What does he specialize in?
Why should a client trust him?

Do not turn the section into a biography.
The visitor should understand the relevant information quickly.

46. Credibility UX
Credibility should be demonstrated, not claimed.
Prefer:

Actual work
70+ edits
Approximately 45 published edits
Clear editing focus
Professional presentation
Transparent contact information

Avoid vague claims such as:

"World-class editor"
"Industry-leading"
"Best editor"
"Trusted by everyone"

unless independently substantiated.

47. User Control
The visitor should remain in control.
Do not:

Hijack scrolling
Force videos to play with sound
Prevent normal browser navigation
Trap users in animations
Hide the close button
Make interactions dependent on precise mouse movement
Delay important actions unnecessarily


48. Feedback
Every meaningful interaction should provide appropriate feedback.
Examples:
Button click
Visual state change.
Project selection
Clear opening of the video.
Filter selection
Visible change in selected filter and results.
Video loading
A clear loading state when necessary.
Video failure
A comprehensible error state.
The user should not wonder whether their interaction worked.

49. No Surprise Behavior
Avoid interactions that produce unexpected results.
Examples to avoid:

Clicking a project unexpectedly redirects to Instagram.
Hover starts loud audio.
Scrolling unexpectedly jumps to another section.
A menu closes before the user can interact with it.
An animation covers important content.
A click opens a new tab without obvious reason.

Predictability is more important than novelty.

50. Performance as UX
Performance is not separate from UX.
Slow interactions feel worse even when the visual design is excellent.
Prioritize:

Fast first render
Fast navigation
Fast interaction response
Deferred video loading
Optimized posters
Minimal JavaScript
Minimal external requests

Do not add an effect that makes the interface meaningfully slower without a strong UX benefit.

51. Network-Conscious UX
Assume that some visitors will access the portfolio through:

Mobile data
Mid-range phones
Slow connections
High-latency connections
Limited data plans

Do not assume a high-end desktop and fast broadband connection.
The primary portfolio experience must remain useful under constrained conditions.

52. Mobile-First Priority
Mobile is a primary experience, not a smaller desktop version.
The mobile experience must preserve:

Strong hero message
Portfolio visibility
Video usability
Contact access
Readability
Navigation clarity

If a desktop effect makes mobile UX worse, simplify or remove the effect on mobile.

53. Scroll Position
Navigation between homepage sections should behave naturally.
Do not implement unnecessary custom scroll-jacking.
Anchor navigation should produce understandable positioning.
Sticky navigation may be used if it improves access without obstructing content.

54. Back Button
Browser navigation must work normally.
Do not break:

Back
Forward
Refresh
New-tab behavior
Deep links

The site should behave like a normal website.

55. External Navigation
External services should open according to normal web expectations.
Do not automatically open every link in a new tab.
Only use a new tab when it provides a clear benefit.

56. Project Browsing Efficiency
A visitor exploring many edits should not have to:

Return to the top after every video
Reload the page
Wait for a full page transition
Re-enter filters
Restart the browsing process

The Projects page should support efficient sequential exploration.

57. Video Modal Efficiency
After watching one project, users should be able to close it quickly and continue browsing.
Do not force:
watch → close page → reload → scroll → find another project

Prefer:
watch → close → continue browsing


58. Contact Friction
The number of steps between:
"I like this editor"
and
"I can contact him"
should be minimal.
Avoid unnecessary:

Sign-up forms
Multi-step forms
Account creation
Captchas
Long questionnaires

unless a later business requirement justifies them.

59. Form Policy
No contact form is required initially.
Instagram and WhatsApp are sufficient primary contact methods.
A form may be added later if actual client behavior demonstrates a need for it.
Do not add a form simply because portfolios commonly have one.

60. User Trust
The website must communicate professionalism through:

Consistency
Accurate information
Reliable interactions
Clear navigation
High-quality work
Predictable behavior
Professional contact options

Avoid manipulative UX patterns.
Do not use:

Fake urgency
Fake scarcity
Fake counters
Fake notifications
Hidden fees
Misleading buttons
Deceptive navigation


61. Discoverability
The strongest work should be discoverable without requiring the user to understand the site's structure first.
The homepage should provide immediate access to:

Selected work
Showreel
Projects

The visitor should never need to search for the portfolio.

62. Content Prioritization
When deciding whether to add a new section or interaction, ask:

Does it help the visitor evaluate Sanjan?
Does it help the visitor understand his capabilities?
Does it increase trust?
Does it help the visitor contact him?
Does it improve portfolio exploration?

If the answer is no to all five, do not add it.

63. Progressive Enhancement
The basic experience must work without advanced animation.
For example:
Without animation:

Navigation still works.
Projects still appear.
Links still work.
Videos can still be opened.
Contact still works.

Animation is an enhancement, not a dependency.

64. UX Change Rule
A request to improve one interaction does not authorize changes to unrelated interactions.
Examples:
"Improve video-card hover."
Scope:

Video card hover.

Do not automatically change:

Navigation
Hero
Contact CTA
Video player
Typography

"Make mobile navigation better."
Scope:

Mobile navigation.

Do not redesign the entire mobile page.

65. UX Decision Rule
When two UX approaches are visually similar, choose the one that is:

More understandable
Faster
More accessible
More predictable
Easier to maintain

Visual novelty is the last deciding factor.

66. Non-Negotiable UX Rules

The visitor must understand who Sanjan is and what he does quickly.
The strongest work must be visible early.
The portfolio must remain the primary focus.
Contact must be easy to find.
Videos must not autoplay with sound on page load.
Videos should load primarily after user intent.
The user must have control over video playback.
Navigation must remain predictable.
No scroll hijacking.
No fake loading screens.
No deceptive UX.
No hover-only critical functionality.
Keyboard interaction must work.
Focus states must remain visible.
Reduced motion must be respected.
Modal video playback must be accessible.
Mobile must be a first-class experience.
Performance is part of UX.
Creative interactions must never compromise basic usability.
Local UX improvements must not accidentally redesign unrelated parts of the site.

