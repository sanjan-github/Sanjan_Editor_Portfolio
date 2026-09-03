CURRENT PLAN
1. PURPOSE
This is the master execution plan for the sanjanedits portfolio.
It defines:

what we are building
what the visitor should experience
the approved website copy
the approved production media
the dependency-aware order of work
how AI agents execute work
how work is handed between agents
how interrupted work is resumed
how parallel work is controlled
how changes are verified
how wasted effort, duplication, scope creep, regressions, and architectural drift are prevented
how model/API token limits are handled
how production content is protected from invention

This document controls project execution.
Specialized .ai files remain authoritative for their own subjects.

2. PRODUCT GOAL
Build a polished personal portfolio website for:
Sanjan
Video Editor
Brand:
sanjanedits
The website must quickly communicate:

who Sanjan is
that Sanjan is a video editor
what kind of editing he creates
that the actual work is the primary proof
how a potential client can contact him

The experience should feel:

cinematic
premium
editorial
modern
energetic
intentional
lightweight
personal

It must not become:

a generic developer portfolio
a gaming/neon template
a fake agency
a résumé website
an effects demonstration
an unnecessarily complex technical project

The portfolio should sell the quality of the work through the work itself rather than through exaggerated claims.

3. PORTFOLIO EXPERIENCE SPECIFICATION
This section defines what the visitor should experience.
It is the product direction that implementation must serve.

3.1 FIRST IMPRESSION
The first screen must immediately establish:
Sanjan + Video Editor + personality.
A visitor should understand what Sanjan does without needing to search through the site.
The first impression should be created primarily through:

typography
photograph
composition
concise messaging
controlled motion

The site must not depend on a long introduction to explain its purpose.
The Hero should feel like a creative introduction rather than a résumé header.

3.2 EXPERIENCE HIERARCHY
The overall narrative is:
Person → Identity → Work → Capability → Personality → Contact
The intended visitor journey is:
Who is this?
↓
What does he do?
↓
What does his work look like?
↓
Can he create this kind of edit?
↓
What is he like?
↓
How do I contact him?
Every major section should support this progression.

4. APPROVED WEBSITE COPY
The following copy is approved and must be used exactly unless Sanjan explicitly changes it.
Agents must not rewrite, paraphrase, “improve,” replace, or invent approved copy.

4.1 NAVIGATION
Brand:
sanjanedits
Navigation:
Work · About · Contact
The brand represents the portfolio identity.

4.2 HERO
Identity:
SANJAN
Role:
Video Editor
Main statement:

I turn raw footage into videos built to hold attention.

Primary CTA:
View My Work
Secondary CTA:
Let's Work Together
The Hero copy must remain concise and visually dominant.

4.3 WORK SECTION
Heading:
Here’s My Work
Supporting text:

Take a look at some of the videos I’ve edited.

This section presents the strongest selected edits.
Do not rename the heading to:

Selected Work
Featured Work
Portfolio
My Projects

unless Sanjan explicitly changes the decision.

4.4 MAIN VIDEO SECTION
Heading:
Have a look.
No additional explanatory paragraph is required.
The video itself is responsible for demonstrating the work.
Do not explicitly label this section:

Showreel
Demo Reel
Reel
Showcase

unless Sanjan explicitly changes the decision.

4.5 WHAT I DO
Heading:
What I Do
Short-Form Video Editing

Reels, Shorts, and social content built around strong pacing and visual impact.

Creative Editing

Rhythm-driven cuts, transitions, effects, visual storytelling, and the details that give an edit its personality.

This represents Sanjan's current editing services.
Long-form editing is NOT advertised.
Agents must not add long-form editing unless explicitly instructed.
The section must not become a generic list of software skills.

4.6 ABOUT
The following copy is locked exactly as approved:

I’m Sanjan, a video editor focused on turning footage into edits with impact, emotion, and personality.
I look beyond simply putting clips together. I look for the moments that matter — an expression, a movement, a beat, a character — and build the edit around them.
The goal isn’t to make a video look edited. It’s to make the viewer feel it.
If you have footage that deserves more than a basic cut, let’s make something out of it.

Agents must not rewrite this copy.

4.7 CONTACT
Heading:
Got something in mind?
Supporting text:
Let’s talk about it.
Contact:
Instagram: sanjanedits
WhatsApp: @sanjan.69
The actual production destinations are supplied by Sanjan.
Agents must never invent or guess contact URLs.

