CURRENT PLAN
1. Purpose
This file is the living execution roadmap for the sanjanedits portfolio.
It answers:

What are we doing next, in what order, and what must be true before moving forward?

It does NOT define:

General project rules
Design-system rules
HTML/CSS/JS rules
Accessibility rules
Performance rules
Historical design decisions
Detailed current-state information

Those responsibilities belong to the other .ai files.
This file should change as implementation progresses.

2. Planning Principles
The project should be developed in controlled phases.
The core principles are:
BUILD FOUNDATION
        ↓
BUILD STRUCTURE
        ↓
BUILD CORE INTERACTIONS
        ↓
INTEGRATE MEDIA
        ↓
POLISH
        ↓
TEST
        ↓
DEPLOY

Do not optimize or polish unstable architecture prematurely.
Do not skip foundational work simply because the visual result is more exciting.
GitHub's project guidance recommends breaking larger work into smaller pieces and making dependencies between work explicit. This plan follows that principle.

3. Current Overall Status
Overall status:
PRE-IMPLEMENTATION
Planning/specification:
Complete
Implementation:
Not started

4. Current Phase
Current phase:
PHASE 0 — PROJECT SETUP
Objective:
Create the repository foundation and establish the environment in which the website will be safely developed by multiple AI coding agents.

5. Phase Status Legend
Use:
[ ] Not started
[~] In progress
[x] Complete
[!] Blocked
[-] Intentionally skipped

Do not mark an item [x] merely because code was generated.
An item is complete only when its acceptance criteria are satisfied.

6. Definition of Done
A task is considered complete when:

The requested implementation exists.
It follows the relevant .ai rules.
It does not unintentionally break existing functionality.
It has been tested at the appropriate scope.
Relevant responsive behavior has been checked.
Relevant accessibility has been checked.
Relevant performance behavior has been checked.
The diff has been reviewed.
Documentation has been updated when required.


7. Phase 0 — Repository Setup
Status:
[~] In progress
Objective
Establish a clean, predictable repository before writing significant application code.
Tasks
0.1 Create repository
[ ] Create GitHub repository
[ ] Choose repository name
[ ] Initialize main branch

0.2 Create project structure
[ ] Create .ai/
[ ] Create assets/
[ ] Create css/
[ ] Create js/
[ ] Create index.html
[ ] Create projects.html
[ ] Create README.md
[ ] Create .gitignore

0.3 Add AI specification
[ ] Add 00-PROJECT-CONTEXT.md
[ ] Add 01-ARCHITECTURE.md
[ ] Add 02-DESIGN-SYSTEM.md
[ ] Add 03-UX-RULES.md
[ ] Add 04-HTML-RULES.md
[ ] Add 05-CSS-RULES.md
[ ] Add 06-JS-RULES.md
[ ] Add 07-PERFORMANCE-RULES.md
[ ] Add 08-MEDIA-RULES.md
[ ] Add 09-ACCESSIBILITY-RULES.md
[ ] Add 10-GITHUB-RULES.md
[ ] Add 11-CHANGE-PROTOCOL.md
[ ] Add 12-CURRENT-STATE.md
[ ] Add 13-DESIGN-DECISIONS.md
[ ] Add 14-CURRENT-PLAN.md

0.4 Initial Git checkpoint
[ ] Verify git status
[ ] Verify repository structure
[ ] Verify no secrets
[ ] Verify no unnecessary large files
[ ] Create initial checkpoint commit

Acceptance Criteria
[ ] Repository exists
[ ] main branch exists
[ ] Project structure exists
[ ] .ai specification exists
[ ] .gitignore exists
[ ] No unnecessary media is committed
[ ] Working tree is clean after checkpoint


8. Phase 1 — HTML Foundation
Status:
[ ] Not started
Depends on:
Phase 0
Objective
Create the semantic structural foundation of both pages before visual polish.
Tasks
1.1 Global HTML foundation
[ ] HTML5 doctype
[ ] lang attribute
[ ] viewport metadata
[ ] title
[ ] meta description
[ ] Open Graph foundation

1.2 Global page structure
[ ] Header
[ ] Navigation
[ ] Main
[ ] Footer
[ ] Skip link

1.3 Homepage structure
[ ] Hero
[ ] Selected Work
[ ] Showreel
[ ] What I Edit
[ ] Editing Philosophy
[ ] About
[ ] Contact

1.4 Projects page structure
[ ] Page heading
[ ] Filter area
[ ] Project grid container
[ ] Video dialog container

