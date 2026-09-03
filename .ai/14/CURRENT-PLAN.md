CURRENT PLAN
1. Purpose
This is the master execution plan for the sanjanedits portfolio.
It defines:

what we are building
the order in which it should be built
dependencies between work
how AI agents must execute the work
how interrupted work must be resumed
how changes must be verified
what must be considered before making changes

This document is an execution plan, not a general coding-rules document.
The other .ai files remain authoritative for their respective subjects.

2. Product Goal
Build a polished personal portfolio website for sanjanedits / Sanjan, designed primarily to convert visitors into potential video-editing clients.
The website must communicate three things immediately:

Sanjan is a real person.
Sanjan is a video editor.
The quality of the actual work is the primary proof.

The website must feel:

cinematic
premium
modern
editorial
energetic
intentional
lightweight

It must not feel like:

a generic developer portfolio
a gaming/neon template
an agency pretending to be larger than it is
an over-animated showcase where effects overpower the work


3. Final Website Structure
The website consists of two primary pages.
Homepage
Navigation
↓
Hero
↓
Selected Work
↓
Showreel
↓
What I Edit
↓
Editing Philosophy
↓
About Sanjan
↓
Contact CTA
↓
Footer
Projects Page
Navigation
↓
Archive Hero
↓
Category Filters
↓
Project Grid
↓
Video Playback
↓
Footer
The homepage is the primary conversion experience.
The Projects page is the deeper portfolio archive.

4. Hero Direction
The hero is one of the highest-priority visual experiences.
The final direction is a photo-led hero, using Sanjan's real profile photograph rather than an invented or artificial identity.
The hero should establish identity and editing discipline immediately.
The photograph should not simply sit as a static profile image.
As the visitor scrolls, the photograph and surrounding typography should participate in a controlled transition.
The intended motion language is:
arrival → tension → movement → transformation → reveal
The animation must feel connected to scrolling rather than being a random entrance animation.
The hero must remain understandable without animation.
The hero must work on:

mobile
tablet
desktop
reduced-motion environments

The exact implementation should be determined during development and testing rather than prematurely locked to a specific animation library or technique.
Do not introduce GSAP, Three.js, React, or another heavy framework merely to achieve the effect.
CSS transforms, opacity, clipping, positioning, and lightweight JavaScript/scroll observation should be preferred where sufficient.

5. Visual System
The visual direction is dark cinematic editorial.
Current locked foundation:
Background:
#090909
Primary text:
#F5F5F2
Secondary text:
#8A8A8A
Accent:
#C8FF00
Typography:

Plus Jakarta Sans for display
Inter for body/UI

The design should use:

strong typography
large scale differences
negative space
asymmetric/editorial composition
restrained accent usage
cinematic imagery
controlled motion

Do not add visual effects simply because they are technically possible.
Every effect must have a communication or interaction purpose.

6. Portfolio Content Strategy
The homepage will present five curated projects.
Structure:

1 strongest featured edit
4 supporting edits

The Projects page will eventually contain approximately 45 published edits.
The project selection must come from Sanjan.
AI agents must not invent projects, titles, clients, results, testimonials, awards, experience claims, or performance statistics.
The portfolio must use actual work as the primary credibility mechanism.

7. Video Architecture
Portfolio videos will be hosted through Cloudinary.
GitHub must remain lightweight.
The repository should contain:

HTML
CSS
JavaScript
posters
icons
lightweight static assets

Videos must not be stored directly in the repository.
The default playback model is:
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
Video playback must be intentional.
The video system must support:

desktop
mobile
keyboard interaction
focus management
Escape-to-close
error handling
cleanup
reduced motion where relevant


8. Project Data Architecture
Project information must remain centralized.
Rendering logic must be separate from project data.
The project architecture should allow adding or changing projects without rewriting the rendering system.
Conceptually:
project data
    ↓
rendering
    ↓
project card
    ↓
video interaction

The exact implementation may evolve if the change improves maintainability without violating the existing architecture.

9. Responsive Strategy
Responsiveness is not a final afterthought.
Every major feature must be designed with responsive behavior in mind.
Required targets:

small mobile
large mobile
tablet
laptop
desktop
large desktop

The hero is especially important because its composition and scroll behavior may need substantially different treatment on mobile.
Do not force the desktop composition onto mobile.

