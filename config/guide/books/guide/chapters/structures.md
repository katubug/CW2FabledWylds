§6Chapter 6: 3D Structures

§7In this chapter, you will learn how to add 3D structures to the guide.
§6---
§bWhat are Structures?
§7Structures are 3D models of multiblock mechanisms and builds.

§7Features:
§6• §7Rotate with mouse or buttons
§6• §7Zoom (in/out)
§6• §7Layer-by-layer view
§6• §7World projection (hologram)
§6---
§bHow to Add a Structure?

§7§lStep 1: Create a .nbt file
§7Save the build to §6config/guide/books/[book_id]/structures/file_name.nbt

§7Saving methods:
§6• §7Use the §d/structure save§7 command in Minecraft
§6• §7Structure Block
§6• §7MCEdit / WorldEdit

§7§lStep 2: Add the tag to a chapter
§7At the beginning of the .md file, write:

§6`@structure:file_name`

§7Important: §cDO NOT put a space after the colon!
§7Correct: §6`@structure:generator_setup`
§7Incorrect: §c`@structure: generator_setup`
§6---
§bTab Names (@tab)

§7By default, tabs are named §6#1, #2, #3

§7To set a custom name, add §6`@tab:Name`§7 before the structure:

§6`@tab:Frame`
`@structure:generator_setup`

§7If @tab is not specified:
§6• §7On tab: §f#1, #2, #3
§6• §7In tooltip:  Warning

§7If @tab is specified:
§6• §7On tab: §f#1, #2, #3
§6• §7In tooltip: full name

§7Limit: §cmaximum 3 structures per chapter
§6---
§bView Controls

§6[ ◀ ] [ ▶ ] §7— Rotation
§6[ Auto ] §7— Auto-rotate
§6[ 🔍 Lens - / + ] §7— Zoom (0.25x - 1.4x)
§6[ Layer - / All / + ] §7— Layer-by-layer mode

§7Hover over a block to see its name
§6---
§bTips

§7§l1. Size
§7Optimal: §6up to 16x16x16 blocks
§7Large structures cause lag

§7§l2. Orientation
§7The structure should face §6south

§7§l3. Optimization
§7Remove air blocks from the .nbt file
§6---
§bExample

§7Creating a multiblock generator:

§6`@tab:Frame`
`@structure:generator_frame`

§6`@tab:Core`
`@structure:generator_core`

§6`@tab:Cooling`
`@structure:generator_cooling`
§6---
§bPossible Errors

§c[Error] File not found
§7→ Check path: §6config/guide/books/[book_id]/structures

§c[Error] Structure too large
§7→ Maximum §616x16x16

§c[Error] Failed to load NBT
§7→ File is corrupted
§6---
§7§lSee also:
[Crafts](crafts) §7| [Syntax and Links](syntax) §7| [Projection](projection)

§a★ §7Happy building!

@tab:Structure
@structure:generator_setup

@tab:A large pillager outpost
@structure:pillagers

@structure:house