Acceptance Criteria
[ ] Both pages have semantic structure.
[ ] Heading hierarchy is logical.
[ ] Navigation works without JavaScript.
[ ] Contact links are structurally present.
[ ] No visual styling is required to understand document structure.


9. Phase 2 — CSS Foundation
Status:
[ ] Not started
Depends on:
Phase 1
Objective
Establish the design system and reusable layout foundation.
Tasks
2.1 Base styles
[ ] CSS reset
[ ] box-sizing
[ ] base typography
[ ] body defaults
[ ] color tokens
[ ] spacing tokens
[ ] radius tokens
[ ] transition tokens where appropriate

2.2 Typography
[ ] Plus Jakarta Sans
[ ] Inter
[ ] Required font weights only
[ ] Responsive display typography
[ ] Body typography

2.3 Layout
[ ] container system
[ ] section spacing
[ ] grid foundation
[ ] flex patterns
[ ] responsive foundations

2.4 Global interaction states
[ ] focus
[ ] hover
[ ] active
[ ] selection

Acceptance Criteria
[ ] Design tokens exist in one authoritative location.
[ ] Typography is consistent.
[ ] Responsive base works.
[ ] No component-specific styling leaks into unrelated areas.
[ ] Focus states exist.


10. Phase 3 — Navigation
Status:
[ ] Not started
Depends on:
Phase 2
Objective
Build stable site navigation before more complex page interactions.
Tasks
[ ] Desktop navigation
[ ] Mobile navigation
[ ] Mobile menu state
[ ] Accessible expanded/collapsed state
[ ] Navigation focus states
[ ] Projects link
[ ] Contact access

Acceptance Criteria
[ ] Navigation works without JavaScript for normal links.
[ ] Mobile navigation works.
[ ] Keyboard operation works.
[ ] Focus remains visible.
[ ] No horizontal overflow.


11. Phase 4 — Hero
Status:
[ ] Not started
Depends on:
Phase 3
Objective
Create the first-impression experience.
The visitor should immediately understand:

sanjanedits
Video Editor
What kind of work is offered
Where to view the work

Tasks
[ ] Hero typography
[ ] Positioning statement
[ ] Primary CTA
[ ] Secondary CTA where useful
[ ] Sanjan photograph integration
[ ] Hero composition
[ ] Hero responsive layout
[ ] Hero motion

Acceptance Criteria
[ ] Identity is immediately understandable.
[ ] Video editing is immediately understandable.
[ ] CTA is obvious.
[ ] Hero works on mobile.
[ ] Hero does not introduce unnecessary heavy media.
[ ] Animation remains fast.


12. Phase 5 — Selected Work
Status:
[ ] Not started
Depends on:
Phase 4
Objective
Present the strongest five projects with a premium editorial layout.
Composition:
1 featured edit
+
4 supporting edits

Tasks
[ ] Project-card component
[ ] Featured project treatment
[ ] Supporting project treatment
[ ] Poster integration
[ ] Project metadata
[ ] Play affordance
[ ] Hover behavior
[ ] Focus behavior
[ ] Mobile composition

Acceptance Criteria
[ ] Five projects can be presented.
[ ] Strongest work has strongest prominence.
[ ] Cards are visually distinct but consistent.
[ ] Posters load without unnecessary video requests.
[ ] Keyboard interaction works.
[ ] Mobile cards remain usable.


13. Phase 6 — Video System
Status:
[ ] Not started
Depends on:
Phase 5
Objective
Implement the reusable portfolio video experience.
Tasks
[ ] Native video implementation
[ ] Video dialog
[ ] Open behavior
[ ] Close behavior
[ ] Poster handling
[ ] On-demand video loading
[ ] Cloudinary URL handling
[ ] Playback
[ ] Audio control
[ ] Error handling
[ ] Focus management
[ ] Video cleanup

Acceptance Criteria
[ ] Videos do not all load on initial page load.
[ ] Clicking a project opens the intended video.
[ ] Cloudinary video loads correctly.
[ ] Playback works.
[ ] Audio works after intentional playback.
[ ] Dialog can be closed.
[ ] Escape works.
[ ] Focus is handled correctly.
[ ] Failed video does not break the site.
[ ] Mobile playback works.


