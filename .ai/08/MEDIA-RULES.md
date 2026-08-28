MEDIA RULES
1. Purpose
This document defines how images, videos, posters, thumbnails, icons, profile photography, and other media are selected, stored, optimized, delivered, loaded, displayed, and maintained throughout the sanjanedits portfolio.
The media system must balance:

Visual quality
Loading speed
Bandwidth usage
Mobile performance
Video playback quality
Accessibility
Maintainability
Cloudinary efficiency

The portfolio is fundamentally a media-focused website.
Therefore:
Media quality matters greatly, but unnecessary media weight is unacceptable.

2. Core Media Principle
The website should follow:
SHOW THE RIGHT MEDIA
        ↓
AT THE RIGHT SIZE
        ↓
AT THE RIGHT TIME
        ↓
IN THE RIGHT FORMAT

Do not:
upload everything
+
serve everything at maximum resolution
+
load everything immediately


3. Media Source of Truth
Images
Lightweight website images may be stored in the GitHub repository when practical.
Examples:

Profile photograph
Small decorative assets
SVG icons
Poster images if their size remains reasonable

Videos
Portfolio videos must be stored in:
Cloudinary
Do not store the complete portfolio video collection inside the GitHub repository.

4. Media Responsibilities
The project uses:
GitHub
For:

HTML
CSS
JavaScript
Lightweight static assets
Source-controlled poster images
Icons

Cloudinary
For:

Portfolio video storage
Video transformation
Video delivery
Format optimization
Quality optimization
Resizing
CDN delivery

Cloudinary's current video optimization guidance recommends automatic quality and format selection and delivering videos at the dimensions actually needed.

5. Video Delivery Model
The portfolio should use:
poster-first, on-demand video playback.
Preferred flow:
POSTER
   ↓
USER SHOWS INTENT
   ↓
VIDEO SOURCE ACTIVATED
   ↓
CLOUDINARY REQUEST
   ↓
VIDEO LOADS
   ↓
PLAYBACK

Do not download all portfolio videos on initial page load.

6. Instagram Relationship
Instagram is the original publishing platform for the edits.
The portfolio is a separate presentation layer.
The same edit may therefore exist:
Instagram
    +
Cloudinary

This duplication is intentional.
Instagram provides:

Social proof
Original post
Existing audience
External credibility

Cloudinary provides:

Portfolio-controlled playback
Better site presentation
CDN media delivery
Optimization
Consistent player experience


7. Instagram Embeds
Do not use Instagram embeds as the primary portfolio video mechanism.
Prefer:
Cloudinary video → portfolio player
with:
View on Instagram →
as an optional secondary action.
This keeps the visual experience under the site's control and avoids depending on large third-party embed behavior.

8. Video Uploads
Before uploading a video to Cloudinary:

Use the final intended edit.
Remove accidental unused material.
Avoid unnecessarily high source resolution.
Preserve the visual quality required to judge the edit.
Ensure the correct aspect ratio.
Ensure the correct audio track exists where audio is part of the edit.

Do not upload:

project files
editing timelines
unused versions
intermediate exports
duplicate exports

unless they serve a specific purpose.

9. Source Master vs Delivery Version
The original high-quality master may be retained separately for archival purposes.
The website should not necessarily deliver the untouched master.
Recommended:
MASTER
   ↓
Cloudinary
   ↓
optimized delivery

Cloudinary should handle delivery-side optimization where appropriate.

10. Automatic Video Quality
Prefer Cloudinary automatic quality optimization for normal portfolio delivery:
q_auto

Cloudinary documents q_auto as automatically balancing visual quality and file size.
Do not automatically use the highest manual quality setting.

11. Automatic Video Format
Prefer Cloudinary automatic format selection:
f_auto

where appropriate.
Cloudinary can select an appropriate browser-supported format/codec, potentially delivering WebM, AV1/MP4, HEVC/MP4, or H.264/MP4 depending on the requester and account configuration.
Do not manually maintain multiple browser-specific video formats unless there is a specific technical reason.

12. q_auto + f_auto
For standard Cloudinary portfolio delivery, the preferred starting point is:
q_auto
+
f_auto

Cloudinary currently recommends adding automatic quality and format selection to delivery URLs in typical video optimization scenarios.
Exceptions may apply when:

an exact format is required
exact original delivery is required
a specific quality level is intentionally chosen
another Cloudinary configuration already provides automatic optimization


