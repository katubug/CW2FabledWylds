## Mod Updates
- **AdvancedCoreInfo** updated from 1.0.0 to 1.1.0
- **AdvancedLootInfo** updated from 2.0.1 to 2.1.0
- **BaguetteLib** updated from 2.0.3 to 2.0.6
- **Cupboard mod** updated from 4.0 to 4.1
- **Dynamic Lantern** updated from 1.8.9 to 1.9.5
- **FancyMenu** updated from 3.9.10 to 3.9.12
- **FancyToasts** updated from 1.5.0 to 1.5.1
- **Farmer's Delight** updated from 1.3.3 to 1.3.4
- **ImmediatelyFast** updated from 1.6.12+1.21.1 to 1.6.13+1.21.1
- **Just Enough Items** updated from 19.44.0.405 to 19.51.0.417
- **ModernFix** updated from 5.27.20+mc1.21.1 to 5.27.23+mc1.21.1
- **Moonlight Lib** updated from 1.21.1-3.5.0 to 1.21.1-3.5.2
- **More Quest Types** updated from 1.3.5 to 1.3.6
- **More Sniffer Flowers** updated from 6.7 to 6.7.2
- **Polytone** updated from 1.21-4.0.1 to 1.21-4.1.0
- **Quest Enhance** updated from 1.21.1-neoforge-3.7 to 1.21.1-neoforge-3.8
- **Roots** updated from 4.0.0.29-alpha to 4.0.0.30-alpha
- **Sodium** updated from 0.8.13-beta.2+mc1.21.1 to 0.8.13+mc1.21.1
- **Supplementaries** updated from 1.21.1-3.9.3 to 1.21.1-3.9.6
- **Titanium** updated from 4.0.45 to 4.0.50
- **Twilight Forest Final Boss** updated from 2.1.1 to 2.1.2

## New Mods
- **Backpack RS Bridge** v1.0.0+mc1.21.1-neoforge
- **Bow Infinity Fix** v3.1.1
- **Corail Tombstone** v9.5.5
- **Dreamwoods** v2.5
- **Equipment Compare** v1.3.13
- **LambDynamicLights** v4.8.10+1.21.1
- **Longwings** v0.9.5
- **LucidAdvancements** v1.2.1
- **MoogsTemplesReimagined** v2.0.0
- **RSInfinityBooster** v1.21.1-1.0.0.48
- **Refined Schematics** v1.0.0
- **Refined Storage - Quartz Arsenal** v1.0.8
- **Reliquified Twilight Forest** v0.5.3
- **Reliquified Twilight Forest new relics fix** v1.0.1
- **Stellar View** v0.5.3
- **Universal Grid** v1.21.1-0.3.2
- **reliquified_artifacts** v1.0.8

## Removed Mods
- **Better Advancements** (was v0.4.3.21)
- **Corpse** (was v1.21.1-1.1.13)
- **Corpse Curios Compatibility** (was v4.0.1)
- **Cosmetic Armor x Corpse Compat** (was v4.0.1)
- **Cubes Without Borders** (was v3.0.0+mc1.21)
- **Dreamwoods** (was v2.4)
- **Heartstone: Connection** (was v2.1.0)
- **MoogsTemplesReimagined** (was v1.1.3)
- **Reese's Sodium Options** (was v2.0.5+mc1.21.1)
- **Sodium Dynamic Lights** (was v1.0.9)
- **Sodium Options API** (was v1.0.10)
- **Sodium Options Mod Compat** (was v1.0.0)