14. Phase 7 — Cloudinary Integration
Status:
[ ] Not started
Depends on:
Phase 6
Objective
Connect the real portfolio media.
Tasks
[ ] Create/configure Cloudinary account
[ ] Establish folder convention
[ ] Upload selected videos
[ ] Establish poster strategy
[ ] Establish delivery transformation strategy
[ ] Add project URLs
[ ] Verify format/quality behavior

Acceptance Criteria
[ ] Portfolio videos resolve through Cloudinary.
[ ] No private Cloudinary credentials appear in frontend code.
[ ] Delivery quality is acceptable.
[ ] Delivery size is reasonable.
[ ] Mobile playback works.
[ ] Posters and videos correspond correctly.


15. Phase 8 — Showreel
Status:
[ ] Not started
Depends on:
Phase 7
Objective
Create the main showreel presentation using the reel selected by Sanjan.
Tasks
[ ] Showreel section
[ ] Poster
[ ] Playback CTA
[ ] Cloudinary delivery
[ ] Audio behavior
[ ] Responsive presentation

Acceptance Criteria
[ ] Showreel is visually prominent.
[ ] Showreel does not block initial page loading.
[ ] Playback is intentional.
[ ] Audio works.
[ ] Mobile presentation is strong.


16. Phase 9 — Capability Sections
Status:
[ ] Not started
Depends on:
Phase 8
Objective
Build the supporting sections that explain Sanjan's editing focus.
Sections:
What I Edit
Editing Philosophy

Tasks
[ ] Short-form category
[ ] Cinematic category
[ ] Music-driven category
[ ] Editing philosophy statement
[ ] Supporting motion
[ ] Responsive layouts

Acceptance Criteria
[ ] Capabilities are clear.
[ ] Copy is concise.
[ ] No unsupported claims.
[ ] Sections support the portfolio rather than overshadow it.


17. Phase 10 — About
Status:
[ ] Not started
Depends on:
Phase 9
Objective
Introduce Sanjan as a real person and establish truthful credibility.
Tasks
[ ] Profile photo
[ ] Introduction
[ ] 70+ edits statistic
[ ] Approximately 45 published edits
[ ] Editing focus
[ ] Responsive composition

Acceptance Criteria
[ ] Information is factual.
[ ] Photo is integrated professionally.
[ ] Section does not become a resume.
[ ] Typography and spacing match the design system.


18. Phase 11 — Contact
Status:
[ ] Not started
Depends on:
Phase 10
Objective
Make contacting Sanjan extremely easy.
Tasks
[ ] Strong closing CTA
[ ] Instagram link
[ ] WhatsApp username-based link
[ ] Contact button states
[ ] Mobile contact behavior

Acceptance Criteria
[ ] Contact action is obvious.
[ ] Instagram works.
[ ] WhatsApp works.
[ ] Phone number is not publicly exposed.
[ ] Contact remains accessible without JavaScript.


19. Phase 12 — Projects Page
Status:
[ ] Not started
Depends on:
Phase 7
Objective
Create the complete portfolio archive.
Tasks
[ ] Projects page layout
[ ] Central project data
[ ] Project rendering
[ ] Approximately 45 projects
[ ] Category filters
[ ] Project cards
[ ] Video integration
[ ] Instagram links
[ ] Responsive grid

Acceptance Criteria
[ ] Projects are rendered from centralized data.
[ ] Approximately 45 projects can be displayed.
[ ] Filtering works.
[ ] Filtering does not reload the page.
[ ] Filtering does not load all videos.
[ ] Project cards remain accessible.
[ ] Project playback works.


20. Phase 13 — Full Media Population
Status:
[ ] Not started
Depends on:
Phase 12
Objective
Populate the complete portfolio archive with real selected media.
Tasks
[ ] Prepare all project posters
[ ] Upload required videos
[ ] Add project metadata
[ ] Add Instagram URLs
[ ] Verify project/video pairing
[ ] Verify categories
[ ] Verify ordering

Acceptance Criteria
[ ] No broken project URLs.
[ ] No missing poster references.
[ ] No incorrect Instagram links.
[ ] No broken videos.
[ ] No unintended duplicate projects.


21. Phase 14 — Motion & Interaction Polish
Status:
[ ] Not started
Depends on:
Phases 1–13
Objective
Add the polished motion language after structure and functionality are stable.
Tasks
[ ] Hero reveal
[ ] Section reveals
[ ] Project-card interaction
[ ] Button interactions
[ ] Navigation transitions
[ ] Video dialog transitions
[ ] Optional pointer interactions
[ ] Optional custom cursor
[ ] Reduced-motion behavior

