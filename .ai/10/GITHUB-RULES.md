GITHUB RULES
1. Purpose
This document defines how the sanjanedits portfolio repository must be structured, versioned, reviewed, deployed, and maintained using Git and GitHub.
The repository is the source-controlled home of the website code.
GitHub is responsible for:

Source control
Version history
Collaboration with AI coding agents
GitHub Pages deployment
Issue/commit tracking where useful
Repository-level security

GitHub is not the primary storage location for portfolio videos.
Videos are stored and delivered through Cloudinary.

2. Repository Role
The repository should contain:
Website source code
+
Lightweight static assets
+
AI project documentation
+
Configuration

The repository should NOT become a media archive.
Do not use the Git repository as a substitute for Cloudinary.

3. Hosting
The website is hosted through:
GitHub Pages
The site must remain compatible with static GitHub Pages hosting.
Do not introduce requirements for:

Node.js runtime on the server
server-side rendering
backend APIs
databases
server-side authentication
server rewrites

unless the architecture is explicitly changed.
GitHub Pages publishes static websites directly from repository content and supports HTTPS.

4. GitHub Pages Limits
GitHub currently recommends keeping Pages source repositories within approximately 1 GB, published Pages sites within 1 GB, and documents a soft bandwidth limit of 100 GB/month. GitHub Pages also has other usage limits.
Therefore:

Keep the repository lightweight.
Do not store portfolio videos in Git.
Do not use GitHub Pages as a video CDN.
Do not create unnecessary large binary assets.
Use Cloudinary for video delivery.

These limits should be treated as architectural constraints rather than targets to approach.

5. Repository Structure
Recommended repository structure:
sanjan-portfolio/
│
├── .ai/
│   ├── 00-PROJECT-CONTEXT.md
│   ├── 01-ARCHITECTURE.md
│   ├── 02-DESIGN-SYSTEM.md
│   ├── 03-UX-RULES.md
│   ├── 04-HTML-RULES.md
│   ├── 05-CSS-RULES.md
│   ├── 06-JS-RULES.md
│   ├── 07-PERFORMANCE-RULES.md
│   ├── 08-MEDIA-RULES.md
│   ├── 09-ACCESSIBILITY-RULES.md
│   ├── 10-GITHUB-RULES.md
│   ├── 11-CHANGE-PROTOCOL.md
│   ├── 12-CURRENT-STATE.md
│   ├── 13-DESIGN-DECISIONS.md
│   └── 14-CURRENT-PLAN.md
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── css/
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   ├── sections.css
│   ├── animations.css
│   └── responsive.css
│
├── js/
│   ├── main.js
│   ├── navigation.js
│   ├── videos.js
│   └── projects.js
│
├── index.html
├── projects.html
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── README.md
└── .gitignore

The exact structure may evolve, but unnecessary structural complexity must be avoided.

6. Repository Naming
Use a clear repository name.
Preferred:
sanjan-portfolio

or:
sanjanedits-portfolio

Avoid meaningless names such as:
website-final
portfolio-new
portfolio2
test-site
my-site-final-final

The repository name should remain stable.

7. Default Branch
Use:
main

as the production/default branch.
The main branch represents the current production-ready state unless the project explicitly adopts another workflow.

8. Production Branch Principle
Treat main as important.
Do not use main as a scratchpad for experimental AI changes.
Before changes reach production:

Verify functionality.
Review the diff.
Check affected pages.
Test important responsive states.
Check console errors.
Check performance where relevant.


9. Branching Strategy
For small changes, direct work on main may be acceptable during solo development.
For significant changes, use a short-lived feature branch.
Examples:
feature/hero-redesign
feature/video-modal
feature/projects-filter
fix/mobile-nav
fix/video-loading
perf/poster-optimization

Do not create branches for every tiny text change.

10. Branch Names
Use:
feature/<short-description>
fix/<short-description>
perf/<short-description>
refactor/<short-description>
docs/<short-description>

Names should be lowercase and descriptive.