## Quest Changes
- Renovated bg images and stuff and added a bunch of warnings that things are WIP lol
- Removed the Globetrotting chapter entirely** and folded its waystone quests into the Discovery chapter.
- Discovery chapter: added a quest for locating the MSS arena structure (mss:arena)
- Combat & Gear: removed some uninteresting quests and fixed some rewards
- Farmer's Delight chapter background swapped from yellow to green book style, added new section title art, and rearranged a bunch of quests (organic compost, mushroom colony, canvas, rope, planter, market quests all moved). Corn bag rewards/tasks swapped over to Hearth & Harvest's corn crate item instead of Farm & Charm's.
- Fishing chapter reworked significantly: changed several rewards from plain items to loot table parcels, added a new golden bobber task alongside the gold hook quest, and repositioned most nodes with a new background.
- Culinary Arts: added a dependency link for the big wooden spoon quest, changed several rewards to use loot tables instead of plain items, removed some placeholder "missing item" tasks/rewards, and swapped alpine salt for Hearth & Harvest's salt item.
- Ancient Rootss: tweaked reward tables
- Witchery chapter: added a new "Witch's Garden" section title, gonna try to lay things out more nicely
- Building & Decorating: fixed some rewards
- Beginnings chapter: removed the waystone activation quest (moved to Discovery), changed the amulet of connection reward to a twinbound feather, added a new decorative grave reward alongside the player statue reward, and tweaked shapes/sizes on a couple of starter quests.
- Quest Shoppe: made the starter quest non-repeatable.
- Wildlife chapter: swapped the pet bed filter tag from domesticationinnovation to redomesticate
- Global change: quest shape presets got reworked across the board (advancement, animal, boss, completion, item, locate, milestone, progression, start, turnin all switched to new "katu_" style shapes), plus a new "config" and "hunt" preset were added.
- Crop seeds reward table: swapped Farm & Charm kernels for Hearth & Harvest corn kernels.
- Various reward type changes throughout: converted to the new parcel delivery system

## Config Changes
- Hamster lures now include various cheese types from Meadow and Hearth and Harvest mods
- Fancy beds from Handcrafted mod assigned to tier system for better bed mechanics compatibility
- Vanilla beds no longer automatically use tier respawn rules (so they should set spawn correctly)
- Refined Storage no longer requires energy to operate
- Fixed minimap a little
- Seams and Stitches no longer disables vanilla wool dyeing
- Packed Packs profiles reorganized
- Reliable Replacer config added for nether wart replacement

## Default Config Changes
- Disabled death waypoints in FTB Chunks client config. HOPEFULLY.

## Server Script Changes
- Rewrote bone meal disable logic to check for custom crops and improved player feedback handling
- Refactored custom item recipes to use loops instead of repetitive stonecutting entries for carved columns and parquets across multiple wood types
- Added custom ingredient replacements for farm_and_charm and other mod items in specialized recipe types (roaster, crafting bowl, mincer, pot cooking, stove, meadow cooking)
- Yoinked hexerei_woodcutting.js from OG and jankily updated it

## Startup Script Changes
- Added create:wheat_flour to nuked items list
- Added farm_and_charm:flour_bag and farm_and_charm:kernels to nuked items list
- Added 75 refinedstorage items (controllers, autocrafters, autocrafting monitors/upgrades, and related blocks) to nuked items list
- Removed unusual_furniture items from nuked items list

## Client Script Changes
- Added item name overrides for potato soup, sewing needle, and corail bone needle (temporary lmao)

## Asset Changes
- overhauled the ftb quests look a lot
- Added custom Alagard font support for quest UI
- Added custom quest shape styles
- Replaced some Corail assets

## Datapack Changes
- Updated Farmers Delight cutting recipes (eyeball fish, fortress grouper, hibiscus, lavender, wolfsbane) to use new tool format with farmersdelight:item_ability and common knife tag instead of old forge:tools/knives tag
- Replaced multiple advancements for farm and charm and meadow, they will no longer reference removed items.

 
## Individual Mod Changelogs

_________________
# **Changed Mods**
## Cupboard
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/cupboard)
### cupboard-1.21.1-4.1.jar
4.1: Add nicer line breaks to improve config readability, does not affect older configs