Acceptance Criteria
[ ] Motion feels intentional.
[ ] Motion does not delay content.
[ ] No unnecessary continuous animation.
[ ] Reduced-motion mode works.
[ ] Mobile remains smooth.
[ ] No major performance regression.


22. Phase 15 — Responsive Refinement
Status:
[ ] Not started
Depends on:
Phase 14
Objective
Perform a dedicated responsive pass rather than assuming responsive CSS is already perfect.
Targets
[ ] Small mobile
[ ] Large mobile
[ ] Tablet
[ ] Laptop
[ ] Desktop
[ ] Large desktop

Check
[ ] Navigation
[ ] Hero
[ ] Project cards
[ ] Video dialog
[ ] Showreel
[ ] About
[ ] Contact
[ ] Footer
[ ] Typography
[ ] Spacing
[ ] Overflow

Acceptance Criteria
[ ] No unintended horizontal scrolling.
[ ] No clipped text.
[ ] No broken grids.
[ ] No unusable controls.
[ ] No major layout shifts.


23. Phase 16 — Accessibility Audit
Status:
[ ] Not started
Depends on:
Phase 15
Objective
Perform a dedicated WCAG 2.2 AA review.
Tasks
[ ] Semantic structure
[ ] Heading hierarchy
[ ] Keyboard-only navigation
[ ] Focus states
[ ] Focus order
[ ] Mobile navigation accessibility
[ ] Video dialog accessibility
[ ] Accessible names
[ ] Image alt text
[ ] Contrast
[ ] Touch targets
[ ] Reduced motion
[ ] Zoom/reflow
[ ] Screen-reader spot check

Tools/Methods
Where practical:
[ ] Lighthouse
[ ] axe DevTools or equivalent
[ ] Keyboard-only test
[ ] Screen reader test
[ ] Browser zoom test
[ ] Reduced-motion test

Acceptance Criteria
[ ] No known high-impact accessibility failures.
[ ] Keyboard navigation works.
[ ] Focus is visible.
[ ] Video dialog is operable.
[ ] Interactive controls have accessible names.
[ ] Contrast is acceptable.
[ ] Reduced-motion behavior works.


24. Phase 17 — Performance Audit
Status:
[ ] Not started
Depends on:
Phase 16
Objective
Confirm that the portfolio is visually rich without becoming technically heavy.
Tasks
[ ] Inspect network waterfall
[ ] Check initial page requests
[ ] Verify videos are not eagerly downloaded
[ ] Check poster sizes
[ ] Check image sizes
[ ] Check JavaScript execution
[ ] Check CSS size
[ ] Check font requests
[ ] Check Cloudinary delivery
[ ] Check mobile behavior
[ ] Test throttled network
[ ] Test Core Web Vitals where practical

Metrics of interest
[ ] LCP
[ ] INP
[ ] CLS

Acceptance Criteria
[ ] No unnecessary video requests.
[ ] No obviously oversized images.
[ ] No unnecessary third-party scripts.
[ ] No major interaction lag.
[ ] No obvious layout shift problems.
[ ] Mobile experience remains responsive.


25. Phase 18 — SEO & Sharing
Status:
[ ] Not started
Depends on:
Phase 17
Tasks
[ ] Final page titles
[ ] Meta descriptions
[ ] Open Graph tags
[ ] Social preview image
[ ] robots.txt
[ ] sitemap.xml
[ ] Canonical strategy if appropriate
[ ] Verify heading structure
[ ] Verify meaningful link text

Acceptance Criteria
[ ] Homepage has correct metadata.
[ ] Projects page has correct metadata.
[ ] Social previews have meaningful content.
[ ] robots.txt exists if needed.
[ ] sitemap.xml is valid if used.


26. Phase 19 — Final Content Review
Status:
[ ] Not started
Depends on:
Phase 18
Objective
Remove anything that weakens trust.
Review
[ ] No fake claims
[ ] No placeholder text
[ ] No fake clients
[ ] No fake testimonials
[ ] No temporary project names
[ ] No broken URLs
[ ] No lorem ipsum
[ ] No debugging text
[ ] No unnecessary technical language
[ ] No inconsistent brand name

Acceptance Criteria
Every visible statement should be:
accurate + intentional + useful.

27. Phase 20 — Production Git Review
Status:
[ ] Not started
Depends on:
Phase 19
Tasks
[ ] git status
[ ] git diff
[ ] inspect modified files
[ ] inspect staged diff
[ ] check repository size
[ ] check for secrets
[ ] check untracked files
[ ] check .gitignore
[ ] verify deployment configuration