4.8 PROJECTS PAGE
Heading:
More of My Work
Supporting text:

Have a look through some of my other edits.

CTA:
See More on Instagram
Instagram:
sanjanedits
The Projects page does NOT claim to contain every video Sanjan has created.
Instagram is the destination for the broader body of work.

4.9 FOOTER
Use:
Sanjan
Video Editor
sanjanedits
Instagram · WhatsApp
© 2026 Sanjan
The distinction is intentional:

personal name: Sanjan
professional role: Video Editor
brand identity: sanjanedits


5. APPROVED PRODUCTION MEDIA
Production media has now been supplied by Sanjan.
These are authoritative production inputs.
Agents must use the exact supplied URLs.
Agents must never:

invent a Cloudinary URL
guess a URL
replace a URL
modify a URL
substitute unrelated media
upload replacement media
silently change the selected media


5.1 PROFILE PHOTO
Asset:
sanjan2.jpg
Cloudinary URL:
https://res.cloudinary.com/sdsqadch/image/upload/v1787892415/sanjan2.jpg
Purpose:

Hero/profile visual
About/profile usage where appropriate


5.2 MAIN HIGHLIGHTED REEL
Asset:
srujan-edit.mp4
Cloudinary URL:
https://res.cloudinary.com/sdsqadch/video/upload/v1787904198/srujan-edit.mp4
Purpose:
Primary highlighted reel
This is the reel to receive the strongest visual emphasis.

5.3 SUPPORTING PROJECT 1
Asset:
Sai_Saviour.mp4
Cloudinary URL:
https://res.cloudinary.com/sdsqadch/video/upload/v1787904812/Sai_Saviour.mp4

5.4 SUPPORTING PROJECT 2
Asset:
athadu_brahmi.mp4
Cloudinary URL:
https://res.cloudinary.com/sdsqadch/video/upload/v1787904770/athadu_brahmi.mp4

5.5 SUPPORTING PROJECT 3
Asset:
Srujan-Dude.mp4
Cloudinary URL:
https://res.cloudinary.com/sdsqadch/video/upload/v1787903555/Srujan-Dude.mp4

5.6 SUPPORTING PROJECT 4
Asset:
Space-OG.mp4
Cloudinary URL:
https://res.cloudinary.com/sdsqadch/video/upload/v1787892867/Space-OG.mp4

5.7 MEDIA STATUS
Current production-media status:



Asset
Status




Profile photo
SUPPLIED


Main highlighted reel
SUPPLIED


Supporting project 1
SUPPLIED


Supporting project 2
SUPPLIED


Supporting project 3
SUPPLIED


Supporting project 4
SUPPLIED


Cloudinary source
AVAILABLE



The production-media dependency is no longer blocked.
Posters/thumbnails may still need to be generated or selected appropriately.

6. HERO EXPERIENCE
The Hero is the strongest visual statement on the site.
It must establish:
Sanjan + Video Editor + personality
The real supplied profile photograph must be used.
The photograph should feel integrated into the composition rather than appearing as a conventional profile card.
The composition should combine:

photograph
large typography
approved copy
clear visual hierarchy
controlled negative space
restrained accent treatment
controlled motion

The Hero must feel like an introduction to an editor's creative identity, not a résumé header.

6.1 HERO MOTION
The Hero should use a scroll-linked visual progression.
Intended motion language:
arrival
↓
tension
↓
movement
↓
transformation
↓
reveal
The motion should feel connected to the visitor's scrolling.
It must not feel like unrelated entrance animations stacked together.
The exact implementation is not locked prematurely.
Use the lightest appropriate approach.
Preferred techniques:

CSS transforms
opacity
clipping
positioning
lightweight JavaScript
IntersectionObserver where appropriate

Do not introduce a heavy animation framework merely to create this effect.

6.2 HERO REQUIREMENTS
The Hero must:

work on desktop
work on mobile
remain understandable without animation
support reduced motion
avoid unwanted horizontal overflow
avoid blocking content
avoid delaying access to the portfolio
remain performant

Desktop and mobile may use substantially different compositions.
Do not force the desktop composition onto mobile.

7. WORK EXPERIENCE
The Work section appears near the top because the actual editing work is the strongest credibility signal.
The homepage contains:

1 strongest featured edit
4 supporting edits

The supplied srujan-edit.mp4 is the primary highlighted reel.
The four remaining supplied videos provide supporting project media.
The presentation should make the work feel like the main product rather than thumbnails inside a generic template.

