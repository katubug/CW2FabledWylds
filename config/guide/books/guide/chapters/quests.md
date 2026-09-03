§6Chapter 18: Interactive Quest System

§7In this chapter, you will learn how to create §alive to-do lists§7 and task systems directly on the guide pages, how §eserver-side progress saving§7 works, and how to properly configure unique quest IDs.
§6---
§bCheckbox Creation Syntax

§7The guide book fully supports the standard §bMarkdown format§7 for task lists, enhanced with unique technical identifiers:

§6• §7Format: §6`- [ ] (unique_id) Your task | Your reward`
§6• §7Example (§6In text§7): - [ ] (test_quest_1) §7Find §b10 diamonds|§7(Reward: §a+100 XP§7)
§6• §7Example (§6New line§7):
- [ ] (test_quest_2) §7Find §a10 emeralds|§7(Hint: §eLook in the mountains§7)

§7When reading the file, the book engine will automatically cut out the technical ID in parentheses and render a neat pixel checkbox §e[ ]§7 instead.

§7If the task is already completed by the player, the system will display a green checkmark §7[§2✔§7]§7 instead of an empty box, the task text itself will darken and be crossed out with a line, while the text after the §6|§7 separator will remain clean and bright.
§6---
§6Server-Side NBT Saving Features

§7Unlike third-party mods, the guide's quest system has §bmonolithic protection§7 against progress resets and a flexible toggle logic:

§a✔ §eFull Interactivity§7: Players can freely check and uncheck boxes with a mouse click if they clicked by mistake or want to reset their checklist.
§a✔ §bWipe Protection (Anti-Cheat)§7: Progress is saved directly to the player's §eNBT data§7 on the server side (into the vanilla §bplayer.dat§7 file). Players cannot reset quests by deleting local configuration files or their launcher cache.
§a✔ §dSmart Login Synchronization§7: Upon connecting to a server or a single-player world, the system automatically reads NBT tags and instantly restores all checkmarks in the book. When a task is completed, the game plays a victorious §aexperience chime§7!
§6---
§7§lSee also:
[Web Links & Clipboard](links) §7| [Tables](tables)