13. Video Dimensions
Do not serve a video at a significantly higher resolution than the display requires.
Cloudinary recommends resizing videos to the dimensions actually needed rather than relying solely on client-side/CSS resizing.
Example principle:
Displayed at ~500px wide
        ↓
Do not automatically deliver a huge 4K asset

The exact delivery dimensions should be based on the rendered player and quality requirements.

14. Responsive Video Delivery
When practical, provide media at dimensions appropriate to the user's viewport.
For normal short-form portfolio playback, Cloudinary progressive delivery is appropriate.
For scenarios where network variation significantly affects playback, adaptive bitrate streaming may be considered.
Cloudinary recommends adaptive bitrate streaming when automatic adjustment of quality and resolution based on network conditions and device capabilities is required.
Do not introduce streaming infrastructure unnecessarily.

15. Progressive Video Delivery
Short-form portfolio videos are well suited to progressive delivery.
Cloudinary specifically recommends progressive delivery for short-form videos, where optimized video data is sent continuously as the video plays.
The initial implementation should prefer this simpler approach unless real user/network conditions justify adaptive streaming.

16. Adaptive Bitrate Streaming
Adaptive bitrate streaming is optional.
Use it only if:

portfolio videos become significantly longer
buffering becomes a real issue
users regularly watch over variable/poor networks
progressive delivery cannot provide the required experience

Do not implement adaptive streaming merely because it sounds more advanced.

17. Portfolio Video Loading
The portfolio should default to:
<video
    preload="none"
    poster="..."
>

when immediate video loading is unnecessary.
MDN explicitly recommends preload="none" when the user is not expected to play the video immediately, because it prevents preloading the video data before the user requests playback.

18. Video loading
loading="lazy" may be used when appropriate.
Example:
<video
    loading="lazy"
    preload="none"
    poster="..."
>

MDN notes that lazy loading can defer video data and poster loading until the video approaches the viewport.
Do not depend exclusively on loading="lazy".
The architecture should still prevent unnecessary media requests.

19. Video Posters
Every portfolio video should have a poster whenever practical.
Example:
poster="/assets/images/posters/edit-01.webp"

The poster serves as:

Visual preview
Loading fallback
Portfolio artwork
Layout placeholder

The poster should be visually representative of the actual edit.

20. Poster Quality
A poster must be:

Sharp at the display size
Appropriately compressed
Correctly cropped
Representative of the video
Optimized for the target viewport

Do not use an original 4K frame as a 300px card thumbnail.

21. Poster Format
Preferred:

WebP
AVIF where practical

Use JPEG/PNG where there is a legitimate compatibility or asset-specific reason.

22. Poster Dimensions
Create posters at dimensions appropriate to their largest intended rendering size.
Do not serve an enormous poster to a small card.
Do not make the poster so small that it becomes blurry on larger screens.

23. Responsive Posters
Where there is a significant difference between desktop and mobile presentation, responsive images may be used.
Possible techniques:
srcset
sizes
<picture>

The exact implementation should be based on actual layout requirements.

24. Explicit Media Dimensions
Images and video containers should reserve their intended space before media finishes loading.
Use:

width
height
aspect-ratio
fixed container geometry where appropriate

This reduces layout movement.

25. Vertical Video
Short-form edits are generally portrait-oriented.
Default expected aspect ratio:
9:16

However, the actual project asset should determine the display ratio.
Do not crop an edit simply to force it into 9:16 if the source composition is different.

26. Cropping
Crop only when the visual composition remains correct.
Never crop:

faces
important subjects
text
focal action
key visual effects

without verifying the result.

27. Object Fit
For media that intentionally fills a frame:
object-fit: cover;

may be used.
For media where the full frame must remain visible:
object-fit: contain;

may be appropriate.
Do not globally apply one behavior to every video/image.

28. Video Controls
Use native video controls unless there is a real UX reason for custom controls.
Native controls provide:

Playback
Seek
Volume
Fullscreen
Browser integration
Accessibility support

Do not rebuild standard video functionality merely for visual aesthetics.

29. Custom Video Controls
Custom controls may be implemented only when they meaningfully improve the portfolio experience.
If custom controls are used:

Keyboard support is mandatory.
Focus states are mandatory.
Audio control must remain available.
Play/pause must remain obvious.
Close behavior must remain clear.
Mobile interaction must be considered.

Do not hide essential media controls.