Acceptance Criteria
[ ] No secrets.
[ ] No unnecessary large files.
[ ] No temporary development artifacts.
[ ] No accidental AI-generated files.
[ ] All important source files tracked.
[ ] Diff contains only intended changes.


28. Phase 21 — GitHub Pages Deployment
Status:
[ ] Not started
Depends on:
Phase 20
Tasks
[ ] Configure GitHub Pages
[ ] Select correct deployment source
[ ] Deploy
[ ] Open live URL
[ ] Check homepage
[ ] Check projects page
[ ] Check assets
[ ] Check Cloudinary playback
[ ] Check external links

Acceptance Criteria
[ ] Live homepage works.
[ ] Live Projects page works.
[ ] CSS loads.
[ ] JavaScript loads.
[ ] Posters load.
[ ] Videos load.
[ ] Navigation works.
[ ] No GitHub Pages path issues.


29. Phase 22 — Production Verification
Status:
[ ] Not started
Depends on:
Phase 21
Desktop
[ ] Hero
[ ] Navigation
[ ] Selected work
[ ] Showreel
[ ] All major sections
[ ] Video playback
[ ] Contact

Mobile
[ ] Navigation
[ ] Hero
[ ] Project cards
[ ] Video playback
[ ] Showreel
[ ] Contact

Accessibility
[ ] Keyboard
[ ] Focus
[ ] Reduced motion
[ ] Zoom

Performance
[ ] Initial loading
[ ] Video loading
[ ] Poster loading
[ ] Interaction responsiveness

Acceptance Criteria
The deployed site must behave like the final tested local implementation.

30. Phase 23 — Launch
Status:
[ ] Not started
Depends on:
Phase 22
Tasks
[ ] Final Git checkpoint
[ ] Final deployment
[ ] Verify live site
[ ] Add portfolio link to freelancing profiles
[ ] Add portfolio link where appropriate on Instagram

Acceptance Criteria
[ ] Portfolio URL is stable.
[ ] Portfolio is publicly accessible.
[ ] Contact links work.
[ ] No obvious production bugs remain.


31. Future Enhancements
These are deliberately not part of the initial launch.
Potential future work:
[ ] Custom domain
[ ] Testimonials
[ ] Client case studies
[ ] Email contact form
[ ] Analytics
[ ] More advanced project filtering
[ ] Custom video preview system
[ ] Additional project categories
[ ] More advanced interaction experiments

Future enhancements must not be added before the core portfolio is stable unless explicitly prioritized.

32. Deferred Ideas
Ideas should be recorded here rather than immediately implemented.
Examples:
[ ] Experimental page transition
[ ] Advanced cursor interaction
[ ] Scroll-linked video treatment
[ ] Alternative hero animation
[ ] Light theme experiment

A deferred idea is not approved work.

33. Blocked Work
Current blockers:
None recorded.
When blocked, use:
## Blocker

Task:
...

Blocked by:
...

Impact:
...

Resolution needed:
...

Status:
Open / Resolved

Do not silently skip blocked dependencies.

34. Dependency Rules
Some phases must precede others.
Important dependencies:
Repository
    ↓
HTML foundation
    ↓
CSS foundation
    ↓
Navigation
    ↓
Hero
    ↓
Selected Work
    ↓
Video System
    ↓
Cloudinary
    ↓
Projects
    ↓
Polish
    ↓
Accessibility
    ↓
Performance
    ↓
Deployment

Do not bypass dependencies simply because a later feature is visually interesting.

35. Parallel Work
Some low-risk work can happen in parallel when it does not create conflicts.
Possible parallel work:
Project data preparation
+
Poster preparation
+
Cloudinary account setup

while frontend structure is being developed.
However:
Do not have multiple AI agents simultaneously modify the same core files without coordination.

36. AI Agent Task Selection
When assigning work to an AI agent, choose the smallest currently uncompleted task that has all required dependencies satisfied.
Good:
Build project-card component.

Bad:
Finish the portfolio.

The agent should work against this plan rather than invent its own roadmap.

37. AI Agent Phase Boundaries
An AI agent should not silently move the project into a later phase because it believes the current phase is "good enough."
For example:
If Phase 6 is still incomplete:
Do not start extensive animation polish.
If accessibility has not been audited:
Do not call the project production-ready.

