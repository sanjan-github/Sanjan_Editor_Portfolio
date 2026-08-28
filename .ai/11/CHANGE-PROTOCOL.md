CHANGE PROTOCOL
1. Purpose
This document defines the mandatory process for modifying the sanjanedits portfolio.
The project is developed with multiple AI coding agents and models.
Different agents may have different coding habits, assumptions, and interpretations.
Therefore:
Every change must follow the same controlled process regardless of which AI model performs it.
The objective is to prevent:

Unintended changes
Scope creep
Architecture drift
Visual regressions
Accessibility regressions
Performance regressions
Broken existing features
Duplicate implementations
AI-generated rewrites of working code
Conflicting project decisions


2. Core Rule
Make the smallest safe change that fully satisfies the request.
Do not change unrelated code merely because it could be improved.
A requested change is not permission to redesign nearby systems.

3. Source-of-Truth Hierarchy
When instructions conflict, use this priority:
1. Explicit current user request
2. 00-PROJECT-CONTEXT.md
3. 01-ARCHITECTURE.md
4. 02-DESIGN-SYSTEM.md
5. 03-UX-RULES.md
6. 04-HTML-RULES.md
7. 05-CSS-RULES.md
8. 06-JS-RULES.md
9. 07-PERFORMANCE-RULES.md
10. 08-MEDIA-RULES.md
11. 09-ACCESSIBILITY-RULES.md
12. 10-GITHUB-RULES.md
13. 12-CURRENT-STATE.md
14. 13-DESIGN-DECISIONS.md
15. 14-CURRENT-PLAN.md
16. Existing implementation
17. AI/model preference

An AI agent must not override a higher-priority project rule because it personally prefers another approach.

4. Required Reading Before Editing
Before making a meaningful code change, the agent must identify the relevant project rules.
At minimum:
00-PROJECT-CONTEXT.md
01-ARCHITECTURE.md
11-CHANGE-PROTOCOL.md
12-CURRENT-STATE.md

Then read the domain-specific files relevant to the task.
Examples:
HTML change
Read:
04-HTML-RULES.md

CSS/design change
Read:
02-DESIGN-SYSTEM.md
03-UX-RULES.md
05-CSS-RULES.md

JavaScript change
Read:
06-JS-RULES.md

Performance change
Read:
07-PERFORMANCE-RULES.md

Media/video change
Read:
08-MEDIA-RULES.md

Accessibility change
Read:
09-ACCESSIBILITY-RULES.md

Git/repository/deployment change
Read:
10-GITHUB-RULES.md

Do not edit first and read the rules afterward.

5. Inspect Before Editing
Before changing code:

Inspect the current repository state.
Identify the relevant files.
Read the relevant code.
Understand how the existing implementation works.
Identify dependencies between the requested area and other areas.
Determine the smallest safe change.

Do not rewrite code that has not been inspected.

6. Check Git State First
Before substantial work, inspect:
git status

If useful, also inspect:
git diff

and recent history:
git log --oneline -n 10

The agent must know whether uncommitted changes already exist.

7. Protect Existing User Work
Existing uncommitted changes must be treated as potentially intentional.
Do not:

overwrite them
reset them
delete them
revert them
reformat them
silently incorporate them

unless the current task explicitly requires it.
If unrelated user changes are present, work around them.

8. Change Classification
Before editing, classify the task.
Category A — Local change
Examples:

Button color
Card hover
Section spacing
Text correction

Expected scope:
One component or small region.
Category B — Feature change
Examples:

Add video modal
Add project filter
Add mobile navigation

Expected scope:
A defined feature plus directly related files.
Category C — Architectural change
Examples:

Change video provider
Replace vanilla JS
Change deployment architecture
Change project-data architecture

Expected scope:
Requires explicit architectural consideration and documentation.
Do not treat Category C as an ordinary feature change.

9. Scope Declaration
Before editing a meaningful task, identify:
Goal:
What must change?