8. VIDEO EXPERIENCE
The main video receives a deliberate visual moment.
Approved heading:
Have a look.
The video should:

be easy to start
be visually prominent
load efficiently
use a meaningful poster
avoid unnecessary initial video loading
avoid audible autoplay


9. WHAT I DO EXPERIENCE
This section communicates Sanjan's actual editing work.
It focuses on:

short-form video editing
creative editing
pacing
visual impact
rhythm
transitions
effects
visual storytelling
personality

Long-form editing is not advertised.
The section must not become:

a software list
a generic skills grid
a résumé section
a list of buzzwords


10. ABOUT EXPERIENCE
The About section introduces the person behind the work.
Its purpose is to establish:

personality
context
creative identity
credibility
human connection

The approved copy from Section 4.6 must be used.
The section should not become a résumé or biography dump.

11. CONTACT EXPERIENCE
The Contact section is the conversion point.
Approved copy:
Got something in mind?
Let’s talk about it.
Available destinations:

Instagram: sanjanedits
WhatsApp: @sanjan.69

The website should make contacting Sanjan straightforward.
Final production URLs are supplied by Sanjan.
Agents must not fabricate URLs.

12. PROJECTS PAGE EXPERIENCE
The Projects page provides additional work.
Approved copy:
More of My Work

Have a look through some of my other edits.

CTA:
See More on Instagram
The page does not claim to be the complete portfolio.
The broader collection of work is available through Instagram.
The page may contain selected additional projects for which Sanjan provides the necessary media.

13. PORTFOLIO CONTENT RULE
The portfolio must use real work.
Agents must never invent:

projects
clients
testimonials
awards
results
revenue
experience claims
performance statistics
personal facts
contact URLs
Cloudinary URLs
project descriptions presented as facts

If required information is missing, the agent must:

use an explicitly approved placeholder
leave the feature incomplete
or mark the task BLOCKED

It must not fabricate content.

14. VISUAL DIRECTION
Locked direction:
Dark cinematic editorial
Current foundation:
Background:
#090909
Primary text:
#F5F5F2
Secondary text:
#8A8A8A
Accent:
#C8FF00
Display typography:
Plus Jakarta Sans
Body/UI typography:
Inter
The visual system should emphasize:

large typography
strong hierarchy
negative space
editorial composition
restrained accent usage
cinematic imagery
controlled motion

Every visual effect must have a communication, hierarchy, or interaction purpose.

15. MOTION DIRECTION
Motion is a supporting layer, not the product itself.
Priority:

Hero
section reveals
project interactions
navigation transitions
video interaction
micro-interactions

Motion should generally prefer:

transform
opacity
clipping
lightweight observation
lightweight pointer interaction

Avoid continuous animation unless it provides meaningful value.
Avoid motion that delays access to content.
Reduced-motion behavior is mandatory.
A custom cursor is optional and must justify its complexity through actual UX value.

16. RESPONSIVE EXPERIENCE
Mobile is not a smaller desktop version.
Every major section must have deliberate behavior across:

small mobile
large mobile
tablet
laptop
desktop
large desktop

The Hero is especially important.
Typography, spacing, image composition, project presentation, navigation, and video interaction may all change between breakpoints.
Do not preserve desktop composition at the expense of mobile usability.

17. TECHNICAL ARCHITECTURE
Current stack:

HTML5
CSS3
Vanilla JavaScript
Git
GitHub
GitHub Pages
Cloudinary

No frontend framework is currently required.
Do not introduce:

React
Vue
Angular
Tailwind
GSAP
Three.js
other significant dependencies

unless an actual technical requirement demonstrates that the current architecture cannot satisfy the requirement.
Any such change requires explicit documentation and approval.
Project data remains centralized.
Rendering remains separate from data.
Video playback remains reusable.
Repository assets remain lightweight.

18. VIDEO ARCHITECTURE
Videos are hosted through Cloudinary.
Videos must not be stored directly in GitHub.
Default flow:
poster
↓
user interaction
↓
video source activated
↓
Cloudinary video loads
↓
playback
Videos must not all load during initial page load.
Audible autoplay is prohibited.
The system must support:

desktop
mobile
keyboard interaction
focus management
Escape-to-close
error handling
cleanup
reduced-motion considerations