30. Audio
The editing style relies heavily on music.
Therefore, actual portfolio playback must retain the audio track when the visitor deliberately plays the video.
However:
No audible autoplay on initial page load.

31. Muted Preview
A separate muted preview video may be used if it substantially improves portfolio browsing.
A preview must:

Be short
Be muted
Be compressed
Have no unnecessary audio track
Not block the initial load
Have a poster fallback

Do not use preview videos by default if posters perform better.

32. Preview Media
If preview videos are introduced, treat them as separate assets where necessary.
Example:
edit-01
├── poster
├── preview
└── full-video

The preview should never replace the actual high-quality playback asset.

33. Preview Audio
If the preview is permanently muted, a video without an audio track should be considered.
Removing unnecessary audio from muted preview media can reduce bandwidth. Cloudinary/MDN performance guidance supports optimizing media tracks when they are not required.

34. Video File Naming
Use consistent Cloudinary public IDs.
Recommended pattern:
portfolio/edits/edit-01
portfolio/edits/edit-02
portfolio/edits/edit-03

Possible categorization:
portfolio/edits/movie/edit-01
portfolio/edits/reels/reel-01
portfolio/edits/cinematic/edit-01

Keep naming predictable.

35. Poster File Naming
Use matching names:
edit-01.webp
edit-02.webp
edit-03.webp

or:
edit-01-poster.webp
edit-02-poster.webp

Do not use random export names.

36. Instagram URL Naming
Project data may contain the associated Instagram URL.
Example:
{
    id: "edit-01",
    instagram: "https://www.instagram.com/reel/..."
}

Do not duplicate this URL across multiple places.

37. Project Media Object
Each project should conceptually contain:
{
    id: "edit-01",
    title: "Project Title",
    category: "movie",
    poster: "...",
    video: "...",
    instagram: "..."
}

Additional fields may be added only when necessary.

38. No Duplicate Media Data
Do not store the same media URL in:

HTML
JavaScript
CSS
multiple JSON files

The project data layer should be the authoritative location for project media references.

39. Profile Photograph
Sanjan's profile photograph is a high-importance image.
It should be:

High enough quality for its largest intended display
Optimized
Correctly cropped
Responsive
Accessible

Do not serve a massive original photograph when a properly resized version is sufficient.

40. Profile Photo Loading
If the profile photo is part of the above-the-fold hero and is a major visual element, it may be prioritized.
If it appears below the fold, it should not compete with critical hero resources.

41. Decorative Images
Decorative images should be:

lightweight
replaceable
non-critical
excluded from accessibility when genuinely decorative

Do not allow decorative media to consume more bandwidth than portfolio work.

42. Icons
Use SVG for simple icons where practical.
Prefer:

inline SVG
small external SVG
lightweight icon assets

Avoid loading a full icon library for a handful of icons.

43. SVG Optimization
SVG assets should be minimized.
Remove unnecessary:

metadata
editor information
unused elements
excessive path complexity

Do not use enormous SVG exports for simple icons.

44. Icon Accessibility
Decorative icons should not be unnecessarily announced to assistive technologies.
Interactive icons must have accessible labels through their containing buttons/links.
Example:
<button type="button" aria-label="Play edit">
    <svg aria-hidden="true">
        ...
    </svg>
</button>


45. Media Loading Priority
Not all media deserves equal priority.
Priority order:
1. Critical hero media
2. Immediately visible portfolio posters
3. Near-viewport posters
4. Below-fold posters
5. Actual portfolio videos
6. Decorative media

Actual priority decisions must reflect the actual layout.

46. Poster Loading
Posters that are immediately visible may load normally.
Posters far below the fold should generally be lazy-loaded.
Do not make all posters high priority.

47. Video Loading Priority
Actual video files should generally have very low initial priority.
The preferred approach is to defer the source until user intent.

48. Preload Restrictions
Do not preload:

all portfolio videos
all project posters
all possible Cloudinary formats
every future route
every possible media variation

Preload only genuinely critical resources.

49. Resource Hints
Do not add:
preload
preconnect
dns-prefetch
prefetch

automatically.
Each hint must have a concrete reason.
Too many resource hints can create unnecessary connection and bandwidth work.

50. Cloudinary Transformations
Use Cloudinary transformations intentionally.
Typical objectives:

Correct dimensions
Automatic quality
Automatic format
Appropriate delivery

Avoid chaining unnecessary transformations.

51. Cloudinary Automatic Quality
Default video delivery should generally start from:
q_auto