Scope:
Which component/feature is affected?

Files expected to change:
Which files are likely relevant?

Protected areas:
What must remain unchanged?

Acceptance criteria:
What must be true when finished?

The agent should use this to constrain its work.

10. No Scope Expansion
A request such as:

"Improve the project cards."

does not mean:

redesign the hero
change the navigation
replace typography
change the color palette
change Cloudinary architecture
rewrite the Projects page

unless those changes are genuinely required.

11. Minimal Diff Principle
Prefer the smallest viable diff.
For example:
If a one-line CSS change solves the issue:
Do not rewrite the component.
If changing one function solves the bug:
Do not refactor the entire module.
A small, understandable diff is safer for both humans and AI agents.

12. Preserve Existing Behavior
Unless explicitly requested, preserve:

Existing visual hierarchy
Existing responsive behavior
Existing navigation
Existing video loading strategy
Existing accessibility behavior
Existing performance characteristics
Existing project data structure
Existing external links
Existing deployment behavior


13. No Opportunistic Refactoring
Do not combine a feature change with unrelated cleanup.
For example:
Task:

"Fix video modal closing."

Do not simultaneously:

rename every function
move all files
rewrite project rendering
replace the CSS architecture
introduce a library

unless the task genuinely requires it.

14. No Unrequested Dependency Changes
Do not add dependencies without explicit justification.
Before adding a dependency:

Determine whether native HTML/CSS/JS can solve the problem.
Evaluate performance cost.
Evaluate maintenance cost.
Evaluate AI-agent complexity.
Document the decision if the dependency is significant.


15. No Architecture Changes by Preference
An AI agent must not change:
Vanilla JS
→ React

CSS
→ Tailwind

Native video
→ video library

Cloudinary
→ another provider

simply because the model prefers that architecture.
Architectural changes require explicit approval.

16. Existing Pattern First
Before creating a new component or utility, inspect the existing code for a reusable pattern.
Prefer:
reuse existing component

over:
create nearly identical component

unless a genuine semantic difference exists.

17. Single Source of Truth
Do not introduce a second source of truth for:

project data
colors
typography
video URLs
navigation behavior
project categories
component state

Use the existing authoritative location.

18. Before Creating a New File
Ask:

Does an existing file already own this responsibility?
Does the new file create unnecessary fragmentation?
Does the architecture require the separation?
Will another AI agent easily understand why the file exists?

Do not create files merely to make the project appear more structured.

19. Before Renaming a File
Check all references:

HTML
CSS
JavaScript imports
links
documentation
deployment configuration
AI instructions

A rename must not create broken references.

20. Before Deleting a File
Verify:

No code references it.
No deployment process references it.
No AI instruction references it.
It is not a required asset/configuration.
Its functionality is intentionally removed.

Do not delete files simply because they appear unused.

21. Implementation Order
For a meaningful feature:
UNDERSTAND
↓
PLAN
↓
IMPLEMENT
↓
VALIDATE
↓
REVIEW DIFF
↓
DOCUMENT
↓
COMMIT

Do not skip directly from request to large code rewrite.

22. Planning
The plan should be proportional to the task.
Small task
A brief internal scope is enough.
Medium task
List:

affected files
implementation sequence
validation requirements

Large task
Document:

architecture impact
dependencies
migration concerns
rollback strategy
testing plan

Do not over-plan trivial changes.

23. Implementation Rule
Implement one coherent change at a time.
Avoid changing:
hero
+
projects
+
about
+
contact

in one operation unless the requested task genuinely concerns all of them.

24. Visual Changes
When changing visual design:
Preserve:

Design tokens
Typography system
Existing component patterns
Accessibility
Responsive behavior

Do not interpret "make it better" as permission to invent a new visual language.

25. CSS Changes
When changing CSS:

Check existing tokens.
Check component ownership.
Keep selector specificity low.
Modify the narrowest relevant scope.
Test responsive states.
Check focus states.
Check reduced motion when relevant.

