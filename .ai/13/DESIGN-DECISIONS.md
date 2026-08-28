DESIGN DECISIONS
1. Purpose
This file records important decisions that shape the sanjanedits portfolio, together with:

What was decided
Why it was decided
Alternatives considered
Consequences
Current status

This file answers:

"Why is the project built this way?"

It does NOT answer:

"What is currently implemented?"

That belongs in:
.ai/12-CURRENT-STATE.md

It does NOT define general project rules.
Those belong in the relevant .ai/*-RULES.md files.
This document follows a lightweight Architecture Decision Record (ADR)-style approach: preserve the reasoning behind significant decisions so future developers and AI agents do not repeatedly revisit the same question without context.

2. Decision Status
Use one of these statuses:
Proposed
Accepted
Superseded
Rejected

Proposed
A possible decision being considered.
Accepted
The current intended decision.
Superseded
The decision was previously accepted but replaced by a newer decision.
Rejected
The decision was considered and intentionally not adopted.

3. Decision Format
Every significant decision should use this structure:
## DXXX — Title

Status: Accepted

Date: YYYY-MM-DD

### Decision

What was decided.

### Context

What problem or requirement led to the decision.

### Alternatives Considered

What realistic alternatives were considered.

### Why

Why the selected option was preferred.

### Consequences

Benefits, trade-offs, and limitations introduced by the decision.

### Implementation Notes

Important practical details, if any.

Do not create decisions for trivial implementation details.

4. Decision Principles
A design/architecture decision should be recorded when changing it later would:

Affect multiple files
Affect multiple features
Affect the site's architecture
Affect performance significantly
Affect media delivery
Affect hosting/deployment
Affect the design system
Affect accessibility strategy
Introduce/remove a dependency
Change the user journey
Require migration work

Do not create a decision record for:

changing a margin by 4px
changing one button label
fixing a typo
correcting one broken selector
ordinary bug fixes


5. Decision Precedence
When a current implementation conflicts with an accepted decision:
The accepted decision should be treated as the intended architecture unless a newer decision explicitly supersedes it.
However:
The actual repository must always be inspected before assuming the implementation is wrong.
An accepted decision may be stale.
If the architecture has intentionally changed, record a new decision and mark the previous one as:
Superseded

6. D001 — Static Website Architecture
Status: Accepted
Decision
Build the portfolio as a lightweight static website using:

HTML5
CSS3
Vanilla JavaScript

Host the website through:
GitHub Pages
Context
The project is a two-page portfolio whose primary requirements are:

High visual quality
Fast loading
Minimal infrastructure
Easy deployment
Easy Git-based version control
Simple AI-assisted maintenance

A full application framework would introduce complexity that the current project does not require.
Alternatives Considered

React
Vue
Next.js
Static-site frameworks
Vanilla HTML/CSS/JS

Why
Vanilla technologies provide everything currently required without introducing framework runtime or dependency overhead.
The site is primarily static content plus:

Video playback
Filtering
Navigation
Animation
Modal interactions

These can be implemented with native web APIs.
Consequences
Benefits:

Small technical footprint
Easy GitHub Pages deployment
Minimal dependencies
Easier debugging
Easier AI-agent understanding

Trade-offs:

More manual structure than a component framework
No framework-level routing/state management
Some functionality must be implemented directly

Implementation Notes
Do not introduce a frontend framework unless a future requirement clearly justifies it.

7. D002 — Cloudinary for Portfolio Video Storage and Delivery
Status: Accepted
Decision
Portfolio videos will be stored and delivered through:
Cloudinary
GitHub will contain the website source and lightweight assets, but not the complete portfolio video library.
Context
The portfolio may contain approximately 45 videos and will likely grow.
GitHub Pages is intended for static website hosting rather than functioning as a dedicated video delivery system.
Alternatives Considered

Store videos directly in GitHub
Git LFS
Embed Instagram videos
Cloudinary
Cloudflare R2
Other object storage/CDN solutions

Why
Cloudinary provides media-oriented storage and delivery capabilities suitable for this portfolio, including:

Video delivery
Transformations
Format optimization
Quality optimization
CDN delivery

It also separates heavy media from the website repository.
Consequences
Benefits:

Keeps GitHub repository lightweight
Better control over portfolio playback
Easier media optimization
Easier future media growth

Trade-offs:

Introduces an external media dependency
Requires Cloudinary account/configuration
Portfolio video playback depends on Cloudinary availability

Implementation Notes
Do not expose Cloudinary private credentials in frontend code.
Use public delivery URLs/configuration only.

8. D003 — Portfolio Videos Play on the Website Rather Than Relying on Instagram Embeds
Status: Accepted
Decision
Portfolio videos should preferably play directly within the sanjanedits website.
Instagram remains a secondary destination through links such as:
View on Instagram →
Context
Instagram is where the work is originally published, but sending every visitor away from the portfolio creates unnecessary friction.
Instagram embeds also reduce control over:

visual presentation
player behavior
layout
page performance

Alternatives Considered

Instagram embeds
Open Instagram for every project
Host the same videos on Cloudinary and use a custom site presentation

Why
The portfolio needs to feel like a dedicated professional portfolio rather than a collection of embedded social posts.
Consequences
Benefits:

Better control over presentation
Better visual consistency
Better integration with the website
Visitors can watch without leaving

Trade-offs:

Videos must also be uploaded to Cloudinary
Media storage is duplicated between Instagram and Cloudinary

Implementation Notes
Instagram links should remain available where useful for social proof and verification.

9. D004 — Poster-First, On-Demand Video Loading
Status: Accepted
Decision
Portfolio cards should initially display poster images.
The actual video should load only after meaningful user intent, such as opening/activating the project.
Context
Video is the heaviest asset category on the site.
Loading approximately 45 videos automatically would create unnecessary bandwidth, memory, CPU, and network costs.
Alternatives Considered

Load all videos immediately
Autoplay videos as they enter the viewport
Load muted previews for all cards
Poster-first, user-initiated loading

Why
The user should pay the media cost only when they choose to watch it.
This gives the portfolio:

Fast initial loading
Lower data usage
Better mobile performance
Cleaner visual presentation

Consequences
Benefits:

Much smaller initial media payload
Better performance
Better control over network usage

Trade-offs:

Video startup happens after interaction
The player must provide clear loading feedback

Implementation Notes
Use Cloudinary delivery.
Preferred video behavior includes:
preload="none"

where appropriate.

10. D005 — No Audible Autoplay
Status: Accepted
Decision
Portfolio videos must not autoplay with sound on initial page load.
Context
The editing style relies heavily on phonk/funk music and strong audio drops.
However, automatically playing sound is disruptive and can be blocked by browsers.
Alternatives Considered

Audible autoplay
Muted autoplay
User-initiated playback

Why
User control is more important than instant audio playback.
Consequences
Benefits:

Better UX
Better accessibility
Better browser compatibility
Lower unnecessary media activity

Trade-offs:

The visitor must deliberately start playback

Implementation Notes
Muted previews may be considered separately.

11. D006 — Dark Cinematic Editorial Visual Direction
Status: Accepted
Decision
The visual identity will use a:
Dark cinematic editorial direction.
Context
Sanjan's editing style emphasizes:

Rhythm
Sudden drops
High visual elevation
Music-driven cuts
Cinematic imagery
High energy

The visual identity should reflect that without becoming a stereotypical gaming/neon website.
Alternatives Considered

Light editorial
Minimal monochrome
Dark cinematic
Dark neon/gaming
Generic creative-agency design

Why
Dark cinematic editorial provides a strong environment for video, creates high contrast, and can communicate sophistication while supporting energetic motion.
Consequences
Benefits:

Strong contrast with video/media
Premium visual character
Distinct identity
Strong relationship to Sanjan's editing style

Trade-offs:

Contrast must be carefully maintained
Dark interfaces require deliberate focus/accessibility treatment


12. D007 — Plus Jakarta Sans + Inter
Status: Accepted
Decision
Use:
Plus Jakarta Sans for display typography.
Inter for body/UI typography.
Context
The site needs:

Strong display typography
Modern professional UI text
Readability
A small font footprint

Alternatives Considered

Single-font system
Space Grotesk
Manrope
Plus Jakarta Sans + Inter
Other display/body combinations

Why
The combination provides a strong editorial headline voice while keeping body/UI text highly readable.
Consequences
Benefits:

Strong visual hierarchy
Professional appearance
Clear distinction between display and UI content

Trade-offs:

Two font families instead of one
Font requests/weights must be controlled

Implementation Notes
Only required weights should be loaded.

13. D008 — Restrained Lime Accent
Status: Accepted
Decision
Use a restrained electric-lime accent:
#C8FF00

within the initial dark palette.
Context
The site needs an energetic accent that complements the motion-driven editing style without becoming visually noisy.
Alternatives Considered

Electric blue
Purple
Red/orange
Lime
Monochrome without accent

Why
Lime provides strong contrast against near-black while creating a distinctive energetic signal.
Consequences
Benefits:

Strong visual emphasis
Clear interactive states
Distinct visual identity

Trade-offs:

Must be used sparingly
Contrast combinations need testing

Implementation Notes
The accent is an accent, not the site's dominant color.

14. D009 — Vanilla CSS Animation Instead of a Large Animation Library
Status: Accepted
Decision
Use CSS-first animation and native browser APIs.
Do not introduce GSAP or another large animation library by default.
Context
The site should feel highly animated and polished while remaining lightweight.
Alternatives Considered

GSAP
Framer Motion
Three.js/WebGL
CSS transitions/keyframes
Native browser APIs

Why
The required motion consists primarily of:

reveals
transforms
opacity
clip-path
hover interactions
modal transitions
pointer effects

These do not justify a large animation dependency.
Consequences
Benefits:

Lower dependency cost
Smaller application footprint
Easier AI-agent maintenance
Strong control over performance

Trade-offs:

More manual implementation for complex animation
Advanced timeline features are less convenient


15. D010 — Accessibility Target: WCAG 2.2 Level AA
Status: Accepted
Decision
Target:
WCAG 2.2 Level AA
Context
The portfolio should be professionally usable by a broad audience, including people using:

keyboard navigation
screen readers
zoom
reduced-motion settings
mobile/touch interaction

Alternatives Considered

No formal target
WCAG 2.1 AA
WCAG 2.2 AA
WCAG AAA

Why
WCAG 2.2 AA provides a strong and practical accessibility target without treating AAA as a blanket requirement for every design aspect.
Consequences
Benefits:

Better accessibility
Better keyboard behavior
Better focus treatment
Better compatibility with assistive technologies

Trade-offs:

Some visual choices require additional care
Accessibility testing becomes part of development


16. D011 — Mobile Is a First-Class Experience
Status: Accepted
Decision
Mobile is not treated as a simplified desktop layout.
The site must be deliberately designed for:

phones
tablets
desktops
large screens

Context
A significant portion of visitors may come from mobile devices, especially visitors arriving from social/freelancing platforms.
Why
The portfolio must remain convincing and usable regardless of screen size.
Consequences
Benefits:

Better reach
Better usability
Better video experience
Better touch interactions

Trade-offs:

More responsive design work
Some desktop interactions must be simplified on mobile


17. D012 — Homepage Is Curated; Projects Page Is Comprehensive
Status: Accepted
Decision
The homepage will show:
1 strongest featured edit + 4 supporting edits
The Projects page will contain the larger archive of approximately 45 edits.
Context
Visitors should not need to process the entire portfolio before seeing the strongest work.
Alternatives Considered

Show every project on homepage
Show a small number only with no archive
Curated homepage + complete Projects page

Why
The homepage should optimize for first impressions and conversion.
The Projects page should optimize for exploration.
Consequences
Benefits:

Stronger first impression
Cleaner homepage
Full portfolio remains available
Easier project organization

Trade-offs:

Requires maintaining two presentation contexts


18. D013 — Project Data Is Centralized
Status: Accepted
Decision
Portfolio metadata should have a centralized source of truth.
Context
The project will be maintained by multiple AI coding agents.
Duplicated project information increases the risk of:

stale URLs
inconsistent titles
broken links
contradictory categories
AI-generated duplication

Alternatives Considered

Hand-authored project HTML for every project
Centralized JavaScript data
External CMS
Database

Why
A centralized data structure provides the necessary flexibility without adding backend/CMS complexity.
Consequences
Benefits:

Easier updates
Less duplication
Safer AI modifications
Easier filtering

Trade-offs:

Requires rendering logic
Project data becomes an additional abstraction layer


19. D014 — No Frontend Framework
Status: Accepted
Decision
Do not use React, Vue, Angular, Next.js, or another frontend framework for the initial portfolio.
Context
The site contains two pages and a small amount of interactive behavior.
Why
The added framework complexity is not justified by the current project scope.
Consequences
Benefits:

Smaller dependency footprint
Simpler deployment
Lower maintenance burden
Better initial performance potential

Trade-offs:

Less framework-provided structure
More direct DOM/API implementation

Implementation Notes
Reconsider only if the project's requirements grow substantially.

20. D015 — No Contact Form Initially
Status: Accepted
Decision
The initial portfolio will use:

Instagram
WhatsApp

as the primary contact mechanisms.
No contact form is required initially.
Context
The site is intended to reduce the friction between:
"I like this editor."
and:
"I want to contact him."
Alternatives Considered

Contact form
Email form
Instagram
WhatsApp
Multiple forms

Why
Direct messaging is currently simpler and better aligned with the project's intended early freelance workflow.
Consequences
Benefits:

Fewer fields
Less JavaScript
Less form infrastructure
Lower accessibility burden
Faster conversion path

Trade-offs:

No structured project inquiry form
Less automated lead collection


21. D016 — WhatsApp Number Is Not Publicly Displayed
Status: Accepted
Decision
The website should use WhatsApp username-based contact where supported rather than visibly displaying Sanjan's personal phone number.
Context
The user wants WhatsApp contact without publicly disclosing the phone number.
Why
It preserves the intended contact channel while minimizing unnecessary exposure of personal information.
Consequences
Benefits:

Better privacy
Cleaner UI
Direct contact

Trade-offs:

Depends on supported WhatsApp username/link behavior


22. D017 — No Fake Credibility
Status: Accepted
Decision
The portfolio must never invent:

clients
testimonials
awards
partnerships
revenue
years of experience
performance metrics
brand collaborations
client results

Context
The portfolio is intended to create trust.
Fabricated credibility may make the site appear stronger temporarily but creates a serious trust problem if discovered.
Why
Actual work and accurate information are the foundation of credibility.
Consequences
Benefits:

Authenticity
Long-term trust
Consistent messaging

Trade-offs:

The site may appear less established than a fabricated agency-style portfolio
More emphasis must be placed on actual editing quality


23. D018 — Repository Is the Source of Truth for Code; Cloudinary Is the Source of Truth for Video Delivery
Status: Accepted
Decision
Use:
GitHub
→ HTML/CSS/JS/project configuration/lightweight assets

Cloudinary
→ portfolio video assets and delivery

Context
Different AI agents must be able to understand where each type of content belongs.
Why
Separating responsibilities makes the architecture predictable and reduces repository weight.
Consequences
Benefits:

Clear ownership
Easier media management
Easier AI maintenance

Trade-offs:

Two systems instead of one


24. D019 — Multiple AI Models Share One Project Specification
Status: Accepted
Decision
Codex, Antigravity, Cline, Qwen, DeepSeek, and other coding agents must work from the same project specification.
The .ai directory is the project-level behavioral specification.
Context
Different AI systems may otherwise:

reinterpret design decisions
rewrite architecture
introduce different patterns
modify unrelated areas
forget previous decisions

Why
The project must be model-independent.
The AI model is a replaceable implementation tool.
The project specification is the stable source of intent.
Consequences
Benefits:

Safer AI handoffs
More consistent code
Less architecture drift
Easier model switching

Trade-offs:

Documentation must be maintained
Agents must actually read relevant specifications


25. D020 — Localized Change Over Broad Rewrite
Status: Accepted
Decision
AI agents must prefer localized modifications over broad rewrites.
Context
One of the major risks of AI-assisted development is that a request affecting component B causes the agent to modify A, C, and D unnecessarily.
Why
Localized changes are easier to:

review
test
revert
understand
hand off between AI models

Consequences
Benefits:

Lower regression risk
Cleaner Git history
Easier debugging

Trade-offs:

Sometimes a deeper refactor genuinely is necessary
The smallest patch is not always the best long-term architecture

Implementation Notes
Use 11-CHANGE-PROTOCOL.md for detailed change procedure.

26. D021 — Browser-Native APIs Are Preferred
Status: Accepted
Decision
Prefer native browser APIs where they adequately solve the requirement.
Examples:

<dialog>
<video>
IntersectionObserver
requestAnimationFrame
matchMedia
AbortController
CSS transitions
CSS Grid

Context
The portfolio does not need an application framework to reproduce normal browser behavior.
Why
Native capabilities reduce:

dependencies
code size
maintenance
failure points
AI complexity

Consequences
Benefits:

Lightweight implementation
Better platform alignment
Less code

Trade-offs:

Some advanced behavior requires manual implementation


27. D022 — Custom Cursor Is Optional, Not Core UX
Status: Accepted
Decision
A custom cursor may be implemented only if it provides meaningful visual value without harming usability or performance.
Context
The desired site direction is immersive and interactive, but a custom cursor is decorative.
Why
The cursor must never become a dependency for understanding or using the site.
Consequences
Benefits:

Can enhance desktop experience

Trade-offs:

Extra JavaScript
Extra testing
Potential accessibility/performance concerns

Implementation Notes
Never use on touch-only interactions as a required feature.

28. D023 — Desktop Hover Previews Are Optional
Status: Accepted
Decision
Hover-based video previews may be tested, but poster-first interaction remains the default architecture.
Context
Hover previews can make the portfolio feel alive, but they can also cause significant media/network cost.
Why
The work itself already contains motion.
A poster can provide the initial visual experience much more cheaply.
Consequences
Benefits:

Better performance by default
Simpler media system

Trade-offs:

Slightly less immediate visual motion before clicking


29. D024 — Performance Is a Design Constraint
Status: Accepted
Decision
Performance is considered part of the design rather than a separate optimization phase.
Context
A portfolio is useless if the visitor becomes impatient before seeing the work.
Why
The site should feel:
rich visually + light technically
Consequences
Benefits:

Better mobile usability
Better perceived professionalism
Lower bandwidth usage
Better interaction responsiveness

Trade-offs:

Some visually expensive effects must be rejected or simplified


30. D025 — No Global Loading Screen
Status: Accepted
Decision
Do not use a full-screen loading screen for normal page initialization.
Context
The site is static and should become useful immediately.
Alternatives Considered

Full-screen loader
Animated logo loader
Immediate content rendering

Why
A loading screen would delay access to content without solving a real application-level loading problem.
Consequences
Benefits:

Faster perceived performance
Better accessibility
Less unnecessary animation


31. D026 — No Service Worker / PWA Initially
Status: Accepted
Decision
Do not introduce:

Service workers
Offline caching
PWA installation
offline media

unless a future requirement clearly justifies them.
Context
The site is a lightweight portfolio and does not require offline functionality.
Why
The additional caching and lifecycle complexity is unnecessary.
Consequences
Benefits:

Simpler deployment
Fewer caching bugs
Easier AI maintenance

Trade-offs:

No offline functionality


32. D027 — No Analytics Initially
Status: Accepted
Decision
Do not include analytics by default.
Context
The initial goal is to establish a lightweight portfolio and secure early freelance work.
Why
Analytics add:

third-party requests
JavaScript
privacy considerations
configuration

without being essential to launch.
Consequences
Benefits:

Lighter site
Simpler privacy situation
Less external dependency

Trade-offs:

No immediate quantitative visitor analytics

Analytics may be reconsidered after launch if there is a clear business question they can answer.

33. D028 — Homepage Copy Should Remain Honest and Concise
Status: Accepted
Decision
Homepage copy should emphasize:

what Sanjan does
editing style
actual capabilities
work
contact

without exaggerating experience or filling the page with long biography.
Context
The website's primary purpose is portfolio conversion.
Why
Potential clients need to understand the editor and see the work quickly.
Consequences
Benefits:

Faster comprehension
Better visual hierarchy
Less clutter

Trade-offs:

Less opportunity for long-form storytelling


34. D029 — Portfolio Work Takes Priority Over Software Branding
Status: Accepted
Decision
CapCut should not be positioned as the primary selling point.
Context
Sanjan uses CapCut, but clients primarily care about:

quality
editing ability
communication
outcome

Why
Prominently branding the portfolio around the editing application could incorrectly shift attention from the actual skill being sold.
Consequences
Benefits:

Skill-focused positioning
More professional framing

Trade-offs:

Software may be less visible than on a tool-focused portfolio

Software can still be listed where relevant.

35. D030 — No Artificial Agency Positioning
Status: Accepted
Decision
The website represents Sanjan/sanjanedits as an individual editor, not a large agency.
Context
The project is a personal freelance portfolio.
Why
Authenticity is more valuable than pretending to have a larger operation.
Consequences
Benefits:

Clearer identity
More personal trust
No need for fabricated team/client content

Trade-offs:

Less "agency scale" perception


36. D031 — Project Archive Uses Normal Rendering, Not Virtualization
Status: Accepted
Decision
The Projects page will render approximately 45 projects normally.
Do not introduce virtual scrolling unless the portfolio grows substantially.
Context
Approximately 45 projects is small for normal web rendering.
Why
Virtualization would add complexity without solving a meaningful problem at this scale.
Consequences
Benefits:

Simple implementation
Easier accessibility
Easier AI maintenance

Trade-offs:

Requires efficient poster/media handling


37. D032 — No Infinite Scroll Initially
Status: Accepted
Decision
Do not use infinite scrolling for the Projects page.
Context
A portfolio archive should remain predictable and easy to navigate.
Why
All current projects can reasonably exist on one page.
Consequences
Benefits:

Easier navigation
Easier linking/sharing
Better predictability

Trade-offs:

Longer Projects page


38. D033 — No Pagination Initially
Status: Accepted
Decision
Do not paginate the approximately 45-project archive initially.
Context
45 projects is still a manageable amount for a single portfolio page.
Why
Pagination would introduce additional interaction and navigation without a demonstrated need.
Consequences
Benefits:

Simpler browsing
Fewer navigation steps

Trade-offs:

More content on one page


39. D034 — Project Filtering Must Remain Simple
Status: Accepted
Decision
If project filters are implemented, they should remain lightweight and client-side.
Context
There are approximately 45 projects.
Why
This is too small to justify complex filtering infrastructure.
Consequences
Benefits:

Fast filtering
No backend
Simple implementation

Trade-offs:

Filters remain dependent on frontend data


40. D035 — Native <dialog> Preferred for Video Modal
Status: Accepted
Decision
Use native <dialog> for the video modal when it meets the design requirements.
Context
The video viewer requires:

Modal presentation
Close behavior
Keyboard interaction
Focus handling

Why
Native dialog behavior reduces the amount of custom accessibility and state-management code required.
Consequences
Benefits:

Native browser semantics
Less custom code
Better accessibility foundation

Trade-offs:

Styling and browser behavior still need testing


41. D036 — No Custom Video Player Unless Necessary
Status: Accepted
Decision
Prefer native browser video controls.
Create custom controls only if they provide a substantial UX benefit.
Context
A custom video player can quickly become a large project of its own.
Why
The portfolio needs to help users watch edits, not reproduce a professional editing application.
Consequences
Benefits:

Less JavaScript
Better native accessibility
Less maintenance

Trade-offs:

Less complete visual control over controls


42. D037 — The Editing Work Is the Primary Brand Asset
Status: Accepted
Decision
Visual design, copy, motion, and page hierarchy must support the editing work rather than compete with it.
Context
The purpose of the website is to sell video-editing ability.
Why
A portfolio that demonstrates impressive website effects but weakly presents the actual work has failed its primary objective.
Consequences
Benefits:

Stronger conversion focus
Better portfolio clarity

Trade-offs:

Some decorative ideas will be rejected even if visually impressive


43. D038 — New Portfolio Projects Must Be Cheap to Add
Status: Accepted
Decision
Adding a new portfolio project should require approximately:
1. Export edit
2. Prepare poster
3. Upload video to Cloudinary
4. Add project data
5. Add Instagram URL
6. Test

It should not require restructuring the site.
Context
The portfolio will grow over time.
Why
The maintenance cost of adding work must remain low.
Consequences
Benefits:

Easier growth
Easier AI maintenance
Less repetitive work


44. D039 — Model Preference Does Not Override Project Decisions
Status: Accepted
Decision
An AI model's preferred framework, library, architecture, styling approach, or coding pattern does not override documented project decisions.
Context
Multiple different AI coding models will be used.
Why
Without this rule, model switching would gradually mutate the project architecture.
Consequences
Benefits:

Stable architecture
Predictable handoffs
Reduced AI drift

Trade-offs:

Models cannot freely replace established approaches


45. D040 — Reconsider Decisions Through New ADRs
Status: Accepted
Decision
Existing decisions should not be silently rewritten.
If a significant architectural decision needs to change:

Record a new decision.
Explain why the old decision is no longer appropriate.
Mark the old decision as Superseded.
Update related project documentation.
Update current state.

Context
The purpose of this document is to preserve historical reasoning.
Why
Silently editing historical decisions destroys the project's architectural memory.

46. Decision Review Rule
Before reversing an accepted decision, ask:

Has the original context changed?
Is there new evidence?
Is the current decision causing a real problem?
Is the proposed replacement materially better?
What migration cost does it introduce?
Does it affect performance?
Does it affect accessibility?
Does it affect AI-agent maintainability?
Does it affect GitHub Pages compatibility?
Does it require changing other .ai documents?

Do not reverse a decision merely because another implementation looks interesting.

47. Decision Quality Rule
A good decision record should make it possible for a future AI agent to understand:
WHAT
↓
WHY
↓
WHAT WAS REJECTED
↓
WHAT TRADE-OFF WAS ACCEPTED

A record that only says:

"We use Cloudinary."

is insufficient.
It should explain why Cloudinary was chosen.

48. Decision Documentation Rule
Do not store implementation trivia as architectural decisions.
Bad:
D041 — Changed margin from 32px to 40px

Good:
D041 — Portfolio videos are delivered through Cloudinary

because the latter affects architecture.

49. Decision Independence
Each decision should describe one meaningful decision.
Do not combine unrelated decisions into one enormous ADR.
Bad:
D050 — We use GitHub, Cloudinary, lime, Inter, dialog, CSS,
mobile-first, no analytics, and no React

Prefer separate decisions.

50. Decision Supersession
When a decision changes:
Example:
D002 — Cloudinary
Status: Superseded

Superseded by:
D050 — New Media Provider

The old decision should remain in the file for historical context.
Do not delete historical architecture decisions unless there is a compelling reason.

51. Rejected Decisions
Rejected alternatives may be recorded when they help explain an important architectural choice.
Example:
D014 — React

Status: Rejected

Why:
Current project complexity does not justify the framework.

Do not record every random idea someone mentioned.

52. Proposed Decisions
A proposed decision should not silently become accepted through code.
It becomes accepted only when:

the decision is intentionally chosen
implementation follows it
status is updated to Accepted


53. Decision Dates
Use the date on which the decision was made.
Format:
YYYY-MM-DD

Do not use relative terms such as:

today
yesterday
recently


54. Decision Owners
An owner field is not required for this solo project.
If the project later becomes collaborative, an owner may be added.

55. Decision References
Where a decision is based on:

external documentation
benchmark results
browser behavior
security guidance
Cloudinary configuration

the implementation or decision record may contain a reference/link where useful.
Do not overload decisions with citations that do not help future maintainers.

56. No Generic Architecture Dogma
Do not write decisions such as:

"Microservices are better."

A decision must be contextual to this portfolio.
Good:

"Vanilla HTML/CSS/JS is sufficient because the current site has two static pages and limited interactive behavior."


57. Evidence Rule
When an important decision is based on measurement, record the evidence.
Example:
A hover-video experiment increased initial media requests substantially,
so poster-first loading was retained.

Do not claim measurements that were not actually performed.

58. Decision and Testing
A major decision may require later validation.
Example:
Decision:
Use poster-first loading.

Validation:
Check network waterfall and video requests before/after interaction.

Record validation needs in implementation notes when useful.

59. Decision and Current State
After a decision is implemented:
Update:
12-CURRENT-STATE.md

Do not use this file as a substitute for current-state documentation.

60. Decision and Project Plan
When a decision changes implementation order, update:
14-CURRENT-PLAN.md

Do not put project scheduling information into this file unless it is directly part of the architectural reasoning.

61. Decision and Change Protocol
Any implementation of a significant decision should follow:
11-CHANGE-PROTOCOL.md

Decision recording and code modification are related but separate responsibilities.

62. AI-Agent Startup Rule
An AI agent making a significant architectural change must:

Read this file.
Search for related accepted decisions.
Determine whether the requested change conflicts with any decision.
If it conflicts, do not silently override it.
Propose or create a replacement decision only when authorized.


63. AI-Agent Decision Rule
Before saying:

"I think we should use X instead."

the agent should consider whether an accepted decision already addresses X.
Do not repeatedly revisit solved architectural questions.

64. AI-Agent Decision Creation
An AI agent may draft a proposed decision, but should not silently mark a major architectural change as accepted without authorization.

65. AI-Agent Historical Integrity
AI agents must not rewrite previous decisions to make the repository appear as though a different architecture had always been intended.
Historical decisions should remain historically accurate.

66. Decision Conflict Example
Suppose an AI agent wants React.
Current decision:
D001 — Static Website Architecture
Status: Accepted

The agent must not silently migrate to React.
It should recognize the conflict and treat the framework migration as a new architectural decision.

67. Decision Conflict Resolution
If a legitimate new requirement makes an old decision obsolete:
Old decision
    ↓
document why it no longer works
    ↓
new decision
    ↓
mark old decision Superseded
    ↓
update architecture/current state/plan

Do not overwrite history.

68. Decision Documentation Quality
A decision should be understandable to a new developer who has never seen this project before.
Avoid relying on:

private conversations
hidden context
"as discussed"
unexplained acronyms
unstated assumptions


69. Decision Length
Keep each decision as short as possible while preserving:

context
alternatives
reasoning
consequences

Do not write an essay for a trivial architectural choice.

70. Current Accepted Decisions Summary
The major accepted decisions currently are:
D001 — Static website architecture
D002 — Cloudinary for video
D003 — Website-based video playback
D004 — Poster-first/on-demand video
D005 — No audible autoplay
D006 — Dark cinematic editorial direction
D007 — Plus Jakarta Sans + Inter
D008 — Restrained lime accent
D009 — CSS-first animation
D010 — WCAG 2.2 AA target
D011 — Mobile first-class
D012 — Curated homepage + comprehensive projects page
D013 — Centralized project data
D014 — No frontend framework
D015 — No contact form initially
D016 — WhatsApp number not publicly displayed
D017 — No fake credibility
D018 — GitHub/Cloudinary responsibility separation
D019 — Shared project specification for all AI models
D020 — Localized change over broad rewrite
D021 — Browser-native APIs preferred
D022 — Custom cursor optional
D023 — Hover previews optional
D024 — Performance as design constraint
D025 — No global loading screen
D026 — No PWA/service worker initially
D027 — No analytics initially
D028 — Concise, honest homepage copy
D029 — Work prioritized over software branding
D030 — No artificial agency positioning
D031 — No virtualization initially
D032 — No infinite scroll initially
D033 — No pagination initially
D034 — Simple client-side filtering
D035 — Native dialog preferred
D036 — Native video controls preferred
D037 — Editing work is the primary brand asset
D038 — New projects must be cheap to add
D039 — Model preference does not override project decisions
D040 — Significant changes require new decisions


71. Non-Negotiable Decision-Management Rules

Record significant architectural decisions.
Record why the decision was made.
Record meaningful alternatives considered.
Record consequences/trade-offs.
Keep statuses accurate.
Do not turn this file into a general rulebook.
Do not turn this file into a current-state report.
Do not silently reverse accepted decisions.
Supersede decisions rather than rewriting history.
Do not create ADRs for trivial implementation details.
Do not invent supporting evidence.
Do not claim measurements that were not performed.
Keep each decision focused.
Preserve historical reasoning.
Check this file before significant architectural changes.
An AI model's preference does not invalidate an accepted decision.
New architectural direction should be documented before or alongside implementation.
When decisions change, update related architecture/current-state/plan documentation.
The purpose of this file is to prevent the project from repeatedly forgetting why it was built the way it was.