38. AI Agent Completion Rule
When an agent completes a task:
It should update the relevant status:
[ ] → [x]

only after validation.
If partially complete:
[~]

If blocked:
[!]


39. AI Agent Reporting
After a meaningful task, report:
Task:
...

Status:
...

Files changed:
...

Validation performed:
...

Known issues:
...

Next plan item:
...

Do not claim completion based solely on code generation.

40. Plan Updates
Update this file when:

a task is completed
a task is blocked
task order changes
a new major task is added
a major task is removed
a dependency changes
a phase is completed

Do not update this file for trivial implementation details.

41. Plan vs Current State
Use:
CURRENT-STATE.md
→ What exists now?

CURRENT-PLAN.md
→ What are we doing next?

DESIGN-DECISIONS.md
→ Why was the project designed this way?

Do not mix these responsibilities.

42. Plan vs Rules
Use:
*-RULES.md
→ What must remain true?

CURRENT-PLAN.md
→ What are we currently trying to accomplish?

A temporary implementation task should not become a permanent project rule.

43. Plan vs Git History
Git history records:
what changed.
This file records:
what should happen next.
Do not turn this file into a chronological commit log.

44. Plan Integrity
Do not mark a task complete merely because:

files exist
code compiles
an AI agent claims success
the browser displayed something once

Use the task's actual acceptance criteria.

45. Scope Protection
If an AI agent discovers an unrelated improvement while working:
Do not automatically implement it.
Add it as:
Future enhancement

or a separate task when appropriate.
This prevents scope creep.

46. Priority Rule
When priorities conflict, prefer:
1. Broken functionality
2. Core portfolio experience
3. Accessibility
4. Performance
5. Responsive behavior
6. Conversion/contact experience
7. Visual polish
8. Experimental effects

Do not polish a decorative animation while a video-loading problem remains unresolved.

47. Launch Gate
The site should not be considered launch-ready until all of the following are complete:
[x] Core structure
[x] Navigation
[x] Hero
[x] Selected work
[x] Video playback
[x] Cloudinary integration
[x] Showreel
[x] About
[x] Contact
[x] Projects page
[x] Responsive refinement
[x] Accessibility audit
[x] Performance audit
[x] SEO/share metadata
[x] Content review
[x] Production Git review
[x] GitHub Pages deployment
[x] Production verification

A checked item must represent verified completion, not intention.

48. Launch Blockers
The following should block launch:

Broken primary navigation
Broken video playback
Broken contact links
Broken mobile layout
Exposed credentials/secrets
Major accessibility failure
Major performance regression
Broken GitHub Pages deployment
Fake/incorrect public claims
Missing critical portfolio content

Minor cosmetic imperfections do not automatically block launch.

49. Post-Launch Plan
After launch:
[ ] Monitor real user feedback
[ ] Fix critical production issues
[ ] Review portfolio conversion
[ ] Add future projects
[ ] Revisit deferred ideas only when useful

Do not immediately rewrite the entire site after launch because of minor imperfections.
Use evidence.

50. Single Source of Truth
This file is the authoritative source for:
current execution order and planned work.
The repository should not maintain a contradictory second roadmap elsewhere.
GitHub Issues/Projects may be used later as an execution interface, but they should not contradict this plan. GitHub itself recommends maintaining a single source of truth to avoid information getting out of sync.

51. Current Next Action
The next immediate task is:
Initialize the GitHub repository and create the project structure.
After that:
Establish the HTML and CSS foundations.
Do not begin large visual experimentation before the foundation is stable.

52. Non-Negotiable Planning Rules

This is a living roadmap.
It records what should happen next.
It does not replace the other .ai files.
Keep tasks small enough to execute and verify.
Respect phase dependencies.
Do not skip required foundation work.
Do not mark work complete without validation.
Use [~] for partially complete work.
Use [!] for blocked work.
Keep future ideas separate from active work.
Do not silently expand scope.
Do not turn discovered improvements into automatic work.
Keep one authoritative execution plan.
Update the plan after meaningful milestones.
Update CURRENT-STATE.md when the actual repository state changes.
Update DESIGN-DECISIONS.md when a durable architectural decision changes.
Use Git as a checkpoint and rollback mechanism.
Prefer sequential AI-agent handoffs over simultaneous edits to the same files.
Do not declare the site production-ready before accessibility, performance, responsive, and deployment checks.
The plan exists to control execution, not to impress the AI with how ambitious the project is.

