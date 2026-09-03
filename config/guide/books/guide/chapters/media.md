§6Chapter 20: Media System and Video Tags

§7In this chapter, you will learn how to embed videos directly into guide pages to demonstrate mechanisms, craft guides, or add dynamic illustrations.
§6---
§bInserting Videos from Local Files

§7To add a video from a file to the chapter text, use the **§6@video§7** command. It automatically creates an embedded player with control buttons:
§7• §6Play / Pause§7 — starts or pauses the video.
§7• §6Replay§7 — appears after the video ends instead of the play button.
§7• §6Volume§7 — adjusts the sound level.
§7• §6Fullscreen mode§7 — expands the player over the book.

§eSyntax for a local file:

§6@video:file_path.mp4

§7Video files are placed in the `§6videos/` §7folder inside the book folder. By default, the guide already contains several built-in videos (they are in the mod resources). Users can add their own videos by placing them in the same folder in the game config:

`§6config/guide/books/guide/videos/`

§7If a file with the same name exists both in built-in resources and in the user folder, the user file takes priority. Supported formats: mp4, avi, mkv, webm, and others that FFmpeg can decode.

§ePosition and scale parameters:

§7The **§6@video§7** command supports additional comma-separated parameters after the file name:

§7• §6Position§7: `§6left§7`, `§6center§7`, `§6right§7` — alignment of the player on the page.
§7• §6Scale§7: a number indicating the width in pixels (for example, `§6240§7`, `§6360§7`, `§6720§7`). You can specify larger values, but remember the page width.
§7• §6Title§7 (optional): text in parentheses after all parameters, displayed centered **in a frame above the player**. Color codes § can be used.

§eLocal video syntax examples (without actual files):

§7Local video code example: `§6@video:otanagor.mp4,center,720,(§bLich King§6)`
§7Local video code example: `§6@video:cars.mp4,center,720,(§5Street Racers§6)`

§7You can combine parameters in any order, but first specify the file name, then position, then scale, then title in parentheses.
§6---
§bInserting Videos via Direct Link (URL)

§7You can also insert a video located on the internet by specifying a direct link to the file (only §6http/https§7). This can be a link to a file in your GitHub repository, Dropbox (with `§6dl=1`§7 parameter), your own server, etc.

§eSyntax for URL:

§6@video:https://file_link.mp4

§7When you first open such a chapter, the video will be automatically downloaded to the game cache (folder `§6config/guide/cache/media/`§7). Reopening the same link will use the cached file without re-downloading. Maximum downloaded file size — §c200 MB§7.

§cImportant: the link must point directly to the file, not to a view page. For example, for GitHub use a §6raw link §c(starting with `§6raw.githubusercontent.com`§c), not `§6github.com/.../blob/...`§c.

§eExample video by URL with title:

@video:https://drive.google.com/uc?export=download&id=1IIpPVnjf0Lf5UJFDE8vbFh8PhswA-fnN,center,720,(§bLich King§7)
§7Code example: `§6@video:https://drive.google.com/uc?export=download&id=1IIpPVnjf0Lf5UJFDE8vbFh8PhswA-fnN,center,720,(§bLich King§6)`

@video:https://raw.githubusercontent.com/deaddiesel/Guide/main/src/main/resources/assets/guide/guide/cars.mp4,center,360,(§5Street Racers§7)
§7Code example: `§6@video:https://raw.githubusercontent.com/deaddiesel/Guide/main/src/main/resources/assets/guide/guide/cars.mp4,center,360,(§5Street Racers§6)`

§7Position, scale, and title parameters are specified exactly the same as for local files, separated by commas after the link.
§6---
§bTechnical Information

§7The player is fully integrated into the guide engine and does not require additional codecs. Video decoding is performed through the built-in multimedia engine based on FFmpeg, ensuring stable operation on any configuration.

§7• §6Smooth playback§7: video is synchronized with the game frame rate, ensuring smoothness even at high resolutions.
§7• §6Auto-pause on focus loss§7: If you switch to another window or minimize the game, the video automatically pauses to save resources. Playback can be resumed manually when returning.
§7• §6Stop on chapter change§7: When switching to another chapter or closing the book, the video stops and is unloaded from memory. This prevents resource leaks and maintains high FPS.
§7• §6URL video caching§7: Files downloaded via links are saved in the `§6config/guide/cache/media/` §7folder and reused without re-downloading. You can clear the cache manually if needed.

§6---
§7§lSee also:
[Syntax and links](syntax) §7| [Tables](tables) §7| [Crafts and recipes](crafts)