Cloudinary currently describes:
q_auto
q_auto:good
q_auto:eco
q_auto:low
q_auto:best

as different quality/file-size tradeoffs.
Default:
q_auto
Use more aggressive settings only if testing shows the resulting visual quality remains appropriate.

52. Quality Hierarchy
For the main playable portfolio video:
Preferred:
q_auto

Potential future low-bandwidth/preview:
q_auto:eco

Potential tiny preview:
q_auto:low

Do not use q_auto:low for the primary portfolio video if visible quality becomes noticeably degraded.

53. Automatic Format
For normal delivery:
f_auto

should be preferred where supported by the Cloudinary configuration.
Cloudinary uses browser/device information to select an appropriate delivery format.

54. Exact Format
Use a specific format only when:

browser compatibility requires it
a technical integration explicitly requires it
a particular downstream workflow requires it
an intentional format decision has been documented

Do not force MP4 everywhere simply because MP4 is familiar.

55. H.264 Fallback
H.264 MP4 remains a practical fallback because it has broad browser support.
Do not assume that every browser must receive H.264.
Use automatic format selection where practical.
Cloudinary documents H.264 as a broadly supported fallback when more optimized codecs are unavailable.

56. Browser Format Selection
Do not implement JavaScript browser detection such as:
if (navigator.userAgent.includes(...))

to decide video formats.
Use Cloudinary/browser negotiation where possible.

57. Video Bitrate
Do not manually over-optimize bitrate before measuring.
Cloudinary can optimize video encoding/quality automatically.
If a future requirement needs a minimum bitrate, document why.
Cloudinary also supports bitrate-related delivery strategies for specific requirements.

58. Audio Bitrate
Music is important to the portfolio.
Do not over-compress the audio to the point where the edit loses impact.
At the same time, do not deliver an unnecessarily high-quality audio stream if normal web playback cannot benefit from it.
Quality should be judged perceptually.

59. Video Resolution
Do not automatically deliver 4K.
For a vertical social-media portfolio, delivery resolution should reflect:

player size
screen density
visual detail
connection quality

Cloudinary resizing should be used to avoid unnecessarily large delivery.

60. Source Resolution
Preserve a high-quality source/master separately where necessary.
Cloudinary's delivery transformations should determine what the visitor receives.
Do not repeatedly re-encode the same video manually just to create browser variants unless a real requirement exists.

61. Video Poster Extraction
When useful, posters may be generated from the video itself.
The selected frame should:

look visually strong
communicate the edit
avoid confusing freeze-frame moments
contain no accidental black frame


62. Poster Consistency
The poster and opening moments of the video should feel visually consistent.
A large visual jump between:
poster
↓
first video frame

should be avoided where practical.

63. Thumbnail Text
Do not add excessive text onto portfolio thumbnails.
The edit itself should be the main visual.
Text overlays should only be used where they improve project identification.

64. Watermarks
Do not add unnecessary watermarks to portfolio videos.
Branding should primarily come from the website and project presentation.
A watermark may only be used if there is a genuine ownership/protection reason.

65. Video Backgrounds
Do not use portfolio videos as full-screen background decoration by default.
A video should primarily represent actual work.
A background video may be considered only if it creates substantial visual value without significant performance cost.

66. Decorative Video
Decorative video has lower priority than portfolio video.
If decorative video causes a noticeable performance problem:
remove it before compromising portfolio playback.

67. Media Accessibility
Meaningful media must have appropriate alternatives.
Images need appropriate alt text.
Video interfaces need accessible controls and labels.
If a video contains meaningful spoken information, captions/transcripts should be considered.

68. Decorative Media Accessibility
Purely decorative media should not create unnecessary screen-reader noise.
For images, use:
alt=""

when appropriate.
For decorative SVG:
aria-hidden="true"

may be appropriate.

69. Media Focus
When a project video opens in a dialog:

focus the appropriate control/player area
keep the close action reachable
allow keyboard operation
return focus appropriately after closing

Do not create a media viewer that visually works but is inaccessible.

70. Fullscreen
Native fullscreen capability may be allowed where useful.
Do not build a custom fullscreen system unless necessary.

71. Mobile Video
On mobile:

Use playsinline
Maintain the correct aspect ratio
Keep controls usable
Avoid forced fullscreen unless the browser/user chooses it
Avoid autoplay with sound

playsinline should be used for inline portfolio playback where appropriate.