10. Accessibility Strategy
Accessibility is a first-class requirement.
Target:
WCAG 2.2 AA
The implementation must consider:

semantic HTML
heading hierarchy
keyboard navigation
visible focus
accessible names
navigation state
video dialog behavior
image alternative text
contrast
touch targets
reduced motion
zoom/reflow
screen-reader behavior

Accessibility must be considered during implementation, not repaired at the end.

11. Performance Strategy
The portfolio is media-heavy, therefore performance is a design constraint.
Priorities:

fast initial rendering
minimal JavaScript
minimal dependencies
poster-first media
on-demand video loading
appropriately sized images
limited font weights
no unnecessary third-party scripts
no unnecessary continuous animation

The visual richness of the site must not require a technically heavy implementation.
Core Web Vitals should be checked during final validation.

12. Development Philosophy
The project must be developed incrementally.
Do not attempt to implement the entire portfolio in one giant AI task.
Each task must have:

a clear objective
defined boundaries
dependencies
acceptance criteria
verification
a clean stopping point

A task is not complete merely because code was generated.
It is complete only after the relevant behavior has been inspected and verified.

13. Dependency-Aware Execution
Implementation order must follow actual dependencies.
The general sequence is:
Understand current state
↓
Stabilize foundation
↓
Build/refine visual structure
↓
Build interactions
↓
Integrate real media
↓
Responsive refinement
↓
Motion refinement
↓
Accessibility verification
↓
Performance verification
↓
SEO/sharing
↓
Final content review
↓
Production deployment
The exact ordering of individual tasks may change when implementation reveals a dependency.
Agents must explain such changes rather than silently changing the plan.

14. AI Agent Startup Protocol
Before modifying the project, every AI agent must:

Read the relevant .ai documentation.
Inspect the actual repository.
Inspect the current Git state.
Determine what is already implemented.
Determine what is incomplete.
Identify the exact requested task.
Identify dependencies and affected files.
Check whether previous work is partially complete.

Agents must trust the repository over stale assumptions.
They must never restart an already completed feature simply because their task description describes it as unfinished.

15. Task Boundaries
AI agents must work on small, logically complete units.
Bad task:

Build the entire portfolio.

Good task:

Implement the hero photo composition and responsive layout without changing project sections.

A task should be small enough that:

its changes can be reviewed
its behavior can be tested
another agent can understand its stopping point
an interruption does not leave the project ambiguous


16. Before Changing Code
Before making a meaningful change, the agent must identify:

files that will change
existing code that depends on them
expected visual effect
responsive consequences
accessibility consequences
performance consequences
interaction consequences
future integration consequences

If a change creates unnecessary coupling or technical debt, reconsider the approach.
Do not optimize one component while creating problems elsewhere.

17. Preserve Existing Work
Agents must make localized changes whenever possible.
Do not rewrite entire files when a targeted change is sufficient.
Do not replace functioning architecture merely because another implementation appears cleaner.
Do not remove working functionality without explicit reason.
Before modifying a shared component, determine where it is used.
Before modifying global CSS, determine which components depend on the affected rules.
Before modifying JavaScript modules, determine their callers and responsibilities.

18. Interrupted Work / Agent Handoff Protocol
An agent may stop because of:

credit limits
context limits
tool failure
user interruption
environment failure
task completion

The next agent must resume from the repository state, not restart from the beginning.
When interrupted:

inspect Git status
inspect the diff
inspect modified files
identify completed portions
identify incomplete portions
run relevant validation
continue only from the remaining work

Never discard partial work merely because it was created by another agent.
Never assume partial work is correct without inspection.

19. Checkpoint Strategy
Meaningful milestones should produce a clean, understandable checkpoint.
A checkpoint should represent a coherent state such as:

hero structure complete
hero responsive behavior complete
project-card system complete
video dialog complete
real media integrated
responsive pass complete
accessibility pass complete

Do not create meaningless checkpoints for every tiny CSS change.
The purpose of checkpoints is recovery and traceability.

20. Verification Protocol
After each meaningful implementation task, the agent must verify the affected behavior.
Verification should match the change.
Examples:
Hero change:

desktop
mobile
scroll behavior
reduced motion
overflow

Navigation change:

desktop
mobile
keyboard
focus
menu state

Video change:

opening
playback
closing
Escape
focus restoration
failure state
mobile