## More Sniffer Flowers
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/more-sniffer-flowers)
### More Sniffer Flowers 6.7.2 - 1.21.1 Neoforge
*   Actually fix Tiny Multiblock lib being downgraded by starcatcher this time
### More Sniffer Flowers 6.7.1 - 1.21.1 Neoforge
*   Fixed Tiny Multiblock Lib being downgraded (and crashing) when paired with starcatcher

## Just Enough Items (JEI)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/jei)
### 19.51.0.417 for NeoForge 1.21.1
### Current release 19.51.0
    *   Attach the final shaded binary and sources jars directly to each Maven publication. This keeps Gradle module metadata and unshaded intermediate jars out of the repository, so ordinary mod dependencies always resolve a self-contained JEI jar.
    *   Draw JEI foreground layers after non-container screens finish rendering so interactive ingredient tooltips do not depth-clip recipe contents. Restore recipe widgets to their inherited Z.
    *   Restore the explicit furnace fuel list needed by 1.21.1 cooking categories. Port the 1.20.1 rendering depth fixes for recipe widgets, slot badges, and interactive ingredient tooltips.
    *   treat display overrides as the slot’s current contents for rendering, tooltips, lookup, bookmarks, focus, highlights, tag navigation, and ingredient-counts
    *   refresh dynamic recipe layouts after overrides change
    *   use ISlottedRecipeWidget hit testing for clicks and interactive tooltips.
### 27.35.0.90 for NeoForge 1.21.11
### Current release 27.35.0
    *   Attach the final shaded binary and sources jars directly to each Maven publication. This keeps Gradle module metadata and unshaded intermediate jars out of the repository, so ordinary mod dependencies always resolve a self-contained JEI jar.
    *   treat display overrides as the slot’s current contents for rendering, tooltips, lookup, bookmarks, focus, highlights, tag navigation, and ingredient-counts
    *   refresh dynamic recipe layouts after overrides change
    *   use ISlottedRecipeWidget hit testing for clicks and interactive tooltips.
    *   Use the normal implementation project dependency and select Loom named elements only where pre-26.1 remapping requires it.
    *   Keep the existing remapped Fabric API artifacts and POM, while attaching its Java component so Gradle can map the loader dependency to the correct publication.
### 19.51.0.416 for NeoForge 1.21.1
### Current release 19.51.0
    *   Draw JEI foreground layers after non-container screens finish rendering so interactive ingredient tooltips do not depth-clip recipe contents. Restore recipe widgets to their inherited Z.
    *   Restore the explicit furnace fuel list needed by 1.21.1 cooking categories. Port the 1.20.1 rendering depth fixes for recipe widgets, slot badges, and interactive ingredient tooltips.
    *   treat display overrides as the slot’s current contents for rendering, tooltips, lookup, bookmarks, focus, highlights, tag navigation, and ingredient-counts
    *   refresh dynamic recipe layouts after overrides change
    *   use ISlottedRecipeWidget hit testing for clicks and interactive tooltips.
    *   Use the 1.21.11 API version line, bumping it from 27.28.0 to 27.29.0.
### 27.35.0.89 for NeoForge 1.21.11
### Current release 27.35.0
    *   treat display overrides as the slot’s current contents for rendering, tooltips, lookup, bookmarks, focus, highlights, tag navigation, and ingredient-counts
    *   refresh dynamic recipe layouts after overrides change
    *   use ISlottedRecipeWidget hit testing for clicks and interactive tooltips.
    *   Use the normal implementation project dependency and select Loom named elements only where pre-26.1 remapping requires it.
    *   Keep the existing remapped Fabric API artifacts and POM, while attaching its Java component so Gradle can map the loader dependency to the correct publication.
