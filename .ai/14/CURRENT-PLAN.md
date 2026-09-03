CURRENT PLAN
1. Purpose
This is the master execution plan for the sanjanedits portfolio.
It defines:

what we are building
what the visitor should experience
the approved website copy
the dependency-aware order of work
how AI agents execute work
how work is handed between agents
how interrupted work is resumed
how parallel work is controlled
how changes are verified
how wasted effort, duplication, scope creep, regressions, and architectural drift are prevented

This document controls project execution.
Specialized .ai files remain authoritative for their own subjects.

2. Product Goal
Build a polished personal portfolio website for sanjanedits / Sanjan.
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
an effects demonstration
an unnecessarily complex technical project


3. PORTFOLIO EXPERIENCE SPECIFICATION
This section defines what the visitor should experience.
It is the product direction that implementation must serve.

3.1 First Impression
The first screen must immediately establish:
Sanjan + video editor + personality.
A visitor should understand what Sanjan does without needing to search through the site.
The first impression should be created primarily through:

typography
photograph
composition
concise messaging
controlled motion

The site must not depend on a long introduction to explain its purpose.

3.2 Experience Hierarchy
The overall narrative is:
Person → Identity → Work → Capability → Personality → Contact
The intended visitor journey is:
Who is this?
↓
What does he do?
↓
What does his work look like?
↓
Can he do what I need?
↓
What is he like?
↓
How do I contact him?
Every major section should support this progression.

4. APPROVED WEBSITE COPY
The following copy is approved and must be used exactly unless Sanjan explicitly changes it.
Agents must not rewrite, paraphrase, “improve,” or replace approved copy.

4.1 Navigation
Brand:
sanjanedits
Navigation:
Work · About · Contact
The brand represents the portfolio identity.

4.2 Hero
Brand/name:
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

4.3 Work Section
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

unless Sanjan explicitly changes it.

4.4 Video Section
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

4.5 What I Do
Heading:
What I Do
Short-Form Video Editing

Reels, Shorts, and social content built around strong pacing and visual impact.

Creative Editing

Rhythm-driven cuts, transitions, effects, visual storytelling, and the details that give an edit its personality.

This section represents Sanjan's current editing services.
Long-form editing is NOT advertised.
Agents must not add long-form editing unless explicitly instructed.

4.6 About
The following copy is locked exactly as approved:

I’m Sanjan, a video editor focused on turning footage into edits with impact, emotion, and personality.
I look beyond simply putting clips together. I look for the moments that matter — an expression, a movement, a beat, a character — and build the edit around them.
The goal isn’t to make a video look edited. It’s to make the viewer feel it.
If you have footage that deserves more than a basic cut, let’s make something out of it.

Agents must not rewrite this copy.

4.7 Contact
Heading:
Got something in mind?
Supporting text:
Let’s talk about it.
Contact options:
Instagram: sanjanedits
WhatsApp: @sanjan.69
The actual production destinations are supplied by Sanjan.
Agents must never invent or guess contact URLs.

4.8 Projects Page
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

4.9 Footer
The footer uses:
Sanjan
Video Editor
sanjanedits
Instagram · WhatsApp
© 2026 Sanjan
The distinction is intentional:

personal name: Sanjan
professional role: Video Editor
brand identity: sanjanedits


5. HERO EXPERIENCE
The Hero is the strongest visual statement on the site.
It must establish identity and editing quality immediately.
5.1 Hero Composition
The Hero uses Sanjan's real photograph.
The photograph should feel integrated into the composition rather than appearing as a conventional profile card.
The composition should combine:

photograph
large typography
approved copy
clear visual hierarchy
controlled negative space
restrained accent treatment

The Hero must feel like an introduction to an editor's creative identity, not a résumé header.

5.2 Hero Motion
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
The exact animation implementation is not locked prematurely.
Use the lightest appropriate approach.
Preferred techniques:

CSS transforms
opacity
clipping
positioning
lightweight JavaScript
IntersectionObserver where appropriate

Do not introduce a heavy animation framework merely to create this effect.

