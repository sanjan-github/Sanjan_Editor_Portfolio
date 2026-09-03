CURRENT STATE
1. Repository
Repository:
https://github.com/sanjan-github/Portfolio
The project is an existing static portfolio implementation, not a greenfield project.
Current architecture:

HTML5
CSS3
Vanilla JavaScript
GitHub Pages
Cloudinary
centralized project data
reusable video-dialog foundation
responsive layout foundation
mobile navigation
.ai project-control documentation


2. Documentation System
The .ai directory contains the project-control documentation.
Important documents:

CURRENT-STATE.md — what currently exists
DESIGN-DECISIONS.md — why important decisions were made
CURRENT-PLAN.md — what we are building and how execution is controlled

The documentation system is designed to allow a new AI agent to understand the project from the repository rather than relying on previous chat history.

3. Product Identity
Personal name:
Sanjan
Professional role:
Video Editor
Portfolio/brand:
sanjanedits
The portfolio is a personal video-editing portfolio, not an agency website.

4. Product Direction
The intended visual direction is:
Dark cinematic editorial
The experience should feel:

cinematic
premium
editorial
modern
energetic
personal
intentional

It should not feel like:

a generic developer portfolio
a gaming/neon template
a fake agency
a résumé website
an effects showcase

The work itself is the primary proof of ability.

5. Current Website Structure
The project currently contains:

homepage
Hero
Work section
video presentation
What I Do section
About section
Contact section
Projects page
footer
mobile navigation
reusable video interaction

The existing implementation provides a foundation, but the final visual experience is not yet complete.

6. Approved Website Identity
Navigation brand:
sanjanedits
Hero identity:
SANJAN
Video Editor
Approved Hero statement:

I turn raw footage into videos built to hold attention.

Work heading:
Here’s My Work
Work supporting copy:

Take a look at some of the videos I’ve edited.

Video section:
Have a look.
What I Do:
Short-Form Video Editing

Reels, Shorts, and social content built around strong pacing and visual impact.

Creative Editing

Rhythm-driven cuts, transitions, effects, visual storytelling, and the details that give an edit its personality.

Long-form editing is not advertised.

7. Approved About Copy
The About section uses:

I’m Sanjan, a video editor focused on turning footage into edits with impact, emotion, and personality.
I look beyond simply putting clips together. I look for the moments that matter — an expression, a movement, a beat, a character — and build the edit around them.
The goal isn’t to make a video look edited. It’s to make the viewer feel it.
If you have footage that deserves more than a basic cut, let’s make something out of it.

This copy is locked.

8. Contact
Instagram:
sanjanedits
WhatsApp:
@sanjan.69
The final production URLs are supplied by Sanjan.
Agents must not invent contact URLs.

9. Production Media
The previously missing production media has now been supplied by Sanjan.
Profile Photo
Cloudinary asset:
sanjan2.jpg
URL:
https://res.cloudinary.com/sdsqadch/image/upload/v1787892415/sanjan2.jpg
Purpose:

Hero/profile visual
About/profile usage where appropriate

Main Highlighted Reel
Cloudinary asset:
srujan-edit.mp4
URL:
https://res.cloudinary.com/sdsqadch/video/upload/v1787904198/srujan-edit.mp4
Purpose:
Primary highlighted video / main reel
This is the reel that receives the strongest visual emphasis.
Additional Project 1
Asset:
Sai_Saviour.mp4
URL:
https://res.cloudinary.com/sdsqadch/video/upload/v1787904812/Sai_Saviour.mp4
Additional Project 2
Asset:
athadu_brahmi.mp4
URL:
https://res.cloudinary.com/sdsqadch/video/upload/v1787904770/athadu_brahmi.mp4
Additional Project 3
Asset:
Srujan-Dude.mp4
URL:
https://res.cloudinary.com/sdsqadch/video/upload/v1787903555/Srujan-Dude.mp4
Additional Project 4
Asset:
Space-OG.mp4
URL:
https://res.cloudinary.com/sdsqadch/video/upload/v1787892867/Space-OG.mp4
These are production assets supplied by Sanjan.
Agents must use the exact supplied URLs.
Agents must not:

invent Cloudinary URLs
guess missing URLs
replace these URLs
modify these URLs
upload replacement media
substitute unrelated media


10. Media Status
Current production-media status:



Asset
Status




Profile photo
SUPPLIED


Main highlighted reel
SUPPLIED


Project video 1
SUPPLIED


Project video 2
SUPPLIED


Project video 3
SUPPLIED


Project video 4
SUPPLIED


Cloudinary source
AVAILABLE



The media dependency is therefore no longer blocked.
Posters/thumbnails may still need to be generated or selected appropriately.

11. Video Architecture
Videos are hosted externally through Cloudinary.
Videos should not be stored in GitHub.
Expected behavior:
poster
↓
user interaction
↓
video source activated
↓
Cloudinary video loads
↓
playback
The current project already has a reusable video-dialog foundation.
The final implementation must preserve:

on-demand loading
keyboard accessibility
focus management
Escape handling
cleanup
mobile behavior
error handling

Audible autoplay is prohibited.

12. Current Visual Foundation
Current visual direction:
Background:
#090909
Primary text:
#F5F5F2
Secondary text:
#8A8A8A
Accent:
#C8FF00
Display font:
Plus Jakarta Sans
Body/UI font:
Inter
The final implementation must preserve this direction unless a protected design decision is explicitly changed.

13. Current Incomplete Areas
The main remaining work includes:

final photo-led Hero
Hero scroll-linked transition
final responsive Hero behavior
real profile photo integration
real project integration
real posters
main reel presentation
video loading/playback refinement
Projects page population
final Instagram destination
final WhatsApp destination
responsive refinement
accessibility audit
performance audit
SEO/social sharing verification
production verification

These are open implementation areas, not permission for an agent to work on all of them simultaneously.

14. Current Execution State
The project is ready to enter implementation.
The first active task is:
HERO-01
Task:
Inspect the existing Hero implementation and define the exact modification boundary.
Status:
READY
HERO-01 is inspection/planning only.
The agent must not implement the final Hero during HERO-01.

15. Next Task
After HERO-01 is reviewed and explicitly marked VERIFIED:
HERO-02 — Implement the final photo-led Hero.
The next task must not be started automatically.
Only the currently assigned active task may be executed.

16. Important Continuity Rule
A new AI agent must assume that previous agents may have left partial work.
Before modifying anything, the agent must inspect:

Git status
current diff
relevant files
.ai documentation
current active task
existing implementation

It must continue from the actual repository state.
It must never restart the project merely because it is a new agent.

17. Source of Truth
For implementation:
Repository state > documentation > previous chat assumptions
For approved product decisions:
CURRENT-PLAN.md + DESIGN-DECISIONS.md
For current implementation reality:
CURRENT-STATE.md + actual repository
For production media:
exact assets and URLs supplied by Sanjan
If these conflict, the agent must stop and report the conflict rather than silently choosing.