### 19.50.0.414 for NeoForge 1.21.1
### Current release 19.50.0
    *   treat display overrides as the slot’s current contents for rendering, tooltips, lookup, bookmarks, focus, highlights, tag navigation, and ingredient-counts
    *   refresh dynamic recipe layouts after overrides change
    *   use ISlottedRecipeWidget hit testing for clicks and interactive tooltips.
    *   Use the 1.21.11 API version line, bumping it from 27.28.0 to 27.29.0.
    *   Use the 1.21.11 API version line, bumping it from 27.27.0 to 27.28.0.
### 27.34.0.88 for NeoForge 1.21.11
### Current release 27.34.0
    *   treat display overrides as the slot’s current contents for rendering, tooltips, lookup, bookmarks, focus, highlights, tag navigation, and ingredient-counts
    *   refresh dynamic recipe layouts after overrides change
    *   use ISlottedRecipeWidget hit testing for clicks and interactive tooltips.
    *   Use the normal implementation project dependency and select Loom named elements only where pre-26.1 remapping requires it.
    *   Keep the existing remapped Fabric API artifacts and POM, while attaching its Java component so Gradle can map the loader dependency to the correct publication.
    *   Publish shaded artifacts through the standard Java component now that ModShade no longer provides its legacy standalone component.
### 19.44.0.413 for NeoForge 1.21.1
### Current release 19.44.0
    *   Use the normal implementation project dependency and select Loom named elements only where pre-26.1 remapping requires it.
    *   Keep the existing remapped Fabric API artifacts and POM, while attaching its Java component so Gradle can map the loader dependency to the correct publication.
    *   Publish shaded artifacts through the standard Java component now that ModShade no longer provides its legacy standalone component.
    *   Preserve JEI's GUI scaling when replacement textures omit metadata.
    *   Backport the complete brewing extension feature and cleanup to 1.21.1.
    *   Adapted for 1.21.1 by refreshing both static and scalable sprites after resource reloads.
### 27.30.0.87 for NeoForge 1.21.11
### Current release 27.30.0
    *   Use the normal implementation project dependency and select Loom named elements only where pre-26.1 remapping requires it.
    *   Keep the existing remapped Fabric API artifacts and POM, while attaching its Java component so Gradle can map the loader dependency to the correct publication.
    *   Publish shaded artifacts through the standard Java component now that ModShade no longer provides its legacy standalone component.
    *   Use Minecraft 1.21.11 resource pack format 75.0 instead of the 26.1 format so the startup resource-pack test can run.
    *   Backport the non-container screen foreground bridge so JEI overlays render before Minecraft's deferred tooltips.
    *   Preserve JEI's GUI scaling when replacement textures omit metadata.
### 27.30.0.85 for NeoForge 1.21.11
### Current release 27.30.0
    *   Use the normal implementation project dependency and select Loom named elements only where pre-26.1 remapping requires it.
    *   Keep the existing remapped Fabric API artifacts and POM, while attaching its Java component so Gradle can map the loader dependency to the correct publication.
    *   Publish shaded artifacts through the standard Java component now that ModShade no longer provides its legacy standalone component.
    *   Use Minecraft 1.21.11 resource pack format 75.0 instead of the 26.1 format so the startup resource-pack test can run.
    *   Backport the non-container screen foreground bridge so JEI overlays render before Minecraft's deferred tooltips.
    *   Preserve JEI's GUI scaling when replacement textures omit metadata.
    *   Use the 1.21.11 API version line, bumping it from 27.28.0 to 27.29.0.
    *   Use the 1.21.11 API version line, bumping it from 27.27.0 to 27.28.0.

