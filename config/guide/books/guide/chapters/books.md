§6Chapter 14: Creating a Book

§7In this chapter, you will learn how to add a custom guide via the config folder, configure its appearance in the menu, and completely isolate the guidebook's resources.
§6---
§bConfig Folder Structure

§7To modify an existing guide or create a new book, navigate to your modpack's config folder:
§6`.minecraft/config/guide/books/[book_id]/`

§7On the mod's first launch, the system will automatically generate a ready-made template skeleton, protected from being overwritten:

    • §6`book.json`§7 — book configuration (title, icon, default chapter)
    • §6`chapters/`§7 — folder containing `.md` chapter files in English (default)
    • §6`chapters/your_language/`§7 — folder for chapters in your language (optional)
    • §6`lang/`§7 — custom language translation files (e.g., `[your_language].json`)
    • §6`textures/`§7 — custom images and logos (e.g., `textures/images/`)
    • §6`sounds/`§7 — custom sounds and background music
    • §6`structures/`§7 - custom structures
§6---
§bConfiguring book.json
§7Every book must have its own §6`book.json`§7 file in the root of its folder. You can specify either a standard item or a path to a custom image as the icon:

    §6`{
    §7  "name": "[book_id].manual.title",
    §7  "namespace": "[book_id]",
    §7  "icon": "custom_icon.png",
    §7  "default_chapter": "introduction",
    §7  ""bg_music": "otanagor",
    §7  "dev_only": false
    §6}`

§7Parameters:
§e`name`§7 — localization key for your book's title in the menu (lang)
§e`icon`§7 — item ID or path to a custom 16x16 image in ResourceLocation format.

§7Examples of filling the `§eicon§7` parameter:
    - §6`"minecraft:book"`§7 — use a vanilla book as the icon.
    - §6`"twilightforest:minoshroom_trophy"`§7 — use an item from another mod.
    - §6`"[book_id]:textures/images/custom_icon.png"`§7 — use a custom `.png` texture from your book's `textures/images/` folder on disk.
    - §6`"custom_icon.png"`§7 - use a custom texture in `.png` format from the `textures` folder of your book on disk, the path to the title will automatically find the path to your icon.

    §e`default_chapter`§7 — filename of the book's starting chapter (without .md)
    §e`dev_only`§7 — if `§6true§7`, the book will be hidden from regular players
§6---
§bTitle Localization

§7Add the translation for your book's title to a localization file on disk:

    §6`config/guide/books/[book_id]/lang/[your_language].json`
    §6`{
    §7  "[book_id].manual.title": "§6Custom Guidebook§7"
    §6}`

§7The system injects these strings directly into the game's memory on the fly.
§6---
§bHiding the Developer Guide

§7If you are using §6Guide§7 as a library, the default guide is hidden from players by default.
§7To enable or disable it, open the modpack's client config:
§6`config/guide/guide-client.toml`
§7Find the parameter:
§6`show_dev_manual = true`

§7Set it to §6false§7 to hide the manual. Modpack developers can change this value at their discretion.
§6---
§bHow it works in 1.2.1:

    §7• On startup, §6BookRegistry§7 scans the external §6config/guide/books/§7 directory
    §7• Each book has disk priority and is fully isolated by its folder name
    §7• Any changes you make in the config will never be overwritten by the mod's JAR file
    §7• The selection menu (§6BookSelectorScreen§7) renders the book list based on disk folders
    §7• Clicking a book opens §6GuideScreen§7, which loads `.md` texts, GIFs, and images directly from the book's folder
§6---
§bTips

    • §e`Hot Reload`§7 — use the client command §6`/guide reload§7 to instantly update texts, quests, and images during gameplay, without restarting Minecraft!
    • §e`Images and GIFs`§7 — you can call media files directly from the book's folder by specifying the path via its name: §6`@image:[book_id]:textures/images/logo.png`§7.
    • §e`Third-party Mods`§7 — item tags §6`@item:`§7 and mob tags §6`@mob:`§7 automatically support IDs from any other mods installed in the modpack.
§6---
§7§lSee also:
[Hot Reload](hot_reload) §7| [Images and Animations](images_and_gifs) §7| [Button Integration](g_key_integration)