11. Branch Lifetime
Feature branches should remain short-lived.
Do not allow a branch to drift for weeks while main changes substantially unless there is a real reason.
Long-lived branches increase merge complexity and make AI-assisted development harder.

12. AI Agent Branch Safety
If an AI agent is performing a substantial change:
Prefer using a dedicated feature branch.
This provides a safe rollback point if the model:

rewrites unrelated code
introduces architecture drift
damages the design system
breaks another feature


13. Commit Philosophy
Commits should represent meaningful, coherent changes.
Good:
feat: build hero section
feat: add project video dialog
feat: add project filtering
perf: defer portfolio video loading
fix: restore focus after video close
style: refine selected work layout

Bad:
update
changes
fix
stuff
final
new
done


14. Conventional Commit Style
Prefer a simple conventional format:
type: description

Common types:
feat
fix
perf
style
refactor
docs
chore

The project does not need strict conventional-commit tooling unless a real need develops.

15. Commit Scope
A commit should ideally represent one coherent logical change.
Bad:
feat: redesign entire website + fix video + change fonts + add contact

Better:
feat: build contact section
fix: prevent duplicate video playback
style: refine display typography

Separate unrelated changes.

16. Commit Size
Avoid enormous AI-generated commits.
A commit containing:
3,000 changed lines
+
20 unrelated files

is difficult to review and difficult to roll back.
Prefer small meaningful changes.

17. Git Diff Review
Before committing meaningful changes, inspect:
git diff

and, where appropriate:
git diff --cached

The staged diff is especially useful for verifying exactly what will enter the commit. GitHub recommends reviewing staged changes and avoiding blindly committing everything.

18. Do Not Blindly Use git add .
Do not make this the default habit:
git add .

It can stage unintended:

temporary files
secrets
generated files
large assets
editor files
debug artifacts

GitHub specifically recommends staging intentionally rather than relying on broad catch-all commands when avoiding accidental inclusion matters.
Prefer:
git add index.html css/hero.css

or inspect the repository carefully before staging.

19. Interactive Staging
When useful:
git add -p

may be used to stage only relevant portions of a file.
This is particularly useful after AI agents make mixed changes.

20. Staged Diff
Before commit:
git diff --cached

should be checked for:

unintended files
unrelated changes
secrets
debug code
accidental refactors
media files
generated files

Do not commit blindly.