19. PORTFOLIO DATA ARCHITECTURE
Project information must remain centralized.
Conceptually:
project data
↓
rendering
↓
project card
↓
video interaction
Adding or changing a project should not require rewriting the rendering system.
The exact implementation may evolve if maintainability improves without violating the architecture.

20. DEVELOPMENT ORDER
Work follows dependencies.
Phase 1 — Hero
HERO-01
Inspect the existing Hero implementation and define the exact modification boundary.
This task is inspection/planning only.
The agent must:

read relevant .ai documentation
inspect the repository
inspect Git state
inspect existing Hero HTML
inspect relevant CSS
inspect relevant JavaScript
inspect current media integration
inspect supplied profile-photo availability
identify reusable existing code
identify what must change
identify dependencies
identify risks and consequences
define the smallest safe implementation boundary
define the verification approach for HERO-02

The agent must NOT implement the final Hero during HERO-01.
Acceptance criteria:

existing Hero is understood
relevant files are identified
reusable code is identified
unnecessary rewrites are ruled out
implementation boundary is clearly reported
no unrelated code is changed
final Hero is not implemented

When complete:
STOP.

HERO-02
Implement the final photo-led Hero based on the verified HERO-01 boundary.
Scope includes:

supplied profile photograph
final composition
typography
approved Hero copy
desktop behavior
mobile behavior
scroll-linked transition
reduced-motion behavior
responsive behavior
performance considerations

The agent must not modify unrelated sections.

HERO-03
Verify the completed Hero.
Verification includes:

desktop
mobile
scrolling
reduced motion
visual hierarchy
accessibility
overflow
performance

Only after successful verification may the Hero phase be considered complete.

21. PHASE 2 — SELECTED WORK
Implement:

featured project
four supporting projects
centralized project data
posters
metadata
interactions
responsive behavior

The supplied production videos must be used.
Do not implement unrelated sections during these tasks.
Meaningful features should be separate tasks rather than one uncontrolled implementation.

22. PHASE 3 — VIDEO SYSTEM
Implement/refine:

reusable playback
dialog
focus management
on-demand loading
error handling
mobile behavior
keyboard behavior
cleanup

Each meaningful feature should be separately scoped and verified.

23. PHASE 4 — REAL MEDIA INTEGRATION
Integrate the supplied:

profile photo
main highlighted reel
four supporting videos
posters
Cloudinary URLs

The exact supplied URLs are authoritative.
No invented media is permitted.

24. PHASE 5 — SUPPORTING SECTIONS
Implement/refine:

What I Do
About
Contact

Approved copy must remain unchanged.

25. PHASE 6 — PROJECTS PAGE
Implement:

additional selected projects
centralized project data
playback
Instagram CTA

Filtering/categories should only be added if there is an actual UX requirement.
The Projects page must not imply that all videos are hosted on the website.

26. PHASE 7 — REFINEMENT

motion
responsive behavior
interactions
visual polish
spacing
typography
media presentation

Refinement must not become uncontrolled redesign.

27. PHASE 8 — VERIFICATION
Verify:

functionality
responsive behavior
accessibility
performance
SEO
social sharing metadata
final content
media loading
video playback
navigation
contact links


28. PHASE 9 — PRODUCTION

Git review
deployment
live verification

The order may change only when a real dependency requires it.

29. ONE ACTIVE TASK RULE
There must be exactly one ACTIVE TASK for the project at any given time.
Example:
HERO-02 — Implement final photo-led Hero
Only the active task may be worked on.
An agent is NOT authorized to:

start the next task
prepare the next task
partially implement the next task
redesign another section
refactor unrelated code
optimize unrelated code
clean up unrelated files

Finishing early means:
STOP.
The next task requires explicit assignment.

30. ONE TASK OWNER RULE
Every active task has exactly one owner.
No second agent may independently work on the same active task.
If another agent takes over:

inspect the repository
inspect Git state
inspect the active task
inspect previous changes
establish the last verified state
continue only from the remaining work

The new agent does not restart the task.

31. STRICT TASK SCOPE
An agent may modify only what is necessary to complete the active task.
The task defines:

objective
allowed scope
affected files
dependencies
acceptance criteria
verification requirements

If an agent discovers an unrelated improvement:
DO NOT IMPLEMENT IT.
Record it for a future task if useful.

32. NO WORK-AHEAD RULE
Agents must not work ahead of the roadmap.
If the active task is:
HERO-01 — Inspect existing Hero
the agent must not also:

implement the Hero
redesign project cards
build the video system
populate the archive
integrate all Cloudinary videos
rewrite the Projects page

Understanding future work does not authorize implementation.
The next task begins only after explicit assignment.

33. NO UNREQUESTED REFACTORING
Do not refactor working code merely because another implementation appears cleaner.
Do not:

rename unrelated files
restructure unrelated modules
rewrite global CSS
replace functioning architecture
introduce speculative abstractions
change dependencies
perform broad cleanup

unless required by the active task.
If existing code blocks the active task, fix the minimum necessary portion.
Otherwise leave it alone.

34. MINIMUM-CHANGE PRINCIPLE
Use the smallest safe implementation that satisfies the active task.
Prefer:

localized changes
existing architecture
existing utilities
existing modules
existing design tokens

Avoid unnecessary rewrites.

35. BEFORE CODING
Before changing code, the agent must:

read the relevant .ai documentation
inspect the current repository
inspect Git state
inspect the active task
inspect affected files
inspect existing implementation
identify dependencies
determine whether the task is already complete, partial, blocked, or not started

The task description alone is never sufficient.
The repository is authoritative.

36. CHANGE IMPACT CHECK
Before a meaningful change, consider consequences across:

desktop
mobile
accessibility
performance
JavaScript
CSS interactions
future media integration
existing components
maintainability
future agent handoff

A locally successful change that damages the larger system is not acceptable.

37. PROTECTED DECISIONS
Current protected decisions include:

personal identity: Sanjan
professional role: Video Editor
portfolio brand: sanjanedits
static website
GitHub Pages
Cloudinary video hosting
Vanilla HTML/CSS/JS
homepage + Projects page
poster-first video loading
on-demand playback
no audible autoplay
dark cinematic editorial direction
Plus Jakarta Sans + Inter
near-black / off-white / lime visual system
lightweight implementation
accessibility as a first-class requirement
approved website copy
short-form editing as the advertised editing focus
no long-form editing claim
Instagram as the destination for the broader body of work
supplied production media
one active task
one task owner
no work-ahead
no invented production content

If an active task conflicts with a protected decision:
STOP.
Explain:

what conflicts
why it conflicts
possible alternatives

Do not silently override a protected decision.

38. PARALLEL AGENT RULE
Parallel implementation is allowed only when scopes are genuinely isolated.
Parallel implementation is prohibited when agents may modify the same:

file
component
module
shared stylesheet
project data
architecture
design decision
active task

When uncertain:
work sequentially.
More agents do not automatically mean faster progress.

39. INTERRUPTED WORK
An agent may stop because of:

token/credit limits
context limits
tool failure
environment failure
user interruption
external dependency
task completion

The next agent must resume from repository state.
It must:

inspect Git status
inspect the diff
inspect modified files
inspect the active task
identify the last verified state
identify incomplete work
validate existing work
continue from the remaining work

Never restart automatically.
Never discard partial work merely because another agent created it.

40. HANDOFF STATE
At the end of meaningful work, the active task must contain enough information for another agent to continue without the previous conversation.
The handoff must state:

task ID
final status
what changed
files changed
what was verified
what was not verified
known issues
important decisions
remaining work
exact next task

The repository is the continuity mechanism.
Chat history is not.

41. TASK STATES
Every task uses one of:
NOT STARTED
READY
ACTIVE
PARTIAL
BLOCKED
VERIFIED
ABANDONED
Only VERIFIED means the acceptance criteria have been satisfied.

42. MANDATORY STOP RULE
An agent must stop when:

the active task is verified complete
the active task is blocked
required user input is missing
an architectural conflict is discovered
scope would materially expand
required behavior cannot be verified
another task owns the affected area

The agent must not search for additional work.
A clean stop is successful execution.

43. CHECKPOINT STRATEGY
Create checkpoints at meaningful milestones.
Examples:

Hero structure complete
Hero desktop verified
Hero mobile verified
Hero motion verified
project-card system complete
video dialog complete
real media integrated
responsive pass complete
accessibility pass complete
performance pass complete

The purpose is recovery and traceability.
A checkpoint does not prove correctness.

44. VERIFICATION CONTRACT
Every task must define verification appropriate to its scope.
Examples:
Hero

desktop
mobile
scroll behavior
reduced motion
overflow

Navigation

desktop
mobile
keyboard
focus
expanded/collapsed state

Video

