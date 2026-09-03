§6Chapter 15: Custom Cursors

§7In this chapter, you will learn how to integrate a unique mouse cursor skin for your guidebook, how dynamic texture swapping works, and the technical requirements for the files.
§6---
§bInterface Customization for Modpack Authors

§7You can style the mouse pointer to match your modpack's theme (for example, making it §6golden§7, §5obsidian§7, or in the form of a §dmagic dagger§7). The system will automatically apply the styling as soon as the player opens your book:

§71. Prepare your cursor image. It must be strictly in §6.png§7 format.
§72. Ensure the canvas size is exactly §632x32 pixels§7 (this is the standard requirement of the GLFW graphics engine).
§73. The click point (the tip of the arrow) must be located in the top-left corner — at pixel coordinates §e(0, 0)§7.
§74. Rename the file strictly to §6custom_cursor.png§7.
§75. Place it in your book's folder on the hard drive at the path: §6config/guide/books/[book_id]/textures/gui/custom_cursor.png

§7When opening the guidebook, the system will automatically pull the texture from your book's active directory on disk!
§6---
§bTechnical Information

§7The cursor swapping system works directly through the native GLFW library and includes built-in optimizations:
§7• §6Domain Isolation§7: If a specific guidebook does not have a §6custom_cursor.png§7 file in its folder, the system will catch the exception and keep the game's standard white cursor without crashing the interface.
§7• §6Leak Protection§7: The texture is loaded into GLFW memory strictly once during screen initialization. When closing the book or returning to the main menu, the memory is natively freed, returning the player to the standard Windows system arrow.
§6---
§7§lSee also:
[Creating a Book](books) §7| [Spoilers](spoilers) §7| [Creating Chapters](how_to_add)