72. iOS Considerations
The portfolio must remain usable on mobile browsers where inline video behavior differs.
Use standard HTML video behavior rather than relying on platform-specific hacks.
Test actual mobile playback.

73. Desktop Hover Preview
A desktop hover preview may be considered.
However:

It must be muted.
It must not load every video eagerly.
It must not be required for understanding.
It should not run on coarse/touch pointers.
It should not interfere with clicking.


74. Hover Preview Loading
If hover previews are implemented, consider loading only when:
pointer enters card
+
user remains on card

rather than loading previews for every card immediately.
If the implementation becomes complex, prefer poster-only cards.

75. Touch Devices
Never rely on hover to reveal critical media information.
On touch devices:

Posters must communicate the project.
Play controls must be visible.
No hover-dependent content may be required.


76. Media Error Handling
If media fails to load:

Preserve the layout.
Preserve the poster when possible.
Show a useful fallback state.
Provide retry where appropriate.
Preserve the Instagram link when available.


77. Cloudinary Failure
If Cloudinary cannot load the video:
The project card should remain functional enough to:

identify the project
show the poster
provide retry
optionally provide Instagram fallback

Do not crash the entire Projects page.

78. Broken Poster
If a poster fails:

Keep a correctly sized media container.
Display a minimal fallback treatment.
Preserve project identification.
Do not collapse the card unexpectedly.


79. Missing Media
If project data contains no video:
Do not render a broken video player.
The UI should gracefully support:

poster-only project
Instagram-only project
future project types

if needed.

80. Media Security
Do not expose:

Cloudinary API secrets
private credentials
upload presets that should remain private
API keys requiring secrecy

in public JavaScript.
Public delivery URLs are acceptable.
Private credentials must never be placed in the GitHub repository.

81. Cloudinary Credentials
The frontend should only use public delivery information.
Do not put:
API secret
private authentication key
admin credential

into:

HTML
CSS
JS
public configuration files


82. Upload Workflow
The preferred workflow is:
CAPCUT EXPORT
     ↓
CHECK FINAL QUALITY
     ↓
UPLOAD TO CLOUDINARY
     ↓
VERIFY DELIVERY
     ↓
ADD CLOUDINARY URL TO PROJECT DATA
     ↓
ADD/VERIFY POSTER
     ↓
TEST IN SITE

Do not manually repeat media optimization across every project without reason.

83. Media Folder Organization
Recommended Cloudinary organization:
portfolio/
├── profile/
│   └── sanjan
│
├── edits/
│   ├── movie/
│   ├── reels/
│   ├── cinematic/
│   ├── music/
│   └── other/
│
└── previews/

The exact folder structure may evolve.
Keep it predictable.

84. Versioning
When a project is replaced, avoid creating confusing names such as:
edit-final
edit-final-2
edit-final-new
edit-final-new2

Prefer stable project identity with controlled media replacement.

85. Portfolio Media IDs
A project's identity should remain stable even if the actual Cloudinary asset changes.
Example:
project ID:
edit-01

Cloudinary asset:
portfolio/edits/movie/edit-01

Do not use the Cloudinary public ID itself as the only application identity.

86. Media Updates
When replacing an edit:

Keep the project ID.
Update the media reference.
Verify the poster.
Verify the Instagram link.
Test playback.
Check mobile playback.
Check that no stale URL remains.


87. Removing Projects
When removing a project:

Remove it from project data.
Remove its poster reference.
Remove its page/card reference if applicable.
Decide separately whether the Cloudinary asset should be deleted.

Do not automatically delete Cloudinary assets just because they are no longer displayed.

88. Media Duplication
Avoid duplicate media unless the variants serve distinct purposes.
Legitimate examples:
poster
preview
full playback

Not legitimate:
edit-final
edit-final2
edit-final3

where all are identical.

89. Media Quality Testing
Every featured video should be visually inspected after Cloudinary delivery.
Check:

sharpness
compression artifacts
colors
motion
audio
synchronization
aspect ratio
poster transition

Do not assume the optimized delivery looks identical to the source.

90. Audio Testing
For music-driven edits verify:

music starts correctly
no clipping
no obvious compression distortion
no unintended silence
audio/video synchronization is correct


91. Thumbnail Testing
Verify posters on:

mobile
desktop
high-density displays

The poster should remain strong at the actual card size.