CSS change:

affected components
responsive behavior
overflow
visual regressions

Do not claim verification that was not actually performed.

21. Definition of Done
A task may be marked complete only when:

implementation exists
relevant .ai rules are followed
existing functionality remains intact
relevant responsive behavior is checked
relevant accessibility is checked
relevant performance implications are checked
the diff has been reviewed
no obvious unfinished implementation remains
documentation is updated when the project's actual state changes

Use explicit status where necessary:

Implemented
Verified
Partially verified
Not verified
Blocked


22. Change Management
Before making a change that affects architecture, shared components, design direction, media architecture, or major interaction behavior, the agent must determine whether it conflicts with an existing locked decision.
If it does, the agent must stop and document the conflict rather than silently changing the architecture.
Important design decisions belong in:
.ai/13/DESIGN-DECISIONS.md
Current factual state belongs in:
.ai/12/CURRENT-STATE.md
Execution roadmap belongs here:
.ai/14/CURRENT-PLAN.md
Do not duplicate these responsibilities.

23. Media Integration Strategy
Real media is introduced only after the underlying presentation and playback architecture is stable enough to support it.
The media sequence is:

final profile photograph
five selected homepage projects
project posters
Cloudinary videos
showreel
full archive
final Instagram links
final WhatsApp contact link

AI agents must never fabricate missing media or URLs.
Placeholder states must remain honest until real assets are supplied.

24. Motion Strategy
Motion should support hierarchy and storytelling.
Primary motion priorities:

hero
section reveals
project interactions
navigation transitions
video dialog
supporting micro-interactions

Motion should generally use:

transform
opacity
clip-path where appropriate
IntersectionObserver
lightweight pointer interactions

Avoid continuous animation unless it provides meaningful value.
Avoid animation that delays access to content.
Reduced-motion behavior is mandatory.
A custom cursor is optional and must earn its complexity through actual UX value.

25. Testing Order
Testing is continuous, but the final dedicated validation sequence is:

functionality
responsive behavior
accessibility
performance
SEO/sharing
final content
production deployment
production verification

Testing must happen against the actual implementation, not against assumptions.

26. Production Requirements
The final website must:

work on GitHub Pages
use Cloudinary for portfolio video delivery
remain lightweight
work on mobile
remain accessible
contain no fake claims
contain no accidental debug content
contain no broken links
contain no missing production media
expose no private credentials

The final production URL must be verified before the project is considered finished.

27. Current Execution Phase
The repository already contains the project foundation and .ai specification system.
The current implementation is therefore not a greenfield project.
The next major implementation focus is:
Refine/build the final hero experience around Sanjan's real photograph and the intended scroll-driven visual transition.
Before that implementation begins, the project documentation must accurately describe the current repository state.
After the documentation is reconciled, implementation proceeds incrementally from the hero rather than restarting the project.

28. Immediate Execution Order
The current intended order is:
Step 1
Reconcile .ai/12/CURRENT-STATE.md and .ai/14/CURRENT-PLAN.md with the actual repository.
Step 2
Inspect and finalize the existing homepage foundation before changing visual behavior.
Step 3
Implement the photo-led hero composition.
Step 4
Implement and test the hero's scroll-driven transition.
Step 5
Perform responsive and reduced-motion refinement for the hero.
Step 6
Build/refine Selected Work using the five real curated projects.
Step 7
Finalize the reusable video interaction system.
Step 8
Integrate Cloudinary and real portfolio media.
Step 9
Build/refine the showreel.
Step 10
Build/refine capability, philosophy, and About sections.
Step 11
Build/refine the Projects archive and centralized project data.
Step 12
Populate the complete real portfolio.
Step 13
Perform motion and interaction polish.
Step 14
Perform dedicated responsive testing.
Step 15
Perform accessibility audit.
Step 16
Perform performance audit.
Step 17
Finalize SEO and sharing metadata.
Step 18
Perform final content/trust review.
Step 19
Perform production Git review and deployment.
Step 20
Verify the live production website.

29. Critical Rule
Never optimize for the appearance of progress. Optimize for verified progress.
Generating more code is not progress if the result is unverified, duplicates existing work, introduces regressions, or leaves the next agent unable to understand the project's state.
Every agent should leave the repository in a state that another competent agent can inspect and continue without guessing.