Do not add a global rule to solve a component-specific problem.

26. HTML Changes
When changing HTML:

Preserve semantic structure.
Preserve heading hierarchy.
Preserve accessible labels.
Preserve IDs used by JavaScript/CSS where possible.
Avoid unnecessary wrappers.
Keep source order logical.

Do not solve visual problems by corrupting semantics.

27. JavaScript Changes
When changing JavaScript:

Identify the owning module.
Preserve existing state architecture.
Avoid global state.
Avoid duplicate listeners.
Avoid unrelated refactoring.
Test keyboard behavior when interactive behavior changes.
Test error states where applicable.


28. Video Changes
When modifying video behavior:
Verify that the change preserves:

Poster-first loading
On-demand video loading
Cloudinary delivery
No unwanted audible autoplay
Video cleanup
Mobile playback
Keyboard/dialog behavior

A video-related request does not authorize replacing the media architecture.

29. Accessibility Changes
When modifying accessibility:
Check:

keyboard navigation
focus
accessible names
state communication
screen-reader behavior
reduced motion
touch targets
contrast where relevant

Do not add ARIA merely to "make it accessible."

30. Performance Changes
When modifying performance:
Identify:
Problem
↓
Actual bottleneck
↓
Proposed solution
↓
Expected impact
↓
Measured result where practical

Do not introduce an optimization merely because it sounds sophisticated.

31. Media Changes
When modifying media:
Check:

file size
image dimensions
poster quality
Cloudinary delivery
video loading timing
mobile behavior
layout stability

Do not replace a high-quality asset with a visibly inferior one merely to reduce bytes.

32. Browser Behavior
Do not assume code works because it looks correct in source.
For meaningful UI changes, test actual browser behavior.

33. Required Validation
After changing code, perform validation appropriate to the task.
At minimum:
Structural

No obvious broken markup
No broken imports
No missing assets

Functional

Requested behavior works

Regression

Nearby existing behavior still works

Responsive

Mobile
Desktop


34. Accessibility Validation
For interactive changes, test:

Tab
Shift+Tab
Enter
Space
Escape where relevant
visible focus
screen-reader names where practical


35. Performance Validation
For media/layout/performance-sensitive changes, check:

Network panel
Unexpected asset requests
Video requests
Image sizes
console errors
responsiveness
layout shifts


36. Browser Console
Before declaring a meaningful change complete:
Check for relevant console errors.
Do not knowingly leave new errors caused by the change.
Existing unrelated errors should be identified rather than silently ignored.

37. Network Validation
For media changes, verify:
Does the poster load?
Does the video stay unloaded before interaction?
Does the selected video load after interaction?
Are unrelated videos being requested?

Unexpected video requests are a performance regression.

38. Responsive Validation
At minimum, inspect:
Mobile
Tablet
Desktop

Do not assume desktop CSS automatically works on mobile.

39. Reduced Motion Validation
If animation is changed:
Test with:
prefers-reduced-motion: reduce

Verify that essential functionality remains intact.

40. Diff Review
After implementation:
git diff

must be inspected for meaningful changes.
Look specifically for:

unrelated files
unrelated components
accidental formatting churn
accidental deletion
duplicated code
changed dependencies
unexpected configuration changes

GitHub's review guidance similarly recommends examining changed files and diffs individually rather than treating a proposed change as one opaque block. (docs.github.com)

41. File-by-File Review
For substantial changes, review each modified file separately.
For every file ask:
Why did this file change?
Was it necessary?
Does the diff match the requested scope?
Did anything unrelated change?


42. Unexpected Diff Rule
If the agent discovers unexpected modifications:
Stop and investigate.
Do not automatically accept them.
Examples:

A hero stylesheet changed during a projects task.
Font declarations changed during a video fix.
Project data changed during a navigation task.

Unexpected changes are signals of scope drift.