92. Retina / High-Density Displays
Do not automatically serve 2× or 3× media everywhere.
Higher-density media should be used when the visual benefit justifies the additional bytes.
Responsive image techniques should determine appropriate sizes where practical.

93. Media Cache Strategy
Use normal browser/CDN caching.
Do not build a custom media cache in JavaScript.
Cloudinary/CDN/browser caching should handle ordinary repeated access.

94. Service Worker
Do not cache videos using a custom service worker initially.
A service worker is outside the current architecture.

95. Offline Media
Offline video playback is not a project requirement.
Do not implement offline storage.

96. Pre-fetching Videos
Do not prefetch all portfolio videos.
Prefetching may be considered for one exceptionally likely next video only if testing demonstrates a substantial UX benefit.
Default:
No video prefetching.

97. Near-Viewport Video Loading
Do not automatically load actual videos merely because they are approaching the viewport.
For this portfolio, user intent is the preferred trigger.

98. Poster Loading vs Video Loading
It is acceptable for a poster to load before a video.
That is the intended design.
The visitor gets an immediate visual understanding without paying the full video cost.

99. Portfolio Homepage Media
The homepage should initially emphasize:

Hero image
Five project posters
Showreel poster

Actual portfolio videos remain deferred.

100. Projects Page Media
The Projects page may display approximately 45 posters.
Only the selected/activated video should generally load.
The page must remain useful even if no videos are played.

101. Poster Quantity
Approximately 45 lightweight posters are acceptable.
The exact poster size should be optimized so their combined cost remains reasonable.
Do not create multi-megabyte thumbnails.

102. Image Loading Strategy
Typical:
Above fold
→ normal/high priority where justified

Near viewport
→ lazy

Far below fold
→ lazy

Do not apply one loading strategy to every image.

103. Media Priority
When resources compete:
Portfolio work > decoration.
Never sacrifice project media for decorative effects.

104. Media and Animation
Animated visual treatments should not duplicate what the actual video already communicates.
If a card's preview is already compelling, do not add another heavy animation layer on top of it.

105. Media and Scroll
Do not use scroll-based video scrubbing unless there is a strong creative reason and performance allows it.
Scroll-driven media can increase complexity and resource usage.
The default portfolio should use normal playback.

106. Media and Parallax
Do not use heavy parallax on large video/media elements by default.
The actual edits already provide motion.

107. Media and Background Blur
Avoid applying continuous large-area blur to video/images.
Short transition effects may be acceptable.

108. Image Editing
Website CSS should not be used to perform expensive transformations that could be generated once as an optimized asset.
If an image requires a permanent crop or visual treatment, creating an appropriate optimized asset may be preferable.

109. Responsive Crops
Where desktop and mobile need fundamentally different crops, use separate responsive assets rather than forcing one crop to serve both if the visual quality suffers.
Do this only when the difference is meaningful.

110. Media Metadata
Project data should contain only useful metadata.
Do not store:

redundant file sizes
duplicate dimensions
unnecessary codec information

unless application logic needs them.

111. Media Descriptions
Project descriptions should remain concise.
The video should remain the focus.
Do not add long technical media descriptions to the UI.

112. Media Loading Feedback
When the user requests a video and the network requires time:

Open/activate the player promptly.
Keep the poster visible while loading.
Show a subtle loading state if needed.
Do not display a blank screen.


113. Video Playback Start
The playback experience should begin as soon as practical after the user requests it.
Do not insert unnecessary animated delays before playback.

114. Play Button Feedback
When the user clicks play:

The UI should acknowledge the interaction.
Loading should be visually understandable.
Playback should transition naturally.


115. Media Cleanup
When closing a video:

Pause playback.
Remove unnecessary listeners.
Remove unnecessary active media resources where appropriate.
Prevent hidden playback.


116. Multiple Video Playback
Avoid several portfolio videos playing simultaneously.
Preferred behavior:
Video A playing
      ↓
Video B starts
      ↓
Video A pauses


117. Audio Conflict
The site must never unintentionally produce multiple audio sources simultaneously.
Only deliberately active media should produce sound.

118. Fullscreen and Orientation
Allow native browser/device behavior when users choose fullscreen.
Do not forcibly lock device orientation.

119. Browser Compatibility
Do not depend on one specific browser's video implementation.
Use:

native <video>
standard HTML attributes
Cloudinary's format optimization
progressive enhancement


120. Video Loading Edge Cases
Test:

