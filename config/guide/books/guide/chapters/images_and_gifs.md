§6Chapter 10: Images and Animations

§7In this chapter, you will learn how to add images to guide pages.
§6---
§bSyntax

§6`@image:path,width,height,alignment`

§7Parameters:
• §epath§7 — texture location
• §ewidth/height§7 — display size in pixels
• §ealignment§7 — left, center, or right (default: left)
§6---
§bExamples

§7Stone texture from Minecraft (centered):
§6`Example text: @image:minecraft:textures/block/stone.png,32,32,center`

@image:minecraft:textures/block/stone.png,32,32,center

§7Dirt texture from Minecraft (left-aligned):
§6`Example text: @image:minecraft:textures/block/dirt.png,64,64`

@image:minecraft:textures/block/dirt.png,64,64,left

§7Obsidian texture from Minecraft (right-aligned):
§6`Example text: @image:minecraft:textures/block/dirt.png,128,128`

@image:minecraft:textures/block/obsidian.png,128,128,right

§7Custom mod textures:
§6`Example text: @image:guide:textures/images/schema.png,300,200,center`
§6---
§7Displaying an image from a direct link (supports PNG and JPEG formats):
§6`Example text: @image:https://ru-minecraft.ru/uploads/posts/2025-12/1764965897_parched_je1.png,75,150,center`

@image:https://ru-minecraft.ru/uploads/posts/2025-12/1764965897_parched_je1.png,75,150,center
§6---
§bImportant!

§7• Mind the image proportions to avoid distortion
§7• Format: §6PNG
§7• Location: §6guide:textures/images/logo.png or minecraft:textures/block/stone.png)
§7• Recommended size is a power of two §6(16, 64, 128, 256, 512)
§6---
§bAnimations (GIF)

§7Now you can insert animated images. The syntax is similar to images.

§6`@gif:path,width,height,alignment`

§7Parameters:
• §epath§7 — file location (only .gif)
• §ewidth/height§7 — display size
• §ealignment§7 — left, center, right (default: center)

§7§lExamples:

§7Left-aligned: §6`@gif:guide:textures/gifs/parrot.gif,128,128,left`
@gif:guide:textures/gifs/parrot.gif,128,128,left

§7Centered: §6`@gif:guide:textures/gifs/bee.gif,128,128,center`
@gif:guide:textures/gifs/bee.gif,128,128,center

§7Right-aligned: §6`@gif:guide:textures/gifs/piglin.gif,128,128,right`
@gif:guide:textures/gifs/piglin.gif,128,128,right
§6---
§7Displaying a direct link to a GIF: §6`https://media.tenor.com/6p1opSVD6DEAAAAi/michel-jackson.gif,128,128,center`
@gif:https://media.tenor.com/6p1opSVD6DEAAAAi/michel-jackson.gif,128,128,center
§6---
§7§lSee also:
[Crafts and Recipes](crafts) §7| [Structures](structures) §7| [Projection](projection)