21. .gitignore
The repository must contain a .gitignore.
It should exclude files that should not be version controlled.
Examples may include:
.DS_Store
Thumbs.db
.vscode/*
*.log
.env
.env.*
node_modules/
dist/
build/

The exact file should reflect the actual project tooling.
GitHub recommends using .gitignore to prevent unwanted local/generated files from entering repositories.

22. Important .gitignore Rule
Never use .gitignore as an excuse to hide important source files.
Do not ignore:

HTML
CSS
JavaScript
.ai specifications
important configuration
required static assets

Everything needed to reproduce the website should remain tracked.

23. Environment Files
Do not commit:
.env
.env.local
.env.production

or equivalent secret-bearing files.
If environment/configuration templates are needed, use a safe example:
.env.example

containing no secrets.

24. Secrets
Never commit:

API keys
API secrets
passwords
access tokens
private credentials
Cloudinary secrets
private upload credentials

GitHub explicitly recommends avoiding hardcoded secrets and using environment variables or secret-management systems instead.

25. Cloudinary Credentials
The frontend must never contain:

Cloudinary API secret
administrative credentials
private authentication credentials

Public delivery URLs are acceptable.
Only public information required for browser delivery should appear in source code.

26. If a Secret Is Accidentally Committed
Treat it as compromised.
Do not simply:
delete the file
commit again

because the secret may remain in Git history.
Immediately:

Revoke/rotate the secret.
Remove the secret from active code.
Follow GitHub's sensitive-data removal guidance if necessary.

GitHub warns that simply removing a secret from the latest commit does not necessarily remove it from repository history.

27. Secret Scanning
Where available, enable GitHub security features appropriate for the repository.
GitHub recommends:

Secret scanning
Push protection
Dependabot alerts
Code scanning

as part of repository security best practices.

28. Push Protection
If available for the repository/account, enable secret push protection.
The goal is to prevent a secret from reaching the repository rather than discovering the problem afterward.
GitHub recommends push protection as a preventive control against supported secrets.

29. Dependabot
The project should enable Dependabot alerts when dependencies exist.
However, because the preferred architecture uses vanilla HTML/CSS/JS with minimal dependencies, dependency count should remain very low.
Do not add dependencies just to generate something for Dependabot to monitor.
GitHub recommends Dependabot alerts for identifying vulnerabilities in dependency networks.

30. Code Scanning
Code scanning may be enabled if practical.
For this small static project it is useful as a quality/security check, but it should not introduce unnecessary complexity.
GitHub lists code scanning among recommended repository security practices.

31. Dependency Policy
No dependency should be introduced without a reason.
Before adding a package, ask:

Why is it needed?
Can native HTML/CSS/JS solve the problem?
What performance cost does it add?
What maintenance cost does it add?
Does it create AI-agent complexity?
Is it justified for a two-page static portfolio?


32. GitHub Repository Size
Keep the repository comfortably below GitHub's recommended limits.
Avoid storing:

original video masters
large PSDs
editing project files
unnecessary exports
raw camera footage
large temporary render files

GitHub currently recommends staying within 10 GB on-disk repository size for general repository health and separately limits GitHub Pages source/published site sizes to 1 GB.
For this project, the repository should be dramatically smaller than those limits.

33. Video Files
Do not commit portfolio videos to Git unless explicitly approved for a specific reason.
Use:
Cloudinary
for actual portfolio video storage/delivery.
GitHub should contain:
video URL
+
project metadata
+
poster

not the video itself.

34. Git LFS
Git LFS should not be introduced merely to store portfolio videos.
The preferred architecture is:
GitHub
→ website source

Cloudinary
→ video assets

Git LFS is therefore unnecessary for the normal portfolio workflow.

35. Binary Files
Large binary assets should be avoided.
Examples:

PSD
AI
project files
raw footage
giant MP4
giant MOV
unoptimized PNG collections

Only production website assets belong in the repository.

36. Poster Images
Optimized poster images may be stored in GitHub.
However, they should remain appropriately compressed and sized.
Do not commit original high-resolution frames when the site uses a much smaller version.

37. Fonts
Only the required font files should be stored if fonts are self-hosted.
Do not commit:

unnecessary font families
unused font weights
entire font collections


38. Generated Files
Do not commit unnecessary generated files.
Examples:
coverage/
logs/
temporary screenshots/
debug output/
build artifacts
cache directories

unless they are explicitly required for deployment.

39. Screenshots
Screenshots for documentation may be committed when useful.
Do not commit dozens of temporary screenshots generated during development.

40. README
The repository must contain a useful README.md.
It should explain:

What the project is
Technology stack
How to run/edit locally
GitHub Pages deployment
Cloudinary media architecture
Project structure
How to add a project
Important AI development rules
Contact/ownership information where appropriate

Keep it current.

41. README vs .ai
The README is for humans who need to understand the repository quickly.
The .ai/ directory is the detailed operating specification for AI-assisted development.
Do not turn the README into a giant AI instruction manual.

42. Documentation Synchronization
When an architectural decision changes, update the appropriate .ai document.
Do not leave contradictory instructions such as:
README says React

while:
ARCHITECTURE.md says vanilla JS

The repository's documentation must remain internally consistent.

43. Source of Truth
Use the following hierarchy:
.ai/
    ↓
source code
    ↓
README
    ↓
GitHub UI metadata

The .ai documentation defines project intent.
The source code is the current implementation.

44. AI Coding Workflow
AI agents must not modify the repository blindly.
Before meaningful changes:

Read relevant .ai files.
Inspect current implementation.
Determine scope.
Make the smallest safe change.
Inspect the diff.
Test affected behavior.
Update project state documentation when necessary.
Commit only the intended changes.


45. AI Context Files
The following files are authoritative project instructions:
00-PROJECT-CONTEXT.md
01-ARCHITECTURE.md
02-DESIGN-SYSTEM.md
03-UX-RULES.md
04-HTML-RULES.md
05-CSS-RULES.md
06-JS-RULES.md
07-PERFORMANCE-RULES.md
08-MEDIA-RULES.md
09-ACCESSIBILITY-RULES.md
10-GITHUB-RULES.md
11-CHANGE-PROTOCOL.md
12-CURRENT-STATE.md
13-DESIGN-DECISIONS.md
14-CURRENT-PLAN.md

Agents should read only the files relevant to a task when practical, but must never ignore a directly applicable rule.

46. Git as Safety Net
Git is not merely storage.
It is the project's rollback mechanism.
Before a risky AI-generated change:
git status

should be checked.
After the change:
git diff

should be reviewed.
If necessary, revert the change rather than debugging a model-generated mess indefinitely.

47. Clean Working Tree
Before major tasks, prefer a clean working tree.
Check:
git status

Do not start a large AI modification while unrelated uncommitted changes are mixed into the repository unless there is a deliberate reason.
This makes it easier to identify what the AI actually changed.

48. Commit Before Risky Changes
Before a substantial redesign/refactor:
Create a clean checkpoint commit.
Example:
chore: checkpoint before project redesign

This creates a clear rollback point.

49. Experimental Work
If an AI agent is being allowed to experiment heavily:
Use a branch.
Do not let uncontrolled experimentation happen directly on main.

50. Pull Requests
Pull requests are useful for significant changes even in a solo project.
Potential PR examples:
Build video player
Optimize portfolio media
Redesign selected work
Improve mobile navigation

A PR provides an easier review surface for larger AI-generated changes.

51. Solo Pull Request Philosophy
You do not need elaborate team processes.
The purpose of a PR in this project is:
review before integration.
It is not bureaucracy.

52. Branch Protection
If practical, protect main.
GitHub branch protection can prevent:

force pushes
branch deletion
merging without required checks
other accidental changes

GitHub documents protected branches as a mechanism for protecting important branches and enforcing workflow requirements.
For a solo project, keep protection lightweight.

53. Rulesets
GitHub rulesets can provide more flexible repository/branch controls than a single branch-protection rule.
Do not create complicated rulesets unless they solve a real problem.

54. Recommended Main Protection
A sensible starting point may be:

Prevent force-pushes to main
Prevent accidental deletion of main
Require basic checks before merge where practical

Do not introduce mandatory multi-person approvals for a solo repository unless the project later becomes collaborative.

55. Force Pushes
Avoid force pushing to main.
Force pushes can destroy useful history and make collaboration with multiple AI tools harder.

56. Rewriting History
Do not rewrite public repository history casually.
History rewriting should be reserved for genuine cases such as sensitive-data removal or deliberate repository restructuring.

57. Git Tags
Tags may be used for meaningful production releases.
Example:
v1.0.0
v1.1.0

They are optional for the initial portfolio.
Do not create a tag for every tiny change.

58. Releases
GitHub Releases are optional.
They may be useful for major milestones but are not required for a small static website.

59. Issues
Issues may be used to track:

Bugs
Performance problems
Future sections
Accessibility problems
Design decisions requiring investigation

Do not create dozens of issues for trivial tasks.

60. Issue Titles
Use clear titles:
Improve mobile navigation
Optimize project posters
Fix video modal focus
Add new project filter

Avoid:
problem
fix this
website issue
urgent!!!


61. GitHub Projects
A GitHub Project board is optional.
The .ai/14-CURRENT-PLAN.md file remains the primary lightweight project plan.
Do not maintain two conflicting planning systems.

62. Deployment Source
GitHub Pages must deploy from the intended production branch/path.
The deployment configuration should be documented in the README.

63. GitHub Pages Deployment
After deployment:
Verify:

Homepage works
Projects page works
CSS loads
JS loads
Images load
Cloudinary videos load
Relative paths work
External links work
Mobile layout works


64. GitHub Pages Path Awareness
The site must work correctly when served from the actual GitHub Pages URL.
Do not assume the site is always hosted at:
/

if the repository is a project site.
Use paths appropriately for GitHub Pages.

65. Relative Paths
Prefer reliable relative paths.
Example:
./css/base.css
./js/main.js
./assets/images/posters/edit-01.webp
./projects.html

Do not rely on local machine filesystem paths.

66. Absolute Root Paths
Be careful with paths beginning with:
/

because GitHub Pages project sites may be served from a repository subpath.
The final path strategy must match the actual GitHub Pages deployment configuration.

67. Repository Site vs User Site
If the website is deployed as a project site:
username.github.io/repository-name/

resource paths must account for that base path.
If later changed to a user site:
username.github.io/

the path behavior changes.
Document the chosen deployment model.

68. GitHub Pages HTTPS
HTTPS should remain enabled.
GitHub Pages supports HTTPS, including for custom domains, and GitHub can enforce HTTPS for Pages sites.
Do not intentionally mix insecure HTTP resources into the site.

69. Mixed Content
Do not reference HTTP versions of external assets when HTTPS versions are available.
Use:
https://

for external media/services.

70. Custom Domain
A custom domain is not currently required.
If introduced later:

Update GitHub Pages settings.
Configure DNS correctly.
Enable HTTPS.
Update canonical/SEO metadata.
Test all resource paths.

GitHub Pages supports custom domains and recommends verifying a custom domain before adding it to a repository.

71. Domain Independence
The website should avoid hardcoding assumptions about a future custom domain unless required.
The current site should work on GitHub Pages.

72. Deployment Checks
Every production deployment should be checked for:
HTML
CSS
JS
Images
Videos
Links
Mobile
Accessibility
Performance


73. Deployment Rollback
If a deployment breaks the site:

Identify the offending commit.
Revert or restore the last known-good state.
Redeploy.
Diagnose separately.

Do not pile additional AI-generated fixes onto a broken deployment without understanding the initial failure.

74. AI Deployment Rule
AI agents should not push directly to production without being asked/authorized.
The agent may prepare code.
Production deployment remains a controlled operation.

75. AI Commit Rule
Do not allow an AI agent to create a commit unless:

Scope is understood.
Diff is reviewed.
Tests/checks are performed.
No accidental files are included.


76. AI Push Rule
Do not allow AI agents to push to main automatically as a default behavior.
The preferred workflow is:
AI changes
↓
inspect diff
↓
test
↓
human review
↓
commit
↓
push/deploy


77. AI Model Switching
Because multiple AI systems may work on the repository:

Codex
Antigravity
Cline
Qwen
DeepSeek
Other models

each model must operate from the same .ai specifications.
The model itself is replaceable.
The project specification is not.

78. Model Handoff
Before handing the repository from one AI model to another:
Ensure:

Changes are saved
Working tree state is understood
Current-state documentation is updated when necessary
No temporary AI artifacts remain
Relevant commits/checkpoints exist


79. Current State
12-CURRENT-STATE.md should document:

completed work
active work
known bugs
current implementation decisions
known technical debt
next intended task

This is particularly important for AI handoffs.

80. Design Decisions
Significant GitHub/deployment decisions should be documented in:
.ai/13-DESIGN-DECISIONS.md

Examples:

GitHub Pages deployment strategy
Cloudinary choice
Branch workflow
Build/deployment changes
New dependency decisions
Custom domain adoption


81. No Repository Pollution
Do not commit:

AI-generated scratch files
prompts copied into random files
screenshots of every iteration
local debug output
temporary backups
editor caches
exported videos
unnecessary generated documents

unless intentionally part of the project.

82. Editor Configuration
.vscode/ configuration may be committed when genuinely useful to the project.
Examples:

workspace settings
recommended extensions
formatting configuration

Do not commit personal machine-specific configuration.

83. AI Tool Configuration
AI-tool-specific configuration may be committed only if:

it is safe
it contains no secrets
it is intentionally part of the shared project workflow

Do not commit API credentials or personal tool state.

84. Secrets in Documentation
Do not put secrets into:

README
.ai/*.md
comments
issues
commit messages
PR descriptions

Documentation is public repository content.

85. Public Repository Assumption
Treat everything in a public repository as publicly visible.
Never place sensitive information in it.
GitHub explicitly warns that GitHub Pages sites are publicly available on the internet even when the repository may be private under certain plans/configurations.

86. Licensing
If the repository contains third-party code or assets, verify their license/usage terms.
Do not copy assets or code into the repository without understanding whether redistribution is permitted.

87. Third-Party Assets
For:

fonts
icons
images
libraries
code snippets

record relevant license/attribution information when required.
Do not assume that something found online is automatically free to redistribute.

88. Commit Messages and Secrets
Never place:

API tokens
passwords
private URLs
credentials

inside commit messages.
Commit messages are persistent repository history.

89. Git History Quality
Keep commit history understandable.
A future developer—or AI model—should be able to understand:
what changed
+
why it changed

from the history.

90. Reverting AI Changes
If an AI agent makes an unwanted change and the commit is isolated:
Use:
git revert <commit>

when appropriate.
If the change is uncommitted:
restore only the affected files/sections after inspecting the diff.
Do not destroy unrelated work.

91. Avoid Destructive Git Commands
AI agents must not casually execute:
git reset --hard
git clean -fd
git push --force

These commands can destroy user work or repository history.
They require explicit justification and authorization.

92. No Blind Reset
If a model encounters unexpected repository changes:
Do not assume those changes are disposable.
First inspect:
git status
git diff

Determine whether the changes belong to the user or another process.

93. Concurrent AI Editing
Do not allow two AI agents to modify the same files simultaneously without coordination.
Example:
Codex editing CSS
+
Cline editing CSS

at the same time can produce unpredictable results.
Prefer sequential changes.

94. AI Handoff
When switching models:
finish current task
↓
review diff
↓
commit/checkpoint
↓
update CURRENT-STATE.md
↓
switch model

This creates a clean handoff boundary.

95. Pull Before Editing
If repository changes may have occurred remotely:
Before starting a major task, synchronize with the current repository state.
Do not blindly overwrite remote changes.

96. Remote Changes
If Git reports divergence:
Do not automatically force-push.
Investigate:
git status
git log
git diff

Resolve the divergence intentionally.

97. Merge Conflicts
When resolving a merge conflict:
Do not automatically accept:
ours

or:
theirs

without understanding the conflict.
Review:

architecture
design decisions
current state
intended behavior

then resolve deliberately.

98. AI Merge Conflict Rule
If an AI agent resolves a conflict:
It must inspect the final merged file and verify that both intended behaviors remain intact.
Do not trust a conflict-resolution result merely because Git reports the conflict as resolved.

99. File Deletions
AI agents must not delete files unless the deletion is clearly part of the task.
Before deleting:

verify whether anything references the file
verify whether it contains project rules
verify whether it is deployment-critical


100. Renaming Files
File renames should be deliberate.
When renaming:

update imports
update HTML references
update links
update documentation
update AI references

Do not rename files simply to satisfy personal naming preferences.

101. Repository Refactors
Large repository reorganizations require an explicit task.
Do not combine a visual feature with a complete repository restructuring.

102. Branch Cleanup
Delete stale feature branches when they are no longer useful.
Do not accumulate hundreds of abandoned branches.

103. Tags and Releases
Use tags for meaningful milestones only.
Avoid creating tags such as:
test1
test2
test3
final
final2


104. Deployment Status
Before calling a deployment successful, verify the live site rather than assuming a successful Git push means the website is correct.

105. Broken Deployment
If the live site breaks:

Identify the deployment commit.
Inspect recent changes.
Check browser console.
Check network failures.
Check GitHub Pages deployment status.
Revert if necessary.
Fix the cause separately.


106. GitHub Pages and Cloudinary Separation
The intended production architecture is:
GitHub
│
├── HTML
├── CSS
├── JavaScript
├── Posters
└── Icons
       │
       │ deployed through
       ▼
GitHub Pages
       │
       │ website requests video
       ▼
Cloudinary
       │
       └── Portfolio video delivery

Do not merge these responsibilities without a documented architectural reason.

107. Performance Responsibility
GitHub repository size and deployment size should remain small.
Cloudinary carries the heavy video delivery workload.
This separation is intentional.

108. Security Responsibility
GitHub:

Source control
Secret protection
Repository security

Cloudinary:

Public media delivery

The website frontend:

Public project/media references

Never put private credentials in the frontend.

109. Repository Documentation
At minimum, the repository should make it obvious:
What is this?
How does it work?
Where are videos?
How do I add a project?
How is it deployed?
What rules govern AI changes?


110. Adding a New Project
The preferred repository workflow is:
1. Export edit from CapCut.
2. Prepare poster.
3. Upload video to Cloudinary.
4. Verify Cloudinary delivery.
5. Add project metadata.
6. Add poster reference.
7. Add Instagram URL.
8. Test project locally.
9. Review git diff.
10. Commit.
11. Deploy.
12. Verify live project.


111. Project Data Changes
Adding a new project should ideally require modifying only:

Project data
Poster asset

and not:

navigation
video engine
global styles
page structure

This preserves architecture boundaries.

112. Media Uploads
Do not upload portfolio videos directly through GitHub's normal repository workflow unless explicitly required.
Cloudinary is the intended media source.

113. Repository Backups
Git itself provides version history, but important project files should not exist only as uncommitted local changes.
Commit meaningful milestones.

114. Local Working Copies
Do not assume another AI model knows what is in your working tree.
Each model should inspect the actual repository state before editing.

115. git status
Before major modifications:
git status

should be checked.
This tells the agent whether:

changes already exist
files are untracked
branches differ
the repository is clean


116. git log
When understanding project history:
git log --oneline --decorate --graph -n 20

may be used.
This is useful when an AI agent needs to understand recent architectural changes.

117. Git Blame
git blame may be used selectively to understand why a line exists.
Do not use it as a substitute for reading current project specifications.

118. GitHub Issues as Context
Issues may contain useful business/design context.
AI agents should not assume an old issue overrides the current .ai specifications.
Current documented decisions take precedence unless intentionally changed.

119. GitHub Actions
GitHub Actions are optional.
Do not introduce a CI/CD pipeline just because modern repositories often have one.
Use Actions when it provides a clear benefit such as:

automated validation
HTML checks
accessibility checks
performance checks
deployment automation


120. Actions Complexity
Do not create a 200-line workflow for a static site that can be validated with a few simple commands.
Keep automation proportionate to project size.

121. Automated Checks
If GitHub Actions are introduced, useful checks may include:

HTML validation
JavaScript syntax checks
broken-link checking
accessibility checks
basic asset validation

Only add checks that provide meaningful protection.

122. Build Failures
A broken automated check should not result in an unexplained "fix until green" process.
Understand:

what failed
whether the failure is real
whether the check is appropriate

before modifying application code.

123. Dependency Updates
If dependencies are ever introduced:

keep versions controlled
review changelogs
test after updates
avoid blindly accepting automated dependency PRs


124. No Unnecessary npm
Do not add package.json merely because a coding environment expects Node.
If the site does not need a build tool, the project can remain a static HTML/CSS/JS repository.

125. Local Development
A simple local development server may be used because browser behavior can differ from opening files directly.
Examples:
python -m http.server

or another lightweight local server.
Do not require a complex development environment.

126. Local Testing
Before pushing major changes:
Test locally whenever practical.
Check:

homepage
projects
media
responsive behavior
console errors


127. Browser Testing
The repository is not complete because the code "looks correct."
Meaningful UI changes should be tested in an actual browser.

128. Production Verification
After deployment:

Open the actual GitHub Pages URL.
Hard refresh.
Verify asset paths.
Verify Cloudinary playback.
Test mobile.
Test navigation.


129. GitHub Pages Cache Awareness
Do not assume every deployment appears instantly identical on every cached path.
When debugging a suspected deployment issue:

verify the current deployed commit
refresh appropriately
check network resources

Do not rewrite code merely because an old cached asset appears temporarily.

130. Security Policy
If the repository becomes public and meaningful security reporting is needed, a SECURITY.md file may be added.
GitHub includes SECURITY.md among recommended repository security practices.
For a tiny static portfolio, this may remain low priority.

131. Repository Visibility
If the portfolio source is public:
Assume:
HTML
CSS
JS
asset paths
project metadata

are visible to anyone.
Do not put private information in source code.

132. Public Portfolio Data
It is acceptable for the repository to contain public portfolio information such as:

Sanjan's public brand name
Public Instagram username
Public project titles
Public Cloudinary delivery URLs

Do not include private personal information unnecessarily.

133. WhatsApp Privacy
The repository must not expose Sanjan's phone number merely to implement WhatsApp contact.
Use the username-based mechanism decided for the project.

134. Repository Metadata
Do not put private contact information into:

Git commit author configuration
README
public issue templates
source comments

unless intentionally public.

135. AI Prompt Storage
Do not permanently store every conversational AI prompt in the repository.
The .ai files should contain durable project rules, not transcripts of every interaction.

136. AI Documentation Quality
.ai documents should describe:

durable decisions
architecture
constraints
rules
current state

They should not become a chronological diary.

137. Updating AI Rules
If a durable project decision changes:

Update the appropriate .ai file.
Update 13-DESIGN-DECISIONS.md.
Update affected documentation.
Commit the documentation change with the implementation when appropriate.


138. Contradiction Check
Before accepting a major architecture change, search the .ai directory for affected previous rules.
Do not leave contradictions such as:
ARCHITECTURE:
Vanilla JS

CURRENT STATE:
React migration complete

without resolving the documentation.

139. Git and Documentation
Meaningful architecture documentation changes should be committed alongside the relevant implementation whenever possible.
This keeps code and specification synchronized.

140. AI Agent Final Report
After a meaningful repository modification, AI agents should summarize:
Changed:
- ...

Files modified:
- ...

Files added:
- ...

Files removed:
- ...

Tests/checks:
- ...

Not changed:
- ...

Performance impact:
- ...

Accessibility impact:
- ...

The exact reporting format may vary, but unintended scope should be made visible.

141. Non-Negotiable GitHub Rules

GitHub is the source-control and static-site hosting platform.
GitHub Pages is the website host.
Cloudinary is the video storage/delivery platform.
Do not store the full portfolio video collection in Git.
Keep the repository lightweight.
Keep production code compatible with static GitHub Pages hosting.
Use main as the production/default branch unless explicitly changed.
Keep main stable.
Use feature branches for substantial risky work.
Use meaningful commit messages.
Keep commits logically scoped.
Review git diff before meaningful commits.
Review git diff --cached before committing staged work.
Do not blindly use git add ..
Maintain a proper .gitignore.
Never commit secrets.
Never commit Cloudinary private credentials.
Enable GitHub security features where practical.
Enable secret scanning/push protection where available.
Keep dependencies minimal.
Do not introduce Git LFS merely to store portfolio videos.
Do not turn GitHub into a media archive.
Do not use destructive Git commands casually.
Do not force-push main.
Do not reset or delete user work without explicit authorization.
Do not allow multiple AI agents to edit the same files concurrently without coordination.
Inspect repository state before AI modifications.
Create checkpoints before risky AI work.
Update .ai/12-CURRENT-STATE.md after meaningful milestones.
Document significant decisions in .ai/13-DESIGN-DECISIONS.md.
Verify the actual deployed GitHub Pages site after meaningful deployment changes.
Keep README documentation current.
Keep project documentation internally consistent.
Treat public repository contents as public.
Never expose Sanjan's private phone number.
Do not commit temporary AI artifacts.
Do not introduce a complex CI/CD system without a real benefit.
Do not add dependencies merely because an AI model prefers them.
Use Git history as a safety mechanism, not merely as a backup.
Every AI-generated change must be reviewable, reversible, and attributable to a clear task.