5.3 Hero Requirements
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

6. WORK EXPERIENCE
The Work section appears near the top because the actual editing work is the strongest credibility signal.
The homepage contains:

1 strongest featured edit
4 supporting edits

The featured project receives greater visual emphasis.
Supporting projects remain visually connected to the same system.
The presentation should make the work feel like the main product rather than thumbnails inside a generic template.

7. VIDEO EXPERIENCE
The video section gets a deliberate visual moment.
The approved copy is:
Have a look.
No generic “showreel” label is required.
The video should:

be easy to start
be visually prominent
load efficiently
use a meaningful poster
avoid unnecessary initial video loading
avoid audible autoplay


8. WHAT I DO EXPERIENCE
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
The section must not become a generic software/skills list.

9. ABOUT EXPERIENCE
The About section introduces the person behind the work.
Its purpose is to establish:

personality
context
creative identity
credibility
human connection

The approved copy from Section 4.6 must be used.
The section should not become a résumé or biography dump.

10. CONTACT EXPERIENCE
The Contact section is the conversion point.
Approved copy:
Got something in mind?
Let’s talk about it.
The available destinations are:

Instagram: sanjanedits
WhatsApp: @sanjan.69

The website should make contacting Sanjan straightforward.
The final production URLs are supplied by Sanjan.
Agents must not fabricate URLs.

11. PROJECTS PAGE EXPERIENCE
The Projects page provides additional work.
Approved copy:
More of My Work

Have a look through some of my other edits.

CTA:
See More on Instagram
The page does not claim to be the complete portfolio.
The broader collection of work is available through Instagram.
The page may contain selected additional projects for which Sanjan provides the necessary media.

12. PORTFOLIO CONTENT RULE
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

If required information is missing, the agent must:

use an explicitly approved placeholder
leave the feature incomplete
or mark the task BLOCKED

It must not fabricate content.

13. VISUAL DIRECTION
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

14. MOTION DIRECTION
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

15. RESPONSIVE EXPERIENCE
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

16. TECHNICAL ARCHITECTURE
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

17. VIDEO ARCHITECTURE
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

Cloudinary URLs are supplied by Sanjan.
Agents must use the exact supplied URLs.
Agents must never:

invent URLs
guess URLs
replace URLs with their own
modify production URLs without authorization


18. MEDIA RESPONSIBILITY
Responsibility is separated clearly.
Sanjan provides

final profile photograph
final project selection
project metadata
Cloudinary URLs
showreel
final Instagram URL
final WhatsApp/contact URL
final personal/service claims

Agent implements

media integration
rendering
playback
loading behavior
error handling
responsive behavior
accessibility
verification

The agent must never fabricate missing production media.

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
Phase 0 — State Control

accurate current state
accurate execution plan
design decisions
active-task control
repository understanding

Phase 1 — Hero

Hero structure
photograph integration
desktop composition
mobile composition
scroll-linked transition
reduced-motion behavior
verification

Phase 2 — Selected Work

five-project presentation
featured project
supporting projects
posters
metadata
interaction

Phase 3 — Video System

reusable playback
dialog
focus management
on-demand loading
error handling
mobile behavior

Phase 4 — Real Media

profile photograph
five projects
posters
Cloudinary URLs
showreel

Phase 5 — Supporting Sections

What I Do
Editing Philosophy if retained in the final design
About
Contact

Phase 6 — Projects Page

additional selected projects
centralized project data
categories if actually required
filtering only if useful
playback
Instagram CTA

The Projects page must not imply that all videos are hosted on the website.
Phase 7 — Refinement

motion
responsive behavior
interactions
visual polish

Phase 8 — Verification

functionality
responsive behavior
accessibility
performance
SEO/sharing
final content

Phase 9 — Production

Git review
deployment
live verification

The order may change only when a real dependency requires it.

21. ONE ACTIVE TASK RULE
There must be exactly one ACTIVE TASK for the project at any given time.
Example:
HERO-02 — Implement desktop Hero composition
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

22. ONE TASK OWNER RULE
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

