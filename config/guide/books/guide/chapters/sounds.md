§6Chapter 19: Audio System & Sound Tags

§7In this chapter, you will learn how to configure background music for the entire guide, manage it via the global interface, and embed interactive mini-players directly into your chapter text.
§6---
§bBackground Music & Control Panel

§7The engine supports looping background ambiance, defined in your book's §bbook.json§7 config via the §e"bg_music"§7 parameter.

§7You can use either vanilla game sounds or custom §a.ogg§7 tracks loaded directly from your disk into the book's config folder (§b/sounds/§7):

§6• §7Vanilla record example: §e"bg_music": "minecraft:music_disc.pigstep"
§6• §7Custom disk track example: §e"bg_music": "otanagor"

§7Music starts automatically when the book is opened. For player convenience, a §aindependent play/pause button§7 is displayed on the guide's control panel (bottom of the screen). Players can click it at any time to mute or resume the background track without closing the interface.
§6---
§6Interactive Mini-Players in Text

§7You can embed soundtracks, horror noises, screams, or ambient clips directly into any chapter's text using the built-in §b@sound:§7 tag.

§7When parsing the file, the guide engine intercepts this tag and renders an §dinteractive player button§7 with an §a▶§7 icon in its place. You can manually set custom button text after a comma, or leave it empty — the mod will automatically pull the default button text from your book's local config file §blang/en_us.json§7:

§6• §7Syntax: §b@sound:sound_path, Button Text
§6• §7Custom text example: §b@sound:creepy_wind, Enable Ambient
§6• §7Auto-translation from lang example: §b@sound:otanagor

§7Listen to the epic Dragonborn Comes ballad directly from the mod's disk:
`§6@sound:dragonborn_comes, §8The Dragonborn Comes`
@sound:dragonborn_comes, §8The Dragonborn Comes

§7Experience the custom cosmic Interstellar track:
`§6@sound:interstellar, §5Interstellar Theme`
@sound:interstellar, §5Interstellar Theme

§7Play the vanilla Pigstep record from game resources:
`§6@sound:minecraft:music_disc.pigstep, §cMusic Disc (Pigstep)`
@sound:minecraft:music_disc.pigstep, §cMusic Disc (Pigstep)

§7Trigger a vanilla Creeper hiss from game resources:
`§6@sound:minecraft:entity.creeper.primed`
@sound:minecraft:entity.creeper.primed

§7Players can click mini-player buttons directly on chapter pages to play short audio clips. §dNote:§7 When a clip starts, the background music §eautomatically pauses§7, and §eresumes automatically§7 once the clip finishes. This prevents audio overlapping. The global play/pause toggle in the bottom menu §epreserves its state§7 and is not reset.
§6---
§7§lSee also:
[Interactive Quest System](quests) §7| [Web Links & Clipboard](links)