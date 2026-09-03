§6Chapter 17: Web Links & Clipboard Integration

§7In this chapter, you will learn how to integrate clickable web hyperlinks into your guide text to access external resources, how Minecraft safety warning systems operate, and how to natively copy text or commands to the player's clipboard.
§6---
§bExternal Web Links Syntax

§7The guide book engine fully supports the standard Markdown internet format. You can redirect players to your Discord server, YouTube tutorials, or your mod page on Forge/Modrinth:

§7• Format: §6`[Link Text](https://website_address)`
§7• Example: [Our Discord](https://discord.gg)

§7The text inside the square brackets will automatically turn §6orange§7. The main requirement is that the address in the parentheses must strictly begin with either the §6http://§7 or §6https://§7 protocol.
§6---
§bCopying Text to Clipboard

§7You can create a convenient action link to instantly copy complex console commands, coordinates, or server IP addresses directly to the player's Windows/Mac clipboard. To achieve this, use a special internal prefix §6copy:§7.

§7• Format: §6`[Button Text](copy:your_text_or_command)`
§7• Example: [Copy Command](copy:/give @s diamond)

§7Clicking this element will not close the guide book screen. The system natively pushes the specified string to the player's system clipboard, plays a quiet click sound, and displays a neat green pop-up message right above the hotbar! The player simply needs to press §6Ctrl + V§7 in the chat.
§6---
§bSafety and Freeze Protection

§7External web links function directly through the native Minecraft safety system and feature built-in fail-safes:
§7• §6Confirmation Screen§7: Clicking an internet link (http/https) immediately pauses the book, protecting players from accidentally visiting dangerous websites.
§7• §6Seamless Interruption Memory§7: If the player clicks "No" or returns from their browser, they are instantly dropped back into the book exactly where they left off, completely eliminating UI layout freezes.
§6---
§7§lSee also:
[Custom Cursors](cursor) §7| [Tables](tables)