23. STRICT TASK SCOPE
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

24. NO WORK-AHEAD RULE
Agents must not work ahead of the roadmap.
If the active task is:
HERO-01 — Implement Hero structure
the agent must not also:

redesign project cards
build the video system
populate the archive
integrate Cloudinary
rewrite the Projects page

Understanding future work does not authorize implementation.
The next task begins only after explicit assignment.

25. NO UNREQUESTED REFACTORING
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

26. MINIMUM-CHANGE PRINCIPLE
Use the smallest safe implementation that satisfies the active task.
Prefer:

localized changes
existing architecture
existing utilities
existing modules
existing design tokens

Avoid unnecessary rewrites.

27. BEFORE CODING
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

28. CHANGE IMPACT CHECK
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

29. PROTECTED DECISIONS
Current protected decisions include:

personal identity: Sanjan
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
approved website copy in Section 4
short-form editing as the advertised editing focus
no long-form editing claim
Instagram as the destination for the broader body of work

If an active task conflicts with a protected decision:
STOP.
Explain:

what conflicts
why it conflicts
possible alternatives

Do not silently override a protected decision.

30. PARALLEL AGENT RULE
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

31. INTERRUPTED WORK
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

32. HANDOFF STATE
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

33. TASK STATES
Every task uses one of:
NOT STARTED
READY
ACTIVE
PARTIAL
BLOCKED
VERIFIED
ABANDONED
Only VERIFIED means the acceptance criteria have been satisfied.

34. MANDATORY STOP RULE
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

35. CHECKPOINT STRATEGY
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

The purpose is recovery and traceability.
A checkpoint does not prove correctness.

36. VERIFICATION CONTRACT
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

37. DEFINITION OF DONE
A task is complete only when:

implementation exists
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

38. STOP CONDITIONS
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

39. GIT RECOVERY BOUNDARY
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

40. EFFICIENCY PRINCIPLES
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


41. NIM / API BUDGET AWARENESS
When working through a model or API with token, rate, or context limits, agents must work efficiently within those constraints.
Agents must avoid unnecessary:

full-repository rereads
repeated searches
redundant tool calls
oversized prompts
repeated explanations
unrelated analysis
unnecessary file rewrites

If an API rate/token limit is reached:

stop safely
preserve the current repository state
preserve the active-task handoff state
do not restart the task
allow the next available session/agent to resume from the checkpoint

Rate limits must never cause the project to lose progress.

42. HUMAN DECISION GATES
Explicit user control is required for:

final project selection
final profile photograph
major visual direction changes
major architecture changes
significant dependency additions
changing protected decisions
final showreel selection
final production content
deployment approval

Agents may prepare options but must not invent user decisions.

43. DOCUMENTATION RESPONSIBILITIES
.ai/12/CURRENT-STATE.md
Answers:
What is true right now?
.ai/13/DESIGN-DECISIONS.md
Answers:
Why was an important decision made?
.ai/14/CURRENT-PLAN.md
Answers:
What are we building, what content is approved, what are we doing next, and how must agents execute it?
Do not duplicate these responsibilities.

44. CURRENT EXECUTION STATE
The repository already contains the project foundation and .ai specification system.
The project is not greenfield.
The product direction and approved copy are defined above.
Implementation must proceed from the actual repository state rather than restarting the project.

45. CURRENT ACTIVE TASK
Task ID:
STATE-01
Task:
Verify that CURRENT-STATE accurately reflects the actual repository before implementation begins.
Status:
READY
Scope:
Documentation/state verification only.
No visual redesign is part of this task.
Acceptance criteria:

CURRENT-STATE matches the actual repository
stale claims are corrected
current plan is consistent with actual state
next implementation task is explicitly identified
no unrelated application changes are made


46. NEXT TASK
After STATE-01 becomes VERIFIED:
HERO-01 — Inspect the existing Hero implementation and define the exact modification boundary.
HERO-01 must be explicitly assigned before implementation begins.
No agent may begin HERO-02 or any later task while HERO-01 is active.

47. FINAL OPERATING PRINCIPLE
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