## MTR - Moog's Temples Reimagined
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/mtr-moogs-temples-reimagined)
### Moog's Temples Reimagined 2.0.0-1.21+ [UNIVERSAL]
### Added
*   A config to make the temples replace their vanilla counterparts. This also adds vanilla loot tables to those structures and some other changes so that they are as compatible with other mods as possible.
    *   ![image](https://pub-24a4e0e7ea8544a5b6f73c3a23512589.r2.dev/images/f9f9f9afe6fe4b0790f9de2ccb1e0ddc.png)
    *   The stronghold uses vanilla's circular ring pattern: about a fifth as often normally, and as often as vanilla's when replacing it.
*   A rarity slider, a 3D preview button, and an on/off toggle for every temple in the Moogs Structures config. Changes apply on world reload.
*   All custom mobs now load correctly across all mc versions.
*   Bring a brush. Suspicious sand and gravel has been added to various structures and now properly contains loot.
*   Every decorated pot now holds something, across the badlands, desert, jungle, and stronghold (only on supported mc versions)
*   Armour stands in the stronghold and jungle temple now wear randomized armour.
*   Infested blocks through the stronghold at vanilla's rate.
*   New stronghold rooms!
*   Loot in many previously empty containers across the badlands, desert, jungle, and stronghold.
*   Three nether temple guardians at rising difficulty: ember acolytes, blackstone wardens, and infernal warlords.
### Changed
*   Hugely improved generation for all of the temples making them look alot more natural in the world. Also means that they can be a lot more common (configurable)
*   Updated interiors for most of the temples.
    *   Desert temple
        *   ![image](https://pub-24a4e0e7ea8544a5b6f73c3a23512589.r2.dev/images/c3050f8b64db4856bafdf85f7743a055.png)
        *   ![image](https://pub-24a4e0e7ea8544a5b6f73c3a23512589.r2.dev/images/0996fb7ff0b5448aac21de0943215364.png)
    *   Jungle temple
        *   ![image](https://pub-24a4e0e7ea8544a5b6f73c3a23512589.r2.dev/images/dd299b68a49d4190b2fbcb7fd6f46c67.png)
        *   ![image](https://pub-24a4e0e7ea8544a5b6f73c3a23512589.r2.dev/images/31cef72ee1f048e9a89f83a4a67c4404.png)
    *   Nether temple
        *   ![image](https://pub-24a4e0e7ea8544a5b6f73c3a23512589.r2.dev/images/c0cc6e13e5a7447fbb0f2733f131a287.png)
        *   ![image](https://pub-24a4e0e7ea8544a5b6f73c3a23512589.r2.dev/images/76ec9a39bcd743bf876f2c4dd3b0ecde.png)
    *   Ocean temple
        *   ![image](https://pub-24a4e0e7ea8544a5b6f73c3a23512589.r2.dev/images/066e8f8a9c8948169332ba975205e57a.png)
        *   ![image](https://pub-24a4e0e7ea8544a5b6f73c3a23512589.r2.dev/images/9424ebe325ee4bf38d1a1ee222ca341b.png)
*   Reworked the stronghold's placement, piece selection, and per-piece limits: more variety, fewer repeated rooms.
    *   ![image](https://pub-24a4e0e7ea8544a5b6f73c3a23512589.r2.dev/images/b69a51898f6245d5aa31dec32bb05ca1.png)
*   Roughly halved the diamond gear in desert temple chests.
*   Removed the trident from jungle temple loot.
*   Now requires Moog's Structure Lib 3.1.2 or newer.
### Fixed
*   Jungle temple banners showed no pattern on 1.20.
*   Structures now appear in matching modded biomes on all three loaders.
*   Stronghold corridor chests and jungle temple crypt barrels generated empty on some versions.
*   Temple signs showed no text on 1.20.
*   Jungle temple armour stands were missing and its spawners never filled.
*   Some custom mobs were not working correctly on older mc versions.

## Supplementaries
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/supplementaries)
### supplementaries-1.21.1-3.9.6-neoforge
*   plunderers can now spawn in raid when raid spawn on water
*   they will have boats that other pillagers can use
*   improved plunderers boat navigation
### supplementaries-1.21.1-3.9.5-neoforge
*   fixed a very rare issue on servers

## Fancy Toasts | Better Advancements
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/fancy-toasts)
### 1.5.1-neoforge-1.21.1
`Version 1.5.1`
### Bug fixes:
*   Fixed key bindings not saving properly, now it's 100% robust
### Adjustments:
*   Sounds from completing advancements are no longer shown in subtitles since it's UI
*   Categories in credits screen now has fallback to visual appealing string, if there is no translation

## DynamicLantern
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/dynamiclantern)
### dynamiclantern-1.9.5-mc1.21.1.jar
- Moved the Cold Sweat Soulspring Lamp diagnostic toggle to the common config so dedicated servers no longer read an unloaded client config.

## Advanced Loot Info (ALI)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/advanced-loot-info)
### AdvancedLootInfo-neoforge-1.21.1-2.1.0.jar
*   Added `tooltipColors` configuration to change the tooltip text, value, error and branch colors
*   Enum values shown in tooltips are translatable
*   Removed equipment pattern from the default Trial Chambers loot category - it also matched unrelated modded equipment loot tables
*   Displaying loot entries inside tooltip (e.g. in Shulker Box)
*   Fixed crash on server start in rare cases
### AdvancedLootInfo-neoforge-1.21.11-2.0.1.jar
IMPORTANT - Advanced Core Info (ACI) mod is now required dependency!

*   Fixed crash on server start when a modded mob returns no loot table id

## Polytone
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/polytone)
### polytone-1.21-4.1.0-neoforge
*   ported gpu particles changes from 1.21.11
*   fixes #384
*   gpu particle initializers now accept a colormap field, sampled once when the particle spawns
*   particle colormaps are sampled at the particle itself instead of through the shared block tint cache, so they no longer all wear one color
*   links in the pack info screen are clickable again
### polytone-1.21-4.0.2-neoforge
*   ported gpu particles changes from 1.21.11
*   fixes #384
*   gpu particle initializers now accept a colormap field, sampled once when the particle spawns
*   particle colormaps are sampled at the particle itself instead of through the shared block tint cache, so they no longer all wear one color
*   links in the pack info screen are clickable again
### polytone-1.21.11-6.3.2-neoforge
gpu colormap particles fixeronis

## BaguetteLib
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/baguettelib)
### baguettelib-1.21.1-NeoForge-2.0.6.jar
remove client side requirement whe on server only
### baguettelib-1.21.11-NeoForge-2.0.5.jar
Added 1.20.1 (Fabric + Forge) and YACL config screen plumbing: register a screen in common and it shows up in Mod Menu and the NeoForge/Forge mod list automatically.
### baguettelib-1.21.1-NeoForge-2.0.5.jar
Added 1.20.1 (Fabric + Forge) and YACL config screen plumbing: register a screen in common and it shows up in Mod Menu and the NeoForge/Forge mod list automatically.

## ImmediatelyFast
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/immediatelyfast)
### ImmediatelyFast 1.6.13
*   Restore depth test state after flushing the DrawContext (Fixes graphical issue with Map Atlases mod)
*   Fixed exception when closing unused buffers (Fixes crash in ATM10 modpack)
*   Fixed config file handle leak

## FTB Quest Enhance
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/quest-enhance)
### quest_enhance-1.21.1-neoforge-3.8.jar
English:  
Version 3.8  
- Includes the latest fixes and enhancements for the 1.21.1 NeoForge build.

## Farmer's Delight
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/farmers-delight)
### Farmer's Delight 1.3.4 - 1.21.1
1.3.4
-----
### Fixes
*   Fixed a broken behavior when pushing Feasts with Pistons;
*   (1.21.1+) Fixed config "generateFDChestLoot" not properly disabling FD's extra chest loot generation;

## Roots 4
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/roots)
### Roots-1.21 4.0.0.30-alpha
*   Fix #1369: adjust decay cost. [(8b00e5786)]([https://github.com/mysticmods/Roots/commi](https://github.com/mysticmods/Roots/commi)

## FancyMenu
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/fancymenu)
### [NeoForge] v3.9.12 MC 1.21.1
CHANGELOG: [https://github.com/Keksuccino/FancyMenu/blob/master/changelog.txt](https://github.com/Keksuccino/FancyMenu/blob/master/changelog.txt)
### [NeoForge] v3.9.11 MC 1.21.11
CHANGELOG: [https://github.com/Keksuccino/FancyMenu/blob/master/changelog.txt](https://github.com/Keksuccino/FancyMenu/blob/master/changelog.txt)

## Twilight Forest Final Boss (remake)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/twilight-forest-final-boss-remake)
### v2.1.2 + TF4.8.3345 + MC1.21.1
*   Fixes
    *   Game crash while boss moves toward a target. (#2)

## Titanium
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/titanium)
### titanium-1.21-4.0.50.jar
[https://github.com/InnovativeOnlineIndustries/Titanium/blob/changelog/CHANGELOG.md](https://github.com/InnovativeOnlineIndustries/Titanium/blob/changelog/CHANGELOG.md)

## Dreamwoods
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/dreamwoods)
### dreamwoods-2.5-neoforge-1.21.1.jar
Fixed tags error for the sticks, forge tags in recipes replaced with proper common ones.

## Advanced Core Info (ACI)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/advanced-core-info)
### AdvancedCoreInfo-neoforge-1.21.1-1.1.0.jar
*   Added `TooltipStyle` and `TooltipColors`, so tooltip text, value, error and branch colors can be supplied by the calling mod
*   Enum values are no longer rendered by `CommonValueTooltip` - a mod has to register its own handler for `Enum.class`, otherwise an enum falls through to the JSON dump fallback
### AdvancedCoreInfo-neoforge-1.21.11-1.0.0.jar
*   First release

## Moonlight Lib
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/selene)
### moonlight-1.21.1-3.5.2-neoforge
*   hotfix for a bug in last update
*   added ILoomItem, lets nonbanner items be used in a loom and draw their own preview
*   added TabAdderHelper

## ModernFix
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/modernfix)
### modernfix-neoforge-5.27.23+mc1.21.1.jar
Please check the [GitHub wiki](https://github.com/embeddedt/ModernFix/wiki/Changelog) for major changes.

## More Quest Types
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/more-quest-types)
### More Quest Types [NEOFORGE] [1.21.1] - [1.3.6]
Updated dependencies:
*   FTB Quests: .29 -> .30
*   FTB Library: .34 -> .35
Added a temporary manual refresh quest cache button
Added an auto refresh & can be toggled on and off inside ftbquest's quest config
Added Mob Journal Compat

## Sodium
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/sodium)
### Sodium 0.8.13 for NeoForge 1.21.1
Sodium 0.8.13 fixes potential minor bugs and improves the crash log message to avoid misattribution of unrelated errors when NeoForge continues loading despite severe errors.
*   Clarify crash log error message when crashing due to missing mod config, which basically only happens when neoforge loads the game despite it having encountered a severe error.
*   Fix buffer overflow in Kernel32.getModuleFileName
*   Use the correct atomic operations on NativeBuffer.ALLOCATED
*   Use clearenv() to delete environment variable
*   Implement override/overlay priority in the graphics options Config API ([#3866](https://github.com/CaffeineMC/sodium/pull/3866))
### Sodium 0.8.14-beta.2 for NeoForge 1.21.11
Sodium 0.8.14-beta.2 fixes potential minor bugs.
*   Fix buffer overflow in Kernel32.getModuleFileName
*   Use the correct atomic operations on NativeBuffer.ALLOCATED
*   Use clearenv() to delete environment variables
*   Implement override/overlay priority in the graphics options Config API ([#3866](https://github.com/CaffeineMC/sodium/pull/3866))

_________________

Changelog generated by [CF-Changelog-Generator](https://github.com/Charismara/CF-Changelog-Generator)