Fast connection
Slow connection
Video immediately requested
Video requested after long delay
Video closed during loading
Video reopened
Video fails
User switches projects
Mobile playback


121. Media Performance Testing
Performance testing should inspect:

network waterfall
transferred bytes
video requests
poster requests
image dimensions
loading order
playback startup
CPU usage where relevant


122. Cloudinary Verification
When a Cloudinary URL is added:
Verify:

It resolves.
It returns the expected media.
q_auto behaves correctly.
f_auto behaves correctly where used.
Dimensions are appropriate.
Mobile playback works.
Desktop playback works.


123. Media URL Rules
Do not manually construct complicated transformation URLs in multiple locations.
Centralize media references.
Where transformation patterns are standardized, use a consistent URL strategy.

124. Cloudinary URL Changes
If the transformation strategy changes globally, update the authoritative media-delivery strategy rather than manually editing dozens of project URLs when possible.

125. Media Data Schema
The minimum recommended project media fields are:
{
    id: "edit-01",
    poster: "/assets/images/posters/edit-01.webp",
    video: "https://res.cloudinary.com/...",
    instagram: "https://www.instagram.com/..."
}

Add fields only when they provide meaningful functionality.

126. Media Placeholder
If a video is not yet available:
Use a proper placeholder state.
Do not leave a broken URL or broken player.

127. Media Fallback
If modern media delivery fails:
Use a sensible fallback rather than crashing.
For example:
optimized video
    ↓
browser-compatible fallback

Cloudinary's automatic format selection should handle most normal browser differences.

128. Accessibility of Media Controls
All custom media controls must:

be keyboard accessible
have accessible names
provide visible focus
communicate state
work without pointer hover


129. Poster Accessibility
The poster is primarily a visual representation of the video.
The surrounding project content should still expose the project identity as real text.
Do not rely on poster text alone to communicate meaning.

130. Media SEO
Do not treat media file names as the primary SEO mechanism.
Important project information should exist as actual HTML text.

131. Media Privacy
Do not expose private assets unintentionally.
Only publish media intended for the public portfolio.
Do not upload:

private client content
confidential drafts
unreleased work
personal files

without authorization.

132. Copyright Awareness
Only use media that Sanjan is authorized to display publicly in the portfolio.
Especially verify:

third-party footage
music
client-owned material
unreleased content

The website should not knowingly expose media that cannot legally be shown.

133. Instagram/Portfolio Consistency
When a project links to Instagram, ensure the linked post corresponds to the displayed portfolio edit.
Do not accidentally pair the wrong Instagram post with a project.

134. Project Ordering
Project order should be intentional.
The homepage should prioritize the strongest work.
The Projects page may use chronological, curated, or category-based ordering depending on future decisions.
Media architecture must not depend on a particular ordering.

135. Featured Media
Featured work should receive the strongest:

poster presentation
display size
visual prominence

Do not improve featured work by increasing file size unnecessarily.

136. Homepage Showreel
The showreel should use:

strong poster
deliberate play interaction
Cloudinary delivery
no audible autoplay
fast visual feedback

Do not let the showreel block the rest of the homepage.

137. Showreel Audio
Because the showreel relies on music, playback should deliberately enable audio when the visitor chooses to watch it.
Do not create a permanently muted primary showreel unless explicitly requested.

138. Mobile Showreel
The showreel should be comfortable to watch on a phone.
Preserve:

portrait composition
controls
touch interaction
audio access
clear close/back behavior


139. Media Asset Independence
The website should not require Instagram to be online for locally hosted Cloudinary portfolio playback to function.
Instagram is a supplementary external destination.

140. Cloudinary Dependence
The website does depend on Cloudinary for actual video playback.
Therefore, project posters should remain available even if Cloudinary fails temporarily.

141. Media Graceful Degradation
The hierarchy should be:
Video available
   ↓
Play normally

Video unavailable
   ↓
Poster remains
   ↓
Instagram link remains where available


142. AI-Agent Rules for Media
Before modifying media behavior, an AI agent must read:

00-PROJECT-CONTEXT.md
01-ARCHITECTURE.md
05-CSS-RULES.md
06-JS-RULES.md
07-PERFORMANCE-RULES.md
this file

The agent must understand the existing media architecture before changing it.

143. AI-Agent Media Scope
A request such as:
"Make video cards better."
does not authorize:

Changing Cloudinary strategy
Replacing the player
Changing all poster formats
Rebuilding the Projects page
Loading every video

unless explicitly requested.