43. Revert Unnecessary Changes
If unrelated changes were introduced by the agent, remove them before completing the task.
Do not leave them simply because they "look fine."

44. No Silent Cleanup
Do not quietly clean unrelated code during a requested task.
If cleanup is valuable, record it as a separate task.
This preserves traceability.

45. Validation Before Commit
Do not create the commit until:

Requested behavior works.
Relevant regressions are checked.
Diff has been reviewed.
No unintended files are staged.
No secrets are included.


46. Staging
Prefer intentional staging.
Use:
git add <specific-files>

when practical.
Do not blindly rely on:
git add .

for every task.

47. Staged Diff
Before committing:
git diff --cached

must be inspected for substantial changes.
Verify:

correct files
correct content
no secrets
no temporary files
no unrelated changes


48. Commit Rule
A commit should answer:
What coherent change does this commit represent?
Examples:
feat: add video dialog
fix: restore focus after dialog close
perf: defer portfolio video loading
style: refine hero typography
docs: update media architecture


49. Commit Scope
Do not combine unrelated changes into one commit.
Bad:
feat: improve whole website

Better:
feat: build selected work section
feat: add video dialog
perf: defer portfolio videos


50. Checkpoint Commits
Before risky work:
Create a checkpoint when useful.
Example:
chore: checkpoint before project redesign

This creates a clear rollback boundary.

51. Feature Branch Rule
For substantial or risky changes, prefer:
git switch -c feature/<name>

Work there, validate, then merge into main.
Small low-risk changes may be performed directly on main when appropriate.

52. Main Branch Safety
Do not treat main as an experimentation area.
A production-ready main branch is valuable because it provides a clean fallback state.

53. No Force Push
AI agents must not force-push main.
Avoid:
git push --force

unless explicitly authorized for an exceptional, understood reason.

54. Destructive Git Commands
AI agents must not casually execute:
git reset --hard
git clean -fd
git push --force

These can destroy work/history.
They require explicit justification and authorization.

55. Existing Uncommitted Changes
If the repository contains existing uncommitted changes before a task:
Do not assume they belong to the current task.
Keep them intact.

56. Concurrent AI Agents
Do not have multiple AI agents editing the same files simultaneously without coordination.
Preferred:
Agent A
↓
finish
↓
review
↓
commit/checkpoint
↓
Agent B


57. AI Handoff
Before handing the repository to another AI model:

Save changes.
Review the diff.
Create a checkpoint/commit when appropriate.
Update 12-CURRENT-STATE.md.
Record important decisions in 13-DESIGN-DECISIONS.md.
Ensure no temporary files remain.


58. Current State Update
Update 12-CURRENT-STATE.md after meaningful milestones.
Include:

what was completed
what remains
known bugs
known technical debt
important current behavior

Do not update it for every trivial color change.

59. Design Decision Update
Update 13-DESIGN-DECISIONS.md when a durable project decision changes.
Examples:

New dependency
Architecture change
New video strategy
New hosting behavior
Major visual-system decision


60. Plan Update
Update 14-CURRENT-PLAN.md when:

a phase is completed
priorities change
a major task is added/removed
implementation order changes

Do not use the plan file as a change log.

61. Documentation Consistency
After an architectural or durable behavior change, check whether any .ai documents now contradict the implementation.
Fix contradictions.
Do not leave:
Architecture says A
Current implementation says B
Current state says C

without documenting the transition.

62. Change Rejection Conditions
A change must not be considered complete if it causes any of the following without explicit approval:

broken existing functionality
accessibility regression
significant performance regression
unintended design-system change
unexpected dependency addition
unexpected file modification
unexpected media loading
broken mobile behavior
broken GitHub Pages deployment
exposed secret
architecture drift


63. User Request Ambiguity
When the request is vague but the intended scope is obvious from context:
Use the existing project rules and make a conservative improvement.
Do not interpret vague wording as permission for an unrestricted rewrite.
Examples:

"Make the card feel smoother."

Means:

improve the card interaction within existing architecture.

It does not mean:

redesign the entire page.


64. "Make It Better" Rule
When asked to "make it better," evaluate in this order:

Hierarchy
Spacing
Typography
Composition
Usability
Interaction
Accessibility
Performance
Decoration

Do not immediately add visual effects.

65. Model Uncertainty
If the AI agent is unsure how the existing code works:
Inspect it before changing it.
Do not guess.
If uncertainty remains:
Prefer the smallest reversible change rather than inventing architecture.

66. No Hallucinated Requirements
AI agents must not invent:

client requirements
brand requirements
technical requirements
performance targets
content
project metadata
user preferences

Use only:

explicit user instructions
documented project rules
verified current implementation


67. No Hallucinated Assets
Do not reference:
/assets/images/new-photo.webp

unless the asset actually exists or the task explicitly creates it.
Do not invent:

image paths
video URLs
Cloudinary IDs
Instagram URLs
icons


68. No Fake Portfolio Data
Do not create placeholder clients, testimonials, results, views, or other credibility claims.
Use documented real portfolio information only.

69. No Fake Technical Completion
Do not claim:
"Performance optimized"

unless the relevant implementation actually exists.
Do not claim:
"Cloudinary configured"

unless the URLs/integration actually work.
Do not claim:
"Accessibility fixed"

without testing the relevant behavior.

70. Validation Evidence
When reporting completion, distinguish between:
Verified
Actually tested/observed.
Assumed
Reasoned but not tested.
Not tested
Requires manual verification.
Do not present assumptions as facts.

71. Final Change Report
For meaningful changes, the agent should provide:
## Changed

- ...

## Files Modified

- ...

## Files Added

- ...

## Files Removed

- ...

## Validation

- ...

## Not Changed

- ...

## Performance Impact

- ...

## Accessibility Impact

- ...

The report should be concise and factual.

72. Final "Not Changed" Requirement
For localized changes, explicitly identify important protected areas that were intentionally untouched.
Example:
Not changed:
- Hero
- Navigation
- Project data
- Cloudinary strategy

This helps detect accidental scope expansion.

73. Regression Thinking
After every meaningful change ask:
What did this change touch?
What depends on that?
What could this accidentally break?

Test those areas.

74. Adjacent Component Check
If changing:
project-card

inspect:

project grid
video activation
mobile layout
filtering
project data

Do not assume a component exists in isolation.

75. Shared Token Check
If changing a value that may be shared:
Check whether it is a design token.
Do not hardcode a local replacement if the intended change is global.
Conversely, do not modify the global token when the change is only local.

76. Global vs Local Decision
Before changing a global rule, ask:
Is the requested behavior actually global?
If no:
Keep the change local.
This is one of the most important safeguards against AI-generated regressions.

77. Desktop vs Mobile Scope
If a visual bug exists only on desktop:
Do not alter mobile CSS unnecessarily.
If a bug exists only on mobile:
Do not modify desktop behavior unnecessarily.

78. Accessibility vs Visual Scope
If a focus ring is invisible:
Fix the focus ring.
Do not redesign the entire interaction system.

79. Performance vs Visual Scope
If a poster is too large:
Optimize the poster.
Do not remove portfolio content unless necessary.

80. Video vs Project Scope
If one project's video fails:
Fix that project's media reference where possible.
Do not rewrite the entire video architecture.

81. Deployment vs Code Scope
If GitHub Pages paths are broken:
Fix deployment/path configuration.
Do not redesign application architecture.

82. Rollback Principle
Every substantial change should be reversible through Git.
Prefer changes that can be cleanly reverted.
Avoid mixing unrelated work into the same commit because it makes rollback harder.

83. Failure Handling
If a change causes substantial regressions:

Stop adding unrelated fixes.
Identify the change responsible.
Revert or restore the broken change when appropriate.
Return to a known-good state.
Re-evaluate the approach.

