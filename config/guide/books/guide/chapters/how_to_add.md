§6Chapter 2: Creating Chapters

§7All pages and book content are managed through a single file: §6index.md
§6---
§7Open this file and add a new line following this strict template:
§6file_name §7| §6Chapter Title §7| §6item_id
§6---
§7Examples of filling out lines:
    §6structures §7| §63D Structures §7| §6minecraft:stone_bricks
    §6crafts §7| §6Crafting and Recipes §7| §6minecraft:crafting_table
    §6syntax §7| §6Syntax and Links §7| §6minecraft:chain
§6---
§7Creation Rules:

§71. The first word is the §6file name§7 (§6without the .md extension§7)
    §7§o(§6§oStrictly Latin characters, lowercase, no spaces§7§o)
§72. After the first §6| §7sign — the §6button text§7 in the guide menu
§73. (§6Optional§7) After the second §6| §7sign — the §6item icon§7
    §7§o(§6§oFormat: mod_id:item_id§7§o)
§74. The created §6.md §7chapter files must be located on disk in the folder:
    §7§o(§6config/guide/books/[book_id]/chapters/§7§o)
§75. The book menu and chapter list will update after the **§a/guide reload§7** command
§6---
§6§lTip:
§cIf you leave the icon field empty or specify a non-existent ID, the button will display only text. You are free to use vanilla IDs or item IDs from any other mods installed in your modpack!