144. AI-Agent Media Optimization
An AI agent must not claim a media optimization is an improvement without considering:

visual quality
file size
loading behavior
browser compatibility
mobile behavior
playback behavior


145. AI-Agent Prohibited Media Behavior
Do not:

Store all videos in GitHub
Embed dozens of Instagram posts
Preload every video
Autoplay all videos
Add video backgrounds without justification
Create multiple unnecessary media formats manually
Use huge source assets directly
Replace media with low-quality placeholders
Remove audio from the primary playback video
Break poster fallbacks
Introduce a media library unnecessarily


146. Media Change Validation
After a media-related change, test:
Visual

Poster
Crop
Resolution
Aspect ratio

Playback

Play
Pause
Seek
Audio
Close

Performance

Network requests
Video loading
Poster loading
Startup time

Responsive

Mobile
Tablet
Desktop

Accessibility

Keyboard
Focus
Reduced motion where relevant


147. Media Performance Regression
Reject changes that cause:

Full portfolio video downloads
Dramatically larger posters
Significant playback delay
Multiple simultaneous videos
Broken mobile playback
Layout shifts
unnecessary third-party media requests

unless a clearly documented requirement outweighs the regression.

148. Media Simplicity Rule
Do not create a complex media pipeline when:
Cloudinary
+
poster
+
native video
+
on-demand loading

already satisfies the requirement.

149. Media Quality Rule
Do not optimize a portfolio video until it looks bad.
The goal is:
small enough to be fast, good enough to represent Sanjan's editing accurately.
The portfolio is selling visual editing quality.

150. Media Source Integrity
Never modify Sanjan's actual edit merely to make the website easier to implement.
The website may optimize:

delivery
encoding
dimensions
format

but should not change the creative edit itself unless explicitly requested.

151. Future Media Growth
The system must support growth beyond the current approximately 45 projects.
Adding a new project should ideally require:

Upload video to Cloudinary.
Prepare poster.
Add project data.
Add Instagram URL.
Verify playback.

It should not require rewriting the media architecture.

152. Final Media Architecture
                  SANJAN EDIT
                       │
             ┌─────────┴─────────┐
             ↓                   ↓
        Instagram            Cloudinary
        original post       optimized video
                                │
                                ↓
                         portfolio player
                                │
                         ┌──────┴──────┐
                         ↓             ↓
                      desktop       mobile

Posters remain lightweight and can live in the repository when practical.

153. Non-Negotiable Media Rules

Videos are stored in Cloudinary, not the main GitHub repository.
The website should use Cloudinary for portfolio video delivery.
Portfolio videos must not all load on initial page load.
Use poster-first presentation.
Prefer on-demand video activation.
Use preload="none" when immediate video loading is unnecessary.
Use lazy loading where appropriate.
Do not autoplay audible videos on initial page load.
Use playsinline for inline mobile playback.
Preserve audio for the actual playable edit.
Use lightweight posters.
Use explicit media dimensions/aspect ratios.
Optimize media to its actual display requirements.
Prefer Cloudinary q_auto for normal automatic quality optimization.
Prefer Cloudinary f_auto for automatic delivery-format selection where appropriate.
Do not manually maintain unnecessary browser-specific video formats.
Do not automatically deliver 4K or oversized media.
Prefer progressive delivery for normal short-form playback.
Consider adaptive bitrate streaming only when actual requirements justify it.
Do not use Instagram embeds as the primary portfolio playback architecture.
Keep Instagram links available as a secondary destination.
Do not expose private Cloudinary credentials in frontend code.
Do not duplicate media URLs unnecessarily.
Keep project media references centralized.
Keep poster, video and Instagram references synchronized.
Handle missing/broken media gracefully.
Do not allow hidden videos to continue playing.
Avoid simultaneous portfolio video playback.
Do not add preview videos unless their UX benefit justifies their cost.
Do not use decorative video at the expense of portfolio performance.
Keep image assets appropriately sized.
Use responsive image techniques where beneficial.
Do not create unnecessary duplicate media variants.
Test actual Cloudinary-delivered quality rather than trusting source quality.
Test media on mobile and slower networks.
Treat performance and visual quality as equally important.
Do not let AI agents change the media architecture during local UI tasks.
Prefer the simplest media implementation that satisfies the UX.
The media pipeline must remain easy to update.
The visitor should see the quality of Sanjan's work without being forced to download everything Sanjan has ever made.

