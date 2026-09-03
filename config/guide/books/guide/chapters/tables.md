§6Chapter 16: Tables

§7In this chapter, you will learn how to create neat multi-line tables to display characteristics, mechanism parameters, or item durability using standard Markdown markup.
§6---
§bCreating Tables for Mod Authors

§7You can structure any complex information into a convenient Excel-style grid. The guide engine automatically calculates the column width based on content and applies signature high-tech borders:

| Item | Damage | Speed | Description |
| --- | --- | --- | --- |
| §6Hi-Tech Sword | §c14.0k | §b1.6 | Slices through Void armor |
| §5Obsidian Drill | §a2.0k | §e8.5 | Instantly breaks blocks |

§eFormatting Rules in .md Files:

§71. Use the vertical bar **§6|§7** to separate table columns (cells).
§72. Each table row must strictly start and end with the **§6|§7** symbol.
§73. The second row is a technical header separator. Write it as **§6| --- | --- |§7** (minimum three hyphens per column).
§74. You can freely use standard § formatting codes directly inside cells to color text or change styles.

§7The guide engine will distribute the width, wrap long sentences onto new lines, and maintain readability on any GuiScale!
§6---
§bTechnical Information
§7The table parsing and rendering system is completely optimized to maintain stable FPS:
§7• §6Single Parsing§7: Text is split into cells strictly once when clicking on a chapter. Heavy regular expressions and searches for `|` symbols are not executed in the renderer itself.
§7• §6Word Wrap (Wrap Text)§7: If text does not fit into the cell width, it automatically wraps below, dynamically increasing the height of that specific row.
§7• §6Two-Dimensional Scrolling§7: If a table is too huge or wide, it smoothly scrolls vertically along with the page, and horizontally it can be moved by holding down the left mouse button. Dynamic scissor clipping isolates the borders from the main menu.
§6---
§7§lSee also:
[Syntax and Links](syntax) §7| [Crafts and Recipes](crafts) §7| [Spoilers](spoilers)