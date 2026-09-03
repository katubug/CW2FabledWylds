§6Chapter 9: Commands and Reloading

§7In this chapter, you will learn how to use the built-in guidebook commands for quick navigation and dynamic content updates on the fly.
§6---
§bAvailable Commands

§7The system supports two main commands that run completely locally on the client side and are available to all players:

• **§a/guide§7** — instantly opens the main book selection menu (§6BookSelectorScreen§7). Players no longer need to have the physical guidebook item in their inventory or use hotkeys to open the interface.
• **§a/guide reload§7** — triggers the hot reload process for disk-based content.
§6---
§bFast Debugging for Guide Authors

§7You no longer need to close Minecraft and restart the game for every single modified line of text, color, custom image, or GIF animation. The reload command supports instant data importing directly from your disk:

§71. Open the desired chapter `.md` file or `book.json` in your book's folder at `config/guide/books/[book_id]/` using any text editor.
§72. Make changes to the text, modify color codes, update quests, or insert new media tags.
§73. Save your changes to the file.
§74. Return to the game, open the chat, and type the command: **§a/guide reload§7**.
§75. The guidebook will instantly re-read the files from the config directory, flush the old cache, and update the entire interface right in front of your eyes!
§6---
§bTechnical Details

§7The guidebook commands are an ultimate utility for modpack developers and feature the following underlying architecture:
* §7**Access Level:** Available to **all players on the client side** by default. Operator status (permission level 2) or enabled cheats on a server are no longer required, as the guidebook handles files completely locally via the config folder.
* §7**Cache Architecture:** Upon execution of the reload, the command completely clears the static item binding registry (`@bind:`), re-reads the main `book.json` settings, flushes the internal image/GIF texture caches, and forces an immediate reload of the active `GuideScreen` if the book is currently open.
  §6---
  §7§lSee Also:
  [Key Integration](g_key_integration) | [Images and Animations](images_and_gifs) | [Creating a Book](books)