Do not endlessly patch a fundamentally wrong implementation.

84. When to Reconsider the Approach
Stop and reconsider when:

The fix requires many unrelated files.
Specificity keeps increasing.
The same code is duplicated.
Multiple new state variables are required for a small feature.
A native HTML/CSS feature could solve the problem.
The change conflicts with architecture.
The implementation is becoming difficult to explain.

Complexity is a signal to reassess.

85. No "While We're Here" Changes
Do not add:
"While we're here, let's..."

changes unless they are explicitly requested as a separate task.
This includes:

renaming
refactoring
redesigning
optimizing unrelated code
dependency upgrades


86. No Personality-Driven Coding
The project should not change because an AI model thinks:

"I would normally do this differently."

Documented project decisions take precedence.

87. Agent-Independent Process
The exact AI system does not matter.
Whether the change is made by:

Codex
Antigravity
Cline
Qwen
DeepSeek
another coding model

the same protocol applies.

88. Human Review Boundary
AI agents may:

inspect
plan
implement
test
report

But significant architecture changes require explicit human approval.

89. Definition of Done
A change is complete only when:
Requested behavior works
        +
Existing relevant behavior still works
        +
Relevant accessibility remains intact
        +
Relevant performance remains acceptable
        +
Diff is reviewed
        +
No unintended files are included
        +
Documentation is updated when necessary


90. Final Mandatory Workflow
Every meaningful AI-assisted code change should follow:
USER REQUEST
     ↓
READ RELEVANT RULES
     ↓
CHECK GIT STATE
     ↓
INSPECT CURRENT IMPLEMENTATION
     ↓
DEFINE SCOPE
     ↓
IDENTIFY PROTECTED AREAS
     ↓
IMPLEMENT MINIMAL CHANGE
     ↓
TEST REQUESTED BEHAVIOR
     ↓
CHECK REGRESSIONS
     ↓
CHECK RESPONSIVE BEHAVIOR
     ↓
CHECK ACCESSIBILITY
     ↓
CHECK PERFORMANCE WHEN RELEVANT
     ↓
INSPECT git diff
     ↓
REMOVE UNRELATED CHANGES
     ↓
UPDATE PROJECT STATE/DECISIONS IF NEEDED
     ↓
STAGE INTENTIONALLY
     ↓
REVIEW git diff --cached
     ↓
COMMIT


91. Non-Negotiable Rules

Inspect before editing.
Read relevant project rules before editing.
Check Git state before meaningful changes.
Treat existing uncommitted work as protected.
Define the scope of the task.
Make the smallest safe change.
Do not expand scope without a reason.
Do not rewrite working code merely because an AI model prefers another style.
Do not refactor unrelated code.
Do not introduce dependencies casually.
Do not alter architecture without authorization.
Preserve existing functionality unless the task requires change.
Preserve design-system consistency.
Preserve accessibility.
Preserve performance.
Preserve mobile behavior.
Preserve media-loading strategy.
Do not invent requirements or assets.
Do not invent portfolio claims or data.
Do not use fragile selectors to make localized changes.
Do not duplicate sources of truth.
Do not modify global rules for local problems.
Do not rely on hover for required functionality.
Test meaningful changes in an actual browser.
Check the console after meaningful changes.
Check the network when modifying media/performance.
Review git diff.
Review git diff --cached before commit.
Stage intentionally.
Keep commits coherent.
Use branches for substantial risky work.
Do not force-push main.
Do not use destructive Git commands casually.
Keep AI handoffs explicit.
Update CURRENT-STATE.md after meaningful milestones.
Update DESIGN-DECISIONS.md when durable decisions change.
Keep AI documentation consistent with implementation.
If unexpected changes appear, investigate them.
If a solution becomes disproportionately complex, reconsider it.
Every meaningful change must be understandable, reviewable, testable, and reversible.