opening
playback
closing
Escape
focus restoration
failure state
mobile

CSS

affected components
responsive behavior
overflow
visual regressions

No verification may be claimed without actual evidence.

45. DEFINITION OF DONE
A task is complete only when:

implementation exists where required
relevant rules are followed
existing functionality remains intact
required behavior is verified
relevant responsive behavior is checked
relevant accessibility behavior is checked
relevant performance implications are considered
diff is reviewed
no obvious unfinished implementation remains
handoff state is recorded

Only then may the task become:
VERIFIED

46. STOP CONDITIONS
The agent must STOP instead of improvising when:

a required user decision is missing
required media is missing
an architectural decision is unclear
a protected decision would need to change
verification cannot be completed
another subsystem must be redesigned
scope would materially expand
credentials or external configuration are required

Report the blocker and wait.

47. GIT RECOVERY BOUNDARY
Before meaningful implementation:

inspect Git status
understand branch
inspect relevant history

After meaningful implementation:

inspect diff
verify intended files changed
verify unrelated files did not change
create a coherent checkpoint when appropriate

A commit does not prove correctness.
Verification is still required.

48. EFFICIENCY PRINCIPLES
The objective is:
maximum verified forward progress per unit of agent effort.
Not:

maximum code generated
maximum agents
maximum commits
maximum files changed
maximum visible activity

Therefore:

prefer one informed agent over conflicting agents
reuse repository state
avoid repeated full-project discovery
divide work by logical boundaries
keep tasks small
preserve partial work
verify before handoff
stop when blocked
never restart without evidence
never work ahead


49. NIM / API BUDGET AWARENESS
When working through a model or API with token, rate, or context limits, agents must work efficiently within those constraints.
Agents must avoid unnecessary:

full-repository rereads
repeated searches
redundant tool calls
oversized prompts
repeated explanations
unrelated analysis
unnecessary file rewrites

The agent must not waste the available NIM/API budget on work outside the active task.
If an API rate/token limit is reached:

stop safely
preserve the current repository state
preserve the active-task handoff state
do not restart the task
allow the next available session/agent to resume from the checkpoint

Rate limits must never cause the project to lose progress.

50. HUMAN DECISION GATES
Explicit user control is required for:

final project selection changes
final profile photograph changes
major visual direction changes
major architecture changes
significant dependency additions
changing protected decisions
changing approved copy
changing supplied production media
final showreel selection changes
final production content changes
deployment approval

Agents may prepare options but must not invent user decisions.

51. DOCUMENTATION RESPONSIBILITIES
.ai/12/CURRENT-STATE.md
Answers:
What is true right now?
.ai/13/DESIGN-DECISIONS.md
Answers:
Why was an important decision made?
.ai/14/CURRENT-PLAN.md
Answers:
What are we building, what is approved, what are we doing next, and how must agents execute it?
Do not duplicate these responsibilities unnecessarily.

52. CURRENT EXECUTION STATE
The documentation and project-control system are ready.
The repository is not greenfield.
The project already has an implementation foundation.
The production media has now been supplied.
Therefore:
the project is ready to begin implementation work.
No additional state-control task is required before HERO-01.

53. CURRENT ACTIVE TASK
Task ID:
HERO-01
Status:
READY
Task:
Inspect the existing Hero implementation and define the exact modification boundary.
This is the first implementation task.
It is inspection/planning only.
The agent must NOT implement the final Hero during this task.
Required output:

current Hero structure
relevant files
reusable implementation
required modifications
dependencies
risks
consequences
smallest safe implementation boundary
verification strategy for HERO-02

Acceptance criteria:

existing Hero is understood
affected files are identified
reusable code is identified
unnecessary rewrites are ruled out
implementation boundary is clearly defined
no unrelated files are modified
final Hero is not implemented

When complete:
STOP.

54. NEXT TASK
After HERO-01 is reviewed and explicitly marked VERIFIED:
HERO-02 — Implement the final photo-led Hero.
The next task must be explicitly assigned.
No agent may automatically proceed to HERO-02.

55. FINAL OPERATING PRINCIPLE
The project must always have:
one product direction
one authoritative execution plan
one active task
one task owner
one defined scope
one verifiable stopping point
one clear handoff
The purpose of multiple AI agents is continuity and efficient execution—not independent agents making independent decisions.
Every agent must leave the repository in a state where the next competent agent can determine:
what exists → what changed → what is verified → what remains → exactly what to do next.
