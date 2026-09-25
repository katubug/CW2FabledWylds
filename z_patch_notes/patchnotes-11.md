## Mod Updates
- **All The Leaks** updated from 1.1.12+1.21.1-neoforge to 1.1.13+1.21.1-neoforge
- **Balm** updated from 21.0.65 to 21.0.66
- **Collective** updated from 8.39 to 8.40
- **CreativeCore** updated from 2.13.46 to 2.13.48
- **Data Anchor** updated from 2.0.0.16 to 2.0.0.17
- **Dynamic Lantern** updated from 1.9.5 to 2.0.0-mc1.21.1
- **EntityCulling** updated from 1.10.5 to 1.11.2
- **Exposure** updated from 1.9.18 to 1.9.19
- **FTB Library** updated from 2101.1.35 to 2101.1.36
- **FTB Quests** updated from 2101.1.35 to 2101.1.36
- **FTB Ranks** updated from 2101.1.4 to 2101.1.5
- **FTB XMod Compat** updated from 21.1.11 to 21.1.12
- **Farming for Blockheads** updated from 21.1.13 to 21.1.14
- **Field Guide** updated from 1.17.0 to 1.18.0
- **Fusion** updated from 1.3.15+a to 1.3.15+b
- **Icy's Better Horses** updated from 2.0.0 to 2.0.2
- **Immersive Overlays** updated from 1.8.3+1.21.1 to 1.8.5+1.21.1
- **Inventory Essentials** updated from 21.1.18 to 21.1.19
- **Ixeris** updated from 4.6.7+1.21.1-neoforge to 4.6.8+1.21.1-neoforge
- **Just Enough Items** updated from 19.56.0.441 to 19.57.0.449
- **Lithostitched** updated from 1.8.0+beta6 to 1.8.0
- **Lootr** updated from 1.21.1-1.11.38.125 to 1.21.1-1.11.38.127
- **MezzConfig** updated from 0.5.11 to 0.6.3
- **Modonomicon** updated from 1.120.4 to 1.120.7
- **MoogsSoaringStructures** updated from 2.1.2 to 2.2.0
- **MoogsVoyagerStructures** updated from 5.1.2 to 5.1.3
- **Moonlight Lib** updated from 1.21.1-3.6.5 to 1.21.1-3.6.9
- **Nether Depths Upgrade** updated from 3.2 to 3.3
- **NotEnoughAnimations** updated from 1.12.4 to 1.12.6
- **Packed Packs** updated from 2.2.4+1.21.1 to 2.3.0-beta.1+1.21.1
- **Polytone** updated from 1.21-4.5.0 to 1.21-4.5.1
- **Quest Enhance** updated from 1.21.1-neoforge-3.9 to 1.21.1-neoforge-3.11
- **Quests Visual** updated from 1.0.39 to 1.0.50
- **Shoulder Surfing Reloaded** updated from 1.21.1-5.0.11 to 1.21.1-5.1.1
- **Starcatcher** updated from 3.1.4.1-NEOFORGE-1.21.1 to 3.2-NEOFORGE-1.21.1
- **StreamsReflowing** updated from 2.13.7 to 2.13.8
- **Structurify** updated from 2.0.37 to 2.0.41
- **SuperMartijn642's Core Lib** updated from 1.1.24 to 1.1.24+a
- **Torchmaster** updated from 21.1.12 to 21.1.13
- **Trash Cans** updated from 1.1.0 to 1.1.1
- **Waystones** updated from 21.1.45 to 21.1.46
- **[Let's Do] Bakery** updated from 2.1.6 to 2.1.7
- **[Let's Do] Farm & Charm** updated from 1.1.24 to 1.1.26
- **[Let's Do] Furniture** updated from 1.1.5 to 1.1.6

## New Mods
- **CostlyWaystones** v0.2
- **CraterLib** v3.1.3
- **Server Chest** v1.0.0
- **ServerPress** v0.8.0
- **Simple RPC** v4.1.3+release.0

## Quest Changes
- Did a lot of work in the Witchery quest chapter
- Many minor text fixes.

## Config Changes
- Disabled tiered sleep duration for beds so all beds use vanilla 5-second sleep time
- Re-Disabled vanilla beds from using tiered sleep duration multiplier
- Changed basic bed tier to set spawn point on sleep (setsSpawn = true)
- Disabled blur on all transparent screens, this should make Hexerei books readable now.
- Disabled book editing and viewing GUI enhancements in EaseGUI.
- Horse combat disabled
- Horse PvP disabled
- Removed Journalistic FTB Quests packs from Potato PC and Recommended resource pack profiles
- Added multiple new resource packs to Recommended profiles (Better Leaves 9.6, Blues Better Witches, Fantasy Ores, rain sounds, TwilightJAPPA, Smooth Signs)
- Quark menu button moved to right side, disabled Q menu effects
- Added supplementaries sack to Quark's shulker box list
- Reliable Replacer swapper updated - added mapping for enchanted mandrake to hexalia mandrake
- Supplementaries config - cage baby mob capture enabled, cage auto-detect enabled, persistent mobs enabled, sack increment increased to 4, sack slots increased to 27
- Tombstone auto-equip changed from ALWAYS to NEVER
- Tombstone prevent death outside build height enabled
- Tombstone PvP stolen XP set to 0
- Tombstone curio auto-equip disabled
- Tombstone keep cosmetic armor disabled
- Tombstone enchanted grave key chance increased to 100
- Waystones wild waystone chunk separation increased from 25 to 40
- Waystones name generation mode changed to PRESET_ONLY
- Warp Stones durability enabled
- Waystones vanilla teleport bug fix enabled

## Server Script Changes
- Changed cage and lasso banned entity tags from `forge:` namespace to `fabled_wylds:` namespace
- Added special message when Goblin Traders escape from cages
- Added Goblin Traders, Vein Goblin Traders, and Cat Traders to cage ban list
- Made lasso ban list include all cage-banned entities via tag reference
- Added boss tags from Bumblezone, Field Guide, Adorable Hamster Pets, and Roots mods to lasso ban list
- Refactored moon phase script to use switch statement instead of if-else chain
- Added bone needles item tag with Tombstone and Enchanted variants
- Added salt ingredient replacement to use common salt dust tag
- Waystones now require Netherite pickaxe to break, to encourage people to use other teleportation methods
- Added new script to enable breeding Sprouts using Ent Twigs
- Added new script to spawn Mandrake entities when breaking mature Mandrake crops
- Added 50% chance for Ground Moss to drop Grove Spores

## Startup Script Changes
- Added enchanted mandrake_root and mandrake_seeds to the nuked items list

## Client Script Changes
- Renamed 'enchanted:bone_needle' to "Simple Bone Needle"
- Changed 'tombstone:bone_needle' renamed to "Fancy Bone Needle"

## Asset Changes
- Added display names for three waystone item variants (Waymaker, Bound Waymaker, Blooded Waymaker)

## Datapack Changes
- Restructured mandrake loot tables to drop hexalia items instead of enchanted items, and removed mandrake root drops
- Removed mandrake entity loot table drop for mandrake root
- Changed salt dust ingredient references from individual items to the c:dusts/salt tag in Farmer's Delight recipes
- Removed broken loot tables from hexalia
- Changed hexerei pestle and mortar recipes to use proper recipe format with "output" and "grindingTime" fields instead of "result"
- Changed salt crafting output from hearthandharvest:salt to hexalia:salt
- Changed salt tag references from hearthandharvest:salt to c:dusts/salt in various recipes
- Fixed recipe output field names from "item" to "id" across multiple hexalia recipes
- Changed waymaker ritual recipe for creating bound waystones
- Changed flying ointment kettle recipe to NOT use redstone soup, making brooms available earlier on
- Changed Mutandis recipe to include multiple magic mods and moved it to the Pestle and Mortar. 
- Changed taglock kit crafting recipe
- Changed advancement requirements for crush course and change of plans to use non-disabled items.
- Fixed brambleguard salve and fragrant nectar pestle and mortar recipes
- Added bat wing cutting recipe to produce wool of bat
- Changed bat entity loot table to drop bat wings at a 100% chance, with a chance to drop multiples with Looting

 
## Mod Changelog 
 
# **New Mods**
## ServerChest
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/serverchest)

## ServerPress
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/serverpress)

## Costly Waystones
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/costly-waystones)

## Better Cats
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/better-cats-minecraft)

## CraterLib
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/craterlib)

## Better Cats x Fresh Animations
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/better-cats-x-fresh-animations)

## Simple Discord RPC
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/simple-discord-rpc)

## Smooth Signs +Borders
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/smooth-signs-borders)

## Blue's Witches
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/blues-better-witches)


_________________
# **Changed Mods**
## [Let's Do] Furniture
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/lets-do-furniture)

### Furniture - 1.1.6 - NEOFORGE - 1.21.1
[1.1.6]

**Fixed**

*   Clock rendering invisible with shader packs enabled
*   Grandfather Clock's inner side walls z-fighting

* * *

[1.1.5]

**Fixed**

*   Empty CompoundTag not returned in getUpdateTag, causing sync issues (thanks to Osmond Lee)
*   Meadow and Alpine Whispers curtains not showing connected textures when stacked
*   Homespun curtain (Alpine Whispers) not dropping when broken
*   Wardrobe items duplicating when broken as part of a Sable physics contraption
*   Grandfather Clock's hour and minute hands were swapped
*   Canvas paintings rendering at the wrong scale, requiring far larger walls than intended
*   Brick and Stone Bricks Chimney using iron block properties (hardness, sound) instead of their own material
*   Coffer placed underwater not staying waterlogged
*   Fish Tank water rendering with doubled, darker translucency

**Added**

*   Sable EntityType tags for sub-level retention/destruction compatibility (thanks to BeeIsYou)
*   Italian translation (thanks to Serena)

* * *

[1.1.4]

**Fixed**

*   Removed unused recipes
*   Crash when using the turkish language pack

**Added**

*   Compatibility layer for BloomingNature, Meadow, AlpineWhispers and Beachparty. When these mods are installed, you can craft furniture made from their woods.

**Changed**

*   Updated ru_ru (tefnya)

* * *

[1.1.3]

**Added**

*   KO_KR translation (thanks to cs8minty)

**Fixed**

*   Gramophone repeat mode stopping after one track

* * *

[1.1.2]

**Fixed**

*   World save hang when quitting with an active Gramophone

* * *

[1.1.1]

**Fixed**

*   Crash when saving players with Coffer items in their inventory (missing BlockEntity id in NBT)

* * *

## Field Guide
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/field-guide)

### Field Guide Neoforge 1.21.1 - 1.18.0
### Changed

*   Merged Atmospheric Aspen trees (Golden & Green) and Environmental Plum trees (Plum, Cheerful, Moody) into single composite entries with variants.
*   Added additional blocks to Atmospheric's Aspen composite components.

### Fixed

*   Fixed custom datapack composites being overwritten by built-in composites.
*   Fixed composites not respecting visual variants.
*   Fixed discovery toast icon missing when scanning composite entries with variants.
*   Fixed `auto_populate` with `tag` strategy creating entries for items removed by Reliable Remover.
*   Fixed missing entries in the `fieldguide:hostile` entity tag.
*   Fixed Cobblemon spawn biomes.
*   Fixed scanning one variant revealing the drops for all variants.
*   Long overdue backend cleanups and refactors.

### Field Guide Neoforge 1.21.1 - 1.17.1
### Removed

*   Removed unused textures for clarity.

## Shoulder Surfing Reloaded
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/shoulder-surfing-reloaded)

### ShoulderSurfing-NeoForge-1.21.1-5.1.1
5.1.1
=====

*   Added options to automatically switch to temporary first person in constrained spaced
    *   Added the option to configure whether to switch to temporary first person in constrained spaced
    *   Added options to configure offset thresholds for each axis
    *   Added the option to configure the cooldown time before temporary first person can be entered again
    *   Added the option to configure the addition time to stay in temporary first person
    *   Added the option to configure the minimum time to stay in temporary first person
*   Added the option to turn the player x-rotation towards the camera when facing it
*   Added the option to define non collidable blocks for the camera
    *   Glass bocks now collide with the camera by default
*   Added issue url to mod metadata
*   Fixed cancellable event handlers not working correctly
*   Fixed camera rotations when flying Cobblemon rides (Cobblemon 1.7)
*   API: Added ComputeCameraDrag event
*   API: Added ComputeCameraSway event
*   API: Added PerspectiveChanged event

5.0.11
======

*   Fixed a regression in the backport that caused the camera turning with player option to not work correctly.

5.0.10
======

*   Fixed legacy API adapters calling the wrong API version in some cases, leading to potential crashes when other mods use the legacy API

5.0.9
=====

*   Fixed a crash when iris is installed

5.0.8
=====

*   Added back missing iris/oculus shader compatibility code for NeoForge

5.0.7
=====

*   Fixed dynamic crosshair remaining active after switching perspective

5.0.6
=====

*   Fixed curios compatibility plugin loading
*   Fixed a crash on (neo)forge when un(loading) worlds

5.0.5
=====

*   Fixed obstruction indicator remaining visible after switching perspective

5.0.4
=====

*   Fixed incorrect behavior of setXRot and setYRot API methods

5.0.3
=====

*   Updated traditional and simplified Chinese translations (thanks to Xinyang-Gao)
*   Added legacy API adapters for backwards compatibility

5.0.2
=====

*   Improved mod-compatibility
*   Fixed obstruction crosshair rendering

5.0.1
=====

*   Updated Russian translations (thanks to mpustovoi)

5.0.0
=====

*   Added config option to control player transparency effect when climbing (disabled by default)
*   Changed default keybind for swapping shoulders from 'O' to 'U'
*   Enabled config option "turn_player_x_rot_with_camera" by default
*   Enabled config option "turn_player_y_rot_with_camera" by default
*   Disabled config option "turn_with_player" by default
*   The player no longer turns with the camera when "turn_with_player" is enabled
*   The player now turns with the camera when 'pick_vector' is 'PLAYER' and 'crosshair_type' is 'DYNAMIC'
*   Fixed eye height being too low when flying in creative
*   Other optimizations and stability fixes
*   Reorganized several config options. The following mapping can be used for migration:
    *   camera.fov_override_enabled → camera.fov.fov_override_enabled
    *   camera.fov_override → camera.fov.fov_override
    *   camera.dynamically_adjust_offsets → camera.offset.dynamic_offsets
    *   camera.camera_step_size → camera.offset.step_size
    *   camera.follow_player_rotations → camera.turn_with_player
    *   camera.follow_player_rotations_delay → camera.turn_with_player_delay
    *   crosshair.obstruction.show_obstruction_indicator → crosshair.obstruction.obstruction_indicator
    *   player.adjust_player_transparency → player.transparency.adjust_transparency
    *   player.player_x_rot_follows_camera → player.turning.turn_player_x_rot_with_camera
    *   player.player_y_rot_follows_camera → player.turning.turn_player_y_rot_with_camera
    *   player.player_y_rot_follow_angle_limit → player.turning.turn_player_y_rot_angle_limit
    *   player.turn_player_transparent_when_aiming → player.transparency.when_aiming
*   Valkyrien Skies >2.4.11 is no longer marked as incompatible
*   API: Replaced callback system with an event system
*   API: It is now possible to register multiple plugin classes per mod
*   API: The API was restructured and some parts were renamed. A migration guide can be found in the wiki: [https://github.com/Exopandora/ShoulderSurfing/wiki/API-Documentation-v5-Migration](https://github.com/Exopandora/ShoulderSurfing/wiki/API-Documentation-v5-Migration)

## Just Enough Items (JEI)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/jei)

### 19.57.0.449 for NeoForge 1.21.1
### Current release 19.57.0

*   [Update Jenkins release notifier to 0.3.1](https://github.com/mezz/JustEnoughItems/commit/321f48d1d9a25f202b97e107ba3d058817c3dfce) - mezz
    
*   [Update Jenkins release notifier to 0.3.0](https://github.com/mezz/JustEnoughItems/commit/0750a0edbbb8222d3ff42d129ea3a5be733e1d6f) - mezz
*   [Suggest MezzConfig GUI for in-game configuration](https://github.com/mezz/JustEnoughItems/commit/3a041d3682bec49430ffc1f91d2136ed6c21be1f) - mezz
*   [Declare compatible optional MezzConfigGui loader metadata](https://github.com/mezz/JustEnoughItems/commit/7a099ab01a99602cfd886df76641fe41812b88d2) - mezz
    *   Adapt the portable metadata part of the dependency update to the 1.21.1 Fabric, Forge, and NeoForge manifests. Keep the target build plugins and shaded publication wiring.
*   [Update Jenkins release notifier to 0.2.2](https://github.com/mezz/JustEnoughItems/commit/142c4933d70f8f7ee851aec84e1b7188cd6122c3) - mezz
*   [Fix #4193 dragging bookmarks across pages (#4493)](https://github.com/mezz/JustEnoughItems/commit/458396ca0d180b683427ac9025e457fcfb89f057) - vfyjxf
    *   Co-authored-by: mezz
*   [Fix typing the search focus key](https://github.com/mezz/JustEnoughItems/commit/bc33b3775ff1d6acc7fd3c234b7ba85e2c149c66) - mezz
    
*   [Fix missing bookmark output config translations](https://github.com/mezz/JustEnoughItems/commit/50110cda50dc82d72479a3715b4634b690fad10c) - mezz
*   [Fix legacy config migration](https://github.com/mezz/JustEnoughItems/commit/1b1dd13be25d9310f55913e2d00f965ad342c334) - mezz
    
*   [Fix darkened JEI controls on the recipe screen](https://github.com/mezz/JustEnoughItems/commit/ce0f9991cc40c4f0c731317ba2a03bbefbcf7e3b) - mezz
    
*   [Publish every successful Jenkins build](https://github.com/mezz/JustEnoughItems/commit/26f4b56dd5cafb83703ac9b7d33c977ea380a9bb) - mezz
*   [Fix #4371 Keep Realms config paths stable](https://github.com/mezz/JustEnoughItems/commit/c7722d7b2a4d8de5e94e9e142ff341ae7ec3874e) - mezz
*   [Simplify Gradle property access](https://github.com/mezz/JustEnoughItems/commit/e31957c6315a26411ea774575577260fd811e940) - mezz
*   [Add a debug recipe with 10000 numbered slot candidates](https://github.com/mezz/JustEnoughItems/commit/33804c3c84b8a057d6236e1a29bb1348dc245ab2) - mezz
*   [Prepare interactive tooltip slots only as they become visible](https://github.com/mezz/JustEnoughItems/commit/f79aa47f5d7a673c714bada34774d3e76c4d5279) - mezz
*   [Validate NeoForge client test resources during checks](https://github.com/mezz/JustEnoughItems/commit/b01d7bf3c2068b32b5600228dee85c762d9b4d40) - mezz
*   [Exercise search typing through complete GLFW key events](https://github.com/mezz/JustEnoughItems/commit/7081a728091408c43da571b0fbc8ac0c284cf870) - mezz
*   [Cache recipe slot tooltip candidates and prepare visible entries lazily](https://github.com/mezz/JustEnoughItems/commit/490b515383f276a7114adf3698a56e2c14eae67b) - mezz
*   [Bound test CI runtime and require a headless display](https://github.com/mezz/JustEnoughItems/commit/1179e9107a81aefd12a3d1e68f2234ceeb3bb1b4) - mezz
*   [Verify JEI textures in Fabric client tests](https://github.com/mezz/JustEnoughItems/commit/f9111efa060a51e91ea0426cb4320d8e096f7384) - mezz
*   [Fix #4490 Prioritize recipe bookmark transfer input](https://github.com/mezz/JustEnoughItems/commit/afacc57b2c8685e6c771ead4f273e0664752a61d) - mezz
*   [Use Minecraft's GUI atlas](https://github.com/mezz/JustEnoughItems/commit/70d16d8ee63575e635a03299323855b2f7a908dd) - mezz
*   [Fix #4488 Preserve focused ingredient order](https://github.com/mezz/JustEnoughItems/commit/6a9260829bc626b6ce4af01158698a89ede6474d) - mezz
*   [Fix #4489 hidden focus-linked recipes](https://github.com/mezz/JustEnoughItems/commit/5e4e34dd777793bd75c1c7b39d77c6916f3da2f9) - mezz
*   [Consolidate API Gradle subprojects](https://github.com/mezz/JustEnoughItems/commit/99c4ec88709feb66052f3d81f7f988a199384538) - mezz
*   [Include custom game tests in Gradle check](https://github.com/mezz/JustEnoughItems/commit/027ae7fb0eb0f3997626b85ac366ac4aa237f1ce) - mezz
*   [Close #91 Add fireworks recipes](https://github.com/mezz/JustEnoughItems/commit/5b4c1addd0600c699d4bdc05e5fc05dc24960ff1) - mezz
*   [Fix #4478 Refresh recipes after proxy server switch](https://github.com/mezz/JustEnoughItems/commit/af286d27536729171bd31e8a93825b32ba2c41ea) - mezz
*   [Update MezzConfig and MezzConfig GUI on 1.21.1](https://github.com/mezz/JustEnoughItems/commit/f40ddb849058b497804927d178a9a275d3a0c6e1) - mezz
    
*   [Update 1.21.1 development dependencies](https://github.com/mezz/JustEnoughItems/commit/4c08eca566b9c0f8d8be223bfb2397f3495bd0d9) - mezz

### 27.44.0.102 for NeoForge 1.21.11
### Current release 27.44.0

*   [Update Jenkins release notifier to 0.3.0](https://github.com/mezz/JustEnoughItems/commit/2055f747ee5d8728cbd3b7cdd15d6e4fbf1a97d6) - mezz
*   [Fix #4504 Add collection focus links](https://github.com/mezz/JustEnoughItems/commit/e5ab6bfcb1c7940a040def781ceafa7313c5037b) - mezz
*   [Fix #4505 held cursor items showing behind ingredient list on Fabric](https://github.com/mezz/JustEnoughItems/commit/7a012b77b3f49b4c77300d535e68ecc3473cbd02) - mezz
*   [Fix #4503 Expose crafting grid indexes](https://github.com/mezz/JustEnoughItems/commit/1c3084e3bed52f5e1886f3afb8de42d6df0cf3b7) - mezz
*   [Support recipe transfers with input alternatives](https://github.com/mezz/JustEnoughItems/commit/643efbf26e013ada8b46ae0f3ca3a817b5ad5827) - mezz
*   [Add Ko-fi and Patreon badges to Github README](https://github.com/mezz/JustEnoughItems/commit/590b6a5cbb07d26988b36ea91b99a99575640b30) - mezz
*   [Suggest MezzConfig GUI for in-game configuration](https://github.com/mezz/JustEnoughItems/commit/21149bcd924be38d343bd1679a30fb7737fe6d88) - mezz
*   [Update dev dependencies](https://github.com/mezz/JustEnoughItems/commit/d2c28b425c6c4a1fa4eda831a6504677eb011dde) - mezz
    *   Update portable CI, build-plugin, JSpecify, shading, API-checker, and optional MezzConfigGui metadata dependencies. Keep the Minecraft 1.21.11 loader versions and the corresponding MezzConfigGui artifact.
*   [Fix legacy config migration](https://github.com/mezz/JustEnoughItems/commit/b7616aed7967935f6a24870bac04909e0bab60e2) - mezz
*   [Fix typing the search focus key](https://github.com/mezz/JustEnoughItems/commit/48e79364f775449b9fb0f207fb3eb24a1a296146) - mezz
    *   Keep the target's GLFW key constants and event constructors in the regression
    *   coverage.
*   [Update MezzConfig and MezzConfig GUI](https://github.com/mezz/JustEnoughItems/commit/ae786118b9335a5b30bd26984a4b6023fdaa5553) - mezz
    *   Use the corresponding Minecraft 1.21.11 MezzConfigGui 0.5.2 artifact.
*   [Show sorting orders in the config screen](https://github.com/mezz/JustEnoughItems/commit/a7e9cbe3d58075189998a1b4505cd77e354dde9f) - mezz
*   [Read mod icons from loader metadata](https://github.com/mezz/JustEnoughItems/commit/6a9e81f316cfcc4c70f7f66d35df6b94f4f6c634) - mezz
*   [Update mezzconfig and use improved migration methods](https://github.com/mezz/JustEnoughItems/commit/342969cad9f9fffb769a9a90eeda103097f3db33) - mezz
*   [Update Jenkins release notifier to 0.2.2](https://github.com/mezz/JustEnoughItems/commit/2597e66240cf7bf6f51cc553c087c3d7b333afdc) - mezz
*   [Track ingredient type registration plugins](https://github.com/mezz/JustEnoughItems/commit/042665ae84152c1f681db6ccffce25ffa29e86ba) - mezz
    *   Use target API version 27.41.0 for the new method and version bump.
*   [Add runtime toggles to the config screen](https://github.com/mezz/JustEnoughItems/commit/d108c38c6cba34eb8429fce2b9cd032e5e040f26) - mezz
*   [Show JEI key mappings in the config screen](https://github.com/mezz/JustEnoughItems/commit/b477abdde1c26a749ee2e399c4f93fb9b2d24d50) - mezz
*   [Add combined grid alignment controls](https://github.com/mezz/JustEnoughItems/commit/9889b306541f6ea0b75d60c0ddc806add15bfe5c) - mezz
*   [Add optional MezzConfigGui integration](https://github.com/mezz/JustEnoughItems/commit/81a4e49357165967269ac5bf0b37d2c55992a03c) - mezz
    *   Use the Minecraft 1.21.11 MezzConfigGui artifact version and preserve the target publication layout.
*   [Expose runtime toggle state changes](https://github.com/mezz/JustEnoughItems/commit/fd2d7c14d52809e1d8375a04311821dcedec5e47) - mezz
*   [Select key mappings for config screens](https://github.com/mezz/JustEnoughItems/commit/e76a00cc5a18656fa87bb479d6c6ea4f2bbcd3d3) - mezz
*   [Expose native key mappings internally](https://github.com/mezz/JustEnoughItems/commit/8116fd88dc3190b3177f96b4b68f5381e3033bbf) - mezz
*   [Open config screens by mod id](https://github.com/mezz/JustEnoughItems/commit/586aa5384eb2d8efe4fa0753c929dfd8d441dd11) - mezz
*   [Share ingredient and bookmark list controls](https://github.com/mezz/JustEnoughItems/commit/32c0b08da8840d3797c3e4299da4a1391571bc55) - mezz
*   [Centralize cheat mode updates](https://github.com/mezz/JustEnoughItems/commit/04392062e1f951e13c11a3049a9f0b5d658f7669) - mezz
*   [Add representative ingredients for ingredient types](https://github.com/mezz/JustEnoughItems/commit/fa2cc0582f3a5e4a5f2fdcbd286df7c0af89009b) - mezz
    *   Use target API version 27.40.0 for the new method and version bump.
*   [Declare the JEI logo in NeoForge metadata](https://github.com/mezz/JustEnoughItems/commit/e4d477b1c9eb9c612855400b12b920f5d45fa8c3) - mezz
*   [Localize modifier key names](https://github.com/mezz/JustEnoughItems/commit/8ef36c1fc5ff3fb8138592ad4d53947661d8c9ef) - mezz
*   [Distinguish JEI key mapping conflict contexts](https://github.com/mezz/JustEnoughItems/commit/49d3056d5bfa08807bb26aa5080538f972c20312) - mezz

### 19.57.0.448 for NeoForge 1.21.1
### Current release 19.57.0

*   [Update Jenkins release notifier to 0.3.0](https://github.com/mezz/JustEnoughItems/commit/0750a0edbbb8222d3ff42d129ea3a5be733e1d6f) - mezz
*   [Suggest MezzConfig GUI for in-game configuration](https://github.com/mezz/JustEnoughItems/commit/3a041d3682bec49430ffc1f91d2136ed6c21be1f) - mezz
*   [Declare compatible optional MezzConfigGui loader metadata](https://github.com/mezz/JustEnoughItems/commit/7a099ab01a99602cfd886df76641fe41812b88d2) - mezz
    *   Adapt the portable metadata part of the dependency update to the 1.21.1 Fabric, Forge, and NeoForge manifests. Keep the target build plugins and shaded publication wiring.
*   [Update Jenkins release notifier to 0.2.2](https://github.com/mezz/JustEnoughItems/commit/142c4933d70f8f7ee851aec84e1b7188cd6122c3) - mezz
*   [Fix #4193 dragging bookmarks across pages (#4493)](https://github.com/mezz/JustEnoughItems/commit/458396ca0d180b683427ac9025e457fcfb89f057) - vfyjxf
    *   Co-authored-by: mezz
*   [Fix typing the search focus key](https://github.com/mezz/JustEnoughItems/commit/bc33b3775ff1d6acc7fd3c234b7ba85e2c149c66) - mezz
    
*   [Fix missing bookmark output config translations](https://github.com/mezz/JustEnoughItems/commit/50110cda50dc82d72479a3715b4634b690fad10c) - mezz
*   [Fix legacy config migration](https://github.com/mezz/JustEnoughItems/commit/1b1dd13be25d9310f55913e2d00f965ad342c334) - mezz
    
*   [Fix darkened JEI controls on the recipe screen](https://github.com/mezz/JustEnoughItems/commit/ce0f9991cc40c4f0c731317ba2a03bbefbcf7e3b) - mezz
    
*   [Publish every successful Jenkins build](https://github.com/mezz/JustEnoughItems/commit/26f4b56dd5cafb83703ac9b7d33c977ea380a9bb) - mezz
*   [Fix #4371 Keep Realms config paths stable](https://github.com/mezz/JustEnoughItems/commit/c7722d7b2a4d8de5e94e9e142ff341ae7ec3874e) - mezz
*   [Simplify Gradle property access](https://github.com/mezz/JustEnoughItems/commit/e31957c6315a26411ea774575577260fd811e940) - mezz
*   [Add a debug recipe with 10000 numbered slot candidates](https://github.com/mezz/JustEnoughItems/commit/33804c3c84b8a057d6236e1a29bb1348dc245ab2) - mezz
*   [Prepare interactive tooltip slots only as they become visible](https://github.com/mezz/JustEnoughItems/commit/f79aa47f5d7a673c714bada34774d3e76c4d5279) - mezz
*   [Validate NeoForge client test resources during checks](https://github.com/mezz/JustEnoughItems/commit/b01d7bf3c2068b32b5600228dee85c762d9b4d40) - mezz
*   [Exercise search typing through complete GLFW key events](https://github.com/mezz/JustEnoughItems/commit/7081a728091408c43da571b0fbc8ac0c284cf870) - mezz
*   [Cache recipe slot tooltip candidates and prepare visible entries lazily](https://github.com/mezz/JustEnoughItems/commit/490b515383f276a7114adf3698a56e2c14eae67b) - mezz
*   [Bound test CI runtime and require a headless display](https://github.com/mezz/JustEnoughItems/commit/1179e9107a81aefd12a3d1e68f2234ceeb3bb1b4) - mezz
*   [Verify JEI textures in Fabric client tests](https://github.com/mezz/JustEnoughItems/commit/f9111efa060a51e91ea0426cb4320d8e096f7384) - mezz
*   [Fix #4490 Prioritize recipe bookmark transfer input](https://github.com/mezz/JustEnoughItems/commit/afacc57b2c8685e6c771ead4f273e0664752a61d) - mezz
*   [Use Minecraft's GUI atlas](https://github.com/mezz/JustEnoughItems/commit/70d16d8ee63575e635a03299323855b2f7a908dd) - mezz
*   [Fix #4488 Preserve focused ingredient order](https://github.com/mezz/JustEnoughItems/commit/6a9260829bc626b6ce4af01158698a89ede6474d) - mezz
*   [Fix #4489 hidden focus-linked recipes](https://github.com/mezz/JustEnoughItems/commit/5e4e34dd777793bd75c1c7b39d77c6916f3da2f9) - mezz
*   [Consolidate API Gradle subprojects](https://github.com/mezz/JustEnoughItems/commit/99c4ec88709feb66052f3d81f7f988a199384538) - mezz
*   [Include custom game tests in Gradle check](https://github.com/mezz/JustEnoughItems/commit/027ae7fb0eb0f3997626b85ac366ac4aa237f1ce) - mezz
*   [Close #91 Add fireworks recipes](https://github.com/mezz/JustEnoughItems/commit/5b4c1addd0600c699d4bdc05e5fc05dc24960ff1) - mezz
*   [Fix #4478 Refresh recipes after proxy server switch](https://github.com/mezz/JustEnoughItems/commit/af286d27536729171bd31e8a93825b32ba2c41ea) - mezz
*   [Update MezzConfig and MezzConfig GUI on 1.21.1](https://github.com/mezz/JustEnoughItems/commit/f40ddb849058b497804927d178a9a275d3a0c6e1) - mezz
    
*   [Update 1.21.1 development dependencies](https://github.com/mezz/JustEnoughItems/commit/4c08eca566b9c0f8d8be223bfb2397f3495bd0d9) - mezz
    
*   [Update ForgeGradle to 7 on 1.21.1](https://github.com/mezz/JustEnoughItems/commit/81b0336be8737dffa54ddbdd315fd35671494442) - mezz

### 19.57.0.447 for NeoForge 1.21.1
### Current release 19.57.0

*   [Suggest MezzConfig GUI for in-game configuration](https://github.com/mezz/JustEnoughItems/commit/3a041d3682bec49430ffc1f91d2136ed6c21be1f) - mezz
*   [Declare compatible optional MezzConfigGui loader metadata](https://github.com/mezz/JustEnoughItems/commit/7a099ab01a99602cfd886df76641fe41812b88d2) - mezz
    *   Adapt the portable metadata part of the dependency update to the 1.21.1 Fabric, Forge, and NeoForge manifests. Keep the target build plugins and shaded publication wiring.
*   [Update Jenkins release notifier to 0.2.2](https://github.com/mezz/JustEnoughItems/commit/142c4933d70f8f7ee851aec84e1b7188cd6122c3) - mezz
*   [Fix #4193 dragging bookmarks across pages (#4493)](https://github.com/mezz/JustEnoughItems/commit/458396ca0d180b683427ac9025e457fcfb89f057) - vfyjxf
    *   Co-authored-by: mezz
*   [Fix typing the search focus key](https://github.com/mezz/JustEnoughItems/commit/bc33b3775ff1d6acc7fd3c234b7ba85e2c149c66) - mezz
    
*   [Fix missing bookmark output config translations](https://github.com/mezz/JustEnoughItems/commit/50110cda50dc82d72479a3715b4634b690fad10c) - mezz
*   [Fix legacy config migration](https://github.com/mezz/JustEnoughItems/commit/1b1dd13be25d9310f55913e2d00f965ad342c334) - mezz
    
*   [Fix darkened JEI controls on the recipe screen](https://github.com/mezz/JustEnoughItems/commit/ce0f9991cc40c4f0c731317ba2a03bbefbcf7e3b) - mezz
    
*   [Publish every successful Jenkins build](https://github.com/mezz/JustEnoughItems/commit/26f4b56dd5cafb83703ac9b7d33c977ea380a9bb) - mezz
*   [Fix #4371 Keep Realms config paths stable](https://github.com/mezz/JustEnoughItems/commit/c7722d7b2a4d8de5e94e9e142ff341ae7ec3874e) - mezz
*   [Simplify Gradle property access](https://github.com/mezz/JustEnoughItems/commit/e31957c6315a26411ea774575577260fd811e940) - mezz
*   [Add a debug recipe with 10000 numbered slot candidates](https://github.com/mezz/JustEnoughItems/commit/33804c3c84b8a057d6236e1a29bb1348dc245ab2) - mezz
*   [Prepare interactive tooltip slots only as they become visible](https://github.com/mezz/JustEnoughItems/commit/f79aa47f5d7a673c714bada34774d3e76c4d5279) - mezz
*   [Validate NeoForge client test resources during checks](https://github.com/mezz/JustEnoughItems/commit/b01d7bf3c2068b32b5600228dee85c762d9b4d40) - mezz
*   [Exercise search typing through complete GLFW key events](https://github.com/mezz/JustEnoughItems/commit/7081a728091408c43da571b0fbc8ac0c284cf870) - mezz
*   [Cache recipe slot tooltip candidates and prepare visible entries lazily](https://github.com/mezz/JustEnoughItems/commit/490b515383f276a7114adf3698a56e2c14eae67b) - mezz
*   [Bound test CI runtime and require a headless display](https://github.com/mezz/JustEnoughItems/commit/1179e9107a81aefd12a3d1e68f2234ceeb3bb1b4) - mezz
*   [Verify JEI textures in Fabric client tests](https://github.com/mezz/JustEnoughItems/commit/f9111efa060a51e91ea0426cb4320d8e096f7384) - mezz
*   [Fix #4490 Prioritize recipe bookmark transfer input](https://github.com/mezz/JustEnoughItems/commit/afacc57b2c8685e6c771ead4f273e0664752a61d) - mezz
*   [Use Minecraft's GUI atlas](https://github.com/mezz/JustEnoughItems/commit/70d16d8ee63575e635a03299323855b2f7a908dd) - mezz
*   [Fix #4488 Preserve focused ingredient order](https://github.com/mezz/JustEnoughItems/commit/6a9260829bc626b6ce4af01158698a89ede6474d) - mezz
*   [Fix #4489 hidden focus-linked recipes](https://github.com/mezz/JustEnoughItems/commit/5e4e34dd777793bd75c1c7b39d77c6916f3da2f9) - mezz
*   [Consolidate API Gradle subprojects](https://github.com/mezz/JustEnoughItems/commit/99c4ec88709feb66052f3d81f7f988a199384538) - mezz
*   [Include custom game tests in Gradle check](https://github.com/mezz/JustEnoughItems/commit/027ae7fb0eb0f3997626b85ac366ac4aa237f1ce) - mezz
*   [Close #91 Add fireworks recipes](https://github.com/mezz/JustEnoughItems/commit/5b4c1addd0600c699d4bdc05e5fc05dc24960ff1) - mezz
*   [Fix #4478 Refresh recipes after proxy server switch](https://github.com/mezz/JustEnoughItems/commit/af286d27536729171bd31e8a93825b32ba2c41ea) - mezz
*   [Update MezzConfig and MezzConfig GUI on 1.21.1](https://github.com/mezz/JustEnoughItems/commit/f40ddb849058b497804927d178a9a275d3a0c6e1) - mezz
    
*   [Update 1.21.1 development dependencies](https://github.com/mezz/JustEnoughItems/commit/4c08eca566b9c0f8d8be223bfb2397f3495bd0d9) - mezz
    
*   [Update ForgeGradle to 7 on 1.21.1](https://github.com/mezz/JustEnoughItems/commit/81b0336be8737dffa54ddbdd315fd35671494442) - mezz
    
*   [Show sorting orders in the config screen](https://github.com/mezz/JustEnoughItems/commit/f2f63d1345d88094e3dbabbe43ba921c7a0c95cb) - mezz

### 27.41.0.100 for NeoForge 1.21.11
### Current release 27.41.0

*   [Suggest MezzConfig GUI for in-game configuration](https://github.com/mezz/JustEnoughItems/commit/21149bcd924be38d343bd1679a30fb7737fe6d88) - mezz
*   [Update dev dependencies](https://github.com/mezz/JustEnoughItems/commit/d2c28b425c6c4a1fa4eda831a6504677eb011dde) - mezz
    *   Update portable CI, build-plugin, JSpecify, shading, API-checker, and optional MezzConfigGui metadata dependencies. Keep the Minecraft 1.21.11 loader versions and the corresponding MezzConfigGui artifact.
*   [Fix legacy config migration](https://github.com/mezz/JustEnoughItems/commit/b7616aed7967935f6a24870bac04909e0bab60e2) - mezz
*   [Fix typing the search focus key](https://github.com/mezz/JustEnoughItems/commit/48e79364f775449b9fb0f207fb3eb24a1a296146) - mezz
    *   Keep the target's GLFW key constants and event constructors in the regression
    *   coverage.
*   [Update MezzConfig and MezzConfig GUI](https://github.com/mezz/JustEnoughItems/commit/ae786118b9335a5b30bd26984a4b6023fdaa5553) - mezz
    *   Use the corresponding Minecraft 1.21.11 MezzConfigGui 0.5.2 artifact.
*   [Show sorting orders in the config screen](https://github.com/mezz/JustEnoughItems/commit/a7e9cbe3d58075189998a1b4505cd77e354dde9f) - mezz
*   [Read mod icons from loader metadata](https://github.com/mezz/JustEnoughItems/commit/6a9e81f316cfcc4c70f7f66d35df6b94f4f6c634) - mezz
*   [Update mezzconfig and use improved migration methods](https://github.com/mezz/JustEnoughItems/commit/342969cad9f9fffb769a9a90eeda103097f3db33) - mezz
*   [Update Jenkins release notifier to 0.2.2](https://github.com/mezz/JustEnoughItems/commit/2597e66240cf7bf6f51cc553c087c3d7b333afdc) - mezz
*   [Track ingredient type registration plugins](https://github.com/mezz/JustEnoughItems/commit/042665ae84152c1f681db6ccffce25ffa29e86ba) - mezz
    *   Use target API version 27.41.0 for the new method and version bump.
*   [Add runtime toggles to the config screen](https://github.com/mezz/JustEnoughItems/commit/d108c38c6cba34eb8429fce2b9cd032e5e040f26) - mezz
*   [Show JEI key mappings in the config screen](https://github.com/mezz/JustEnoughItems/commit/b477abdde1c26a749ee2e399c4f93fb9b2d24d50) - mezz
*   [Add combined grid alignment controls](https://github.com/mezz/JustEnoughItems/commit/9889b306541f6ea0b75d60c0ddc806add15bfe5c) - mezz
*   [Add optional MezzConfigGui integration](https://github.com/mezz/JustEnoughItems/commit/81a4e49357165967269ac5bf0b37d2c55992a03c) - mezz
    *   Use the Minecraft 1.21.11 MezzConfigGui artifact version and preserve the target publication layout.
*   [Expose runtime toggle state changes](https://github.com/mezz/JustEnoughItems/commit/fd2d7c14d52809e1d8375a04311821dcedec5e47) - mezz
*   [Select key mappings for config screens](https://github.com/mezz/JustEnoughItems/commit/e76a00cc5a18656fa87bb479d6c6ea4f2bbcd3d3) - mezz
*   [Expose native key mappings internally](https://github.com/mezz/JustEnoughItems/commit/8116fd88dc3190b3177f96b4b68f5381e3033bbf) - mezz
*   [Open config screens by mod id](https://github.com/mezz/JustEnoughItems/commit/586aa5384eb2d8efe4fa0753c929dfd8d441dd11) - mezz
*   [Share ingredient and bookmark list controls](https://github.com/mezz/JustEnoughItems/commit/32c0b08da8840d3797c3e4299da4a1391571bc55) - mezz
*   [Centralize cheat mode updates](https://github.com/mezz/JustEnoughItems/commit/04392062e1f951e13c11a3049a9f0b5d658f7669) - mezz
*   [Add representative ingredients for ingredient types](https://github.com/mezz/JustEnoughItems/commit/fa2cc0582f3a5e4a5f2fdcbd286df7c0af89009b) - mezz
    *   Use target API version 27.40.0 for the new method and version bump.
*   [Declare the JEI logo in NeoForge metadata](https://github.com/mezz/JustEnoughItems/commit/e4d477b1c9eb9c612855400b12b920f5d45fa8c3) - mezz
*   [Localize modifier key names](https://github.com/mezz/JustEnoughItems/commit/8ef36c1fc5ff3fb8138592ad4d53947661d8c9ef) - mezz
*   [Distinguish JEI key mapping conflict contexts](https://github.com/mezz/JustEnoughItems/commit/49d3056d5bfa08807bb26aa5080538f972c20312) - mezz
*   [Fit overlays around config screen](https://github.com/mezz/JustEnoughItems/commit/01c9a1fbe8195dec37d5ecba67400d8cf688e6d7) - mezz
*   [Fix ingredient grid test view](https://github.com/mezz/JustEnoughItems/commit/f0745db864734424cec2e024effc47b19d62dd0d) - mezz
*   [Fix missing bookmark output config translations](https://github.com/mezz/JustEnoughItems/commit/e8579ca6cfbde9f5865c67375ae5759e924ae130) - mezz
*   [Align lookup history with overlay grids](https://github.com/mezz/JustEnoughItems/commit/839faf837448dbc2ada744b5150eeafdafbe6d4e) - mezz
*   [Improve splitLines wrapping](https://github.com/mezz/JustEnoughItems/commit/49306891ea4c3e14e515867c2d5cc06b283a7810) - mezz
*   [Move shared GUI types to Common](https://github.com/mezz/JustEnoughItems/commit/04d72b3c4347de89ceff033f0dd5406788dbc6ac) - mezz

### 19.57.0.446 for NeoForge 1.21.1
### Current release 19.57.0

*   [Declare compatible optional MezzConfigGui loader metadata](https://github.com/mezz/JustEnoughItems/commit/7a099ab01a99602cfd886df76641fe41812b88d2) - mezz
    *   Adapt the portable metadata part of the dependency update to the 1.21.1 Fabric, Forge, and NeoForge manifests. Keep the target build plugins and shaded publication wiring.
*   [Update Jenkins release notifier to 0.2.2](https://github.com/mezz/JustEnoughItems/commit/142c4933d70f8f7ee851aec84e1b7188cd6122c3) - mezz
*   [Fix #4193 dragging bookmarks across pages (#4493)](https://github.com/mezz/JustEnoughItems/commit/458396ca0d180b683427ac9025e457fcfb89f057) - vfyjxf
    *   Co-authored-by: mezz
*   [Fix typing the search focus key](https://github.com/mezz/JustEnoughItems/commit/bc33b3775ff1d6acc7fd3c234b7ba85e2c149c66) - mezz
    
*   [Fix missing bookmark output config translations](https://github.com/mezz/JustEnoughItems/commit/50110cda50dc82d72479a3715b4634b690fad10c) - mezz
*   [Fix legacy config migration](https://github.com/mezz/JustEnoughItems/commit/1b1dd13be25d9310f55913e2d00f965ad342c334) - mezz
    
*   [Fix darkened JEI controls on the recipe screen](https://github.com/mezz/JustEnoughItems/commit/ce0f9991cc40c4f0c731317ba2a03bbefbcf7e3b) - mezz
    
*   [Publish every successful Jenkins build](https://github.com/mezz/JustEnoughItems/commit/26f4b56dd5cafb83703ac9b7d33c977ea380a9bb) - mezz
*   [Fix #4371 Keep Realms config paths stable](https://github.com/mezz/JustEnoughItems/commit/c7722d7b2a4d8de5e94e9e142ff341ae7ec3874e) - mezz
*   [Simplify Gradle property access](https://github.com/mezz/JustEnoughItems/commit/e31957c6315a26411ea774575577260fd811e940) - mezz
*   [Add a debug recipe with 10000 numbered slot candidates](https://github.com/mezz/JustEnoughItems/commit/33804c3c84b8a057d6236e1a29bb1348dc245ab2) - mezz
*   [Prepare interactive tooltip slots only as they become visible](https://github.com/mezz/JustEnoughItems/commit/f79aa47f5d7a673c714bada34774d3e76c4d5279) - mezz
*   [Validate NeoForge client test resources during checks](https://github.com/mezz/JustEnoughItems/commit/b01d7bf3c2068b32b5600228dee85c762d9b4d40) - mezz
*   [Exercise search typing through complete GLFW key events](https://github.com/mezz/JustEnoughItems/commit/7081a728091408c43da571b0fbc8ac0c284cf870) - mezz
*   [Cache recipe slot tooltip candidates and prepare visible entries lazily](https://github.com/mezz/JustEnoughItems/commit/490b515383f276a7114adf3698a56e2c14eae67b) - mezz
*   [Bound test CI runtime and require a headless display](https://github.com/mezz/JustEnoughItems/commit/1179e9107a81aefd12a3d1e68f2234ceeb3bb1b4) - mezz
*   [Verify JEI textures in Fabric client tests](https://github.com/mezz/JustEnoughItems/commit/f9111efa060a51e91ea0426cb4320d8e096f7384) - mezz
*   [Fix #4490 Prioritize recipe bookmark transfer input](https://github.com/mezz/JustEnoughItems/commit/afacc57b2c8685e6c771ead4f273e0664752a61d) - mezz
*   [Use Minecraft's GUI atlas](https://github.com/mezz/JustEnoughItems/commit/70d16d8ee63575e635a03299323855b2f7a908dd) - mezz
*   [Fix #4488 Preserve focused ingredient order](https://github.com/mezz/JustEnoughItems/commit/6a9260829bc626b6ce4af01158698a89ede6474d) - mezz
*   [Fix #4489 hidden focus-linked recipes](https://github.com/mezz/JustEnoughItems/commit/5e4e34dd777793bd75c1c7b39d77c6916f3da2f9) - mezz
*   [Consolidate API Gradle subprojects](https://github.com/mezz/JustEnoughItems/commit/99c4ec88709feb66052f3d81f7f988a199384538) - mezz
*   [Include custom game tests in Gradle check](https://github.com/mezz/JustEnoughItems/commit/027ae7fb0eb0f3997626b85ac366ac4aa237f1ce) - mezz
*   [Close #91 Add fireworks recipes](https://github.com/mezz/JustEnoughItems/commit/5b4c1addd0600c699d4bdc05e5fc05dc24960ff1) - mezz
*   [Fix #4478 Refresh recipes after proxy server switch](https://github.com/mezz/JustEnoughItems/commit/af286d27536729171bd31e8a93825b32ba2c41ea) - mezz
*   [Update MezzConfig and MezzConfig GUI on 1.21.1](https://github.com/mezz/JustEnoughItems/commit/f40ddb849058b497804927d178a9a275d3a0c6e1) - mezz
    
*   [Update 1.21.1 development dependencies](https://github.com/mezz/JustEnoughItems/commit/4c08eca566b9c0f8d8be223bfb2397f3495bd0d9) - mezz
    
*   [Update ForgeGradle to 7 on 1.21.1](https://github.com/mezz/JustEnoughItems/commit/81b0336be8737dffa54ddbdd315fd35671494442) - mezz
    
*   [Show sorting orders in the config screen](https://github.com/mezz/JustEnoughItems/commit/f2f63d1345d88094e3dbabbe43ba921c7a0c95cb) - mezz
    
*   [Track ingredient type registration plugins](https://github.com/mezz/JustEnoughItems/commit/5c84e6dc012c47afc18325ea31dfed60c5bf6ac8) - mezz

### 27.41.0.99 for NeoForge 1.21.11
### Current release 27.41.0

*   [Update dev dependencies](https://github.com/mezz/JustEnoughItems/commit/d2c28b425c6c4a1fa4eda831a6504677eb011dde) - mezz
    *   Update portable CI, build-plugin, JSpecify, shading, API-checker, and optional MezzConfigGui metadata dependencies. Keep the Minecraft 1.21.11 loader versions and the corresponding MezzConfigGui artifact.
*   [Fix legacy config migration](https://github.com/mezz/JustEnoughItems/commit/b7616aed7967935f6a24870bac04909e0bab60e2) - mezz
*   [Fix typing the search focus key](https://github.com/mezz/JustEnoughItems/commit/48e79364f775449b9fb0f207fb3eb24a1a296146) - mezz
    *   Keep the target's GLFW key constants and event constructors in the regression
    *   coverage.
*   [Update MezzConfig and MezzConfig GUI](https://github.com/mezz/JustEnoughItems/commit/ae786118b9335a5b30bd26984a4b6023fdaa5553) - mezz
    *   Use the corresponding Minecraft 1.21.11 MezzConfigGui 0.5.2 artifact.
*   [Show sorting orders in the config screen](https://github.com/mezz/JustEnoughItems/commit/a7e9cbe3d58075189998a1b4505cd77e354dde9f) - mezz
*   [Read mod icons from loader metadata](https://github.com/mezz/JustEnoughItems/commit/6a9e81f316cfcc4c70f7f66d35df6b94f4f6c634) - mezz
*   [Update mezzconfig and use improved migration methods](https://github.com/mezz/JustEnoughItems/commit/342969cad9f9fffb769a9a90eeda103097f3db33) - mezz
*   [Update Jenkins release notifier to 0.2.2](https://github.com/mezz/JustEnoughItems/commit/2597e66240cf7bf6f51cc553c087c3d7b333afdc) - mezz
*   [Track ingredient type registration plugins](https://github.com/mezz/JustEnoughItems/commit/042665ae84152c1f681db6ccffce25ffa29e86ba) - mezz
    *   Use target API version 27.41.0 for the new method and version bump.
*   [Add runtime toggles to the config screen](https://github.com/mezz/JustEnoughItems/commit/d108c38c6cba34eb8429fce2b9cd032e5e040f26) - mezz
*   [Show JEI key mappings in the config screen](https://github.com/mezz/JustEnoughItems/commit/b477abdde1c26a749ee2e399c4f93fb9b2d24d50) - mezz
*   [Add combined grid alignment controls](https://github.com/mezz/JustEnoughItems/commit/9889b306541f6ea0b75d60c0ddc806add15bfe5c) - mezz
*   [Add optional MezzConfigGui integration](https://github.com/mezz/JustEnoughItems/commit/81a4e49357165967269ac5bf0b37d2c55992a03c) - mezz
    *   Use the Minecraft 1.21.11 MezzConfigGui artifact version and preserve the target publication layout.
*   [Expose runtime toggle state changes](https://github.com/mezz/JustEnoughItems/commit/fd2d7c14d52809e1d8375a04311821dcedec5e47) - mezz
*   [Select key mappings for config screens](https://github.com/mezz/JustEnoughItems/commit/e76a00cc5a18656fa87bb479d6c6ea4f2bbcd3d3) - mezz
*   [Expose native key mappings internally](https://github.com/mezz/JustEnoughItems/commit/8116fd88dc3190b3177f96b4b68f5381e3033bbf) - mezz
*   [Open config screens by mod id](https://github.com/mezz/JustEnoughItems/commit/586aa5384eb2d8efe4fa0753c929dfd8d441dd11) - mezz
*   [Share ingredient and bookmark list controls](https://github.com/mezz/JustEnoughItems/commit/32c0b08da8840d3797c3e4299da4a1391571bc55) - mezz
*   [Centralize cheat mode updates](https://github.com/mezz/JustEnoughItems/commit/04392062e1f951e13c11a3049a9f0b5d658f7669) - mezz
*   [Add representative ingredients for ingredient types](https://github.com/mezz/JustEnoughItems/commit/fa2cc0582f3a5e4a5f2fdcbd286df7c0af89009b) - mezz
    *   Use target API version 27.40.0 for the new method and version bump.
*   [Declare the JEI logo in NeoForge metadata](https://github.com/mezz/JustEnoughItems/commit/e4d477b1c9eb9c612855400b12b920f5d45fa8c3) - mezz
*   [Localize modifier key names](https://github.com/mezz/JustEnoughItems/commit/8ef36c1fc5ff3fb8138592ad4d53947661d8c9ef) - mezz
*   [Distinguish JEI key mapping conflict contexts](https://github.com/mezz/JustEnoughItems/commit/49d3056d5bfa08807bb26aa5080538f972c20312) - mezz
*   [Fit overlays around config screen](https://github.com/mezz/JustEnoughItems/commit/01c9a1fbe8195dec37d5ecba67400d8cf688e6d7) - mezz
*   [Fix ingredient grid test view](https://github.com/mezz/JustEnoughItems/commit/f0745db864734424cec2e024effc47b19d62dd0d) - mezz
*   [Fix missing bookmark output config translations](https://github.com/mezz/JustEnoughItems/commit/e8579ca6cfbde9f5865c67375ae5759e924ae130) - mezz
*   [Fix #4491 Fix crash from client config registration during datagen](https://github.com/mezz/JustEnoughItems/commit/bdd11f39c0b10bc75a9630189d5484dc3f688f67) - mezz
*   [Align lookup history with overlay grids](https://github.com/mezz/JustEnoughItems/commit/839faf837448dbc2ada744b5150eeafdafbe6d4e) - mezz
*   [Improve splitLines wrapping](https://github.com/mezz/JustEnoughItems/commit/49306891ea4c3e14e515867c2d5cc06b283a7810) - mezz
*   [Move shared GUI types to Common](https://github.com/mezz/JustEnoughItems/commit/04d72b3c4347de89ceff033f0dd5406788dbc6ac) - mezz

### 19.57.0.445 for NeoForge 1.21.1
### Current release 19.57.0

*   [Fix typing the search focus key](https://github.com/mezz/JustEnoughItems/commit/bc33b3775ff1d6acc7fd3c234b7ba85e2c149c66) - mezz
    
*   [Fix missing bookmark output config translations](https://github.com/mezz/JustEnoughItems/commit/50110cda50dc82d72479a3715b4634b690fad10c) - mezz
*   [Fix legacy config migration](https://github.com/mezz/JustEnoughItems/commit/1b1dd13be25d9310f55913e2d00f965ad342c334) - mezz
    
*   [Fix darkened JEI controls on the recipe screen](https://github.com/mezz/JustEnoughItems/commit/ce0f9991cc40c4f0c731317ba2a03bbefbcf7e3b) - mezz
    
*   [Publish every successful Jenkins build](https://github.com/mezz/JustEnoughItems/commit/26f4b56dd5cafb83703ac9b7d33c977ea380a9bb) - mezz
*   [Fix #4371 Keep Realms config paths stable](https://github.com/mezz/JustEnoughItems/commit/c7722d7b2a4d8de5e94e9e142ff341ae7ec3874e) - mezz
*   [Simplify Gradle property access](https://github.com/mezz/JustEnoughItems/commit/e31957c6315a26411ea774575577260fd811e940) - mezz
*   [Add a debug recipe with 10000 numbered slot candidates](https://github.com/mezz/JustEnoughItems/commit/33804c3c84b8a057d6236e1a29bb1348dc245ab2) - mezz
*   [Prepare interactive tooltip slots only as they become visible](https://github.com/mezz/JustEnoughItems/commit/f79aa47f5d7a673c714bada34774d3e76c4d5279) - mezz
*   [Validate NeoForge client test resources during checks](https://github.com/mezz/JustEnoughItems/commit/b01d7bf3c2068b32b5600228dee85c762d9b4d40) - mezz
*   [Exercise search typing through complete GLFW key events](https://github.com/mezz/JustEnoughItems/commit/7081a728091408c43da571b0fbc8ac0c284cf870) - mezz
*   [Cache recipe slot tooltip candidates and prepare visible entries lazily](https://github.com/mezz/JustEnoughItems/commit/490b515383f276a7114adf3698a56e2c14eae67b) - mezz
*   [Bound test CI runtime and require a headless display](https://github.com/mezz/JustEnoughItems/commit/1179e9107a81aefd12a3d1e68f2234ceeb3bb1b4) - mezz
*   [Verify JEI textures in Fabric client tests](https://github.com/mezz/JustEnoughItems/commit/f9111efa060a51e91ea0426cb4320d8e096f7384) - mezz
*   [Fix #4490 Prioritize recipe bookmark transfer input](https://github.com/mezz/JustEnoughItems/commit/afacc57b2c8685e6c771ead4f273e0664752a61d) - mezz
*   [Use Minecraft's GUI atlas](https://github.com/mezz/JustEnoughItems/commit/70d16d8ee63575e635a03299323855b2f7a908dd) - mezz
*   [Fix #4488 Preserve focused ingredient order](https://github.com/mezz/JustEnoughItems/commit/6a9260829bc626b6ce4af01158698a89ede6474d) - mezz
*   [Fix #4489 hidden focus-linked recipes](https://github.com/mezz/JustEnoughItems/commit/5e4e34dd777793bd75c1c7b39d77c6916f3da2f9) - mezz
*   [Consolidate API Gradle subprojects](https://github.com/mezz/JustEnoughItems/commit/99c4ec88709feb66052f3d81f7f988a199384538) - mezz
*   [Include custom game tests in Gradle check](https://github.com/mezz/JustEnoughItems/commit/027ae7fb0eb0f3997626b85ac366ac4aa237f1ce) - mezz
*   [Close #91 Add fireworks recipes](https://github.com/mezz/JustEnoughItems/commit/5b4c1addd0600c699d4bdc05e5fc05dc24960ff1) - mezz
*   [Fix #4478 Refresh recipes after proxy server switch](https://github.com/mezz/JustEnoughItems/commit/af286d27536729171bd31e8a93825b32ba2c41ea) - mezz
*   [Update MezzConfig and MezzConfig GUI on 1.21.1](https://github.com/mezz/JustEnoughItems/commit/f40ddb849058b497804927d178a9a275d3a0c6e1) - mezz
    
*   [Update 1.21.1 development dependencies](https://github.com/mezz/JustEnoughItems/commit/4c08eca566b9c0f8d8be223bfb2397f3495bd0d9) - mezz
    
*   [Update ForgeGradle to 7 on 1.21.1](https://github.com/mezz/JustEnoughItems/commit/81b0336be8737dffa54ddbdd315fd35671494442) - mezz
    
*   [Show sorting orders in the config screen](https://github.com/mezz/JustEnoughItems/commit/f2f63d1345d88094e3dbabbe43ba921c7a0c95cb) - mezz
    
*   [Track ingredient type registration plugins](https://github.com/mezz/JustEnoughItems/commit/5c84e6dc012c47afc18325ea31dfed60c5bf6ac8) - mezz
    
*   [Add combined grid alignment controls](https://github.com/mezz/JustEnoughItems/commit/e79af645aa09b68f7cc30ff7970e458b5d57193e) - mezz
    
*   [Read mod icons from loader metadata](https://github.com/mezz/JustEnoughItems/commit/e1d9e3ed5f20d81c8b3a82d92fd1a046a43336b7) - mezz
    
*   [Add runtime toggles to the config screen](https://github.com/mezz/JustEnoughItems/commit/f8206995df51f712eeb2e2fe8e231a53f93cf02c) - mezz

### 19.57.0.444 for NeoForge 1.21.1
### Current release 19.57.0

*   [Update MezzConfig and MezzConfig GUI on 1.21.1](https://github.com/mezz/JustEnoughItems/commit/f40ddb849058b497804927d178a9a275d3a0c6e1) - mezz
    
*   [Update 1.21.1 development dependencies](https://github.com/mezz/JustEnoughItems/commit/4c08eca566b9c0f8d8be223bfb2397f3495bd0d9) - mezz
    
*   [Update ForgeGradle to 7 on 1.21.1](https://github.com/mezz/JustEnoughItems/commit/81b0336be8737dffa54ddbdd315fd35671494442) - mezz
    
*   [Show sorting orders in the config screen](https://github.com/mezz/JustEnoughItems/commit/f2f63d1345d88094e3dbabbe43ba921c7a0c95cb) - mezz
    
*   [Track ingredient type registration plugins](https://github.com/mezz/JustEnoughItems/commit/5c84e6dc012c47afc18325ea31dfed60c5bf6ac8) - mezz
    
*   [Add combined grid alignment controls](https://github.com/mezz/JustEnoughItems/commit/e79af645aa09b68f7cc30ff7970e458b5d57193e) - mezz
    
*   [Read mod icons from loader metadata](https://github.com/mezz/JustEnoughItems/commit/e1d9e3ed5f20d81c8b3a82d92fd1a046a43336b7) - mezz
    
*   [Add runtime toggles to the config screen](https://github.com/mezz/JustEnoughItems/commit/f8206995df51f712eeb2e2fe8e231a53f93cf02c) - mezz
    
*   [Show JEI key mappings in the config screen](https://github.com/mezz/JustEnoughItems/commit/4f8874471fe841703a2765ed17662009bc7360a8) - mezz
    
*   [Add optional MezzConfigGui integration](https://github.com/mezz/JustEnoughItems/commit/381392c96c2ea8497d22b56983bf3f51a9e1279d) - mezz
    
*   [Update MezzConfig to 0.5.9](https://github.com/mezz/JustEnoughItems/commit/0c30031b10c4394b2744fc253b8d73150eb5cdb5) - mezz
    
*   [Share ingredient and bookmark list controls](https://github.com/mezz/JustEnoughItems/commit/064d1c0e32044c447ae654a185a6381b71254f4e) - mezz
    
*   [Add damage bar ingredients to debug plugin](https://github.com/mezz/JustEnoughItems/commit/3309966b4623ce69b659329cdfb3e0b3d127af0e) - mezz
    
*   [Fix #4479 render item decorations behind tooltips](https://github.com/mezz/JustEnoughItems/commit/0bac81d0901ffef7188851602f5178246b613055) - mezz
    
*   [Fix #4491 Fix crash from client config registration during datagen](https://github.com/mezz/JustEnoughItems/commit/bf7b64d24f18b957ffdb806227b6077a2088eaff) - mezz
    
*   [Group grindstone disenchantment recipe variants](https://github.com/mezz/JustEnoughItems/commit/eb1dec3718e172b7b6434047b00743dd4b2f551f) - mezz
    
*   [Fix grindstone disenchantment recipe layouts](https://github.com/mezz/JustEnoughItems/commit/7f8d26bce01d9382419bf70c87c27dd790a39b54) - mezz
    
*   [Update MezzConfig to 0.5.6](https://github.com/mezz/JustEnoughItems/commit/5e5c21a8ff5c1b1399c39d2676b7fb12325e827a) - mezz
    
*   [Embed the complete MezzConfig loader artifact](https://github.com/mezz/JustEnoughItems/commit/1ae95dd404157e5be263e1843880268dde7f8281) - mezz
    
*   [Don't abort previous builds in Jenkins when there are multiple going at once](https://github.com/mezz/JustEnoughItems/commit/12e1796d8025e7aa96579a8ce74f5fd5c4202ce7) - mezz
    
*   [Select key mappings for config screens](https://github.com/mezz/JustEnoughItems/commit/f0f39fbad1c6a47cb5f2111b2b3432950243da22) - mezz
    
*   [Open config screens by mod id](https://github.com/mezz/JustEnoughItems/commit/82677c12eefe06bded4090aec45f4fb5eb5e6467) - mezz
    
*   [Centralize cheat mode updates](https://github.com/mezz/JustEnoughItems/commit/6b2069bf89ac1168efe033806301a39a365eea40) - mezz
    
*   [Expose native key mappings internally](https://github.com/mezz/JustEnoughItems/commit/5f490b0db6a33c296b0a21d0db3a605f5d56296c) - mezz
    
*   [Expose runtime toggle state changes](https://github.com/mezz/JustEnoughItems/commit/07e93173033de83278e0b6325d60f52fdc328e85) - mezz
    
*   [Add representative ingredients for ingredient types](https://github.com/mezz/JustEnoughItems/commit/bd0bb4c2e715d0908614c84628402cb5c2230976) - mezz
    
*   [Distinguish JEI key mapping conflict contexts](https://github.com/mezz/JustEnoughItems/commit/9aa0b49857a833c77988e0289ec020762c1c8672) - mezz
    
*   [Localize modifier key names](https://github.com/mezz/JustEnoughItems/commit/308bf60b80dd344ef97c109c27a42fd2ce92dc00) - mezz
    
*   [Refresh overlay button states each tick](https://github.com/mezz/JustEnoughItems/commit/c85e9077eda4907d5b920b119159ac05926fe884) - mezz
    
*   [Declare the JEI logo in NeoForge metadata](https://github.com/mezz/JustEnoughItems/commit/53e48dc080960aa6df863d96c71936cffcd2a6c2) - mezz

### 27.38.0.98 for NeoForge 1.21.11
### Current release 27.38.0

*   [Add a debug recipe with 10000 numbered slot candidates](https://github.com/mezz/JustEnoughItems/commit/6c34ac23ec64ababb3b6640fc9746be0d78a4688) - mezz
*   [Preserve recipe amounts when expanding tag ingredients](https://github.com/mezz/JustEnoughItems/commit/0a0fcdf1e798b970e4a8c3b52edb30f927533601) - mezz
*   [Publish every successful Jenkins build](https://github.com/mezz/JustEnoughItems/commit/c84f2f2dcab0bb9f79ecf8bf09a6a16d4564bfb7) - mezz
*   [Cache recipe slot tooltip candidates and prepare visible entries lazily](https://github.com/mezz/JustEnoughItems/commit/67584bce338a7e9880f58d57f0405aa420685d1c) - mezz
*   [Prepare interactive tooltip slots only as they become visible](https://github.com/mezz/JustEnoughItems/commit/083fb0c350a5f77d28a1c3b7accc18a00fd3625b) - mezz
*   [Exercise search typing through complete GLFW key events](https://github.com/mezz/JustEnoughItems/commit/e9963bab4ed93673454efee5761822e1bdb1e81e) - mezz
    *   Carry plain-text input regression coverage to Fabric and NeoForge using the 1.21.11 GLFW callbacks and two-argument CharacterEvent. Add target-compatible typing fixtures; IME/preedit APIs are unavailable on this Minecraft version.
*   [Bound test CI runtime and require a headless display](https://github.com/mezz/JustEnoughItems/commit/0a56f7c48eace43b7cb38614f9ddcc994f40013b) - mezz
    *   Keep the 1.21.11 GLFW/Xvfb launch commands for both Fabric variants and NeoForge. Add job and client-test timeouts and fail when Xvfb is missing. SDL framebuffer settings are specific to 26.3.
*   [Validate NeoForge client test resources during checks](https://github.com/mezz/JustEnoughItems/commit/d16610c45bc05e620bab16a4d2b4b21eb5d11ce9) - mezz
    *   Prepare client game-test classes and resources in check and CI. Keep the vanilla test-server launch in Common, which still uses ModDevGradle on 1.21.11.
*   [Verify JEI textures in Fabric client tests](https://github.com/mezz/JustEnoughItems/commit/686c8c6f1e36592c61ed71fe1f7ab17b911ccf9d) - mezz
    *   The 1.21.11 build already exposes dependency resources through its main source set. Carry the texture regression assertion using Minecraft's GUI atlas.
*   [Use Minecraft's GUI atlas](https://github.com/mezz/JustEnoughItems/commit/f6d30b5d029355bb30ef613101e82f6331c063eb) - mezz
*   [Fix grindstone disenchantment recipe layouts](https://github.com/mezz/JustEnoughItems/commit/d7fb52a27af46d1cf9c25e5c00e92d757dce372b) - mezz
*   [Fix #4489 hidden focus-linked recipes](https://github.com/mezz/JustEnoughItems/commit/6f63e1b6f904bff96a641f6ec8764a1753aee0c6) - mezz
*   [Group grindstone disenchantment recipe variants](https://github.com/mezz/JustEnoughItems/commit/654e8a9b140585b54275c453e8f793ae0da1323b) - mezz
*   [Fix #4488 Preserve focused ingredient order](https://github.com/mezz/JustEnoughItems/commit/e63cd7e3931b38ac4cd0c4412a74c85b290190e4) - mezz
*   [Fix #4490 Prioritize recipe bookmark transfer input](https://github.com/mezz/JustEnoughItems/commit/2b75e2c0425e2954bef689e042cff2c99d91ea4f) - mezz
*   [Include custom game tests in Gradle check](https://github.com/mezz/JustEnoughItems/commit/c460da08518097a0488b6c54e68b384d06a0f7e4) - mezz
*   [Consolidate API Gradle subprojects](https://github.com/mezz/JustEnoughItems/commit/28c7548c5d78f2b06ee84566e3118f4a90c29d8d) - mezz
    *   Move API roots into their loader/Common projects while preserving the 1.21.11 Loom remapping and Maven artifact layout. Include the NeoForge client-test API classpath correction from 5b342d746.
*   [Register JEI atlas as identifiable Fabric resource listener](https://github.com/mezz/JustEnoughItems/commit/0c1e850406824e897b06cdc17c246737836c41d5) - mezz
*   [Close #91 Add fireworks recipes](https://github.com/mezz/JustEnoughItems/commit/fefe9a32a4ecaa5e94d97d539d21c84fb8666388) - mezz
    *   Adapt fireworks to 1.21.11 custom recipe constants, DyeItem colors, ItemStack outputs, and registry-aware assembly. Preserve target shield and tipped-arrow recipes. Verify rocket, star, and fade displays against actual crafting results.
*   [Fix #4478 Refresh recipes after proxy server switch](https://github.com/mezz/JustEnoughItems/commit/4e934960916a2042b2b6dfb408118d96af2303aa) - mezz
    *   Also carry the portable runtime-stop cache invalidation from 01fc3b6f7, preserving the 1.21.11 UUID-based NeoForge capability cache.
*   [Drop 1.16.5 and 1.18.2 from supported versions](https://github.com/mezz/JustEnoughItems/commit/4b6e47334ac4aaeae51d15facbb38c42cb511321) - mezz
*   [Fix #4474 Dragging bookmarks can cause bookmark area to move around](https://github.com/mezz/JustEnoughItems/commit/1d76a2bb07ee89b2836d91cea8b5667029004bbd) - mezz
*   [Fix #4472 Fluid ingredients alternate between visible and empty in recipe GUI](https://github.com/mezz/JustEnoughItems/commit/b591ccd61c2370e7c4ef61165f97e742e596a299) - mezz
*   [Add grouped crafting station displays](https://github.com/mezz/JustEnoughItems/commit/2b479fd59e3e4c5c569638f62d04982d28531ae5) - mezz
*   [Expose bookmark APIs for #4469](https://github.com/mezz/JustEnoughItems/commit/ff23de785ced1dfed38dd5360b852cbad49adb27) - mezz
*   [Fix #4468 Double clicking issue on Fabric with Kilt](https://github.com/mezz/JustEnoughItems/commit/ceb97cd5eef30a578a30f305b9cc0410aa372bfc) - mezz
*   [Use mezzdev JavaFormatting rules](https://github.com/mezz/JustEnoughItems/commit/d52154cc88ba8ecf2e0685a1ce05e423cccea362) - mezz
    *   Replace the target-local Spotless rules with java-formatting 0.4.0 and apply the final rule set across the 1.21.11 sources.
    *   Fold source formatting follow-ups c41cef372, 8a7ac02ef, and 1162407bf.
*   [Suppress tooltips behind pinned previews](https://github.com/mezz/JustEnoughItems/commit/8c1fb415fa8ce47e6dd9670eb51bb6985bdfe454) - mezz
*   [Add recipe transfer lifecycle API](https://github.com/mezz/JustEnoughItems/commit/615419aab3dab2737f7d4ba72fca4a75545e70e0) - mezz
*   [Use the pin key for bookmark preview details](https://github.com/mezz/JustEnoughItems/commit/2b0b9e9b1f22cae49dffb45e5dafb96131bdbd85) - mezz

## Entity Culling Fabric/Forge
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/entityculling)

### 1.11.2-1.21.1 - NeoForge
Hotfix 1.11.2
-------------

*   Use own var to store BlockPos.
    *   Fixes older mc versions < 1.21.1? not culling BlockEntities at all due to silent failure in prod envs
    *   Fixes game crashing with "Kaleidoscope Cookery Refabricated"

Compatibility note: Create: Nowheel 2.0.0 needs to be updated to be compatible with 1.11.0+ of EntityCulling

Hotfix 1.11.1
-------------

*   Missing interpolation of tick culled entities in 26.3 causes invisibility and fast movements. Fix [#330](https://github.com/tr7zw/EntityCulling/issues/330) Fix [#328](https://github.com/tr7zw/EntityCulling/issues/328) Fix [#326](https://github.com/tr7zw/EntityCulling/issues/326)
*   Fix older Neoforge versions. Fix [#329](https://github.com/tr7zw/EntityCulling/issues/329)
*   Never cull the local player, preventing crashing, for example, during freecam in 26.3

What's Changed 1.11.0
---------------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Fully unhooked the Cull Thread from the Entity gamelogic (see below)
*   Fix NeoForge not using the getRenderBoundingBox method for BlockEntities
*   Add getRenderBoundingBox method for fabric. Fix [#313](https://github.com/tr7zw/EntityCulling/issues/313)
*   Fix debug flag confusion
*   Formatting, optimize icon [#309](https://github.com/tr7zw/EntityCulling/issues/309)
*   Create en_ud.json by @Fhilips613 in [https://github.com/tr7zw/EntityCulling/pull/310](https://github.com/tr7zw/EntityCulling/pull/310)
*   Update id_id.json by @nunoguevara in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   Respect name display distances for culled entities by @artegoser in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)
*   All builds <= 1.12.2 got moved into a repo located at [https://github.com/tr7zw/Legacy_EntityCulling](https://github.com/tr7zw/Legacy_EntityCulling)

New Contributors
----------------

*   @nunoguevara made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   @artegoser made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)

Note
----

This release contains a bunch of reworks around extracting the required (block)entity data on the main thread to prevent crashes with some other mods that can't handle the async looking up of data. These "correctness" fixes come at the cost of performance in the main client tick, so it is a tradeoff. In my tests, during reasonable conditions, this should take under 1ms every 5 ticks (250ms), up from ~0.5ms in the last release. This should be fine but needs general testing to better understand the impact. If you are experiencing issues, get in contact via GitHub/Discord. In case you are feeling adventurous and have a mod configuration that isn't impacted by these async access crashes, there is a `safeMode` flag in the config file to move all the lookups away from the main thread, removing all the overhead.

**Full Changelog**: [https://github.com/tr7zw/EntityCulling/compare/1.11.1...1.11.2](https://github.com/tr7zw/EntityCulling/compare/1.11.1...1.11.2)

### 1.11.1-1.21.8 - NeoForge
Hotfix 1.11.1
-------------

*   Missing interpolation of tick culled entities in 26.3 causes invisibility and fast movements. Fix [#330](https://github.com/tr7zw/EntityCulling/issues/330) Fix [#328](https://github.com/tr7zw/EntityCulling/issues/328) Fix [#326](https://github.com/tr7zw/EntityCulling/issues/326)
*   Fix older Neoforge versions. Fix [#329](https://github.com/tr7zw/EntityCulling/issues/329)
*   Never cull the local player, preventing crashing, for example, during freecam in 26.3

What's Changed 1.11.0
---------------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Fully unhooked the Cull Thread from the Entity gamelogic (see below)
*   Fix NeoForge not using the getRenderBoundingBox method for BlockEntities
*   Add getRenderBoundingBox method for fabric. Fix [#313](https://github.com/tr7zw/EntityCulling/issues/313)
*   Fix debug flag confusion
*   Formatting, optimize icon [#309](https://github.com/tr7zw/EntityCulling/issues/309)
*   Create en_ud.json by @Fhilips613 in [https://github.com/tr7zw/EntityCulling/pull/310](https://github.com/tr7zw/EntityCulling/pull/310)
*   Update id_id.json by @nunoguevara in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   Respect name display distances for culled entities by @artegoser in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)
*   All builds <= 1.12.2 got moved into a repo located at [https://github.com/tr7zw/Legacy_EntityCulling](https://github.com/tr7zw/Legacy_EntityCulling)

New Contributors
----------------

*   @nunoguevara made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   @artegoser made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)

Note
----

This release contains a bunch of reworks around extracting the required (block)entity data on the main thread to prevent crashes with some other mods that can't handle the async looking up of data. These "correctness" fixes come at the cost of performance in the main client tick, so it is a tradeoff. In my tests, during reasonable conditions, this should take under 1ms every 5 ticks (250ms), up from ~0.5ms in the last release. This should be fine but needs general testing to better understand the impact. If you are experiencing issues, get in contact via GitHub/Discord. In case you are feeling adventurous and have a mod configuration that isn't impacted by these async access crashes, there is a `safeMode` flag in the config file to move all the lookups away from the main thread, removing all the overhead.

**Full Changelog**: [https://github.com/tr7zw/EntityCulling/compare/1.11.0...1.11.1](https://github.com/tr7zw/EntityCulling/compare/1.11.0...1.11.1)

### 1.11.1-1.21.5 - NeoForge
Hotfix 1.11.1
-------------

*   Missing interpolation of tick culled entities in 26.3 causes invisibility and fast movements. Fix [#330](https://github.com/tr7zw/EntityCulling/issues/330) Fix [#328](https://github.com/tr7zw/EntityCulling/issues/328) Fix [#326](https://github.com/tr7zw/EntityCulling/issues/326)
*   Fix older Neoforge versions. Fix [#329](https://github.com/tr7zw/EntityCulling/issues/329)
*   Never cull the local player, preventing crashing, for example, during freecam in 26.3

What's Changed 1.11.0
---------------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Fully unhooked the Cull Thread from the Entity gamelogic (see below)
*   Fix NeoForge not using the getRenderBoundingBox method for BlockEntities
*   Add getRenderBoundingBox method for fabric. Fix [#313](https://github.com/tr7zw/EntityCulling/issues/313)
*   Fix debug flag confusion
*   Formatting, optimize icon [#309](https://github.com/tr7zw/EntityCulling/issues/309)
*   Create en_ud.json by @Fhilips613 in [https://github.com/tr7zw/EntityCulling/pull/310](https://github.com/tr7zw/EntityCulling/pull/310)
*   Update id_id.json by @nunoguevara in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   Respect name display distances for culled entities by @artegoser in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)
*   All builds <= 1.12.2 got moved into a repo located at [https://github.com/tr7zw/Legacy_EntityCulling](https://github.com/tr7zw/Legacy_EntityCulling)

New Contributors
----------------

*   @nunoguevara made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   @artegoser made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)

Note
----

This release contains a bunch of reworks around extracting the required (block)entity data on the main thread to prevent crashes with some other mods that can't handle the async looking up of data. These "correctness" fixes come at the cost of performance in the main client tick, so it is a tradeoff. In my tests, during reasonable conditions, this should take under 1ms every 5 ticks (250ms), up from ~0.5ms in the last release. This should be fine but needs general testing to better understand the impact. If you are experiencing issues, get in contact via GitHub/Discord. In case you are feeling adventurous and have a mod configuration that isn't impacted by these async access crashes, there is a `safeMode` flag in the config file to move all the lookups away from the main thread, removing all the overhead.

**Full Changelog**: [https://github.com/tr7zw/EntityCulling/compare/1.11.0...1.11.1](https://github.com/tr7zw/EntityCulling/compare/1.11.0...1.11.1)

### 1.11.1-1.21.4 - NeoForge
Hotfix 1.11.1
-------------

*   Missing interpolation of tick culled entities in 26.3 causes invisibility and fast movements. Fix [#330](https://github.com/tr7zw/EntityCulling/issues/330) Fix [#328](https://github.com/tr7zw/EntityCulling/issues/328) Fix [#326](https://github.com/tr7zw/EntityCulling/issues/326)
*   Fix older Neoforge versions. Fix [#329](https://github.com/tr7zw/EntityCulling/issues/329)
*   Never cull the local player, preventing crashing, for example, during freecam in 26.3

What's Changed 1.11.0
---------------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Fully unhooked the Cull Thread from the Entity gamelogic (see below)
*   Fix NeoForge not using the getRenderBoundingBox method for BlockEntities
*   Add getRenderBoundingBox method for fabric. Fix [#313](https://github.com/tr7zw/EntityCulling/issues/313)
*   Fix debug flag confusion
*   Formatting, optimize icon [#309](https://github.com/tr7zw/EntityCulling/issues/309)
*   Create en_ud.json by @Fhilips613 in [https://github.com/tr7zw/EntityCulling/pull/310](https://github.com/tr7zw/EntityCulling/pull/310)
*   Update id_id.json by @nunoguevara in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   Respect name display distances for culled entities by @artegoser in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)
*   All builds <= 1.12.2 got moved into a repo located at [https://github.com/tr7zw/Legacy_EntityCulling](https://github.com/tr7zw/Legacy_EntityCulling)

New Contributors
----------------

*   @nunoguevara made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   @artegoser made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)

Note
----

This release contains a bunch of reworks around extracting the required (block)entity data on the main thread to prevent crashes with some other mods that can't handle the async looking up of data. These "correctness" fixes come at the cost of performance in the main client tick, so it is a tradeoff. In my tests, during reasonable conditions, this should take under 1ms every 5 ticks (250ms), up from ~0.5ms in the last release. This should be fine but needs general testing to better understand the impact. If you are experiencing issues, get in contact via GitHub/Discord. In case you are feeling adventurous and have a mod configuration that isn't impacted by these async access crashes, there is a `safeMode` flag in the config file to move all the lookups away from the main thread, removing all the overhead.

**Full Changelog**: [https://github.com/tr7zw/EntityCulling/compare/1.11.0...1.11.1](https://github.com/tr7zw/EntityCulling/compare/1.11.0...1.11.1)

### 1.11.1-1.21.3 - NeoForge
Hotfix 1.11.1
-------------

*   Missing interpolation of tick culled entities in 26.3 causes invisibility and fast movements. Fix [#330](https://github.com/tr7zw/EntityCulling/issues/330) Fix [#328](https://github.com/tr7zw/EntityCulling/issues/328) Fix [#326](https://github.com/tr7zw/EntityCulling/issues/326)
*   Fix older Neoforge versions. Fix [#329](https://github.com/tr7zw/EntityCulling/issues/329)
*   Never cull the local player, preventing crashing, for example, during freecam in 26.3

What's Changed 1.11.0
---------------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Fully unhooked the Cull Thread from the Entity gamelogic (see below)
*   Fix NeoForge not using the getRenderBoundingBox method for BlockEntities
*   Add getRenderBoundingBox method for fabric. Fix [#313](https://github.com/tr7zw/EntityCulling/issues/313)
*   Fix debug flag confusion
*   Formatting, optimize icon [#309](https://github.com/tr7zw/EntityCulling/issues/309)
*   Create en_ud.json by @Fhilips613 in [https://github.com/tr7zw/EntityCulling/pull/310](https://github.com/tr7zw/EntityCulling/pull/310)
*   Update id_id.json by @nunoguevara in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   Respect name display distances for culled entities by @artegoser in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)
*   All builds <= 1.12.2 got moved into a repo located at [https://github.com/tr7zw/Legacy_EntityCulling](https://github.com/tr7zw/Legacy_EntityCulling)

New Contributors
----------------

*   @nunoguevara made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   @artegoser made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)

Note
----

This release contains a bunch of reworks around extracting the required (block)entity data on the main thread to prevent crashes with some other mods that can't handle the async looking up of data. These "correctness" fixes come at the cost of performance in the main client tick, so it is a tradeoff. In my tests, during reasonable conditions, this should take under 1ms every 5 ticks (250ms), up from ~0.5ms in the last release. This should be fine but needs general testing to better understand the impact. If you are experiencing issues, get in contact via GitHub/Discord. In case you are feeling adventurous and have a mod configuration that isn't impacted by these async access crashes, there is a `safeMode` flag in the config file to move all the lookups away from the main thread, removing all the overhead.

**Full Changelog**: [https://github.com/tr7zw/EntityCulling/compare/1.11.0...1.11.1](https://github.com/tr7zw/EntityCulling/compare/1.11.0...1.11.1)

### 1.11.1-1.21.11 - NeoForge
Hotfix 1.11.1
-------------

*   Missing interpolation of tick culled entities in 26.3 causes invisibility and fast movements. Fix [#330](https://github.com/tr7zw/EntityCulling/issues/330) Fix [#328](https://github.com/tr7zw/EntityCulling/issues/328) Fix [#326](https://github.com/tr7zw/EntityCulling/issues/326)
*   Fix older Neoforge versions. Fix [#329](https://github.com/tr7zw/EntityCulling/issues/329)
*   Never cull the local player, preventing crashing, for example, during freecam in 26.3

What's Changed 1.11.0
---------------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Fully unhooked the Cull Thread from the Entity gamelogic (see below)
*   Fix NeoForge not using the getRenderBoundingBox method for BlockEntities
*   Add getRenderBoundingBox method for fabric. Fix [#313](https://github.com/tr7zw/EntityCulling/issues/313)
*   Fix debug flag confusion
*   Formatting, optimize icon [#309](https://github.com/tr7zw/EntityCulling/issues/309)
*   Create en_ud.json by @Fhilips613 in [https://github.com/tr7zw/EntityCulling/pull/310](https://github.com/tr7zw/EntityCulling/pull/310)
*   Update id_id.json by @nunoguevara in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   Respect name display distances for culled entities by @artegoser in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)
*   All builds <= 1.12.2 got moved into a repo located at [https://github.com/tr7zw/Legacy_EntityCulling](https://github.com/tr7zw/Legacy_EntityCulling)

New Contributors
----------------

*   @nunoguevara made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   @artegoser made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)

Note
----

This release contains a bunch of reworks around extracting the required (block)entity data on the main thread to prevent crashes with some other mods that can't handle the async looking up of data. These "correctness" fixes come at the cost of performance in the main client tick, so it is a tradeoff. In my tests, during reasonable conditions, this should take under 1ms every 5 ticks (250ms), up from ~0.5ms in the last release. This should be fine but needs general testing to better understand the impact. If you are experiencing issues, get in contact via GitHub/Discord. In case you are feeling adventurous and have a mod configuration that isn't impacted by these async access crashes, there is a `safeMode` flag in the config file to move all the lookups away from the main thread, removing all the overhead.

**Full Changelog**: [https://github.com/tr7zw/EntityCulling/compare/1.11.0...1.11.1](https://github.com/tr7zw/EntityCulling/compare/1.11.0...1.11.1)

### 1.11.1-1.21.10 - NeoForge
Hotfix 1.11.1
-------------

*   Missing interpolation of tick culled entities in 26.3 causes invisibility and fast movements. Fix [#330](https://github.com/tr7zw/EntityCulling/issues/330) Fix [#328](https://github.com/tr7zw/EntityCulling/issues/328) Fix [#326](https://github.com/tr7zw/EntityCulling/issues/326)
*   Fix older Neoforge versions. Fix [#329](https://github.com/tr7zw/EntityCulling/issues/329)
*   Never cull the local player, preventing crashing, for example, during freecam in 26.3

What's Changed 1.11.0
---------------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Fully unhooked the Cull Thread from the Entity gamelogic (see below)
*   Fix NeoForge not using the getRenderBoundingBox method for BlockEntities
*   Add getRenderBoundingBox method for fabric. Fix [#313](https://github.com/tr7zw/EntityCulling/issues/313)
*   Fix debug flag confusion
*   Formatting, optimize icon [#309](https://github.com/tr7zw/EntityCulling/issues/309)
*   Create en_ud.json by @Fhilips613 in [https://github.com/tr7zw/EntityCulling/pull/310](https://github.com/tr7zw/EntityCulling/pull/310)
*   Update id_id.json by @nunoguevara in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   Respect name display distances for culled entities by @artegoser in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)
*   All builds <= 1.12.2 got moved into a repo located at [https://github.com/tr7zw/Legacy_EntityCulling](https://github.com/tr7zw/Legacy_EntityCulling)

New Contributors
----------------

*   @nunoguevara made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   @artegoser made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)

Note
----

This release contains a bunch of reworks around extracting the required (block)entity data on the main thread to prevent crashes with some other mods that can't handle the async looking up of data. These "correctness" fixes come at the cost of performance in the main client tick, so it is a tradeoff. In my tests, during reasonable conditions, this should take under 1ms every 5 ticks (250ms), up from ~0.5ms in the last release. This should be fine but needs general testing to better understand the impact. If you are experiencing issues, get in contact via GitHub/Discord. In case you are feeling adventurous and have a mod configuration that isn't impacted by these async access crashes, there is a `safeMode` flag in the config file to move all the lookups away from the main thread, removing all the overhead.

**Full Changelog**: [https://github.com/tr7zw/EntityCulling/compare/1.11.0...1.11.1](https://github.com/tr7zw/EntityCulling/compare/1.11.0...1.11.1)

### 1.11.1-1.21.1 - NeoForge
Hotfix 1.11.1
-------------

*   Missing interpolation of tick culled entities in 26.3 causes invisibility and fast movements. Fix [#330](https://github.com/tr7zw/EntityCulling/issues/330) Fix [#328](https://github.com/tr7zw/EntityCulling/issues/328) Fix [#326](https://github.com/tr7zw/EntityCulling/issues/326)
*   Fix older Neoforge versions. Fix [#329](https://github.com/tr7zw/EntityCulling/issues/329)
*   Never cull the local player, preventing crashing, for example, during freecam in 26.3

What's Changed 1.11.0
---------------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Fully unhooked the Cull Thread from the Entity gamelogic (see below)
*   Fix NeoForge not using the getRenderBoundingBox method for BlockEntities
*   Add getRenderBoundingBox method for fabric. Fix [#313](https://github.com/tr7zw/EntityCulling/issues/313)
*   Fix debug flag confusion
*   Formatting, optimize icon [#309](https://github.com/tr7zw/EntityCulling/issues/309)
*   Create en_ud.json by @Fhilips613 in [https://github.com/tr7zw/EntityCulling/pull/310](https://github.com/tr7zw/EntityCulling/pull/310)
*   Update id_id.json by @nunoguevara in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   Respect name display distances for culled entities by @artegoser in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)
*   All builds <= 1.12.2 got moved into a repo located at [https://github.com/tr7zw/Legacy_EntityCulling](https://github.com/tr7zw/Legacy_EntityCulling)

New Contributors
----------------

*   @nunoguevara made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   @artegoser made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)

Note
----

This release contains a bunch of reworks around extracting the required (block)entity data on the main thread to prevent crashes with some other mods that can't handle the async looking up of data. These "correctness" fixes come at the cost of performance in the main client tick, so it is a tradeoff. In my tests, during reasonable conditions, this should take under 1ms every 5 ticks (250ms), up from ~0.5ms in the last release. This should be fine but needs general testing to better understand the impact. If you are experiencing issues, get in contact via GitHub/Discord. In case you are feeling adventurous and have a mod configuration that isn't impacted by these async access crashes, there is a `safeMode` flag in the config file to move all the lookups away from the main thread, removing all the overhead.

**Full Changelog**: [https://github.com/tr7zw/EntityCulling/compare/1.11.0...1.11.1](https://github.com/tr7zw/EntityCulling/compare/1.11.0...1.11.1)

### 1.11.0-1.21.8 - NeoForge
What's Changed
--------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Fully unhooked the Cull Thread from the Entity gamelogic (see below)
*   Fix NeoForge not using the getRenderBoundingBox method for BlockEntities
*   Add getRenderBoundingBox method for fabric. Fix [#313](https://github.com/tr7zw/EntityCulling/issues/313)
*   Fix debug flag confusion
*   Formatting, optimize icon [#309](https://github.com/tr7zw/EntityCulling/issues/309)
*   Create en_ud.json by @Fhilips613 in [https://github.com/tr7zw/EntityCulling/pull/310](https://github.com/tr7zw/EntityCulling/pull/310)
*   Update id_id.json by @nunoguevara in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   Respect name display distances for culled entities by @artegoser in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)
*   All builds <= 1.12.2 got moved into a repo located at [https://github.com/tr7zw/Legacy_EntityCulling](https://github.com/tr7zw/Legacy_EntityCulling)

New Contributors
----------------

*   @nunoguevara made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   @artegoser made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)

Note
----

This release contains a bunch of reworks around extracting the required (block)entity data on the main thread to prevent crashes with some other mods that can't handle the async looking up of data. These "correctness" fixes come at the cost of performance in the main client tick, so it is a tradeoff. In my tests, during reasonable conditions, this should take under 1ms every 5 ticks (250ms), up from ~0.5ms in the last release. This should be fine but needs general testing to better understand the impact. If you are experiencing issues, get in contact via GitHub/Discord. In case you are feeling adventurous and have a mod configuration that isn't impacted by these async access crashes, there is a `safeMode` flag in the config file to move all the lookups away from the main thread, removing all the overhead.

**Full Changelog**: [https://github.com/tr7zw/EntityCulling/compare/1.10.5...1.11.0](https://github.com/tr7zw/EntityCulling/compare/1.10.5...1.11.0)

### 1.11.0-1.21.5 - NeoForge
What's Changed
--------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Fully unhooked the Cull Thread from the Entity gamelogic (see below)
*   Fix NeoForge not using the getRenderBoundingBox method for BlockEntities
*   Add getRenderBoundingBox method for fabric. Fix [#313](https://github.com/tr7zw/EntityCulling/issues/313)
*   Fix debug flag confusion
*   Formatting, optimize icon [#309](https://github.com/tr7zw/EntityCulling/issues/309)
*   Create en_ud.json by @Fhilips613 in [https://github.com/tr7zw/EntityCulling/pull/310](https://github.com/tr7zw/EntityCulling/pull/310)
*   Update id_id.json by @nunoguevara in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   Respect name display distances for culled entities by @artegoser in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)
*   All builds <= 1.12.2 got moved into a repo located at [https://github.com/tr7zw/Legacy_EntityCulling](https://github.com/tr7zw/Legacy_EntityCulling)

New Contributors
----------------

*   @nunoguevara made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   @artegoser made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)

Note
----

This release contains a bunch of reworks around extracting the required (block)entity data on the main thread to prevent crashes with some other mods that can't handle the async looking up of data. These "correctness" fixes come at the cost of performance in the main client tick, so it is a tradeoff. In my tests, during reasonable conditions, this should take under 1ms every 5 ticks (250ms), up from ~0.5ms in the last release. This should be fine but needs general testing to better understand the impact. If you are experiencing issues, get in contact via GitHub/Discord. In case you are feeling adventurous and have a mod configuration that isn't impacted by these async access crashes, there is a `safeMode` flag in the config file to move all the lookups away from the main thread, removing all the overhead.

**Full Changelog**: [https://github.com/tr7zw/EntityCulling/compare/1.10.5...1.11.0](https://github.com/tr7zw/EntityCulling/compare/1.10.5...1.11.0)

### 1.11.0-1.21.4 - NeoForge
What's Changed
--------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Fully unhooked the Cull Thread from the Entity gamelogic (see below)
*   Fix NeoForge not using the getRenderBoundingBox method for BlockEntities
*   Add getRenderBoundingBox method for fabric. Fix [#313](https://github.com/tr7zw/EntityCulling/issues/313)
*   Fix debug flag confusion
*   Formatting, optimize icon [#309](https://github.com/tr7zw/EntityCulling/issues/309)
*   Create en_ud.json by @Fhilips613 in [https://github.com/tr7zw/EntityCulling/pull/310](https://github.com/tr7zw/EntityCulling/pull/310)
*   Update id_id.json by @nunoguevara in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   Respect name display distances for culled entities by @artegoser in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)
*   All builds <= 1.12.2 got moved into a repo located at [https://github.com/tr7zw/Legacy_EntityCulling](https://github.com/tr7zw/Legacy_EntityCulling)

New Contributors
----------------

*   @nunoguevara made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   @artegoser made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)

Note
----

This release contains a bunch of reworks around extracting the required (block)entity data on the main thread to prevent crashes with some other mods that can't handle the async looking up of data. These "correctness" fixes come at the cost of performance in the main client tick, so it is a tradeoff. In my tests, during reasonable conditions, this should take under 1ms every 5 ticks (250ms), up from ~0.5ms in the last release. This should be fine but needs general testing to better understand the impact. If you are experiencing issues, get in contact via GitHub/Discord. In case you are feeling adventurous and have a mod configuration that isn't impacted by these async access crashes, there is a `safeMode` flag in the config file to move all the lookups away from the main thread, removing all the overhead.

**Full Changelog**: [https://github.com/tr7zw/EntityCulling/compare/1.10.5...1.11.0](https://github.com/tr7zw/EntityCulling/compare/1.10.5...1.11.0)

### 1.11.0-1.21.3 - NeoForge
What's Changed
--------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Fully unhooked the Cull Thread from the Entity gamelogic (see below)
*   Fix NeoForge not using the getRenderBoundingBox method for BlockEntities
*   Add getRenderBoundingBox method for fabric. Fix [#313](https://github.com/tr7zw/EntityCulling/issues/313)
*   Fix debug flag confusion
*   Formatting, optimize icon [#309](https://github.com/tr7zw/EntityCulling/issues/309)
*   Create en_ud.json by @Fhilips613 in [https://github.com/tr7zw/EntityCulling/pull/310](https://github.com/tr7zw/EntityCulling/pull/310)
*   Update id_id.json by @nunoguevara in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   Respect name display distances for culled entities by @artegoser in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)
*   All builds <= 1.12.2 got moved into a repo located at [https://github.com/tr7zw/Legacy_EntityCulling](https://github.com/tr7zw/Legacy_EntityCulling)

New Contributors
----------------

*   @nunoguevara made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   @artegoser made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)

Note
----

This release contains a bunch of reworks around extracting the required (block)entity data on the main thread to prevent crashes with some other mods that can't handle the async looking up of data. These "correctness" fixes come at the cost of performance in the main client tick, so it is a tradeoff. In my tests, during reasonable conditions, this should take under 1ms every 5 ticks (250ms), up from ~0.5ms in the last release. This should be fine but needs general testing to better understand the impact. If you are experiencing issues, get in contact via GitHub/Discord. In case you are feeling adventurous and have a mod configuration that isn't impacted by these async access crashes, there is a `safeMode` flag in the config file to move all the lookups away from the main thread, removing all the overhead.

**Full Changelog**: [https://github.com/tr7zw/EntityCulling/compare/1.10.5...1.11.0](https://github.com/tr7zw/EntityCulling/compare/1.10.5...1.11.0)

### 1.11.0-1.21.11 - NeoForge
What's Changed
--------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Fully unhooked the Cull Thread from the Entity gamelogic (see below)
*   Fix NeoForge not using the getRenderBoundingBox method for BlockEntities
*   Add getRenderBoundingBox method for fabric. Fix [#313](https://github.com/tr7zw/EntityCulling/issues/313)
*   Fix debug flag confusion
*   Formatting, optimize icon [#309](https://github.com/tr7zw/EntityCulling/issues/309)
*   Create en_ud.json by @Fhilips613 in [https://github.com/tr7zw/EntityCulling/pull/310](https://github.com/tr7zw/EntityCulling/pull/310)
*   Update id_id.json by @nunoguevara in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   Respect name display distances for culled entities by @artegoser in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)
*   All builds <= 1.12.2 got moved into a repo located at [https://github.com/tr7zw/Legacy_EntityCulling](https://github.com/tr7zw/Legacy_EntityCulling)

New Contributors
----------------

*   @nunoguevara made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   @artegoser made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)

Note
----

This release contains a bunch of reworks around extracting the required (block)entity data on the main thread to prevent crashes with some other mods that can't handle the async looking up of data. These "correctness" fixes come at the cost of performance in the main client tick, so it is a tradeoff. In my tests, during reasonable conditions, this should take under 1ms every 5 ticks (250ms), up from ~0.5ms in the last release. This should be fine but needs general testing to better understand the impact. If you are experiencing issues, get in contact via GitHub/Discord. In case you are feeling adventurous and have a mod configuration that isn't impacted by these async access crashes, there is a `safeMode` flag in the config file to move all the lookups away from the main thread, removing all the overhead.

**Full Changelog**: [https://github.com/tr7zw/EntityCulling/compare/1.10.5...1.11.0](https://github.com/tr7zw/EntityCulling/compare/1.10.5...1.11.0)

### 1.11.0-1.21.10 - NeoForge
What's Changed
--------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Fully unhooked the Cull Thread from the Entity gamelogic (see below)
*   Fix NeoForge not using the getRenderBoundingBox method for BlockEntities
*   Add getRenderBoundingBox method for fabric. Fix [#313](https://github.com/tr7zw/EntityCulling/issues/313)
*   Fix debug flag confusion
*   Formatting, optimize icon [#309](https://github.com/tr7zw/EntityCulling/issues/309)
*   Create en_ud.json by @Fhilips613 in [https://github.com/tr7zw/EntityCulling/pull/310](https://github.com/tr7zw/EntityCulling/pull/310)
*   Update id_id.json by @nunoguevara in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   Respect name display distances for culled entities by @artegoser in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)
*   All builds <= 1.12.2 got moved into a repo located at [https://github.com/tr7zw/Legacy_EntityCulling](https://github.com/tr7zw/Legacy_EntityCulling)

New Contributors
----------------

*   @nunoguevara made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   @artegoser made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)

Note
----

This release contains a bunch of reworks around extracting the required (block)entity data on the main thread to prevent crashes with some other mods that can't handle the async looking up of data. These "correctness" fixes come at the cost of performance in the main client tick, so it is a tradeoff. In my tests, during reasonable conditions, this should take under 1ms every 5 ticks (250ms), up from ~0.5ms in the last release. This should be fine but needs general testing to better understand the impact. If you are experiencing issues, get in contact via GitHub/Discord. In case you are feeling adventurous and have a mod configuration that isn't impacted by these async access crashes, there is a `safeMode` flag in the config file to move all the lookups away from the main thread, removing all the overhead.

**Full Changelog**: [https://github.com/tr7zw/EntityCulling/compare/1.10.5...1.11.0](https://github.com/tr7zw/EntityCulling/compare/1.10.5...1.11.0)

### 1.11.0-1.21.1 - NeoForge
What's Changed
--------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Fully unhooked the Cull Thread from the Entity gamelogic (see below)
*   Fix NeoForge not using the getRenderBoundingBox method for BlockEntities
*   Add getRenderBoundingBox method for fabric. Fix [#313](https://github.com/tr7zw/EntityCulling/issues/313)
*   Fix debug flag confusion
*   Formatting, optimize icon [#309](https://github.com/tr7zw/EntityCulling/issues/309)
*   Create en_ud.json by @Fhilips613 in [https://github.com/tr7zw/EntityCulling/pull/310](https://github.com/tr7zw/EntityCulling/pull/310)
*   Update id_id.json by @nunoguevara in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   Respect name display distances for culled entities by @artegoser in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)
*   All builds <= 1.12.2 got moved into a repo located at [https://github.com/tr7zw/Legacy_EntityCulling](https://github.com/tr7zw/Legacy_EntityCulling)

New Contributors
----------------

*   @nunoguevara made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/308](https://github.com/tr7zw/EntityCulling/pull/308)
*   @artegoser made their first contribution in [https://github.com/tr7zw/EntityCulling/pull/316](https://github.com/tr7zw/EntityCulling/pull/316)

Note
----

This release contains a bunch of reworks around extracting the required (block)entity data on the main thread to prevent crashes with some other mods that can't handle the async looking up of data. These "correctness" fixes come at the cost of performance in the main client tick, so it is a tradeoff. In my tests, during reasonable conditions, this should take under 1ms every 5 ticks (250ms), up from ~0.5ms in the last release. This should be fine but needs general testing to better understand the impact. If you are experiencing issues, get in contact via GitHub/Discord. In case you are feeling adventurous and have a mod configuration that isn't impacted by these async access crashes, there is a `safeMode` flag in the config file to move all the lookups away from the main thread, removing all the overhead.

**Full Changelog**: [https://github.com/tr7zw/EntityCulling/compare/1.10.5...1.11.0](https://github.com/tr7zw/EntityCulling/compare/1.10.5...1.11.0)

### 1.10.5-1.21.5 - NeoForge
What's changed
--------------

*   Fix older Neoforge versions crashing on startup due to keybinds. Fix [#307](https://github.com/tr7zw/EntityCulling/issues/307)

**Full Changelog**: [https://github.com/tr7zw/EntityCulling/compare/1.10.4...1.10.5](https://github.com/tr7zw/EntityCulling/compare/1.10.4...1.10.5)

### 1.10.5-1.21.8 - NeoForge
What's changed
--------------

*   Fix older Neoforge versions crashing on startup due to keybinds. Fix [#307](https://github.com/tr7zw/EntityCulling/issues/307)

**Full Changelog**: [https://github.com/tr7zw/EntityCulling/compare/1.10.4...1.10.5](https://github.com/tr7zw/EntityCulling/compare/1.10.4...1.10.5)

### 1.10.5-1.21.4 - NeoForge
What's changed
--------------

*   Fix older Neoforge versions crashing on startup due to keybinds. Fix [#307](https://github.com/tr7zw/EntityCulling/issues/307)

**Full Changelog**: [https://github.com/tr7zw/EntityCulling/compare/1.10.4...1.10.5](https://github.com/tr7zw/EntityCulling/compare/1.10.4...1.10.5)

### 1.10.5-1.21.3 - NeoForge
What's changed
--------------

*   Fix older Neoforge versions crashing on startup due to keybinds. Fix [#307](https://github.com/tr7zw/EntityCulling/issues/307)

**Full Changelog**: [https://github.com/tr7zw/EntityCulling/compare/1.10.4...1.10.5](https://github.com/tr7zw/EntityCulling/compare/1.10.4...1.10.5)

### 1.10.5-1.21.10 - NeoForge
What's changed
--------------

*   Fix older Neoforge versions crashing on startup due to keybinds. Fix [#307](https://github.com/tr7zw/EntityCulling/issues/307)

**Full Changelog**: [https://github.com/tr7zw/EntityCulling/compare/1.10.4...1.10.5](https://github.com/tr7zw/EntityCulling/compare/1.10.4...1.10.5)

### 1.10.5-1.21.11 - NeoForge
What's changed
--------------

*   Fix older Neoforge versions crashing on startup due to keybinds. Fix [#307](https://github.com/tr7zw/EntityCulling/issues/307)

**Full Changelog**: [https://github.com/tr7zw/EntityCulling/compare/1.10.4...1.10.5](https://github.com/tr7zw/EntityCulling/compare/1.10.4...1.10.5)

## [Let's Do] Farm & Charm
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/lets-do-farm-charm)

### Farm&Charm - 1.1.26 - NEOFORGE - 1.21.1
[1.1.26]

**Added**

*   Seeder: a new cart that automatically sows Farmland with seeds from its storage while being driven
*   Flooded Farmland: right-click Fertilized Farmland with a Pitchfork to lower it to half height, then fill it with a Water Bucket (or place it next to water) to flood it. Other mods can check the new `lowered` and `waterlogged` block states for paddy-style crops. Lowered Farmland only accepts seeds from the `farm_and_charm:needs_lowered_farmland` item tag
*   Tilling Fertilized Soil into Farmland and lowering Fertilized Farmland with a Pitchfork now spawns dirt particles
*   Timber Well: pump water up by right-clicking it with an empty hand (with an animated pump lever), as long as there is a water source up to 6 blocks below (dripping water shows it). It also fills up step by step while it rains. Buckets and drinking Livestock use up its water, just like a Water Trough. It now has a recipe, drops itself when broken and is mined faster with an Axe

**Fixed**

*   Dungarees no longer stack up to 64, they now stack to 1 like any other armor piece
*   Water Trough is now mined faster with an Axe
*   Scarecrows now face the player when placed instead of being turned around
*   Removed Wheat, Barley, Corn and Oats Silo drying recipes into Bone Meal, since they could silently win over Brewerys recipes for drying the same crops into other results :D

**Changed**

*   Crafting Bowl now uses a single entity texture; the dough is a separate model part that only renders once stirring is finished. Resource packs should move their `crafting_bowl_full.png` content into `crafting_bowl.png`

* * *

[1.1.25]

**Fixed**

*   Fully built Silos (3x3x9) no longer crash the game when sneak-right-clicking to take a finished item out, and the first finished-item slot is no longer skipped
*   Tomato Crop now drops its Tomato, Tomato Seeds and Rope instead of nothing when broken
*   Chairs are no longer left behind or duplicated by Sable/Create: Aeronautics contraptions
*   Fixed `c:grains/wheats` incorrectly containing Oat, Barley and Corn in addition to Wheat
*   `c:grain` and `c:strawberry` now correctly alias `c:grains` and `c:strawberries` instead of duplicating an incomplete item list
*   Plow Cart now plows its second row relative to its actual driving direction instead of always offsetting towards world-east
*   Plow Cart now breaks flowers and other bushes on top of grass/dirt when plowing instead of leaving them floating on the new Farmland

**Changed**

*   `c:crops` now also includes Barley, Oat and Strawberry alongside the existing Cabbage, Corn, Onion and Tomato
*   Food items are now properly tagged under the common `c:foods` tag and Fertilizer/Compost are now tagged as `c:fertilizers`

* * *

[1.1.24]

**Fixed**

*   Nutrition and saturation values from the config file now actually apply on NeoForge — food items were registered before the config finished loading, so edits were silently ignored
*   Chickens no longer keep a lead attached to their previous holder after re-emerging from a Chicken Coop, even though the lead had already dropped and popped off when they entered
*   Tomato Crop no longer destroys itself right after growing a new segment, since the block below a growing head is now correctly recognized as valid support
*   Mincer no longer strips data components (such as attribute modifiers forwarded by other mods' recipes) from items dropped out of its output slot. (Thanks to odderb)

**Added**

*   Wheat, Barley, Corn, Oat, Strawberry, Lettuce, Tomato and Onion can now be dried into Bone Meal in the Silo, matching their wild counterparts

* * *

[1.1.23]

**Fixed**

*   Container GUIs no longer render the background twice, preventing overly dark backgrounds and improving compatibility with background blur mods such as Blur+. (Thanks to amiralimollaei)
*   Stove recipes now require an exact ingredient match, preventing unintended crafting results when extra ingredients are present. (Thanks to rumi-sh)
*   Resolved a duplication glitch affecting storage blocks when used with Sable from Create: Aeronautics. (Thanks to Daudeuf)
*   Removed an unnecessary `ItemStack` mixin, resolving compatibility issues with Create: Aeronautics and Sable. (Thanks to dynamiteOpanty)
*   Cooking Pot and Roaster no longer create infinite containers — empty glass bottles and bowls are now always consumed when required by recipes
*   Plows now use the block they are actually standing on, so they harvest crops while sitting fully on farmland and no longer till the soil underneath farmland
*   Chicken Coop no longer crashes the server when its block entity ticks after the block has been removed or replaced
*   Chickens no longer get permanently stuck on a coop that was broken, moved, filled up or became unreachable — the outdated target is now discarded so they can look for another coop
*   Fixed a server crash caused by cart tracking becoming corrupted when a pulled cart detached mid-tick, for example when it got stuck against a block

**Added**

*   Added Italian (`it_it`) localization. (Thanks to serenautilus)

**Changed**

*   Added plural common tags (`c:flours` and `c:doughs`) while keeping the existing singular tags as legacy aliases for improved cross-mod compatibility. (Thanks to RooftopThinker)

**Improved**

*   Improved Cattle Grid behavior by replacing the velocity-based restriction with collision walls, preventing mobs from getting permanently stuck while preserving its intended functionality. (Thanks to divaltor)

* * *

[1.1.22]

**Fixed**

*   Visual glitches with crank and bowl animations (khoidauminh)
*   Compatibility with Sable/Create Aeronautics (lukeelrod)

**Changed**

*   Water Sprinkler now hydrates all farmland blocks extending FarmBlock

**Improved**

*   Mincer interaction and usability (khoidauminh)

* * *

[1.1.21]

**Fixed**

*   Oatmeal with Strawberries using the wrong tag
*   Wild Corn not dropping anything when breaking the top block (Danieltl21)

**Changed**

*   Introduction Mincing advancement is now triggered directly when inserting Beef into the Mincer
*   Stove can now be ignited manually with ignition items when fuel is present
*   Stove can be extinguished with tools like shovels or water without immediately relighting
*   Bowl recipe checks now only run once when the required stir count is reached

**Improved**

*   Interacting with a finished bowl now always pops out its items
*   Adding ingredients to a bowl resets the STIRRED property
*   Remainder items now stay inside the bowl and are ejected with the result
*   Bowls can now be stirred even while holding an item

* * *

[1.1.20]

**Fixed**

*   Stove now properly resets its lit state when running out of fuel
*   Cooking progress no longer resets when modifying ingredient, fuel, or output slots
*   Cooking progress now only resets when the recipe itself changes
*   Typo in Water Trough
*   Wild plants no longer transform into vanilla tall grass when bonemealed
*   Jade flickering when looking at Silos
*   Excessive blockstate updates in Silo multiblock structure

**Changed**

*   Update ru_ru
*   Silo connectivity now updates only on structural changes
*   Improved performance of the Silo multiblock system
*   Wild Plants now have a 60% chance to receive the plant item back when using bone meal, due to balancing reasons

* * *

[1.1.19]

**Fixed**

*   TeaJugItem not returning empty container on use (thanks to KawaiShio)
*   CraftingBowl not properly resetting after taking out ingredients or the result item, preventing the next batch from being stirred without breaking the bowl (thanks to khoidauminh)
*   MincerBlock not correctly resetting its state after processing, which could interrupt further usage

**Added**

*   Added zh_tw translation (thanks to cherrypuff1120)

**Changed**

*   TeaCupItems are now always edible

* * *

[1.1.18]

**Fixed**

*   Fixed a crash that could occur when a cart got stuck while being pulled.
*   Dungarees being HUGE when placed inside AlpineWhispers / Meadows wardrobe
*   Scarecrow growth exploit caused by rapid breaking and replacing
*   Mincer softlock when inserting unsupported items such as shields or interacting rapidly
*   Containers such as bottles, bowls and buckets not being returned after cooking
*   Title lables not being consistent when opening GUIs

**Added**

*   Placeable Wheat Piles
*   Placeable Feather Piles

**Changed**

*   Pack.png

* * *

[1.1.17]

**Fixed**

*   Fixed a crash that could occur when a cart got stuck while being pulled.

**Added**

*   Planting crops on Farmland now kicks up subtle soil particles for visual feedback.

* * *

[1.1.16]

**Fixed**

*   Carts being indestructible
*   Also they now properly take damage and break as intended

**Changed**

*   Reworked Strawberry Texture
*   Adjusted pitchfork attributes: slightly increased damage, significantly reduced attack speed

* * *

[1.1.15]

**Added**

*   Animals eating from Feeding Troughs now generate particles while doing so
*   Added a Water Trough for animals to drink from, also usable as a water source
*   Added Shift tooltips to various blocks and items for in-game information
*   Updated Scarecrow interaction: adding and removing Dungarees now works correctly with the new interaction methods
*   Added Tooltips for Teas and Pitchfork

**Fixed**

*   Removed Apache Commons usage from EffectFood blocks
*   Item duplication with the Mincer when inserting non-processable items in Creative
*   Stoves appeared lit without consuming fuel and had inconsistent lit state after placement
*   Feeding animals using Create Deployers causing the game to crash
*   MobEffects were not applied correctly due to invalid effect references
*   Ropes are now correctly tagged under `c:ropes`
*   Chicken Coop items storing invalid entity data could crash the game when saving. Affected items are now sanitized and stored data is preserved
*   Sturdy Ladder placement preview could briefly appear and then disappear when extending from the base
*   Fertilized Farmland not bonemealing (thanks to MisledWater79)

**Changed**

*   Feeding Troughs now use the `farm_and_charm:feeding_trough_food` item tag instead of relying on `minecraft:villager_plantable_seeds`
*   Slightly updated textures for Crafting Bowl and Mincer blocks
*   Updated fr_fr translation (thanks to acorsicanfrog)

* * *

[1.1.14]

**Fixed**

*   Excessive saturation sync packets from animals now only send when values change and only to nearby players wearing Dungarees

* * *

[1.1.13]

**Added**

*   **Packed Dirt**: A decorative compacted dirt block that gradually turns into _Trampled Packed Dirt_ when walked over.
*   **Stablefloor**: A decorative stable ground block that slowly transforms into _Trampled Stablefloor_ through frequent foot traffic.

**Fixed**

*   Crash when Create Deployer interacted with animals
*   Wild Ribwort and Nettle not being bone-mealable
*   Wild Corn duplication via shears caused by an incorrect loot table

**Changed**

*   Adjusted Wild Corn loot to match intended drop balance

* * *

[1.1.12]

**Added**

*   A Sturdy Ladder! Freestanding. Can be placed without a support behind it.
    *   Requires either a block underneath or a block adjacent as support.
    *   Right-clicking the bottom with another ladder in hand automatically extends it upwards.
*   Cattlegrid: If you have ever been hiking in the Alps, you will know that these are designed to prevent animals from crossing them. These work in the same way. Farm animals (cows, pigs, etc.) cannot cross the block, dogs and players are slowed down... and cats can walk across them as normal!
*   Chicken Fence & Iron Divider: Fence Blocks for your Farm.

**Fixed**

*   CraftingBowl stirring sometimes didnt trigger. Empty-hand use now reliably starts crafting!
*   Crash on player save from chicken coop items by migrating data to CustomData
*   Tamed Dogs not eating DogFood.

**Changed**

*   Smooth, BE-driven interpolation for CraftingBowl & Mincer renderers
*   Lowered Pitchfork Attack Speed

* * *

[1.1.11]

**Fixed**

*   Scarecrows now boost the growth of climbing crops in addition to regular farmland crops.
*   Feeding trough can now be refilled after animals eat from it.

* * *

[1.1.10]

**Fixed**

*   `FoodBlock` now properly applies hunger, saturation and effects from its registered item’s `FoodProperties` when eating bites
*   `CookingPot` now writes all ingredient effects onto output items (includes base potion effects and custom potion effects)

**Changed**

*   Removed unused ArmorMaterial layer handling
*   Mixin configs moved from common to loader-specific folders

* * *

[1.1.9]

**Fixed**

*   Meals and effect foods now restore hunger and saturation correctly
*   Fixed crash on startup caused by config values being accessed before load
*   Fixed server crash in Roaster caused by illegal access to FoodProperties.PossibleEffect constructor
*   Updated EffectFoodHelper to use 1.21.1 FoodProperties.Builder API
*   Stove now properly matches only ingredient slots when checking recipes.
*   Ensures Candlelight effect-food blocks use the same BE logic as Farm & Charm.
*   Bonemeal can no longer be applied to tomato crops once they have reached their maximum growth stage.

* * *

[1.1.8]

**Fixed**

*   Climbing crops (Tomatoes, Hops) placement now works on all blocks that extend `FarmBlock`
*   Removed invalid DataMap entry `farm_and_charm:lettuce_crop` that caused NeoForge startup crashes.

* * *

[1.1.7.1-Neoforge]

**Fixed**

*   _Neoforge Only:_ Compostable items are now properly registered through NeoForge data maps instead of runtime code

* * *

[1.1.7]

**Fixed**

*   Resolved server crash when syncing saturation (`SyncSaturationPacket`) by registering S2C payload type correctly and limiting receiver registration to the client environment
*   REI integration now properly handles tag-based ingredients across all custom categories (Cooking Pot, Crafting Bowl, Mincing, Roaster, Stove, Silo)
*   REI Result items are now consistently resolved with registryAccess to avoid unstable/null context issues

* * *

[1.1.6]

**Fixed**

*   Crash when sending `SyncSaturationPacket` due to missing STREAM_CODEC registration on server
*   Fixed crash when saving Coop items by moving data to `BLOCK_ENTITY_DATA` and stripping UUIDs.
*   Fixed duplicate UUID warnings when releasing chickens.

* * *

[1.1.5]

**Fixed**

*   Network crash on Fabric due to incorrect registration of S2C receivers in PacketHandler

* * *

[1.1.4]

**Fixed**

*   MincerCategory for REI wasn't registered properly
*   ArmorType was being registered twice
*   Sprinkler now hydrates farmland and extinguishes nearby fire properly
*   Leggings renderer now works correctly on Fabric
*   Improved IngredientsCheck for CraftingBowl

**Changed**

*   Migrated FarmAndCharmIdentifier to ResourceLocation.fromNamespaceAndPath
*   Added a "Can be Placed" tooltip for the PetBowl

* * *

[1.1.3]

**Fixed**

*   Another Try for: Crash caused by unregistered custom MobEffects (e.g. `sustenance`) not being saved correctly
*   Grandma's Strawberry Pie can now be eaten safely. Enjoy!
*   Dungarees not being rendered properly on NeoForge

**Changed**

*   Most cooking tools can now be broken instantly and dont require a tool anymore
*   All Effects have now unique Particle Effect Colors

* * *

[1.1.2]

**Fixed**

*   Crash caused by unregistered custom MobEffects (e.g. `sustenance`) not being saved correctly
*   Stove didn’t accept modded fuels
*   Crash when saving StoveBlockEntity if ownerUuid was null
*   Crafting Bowl never produced output items after stirring was completed
*   Server crash when ticking crops (`NoSuchMethodError: getGrowthSpeed`), fixed by explicitly calling `CropBlock.getGrowthSpeed(...)` in crop blocks

**Changed**

*   Tomato crops can no longer be planted on top of other tomato blocks
*   Chicken AI goals for locating and entering coops were optimized:
    *   Reduced frequency of pathfinding checks with internal cooldown
    *   Improved caching of valid coop positions
    *   Prevented redundant navigation calls for smoother movement

A big thank you to everyone who has been actively reporting bugs and sharing feedback ❤️

Some issues can easily slip through during development, and your reports help me catch them faster. Your support makes the mod better with every update. I really appreciate it!

* * *

[1.1.1]

**Fixed**

*   Fixed a crash when sending `SyncSaturationPacket` by sending payloads directly.

* * *

[1.1.0]

**Welcome to 1.21.1**

* * *

[1.0.12]

**Fixed**

*   Farm Animals not being breedable anymore

* * *

[1.0.11]

**Fixed**

*   Fixed a critical issue where the game would crash on servers due to client-only code being called from the `AnimalEntityMixin`. Everything worked fine in singleplayer, but not on dedicated servers.  
    This patch restores proper server compatibility for all new saturation mechanics. :)

_P.S.: Sorry for the hiccup – this ones on me_

* * *

[1.0.10]

This small update focuses on adding new mechanics that enhance loot from farm animals, selected F&C crops, and eggs through interaction, care, and environmental factors.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Added**

*   A Pet Bowl! - Feed your cat or dog with a `Pet Bowl`. Occasionally, pets will walk up to an empty bowl and beg for food. Feeding grants temporary bonuses. You can assign a Name Tag to dedicate a bowl to a specific pet.
*   Chicken Nest: When placed near chickens, eggs are laid directly into the nest instead of falling to the ground. The nest can hold up to 2 eggs. Occasionally (5% chance), a feather may also be added.* Chicken Coop: Works like similar to a bee nest. Chickens nearby will enter the coop when ready to lay an egg. Holds up to 6 chickens at once.
*   Farm animals can now be fed their preferred food. The more often they are fed, the more meat they will drop. Feeding progress is visible only when wearing...
*   ...`Dungarees`! – While equipped, shows feed levels above animals. Also prevents trampling farmland while wearing them. They can be bought from Farmer Villagers.
*   Certain F&C crops now have a small chance to grow into larger variants when near a water sprinkler or during rain. Larger crops have an increased chance of yielding multiple drops.
*   Farmer Villagers have now a Chance to offer several F&C related Items.
*   Chicken Coop: Functions similarly to a bee nest. Chickens enter on their own to lay eggs and rest. Up to 9 Eggs can be stored at once. Players can also manually insert a leashed chicken. Eggs are automatically collected, and chickens exit after a short time.
*   When placing SugarCare on Fertilized Soil it will grow 20% faster
*   Dog & Cat Food can now be crafted into Bags. These can be placed and stacked up to 3 times.
*   Support for DoggyTalents
*   Japanese translation _(Thanks to PExPE3)_

**Fixed**

*   Recipe for Yeast had wrong tags as Ingredients
*   fr_fr translation
*   EffectFood returns itself after being consumed, which is likely unintended.

* * *

[1.0.9]

**Fixed**

*   Actually fixed recipes this time
*   Improve quick move on cooking containers

* * *

[1.0.8]

**Fixed**

*   Recipes are properly recognized

**Changed**

*   `Sausage with oat patty` now uses the roaster instead of the cooking pot

* * *

[1.0.7]

**Added**

*   Tooltip showing remaining burn time when hovering over the stove burn icon
*   Added pt_br translation (thanks to Coffee-0xFF)
*   Updated ru_ru (thanks to Tefnya)

**Changed**

*   Stove now uses the same valid fuel items and burn times as the furnace
*   Reduced spawn rates for all wild crops
*   Implemented templates for most crops, bags, tea, and more — this should slightly improve loading times
*   Completely overhauled all tags for much better compatibility with other mods (thanks to Ninjadaj!)
*   `Stove` now uses the same Logic as Minecrafts `Furnace`, `Smoker` etc. for the FuelItems

**Fixed**

*   Chair blocks no longer block the use of items in your offhand when right-clicking a chair
*   `Sustenance` effect now works correctly
*   `Cooking Pot` now crafts the correct output
*   `Scarecrow` now properly grants a growth boost to nearby crops

* * *

[1.0.6]

**Added**

*   Added the ability to retrieve items from the MincerBlock by Shift-Right Clicking
*   Added Composter: A new Item made out of Fertilizer. Has 10 uses. Applies Bone Meal Effect to multiple Crops
*   Added Silo Sounds: Opening & Closing Door, inserting Items, crafting finished
*   FeedingTrough can now be filled by using Hoppers
*   You can now use various Farm&Charm Crops to feed and breed farm and other animals
*   Added Particles when eating a StackableEatableBlock - e.g. Pancakes
*   Zombies have a really low Chance to spawn wielding a Pitchfork as a Weapon

**Changed**

*   Strawberry crop now only drops an Item when age == MAX_AGE
*   Tomato crop now only drops an Item when age == MAX_AGE
*   Fertilizer works now again similar to Bone Meal and can be stacked again
*   Renamed the "get_fertilizer" advancement
*   Renamed the "get_minced_beef" advancement
*   Renamed the "introduction_drying" advancement
*   Renamed the "introduction_mincing" advancement
*   Renamed the "use_hoe_on_fertilized_soil" advancement
*   Renamed the "place_stove" advancement
*   Pitchfork now uses the "handheld" model parent instead of "generated" – wield it like a true weapon! (even if it technically isn't one)
*   Slightly raised the position of the particles when stirring the CraftingBowlBlock
*   Improved Roaster, Supply Cart, Plates, Mincer, Window Sill & Plow Texture
*   Updated following translations: ru_ru (Tefnya), zh_cn (sillymoon), pt_br (GMalvestiti)

**Fixed**

*   Added an additional check for a valid recipe before increasing the Stirring value in CraftingBowlBlockEntity
*   StoveBlockEntity now properly processes EffectBlockItem and applies stored effects to the crafted result
*   Properly registered StorageBlockEntity & StorageBlockRenderer
*   ForgeConfig not generating / loading properly

### Farm&Charm - 1.1.25 - NEOFORGE - 1.21.1
[1.1.25]

**Fixed**

*   Fully built Silos (3x3x9) no longer crash the game when sneak-right-clicking to take a finished item out, and the first finished-item slot is no longer skipped
*   Tomato Crop now drops its Tomato, Tomato Seeds and Rope instead of nothing when broken
*   Chairs are no longer left behind or duplicated by Sable/Create: Aeronautics contraptions
*   Fixed `c:grains/wheats` incorrectly containing Oat, Barley and Corn in addition to Wheat
*   `c:grain` and `c:strawberry` now correctly alias `c:grains` and `c:strawberries` instead of duplicating an incomplete item list
*   Plow Cart now plows its second row relative to its actual driving direction instead of always offsetting towards world-east
*   Plow Cart now breaks flowers and other bushes on top of grass/dirt when plowing instead of leaving them floating on the new Farmland

**Changed**

*   `c:crops` now also includes Barley, Oat and Strawberry alongside the existing Cabbage, Corn, Onion and Tomato
*   Food items are now properly tagged under the common `c:foods` tag and Fertilizer/Compost are now tagged as `c:fertilizers`

* * *

[1.1.24]

**Fixed**

*   Nutrition and saturation values from the config file now actually apply on NeoForge — food items were registered before the config finished loading, so edits were silently ignored
*   Chickens no longer keep a lead attached to their previous holder after re-emerging from a Chicken Coop, even though the lead had already dropped and popped off when they entered
*   Tomato Crop no longer destroys itself right after growing a new segment, since the block below a growing head is now correctly recognized as valid support
*   Mincer no longer strips data components (such as attribute modifiers forwarded by other mods' recipes) from items dropped out of its output slot. (Thanks to odderb)

**Added**

*   Wheat, Barley, Corn, Oat, Strawberry, Lettuce, Tomato and Onion can now be dried into Bone Meal in the Silo, matching their wild counterparts

* * *

[1.1.23]

**Fixed**

*   Container GUIs no longer render the background twice, preventing overly dark backgrounds and improving compatibility with background blur mods such as Blur+. (Thanks to amiralimollaei)
*   Stove recipes now require an exact ingredient match, preventing unintended crafting results when extra ingredients are present. (Thanks to rumi-sh)
*   Resolved a duplication glitch affecting storage blocks when used with Sable from Create: Aeronautics. (Thanks to Daudeuf)
*   Removed an unnecessary `ItemStack` mixin, resolving compatibility issues with Create: Aeronautics and Sable. (Thanks to dynamiteOpanty)
*   Cooking Pot and Roaster no longer create infinite containers — empty glass bottles and bowls are now always consumed when required by recipes
*   Plows now use the block they are actually standing on, so they harvest crops while sitting fully on farmland and no longer till the soil underneath farmland
*   Chicken Coop no longer crashes the server when its block entity ticks after the block has been removed or replaced
*   Chickens no longer get permanently stuck on a coop that was broken, moved, filled up or became unreachable — the outdated target is now discarded so they can look for another coop
*   Fixed a server crash caused by cart tracking becoming corrupted when a pulled cart detached mid-tick, for example when it got stuck against a block

**Added**

*   Added Italian (`it_it`) localization. (Thanks to serenautilus)

**Changed**

*   Added plural common tags (`c:flours` and `c:doughs`) while keeping the existing singular tags as legacy aliases for improved cross-mod compatibility. (Thanks to RooftopThinker)

**Improved**

*   Improved Cattle Grid behavior by replacing the velocity-based restriction with collision walls, preventing mobs from getting permanently stuck while preserving its intended functionality. (Thanks to divaltor)

* * *

[1.1.22]

**Fixed**

*   Visual glitches with crank and bowl animations (khoidauminh)
*   Compatibility with Sable/Create Aeronautics (lukeelrod)

**Changed**

*   Water Sprinkler now hydrates all farmland blocks extending FarmBlock

**Improved**

*   Mincer interaction and usability (khoidauminh)

* * *

[1.1.21]

**Fixed**

*   Oatmeal with Strawberries using the wrong tag
*   Wild Corn not dropping anything when breaking the top block (Danieltl21)

**Changed**

*   Introduction Mincing advancement is now triggered directly when inserting Beef into the Mincer
*   Stove can now be ignited manually with ignition items when fuel is present
*   Stove can be extinguished with tools like shovels or water without immediately relighting
*   Bowl recipe checks now only run once when the required stir count is reached

**Improved**

*   Interacting with a finished bowl now always pops out its items
*   Adding ingredients to a bowl resets the STIRRED property
*   Remainder items now stay inside the bowl and are ejected with the result
*   Bowls can now be stirred even while holding an item

* * *

[1.1.20]

**Fixed**

*   Stove now properly resets its lit state when running out of fuel
*   Cooking progress no longer resets when modifying ingredient, fuel, or output slots
*   Cooking progress now only resets when the recipe itself changes
*   Typo in Water Trough
*   Wild plants no longer transform into vanilla tall grass when bonemealed
*   Jade flickering when looking at Silos
*   Excessive blockstate updates in Silo multiblock structure

**Changed**

*   Update ru_ru
*   Silo connectivity now updates only on structural changes
*   Improved performance of the Silo multiblock system
*   Wild Plants now have a 60% chance to receive the plant item back when using bone meal, due to balancing reasons

* * *

[1.1.19]

**Fixed**

*   TeaJugItem not returning empty container on use (thanks to KawaiShio)
*   CraftingBowl not properly resetting after taking out ingredients or the result item, preventing the next batch from being stirred without breaking the bowl (thanks to khoidauminh)
*   MincerBlock not correctly resetting its state after processing, which could interrupt further usage

**Added**

*   Added zh_tw translation (thanks to cherrypuff1120)

**Changed**

*   TeaCupItems are now always edible

* * *

[1.1.18]

**Fixed**

*   Fixed a crash that could occur when a cart got stuck while being pulled.
*   Dungarees being HUGE when placed inside AlpineWhispers / Meadows wardrobe
*   Scarecrow growth exploit caused by rapid breaking and replacing
*   Mincer softlock when inserting unsupported items such as shields or interacting rapidly
*   Containers such as bottles, bowls and buckets not being returned after cooking
*   Title lables not being consistent when opening GUIs

**Added**

*   Placeable Wheat Piles
*   Placeable Feather Piles

**Changed**

*   Pack.png

* * *

[1.1.17]

**Fixed**

*   Fixed a crash that could occur when a cart got stuck while being pulled.

**Added**

*   Planting crops on Farmland now kicks up subtle soil particles for visual feedback.

* * *

[1.1.16]

**Fixed**

*   Carts being indestructible
*   Also they now properly take damage and break as intended

**Changed**

*   Reworked Strawberry Texture
*   Adjusted pitchfork attributes: slightly increased damage, significantly reduced attack speed

* * *

[1.1.15]

**Added**

*   Animals eating from Feeding Troughs now generate particles while doing so
*   Added a Water Trough for animals to drink from, also usable as a water source
*   Added Shift tooltips to various blocks and items for in-game information
*   Updated Scarecrow interaction: adding and removing Dungarees now works correctly with the new interaction methods
*   Added Tooltips for Teas and Pitchfork

**Fixed**

*   Removed Apache Commons usage from EffectFood blocks
*   Item duplication with the Mincer when inserting non-processable items in Creative
*   Stoves appeared lit without consuming fuel and had inconsistent lit state after placement
*   Feeding animals using Create Deployers causing the game to crash
*   MobEffects were not applied correctly due to invalid effect references
*   Ropes are now correctly tagged under `c:ropes`
*   Chicken Coop items storing invalid entity data could crash the game when saving. Affected items are now sanitized and stored data is preserved
*   Sturdy Ladder placement preview could briefly appear and then disappear when extending from the base
*   Fertilized Farmland not bonemealing (thanks to MisledWater79)

**Changed**

*   Feeding Troughs now use the `farm_and_charm:feeding_trough_food` item tag instead of relying on `minecraft:villager_plantable_seeds`
*   Slightly updated textures for Crafting Bowl and Mincer blocks
*   Updated fr_fr translation (thanks to acorsicanfrog)

* * *

[1.1.14]

**Fixed**

*   Excessive saturation sync packets from animals now only send when values change and only to nearby players wearing Dungarees

* * *

[1.1.13]

**Added**

*   **Packed Dirt**: A decorative compacted dirt block that gradually turns into _Trampled Packed Dirt_ when walked over.
*   **Stablefloor**: A decorative stable ground block that slowly transforms into _Trampled Stablefloor_ through frequent foot traffic.

**Fixed**

*   Crash when Create Deployer interacted with animals
*   Wild Ribwort and Nettle not being bone-mealable
*   Wild Corn duplication via shears caused by an incorrect loot table

**Changed**

*   Adjusted Wild Corn loot to match intended drop balance

* * *

[1.1.12]

**Added**

*   A Sturdy Ladder! Freestanding. Can be placed without a support behind it.
    *   Requires either a block underneath or a block adjacent as support.
    *   Right-clicking the bottom with another ladder in hand automatically extends it upwards.
*   Cattlegrid: If you have ever been hiking in the Alps, you will know that these are designed to prevent animals from crossing them. These work in the same way. Farm animals (cows, pigs, etc.) cannot cross the block, dogs and players are slowed down... and cats can walk across them as normal!
*   Chicken Fence & Iron Divider: Fence Blocks for your Farm.

**Fixed**

*   CraftingBowl stirring sometimes didnt trigger. Empty-hand use now reliably starts crafting!
*   Crash on player save from chicken coop items by migrating data to CustomData
*   Tamed Dogs not eating DogFood.

**Changed**

*   Smooth, BE-driven interpolation for CraftingBowl & Mincer renderers
*   Lowered Pitchfork Attack Speed

* * *

[1.1.11]

**Fixed**

*   Scarecrows now boost the growth of climbing crops in addition to regular farmland crops.
*   Feeding trough can now be refilled after animals eat from it.

* * *

[1.1.10]

**Fixed**

*   `FoodBlock` now properly applies hunger, saturation and effects from its registered item’s `FoodProperties` when eating bites
*   `CookingPot` now writes all ingredient effects onto output items (includes base potion effects and custom potion effects)

**Changed**

*   Removed unused ArmorMaterial layer handling
*   Mixin configs moved from common to loader-specific folders

* * *

[1.1.9]

**Fixed**

*   Meals and effect foods now restore hunger and saturation correctly
*   Fixed crash on startup caused by config values being accessed before load
*   Fixed server crash in Roaster caused by illegal access to FoodProperties.PossibleEffect constructor
*   Updated EffectFoodHelper to use 1.21.1 FoodProperties.Builder API
*   Stove now properly matches only ingredient slots when checking recipes.
*   Ensures Candlelight effect-food blocks use the same BE logic as Farm & Charm.
*   Bonemeal can no longer be applied to tomato crops once they have reached their maximum growth stage.

* * *

[1.1.8]

**Fixed**

*   Climbing crops (Tomatoes, Hops) placement now works on all blocks that extend `FarmBlock`
*   Removed invalid DataMap entry `farm_and_charm:lettuce_crop` that caused NeoForge startup crashes.

* * *

[1.1.7.1-Neoforge]

**Fixed**

*   _Neoforge Only:_ Compostable items are now properly registered through NeoForge data maps instead of runtime code

* * *

[1.1.7]

**Fixed**

*   Resolved server crash when syncing saturation (`SyncSaturationPacket`) by registering S2C payload type correctly and limiting receiver registration to the client environment
*   REI integration now properly handles tag-based ingredients across all custom categories (Cooking Pot, Crafting Bowl, Mincing, Roaster, Stove, Silo)
*   REI Result items are now consistently resolved with registryAccess to avoid unstable/null context issues

* * *

[1.1.6]

**Fixed**

*   Crash when sending `SyncSaturationPacket` due to missing STREAM_CODEC registration on server
*   Fixed crash when saving Coop items by moving data to `BLOCK_ENTITY_DATA` and stripping UUIDs.
*   Fixed duplicate UUID warnings when releasing chickens.

* * *

[1.1.5]

**Fixed**

*   Network crash on Fabric due to incorrect registration of S2C receivers in PacketHandler

* * *

[1.1.4]

**Fixed**

*   MincerCategory for REI wasn't registered properly
*   ArmorType was being registered twice
*   Sprinkler now hydrates farmland and extinguishes nearby fire properly
*   Leggings renderer now works correctly on Fabric
*   Improved IngredientsCheck for CraftingBowl

**Changed**

*   Migrated FarmAndCharmIdentifier to ResourceLocation.fromNamespaceAndPath
*   Added a "Can be Placed" tooltip for the PetBowl

* * *

[1.1.3]

**Fixed**

*   Another Try for: Crash caused by unregistered custom MobEffects (e.g. `sustenance`) not being saved correctly
*   Grandma's Strawberry Pie can now be eaten safely. Enjoy!
*   Dungarees not being rendered properly on NeoForge

**Changed**

*   Most cooking tools can now be broken instantly and dont require a tool anymore
*   All Effects have now unique Particle Effect Colors

* * *

[1.1.2]

**Fixed**

*   Crash caused by unregistered custom MobEffects (e.g. `sustenance`) not being saved correctly
*   Stove didn’t accept modded fuels
*   Crash when saving StoveBlockEntity if ownerUuid was null
*   Crafting Bowl never produced output items after stirring was completed
*   Server crash when ticking crops (`NoSuchMethodError: getGrowthSpeed`), fixed by explicitly calling `CropBlock.getGrowthSpeed(...)` in crop blocks

**Changed**

*   Tomato crops can no longer be planted on top of other tomato blocks
*   Chicken AI goals for locating and entering coops were optimized:
    *   Reduced frequency of pathfinding checks with internal cooldown
    *   Improved caching of valid coop positions
    *   Prevented redundant navigation calls for smoother movement

A big thank you to everyone who has been actively reporting bugs and sharing feedback ❤️

Some issues can easily slip through during development, and your reports help me catch them faster. Your support makes the mod better with every update. I really appreciate it!

* * *

[1.1.1]

**Fixed**

*   Fixed a crash when sending `SyncSaturationPacket` by sending payloads directly.

* * *

[1.1.0]

**Welcome to 1.21.1**

* * *

[1.0.12]

**Fixed**

*   Farm Animals not being breedable anymore

* * *

[1.0.11]

**Fixed**

*   Fixed a critical issue where the game would crash on servers due to client-only code being called from the `AnimalEntityMixin`. Everything worked fine in singleplayer, but not on dedicated servers.  
    This patch restores proper server compatibility for all new saturation mechanics. :)

_P.S.: Sorry for the hiccup – this ones on me_

* * *

[1.0.10]

This small update focuses on adding new mechanics that enhance loot from farm animals, selected F&C crops, and eggs through interaction, care, and environmental factors.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Added**

*   A Pet Bowl! - Feed your cat or dog with a `Pet Bowl`. Occasionally, pets will walk up to an empty bowl and beg for food. Feeding grants temporary bonuses. You can assign a Name Tag to dedicate a bowl to a specific pet.
*   Chicken Nest: When placed near chickens, eggs are laid directly into the nest instead of falling to the ground. The nest can hold up to 2 eggs. Occasionally (5% chance), a feather may also be added.* Chicken Coop: Works like similar to a bee nest. Chickens nearby will enter the coop when ready to lay an egg. Holds up to 6 chickens at once.
*   Farm animals can now be fed their preferred food. The more often they are fed, the more meat they will drop. Feeding progress is visible only when wearing...
*   ...`Dungarees`! – While equipped, shows feed levels above animals. Also prevents trampling farmland while wearing them. They can be bought from Farmer Villagers.
*   Certain F&C crops now have a small chance to grow into larger variants when near a water sprinkler or during rain. Larger crops have an increased chance of yielding multiple drops.
*   Farmer Villagers have now a Chance to offer several F&C related Items.
*   Chicken Coop: Functions similarly to a bee nest. Chickens enter on their own to lay eggs and rest. Up to 9 Eggs can be stored at once. Players can also manually insert a leashed chicken. Eggs are automatically collected, and chickens exit after a short time.
*   When placing SugarCare on Fertilized Soil it will grow 20% faster
*   Dog & Cat Food can now be crafted into Bags. These can be placed and stacked up to 3 times.
*   Support for DoggyTalents
*   Japanese translation _(Thanks to PExPE3)_

**Fixed**

*   Recipe for Yeast had wrong tags as Ingredients
*   fr_fr translation
*   EffectFood returns itself after being consumed, which is likely unintended.

* * *

[1.0.9]

**Fixed**

*   Actually fixed recipes this time
*   Improve quick move on cooking containers

* * *

[1.0.8]

**Fixed**

*   Recipes are properly recognized

**Changed**

*   `Sausage with oat patty` now uses the roaster instead of the cooking pot

* * *

[1.0.7]

**Added**

*   Tooltip showing remaining burn time when hovering over the stove burn icon
*   Added pt_br translation (thanks to Coffee-0xFF)
*   Updated ru_ru (thanks to Tefnya)

**Changed**

*   Stove now uses the same valid fuel items and burn times as the furnace
*   Reduced spawn rates for all wild crops
*   Implemented templates for most crops, bags, tea, and more — this should slightly improve loading times
*   Completely overhauled all tags for much better compatibility with other mods (thanks to Ninjadaj!)
*   `Stove` now uses the same Logic as Minecrafts `Furnace`, `Smoker` etc. for the FuelItems

**Fixed**

*   Chair blocks no longer block the use of items in your offhand when right-clicking a chair
*   `Sustenance` effect now works correctly
*   `Cooking Pot` now crafts the correct output
*   `Scarecrow` now properly grants a growth boost to nearby crops

* * *

[1.0.6]

**Added**

*   Added the ability to retrieve items from the MincerBlock by Shift-Right Clicking
*   Added Composter: A new Item made out of Fertilizer. Has 10 uses. Applies Bone Meal Effect to multiple Crops
*   Added Silo Sounds: Opening & Closing Door, inserting Items, crafting finished
*   FeedingTrough can now be filled by using Hoppers
*   You can now use various Farm&Charm Crops to feed and breed farm and other animals
*   Added Particles when eating a StackableEatableBlock - e.g. Pancakes
*   Zombies have a really low Chance to spawn wielding a Pitchfork as a Weapon

**Changed**

*   Strawberry crop now only drops an Item when age == MAX_AGE
*   Tomato crop now only drops an Item when age == MAX_AGE
*   Fertilizer works now again similar to Bone Meal and can be stacked again
*   Renamed the "get_fertilizer" advancement
*   Renamed the "get_minced_beef" advancement
*   Renamed the "introduction_drying" advancement
*   Renamed the "introduction_mincing" advancement
*   Renamed the "use_hoe_on_fertilized_soil" advancement
*   Renamed the "place_stove" advancement
*   Pitchfork now uses the "handheld" model parent instead of "generated" – wield it like a true weapon! (even if it technically isn't one)
*   Slightly raised the position of the particles when stirring the CraftingBowlBlock
*   Improved Roaster, Supply Cart, Plates, Mincer, Window Sill & Plow Texture
*   Updated following translations: ru_ru (Tefnya), zh_cn (sillymoon), pt_br (GMalvestiti)

**Fixed**

*   Added an additional check for a valid recipe before increasing the Stirring value in CraftingBowlBlockEntity
*   StoveBlockEntity now properly processes EffectBlockItem and applies stored effects to the crafted result
*   Properly registered StorageBlockEntity & StorageBlockRenderer
*   ForgeConfig not generating / loading properly

## Hexalia
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/hexalia)

### Hexalia 1.3.7-1.21.1 - NeoForge
### Added

*   Catkin now yields 2 String in the Mortar and Pestle.
*   Mandrake stun restored to 8 seconds.

### Changed

*   Restored intended Censer behavior for Undead Veil, Withering Calm, Phantom Drift, and Blighted Bloom.
*   Infused Farmland now uses a self-contained model for better modpack compatibility.
*   Earplugs tooltip restored.

### Fixed

*   Fixed Censer regressions from the 1.21.1 migration.
*   Fixed Infused Farmland side textures.
*   Fixed Earplugs translation key.
*   Fixed Fabric 1.21.1 natural herb generation; all 19 shared plant features now inject into the correct biomes.
*   Continued custom effect holder-safety fixes to prevent save-related crashes.

## Balm
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/balm)

### balm-neoforge-1.21.1-21.0.66.jar
- Fixed memory leak in `BlockEntityOnLoadCallback`

## DynamicLantern
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/dynamiclantern)

### dynamiclantern-2.0.0-mc1.21.1-neoforge
Dynamic Lantern 2.0.0 for Minecraft 1.21.1 (NeoForge).

Architectury-based release with wearable waist lantern rendering, swing physics, and compatible accessory-slot integration. Lantern slot and rear placement are enabled by default. Supports compatible dynamic-lighting integrations without requiring shaders.

Install the required dependencies listed for this file. Lighting and shader mods are optional and must match your Minecraft version and loader.

## Starcatcher
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/starcatcher)

### starcatcher-3.2-NEOFORGE-1.21.1.jar
*   Added Little Joy's fishing spots compat
*   Added empty modifier to all biome baits to make it more obivious what they do
*   Added `allowed_rarities` and `restricted_rarities` modifiers
*   Added ancient city structure restriction to the Ward
*   Added Targeted Bait, crafted from any fish + worm. This bait will bost the chance of fishing the fish used in the bait.
*   Updated a bunch of fish sprites! (thank you NifastGreentail)
*   Data driven json entries (`DataEntry`) now use a "add" and "remove" list for better multi-datapack support
*   Improved Quality Food Compat, removing the hard-coded stuff and making it into modifiers
*   Improved some backend modifier api to support the new modifier features
*   Removed ``wadawdadwadwaawdawdwad`` from the tournament overlay
*   Added 5 new fish to Frozen Oceans
*   Added 1 new fish to Frozen Rivers
*   Added 1 new fish to The End
*   Ocean fish are no longer available on all oceans, instead only on non-frozen, non-warm oceans
*   Sea Bass is now available in on all oceans
*   Boreal is no longer a legendary fish
*   Azure Crystalback Minnow's gimmick now encourages a copper hook + steady bobber + purple hat
*   Adjusted the restrictions of some baits
*   Fixed guide index Button not working on non-fish pages of index

## [Let's Do] Bakery - Farm&Charm Compat
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/lets-do-bakery-farm-charm-compat)

### Bakery - 2.1.7 - NEOFORGE - 1.21.1
[2.1.7]

**Added**

*   Added ja_jp translation (thanks to Anpan715)

**Changed**

*   Updated ru_ru translation (thanks to Tefny)
*   Updated zh_cn translation (thanks to Number_Sir)
*   Fixed and updated it_it translation (thanks to Serena)
*   Converted images from PNG to WEBP to reduce file size
*   Optimized images (via ImgBot)

* * *

[2.1.6]

**Fixed**

*   Game rushing during startup due to early initialization of recipe remainders
*   TrayBlock hitbox not rotating with block facing
*   BreadCrate missing blockBreak particles

**Added**

*   Added zh_tw translation (thanks to cherrypuff1120)

* * *

[2.1.5]

**Fixed**

*   Containers such as bottles, jars, bowls and buckets not being returned after cooking

**Changed**

*   Added crafting remainder to Jam & Chocolate Spread
*   Updated pack.png

* * *

[2.1.4]

**Added**

*   Fixed Sugar Rush causing client and server crashes when saving player data

**Changed**

*   Adjusted bread knife attributes: slightly increased damage, significantly reduced attack speed

* * *

[2.1.3]

**Requires Farm & Charm 1.1.15+**

**Added**

*   Sugar Rush: Increases movement speed by 2% per stack, up to 10%. At 5 stacks, also increases attack speed by 2% per stack, stacking up to 10 times
*   Vitality: Periodically reduces player exhaustion, slowing down hunger depletion

**Changed**

*   Removed BakeryIdentifier utility and moved identifier helper directly into the Bakery class
*   Reduced overly saturated textures (work in progress)
*   BakerStation Recipes are now Datadriven
*   Most FoodItems now using the 2 new Effects
*   Jam and Chocolate Spread can now be stacked up to 4 times

* * *

[2.1.2]

**Fixed**

*   CompletionistBanner applying the wrong Effect to nearby Players
*   Fixed Bakery config not applying values correctly

* * *

[2.1.1-neoforge]

**Fixed**

*   Removed invalid mixin configuration in `neoforge.mods.toml` that caused crashes on NeoForge startup.

* * *

[2.1.1]

**Changed**

*   Dough Recipes now using Flour instead of Wheat
*   *Effect registration now uses Farm & Charm’s unified Registration

**Fixed**

*   Iron Bench not being mineable faster when using a Pickaxe

* * *

[2.1.0]

**Welcome to 1.21.1**

* * *

[2.0.5]

**Added**

*   You can now add your own Text to StreetSigns

**Changed**

*   Minecraft:Bread can now be stored in WallDisplays as well

**Fixed**

*   Baby Zombies wont spawn with Bakery Items anymore

* * *

[2.0.4]

**Added**

*   Zombies have low Chance to spawn wielding a Small Cooking Pot, Rolling Pin or Bread Knife as a Weapon

**Changed**

*   Increased BrickCounter crafting result count from "1" to "3"
*   Increased Drawer crafting result count from "1" to "2"
*   Increased Cabinet crafting result count from "1" to "2"
*   Increased Wall Cabinet crafting result count from "1" to "2"
*   Increased Wall Display crafting result count from "1" to "2"
*   Reduced Iron Bench crafting result count to "4" to "2"
*   Improved Cake Stand Texture
*   Adjusted all Recipe .json the the new format

**Fixed**

*   You can now safely eat Cake. Your game won't crash anymore.

## FTB XMod Compat
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/ftb-xmod-compat)

### [NEOFORGE][1.21.1] FTB XMod Compat 21.1.12
[21.1.12]
-----------

### Changed

*   Improved JEI recipe lookups to use JEI's typed recipe manager API

### Fixed

*   Fixed crash when using newer JEI versions, use stable JEI API for bookmarks.
*   Fixed the missing background and click handling for JEI quest recipes
*   Displayed fluid tasks as fluid ingredients in JEI quest recipes
*   Preserved fluid amount and components when opening JEI fluid recipes on Fabric

### Support

If you have any issues with this mod, please report them on our [Issue Tracker](/linkout?remoteUrl=https%253a%252f%252fgo.ftb.team%252fsupport-mod-issues)

## Polytone
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/polytone)

### polytone-1.21-4.5.1-neoforge
*   backported many 26.1 changes
*   added some sanity checks for resource locations

## FTB Library (NeoForge)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/ftb-library-forge)

### [NEOFORGE][1.21.1] FTB Library 2101.1.36
[2101.1.36]
-------------

### Added

*   Added `CursorType.MOVE`

### Fixed

*   Fixed some numeric value handling in the NBT editor (thanks @BaklajanPremium)

### Support

If you have any issues with this mod, please report them on our [Issue Tracker](/linkout?remoteUrl=https%253a%252f%252fgo.ftb.team%252fsupport-mod-issues)

## Inventory Essentials
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/inventory-essentials)

### inventoryessentials-neoforge-1.21.1-21.1.19.jar
- Fixed potential race condition in bundle autofill, tool refill and stack refill, causing them to not work as expected occasionally

## FTB Quest Enhance
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/quest-enhance)

### Quest Enhance 1.21.1 NeoForge 3.11
### English

*   Fixed quest description scrolling when scroll page flipping is disabled.
*   Preserved native page flipping when the option is enabled.

### 中文

*   修复关闭滚轮翻页后任务描述无法滚动的问题。
*   开启选项时保留 FTB 原生章节翻页行为。

### quest_enhance-1.21.1-neoforge-3.10.jar
English:  
- Added mouse-wheel paging for multi-page quest descriptions.  
- Added an option to exclude chapter images from middle-button drag-box selection.  
- Improved FTB Quests editing workflow for the 1211 branch.

中文：  
- 新增任务描述滚轮翻页。  
- 新增章节画板图片不参与拖动范围选取的选项。  
- 改进 1211 分支的 FTB Quests 编辑体验。

## FTB Ranks (NeoForge)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/ftb-ranks-forge)

### [NEOFORGE][1.21.1] FTB Ranks 2101.1.5
[2101.1.5]
------------

### Changed

*   FTB Ranks commands which change rank state in any way now require permission level 4 (server owner) instead of 2
    *   In particular this means that running ranks commands from command blocks or signs is no longer possible
*   For SSP, open-to-lan behaviour is now safer: players joining a published server no longer have access to ranks commands

### Fixed

*   The `/ftbranks` node command no longer accepts `name` and `power` as node names, since they're reserved
*   Fixed rank player membership data not always getting marked as save-needed on change

### Support

If you have any issues with this mod, please report them on our [Issue Tracker](/linkout?remoteUrl=https%253a%252f%252fgo.ftb.team%252fsupport-mod-issues)

## SuperMartijn642's Core Lib
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib)

### SuperMartijn642's Core Lib 1.1.24a for NeoForge 1.21
### SuperMartijn642's Core Library 1.1.24a

*   `TextComponents#block` now lets the block create the text component rather than using its translation key

### SuperMartijn642's Core Library 1.1.24

*   Fixed `CustomSlot` hover check area being 2 pixels too large

### SuperMartijn642's Core Library 1.1.23b

*   Added workaround for guis not rendering correctly when ImmediatelyFast is present

### SuperMartijn642's Core Library 1.1.23a

*   Fixed code for adding items to creative groups scaling with #total items * #total groups, thus being extremely slow when there's many mods

### SuperMartijn642's Core Library 1.1.23

*   Added `#getWidget` method for `WidgetScreen` and `WidgetContainerScreen`
*   Fixed multipart conditions not being flattened correctly in `BlockStateGenerator`

### SuperMartijn642's Core Library 1.1.22

*   Fixed `InteractionFeedback#pass` using `SUCCESS` instead of `PASS`
*   Fixed `ElementBuilder#shape` having one parameter as an int instead of float
*   Fixed `BaseBlockItem#useOn` returning `CONSUME` instead of `FAIL` when a block cannot be placed

### SuperMartijn642's Core Library 1.1.21

*   Fixed client not being updated when `BaseBlockEntity#writeClientData` returns empty tag

### SuperMartijn642's Core Library 1.1.20

*   Added `Widget#cursor` to change the cursor when hovering a widget
*   Added `ScrollbarWidget` for creating a configurable scrollbar
*   Added `ScissorWidet` that restricts rendering and input handling of child widgets to its bounds
*   Added `CustomSlot` for creating container slots
*   Added `AbstractButtonWidget#isClickable` and `AbstractButtonWidget#setActive`
*   Improved `BaseWidget` focus handling
*   Fixed `GuiGraphicsHelper#submitCustomRendering` not respecting active scissor
*   Fixed child widgets not getting unfocused when focused widget changes
*   Fixed output from `BlockStateGenerator`, `ModelGenerator`, and `TagGenerator` not being consistent

### SuperMartijn642's Core Library 1.1.19

*   Added additional properties to `BlockProperties` to match vanilla

### SuperMartijn642's Core Library 1.1.18b

*   Fixed `Widget` screens using horizontal instead of vertical scrolling

### SuperMartijn642's Core Library 1.1.18a

*   Fixed `BaseBlockItem#useOn` ignoring some parameters leading to issues when interacting with other mods

### SuperMartijn642's Core Library 1.1.18

*   Fixed `TextFieldWidget` allowing one more character than the max length

### SuperMartijn642's Core Library 1.1.17i

*   Added registry wrapper for criterion trigger types

### SuperMartijn642's Core Library 1.1.17h

*   Fixed tag-dependent recipe conditions not working

### SuperMartijn642's Core Library 1.1.17g

*   Fixed `RecipeGenerator` not applying resource conditions

### SuperMartijn642's Core Library 1.1.17f

*   Fixed registry overrides not working

### SuperMartijn642's Core Library 1.1.17e

*   Fixed `LootTableGenerator` errors with custom enchant functions

### SuperMartijn642's Core Library 1.1.17d

*   Fixed `CommonUtils#getRegistryAccess` returning nothing when in a multiplayer world

### SuperMartijn642's Core Library 1.1.17c

*   Fixed items not appearing in creative menu search tab

### SuperMartijn642's Core Library 1.1.17b

*   Fixed custom model registration through `ClientRegistrationHandler`

### SuperMartijn642's Core Library 1.1.17a

*   Fixed crash with NeoForge 21.0.102

### SuperMartijn642's Core Library 1.1.17

*   Initial release of SuperMartijn642's Core Library for NeoForge 1.20.6

### SuperMartijn642's Core Lib 1.1.24a for NeoForge 1.21.11
### SuperMartijn642's Core Library 1.1.24a

*   Fixed `tag_populated` resource condition always failing on first resource reload

### SuperMartijn642's Core Library 1.1.24

*   Fixed `CustomSlot` hover check area being 2 pixels too large

### SuperMartijn642's Core Library 1.1.23a

*   Fixed code for adding items to creative groups scaling with #total items * #total groups, thus being extremely slow when there's many mods

### SuperMartijn642's Core Library 1.1.23

*   Added `#getWidget` method for `WidgetScreen` and `WidgetContainerScreen`
*   `Widget` backgrounds are now rendered earlier, in the same way as vanilla menu background, for improved mod compatibility
*   Fixed multipart conditions not being flattened correctly in `BlockStateGenerator`

### SuperMartijn642's Core Library 1.1.22

*   Added support for vanilla z rotation in `BlockStateGenerator`
*   Fixed `ElementBuilder#shape` having one parameter as an int instead of float

### SuperMartijn642's Core Library 1.1.21

*   Fixed client not being updated when `BaseBlockEntity#writeClientData` returns empty tag

### SuperMartijn642's Core Library 1.1.20

*   Added `Widget#cursor` to change the cursor when hovering a widget
*   Added `ScrollbarWidget` for creating a configurable scrollbar
*   Added `ScissorWidet` that restricts rendering and input handling of child widgets to its bounds
*   Added `CustomSlot` for creating container slots
*   Added `AbstractButtonWidget#isClickable` and `AbstractButtonWidget#setActive`
*   Improved `BaseWidget` focus handling
*   Fixed `GuiGraphicsHelper#submitCustomRendering` not respecting active scissor
*   Fixed child widgets not getting unfocused when focused widget changes
*   Fixed output from `BlockStateGenerator`, `ModelGenerator`, and `TagGenerator` not being consistent

### SuperMartijn642's Core Library 1.1.19

*   Added additional properties to `BlockProperties` to match vanilla

### SuperMartijn642's Core Library 1.1.18

*   Initial release of SuperMartijn642's Core Library for Minecraft 1.21.11

### SuperMartijn642's Core Lib 1.1.24a for NeoForge 1.21.10
### SuperMartijn642's Core Library 1.1.24a

*   Fixed `tag_populated` resource condition always failing on first resource reload

### SuperMartijn642's Core Library 1.1.24

*   Fixed `CustomSlot` hover check area being 2 pixels too large

### SuperMartijn642's Core Library 1.1.23a

*   Fixed code for adding items to creative groups scaling with #total items * #total groups, thus being extremely slow when there's many mods

### SuperMartijn642's Core Library 1.1.23

*   Added `#getWidget` method for `WidgetScreen` and `WidgetContainerScreen`
*   `Widget` backgrounds are now rendered earlier, in the same way as vanilla menu background, for improved mod compatibility
*   Fixed multipart conditions not being flattened correctly in `BlockStateGenerator`

### SuperMartijn642's Core Library 1.1.22

*   Fixed `ElementBuilder#shape` having one parameter as an int instead of float

### SuperMartijn642's Core Library 1.1.21

*   Fixed client not being updated when `BaseBlockEntity#writeClientData` returns empty tag

### SuperMartijn642's Core Library 1.1.20

*   Added `Widget#cursor` to change the cursor when hovering a widget
*   Added `ScrollbarWidget` for creating a configurable scrollbar
*   Added `ScissorWidet` that restricts rendering and input handling of child widgets to its bounds
*   Added `CustomSlot` for creating container slots
*   Added `AbstractButtonWidget#isClickable` and `AbstractButtonWidget#setActive`
*   Improved `BaseWidget` focus handling
*   Fixed `GuiGraphicsHelper#submitCustomRendering` not respecting active scissor
*   Fixed child widgets not getting unfocused when focused widget changes
*   Fixed output from `BlockStateGenerator`, `ModelGenerator`, and `TagGenerator` not being consistent

### SuperMartijn642's Core Library 1.1.19

*   Added additional properties to `BlockProperties` to match vanilla
*   Added packet direction restrictions to `PacketChannel`

### SuperMartijn642's Core Library 1.1.18

*   Initial release of SuperMartijn642's Core Library for Minecraft 1.21.9 & 1.21.10

### SuperMartijn642's Core Lib 1.1.24a for NeoForge 1.21.7
### SuperMartijn642's Core Library 1.1.24a

*   Fixed `tag_populated` resource condition always failing on first resource reload

### SuperMartijn642's Core Library 1.1.24

*   Fixed `CustomSlot` hover check area being 2 pixels too large

### SuperMartijn642's Core Library 1.1.23a

*   Fixed code for adding items to creative groups scaling with #total items * #total groups, thus being extremely slow when there's many mods

### SuperMartijn642's Core Library 1.1.23

*   Added `#getWidget` method for `WidgetScreen` and `WidgetContainerScreen`
*   `Widget` backgrounds are now rendered earlier, in the same way as vanilla menu background, for improved mod compatibility
*   Fixed multipart conditions not being flattened correctly in `BlockStateGenerator`

### SuperMartijn642's Core Library 1.1.22

*   Fixed `ElementBuilder#shape` having one parameter as an int instead of float

### SuperMartijn642's Core Library 1.1.21

*   Fixed client not being updated when `BaseBlockEntity#writeClientData` returns empty tag

### SuperMartijn642's Core Library 1.1.20

*   Added `Widget#cursor` to change the cursor when hovering a widget
*   Added `ScrollbarWidget` for creating a configurable scrollbar
*   Added `ScissorWidet` that restricts rendering and input handling of child widgets to its bounds
*   Added `CustomSlot` for creating container slots
*   Added `AbstractButtonWidget#isClickable` and `AbstractButtonWidget#setActive`
*   Improved `BaseWidget` focus handling
*   Fixed `GuiGraphicsHelper#submitCustomRendering` not respecting active scissor
*   Fixed child widgets not getting unfocused when focused widget changes
*   Fixed output from `BlockStateGenerator`, `ModelGenerator`, and `TagGenerator` not being consistent

### SuperMartijn642's Core Library 1.1.19

*   Added additional properties to `BlockProperties` to match vanilla

### SuperMartijn642's Core Library 1.1.18e

*   Fixed `Widget` screens using horizontal instead of vertical scrolling

### SuperMartijn642's Core Library 1.1.18d

*   Fixed NeoForge screen render background event getting fired without gui matrix translation for widget container screens

### SuperMartijn642's Core Library 1.1.18c

*   Fixed custom rendering in guis not showing when Iris is installed

### SuperMartijn642's Core Library 1.1.18b

*   Fixed vanilla tooltips being offset in `ContainerWidgetScreen`

### SuperMartijn642's Core Library 1.1.18a

*   Added picture in picture renderer registration through `ClientRegistrationHandler`
*   Added picture in picture state submission in `GuiGraphicsHelper`
*   Added method to submit arbitrary rendering to `GuiGraphicsHelper`
*   Fixed `GuiGraphicsHelper#submitTooltipForTopStratum` not using matrix stack transformations

### SuperMartijn642's Core Library 1.1.18

*   Initial release of SuperMartijn642's Core Library for Minecraft 1.21.7

### SuperMartijn642's Core Lib 1.1.24a for NeoForge 1.21.6
### SuperMartijn642's Core Library 1.1.24a

*   Fixed `tag_populated` resource condition always failing on first resource reload

### SuperMartijn642's Core Library 1.1.24

*   Fixed `CustomSlot` hover check area being 2 pixels too large

### SuperMartijn642's Core Library 1.1.23a

*   Fixed code for adding items to creative groups scaling with #total items * #total groups, thus being extremely slow when there's many mods

### SuperMartijn642's Core Library 1.1.23

*   Added `#getWidget` method for `WidgetScreen` and `WidgetContainerScreen`
*   `Widget` backgrounds are now rendered earlier, in the same way as vanilla menu background, for improved mod compatibility
*   Fixed multipart conditions not being flattened correctly in `BlockStateGenerator`

### SuperMartijn642's Core Library 1.1.22

*   Fixed `ElementBuilder#shape` having one parameter as an int instead of float

### SuperMartijn642's Core Library 1.1.21

*   Fixed client not being updated when `BaseBlockEntity#writeClientData` returns empty tag

### SuperMartijn642's Core Library 1.1.20

*   Added `Widget#cursor` to change the cursor when hovering a widget
*   Added `ScrollbarWidget` for creating a configurable scrollbar
*   Added `ScissorWidet` that restricts rendering and input handling of child widgets to its bounds
*   Added `CustomSlot` for creating container slots
*   Added `AbstractButtonWidget#isClickable` and `AbstractButtonWidget#setActive`
*   Improved `BaseWidget` focus handling
*   Fixed `GuiGraphicsHelper#submitCustomRendering` not respecting active scissor
*   Fixed child widgets not getting unfocused when focused widget changes
*   Fixed output from `BlockStateGenerator`, `ModelGenerator`, and `TagGenerator` not being consistent

### SuperMartijn642's Core Library 1.1.19

*   Added additional properties to `BlockProperties` to match vanilla

### SuperMartijn642's Core Library 1.1.18e

*   Fixed `Widget` screens using horizontal instead of vertical scrolling

### SuperMartijn642's Core Library 1.1.18d

*   Fixed NeoForge screen render background event getting fired without gui matrix translation for widget container screens

### SuperMartijn642's Core Library 1.1.18c

*   Fixed custom rendering in guis not showing when Iris is installed

### SuperMartijn642's Core Library 1.1.18b

*   Fixed vanilla tooltips being offset in `ContainerWidgetScreen`

### SuperMartijn642's Core Library 1.1.18a

*   Added picture in picture renderer registration through `ClientRegistrationHandler`
*   Added picture in picture state submission in `GuiGraphicsHelper`
*   Added method to submit arbitrary rendering to `GuiGraphicsHelper`
*   Fixed `GuiGraphicsHelper#submitTooltipForTopStratum` not using matrix stack transformations

### SuperMartijn642's Core Library 1.1.18

*   Initial release of SuperMartijn642's Core Library for Minecraft 1.21.6

### SuperMartijn642's Core Lib 1.1.24a for NeoForge 1.21.5
### SuperMartijn642's Core Library 1.1.24a

*   Fixed `tag_populated` resource condition always failing on first resource reload

### SuperMartijn642's Core Library 1.1.24

*   Fixed `CustomSlot` hover check area being 2 pixels too large

### SuperMartijn642's Core Library 1.1.23b

*   Added workaround for guis not rendering correctly when ImmediatelyFast is present

### SuperMartijn642's Core Library 1.1.23a

*   Fixed code for adding items to creative groups scaling with #total items * #total groups, thus being extremely slow when there's many mods

### SuperMartijn642's Core Library 1.1.23

*   Added `#getWidget` method for `WidgetScreen` and `WidgetContainerScreen`
*   Fixed multipart conditions not being flattened correctly in `BlockStateGenerator`

### SuperMartijn642's Core Library 1.1.22

*   Fixed `ElementBuilder#shape` having one parameter as an int instead of float

### SuperMartijn642's Core Library 1.1.21

*   Fixed client not being updated when `BaseBlockEntity#writeClientData` returns empty tag

### SuperMartijn642's Core Library 1.1.20

*   Added `Widget#cursor` to change the cursor when hovering a widget
*   Added `ScrollbarWidget` for creating a configurable scrollbar
*   Added `ScissorWidet` that restricts rendering and input handling of child widgets to its bounds
*   Added `CustomSlot` for creating container slots
*   Added `AbstractButtonWidget#isClickable` and `AbstractButtonWidget#setActive`
*   Improved `BaseWidget` focus handling
*   Fixed `GuiGraphicsHelper#submitCustomRendering` not respecting active scissor
*   Fixed child widgets not getting unfocused when focused widget changes
*   Fixed output from `BlockStateGenerator`, `ModelGenerator`, and `TagGenerator` not being consistent

### SuperMartijn642's Core Library 1.1.19

*   Added additional properties to `BlockProperties` to match vanilla

### SuperMartijn642's Core Library 1.1.18a

*   Fixed `Widget` screens using horizontal instead of vertical scrolling

### SuperMartijn642's Core Library 1.1.18

*   Initial release of SuperMartijn642's Core Library for Minecraft 1.21.5

### SuperMartijn642's Core Lib 1.1.24a for NeoForge 1.21.4
### SuperMartijn642's Core Library 1.1.24a

*   Fixed `tag_populated` resource condition always failing on first resource reload

### SuperMartijn642's Core Library 1.1.24

*   Fixed `CustomSlot` hover check area being 2 pixels too large

### SuperMartijn642's Core Library 1.1.23b

*   Added workaround for guis not rendering correctly when ImmediatelyFast is present

### SuperMartijn642's Core Library 1.1.23a

*   Fixed code for adding items to creative groups scaling with #total items * #total groups, thus being extremely slow when there's many mods

### SuperMartijn642's Core Library 1.1.23

*   Added `#getWidget` method for `WidgetScreen` and `WidgetContainerScreen`
*   Fixed multipart conditions not being flattened correctly in `BlockStateGenerator`

### SuperMartijn642's Core Library 1.1.22

*   Fixed `ElementBuilder#shape` having one parameter as an int instead of float

### SuperMartijn642's Core Library 1.1.21

*   Fixed client not being updated when `BaseBlockEntity#writeClientData` returns empty tag

### SuperMartijn642's Core Library 1.1.20

*   Added `Widget#cursor` to change the cursor when hovering a widget
*   Added `ScrollbarWidget` for creating a configurable scrollbar
*   Added `ScissorWidet` that restricts rendering and input handling of child widgets to its bounds
*   Added `CustomSlot` for creating container slots
*   Added `AbstractButtonWidget#isClickable` and `AbstractButtonWidget#setActive`
*   Improved `BaseWidget` focus handling
*   Fixed `GuiGraphicsHelper#submitCustomRendering` not respecting active scissor
*   Fixed child widgets not getting unfocused when focused widget changes
*   Fixed output from `BlockStateGenerator`, `ModelGenerator`, and `TagGenerator` not being consistent

### SuperMartijn642's Core Library 1.1.19

*   Added additional properties to `BlockProperties` to match vanilla

### SuperMartijn642's Core Library 1.1.18d

*   Fixed `Widget` screens using horizontal instead of vertical scrolling

### SuperMartijn642's Core Library 1.1.18c

*   Account for breaking changes to datagen in NeoForge 21.4.47-beta

### SuperMartijn642's Core Library 1.1.18b

*   Fixed `BaseBlockItem#useOn` ignoring some parameters leading to issues when interacting with other mods

### SuperMartijn642's Core Library 1.1.18a

*   Increased minimum NeoForge version to 21.4.35-beta

### SuperMartijn642's Core Library 1.1.18

*   Fixed `TextFieldWidget` allowing one more character than the max length

### SuperMartijn642's Core Library 1.1.17c

*   Fixed models from model consumer not getting loaded
*   Fixed model overwrites not getting applied

### SuperMartijn642's Core Library 1.1.17b

*   Fixed `BaseBlock` not dropping anything when using default drops

### SuperMartijn642's Core Library 1.1.17a

*   Fixed crash on dedicated server

### SuperMartijn642's Core Library 1.1.17

*   Initial release of SuperMartijn642's Core Library for Minecraft 1.21.4

### SuperMartijn642's Core Lib 1.1.24a for NeoForge 1.21.3
### SuperMartijn642's Core Library 1.1.24a

*   Fixed `tag_populated` resource condition always failing on first resource reload

### SuperMartijn642's Core Library 1.1.24

*   Fixed `CustomSlot` hover check area being 2 pixels too large

### SuperMartijn642's Core Library 1.1.23b

*   Added workaround for guis not rendering correctly when ImmediatelyFast is present

### SuperMartijn642's Core Library 1.1.23a

*   Fixed code for adding items to creative groups scaling with #total items * #total groups, thus being extremely slow when there's many mods

### SuperMartijn642's Core Library 1.1.23

*   Added `#getWidget` method for `WidgetScreen` and `WidgetContainerScreen`
*   Fixed multipart conditions not being flattened correctly in `BlockStateGenerator`

### SuperMartijn642's Core Library 1.1.22

*   Fixed `ElementBuilder#shape` having one parameter as an int instead of float

### SuperMartijn642's Core Library 1.1.21

*   Fixed client not being updated when `BaseBlockEntity#writeClientData` returns empty tag

### SuperMartijn642's Core Library 1.1.20

*   Added `Widget#cursor` to change the cursor when hovering a widget
*   Added `ScrollbarWidget` for creating a configurable scrollbar
*   Added `ScissorWidet` that restricts rendering and input handling of child widgets to its bounds
*   Added `CustomSlot` for creating container slots
*   Added `AbstractButtonWidget#isClickable` and `AbstractButtonWidget#setActive`
*   Improved `BaseWidget` focus handling
*   Fixed `GuiGraphicsHelper#submitCustomRendering` not respecting active scissor
*   Fixed child widgets not getting unfocused when focused widget changes
*   Fixed output from `BlockStateGenerator`, `ModelGenerator`, and `TagGenerator` not being consistent

### SuperMartijn642's Core Library 1.1.19

*   Added additional properties to `BlockProperties` to match vanilla

### SuperMartijn642's Core Library 1.1.18b

*   Fixed `Widget` screens using horizontal instead of vertical scrolling

### SuperMartijn642's Core Library 1.1.18a

*   Fixed `BaseBlockItem#useOn` ignoring some parameters leading to issues when interacting with other mods

### SuperMartijn642's Core Library 1.1.18

*   Fixed `TextFieldWidget` allowing one more character than the max length

### SuperMartijn642's Core Library 1.1.17b

*   Fixed `BaseBlock` not dropping anything when using default drops

### SuperMartijn642's Core Library 1.1.17a

*   Fixed crash on dedicated server

### SuperMartijn642's Core Library 1.1.17

*   Initial release of SuperMartijn642's Core Library for Minecraft 1.21.2 & 1.21.3

### SuperMartijn642's Core Lib 1.1.24 for NeoForge 1.21.11
### SuperMartijn642's Core Library 1.1.24

*   Fixed `CustomSlot` hover check area being 2 pixels too large

### SuperMartijn642's Core Library 1.1.23a

*   Fixed code for adding items to creative groups scaling with #total items * #total groups, thus being extremely slow when there's many mods

### SuperMartijn642's Core Library 1.1.23

*   Added `#getWidget` method for `WidgetScreen` and `WidgetContainerScreen`
*   `Widget` backgrounds are now rendered earlier, in the same way as vanilla menu background, for improved mod compatibility
*   Fixed multipart conditions not being flattened correctly in `BlockStateGenerator`

### SuperMartijn642's Core Library 1.1.22

*   Added support for vanilla z rotation in `BlockStateGenerator`
*   Fixed `ElementBuilder#shape` having one parameter as an int instead of float

### SuperMartijn642's Core Library 1.1.21

*   Fixed client not being updated when `BaseBlockEntity#writeClientData` returns empty tag

### SuperMartijn642's Core Library 1.1.20

*   Added `Widget#cursor` to change the cursor when hovering a widget
*   Added `ScrollbarWidget` for creating a configurable scrollbar
*   Added `ScissorWidet` that restricts rendering and input handling of child widgets to its bounds
*   Added `CustomSlot` for creating container slots
*   Added `AbstractButtonWidget#isClickable` and `AbstractButtonWidget#setActive`
*   Improved `BaseWidget` focus handling
*   Fixed `GuiGraphicsHelper#submitCustomRendering` not respecting active scissor
*   Fixed child widgets not getting unfocused when focused widget changes
*   Fixed output from `BlockStateGenerator`, `ModelGenerator`, and `TagGenerator` not being consistent

### SuperMartijn642's Core Library 1.1.19

*   Added additional properties to `BlockProperties` to match vanilla

### SuperMartijn642's Core Library 1.1.18

*   Initial release of SuperMartijn642's Core Library for Minecraft 1.21.11

### SuperMartijn642's Core Lib 1.1.24 for NeoForge 1.21.10
### SuperMartijn642's Core Library 1.1.24

*   Fixed `CustomSlot` hover check area being 2 pixels too large

### SuperMartijn642's Core Library 1.1.23a

*   Fixed code for adding items to creative groups scaling with #total items * #total groups, thus being extremely slow when there's many mods

### SuperMartijn642's Core Library 1.1.23

*   Added `#getWidget` method for `WidgetScreen` and `WidgetContainerScreen`
*   `Widget` backgrounds are now rendered earlier, in the same way as vanilla menu background, for improved mod compatibility
*   Fixed multipart conditions not being flattened correctly in `BlockStateGenerator`

### SuperMartijn642's Core Library 1.1.22

*   Fixed `ElementBuilder#shape` having one parameter as an int instead of float

### SuperMartijn642's Core Library 1.1.21

*   Fixed client not being updated when `BaseBlockEntity#writeClientData` returns empty tag

### SuperMartijn642's Core Library 1.1.20

*   Added `Widget#cursor` to change the cursor when hovering a widget
*   Added `ScrollbarWidget` for creating a configurable scrollbar
*   Added `ScissorWidet` that restricts rendering and input handling of child widgets to its bounds
*   Added `CustomSlot` for creating container slots
*   Added `AbstractButtonWidget#isClickable` and `AbstractButtonWidget#setActive`
*   Improved `BaseWidget` focus handling
*   Fixed `GuiGraphicsHelper#submitCustomRendering` not respecting active scissor
*   Fixed child widgets not getting unfocused when focused widget changes
*   Fixed output from `BlockStateGenerator`, `ModelGenerator`, and `TagGenerator` not being consistent

### SuperMartijn642's Core Library 1.1.19

*   Added additional properties to `BlockProperties` to match vanilla
*   Added packet direction restrictions to `PacketChannel`

### SuperMartijn642's Core Library 1.1.18

*   Initial release of SuperMartijn642's Core Library for Minecraft 1.21.9 & 1.21.10

### SuperMartijn642's Core Lib 1.1.24 for NeoForge 1.21.7
### SuperMartijn642's Core Library 1.1.24

*   Fixed `CustomSlot` hover check area being 2 pixels too large

### SuperMartijn642's Core Library 1.1.23a

*   Fixed code for adding items to creative groups scaling with #total items * #total groups, thus being extremely slow when there's many mods

### SuperMartijn642's Core Library 1.1.23

*   Added `#getWidget` method for `WidgetScreen` and `WidgetContainerScreen`
*   `Widget` backgrounds are now rendered earlier, in the same way as vanilla menu background, for improved mod compatibility
*   Fixed multipart conditions not being flattened correctly in `BlockStateGenerator`

### SuperMartijn642's Core Library 1.1.22

*   Fixed `ElementBuilder#shape` having one parameter as an int instead of float

### SuperMartijn642's Core Library 1.1.21

*   Fixed client not being updated when `BaseBlockEntity#writeClientData` returns empty tag

### SuperMartijn642's Core Library 1.1.20

*   Added `Widget#cursor` to change the cursor when hovering a widget
*   Added `ScrollbarWidget` for creating a configurable scrollbar
*   Added `ScissorWidet` that restricts rendering and input handling of child widgets to its bounds
*   Added `CustomSlot` for creating container slots
*   Added `AbstractButtonWidget#isClickable` and `AbstractButtonWidget#setActive`
*   Improved `BaseWidget` focus handling
*   Fixed `GuiGraphicsHelper#submitCustomRendering` not respecting active scissor
*   Fixed child widgets not getting unfocused when focused widget changes
*   Fixed output from `BlockStateGenerator`, `ModelGenerator`, and `TagGenerator` not being consistent

### SuperMartijn642's Core Library 1.1.19

*   Added additional properties to `BlockProperties` to match vanilla

### SuperMartijn642's Core Library 1.1.18e

*   Fixed `Widget` screens using horizontal instead of vertical scrolling

### SuperMartijn642's Core Library 1.1.18d

*   Fixed NeoForge screen render background event getting fired without gui matrix translation for widget container screens

### SuperMartijn642's Core Library 1.1.18c

*   Fixed custom rendering in guis not showing when Iris is installed

### SuperMartijn642's Core Library 1.1.18b

*   Fixed vanilla tooltips being offset in `ContainerWidgetScreen`

### SuperMartijn642's Core Library 1.1.18a

*   Added picture in picture renderer registration through `ClientRegistrationHandler`
*   Added picture in picture state submission in `GuiGraphicsHelper`
*   Added method to submit arbitrary rendering to `GuiGraphicsHelper`
*   Fixed `GuiGraphicsHelper#submitTooltipForTopStratum` not using matrix stack transformations

### SuperMartijn642's Core Library 1.1.18

*   Initial release of SuperMartijn642's Core Library for Minecraft 1.21.7

### SuperMartijn642's Core Lib 1.1.24 for NeoForge 1.21.6
### SuperMartijn642's Core Library 1.1.24

*   Fixed `CustomSlot` hover check area being 2 pixels too large

### SuperMartijn642's Core Library 1.1.23a

*   Fixed code for adding items to creative groups scaling with #total items * #total groups, thus being extremely slow when there's many mods

### SuperMartijn642's Core Library 1.1.23

*   Added `#getWidget` method for `WidgetScreen` and `WidgetContainerScreen`
*   `Widget` backgrounds are now rendered earlier, in the same way as vanilla menu background, for improved mod compatibility
*   Fixed multipart conditions not being flattened correctly in `BlockStateGenerator`

### SuperMartijn642's Core Library 1.1.22

*   Fixed `ElementBuilder#shape` having one parameter as an int instead of float

### SuperMartijn642's Core Library 1.1.21

*   Fixed client not being updated when `BaseBlockEntity#writeClientData` returns empty tag

### SuperMartijn642's Core Library 1.1.20

*   Added `Widget#cursor` to change the cursor when hovering a widget
*   Added `ScrollbarWidget` for creating a configurable scrollbar
*   Added `ScissorWidet` that restricts rendering and input handling of child widgets to its bounds
*   Added `CustomSlot` for creating container slots
*   Added `AbstractButtonWidget#isClickable` and `AbstractButtonWidget#setActive`
*   Improved `BaseWidget` focus handling
*   Fixed `GuiGraphicsHelper#submitCustomRendering` not respecting active scissor
*   Fixed child widgets not getting unfocused when focused widget changes
*   Fixed output from `BlockStateGenerator`, `ModelGenerator`, and `TagGenerator` not being consistent

### SuperMartijn642's Core Library 1.1.19

*   Added additional properties to `BlockProperties` to match vanilla

### SuperMartijn642's Core Library 1.1.18e

*   Fixed `Widget` screens using horizontal instead of vertical scrolling

### SuperMartijn642's Core Library 1.1.18d

*   Fixed NeoForge screen render background event getting fired without gui matrix translation for widget container screens

### SuperMartijn642's Core Library 1.1.18c

*   Fixed custom rendering in guis not showing when Iris is installed

### SuperMartijn642's Core Library 1.1.18b

*   Fixed vanilla tooltips being offset in `ContainerWidgetScreen`

### SuperMartijn642's Core Library 1.1.18a

*   Added picture in picture renderer registration through `ClientRegistrationHandler`
*   Added picture in picture state submission in `GuiGraphicsHelper`
*   Added method to submit arbitrary rendering to `GuiGraphicsHelper`
*   Fixed `GuiGraphicsHelper#submitTooltipForTopStratum` not using matrix stack transformations

### SuperMartijn642's Core Library 1.1.18

*   Initial release of SuperMartijn642's Core Library for Minecraft 1.21.6

### SuperMartijn642's Core Lib 1.1.24 for NeoForge 1.21.5
### SuperMartijn642's Core Library 1.1.24

*   Fixed `CustomSlot` hover check area being 2 pixels too large

### SuperMartijn642's Core Library 1.1.23b

*   Added workaround for guis not rendering correctly when ImmediatelyFast is present

### SuperMartijn642's Core Library 1.1.23a

*   Fixed code for adding items to creative groups scaling with #total items * #total groups, thus being extremely slow when there's many mods

### SuperMartijn642's Core Library 1.1.23

*   Added `#getWidget` method for `WidgetScreen` and `WidgetContainerScreen`
*   Fixed multipart conditions not being flattened correctly in `BlockStateGenerator`

### SuperMartijn642's Core Library 1.1.22

*   Fixed `ElementBuilder#shape` having one parameter as an int instead of float

### SuperMartijn642's Core Library 1.1.21

*   Fixed client not being updated when `BaseBlockEntity#writeClientData` returns empty tag

### SuperMartijn642's Core Library 1.1.20

*   Added `Widget#cursor` to change the cursor when hovering a widget
*   Added `ScrollbarWidget` for creating a configurable scrollbar
*   Added `ScissorWidet` that restricts rendering and input handling of child widgets to its bounds
*   Added `CustomSlot` for creating container slots
*   Added `AbstractButtonWidget#isClickable` and `AbstractButtonWidget#setActive`
*   Improved `BaseWidget` focus handling
*   Fixed `GuiGraphicsHelper#submitCustomRendering` not respecting active scissor
*   Fixed child widgets not getting unfocused when focused widget changes
*   Fixed output from `BlockStateGenerator`, `ModelGenerator`, and `TagGenerator` not being consistent

### SuperMartijn642's Core Library 1.1.19

*   Added additional properties to `BlockProperties` to match vanilla

### SuperMartijn642's Core Library 1.1.18a

*   Fixed `Widget` screens using horizontal instead of vertical scrolling

### SuperMartijn642's Core Library 1.1.18

*   Initial release of SuperMartijn642's Core Library for Minecraft 1.21.5

### SuperMartijn642's Core Lib 1.1.24 for NeoForge 1.21.4
### SuperMartijn642's Core Library 1.1.24

*   Fixed `CustomSlot` hover check area being 2 pixels too large

### SuperMartijn642's Core Library 1.1.23b

*   Added workaround for guis not rendering correctly when ImmediatelyFast is present

### SuperMartijn642's Core Library 1.1.23a

*   Fixed code for adding items to creative groups scaling with #total items * #total groups, thus being extremely slow when there's many mods

### SuperMartijn642's Core Library 1.1.23

*   Added `#getWidget` method for `WidgetScreen` and `WidgetContainerScreen`
*   Fixed multipart conditions not being flattened correctly in `BlockStateGenerator`

### SuperMartijn642's Core Library 1.1.22

*   Fixed `ElementBuilder#shape` having one parameter as an int instead of float

### SuperMartijn642's Core Library 1.1.21

*   Fixed client not being updated when `BaseBlockEntity#writeClientData` returns empty tag

### SuperMartijn642's Core Library 1.1.20

*   Added `Widget#cursor` to change the cursor when hovering a widget
*   Added `ScrollbarWidget` for creating a configurable scrollbar
*   Added `ScissorWidet` that restricts rendering and input handling of child widgets to its bounds
*   Added `CustomSlot` for creating container slots
*   Added `AbstractButtonWidget#isClickable` and `AbstractButtonWidget#setActive`
*   Improved `BaseWidget` focus handling
*   Fixed `GuiGraphicsHelper#submitCustomRendering` not respecting active scissor
*   Fixed child widgets not getting unfocused when focused widget changes
*   Fixed output from `BlockStateGenerator`, `ModelGenerator`, and `TagGenerator` not being consistent

### SuperMartijn642's Core Library 1.1.19

*   Added additional properties to `BlockProperties` to match vanilla

### SuperMartijn642's Core Library 1.1.18d

*   Fixed `Widget` screens using horizontal instead of vertical scrolling

### SuperMartijn642's Core Library 1.1.18c

*   Account for breaking changes to datagen in NeoForge 21.4.47-beta

### SuperMartijn642's Core Library 1.1.18b

*   Fixed `BaseBlockItem#useOn` ignoring some parameters leading to issues when interacting with other mods

### SuperMartijn642's Core Library 1.1.18a

*   Increased minimum NeoForge version to 21.4.35-beta

### SuperMartijn642's Core Library 1.1.18

*   Fixed `TextFieldWidget` allowing one more character than the max length

### SuperMartijn642's Core Library 1.1.17c

*   Fixed models from model consumer not getting loaded
*   Fixed model overwrites not getting applied

### SuperMartijn642's Core Library 1.1.17b

*   Fixed `BaseBlock` not dropping anything when using default drops

### SuperMartijn642's Core Library 1.1.17a

*   Fixed crash on dedicated server

### SuperMartijn642's Core Library 1.1.17

*   Initial release of SuperMartijn642's Core Library for Minecraft 1.21.4

### SuperMartijn642's Core Lib 1.1.24 for NeoForge 1.21.3
### SuperMartijn642's Core Library 1.1.24

*   Fixed `CustomSlot` hover check area being 2 pixels too large

### SuperMartijn642's Core Library 1.1.23b

*   Added workaround for guis not rendering correctly when ImmediatelyFast is present

### SuperMartijn642's Core Library 1.1.23a

*   Fixed code for adding items to creative groups scaling with #total items * #total groups, thus being extremely slow when there's many mods

### SuperMartijn642's Core Library 1.1.23

*   Added `#getWidget` method for `WidgetScreen` and `WidgetContainerScreen`
*   Fixed multipart conditions not being flattened correctly in `BlockStateGenerator`

### SuperMartijn642's Core Library 1.1.22

*   Fixed `ElementBuilder#shape` having one parameter as an int instead of float

### SuperMartijn642's Core Library 1.1.21

*   Fixed client not being updated when `BaseBlockEntity#writeClientData` returns empty tag

### SuperMartijn642's Core Library 1.1.20

*   Added `Widget#cursor` to change the cursor when hovering a widget
*   Added `ScrollbarWidget` for creating a configurable scrollbar
*   Added `ScissorWidet` that restricts rendering and input handling of child widgets to its bounds
*   Added `CustomSlot` for creating container slots
*   Added `AbstractButtonWidget#isClickable` and `AbstractButtonWidget#setActive`
*   Improved `BaseWidget` focus handling
*   Fixed `GuiGraphicsHelper#submitCustomRendering` not respecting active scissor
*   Fixed child widgets not getting unfocused when focused widget changes
*   Fixed output from `BlockStateGenerator`, `ModelGenerator`, and `TagGenerator` not being consistent

### SuperMartijn642's Core Library 1.1.19

*   Added additional properties to `BlockProperties` to match vanilla

### SuperMartijn642's Core Library 1.1.18b

*   Fixed `Widget` screens using horizontal instead of vertical scrolling

### SuperMartijn642's Core Library 1.1.18a

*   Fixed `BaseBlockItem#useOn` ignoring some parameters leading to issues when interacting with other mods

### SuperMartijn642's Core Library 1.1.18

*   Fixed `TextFieldWidget` allowing one more character than the max length

### SuperMartijn642's Core Library 1.1.17b

*   Fixed `BaseBlock` not dropping anything when using default drops

### SuperMartijn642's Core Library 1.1.17a

*   Fixed crash on dedicated server

### SuperMartijn642's Core Library 1.1.17

*   Initial release of SuperMartijn642's Core Library for Minecraft 1.21.2 & 1.21.3

## Icy's Better Horses
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/icys-better-horses)

### icys-better-horses-2.0.2-1.21.1-neo.jar


### icys-better-horses-2.0.1.jar


## Packed Packs
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/packed-packs)

### NeoForge v2.3.0-beta.1+1.21.1
*   Folder Packs are now discoverable recursively
*   Folder Packs can now be locked/unlocked
    *   Can be toggled from the folder view or from the metadata under the `module` flag.
    *   Locked folders behave exactly the same as regular folder packs.
        *   Nested folders within locked folder packs will be force-locked.
        *   Cannot be sorted
    *   An unlocked folder's children can be transferred outside the folder. ([#47](https://github.com/fishstiz/packed_packs/issues/47))
        *   Cannot itself be enabled, will instead be flattened.
        *   Can be sorted
        *   Folders cannot be unlocked from the enabled list.
    *   Folders are unlocked by default. Can be changed from the options menu.
    *   Existing folder packs prior to updating will be locked to preserve behavior.
*   Folder pack metadata files are no longer watched and are loaded immediately with the folder pack upon entering the screen.
*   Renaming a pack from the Packed Packs screen now also updates all profiles and folders that contain that pack.
*   Fixed search not working for folders.
*   Fixed being unable to drag non-required fixed position packs from the enabled list.

**API Changes**

*   Folders no longer trigger pack-related events (they are not `Pack`s anymore).
*   `PackContext` are now considered as `PackSelectionModel.Entry`
*   `ScreenContext#getAvailablePacks` and `ScreenContext#getSelectedPacks` now includes all descendants (flattened).

This is an unstable version, thing may break or change. Please report any issues [here](https://github.com/fishstiz/packed_packs/issues).

### NeoForge v2.2.4+1.21.11
*   Fixed exact aliases not updating the pack id in profiles ([#72](https://github.com/fishstiz/packed_packs/issues/72)).
*   Aliases can now resolve to a regex pack id when prefixed with `regex:`. The regex pack id will attempt to find the first pack with the matching id. This can only be done manually in the `config.meta.json` file for now.
    *   Example using an exact alias.
        
            {
              "aliases": {
                "file/test-pack v1.2.zip": "regex:file/test-pack v.*.zip"          
              }
            }
            
    *   Example using a regex alias:
        
            {
              "aliases": {
                "regex:file/test-pack v.*.zip": "regex:file/test-pack v.*.zip"          
              }
            }
            
    *   Note that `aliases` in the `config.meta.json` maps alias to canonical. Pack ids saved in configs but do not exist will attempt to find a matching key in the alias map. The value is the id of the would-be existing pack. If the mapped value is a regex id, then it will attempt to find an existing pack that matches the regex.

## Farming for Blockheads
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/farming-for-blockheads)

### farmingforblockheads-neoforge-1.21.1-21.1.14.jar
- Fixed recipe error log spam on load

## AllTheLeaks (Memory Leak Fix)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/alltheleaks)

### alltheleaks-1.1.13+1.21.1-neoforge.jar
*   fixed Eternal Starlight when using Ingredient dedupe

## Lootr (Forge & NeoForge)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/lootr)

### lootr-neoforge-1.21.1-1.11.38.127
*   Fix refresh/decay sync for entities. [(000c8bb6)](https://github.com/noobanidus/Lootr/commit/000c8bb6)
*   Bump version for release. [(9fc45432)](https://github.com/noobanidus/Lootr/commit/9fc45432)
*   New Crowdin updates (#911) [(50974be2)](https://github.com/noobanidus/Lootr/commit/50974be2)
*   Tweak delay -> notification delay (translation) [(c41eba80)](https://github.com/noobanidus/Lootr/commit/c41eba80)
*   Register network packet properly on Fabric. [(c47a5f53)](https://github.com/noobanidus/Lootr/commit/c47a5f53)
*   One day I will make the translation keys correctly. [(b1ee2e9c)](https://github.com/noobanidus/Lootr/commit/b1ee2e9c)
*   Merge branch 'mdg-1.21.1' of [https://github.com/noobanidus/Lootr](https://github.com/noobanidus/Lootr) into mdg-1.21.1 [(5e433b8e)](https://github.com/noobanidus/Lootr/commit/5e433b8e)
*   More adjustments. [(295e764b)](https://github.com/noobanidus/Lootr/commit/295e764b)
*   New Crowdin updates (#910) [(31e8a656)](https://github.com/noobanidus/Lootr/commit/31e8a656)
*   Further tweaks. [(8d78f92c)](https://github.com/noobanidus/Lootr/commit/8d78f92c)
*   Merge branch 'mdg-1.21.1' of [https://github.com/noobanidus/Lootr](https://github.com/noobanidus/Lootr) into mdg-1.21.1 [(1ed244a2)](https://github.com/noobanidus/Lootr/commit/1ed244a2)
*   Fix #667: toasts! [(fc7402ae)](https://github.com/noobanidus/Lootr/commit/fc7402ae)
*   More work on #667: toast system. [(016cc6bf)](https://github.com/noobanidus/Lootr/commit/016cc6bf)
*   New Crowdin updates (#909) [(5e2981bf)](https://github.com/noobanidus/Lootr/commit/5e2981bf)
*   Begin work on #667 [(607931bd)](https://github.com/noobanidus/Lootr/commit/607931bd)
*   Refresh particles. [(eb2d6249)](https://github.com/noobanidus/Lootr/commit/eb2d6249)
*   Decay particles, re-generate resources. [(83c88240)](https://github.com/noobanidus/Lootr/commit/83c88240)
*   Extend the section refresh to include block entities. [(55c186d1)](https://github.com/noobanidus/Lootr/commit/55c186d1)
*   Merge branch 'mdg-1.21.1' of [https://github.com/noobanidus/Lootr](https://github.com/noobanidus/Lootr) into mdg-1.21.1 [(8d439032)](https://github.com/noobanidus/Lootr/commit/8d439032)
*   Support for firing "init" for resolvers. [(fe2692b6)](https://github.com/noobanidus/Lootr/commit/fe2692b6)
*   Synchronize teams configuration to client. [(06e03c0d)](https://github.com/noobanidus/Lootr/commit/06e03c0d)
*   New translations en_us.json (Russian) (#908) [(c68442da)](https://github.com/noobanidus/Lootr/commit/c68442da)
*   Bump version for maven. [(295d226e)](https://github.com/noobanidus/Lootr/commit/295d226e)

### lootr-neoforge-1.21.1-1.11.38.126
*   Bump version for release. [(abd5c5df)](https://github.com/noobanidus/Lootr/commit/abd5c5df)
*   New Crowdin updates (#906) [(9827a03b)](https://github.com/noobanidus/Lootr/commit/9827a03b)
*   Merge branch 'mdg-1.21.1' of [https://github.com/noobanidus/Lootr](https://github.com/noobanidus/Lootr) into mdg-1.21.1 [(8df92e5f)](https://github.com/noobanidus/Lootr/commit/8df92e5f)
*   Implement service-based problematic loot chests. [(5227d5f7)](https://github.com/noobanidus/Lootr/commit/5227d5f7)
*   Fix pinning team resolvers. [(48aef916)](https://github.com/noobanidus/Lootr/commit/48aef916)
*   Remove handled TODOs. [(878b61d2)](https://github.com/noobanidus/Lootr/commit/878b61d2)
*   Fix rename mess-up. [(85e2dd84)](https://github.com/noobanidus/Lootr/commit/85e2dd84)
*   Properly handle entity open status for team changes. [(86e2d81c)](https://github.com/noobanidus/Lootr/commit/86e2d81c)
*   Switch to client-side resolution where needed. [(d53baa0e)](https://github.com/noobanidus/Lootr/commit/d53baa0e)
*   Never mind, pointless micro-optimization. [(d1f04313)](https://github.com/noobanidus/Lootr/commit/d1f04313)
*   Begin work on teams system. [(869de540)](https://github.com/noobanidus/Lootr/commit/869de540)
*   New translations en_us.json (Russian) (#903) [(56990e9b)](https://github.com/noobanidus/Lootr/commit/56990e9b)
*   New Crowdin updates (#900) [(f6c58a7f)](https://github.com/noobanidus/Lootr/commit/f6c58a7f)
*   Adjust particles. [(01d7bdf0)](https://github.com/noobanidus/Lootr/commit/01d7bdf0)
*   Merge branch 'mdg-1.21.1' of [https://github.com/noobanidus/Lootr](https://github.com/noobanidus/Lootr) into mdg-1.21.1 [(8df3bcb2)](https://github.com/noobanidus/Lootr/commit/8df3bcb2)
*   Feature: break to loot. [(ad55187b)](https://github.com/noobanidus/Lootr/commit/ad55187b)
*   Undo memoization of visual openers. [(42f9caa2)](https://github.com/noobanidus/Lootr/commit/42f9caa2)
*   Simplify particle checks. [(63735538)](https://github.com/noobanidus/Lootr/commit/63735538)
*   New Crowdin updates (#896) [(c063b69d)](https://github.com/noobanidus/Lootr/commit/c063b69d)
*   Fix backwards compatibility. [(3801f493)](https://github.com/noobanidus/Lootr/commit/3801f493)
*   Back-port the new command system. [(abdee59e)](https://github.com/noobanidus/Lootr/commit/abdee59e)
*   New translations en_us.json (Russian) (#892) [(85e0bdb3)](https://github.com/noobanidus/Lootr/commit/85e0bdb3)
*   New Crowdin updates (#891) [(4aa68756)](https://github.com/noobanidus/Lootr/commit/4aa68756)
*   Bump version for maven. [(9ee21853)](https://github.com/noobanidus/Lootr/commit/9ee21853)

## Collective
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/collective)

### [Fabric/Forge/Neo] 1.21.1-8.40 | Collective
![What's new](https://cdn.serilum.com/description/nameplate/whats-new.svg)
--------------------------------------------------------------------------

Normalized the indentation of all Collective source files to tabs, no functional changes.

  
  
  

![Historic changelog](https://cdn.serilum.com/description/nameplate/historic-changelog.svg)
-------------------------------------------------------------------------------------------

The complete changelog with detailed information about previous versions can be found on my website:  
 > [https://serilum.com/mods?changelog=collective](/linkout?remoteUrl=https%253a%252f%252fserilum.com%252fmods%253fchangelog%253dcollective)

  
  
  

![Thank you](https://cdn.serilum.com/description/nameplate/thank-you.svg)
-------------------------------------------------------------------------

**To the following people** for supporting this mod's development! Downloading is already more than enough. But if you would like to contribute too and have your name here, check out [serilum.com/donate](/linkout?remoteUrl=https%253a%252f%252fserilum.com%252fdonate).  
  
![Andrean Olgo](https://workflow.serilum.com/membership/data/member-badges/andrean-olgo.svg) ![AnyankaT](https://workflow.serilum.com/membership/data/member-badges/anyankat.svg) ![aternosorg](https://workflow.serilum.com/membership/data/member-badges/aternosorg.svg) ![Cherriesaurus](https://workflow.serilum.com/membership/data/member-badges/cherriesaurus.svg) ![Linda Jansen](https://workflow.serilum.com/membership/data/member-badges/linda-jansen.svg) ![MWS](https://workflow.serilum.com/membership/data/member-badges/mws.svg) ![Tyler Behl](https://workflow.serilum.com/membership/data/member-badges/tyler-behl.svg)

## Waystones
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/waystones)

### waystones-neoforge-1.21.1-21.1.46.jar
- Added `/waystones cooldown <targets> add <identifier> <seconds>` and `/waystones cooldown <targets> set <identifier> <seconds>` commands  
- Fixed bound scrolls showing "invalid" for players who have not activated the target  
- Fixed lack of error message when warp requirement block scrolls from teleporting  
- Fixed scrolls costing XP when they shouldn't

## Trash Cans
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/trash-cans)

### Trash Cans 1.1.1 for NeoForge 1.21
### Trash Cans 1.1.1

*   Fixed crash due to `CustomSlot#isActive` being obfuscated
*   Fixed crash when saving deleted items with stack size of greater than 99

### Trash Cans 1.1.0

*   Added tab to retrieve up to the last 6 deleted items from the trash can screen
*   Added config option to disable retrieving deleted items
*   Improved item and fluid interaction with other mods
*   Added Japanese translations (thanks to EndilCrafter!)
*   Added Turkish translations (thanks to RuyaSavascisi!)
*   Updated Russian translations (thanks to Sakebaev!)
*   Fixed targets for dragging items for JEI being offset
*   Fixed dragging from JEI not working for fluids

### Trash Cans 1.0.18c

*   Fixed crash when breaking a trash can block which uses an enchanted item in its filter

### Trash Cans 1.0.18b

*   Fixed trash cans not connecting to Mekanism gas pipes

### Trash Cans 1.0.18a

*   Account for breaking changes in Mekanism

### Trash Cans 1.0.18

*   Initial release of Trash Cans for Minecraft 1.21

### Trash Cans 1.1.0 for NeoForge 1.21.11
### Trash Cans 1.1.0

*   Added tab to retrieve up to the last 6 deleted items from the trash can screen
*   Added config option to disable retrieving deleted items
*   Improved item and fluid interaction with other mods
*   Added Japanese translations (thanks to EndilCrafter!)
*   Added Turkish translations (thanks to RuyaSavascisi!)
*   Updated Russian translations (thanks to Sakebaev!)
*   Fixed targets for dragging items for JEI being offset
*   Fixed dragging from JEI not working for fluids

### Trash Cans 1.0.18

*   Initial release of Trash Cans for Minecraft 1.21.11

### Trash Cans 1.1.0 for NeoForge 1.21.10
### Trash Cans 1.1.0

*   Added tab to retrieve up to the last 6 deleted items from the trash can screen
*   Added config option to disable retrieving deleted items
*   Improved item and fluid interaction with other mods
*   Added Japanese translations (thanks to EndilCrafter!)
*   Added Turkish translations (thanks to RuyaSavascisi!)
*   Updated Russian translations (thanks to Sakebaev!)
*   Fixed targets for dragging items for JEI being offset
*   Fixed dragging from JEI not working for fluids

### Trash Cans 1.0.18

*   Initial release of Trash Cans for Minecraft 1.21.9 & 1.21.10

### Trash Cans 1.1.0 for NeoForge 1.21.8
### Trash Cans 1.1.0

*   Added tab to retrieve up to the last 6 deleted items from the trash can screen
*   Added config option to disable retrieving deleted items
*   Improved item and fluid interaction with other mods
*   Added Japanese translations (thanks to EndilCrafter!)
*   Added Turkish translations (thanks to RuyaSavascisi!)
*   Updated Russian translations (thanks to Sakebaev!)
*   Fixed targets for dragging items for JEI being offset
*   Fixed dragging from JEI not working for fluids

### Trash Cans 1.0.18

*   Initial release of Trash Cans for Minecraft 1.21.6 & 1.21.7

### Trash Cans 1.1.0 for NeoForge 1.21.5
### Trash Cans 1.1.0

*   Added tab to retrieve up to the last 6 deleted items from the trash can screen
*   Added config option to disable retrieving deleted items
*   Improved item and fluid interaction with other mods
*   Added Japanese translations (thanks to EndilCrafter!)
*   Added Turkish translations (thanks to RuyaSavascisi!)
*   Updated Russian translations (thanks to Sakebaev!)
*   Fixed targets for dragging items for JEI being offset
*   Fixed dragging from JEI not working for fluids

### Trash Cans 1.0.18

*   Initial release of Trash Cans for Minecraft 1.21.5

### Trash Cans 1.1.0 for NeoForge 1.21.4
### Trash Cans 1.1.0

*   Added tab to retrieve up to the last 6 deleted items from the trash can screen
*   Added config option to disable retrieving deleted items
*   Improved item and fluid interaction with other mods
*   Added Japanese translations (thanks to EndilCrafter!)
*   Added Turkish translations (thanks to RuyaSavascisi!)
*   Updated Russian translations (thanks to Sakebaev!)
*   Fixed targets for dragging items for JEI being offset
*   Fixed dragging from JEI not working for fluids

### Trash Cans 1.0.18

*   Initial release of Trash Cans for Minecraft 1.21.4

### Trash Cans 1.1.0 for NeoForge 1.21.3
### Trash Cans 1.1.0

*   Added tab to retrieve up to the last 6 deleted items from the trash can screen
*   Added config option to disable retrieving deleted items
*   Improved item and fluid interaction with other mods
*   Added Japanese translations (thanks to EndilCrafter!)
*   Added Turkish translations (thanks to RuyaSavascisi!)
*   Updated Russian translations (thanks to Sakebaev!)
*   Fixed targets for dragging items for JEI being offset
*   Fixed dragging from JEI not working for fluids

### Trash Cans 1.0.18a

*   Fixed crash when breaking a trash can block which uses an enchanted item in its filter

### Trash Cans 1.0.18

*   Initial release of Trash Cans for Minecraft 1.21.2 & 1.21.3

## Fusion (Connected Textures)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/fusion-connected-textures)

### Fusion 1.3.15b for NeoForge 1.21.1
### Fusion 1.3.15b

*   Fixed error when a connecting texture is rendered without world context and an empty tile is picked
*   Fixed translucent item models being invisible when graphics is set to 'Fabulous'

### Fusion 1.3.15a

*   Fixed animated textures using incorrect frame index when frames are not in sequential order

### Fusion 1.3.15

*   Fixed `ambientocclusion`, `shade`, and `emissive` model properties not always applying to texture types that have subtextures like `connecting` and `random`
*   Fixed `is_biome` predicate always evaluating to `false` for chunk geometry

### Fusion 1.3.14a

*   Fixed NeoForge model `render_type` property making models invisible if there is no other custom render type used
*   Fixed modded models using NeoForge's custom geometry being baked as regular models

### Fusion 1.3.14

*   Added `DefaultModelTypes#BLOCK_ENTITY_MARKER`
*   Fixed Fusion models with parent `minecraft:builtin/entity` not being marked as custom item renderer
*   Fixed `DefaultModelTypes#ITEM_MODEL_GENERATOR` not being registered
*   Fixed crash when Iris PBR texture has empty tiles resulting in a different number of sprites compared to regular texture

### Fusion 1.3.13

*   Added `TextureType#getBlockStateRenderTypes` which returns the render types that may be used by a texture
*   Added integration with Iris to intercept normal and specular maps for Fusion textures and handle them as Fusion textures
*   Fixed models without geometry being baked as missing model
*   Fixed sub-textures for `random` texture type receiving wrong texture data leading to a crash
*   Fixed crash when using `is_face_visible` connection predicate in an item model
*   Added a workaround for minimap mods not checking geometry for different render types
*   Fixed `pane_culling_fix` option making submodels not receive world context

### Fusion 1.3.12

*   Fixed `MutableQuad#chunkLayer` not always overwriting flags

### Fusion 1.3.11

*   Significantly reduced memory used by Fusion models
    *   Facing and chunk render type of `MutableQuad`s are now stored as bit flags
    *   `connecting` textures ignore non-default tiles when predicate is always true or always false
    *   `connecting` texture sub-texture data is now stored more compactly when some tiles are empty
    *   When `connecting` texture has no sub-texture, its tiles are initialized lazily

### Fusion 1.3.10

*   Fixed model item transforms (`display` property) translations not being scaled by 1/16th
*   Fixed models for blocks targeted by block model modifiers not receiving world context with Sodium
*   Fixed models sometimes failing to load with ModernFix' `dynamic_resources` option

### Fusion 1.3.9

*   Fixed `dimension` block model predicate not working for chunk geometry

### Fusion 1.3.8

*   Fixed crash when using `continuous` texture type as a sub texture for other texture types
*   Fixed models from block model modifiers grouped by random offset being submitted for all models' render types
*   Fixed models from block model modifiers grouped by random offset not receiving world context

### Fusion 1.3.7

*   Fixed crash when breaking blocks targeted by block model modifiers due to Mixin bug

### Fusion 1.3.6

*   Added `random_offset` property for block model modifier model entries to overwrite hardcoded block random offsets
*   Improved randomness of `random` texture type
*   Significantly reduced memory footprint of `MutableQuad`s and thus models from Fusion
*   Fixed item model modifiers always using the default model's transforms
*   Fixed `match_state_in_front` behaving as `match_state`
*   Fixed incorrect uv calculation when explicitly specifying frame indices for animated textures leading to it always showing the first frame
*   Fixed incorrect translucency handling for item models with translucent textures
*   Fixed any model with a `cuboid` parent being baked as a `cuboid` model
*   Fixed block model predicates being rotated incorrectly due to floating point errors
*   Fixed Forge/NeoForge `render_type` property not working for `cuboid` models

### Fusion 1.3.5

*   Directional model predicates, i.e. `match_block` and `match_state`, are now rotated along with `composite` model entries
*   Replaced vanilla default uv calculation of model elements with calculation that better handles elements outside the center block space
*   Fixed deserialization of item transforms (`display` property) for Fusion models
*   Fixed `match_block`, `match_state` model predicates and `match_block`, `match_state`, `match_block_in_front`, `match_state_in_front` connection predicates only using the last block from the `blocks` array property
*   Fixed origin being offset for `composite` model transforms
*   Fixed composition order of `composite` model transforms with blockstate file transforms
*   Added workaround for Sodium breaking animated texture interpolation

### Fusion 1.3.4

*   Fixed threading issue with `match_block` and `match_state` block predicates potentially leading to incorrect results or crashes
*   Fixed element face 'uv' property being ignored

### Fusion 1.3.3

*   Fixed deserialization of `dimension`, `match_block`, and `match_state` block predicates
*   Fixed deserialization of `dimension` entity predicate

### Fusion 1.3.2b

*   Fixed `overrides_folder` not working for mod resources

### Fusion 1.3.2a

*   Fixed crash when mods bake models outside the normal baking window

### Fusion 1.3.2

*   Fixed crash with Sodium reading dummy sprite contents
*   Fixed wrong render type being used for modded blocks that set a Forge override

### Fusion 1.3.1

*   Fixed `overlay` connecting texture layout producing way too many quads
*   Fixed `connections` property of connecting textures not working
*   Fixed base texture properties not working for `connecting` and `random` texture types
*   Fixed broken lighting for Fusion models
*   Fixed geometry of `base` models being duplicated
*   Fixed broken textures when ModernFix `mixin.perf.dynamic_resources` is enabled
*   Fixed crash with quick pack mod
*   Renamed `ConnectingModelData.ConnectingModelDataBuilder` to `ConnectingModelData.Builder`
*   Fixed `CuboidModelDataBuilder#material` calling itself
*   Fixed model materials map serialization not including '#' for references

### Fusion 1.3.0

*   Model related changes:
    *   Overhauled `ModelType` and how models are loaded:
        *   Any model with a Fusion model as parent will now be loaded as a Fusion model
    *   Changes for `base` model type:
        *   Model can now be made emissive, through `emissive` property
        *   Shading can now be disabled, through `shade` property
        *   Ambient occlusion can now be disabled, through `ambient_occlusion` property
        *   Lighting in guis can now be changed, through `gui_light` property
        *   Elements can now have `light_emission`, `emissive`, `shade`, `ambient_occlusion` properties
        *   Element faces can now have `light_emission`, `emissive`, `shade`, `ambient_occlusion` properties
    *   Overhauled block and item model modifiers:
        *   Added `priority` property
        *   Modifiers are now applied in order of `priority`, then file name, rather than 'random'
        *   Missing targets (like modded items/blocks) can now be ignored, through `ignore_missing_targets` property
        *   Added `default_model_overwrites` to allow changes the default model when item/block model predicates are met
        *   Added `append_models` to append models when item/block model predicates are met
        *   For block model modifiers, `show_breaking_overlay` can now be set per model entry
    *   Added block model predicates:
        *   Simple `true`, `false`, `and`, `or`, `not` types
        *   `match_block` checks whether the block at a certain offset matches certain blocks
        *   `match_state` checks whether the block at a certain offset matches certain blocks and state properties
        *   `biome` checks whether the block is in a biome
        *   `dimension` checks whether the block is in a dimension
        *   `altitude` checks whether the block's y-position is within a range
    *   Added item model predicates:
        *   Simple `true`, `false`, `and`, `or`, `not` types
        *   `count` checks if a stack's count is within a range
        *   `durability` checks if a stack's durability is within a range
        *   `enchantment` checks whether an enchantment is present has a certain level
        *   `match_name` checks whether an item's custom name matches a string or regex
        *   `potion` checks whether the stack has a potion type
    *   Added `composite` model type:
        *   Allows combining multiple models
        *   Models can be applied conditionally based on item and block predicates
        *   Models can be translated, scaled, and rotated
*   Texture related changes:
    *   Overhauled `TextureType` and how textures are loaded:
        *   Textures can now have multiple texture atlas sprites
        *   Textures can now have sub-textures
        *   Any model using a Fusion texture will now be loaded as a Fusion model
        *   Added generic quad processing for custom texture types
    *   Changes for `base` texture type:
        *   No longer requires a `base` model
    *   Changes for `connecting` texture type:
        *   No longer requires a `connecting` model
        *   Each tile is now its own sprite on the texture atlas
        *   Empty tiles (completely transparent) are ignored and not stitched or processed
        *   Tiles can now use a sub-texture type, through `sub_texture` property
        *   Animated image layout can now be per-tile, through `per_tile_animation` property
        *   Added an option for a default connection predicate, through `connections` property
        *   Changes to connection predicates:
            *   Added `true` and `false` types
            *   Added `ignore_missing` options for `match_block`, `match_state`, `match_block_in_front`, `match_state_in_front`
            *   Allow specifying multiple blocks for `match_block`, `match_state`, `match_block_in_front`, `match_state_in_front`
    *   Changes for `random` texture type:
        *   Each tile is now its own sprite on the texture atlas
        *   Empty tiles (completely transparent) are ignored and not stitched or processed
        *   Tiles can now use a sub-texture type, through `sub_texture` property
        *   Added randomness options `position`, `position_facing`, `position_axis`, through `random_source` property
        *   Animated image layout can now be per-tile, through `per_tile_animation` property
        *   Increased maximum `rows` and `columns` from 10 to 100
    *   Changes for `continuous` texture type:
        *   Default tile is now its own sprite on the texture atlas
        *   Increased maximum `rows` and `columns` from 10 to 32
    *   Changes for `scrolling` texture type:
        *   Added 'wrap' loop type to allow the frame to wrap around the image
*   General changes:
    *   Error messages are now printed in a user-friendly readable format
    *   Improved clarity of error messages
*   Bug fixes:
    *   Fixed handling of `full` layout connecting textures with a legacy square image
    *   Fixed inconsistent randomness for block model modifier models
    *   Fixed geometry key for block model modifiers
    *   Fixed handling of generated item models
    *   Fixed concurrency issue when using `pane_culling_fix` potentially leading to corrupted quads
    *   Fixed item transforms not getting serialized for base model data
    *   Fixed incorrect scaling of origin for rotation of base model data elements
    *   Fixed not all vanilla model properties being serializable through `cuboid` model type
    *   Fixed continuous textures not working correctly when rotated
    *   Fixed thin edges sometimes showing around connecting, continuous, and random textures
    *   Fixed sometimes broken mipmaps for Fusion textures on Minecraft 1.12
    *   Fixed integration with FramedBlocks on Minecraft 1.20.1 and 1.21.1
    *   Fixed inconsistent ordering of model modifiers on older Minecraft versions
    *   Fixed model ordering of appended models in block model modifiers not being maintained when some models are vanilla and some are not

### Fusion 1.2.12

*   Fixed handling of connections key references in connecting models
*   Fixed texture references added through base model data builder having an extra '#'

### Fusion 1.2.11e

*   Fixed `enchantment` item model modifier predicate not working for enchanted books

### Fusion 1.2.11d

*   Fixed block model modifier outputting quads from `WeightedBakedModel`s for all render types

### Fusion 1.2.11c

*   Fixed the breaking texture not showing on blocks targeted by a block model modifier

### Fusion 1.2.11b

*   Fixed Fusion's `pack.mcmeta` data not getting loaded for mod resources

### Fusion 1.2.11a

*   Fixed `show_breaking_overlay` option for block model modifiers not working

### Fusion 1.2.11

*   Added `show_breaking_overlay` option to block model modifiers to not show the breaking overlay for appended models
*   Fixed crash when modded model bakeries do not contain model modifiers' target models

### Fusion 1.2.10

*   Fixed all Fusion models loaded after any Fusion model has an error being broken

### Fusion 1.2.9

*   Fixed `pieced` layout when a quads' uv does not cover the entire sprite
*   Fixed connecting textures using connections for the wrong direction for rotated quads with mirrored uv in some cases

### Fusion 1.2.8

*   Added Hungarian translations (thanks to bayi!)
*   Ambient occlusion is now disabled for emissive quads
*   Fixed quads being emitted 7 times for `base` and `connecting` models when rendered as items
*   Fixed quads with different render types being ordered randomly for `base` and `connecting` models when rendered as items
*   Fixed inverted vertical tile ordering for `continuous` textures
*   Fixed `DefaultConnectionPredicates#isFaceVisible` returning `is_same_block` predicate
*   Fixed `NotConnectionPredicate` serialization being invalid
*   Fixed render type hint from NeoForge's model format being ignored
*   Fixed crash when evaluating `biome` and `dimension` entity predicate
*   Fixed `random` texture seed always being 0 for bottom side
*   Fixed overrides folder not working for resource packs which use vanilla resource overlays
*   Fixed entity model modifiers using model for incorrect layer when targeting entities with multiple vanilla layers

### Fusion 1.2.7b

*   Fixed integration with FramedBlocks

### Fusion 1.2.7a

*   Moved connection evaluation for connecting models fixing Fusion caching issue when combined with FramedBlocks

### Fusion 1.2.7

*   Fixed argument validation for `count` and `durability` item predicates

### Fusion 1.2.6a

*   Fixed `connecting` and `base` models not always using correct render type when rendered as items

### Fusion 1.2.6

*   Added data providers for block model modifiers and item model modifiers

### Fusion 1.2.5

*   Fixed emissive quads not being quite as bright as they should be

### Fusion 1.2.4

*   Fixed vertex permutations for rotated textures being wrong and hence `pieced` layout not looking correct when rotated
*   Fixed non-custom render type quads not being rendered in item models for `base` and `connecting` models
*   Files generated through `FusionModelProvider` are now tracked in the existing file helper

### Fusion 1.2.3

*   Added special casing for `builtin/generated` parent model to make it work properly
*   Added Turkish translations (thanks to RuyaSavascisi!)

### Fusion 1.2.2a

*   Fixed crash when obtaining model data for a multipart model

### Fusion 1.2.2

*   Fixed `pane_culling_fix` culling being inverted, culling only quads which should not be
*   Fixed crash when mods use non-resource characters in model layer names

### Fusion 1.2.1

*   Fixed texture references overwriting model references in connecting models
*   Fixed block model modifiers with only `pane_culling_fix` option getting ignored

### Fusion 1.2.0

*   Added base model type
    *   Allows for processing random and continuous textures
    *   Base models can have multiple parent models
    *   Connecting model type inherits all properties from the base model type
*   Added base texture type
    *   Allows specifying emissiveness, custom render type, and custom tinting function
    *   Added `biome_grass`, `biome_foliage`, and `biome_water` tinting functions
    *   All texture types inherit properties from base texture type
*   Added block model modifiers
    *   Allows overlaying additional models onto blocks
    *   Added `pane_culling_fix` to cull the top/bottom quads of glass panes
*   Added item model modifiers
    *   Allows for conditionally changing item models
    *   Added `count`, `durability`, `enchantment`, and `potion` item predicates
*   Added custom entity models
*   Added entity model modifiers
    *   Allows for random or conditional entity models and textures
    *   Added `altitude`, `is_baby`, `biome`, and `dimension` entity predicates
*   Added a warning screen when a resource pack requires a newer Fusion version than the one installed
*   Added `pieced` connecting texture layout allowing bordered textures from only a few tiles
*   Added `overlay` connecting texture layout intended for block overlays
*   All Fusion texture types can now be animated
*   Added continuous texture type for textures which span multiple blocks
*   Added random texture type for randomly choosing from a number of variations
*   Connecting models now allow specifying a `connections` key similar to the `texture` key
*   Added `match_block_in_front`, `match_state_in_front`, and `is_direction` connection predicates
*   Improved error messages for `match_state` connection predicate
*   Drastically improved performance of connecting models
*   Added compatibility for Embeddium, Iris, ModernFix, Oculus, Rubidium, Sodium, and VintageFix
*   Removed empty space from the `full` connecting texture layout
*   Fixed `match_state` predicate not working correctly when not all block state properties are specified
*   Fixed incorrect connections for connected textures when using UV lock or texture rotations
*   Fixed specifying connections per texture in connecting models not working correctly
*   Fixed connecting model sometimes using the wrong render type
*   Fixed caching states in connecting model sometimes leading to incorrect connections

### Fusion 1.1.1a

*   Fixed 'Model loader not found' errors

### Fusion 1.1.1

*   Initial release of Fusion for Minecraft 1.20.5 & 1.20.6

### Fusion 1.3.15a for NeoForge 1.21.9
### Fusion 1.3.15a

*   Fixed animated textures using incorrect frame index when frames are not in sequential order

### Fusion 1.3.15

*   Fixed `ambientocclusion`, `shade`, and `emissive` model properties not always applying to texture types that have subtextures like `connecting` and `random`
*   Fixed `is_biome` predicate always evaluating to `false` for chunk geometry

### Fusion 1.3.14a

*   Fixed NeoForge model `render_type` property making models invisible if there is no other custom render type used

### Fusion 1.3.14

*   Fixed `DefaultModelTypes#ITEM_MODEL_GENERATOR` not being registered
*   Fixed crash when Iris PBR texture has empty tiles resulting in a different number of sprites compared to regular texture

### Fusion 1.3.13

*   Added `TextureType#getBlockStateRenderTypes` which returns the render types that may be used by a texture
*   Added integration with Iris to intercept normal and specular maps for Fusion textures and handle them as Fusion textures
*   Fixed models without geometry being baked as missing model
*   Fixed sub-textures for `random` texture type receiving wrong texture data leading to a crash
*   Fixed crash when using `is_face_visible` connection predicate in an item model
*   Added a workaround for minimap mods not checking geometry for different render types
*   Fixed model lighting sometimes being incorrect with Sodium installed due to precision errors when checking whether model transform is limited to rotations of 90 degrees

### Fusion 1.3.12

*   Fixed `MutableQuad#chunkLayer` not always overwriting flags

### Fusion 1.3.11

*   Significantly reduced memory used by Fusion models
    *   Facing and chunk render type of `MutableQuad`s are now stored as bit flags
    *   `connecting` textures ignore non-default tiles when predicate is always true or always false
    *   `connecting` texture sub-texture data is now stored more compactly when some tiles are empty
    *   When `connecting` texture has no sub-texture, its tiles are initialized lazily

### Fusion 1.3.10

*   Fixed model item transforms (`display` property) translations not being scaled by 1/16th

### Fusion 1.3.9

*   Fixed `dimension` block model predicate not working for chunk geometry

### Fusion 1.3.8

*   Fixed crash when using `continuous` texture type as a sub texture for other texture types
*   Fixed crash when breaking a block targeted by a block model modifier

### Fusion 1.3.7

*   Fixed crash when breaking blocks targeted by block model modifiers due to Mixin bug

### Fusion 1.3.6

*   Added `random_offset` property for block model modifier model entries to overwrite hardcoded block random offsets
*   Improved randomness of `random` texture type
*   Significantly reduced memory footprint of `MutableQuad`s and thus models from Fusion
*   Fixed `match_state_in_front` behaving as `match_state`
*   Fixed incorrect uv calculation when explicitly specifying frame indices for animated textures leading to it always showing the first frame
*   Fixed block model predicates being rotated incorrectly due to floating point errors
*   Fixed `composite` model parents not being loaded

### Fusion 1.3.5

*   Directional model predicates, i.e. `match_block` and `match_state`, are now rotated along with `composite` model entries
*   Replaced vanilla default uv calculation of model elements with calculation that better handles elements outside the center block space
*   Fixed deserialization of item transforms (`display` property) for Fusion models
*   Fixed `match_block`, `match_state` model predicates and `match_block`, `match_state`, `match_block_in_front`, `match_state_in_front` connection predicates only using the last block from the `blocks` array property
*   Fixed origin being offset for `composite` model transforms
*   Fixed composition order of `composite` model transforms with blockstate file transforms
*   Fixed vanilla uv-lock handling breaking for model transforms that translate or scale the model
*   Added workaround for Sodium breaking animated texture interpolation

### Fusion 1.3.4

*   Fixed threading issue with `match_block` and `match_state` block predicates potentially leading to incorrect results or crashes
*   Fixed element face 'uv' property being ignored

### Fusion 1.3.3

*   Fixed deserialization of `dimension`, `match_block`, and `match_state` block predicates
*   Fixed deserialization of `dimension` entity predicate

### Fusion 1.3.2b

*   Fixed `overrides_folder` not working for mod resources

### Fusion 1.3.2a

*   Fixed crash when mods bake models outside the normal baking window
*   Fixed crash when creating texture animation frames

### Fusion 1.3.2

*   Fixed crash with Sodium reading dummy sprite contents
*   Fixed connecting texture predicate resolution for item models

### Fusion 1.3.1

*   Fixed `overlay` connecting texture layout producing way too many quads
*   Fixed `connections` property of connecting textures not working
*   Fixed base texture properties not working for `connecting` and `random` texture types
*   Fixed geometry of `base` models being duplicated
*   Fixed crash with quick pack mod
*   Renamed `ConnectingModelData.ConnectingModelDataBuilder` to `ConnectingModelData.Builder`
*   Fixed `CuboidModelDataBuilder#material` calling itself
*   Fixed model materials map serialization not including '#' for references

### Fusion 1.3.0

*   Model related changes:
    *   Overhauled `ModelType` and how models are loaded:
        *   Any model with a Fusion model as parent will now be loaded as a Fusion model
    *   Changes for `base` model type:
        *   Model can now be made emissive, through `emissive` property
        *   Shading can now be disabled, through `shade` property
        *   Ambient occlusion can now be disabled, through `ambient_occlusion` property
        *   Lighting in guis can now be changed, through `gui_light` property
        *   Elements can now have `light_emission`, `emissive`, `shade`, `ambient_occlusion` properties
        *   Element faces can now have `light_emission`, `emissive`, `shade`, `ambient_occlusion` properties
    *   Overhauled block and item model modifiers:
        *   Added `priority` property
        *   Modifiers are now applied in order of `priority`, then file name, rather than 'random'
        *   Missing targets (like modded items/blocks) can now be ignored, through `ignore_missing_targets` property
        *   Added `default_model_overwrites` to allow changes the default model when item/block model predicates are met
        *   Added `append_models` to append models when item/block model predicates are met
        *   For block model modifiers, `show_breaking_overlay` can now be set per model entry
    *   Added block model predicates:
        *   Simple `true`, `false`, `and`, `or`, `not` types
        *   `match_block` checks whether the block at a certain offset matches certain blocks
        *   `match_state` checks whether the block at a certain offset matches certain blocks and state properties
        *   `biome` checks whether the block is in a biome
        *   `dimension` checks whether the block is in a dimension
        *   `altitude` checks whether the block's y-position is within a range
    *   Added item model predicates:
        *   Simple `true`, `false`, `and`, `or`, `not` types
        *   `count` checks if a stack's count is within a range
        *   `durability` checks if a stack's durability is within a range
        *   `enchantment` checks whether an enchantment is present has a certain level
        *   `match_name` checks whether an item's custom name matches a string or regex
        *   `potion` checks whether the stack has a potion type
    *   Added `composite` model type:
        *   Allows combining multiple models
        *   Models can be applied conditionally based on item and block predicates
        *   Models can be translated, scaled, and rotated
*   Texture related changes:
    *   Overhauled `TextureType` and how textures are loaded:
        *   Textures can now have multiple texture atlas sprites
        *   Textures can now have sub-textures
        *   Any model using a Fusion texture will now be loaded as a Fusion model
        *   Added generic quad processing for custom texture types
    *   Changes for `base` texture type:
        *   No longer requires a `base` model
    *   Changes for `connecting` texture type:
        *   No longer requires a `connecting` model
        *   Each tile is now its own sprite on the texture atlas
        *   Empty tiles (completely transparent) are ignored and not stitched or processed
        *   Tiles can now use a sub-texture type, through `sub_texture` property
        *   Animated image layout can now be per-tile, through `per_tile_animation` property
        *   Added an option for a default connection predicate, through `connections` property
        *   Changes to connection predicates:
            *   Added `true` and `false` types
            *   Added `ignore_missing` options for `match_block`, `match_state`, `match_block_in_front`, `match_state_in_front`
            *   Allow specifying multiple blocks for `match_block`, `match_state`, `match_block_in_front`, `match_state_in_front`
    *   Changes for `random` texture type:
        *   Each tile is now its own sprite on the texture atlas
        *   Empty tiles (completely transparent) are ignored and not stitched or processed
        *   Tiles can now use a sub-texture type, through `sub_texture` property
        *   Added randomness options `position`, `position_facing`, `position_axis`, through `random_source` property
        *   Animated image layout can now be per-tile, through `per_tile_animation` property
        *   Increased maximum `rows` and `columns` from 10 to 100
    *   Changes for `continuous` texture type:
        *   Default tile is now its own sprite on the texture atlas
        *   Increased maximum `rows` and `columns` from 10 to 32
    *   Changes for `scrolling` texture type:
        *   Added 'wrap' loop type to allow the frame to wrap around the image
*   General changes:
    *   Error messages are now printed in a user-friendly readable format
    *   Improved clarity of error messages
*   Bug fixes:
    *   Fixed handling of `full` layout connecting textures with a legacy square image
    *   Fixed inconsistent randomness for block model modifier models
    *   Fixed geometry key for block model modifiers
    *   Fixed handling of generated item models
    *   Fixed concurrency issue when using `pane_culling_fix` potentially leading to corrupted quads
    *   Fixed item transforms not getting serialized for base model data
    *   Fixed incorrect scaling of origin for rotation of base model data elements
    *   Fixed not all vanilla model properties being serializable through `cuboid` model type
    *   Fixed continuous textures not working correctly when rotated
    *   Fixed thin edges sometimes showing around connecting, continuous, and random textures
    *   Fixed sometimes broken mipmaps for Fusion textures on Minecraft 1.12
    *   Fixed integration with FramedBlocks on Minecraft 1.20.1 and 1.21.1
    *   Fixed inconsistent ordering of model modifiers on older Minecraft versions
    *   Fixed model ordering of appended models in block model modifiers not being maintained when some models are vanilla and some are not

### Fusion 1.2.12

*   Fixed handling of connections key references in connecting models
*   Fixed texture references added through base model data builder having an extra '#'

### Fusion 1.2.11d

*   Fixed `enchantment` item model modifier predicate not working for enchanted books

### Fusion 1.2.11c

*   Fixed crash when using NeoForge 21.9.14-beta and newer with other mods

### Fusion 1.2.11b

*   Fixed overrides folder property not working with NeoForge `JarContentsPackResources`

### Fusion 1.2.11a

*   Fixed Fusion's `pack.mcmeta` data not getting loaded for mod resources

### Fusion 1.2.11

*   Initial release of Fusion for Minecraft 1.21.9

### Fusion 1.3.15a for NeoForge 1.21.8
### Fusion 1.3.15a

*   Fixed animated textures using incorrect frame index when frames are not in sequential order

### Fusion 1.3.15

*   Fixed `ambientocclusion`, `shade`, and `emissive` model properties not always applying to texture types that have subtextures like `connecting` and `random`
*   Fixed `is_biome` predicate always evaluating to `false` for chunk geometry

### Fusion 1.3.14a

*   Fixed NeoForge model `render_type` property making models invisible if there is no other custom render type used

### Fusion 1.3.14

*   Fixed `DefaultModelTypes#ITEM_MODEL_GENERATOR` not being registered
*   Fixed crash when Iris PBR texture has empty tiles resulting in a different number of sprites compared to regular texture

### Fusion 1.3.13

*   Added `TextureType#getBlockStateRenderTypes` which returns the render types that may be used by a texture
*   Added integration with Iris to intercept normal and specular maps for Fusion textures and handle them as Fusion textures
*   Fixed models without geometry being baked as missing model
*   Fixed sub-textures for `random` texture type receiving wrong texture data leading to a crash
*   Fixed crash when using `is_face_visible` connection predicate in an item model
*   Added a workaround for minimap mods not checking geometry for different render types
*   Fixed model lighting sometimes being incorrect with Sodium installed due to precision errors when checking whether model transform is limited to rotations of 90 degrees

### Fusion 1.3.12

*   Fixed `MutableQuad#chunkLayer` not always overwriting flags

### Fusion 1.3.11

*   Significantly reduced memory used by Fusion models
    *   Facing and chunk render type of `MutableQuad`s are now stored as bit flags
    *   `connecting` textures ignore non-default tiles when predicate is always true or always false
    *   `connecting` texture sub-texture data is now stored more compactly when some tiles are empty
    *   When `connecting` texture has no sub-texture, its tiles are initialized lazily

### Fusion 1.3.10

*   Fixed model item transforms (`display` property) translations not being scaled by 1/16th

### Fusion 1.3.9

*   Fixed `dimension` block model predicate not working for chunk geometry

### Fusion 1.3.8

*   Fixed crash when using `continuous` texture type as a sub texture for other texture types
*   Fixed crash when breaking a block targeted by a block model modifier

### Fusion 1.3.7

*   Fixed crash when breaking blocks targeted by block model modifiers due to Mixin bug

### Fusion 1.3.6

*   Added `random_offset` property for block model modifier model entries to overwrite hardcoded block random offsets
*   Improved randomness of `random` texture type
*   Significantly reduced memory footprint of `MutableQuad`s and thus models from Fusion
*   Fixed `match_state_in_front` behaving as `match_state`
*   Fixed incorrect uv calculation when explicitly specifying frame indices for animated textures leading to it always showing the first frame
*   Fixed block model predicates being rotated incorrectly due to floating point errors
*   Fixed `composite` model parents not being loaded

### Fusion 1.3.5

*   Directional model predicates, i.e. `match_block` and `match_state`, are now rotated along with `composite` model entries
*   Replaced vanilla default uv calculation of model elements with calculation that better handles elements outside the center block space
*   Fixed deserialization of item transforms (`display` property) for Fusion models
*   Fixed `match_block`, `match_state` model predicates and `match_block`, `match_state`, `match_block_in_front`, `match_state_in_front` connection predicates only using the last block from the `blocks` array property
*   Fixed origin being offset for `composite` model transforms
*   Fixed composition order of `composite` model transforms with blockstate file transforms
*   Fixed vanilla uv-lock handling breaking for model transforms that translate or scale the model
*   Added workaround for Sodium breaking animated texture interpolation

### Fusion 1.3.4

*   Fixed threading issue with `match_block` and `match_state` block predicates potentially leading to incorrect results or crashes
*   Fixed element face 'uv' property being ignored

### Fusion 1.3.3

*   Fixed deserialization of `dimension`, `match_block`, and `match_state` block predicates
*   Fixed deserialization of `dimension` entity predicate

### Fusion 1.3.2b

*   Fixed `overrides_folder` not working for mod resources

### Fusion 1.3.2a

*   Fixed crash when mods bake models outside the normal baking window
*   Fixed crash when creating texture animation frames

### Fusion 1.3.2

*   Fixed crash with Sodium reading dummy sprite contents
*   Fixed connecting texture predicate resolution for item models

### Fusion 1.3.1

*   Fixed `overlay` connecting texture layout producing way too many quads
*   Fixed `connections` property of connecting textures not working
*   Fixed base texture properties not working for `connecting` and `random` texture types
*   Fixed geometry of `base` models being duplicated
*   Fixed crash with quick pack mod
*   Renamed `ConnectingModelData.ConnectingModelDataBuilder` to `ConnectingModelData.Builder`
*   Fixed `CuboidModelDataBuilder#material` calling itself
*   Fixed model materials map serialization not including '#' for references

### Fusion 1.3.0

*   Model related changes:
    *   Overhauled `ModelType` and how models are loaded:
        *   Any model with a Fusion model as parent will now be loaded as a Fusion model
    *   Changes for `base` model type:
        *   Model can now be made emissive, through `emissive` property
        *   Shading can now be disabled, through `shade` property
        *   Ambient occlusion can now be disabled, through `ambient_occlusion` property
        *   Lighting in guis can now be changed, through `gui_light` property
        *   Elements can now have `light_emission`, `emissive`, `shade`, `ambient_occlusion` properties
        *   Element faces can now have `light_emission`, `emissive`, `shade`, `ambient_occlusion` properties
    *   Overhauled block and item model modifiers:
        *   Added `priority` property
        *   Modifiers are now applied in order of `priority`, then file name, rather than 'random'
        *   Missing targets (like modded items/blocks) can now be ignored, through `ignore_missing_targets` property
        *   Added `default_model_overwrites` to allow changes the default model when item/block model predicates are met
        *   Added `append_models` to append models when item/block model predicates are met
        *   For block model modifiers, `show_breaking_overlay` can now be set per model entry
    *   Added block model predicates:
        *   Simple `true`, `false`, `and`, `or`, `not` types
        *   `match_block` checks whether the block at a certain offset matches certain blocks
        *   `match_state` checks whether the block at a certain offset matches certain blocks and state properties
        *   `biome` checks whether the block is in a biome
        *   `dimension` checks whether the block is in a dimension
        *   `altitude` checks whether the block's y-position is within a range
    *   Added item model predicates:
        *   Simple `true`, `false`, `and`, `or`, `not` types
        *   `count` checks if a stack's count is within a range
        *   `durability` checks if a stack's durability is within a range
        *   `enchantment` checks whether an enchantment is present has a certain level
        *   `match_name` checks whether an item's custom name matches a string or regex
        *   `potion` checks whether the stack has a potion type
    *   Added `composite` model type:
        *   Allows combining multiple models
        *   Models can be applied conditionally based on item and block predicates
        *   Models can be translated, scaled, and rotated
*   Texture related changes:
    *   Overhauled `TextureType` and how textures are loaded:
        *   Textures can now have multiple texture atlas sprites
        *   Textures can now have sub-textures
        *   Any model using a Fusion texture will now be loaded as a Fusion model
        *   Added generic quad processing for custom texture types
    *   Changes for `base` texture type:
        *   No longer requires a `base` model
    *   Changes for `connecting` texture type:
        *   No longer requires a `connecting` model
        *   Each tile is now its own sprite on the texture atlas
        *   Empty tiles (completely transparent) are ignored and not stitched or processed
        *   Tiles can now use a sub-texture type, through `sub_texture` property
        *   Animated image layout can now be per-tile, through `per_tile_animation` property
        *   Added an option for a default connection predicate, through `connections` property
        *   Changes to connection predicates:
            *   Added `true` and `false` types
            *   Added `ignore_missing` options for `match_block`, `match_state`, `match_block_in_front`, `match_state_in_front`
            *   Allow specifying multiple blocks for `match_block`, `match_state`, `match_block_in_front`, `match_state_in_front`
    *   Changes for `random` texture type:
        *   Each tile is now its own sprite on the texture atlas
        *   Empty tiles (completely transparent) are ignored and not stitched or processed
        *   Tiles can now use a sub-texture type, through `sub_texture` property
        *   Added randomness options `position`, `position_facing`, `position_axis`, through `random_source` property
        *   Animated image layout can now be per-tile, through `per_tile_animation` property
        *   Increased maximum `rows` and `columns` from 10 to 100
    *   Changes for `continuous` texture type:
        *   Default tile is now its own sprite on the texture atlas
        *   Increased maximum `rows` and `columns` from 10 to 32
    *   Changes for `scrolling` texture type:
        *   Added 'wrap' loop type to allow the frame to wrap around the image
*   General changes:
    *   Error messages are now printed in a user-friendly readable format
    *   Improved clarity of error messages
*   Bug fixes:
    *   Fixed handling of `full` layout connecting textures with a legacy square image
    *   Fixed inconsistent randomness for block model modifier models
    *   Fixed geometry key for block model modifiers
    *   Fixed handling of generated item models
    *   Fixed concurrency issue when using `pane_culling_fix` potentially leading to corrupted quads
    *   Fixed item transforms not getting serialized for base model data
    *   Fixed incorrect scaling of origin for rotation of base model data elements
    *   Fixed not all vanilla model properties being serializable through `cuboid` model type
    *   Fixed continuous textures not working correctly when rotated
    *   Fixed thin edges sometimes showing around connecting, continuous, and random textures
    *   Fixed sometimes broken mipmaps for Fusion textures on Minecraft 1.12
    *   Fixed integration with FramedBlocks on Minecraft 1.20.1 and 1.21.1
    *   Fixed inconsistent ordering of model modifiers on older Minecraft versions
    *   Fixed model ordering of appended models in block model modifiers not being maintained when some models are vanilla and some are not

### Fusion 1.2.12

*   Fixed handling of connections key references in connecting models
*   Fixed texture references added through base model data builder having an extra '#'

### Fusion 1.2.11b

*   Fixed `enchantment` item model modifier predicate not working for enchanted books

### Fusion 1.2.11a

*   Fixed Fusion's `pack.mcmeta` data not getting loaded for mod resources

### Fusion 1.2.11

*   Added `show_breaking_overlay` option to block model modifiers to not show the breaking overlay for appended models
*   Fixed crash when modded model bakeries do not contain model modifiers' target models

### Fusion 1.2.10

*   Fixed all Fusion models loaded after any Fusion model has an error being broken

### Fusion 1.2.9a

*   Fixed crash when using model modifiers with mods using Puzzles Lib installed

### Fusion 1.2.9

*   Fixed `pieced` layout when a quads' uv does not cover the entire sprite
*   Fixed connecting textures using connections for the wrong direction for rotated quads with mirrored uv in some cases

### Fusion 1.2.8

*   Added Hungarian translations (thanks to bayi!)
*   Ambient occlusion is now disabled for emissive quads
*   Fixed quads with different render types being ordered randomly for `base` and `connecting` models when rendered as items
*   Fixed inverted vertical tile ordering for `continuous` textures
*   Fixed `DefaultConnectionPredicates#isFaceVisible` returning `is_same_block` predicate
*   Fixed `NotConnectionPredicate` serialization being invalid
*   Fixed `pane_culling_fix` discarding render type and ambient occlusion properties
*   Fixed crash when evaluating `biome` and `dimension` entity predicate
*   Fixed `random` texture seed always being 0 for bottom side
*   Fixed overrides folder not working for resource packs which use vanilla resource overlays
*   Fixed entity model modifiers using model for incorrect layer when targeting entities with multiple vanilla layers

### Fusion 1.2.7

*   Initial release of Fusion for Minecraft 1.21.6 & 1.21.7

### Fusion 1.3.15a for NeoForge 1.21.5
### Fusion 1.3.15a

*   Fixed animated textures using incorrect frame index when frames are not in sequential order

### Fusion 1.3.15

*   Fixed `ambientocclusion`, `shade`, and `emissive` model properties not always applying to texture types that have subtextures like `connecting` and `random`
*   Fixed `is_biome` predicate always evaluating to `false` for chunk geometry

### Fusion 1.3.14a

*   Fixed NeoForge model `render_type` property making models invisible if there is no other custom render type used

### Fusion 1.3.14

*   Fixed `DefaultModelTypes#ITEM_MODEL_GENERATOR` not being registered
*   Fixed crash when Iris PBR texture has empty tiles resulting in a different number of sprites compared to regular texture

### Fusion 1.3.13

*   Added `TextureType#getBlockStateRenderTypes` which returns the render types that may be used by a texture
*   Added integration with Iris to intercept normal and specular maps for Fusion textures and handle them as Fusion textures
*   Fixed models without geometry being baked as missing model
*   Fixed sub-textures for `random` texture type receiving wrong texture data leading to a crash
*   Fixed crash when using `is_face_visible` connection predicate in an item model
*   Added a workaround for minimap mods not checking geometry for different render types

### Fusion 1.3.12

*   Fixed `MutableQuad#chunkLayer` not always overwriting flags

### Fusion 1.3.11

*   Significantly reduced memory used by Fusion models
    *   Facing and chunk render type of `MutableQuad`s are now stored as bit flags
    *   `connecting` textures ignore non-default tiles when predicate is always true or always false
    *   `connecting` texture sub-texture data is now stored more compactly when some tiles are empty
    *   When `connecting` texture has no sub-texture, its tiles are initialized lazily

### Fusion 1.3.10

*   Fixed model item transforms (`display` property) translations not being scaled by 1/16th

### Fusion 1.3.9

*   Fixed `dimension` block model predicate not working for chunk geometry

### Fusion 1.3.8

*   Fixed crash when using `continuous` texture type as a sub texture for other texture types
*   Fixed crash when breaking a block targeted by a block model modifier

### Fusion 1.3.7

*   Fixed crash when breaking blocks targeted by block model modifiers due to Mixin bug

### Fusion 1.3.6

*   Added `random_offset` property for block model modifier model entries to overwrite hardcoded block random offsets
*   Improved randomness of `random` texture type
*   Significantly reduced memory footprint of `MutableQuad`s and thus models from Fusion
*   Fixed `match_state_in_front` behaving as `match_state`
*   Fixed incorrect uv calculation when explicitly specifying frame indices for animated textures leading to it always showing the first frame
*   Fixed block model predicates being rotated incorrectly due to floating point errors
*   Fixed `composite` model parents not being loaded

### Fusion 1.3.5

*   Directional model predicates, i.e. `match_block` and `match_state`, are now rotated along with `composite` model entries
*   Replaced vanilla default uv calculation of model elements with calculation that better handles elements outside the center block space
*   Fixed deserialization of item transforms (`display` property) for Fusion models
*   Fixed `match_block`, `match_state` model predicates and `match_block`, `match_state`, `match_block_in_front`, `match_state_in_front` connection predicates only using the last block from the `blocks` array property
*   Fixed origin being offset for `composite` model transforms
*   Fixed composition order of `composite` model transforms with blockstate file transforms
*   Fixed vanilla uv-lock handling breaking for model transforms that translate or scale the model
*   Added workaround for Sodium breaking animated texture interpolation

### Fusion 1.3.4

*   Fixed threading issue with `match_block` and `match_state` block predicates potentially leading to incorrect results or crashes
*   Fixed element face 'uv' property being ignored

### Fusion 1.3.3

*   Fixed deserialization of `dimension`, `match_block`, and `match_state` block predicates
*   Fixed deserialization of `dimension` entity predicate

### Fusion 1.3.2b

*   Fixed `overrides_folder` not working for mod resources

### Fusion 1.3.2a

*   Fixed crash when mods bake models outside the normal baking window
*   Fixed crash when creating texture animation frames

### Fusion 1.3.2

*   Fixed crash with Sodium reading dummy sprite contents
*   Fixed connecting texture predicate resolution for item models

### Fusion 1.3.1

*   Fixed `overlay` connecting texture layout producing way too many quads
*   Fixed `connections` property of connecting textures not working
*   Fixed base texture properties not working for `connecting` and `random` texture types
*   Fixed geometry of `base` models being duplicated
*   Fixed crash with quick pack mod
*   Renamed `ConnectingModelData.ConnectingModelDataBuilder` to `ConnectingModelData.Builder`
*   Fixed `CuboidModelDataBuilder#material` calling itself
*   Fixed model materials map serialization not including '#' for references

### Fusion 1.3.0

*   Model related changes:
    *   Overhauled `ModelType` and how models are loaded:
        *   Any model with a Fusion model as parent will now be loaded as a Fusion model
    *   Changes for `base` model type:
        *   Model can now be made emissive, through `emissive` property
        *   Shading can now be disabled, through `shade` property
        *   Ambient occlusion can now be disabled, through `ambient_occlusion` property
        *   Lighting in guis can now be changed, through `gui_light` property
        *   Elements can now have `light_emission`, `emissive`, `shade`, `ambient_occlusion` properties
        *   Element faces can now have `light_emission`, `emissive`, `shade`, `ambient_occlusion` properties
    *   Overhauled block and item model modifiers:
        *   Added `priority` property
        *   Modifiers are now applied in order of `priority`, then file name, rather than 'random'
        *   Missing targets (like modded items/blocks) can now be ignored, through `ignore_missing_targets` property
        *   Added `default_model_overwrites` to allow changes the default model when item/block model predicates are met
        *   Added `append_models` to append models when item/block model predicates are met
        *   For block model modifiers, `show_breaking_overlay` can now be set per model entry
    *   Added block model predicates:
        *   Simple `true`, `false`, `and`, `or`, `not` types
        *   `match_block` checks whether the block at a certain offset matches certain blocks
        *   `match_state` checks whether the block at a certain offset matches certain blocks and state properties
        *   `biome` checks whether the block is in a biome
        *   `dimension` checks whether the block is in a dimension
        *   `altitude` checks whether the block's y-position is within a range
    *   Added item model predicates:
        *   Simple `true`, `false`, `and`, `or`, `not` types
        *   `count` checks if a stack's count is within a range
        *   `durability` checks if a stack's durability is within a range
        *   `enchantment` checks whether an enchantment is present has a certain level
        *   `match_name` checks whether an item's custom name matches a string or regex
        *   `potion` checks whether the stack has a potion type
    *   Added `composite` model type:
        *   Allows combining multiple models
        *   Models can be applied conditionally based on item and block predicates
        *   Models can be translated, scaled, and rotated
*   Texture related changes:
    *   Overhauled `TextureType` and how textures are loaded:
        *   Textures can now have multiple texture atlas sprites
        *   Textures can now have sub-textures
        *   Any model using a Fusion texture will now be loaded as a Fusion model
        *   Added generic quad processing for custom texture types
    *   Changes for `base` texture type:
        *   No longer requires a `base` model
    *   Changes for `connecting` texture type:
        *   No longer requires a `connecting` model
        *   Each tile is now its own sprite on the texture atlas
        *   Empty tiles (completely transparent) are ignored and not stitched or processed
        *   Tiles can now use a sub-texture type, through `sub_texture` property
        *   Animated image layout can now be per-tile, through `per_tile_animation` property
        *   Added an option for a default connection predicate, through `connections` property
        *   Changes to connection predicates:
            *   Added `true` and `false` types
            *   Added `ignore_missing` options for `match_block`, `match_state`, `match_block_in_front`, `match_state_in_front`
            *   Allow specifying multiple blocks for `match_block`, `match_state`, `match_block_in_front`, `match_state_in_front`
    *   Changes for `random` texture type:
        *   Each tile is now its own sprite on the texture atlas
        *   Empty tiles (completely transparent) are ignored and not stitched or processed
        *   Tiles can now use a sub-texture type, through `sub_texture` property
        *   Added randomness options `position`, `position_facing`, `position_axis`, through `random_source` property
        *   Animated image layout can now be per-tile, through `per_tile_animation` property
        *   Increased maximum `rows` and `columns` from 10 to 100
    *   Changes for `continuous` texture type:
        *   Default tile is now its own sprite on the texture atlas
        *   Increased maximum `rows` and `columns` from 10 to 32
    *   Changes for `scrolling` texture type:
        *   Added 'wrap' loop type to allow the frame to wrap around the image
*   General changes:
    *   Error messages are now printed in a user-friendly readable format
    *   Improved clarity of error messages
*   Bug fixes:
    *   Fixed handling of `full` layout connecting textures with a legacy square image
    *   Fixed inconsistent randomness for block model modifier models
    *   Fixed geometry key for block model modifiers
    *   Fixed handling of generated item models
    *   Fixed concurrency issue when using `pane_culling_fix` potentially leading to corrupted quads
    *   Fixed item transforms not getting serialized for base model data
    *   Fixed incorrect scaling of origin for rotation of base model data elements
    *   Fixed not all vanilla model properties being serializable through `cuboid` model type
    *   Fixed continuous textures not working correctly when rotated
    *   Fixed thin edges sometimes showing around connecting, continuous, and random textures
    *   Fixed sometimes broken mipmaps for Fusion textures on Minecraft 1.12
    *   Fixed integration with FramedBlocks on Minecraft 1.20.1 and 1.21.1
    *   Fixed inconsistent ordering of model modifiers on older Minecraft versions
    *   Fixed model ordering of appended models in block model modifiers not being maintained when some models are vanilla and some are not

### Fusion 1.2.12

*   Fixed handling of connections key references in connecting models
*   Fixed texture references added through base model data builder having an extra '#'

### Fusion 1.2.11b

*   Fixed `enchantment` item model modifier predicate not working for enchanted books

### Fusion 1.2.11a

*   Fixed Fusion's `pack.mcmeta` data not getting loaded for mod resources

### Fusion 1.2.11

*   Added `show_breaking_overlay` option to block model modifiers to not show the breaking overlay for appended models
*   Fixed crash when modded model bakeries do not contain model modifiers' target models

### Fusion 1.2.10

*   Fixed all Fusion models loaded after any Fusion model has an error being broken

### Fusion 1.2.9a

*   Fixed crash when using model modifiers with mods using Puzzles Lib installed

### Fusion 1.2.9

*   Fixed `pieced` layout when a quads' uv does not cover the entire sprite
*   Fixed connecting textures using connections for the wrong direction for rotated quads with mirrored uv in some cases

### Fusion 1.2.8

*   Added Hungarian translations (thanks to bayi!)
*   Ambient occlusion is now disabled for emissive quads
*   Fixed quads with different render types being ordered randomly for `base` and `connecting` models when rendered as items
*   Fixed inverted vertical tile ordering for `continuous` textures
*   Fixed `DefaultConnectionPredicates#isFaceVisible` returning `is_same_block` predicate
*   Fixed `NotConnectionPredicate` serialization being invalid
*   Fixed `pane_culling_fix` discarding render type and ambient occlusion properties
*   Fixed crash when evaluating `biome` and `dimension` entity predicate
*   Fixed `random` texture seed always being 0 for bottom side
*   Fixed overrides folder not working for resource packs which use vanilla resource overlays
*   Fixed entity model modifiers using model for incorrect layer when targeting entities with multiple vanilla layers

### Fusion 1.2.7b

*   Changed `#createGeometryKey` to provide a globally unique value by including the model itself

### Fusion 1.2.7a

*   Implemented `#createGeometryKey` for base and connecting models, so they can be cached

### Fusion 1.2.7

*   Fixed argument validation for `count` and `durability` item predicates

### Fusion 1.2.6a

*   Fixed `pane_culling_fix` causing crashes
*   Fixed crash when Iris is installed

### Fusion 1.2.6

*   Initial release of Fusion for Minecraft 1.21.5

### Fusion 1.3.15a for NeoForge 1.21.4
### Fusion 1.3.15a

*   Fixed animated textures using incorrect frame index when frames are not in sequential order

### Fusion 1.3.15

*   Fixed `ambientocclusion`, `shade`, and `emissive` model properties not always applying to texture types that have subtextures like `connecting` and `random`
*   Fixed `is_biome` predicate always evaluating to `false` for chunk geometry

### Fusion 1.3.14a

*   Fixed NeoForge model `render_type` property making models invisible if there is no other custom render type used

### Fusion 1.3.14

*   Fixed `DefaultModelTypes#ITEM_MODEL_GENERATOR` not being registered
*   Fixed crash when Iris PBR texture has empty tiles resulting in a different number of sprites compared to regular texture

### Fusion 1.3.13

*   Added `TextureType#getBlockStateRenderTypes` which returns the render types that may be used by a texture
*   Added integration with Iris to intercept normal and specular maps for Fusion textures and handle them as Fusion textures
*   Fixed models without geometry being baked as missing model
*   Fixed sub-textures for `random` texture type receiving wrong texture data leading to a crash
*   Fixed crash when using `is_face_visible` connection predicate in an item model
*   Added a workaround for minimap mods not checking geometry for different render types
*   Fixed `pane_culling_fix` option making submodels not receive world context

### Fusion 1.3.12

*   Fixed `MutableQuad#chunkLayer` not always overwriting flags

### Fusion 1.3.11

*   Significantly reduced memory used by Fusion models
    *   Facing and chunk render type of `MutableQuad`s are now stored as bit flags
    *   `connecting` textures ignore non-default tiles when predicate is always true or always false
    *   `connecting` texture sub-texture data is now stored more compactly when some tiles are empty
    *   When `connecting` texture has no sub-texture, its tiles are initialized lazily

### Fusion 1.3.10

*   Fixed model item transforms (`display` property) translations not being scaled by 1/16th
*   Fixed models for blocks targeted by block model modifiers not receiving world context with Sodium

### Fusion 1.3.9

*   Fixed `dimension` block model predicate not working for chunk geometry

### Fusion 1.3.8

*   Fixed crash when using `continuous` texture type as a sub texture for other texture types
*   Fixed models from block model modifiers grouped by random offset being submitted for all models' render types
*   Fixed models from block model modifiers grouped by random offset not receiving world context

### Fusion 1.3.7

*   Fixed crash when breaking blocks targeted by block model modifiers due to Mixin bug

### Fusion 1.3.6

*   Added `random_offset` property for block model modifier model entries to overwrite hardcoded block random offsets
*   Improved randomness of `random` texture type
*   Significantly reduced memory footprint of `MutableQuad`s and thus models from Fusion
*   Fixed `match_state_in_front` behaving as `match_state`
*   Fixed incorrect uv calculation when explicitly specifying frame indices for animated textures leading to it always showing the first frame
*   Fixed block model predicates being rotated incorrectly due to floating point errors

### Fusion 1.3.5

*   Directional model predicates, i.e. `match_block` and `match_state`, are now rotated along with `composite` model entries
*   Replaced vanilla default uv calculation of model elements with calculation that better handles elements outside the center block space
*   Fixed deserialization of item transforms (`display` property) for Fusion models
*   Fixed `match_block`, `match_state` model predicates and `match_block`, `match_state`, `match_block_in_front`, `match_state_in_front` connection predicates only using the last block from the `blocks` array property
*   Fixed origin being offset for `composite` model transforms
*   Fixed composition order of `composite` model transforms with blockstate file transforms
*   Added workaround for Sodium breaking animated texture interpolation

### Fusion 1.3.4

*   Fixed threading issue with `match_block` and `match_state` block predicates potentially leading to incorrect results or crashes
*   Fixed element face 'uv' property being ignored

### Fusion 1.3.3

*   Fixed deserialization of `dimension`, `match_block`, and `match_state` block predicates
*   Fixed deserialization of `dimension` entity predicate

### Fusion 1.3.2b

*   Fixed `overrides_folder` not working for mod resources

### Fusion 1.3.2a

*   Fixed crash when mods bake models outside the normal baking window
*   Fixed crash when creating texture animation frames

### Fusion 1.3.2

*   Fixed crash with Sodium reading dummy sprite contents
*   Fixed wrong render type being used for modded blocks that set a Forge override
*   Fixed connecting texture predicate resolution for item models

### Fusion 1.3.1

*   Fixed `overlay` connecting texture layout producing way too many quads
*   Fixed `connections` property of connecting textures not working
*   Fixed base texture properties not working for `connecting` and `random` texture types
*   Fixed geometry of `base` models being duplicated
*   Fixed broken textures when ModernFix `mixin.perf.dynamic_resources` is enabled
*   Fixed crash with quick pack mod
*   Renamed `ConnectingModelData.ConnectingModelDataBuilder` to `ConnectingModelData.Builder`
*   Fixed `CuboidModelDataBuilder#material` calling itself
*   Fixed model materials map serialization not including '#' for references

### Fusion 1.3.0

*   Model related changes:
    *   Overhauled `ModelType` and how models are loaded:
        *   Any model with a Fusion model as parent will now be loaded as a Fusion model
    *   Changes for `base` model type:
        *   Model can now be made emissive, through `emissive` property
        *   Shading can now be disabled, through `shade` property
        *   Ambient occlusion can now be disabled, through `ambient_occlusion` property
        *   Lighting in guis can now be changed, through `gui_light` property
        *   Elements can now have `light_emission`, `emissive`, `shade`, `ambient_occlusion` properties
        *   Element faces can now have `light_emission`, `emissive`, `shade`, `ambient_occlusion` properties
    *   Overhauled block and item model modifiers:
        *   Added `priority` property
        *   Modifiers are now applied in order of `priority`, then file name, rather than 'random'
        *   Missing targets (like modded items/blocks) can now be ignored, through `ignore_missing_targets` property
        *   Added `default_model_overwrites` to allow changes the default model when item/block model predicates are met
        *   Added `append_models` to append models when item/block model predicates are met
        *   For block model modifiers, `show_breaking_overlay` can now be set per model entry
    *   Added block model predicates:
        *   Simple `true`, `false`, `and`, `or`, `not` types
        *   `match_block` checks whether the block at a certain offset matches certain blocks
        *   `match_state` checks whether the block at a certain offset matches certain blocks and state properties
        *   `biome` checks whether the block is in a biome
        *   `dimension` checks whether the block is in a dimension
        *   `altitude` checks whether the block's y-position is within a range
    *   Added item model predicates:
        *   Simple `true`, `false`, `and`, `or`, `not` types
        *   `count` checks if a stack's count is within a range
        *   `durability` checks if a stack's durability is within a range
        *   `enchantment` checks whether an enchantment is present has a certain level
        *   `match_name` checks whether an item's custom name matches a string or regex
        *   `potion` checks whether the stack has a potion type
    *   Added `composite` model type:
        *   Allows combining multiple models
        *   Models can be applied conditionally based on item and block predicates
        *   Models can be translated, scaled, and rotated
*   Texture related changes:
    *   Overhauled `TextureType` and how textures are loaded:
        *   Textures can now have multiple texture atlas sprites
        *   Textures can now have sub-textures
        *   Any model using a Fusion texture will now be loaded as a Fusion model
        *   Added generic quad processing for custom texture types
    *   Changes for `base` texture type:
        *   No longer requires a `base` model
    *   Changes for `connecting` texture type:
        *   No longer requires a `connecting` model
        *   Each tile is now its own sprite on the texture atlas
        *   Empty tiles (completely transparent) are ignored and not stitched or processed
        *   Tiles can now use a sub-texture type, through `sub_texture` property
        *   Animated image layout can now be per-tile, through `per_tile_animation` property
        *   Added an option for a default connection predicate, through `connections` property
        *   Changes to connection predicates:
            *   Added `true` and `false` types
            *   Added `ignore_missing` options for `match_block`, `match_state`, `match_block_in_front`, `match_state_in_front`
            *   Allow specifying multiple blocks for `match_block`, `match_state`, `match_block_in_front`, `match_state_in_front`
    *   Changes for `random` texture type:
        *   Each tile is now its own sprite on the texture atlas
        *   Empty tiles (completely transparent) are ignored and not stitched or processed
        *   Tiles can now use a sub-texture type, through `sub_texture` property
        *   Added randomness options `position`, `position_facing`, `position_axis`, through `random_source` property
        *   Animated image layout can now be per-tile, through `per_tile_animation` property
        *   Increased maximum `rows` and `columns` from 10 to 100
    *   Changes for `continuous` texture type:
        *   Default tile is now its own sprite on the texture atlas
        *   Increased maximum `rows` and `columns` from 10 to 32
    *   Changes for `scrolling` texture type:
        *   Added 'wrap' loop type to allow the frame to wrap around the image
*   General changes:
    *   Error messages are now printed in a user-friendly readable format
    *   Improved clarity of error messages
*   Bug fixes:
    *   Fixed handling of `full` layout connecting textures with a legacy square image
    *   Fixed inconsistent randomness for block model modifier models
    *   Fixed geometry key for block model modifiers
    *   Fixed handling of generated item models
    *   Fixed concurrency issue when using `pane_culling_fix` potentially leading to corrupted quads
    *   Fixed item transforms not getting serialized for base model data
    *   Fixed incorrect scaling of origin for rotation of base model data elements
    *   Fixed not all vanilla model properties being serializable through `cuboid` model type
    *   Fixed continuous textures not working correctly when rotated
    *   Fixed thin edges sometimes showing around connecting, continuous, and random textures
    *   Fixed sometimes broken mipmaps for Fusion textures on Minecraft 1.12
    *   Fixed integration with FramedBlocks on Minecraft 1.20.1 and 1.21.1
    *   Fixed inconsistent ordering of model modifiers on older Minecraft versions
    *   Fixed model ordering of appended models in block model modifiers not being maintained when some models are vanilla and some are not

### Fusion 1.2.12

*   Fixed handling of connections key references in connecting models
*   Fixed texture references added through base model data builder having an extra '#'

### Fusion 1.2.11e

*   Fixed `enchantment` item model modifier predicate not working for enchanted books

### Fusion 1.2.11d

*   Fixed block model modifier outputting quads from `WeightedBakedModel`s for all render types

### Fusion 1.2.11c

*   Fixed the breaking texture not showing on blocks targeted by a block model modifier

### Fusion 1.2.11b

*   Fixed Fusion's `pack.mcmeta` data not getting loaded for mod resources

### Fusion 1.2.11a

*   Fixed `show_breaking_overlay` option for block model modifiers not working

### Fusion 1.2.11

*   Added `show_breaking_overlay` option to block model modifiers to not show the breaking overlay for appended models
*   Fixed crash when modded model bakeries do not contain model modifiers' target models

### Fusion 1.2.10

*   Fixed all Fusion models loaded after any Fusion model has an error being broken

### Fusion 1.2.9a

*   Fixed crash when using model modifiers with mods using Puzzles Lib installed

### Fusion 1.2.9

*   Fixed `pieced` layout when a quads' uv does not cover the entire sprite
*   Fixed connecting textures using connections for the wrong direction for rotated quads with mirrored uv in some cases

### Fusion 1.2.8

*   Added Hungarian translations (thanks to bayi!)
*   Ambient occlusion is now disabled for emissive quads
*   Fixed quads being emitted 7 times for `base` and `connecting` models when rendered as items
*   Fixed quads with different render types being ordered randomly for `base` and `connecting` models when rendered as items
*   Fixed inverted vertical tile ordering for `continuous` textures
*   Fixed `DefaultConnectionPredicates#isFaceVisible` returning `is_same_block` predicate
*   Fixed `NotConnectionPredicate` serialization being invalid
*   Fixed render type hint from NeoForge's model format being ignored
*   Fixed crash when evaluating `biome` and `dimension` entity predicate
*   Fixed `random` texture seed always being 0 for bottom side
*   Fixed overrides folder not working for resource packs which use vanilla resource overlays
*   Fixed entity model modifiers using model for incorrect layer when targeting entities with multiple vanilla layers

### Fusion 1.2.7b

*   Fixed integration with FramedBlocks

### Fusion 1.2.7a

*   Moved connection evaluation for connecting models fixing Fusion caching issue when combined with FramedBlocks

### Fusion 1.2.7

*   Fixed argument validation for `count` and `durability` item predicates

### Fusion 1.2.6a

*   Fixed `connecting` and `base` models not always using correct render type when rendered as items

### Fusion 1.2.6

*   Added data providers for block model modifiers and item model modifiers

### Fusion 1.2.5

*   Fixed emissive quads not being quite as bright as they should be

### Fusion 1.2.4

*   Fixed vertex permutations for rotated textures being wrong and hence `pieced` layout not looking correct when rotated
*   Account for breaking changes in NeoForge 21.4.84-beta

### Fusion 1.2.3

*   Added special casing for `builtin/generated` parent model to make it work properly
*   Added Turkish translations (thanks to RuyaSavascisi!)

### Fusion 1.2.2

*   Fixed `pane_culling_fix` culling being inverted, culling only quads which should not be
*   Fixed crash when mods use non-resource characters in model layer names

### Fusion 1.2.1

*   Fixed texture references overwriting model references in connecting models
*   Fixed block model modifiers with only `pane_culling_fix` option getting ignored

### Fusion 1.2.0

*   Added base model type
    *   Allows for processing random and continuous textures
    *   Base models can have multiple parent models
    *   Connecting model type inherits all properties from the base model type
*   Added base texture type
    *   Allows specifying emissiveness, custom render type, and custom tinting function
    *   Added `biome_grass`, `biome_foliage`, and `biome_water` tinting functions
    *   All texture types inherit properties from base texture type
*   Added block model modifiers
    *   Allows overlaying additional models onto blocks
    *   Added `pane_culling_fix` to cull the top/bottom quads of glass panes
*   Added item model modifiers
    *   Allows for conditionally changing item models
    *   Added `count`, `durability`, `enchantment`, and `potion` item predicates
*   Added custom entity models
*   Added entity model modifiers
    *   Allows for random or conditional entity models and textures
    *   Added `altitude`, `is_baby`, `biome`, and `dimension` entity predicates
*   Added a warning screen when a resource pack requires a newer Fusion version than the one installed
*   Added `pieced` connecting texture layout allowing bordered textures from only a few tiles
*   Added `overlay` connecting texture layout intended for block overlays
*   All Fusion texture types can now be animated
*   Added continuous texture type for textures which span multiple blocks
*   Added random texture type for randomly choosing from a number of variations
*   Connecting models now allow specifying a `connections` key similar to the `texture` key
*   Added `match_block_in_front`, `match_state_in_front`, and `is_direction` connection predicates
*   Improved error messages for `match_state` connection predicate
*   Drastically improved performance of connecting models
*   Added compatibility for Embeddium, Iris, ModernFix, Oculus, Rubidium, Sodium, and VintageFix
*   Removed empty space from the `full` connecting texture layout
*   Fixed `match_state` predicate not working correctly when not all block state properties are specified
*   Fixed incorrect connections for connected textures when using UV lock or texture rotations
*   Fixed specifying connections per texture in connecting models not working correctly
*   Fixed connecting model sometimes using the wrong render type
*   Fixed caching states in connecting model sometimes leading to incorrect connections

### Fusion 1.1.1

*   Initial release of Fusion for Minecraft 1.21.4

### Fusion 1.3.15a for NeoForge 1.21.3
### Fusion 1.3.15a

*   Fixed animated textures using incorrect frame index when frames are not in sequential order

### Fusion 1.3.15

*   Fixed `ambientocclusion`, `shade`, and `emissive` model properties not always applying to texture types that have subtextures like `connecting` and `random`
*   Fixed `is_biome` predicate always evaluating to `false` for chunk geometry

### Fusion 1.3.14a

*   Fixed NeoForge model `render_type` property making models invisible if there is no other custom render type used
*   Fixed modded models using NeoForge's custom geometry being baked as regular models

### Fusion 1.3.14

*   Added `DefaultModelTypes#BLOCK_ENTITY_MARKER`
*   Fixed Fusion models with parent `minecraft:builtin/entity` not being marked as custom item renderer
*   Fixed `DefaultModelTypes#ITEM_MODEL_GENERATOR` not being registered
*   Fixed crash when Iris PBR texture has empty tiles resulting in a different number of sprites compared to regular texture

### Fusion 1.3.13

*   Added `TextureType#getBlockStateRenderTypes` which returns the render types that may be used by a texture
*   Added integration with Iris to intercept normal and specular maps for Fusion textures and handle them as Fusion textures
*   Fixed models without geometry being baked as missing model
*   Fixed sub-textures for `random` texture type receiving wrong texture data leading to a crash
*   Fixed crash when using `is_face_visible` connection predicate in an item model
*   Added a workaround for minimap mods not checking geometry for different render types
*   Fixed `pane_culling_fix` option making submodels not receive world context

### Fusion 1.3.12

*   Fixed `MutableQuad#chunkLayer` not always overwriting flags

### Fusion 1.3.11

*   Significantly reduced memory used by Fusion models
    *   Facing and chunk render type of `MutableQuad`s are now stored as bit flags
    *   `connecting` textures ignore non-default tiles when predicate is always true or always false
    *   `connecting` texture sub-texture data is now stored more compactly when some tiles are empty
    *   When `connecting` texture has no sub-texture, its tiles are initialized lazily

### Fusion 1.3.10

*   Fixed model item transforms (`display` property) translations not being scaled by 1/16th
*   Fixed models for blocks targeted by block model modifiers not receiving world context with Sodium
*   Fixed models sometimes failing to load with ModernFix' `dynamic_resources` option

### Fusion 1.3.9

*   Fixed `dimension` block model predicate not working for chunk geometry

### Fusion 1.3.8

*   Fixed crash when using `continuous` texture type as a sub texture for other texture types
*   Fixed models from block model modifiers grouped by random offset being submitted for all models' render types
*   Fixed models from block model modifiers grouped by random offset not receiving world context

### Fusion 1.3.7

*   Fixed crash when breaking blocks targeted by block model modifiers due to Mixin bug

### Fusion 1.3.6

*   Added `random_offset` property for block model modifier model entries to overwrite hardcoded block random offsets
*   Improved randomness of `random` texture type
*   Significantly reduced memory footprint of `MutableQuad`s and thus models from Fusion
*   Fixed item model modifiers always using the default model's transforms
*   Fixed `match_state_in_front` behaving as `match_state`
*   Fixed incorrect uv calculation when explicitly specifying frame indices for animated textures leading to it always showing the first frame
*   Fixed any model with a `cuboid` parent being baked as a `cuboid` model
*   Fixed block model predicates being rotated incorrectly due to floating point errors
*   Fixed Forge/NeoForge `render_type` property not working for `cuboid` models

### Fusion 1.3.5

*   Directional model predicates, i.e. `match_block` and `match_state`, are now rotated along with `composite` model entries
*   Replaced vanilla default uv calculation of model elements with calculation that better handles elements outside the center block space
*   Fixed deserialization of item transforms (`display` property) for Fusion models
*   Fixed `match_block`, `match_state` model predicates and `match_block`, `match_state`, `match_block_in_front`, `match_state_in_front` connection predicates only using the last block from the `blocks` array property
*   Fixed origin being offset for `composite` model transforms
*   Fixed composition order of `composite` model transforms with blockstate file transforms
*   Added workaround for Sodium breaking animated texture interpolation

### Fusion 1.3.4

*   Fixed threading issue with `match_block` and `match_state` block predicates potentially leading to incorrect results or crashes
*   Fixed element face 'uv' property being ignored

### Fusion 1.3.3

*   Fixed deserialization of `dimension`, `match_block`, and `match_state` block predicates
*   Fixed deserialization of `dimension` entity predicate

### Fusion 1.3.2b

*   Fixed `overrides_folder` not working for mod resources

### Fusion 1.3.2a

*   Fixed crash when mods bake models outside the normal baking window

### Fusion 1.3.2

*   Fixed crash with Sodium reading dummy sprite contents
*   Fixed wrong render type being used for modded blocks that set a Forge override

### Fusion 1.3.1

*   Fixed `overlay` connecting texture layout producing way too many quads
*   Fixed `connections` property of connecting textures not working
*   Fixed base texture properties not working for `connecting` and `random` texture types
*   Fixed geometry of `base` models being duplicated
*   Fixed crash with quick pack mod
*   Renamed `ConnectingModelData.ConnectingModelDataBuilder` to `ConnectingModelData.Builder`
*   Fixed `CuboidModelDataBuilder#material` calling itself
*   Fixed model materials map serialization not including '#' for references

### Fusion 1.3.0

*   Model related changes:
    *   Overhauled `ModelType` and how models are loaded:
        *   Any model with a Fusion model as parent will now be loaded as a Fusion model
    *   Changes for `base` model type:
        *   Model can now be made emissive, through `emissive` property
        *   Shading can now be disabled, through `shade` property
        *   Ambient occlusion can now be disabled, through `ambient_occlusion` property
        *   Lighting in guis can now be changed, through `gui_light` property
        *   Elements can now have `light_emission`, `emissive`, `shade`, `ambient_occlusion` properties
        *   Element faces can now have `light_emission`, `emissive`, `shade`, `ambient_occlusion` properties
    *   Overhauled block and item model modifiers:
        *   Added `priority` property
        *   Modifiers are now applied in order of `priority`, then file name, rather than 'random'
        *   Missing targets (like modded items/blocks) can now be ignored, through `ignore_missing_targets` property
        *   Added `default_model_overwrites` to allow changes the default model when item/block model predicates are met
        *   Added `append_models` to append models when item/block model predicates are met
        *   For block model modifiers, `show_breaking_overlay` can now be set per model entry
    *   Added block model predicates:
        *   Simple `true`, `false`, `and`, `or`, `not` types
        *   `match_block` checks whether the block at a certain offset matches certain blocks
        *   `match_state` checks whether the block at a certain offset matches certain blocks and state properties
        *   `biome` checks whether the block is in a biome
        *   `dimension` checks whether the block is in a dimension
        *   `altitude` checks whether the block's y-position is within a range
    *   Added item model predicates:
        *   Simple `true`, `false`, `and`, `or`, `not` types
        *   `count` checks if a stack's count is within a range
        *   `durability` checks if a stack's durability is within a range
        *   `enchantment` checks whether an enchantment is present has a certain level
        *   `match_name` checks whether an item's custom name matches a string or regex
        *   `potion` checks whether the stack has a potion type
    *   Added `composite` model type:
        *   Allows combining multiple models
        *   Models can be applied conditionally based on item and block predicates
        *   Models can be translated, scaled, and rotated
*   Texture related changes:
    *   Overhauled `TextureType` and how textures are loaded:
        *   Textures can now have multiple texture atlas sprites
        *   Textures can now have sub-textures
        *   Any model using a Fusion texture will now be loaded as a Fusion model
        *   Added generic quad processing for custom texture types
    *   Changes for `base` texture type:
        *   No longer requires a `base` model
    *   Changes for `connecting` texture type:
        *   No longer requires a `connecting` model
        *   Each tile is now its own sprite on the texture atlas
        *   Empty tiles (completely transparent) are ignored and not stitched or processed
        *   Tiles can now use a sub-texture type, through `sub_texture` property
        *   Animated image layout can now be per-tile, through `per_tile_animation` property
        *   Added an option for a default connection predicate, through `connections` property
        *   Changes to connection predicates:
            *   Added `true` and `false` types
            *   Added `ignore_missing` options for `match_block`, `match_state`, `match_block_in_front`, `match_state_in_front`
            *   Allow specifying multiple blocks for `match_block`, `match_state`, `match_block_in_front`, `match_state_in_front`
    *   Changes for `random` texture type:
        *   Each tile is now its own sprite on the texture atlas
        *   Empty tiles (completely transparent) are ignored and not stitched or processed
        *   Tiles can now use a sub-texture type, through `sub_texture` property
        *   Added randomness options `position`, `position_facing`, `position_axis`, through `random_source` property
        *   Animated image layout can now be per-tile, through `per_tile_animation` property
        *   Increased maximum `rows` and `columns` from 10 to 100
    *   Changes for `continuous` texture type:
        *   Default tile is now its own sprite on the texture atlas
        *   Increased maximum `rows` and `columns` from 10 to 32
    *   Changes for `scrolling` texture type:
        *   Added 'wrap' loop type to allow the frame to wrap around the image
*   General changes:
    *   Error messages are now printed in a user-friendly readable format
    *   Improved clarity of error messages
*   Bug fixes:
    *   Fixed handling of `full` layout connecting textures with a legacy square image
    *   Fixed inconsistent randomness for block model modifier models
    *   Fixed geometry key for block model modifiers
    *   Fixed handling of generated item models
    *   Fixed concurrency issue when using `pane_culling_fix` potentially leading to corrupted quads
    *   Fixed item transforms not getting serialized for base model data
    *   Fixed incorrect scaling of origin for rotation of base model data elements
    *   Fixed not all vanilla model properties being serializable through `cuboid` model type
    *   Fixed continuous textures not working correctly when rotated
    *   Fixed thin edges sometimes showing around connecting, continuous, and random textures
    *   Fixed sometimes broken mipmaps for Fusion textures on Minecraft 1.12
    *   Fixed integration with FramedBlocks on Minecraft 1.20.1 and 1.21.1
    *   Fixed inconsistent ordering of model modifiers on older Minecraft versions
    *   Fixed model ordering of appended models in block model modifiers not being maintained when some models are vanilla and some are not

### Fusion 1.2.12

*   Fixed handling of connections key references in connecting models
*   Fixed texture references added through base model data builder having an extra '#'

### Fusion 1.2.11e

*   Fixed `enchantment` item model modifier predicate not working for enchanted books

### Fusion 1.2.11d

*   Fixed block model modifier outputting quads from `WeightedBakedModel`s for all render types

### Fusion 1.2.11c

*   Fixed the breaking texture not showing on blocks targeted by a block model modifier

### Fusion 1.2.11b

*   Fixed Fusion's `pack.mcmeta` data not getting loaded for mod resources

### Fusion 1.2.11a

*   Fixed `show_breaking_overlay` option for block model modifiers not working

### Fusion 1.2.11

*   Added `show_breaking_overlay` option to block model modifiers to not show the breaking overlay for appended models
*   Fixed crash when modded model bakeries do not contain model modifiers' target models

### Fusion 1.2.10

*   Fixed all Fusion models loaded after any Fusion model has an error being broken

### Fusion 1.2.9

*   Fixed `pieced` layout when a quads' uv does not cover the entire sprite
*   Fixed connecting textures using connections for the wrong direction for rotated quads with mirrored uv in some cases

### Fusion 1.2.8

*   Added Hungarian translations (thanks to bayi!)
*   Ambient occlusion is now disabled for emissive quads
*   Fixed quads being emitted 7 times for `base` and `connecting` models when rendered as items
*   Fixed quads with different render types being ordered randomly for `base` and `connecting` models when rendered as items
*   Fixed inverted vertical tile ordering for `continuous` textures
*   Fixed `DefaultConnectionPredicates#isFaceVisible` returning `is_same_block` predicate
*   Fixed `NotConnectionPredicate` serialization being invalid
*   Fixed render type hint from NeoForge's model format being ignored
*   Fixed crash when evaluating `biome` and `dimension` entity predicate
*   Fixed `random` texture seed always being 0 for bottom side
*   Fixed overrides folder not working for resource packs which use vanilla resource overlays
*   Fixed entity model modifiers using model for incorrect layer when targeting entities with multiple vanilla layers

### Fusion 1.2.7b

*   Fixed integration with FramedBlocks

### Fusion 1.2.7a

*   Moved connection evaluation for connecting models fixing Fusion caching issue when combined with FramedBlocks

### Fusion 1.2.7

*   Fixed argument validation for `count` and `durability` item predicates

### Fusion 1.2.6a

*   Fixed `connecting` and `base` models not always using correct render type when rendered as items

### Fusion 1.2.6

*   Added data providers for block model modifiers and item model modifiers

### Fusion 1.2.5

*   Fixed emissive quads not being quite as bright as they should be

### Fusion 1.2.4

*   Fixed vertex permutations for rotated textures being wrong and hence `pieced` layout not looking correct when rotated
*   Fixed non-custom render type quads not being rendered in item models for `base` and `connecting` models
*   Files generated through `FusionModelProvider` are now tracked in the existing file helper

### Fusion 1.2.3

*   Added special casing for `builtin/generated` parent model to make it work properly
*   Added Turkish translations (thanks to RuyaSavascisi!)

### Fusion 1.2.2a

*   Fixed crash when obtaining model data for a multipart model

### Fusion 1.2.2

*   Fixed `pane_culling_fix` culling being inverted, culling only quads which should not be
*   Fixed crash when mods use non-resource characters in model layer names

### Fusion 1.2.1

*   Fixed texture references overwriting model references in connecting models
*   Fixed block model modifiers with only `pane_culling_fix` option getting ignored

### Fusion 1.2.0

*   Added base model type
    *   Allows for processing random and continuous textures
    *   Base models can have multiple parent models
    *   Connecting model type inherits all properties from the base model type
*   Added base texture type
    *   Allows specifying emissiveness, custom render type, and custom tinting function
    *   Added `biome_grass`, `biome_foliage`, and `biome_water` tinting functions
    *   All texture types inherit properties from base texture type
*   Added block model modifiers
    *   Allows overlaying additional models onto blocks
    *   Added `pane_culling_fix` to cull the top/bottom quads of glass panes
*   Added item model modifiers
    *   Allows for conditionally changing item models
    *   Added `count`, `durability`, `enchantment`, and `potion` item predicates
*   Added custom entity models
*   Added entity model modifiers
    *   Allows for random or conditional entity models and textures
    *   Added `altitude`, `is_baby`, `biome`, and `dimension` entity predicates
*   Added a warning screen when a resource pack requires a newer Fusion version than the one installed
*   Added `pieced` connecting texture layout allowing bordered textures from only a few tiles
*   Added `overlay` connecting texture layout intended for block overlays
*   All Fusion texture types can now be animated
*   Added continuous texture type for textures which span multiple blocks
*   Added random texture type for randomly choosing from a number of variations
*   Connecting models now allow specifying a `connections` key similar to the `texture` key
*   Added `match_block_in_front`, `match_state_in_front`, and `is_direction` connection predicates
*   Improved error messages for `match_state` connection predicate
*   Drastically improved performance of connecting models
*   Added compatibility for Embeddium, Iris, ModernFix, Oculus, Rubidium, Sodium, and VintageFix
*   Removed empty space from the `full` connecting texture layout
*   Fixed `match_state` predicate not working correctly when not all block state properties are specified
*   Fixed incorrect connections for connected textures when using UV lock or texture rotations
*   Fixed specifying connections per texture in connecting models not working correctly
*   Fixed connecting model sometimes using the wrong render type
*   Fixed caching states in connecting model sometimes leading to incorrect connections

### Fusion 1.1.1a

*   Fixed 'Model loader not found' errors

### Fusion 1.1.1

*   Initial release of Fusion for Minecraft 1.20.5 & 1.20.6

## Lithostitched
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/lithostitched)

### v1.8.0 ~ Neoforge 21.1
Lithostitched 1.8.0 is largely focused on backend changes, with the codebase split up based on version again. Various other changes and fixes have made it in, though.

**Additions**

*   `add_spawn_costs` modifier (adds spawn costs for mobs in given biome(s))
*   `set_tree_decorators` modifier (adds/overrides tree decorators on given tree feature(s))
*   `branched_mega_jungle` foliage placer (for wider mega jungle trees)
*   `branched_mega_pine` foliage placer (for wider pine jungle trees)
*   `large_mangrove` root placer (for root placements with 2x2 trees)
*   `cellular` density function type (in-house 2d cellular noise with more consistency/features than fast noise)
*   Introduced an optimization to density function caching. This will be most noticeable when playing with heavy worldgen packs like Tectonic or Lithosphere.
    *   A special thank you to Unnecessarymb and Evanbones for finding and implementing this optimization, respectively.

**Fixes**

*   Fixed a critical issue that caused worlds with surface rule injections to corrupt under certain conditions, such as when having a world with both RU 0.6 and Terrablender installed.
*   Fixed the fields on the `offset` placement modifier being non-optional.
*   Fixed the `dungeon` feature type not working.
*   Fixed annoying but harmless log errors when World Weaver is installed.
*   Fix the assumed minimum value in various places (e.g. `sample_density` placement condition) being 0, not roughly -1.8E308.

## CreativeCore
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/creativecore)

### CreativeCore_NEOFORGE_v2.13.48_mc1.21.1.jar
*   Added onItemToos to creative loader

### CreativeCore_NEOFORGE_v2.13.47_mc1.21.1.jar
*   Added system to make sure child origin updates if parent changes
*   Fixed center not working with origins like sable (causing large boundingboxes)

## Exposure
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/exposure)

### Exposure - NeoForge 1.21.1 - 1.9.19
1.9.19 - 2026-09-23
-------------------

*   Improved thirdperson camera behavior when viewfinder is opened and closed
*   Added compatibility with `Shoulder Surfing` mod
*   Added `RenderScale` mod to the `force_direct_capture_default_mods` config
    *   Existing configs will not be affected, so you'll need to add it manually, delete the existing config to regenerate it, or enable `force_direct_capture` to fix the issues with RenderScale
*   Removed preloading (done to reduce the lag spike when camera is first used after launch), as it was causing some issues and doesn't seem to be needed anymore
*   Fixed Camera item in Camera Attachments Menu being movable with 1-9 keys, which was causing a crash
*   Fixed wrong config translation
*   Updated localization files

## MVS - Moog's Voyager Structures
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/moogs-voyager-structures)

### Moog's Voyager Structures 5.1.3-1.21+ [UNIVERSAL]
### Fixed

*   Structures no longer cluster right around world spawn
*   Villagers now pick up food, so they can restock and breed
*   Chests and barrels roll fresh loot in every world instead of the same items each time
*   A few chests in the cathedral that always spawned empty now have loot

## Moonlight Lib
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/selene)

### moonlight-1.21.1-3.6.9-neoforge
*   more configs improvements
*   added some sanity checks to prevent hard to track down issues
*   misc fixes

### moonlight-1.21.1-3.6.8-neoforge
fixed a weird issue with no mans land + modernfix combo

### moonlight-1.21.1-3.6.7-neoforge
*   fixed a concurrency issue

### moonlight-1.21.1-3.6.6-neoforge
*   fixed arare concurrency issue
*   fixed an issue with fluid buckets

## Torchmaster
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/torchmaster)

### torchmaster-neoforge-1.21.1-21.1.13
v21.1.13
--------

*   Remove volume renderer if the mega torch or dread lamp are being removed for any reason
*   Fix ghost render of volumes in other dimensions

v21.1.12
--------

*   Fix out of bounds exception with Feral Flare Lantern

v21.1.11
--------

*   Fix a NullPointerException crash on Fabric and NeoForge when hovering a button on the Feral Flare Lantern or Megatorch/Dreadlamp [Fabric + Neoforge]

v21.1.10
--------

*   Allow dread lamps and mega torches to be waterlogged
    *   Dread Lamps are excluded since invisible lights cannot be placed underwater for now.
*   Add line of sight support for feral flare lantern
    *   Right click a lantern in the world like any other block to configure it.
    *   Line of Sight off (default): Lantern will place lights anywhere in its working range
    *   Line of Sight on: Lantern will not attempt to place lights behind walls
*   Add volume renderer overlay with color cycler for Dread Lamp and Megatorch
    *   Right click in the world to show the simple config menu.
    *   Visualization is per-client
    *   Allows configuring different colors for easier differentiation depending on surroundings
    *   Renders the big box volume and a small 1-block sized box around the torch. The 1-block light allows seeing the torch through blocks.
*   Fix invisible light blockstate warnings in log during startup

v21.1.9
-------

*   Fix crash on fabric when joining a world

v21.1.8
-------

*   Fix Frozen Pearl Recipe (PR by SrNadien)

v21.1.7
-------

*   Add support to prevent phantoms from spawning from player insomnia mechanics

v21.1.6
-------

*   Re-Added Frozen Pearl to remove residual lights from the Feral Flare Lantern

v21.1.5
-------

*   Remove spawn logging in debug log by default to reduce potential wear on storage drives on both fabric and neoforge.  
      
    The default behavior for modded minecraft is to log debug messages to a debug.log. Torchmaster can be quite verbose when it comes to logging on debug. Since these logs are usually useless during normal play, they will be force-disabled be default (only for torchmaster). If debug logging is required, launch the game with `-Dtorchmaster.enableDebugLogging=1`

v21.1.4
-------

*   Fix crash during setup of a village siege on fabric
*   Add missing torchmaster command from previous versions

v21.1.3
-------

*   Fix spam related to config auto fixing on neoforge

v21.1.2
-------

*   Fix crash when spawning a warden in an ancient city on fabric mod loader

v21.1.1
-------

*   Improve compatibility with other fabric mods
*   Re-enable mob spawn blocking during chunk generation inside blocking volumes
*   Fix spawn blocking of spawners not working when `blockOnlyNaturalSpawns` is set to `false`
*   Fix Feral Flare Lantern not rendering its stand

v21.1.0
-------

*   Improve blocking logic
*   FIX: game should no longer crash when architectury is installed
*   Known Issue: Mob spawning during chunk generation will not be blocked. (Fabric only) - a fix will be provided in a later version

v21.0.1
-------

*   Fix invisible light blocks not being replaceable by other blocks ([#234](https://github.com/Xalcon/TorchMaster/issues/234))
*   Update to MC 1.21.1

v21.0.0
-------

*   First release for Minecraft 1.21 (Fabric, Neoforge)7

## MSS - Moog's Soaring Structures
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/mss-moogs-soaring-structures)

### Moog's Soaring Structures 2.2.0-1.21+ [UNIVERSAL]
If you are up for a challenge, try out the arena with bad omen!

![ominous](https://i.moogsmods.com/images/34bff40c3b3b4bef9d5b05ea451776d9.png)

### Added

*   Every structure apart from the trees now has a working Preview button in Moog's Structure Lib's config screen
*   Now supports Minecraft 26.2 and 26.3
*   Structures can now generate in the new dappled forest biome
*   A glow item frame now decorates the desert pyramid
*   Decorated pots in the desert pyramid, jungle, mangrove, muddy water hole, small tower, taiga and volcano now hold loot that fits where they're found

### Changed

*   Villagers, pillagers and the arena's skeleton archers are now rolled fresh every time a structure generates, instead of every copy being identical
*   Monster spawners now pick their mob each time a structure generates, and modpacks can change which mobs each structure's spawners use
*   A few spawners that never spawned anything, in the arena, muddy water hole and red sand, are now active
*   Trees are now spread more evenly instead of sometimes clustering together, and share a single toggle and spacing slider in Moog's Structure Lib's config screen
*   The chest at the top of the castle tower has slightly toned-down loot to better match how easy it is to reach
*   Barrels that form part of the white house's walls no longer hold loot
*   The large tower and white house use leaves instead of green wool in their natural areas
*   Now needs Moog's Structure Lib 3.0.0 or newer
*   Trees, calcite houses, small ponds, nether portals, leaf hollows, small oak houses, castle ruins, small towers and castle towers generate less often, so the world feels less crowded

### Fixed

*   The arena's trial spawners now run a couple of waves of skeletons before usually handing over a trial key, and its vaults open with those keys for arena-only rewards
*   The mod now loads on Minecraft 26.1.2 and newer
*   Villagers in the white house and diorite house now offer proper trades
*   The trees at the arena, large tower, white house and diorite house have their full leaves again
*   Every structure has been rebuilt for each Minecraft version it supports, fixing a range of small visual and loading problems

## Nether Depths Upgrade
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/nether-depths-upgrade)

### netherdepthsupgrade-3.3-1.21.1-NeoForge
Changelog:

Added config values for the vents. Netherite is more rare in vents Vents dont show up above lava anymore (toggleable in config)

## Immersive Overlays
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/immersive-overlays)

### Immersive Overlays 1.8.5 for 1.21.1 NeoForge
### Fixed

*   Oreganized 5.3.0 support (thanks @PossibleTrngl!)

## Ixeris
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/ixeris)

### Ixeris 4.6.8+1.21.1-neoforge
*   Fixed game crash on 26.3 NeoForge
*   Improved blocking behavior when setting window progress on SDL

### Ixeris 4.6.7+1.21.11-neoforge
Fixed the issue where `IxerisApi#runLaterOnRenderThread` was not working.

### Ixeris 4.6.7+1.21.8-neoforge
Fixed the issue where `IxerisApi#runLaterOnRenderThread` was not working.

## Data Anchor
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/data-anchor)

### Data_Anchor-neoforge-1.21.1
2.0.0.17
========

*   Fix Block Entity Loading for mods who lazy load them.
*   Fix packet reading.

2.0.0.16
========

*   Fix Forge MC Version Requirement

2.0.0.15
========

*   Fix 1.21.1 crashes by making packet registry static

2.0.0.13
========

*   Thread safe data init.
*   Prevent duplicate tick listeners.

2.0.0.12
========

*   Fix respawn not being called.

2.0.0.11
========

*   Fix bad mixin.

2.0.0.10
========

*   Fix timing issues.

2.0.0.9
=======

*   Fix a crash.

2.0.0.8
=======

*   Fix memory leak.

2.0.0.7
=======

*   Entity Sync Fixes

2.0.0.6
=======

*   Fixes.

2.0.0.5
=======

*   Fix a bad packet ID pertaining to syncing entity data.
*   Mark ServerBlockEntityTrackedData as ServerTrackedData.

2.0.0.4
=======

*   Add ChunkBlockStateInterceptor interface for ChunkData.

2.0.0.3
=======

*   Fix invalid Neoforge mixin file.

2.0.0.2
=======

*   Fix marking dirty on level data when changed.

2.0.0.1
=======

*   Add mixins to neo mods.toml.

2.0.0.0
=======

*   Port to 1.21.1

1.0.0.12
========

*   Fix method call for DirtyMarker.

1.0.0.11
========

*   Fix lazily loading level data.

1.0.0.10
========

*   Fix crashing with Create 6.0.2 by lazily creating tracked data.

1.0.0.9
=======

*   Remove Fabric Data gen from fabric.mod.json.

1.0.0.8
=======

*   Check if a tag exists before attempting to load from it. Mark fields transient where needed.

1.0.0.7
=======

*   Add Kotlin DSL support.
*   Fix data get method in tracked data registry.

1.0.0.6
=======

*   Fix server side loading.

1.0.0.5
=======

*   Fix boolean serialization.

1.0.0.4
=======

*   Fix Tracked Data (de)serialization.

1.0.0.3
=======

*   Fix Access Widener.

1.0.0.2
=======

*   Use level field instead.

1.0.0.1
=======

*   Load/Save NBTs with reflection.
*   Fix numerous Tracked Data issues.

1.0.0.0
=======

*   Release

## FTB Quests (NeoForge)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/ftb-quests-forge)

### [NEOFORGE][1.21.1] FTB Quests 2101.1.36
[2101.1.36]
-------------

### Added

*   Added a few more edit-mode GUI hotkeys (all rebindable via vanilla options screen)
    *   Force-complete hovered quest (Alt-C)
    *   Force-reset hovered quest (Alt-R)
    *   Force-save quest book data on server (Ctrl+S)
    *   Download quest book data to client (Shift+Ctrl+S)
*   Alt + Left mouse button now works to drag a quest selection box (in addition to the existing middle-button functionality)
    *   Many people find the middle button awkward to use, especially if it's also the mouse wheel
    *   Ctrl + Alt + Left button toggles selection, same as Ctrl + middle button already does

### Fixed

*   Fixed clientside NPE when pasting an image while one or more images are currently selected
*   Arrow keys weren't working as intended to the scroll the quest screen

### Support

If you have any issues with this mod, please report them on our [Issue Tracker](/linkout?remoteUrl=https%253a%252f%252fgo.ftb.team%252fsupport-mod-issues)

## Quests Visual
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/questsvisual)

### QuestsVisual-1.21.1-1.0.50.jar
Bug fix

## Modonomicon
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/modonomicon)

### modonomicon-1.21.1-neoforge-1.120.7.jar
### :bug: Bug Fixes

*   [`5cbce6b`](https://github.com/klikli-dev/modonomicon/commit/5cbce6bfb6f777d5e1f69283e2d347a582dd4624) - issue 368 save state errors for unknown/unbuilt books _(PR #368 by @klikli-dev)_

Find changes for all versions at [https://github.com/klikli-dev/modonomicon/releases](https://github.com/klikli-dev/modonomicon/releases)

### modonomicon-1.21.1-neoforge-1.120.6.jar
### :bug: Bug Fixes

*   [`65f8247`](https://github.com/klikli-dev/modonomicon/commit/65f82472f59de6f67775d9b7c98b727a032e600f) - use server registry access for clientbound packets on forge _(commit by @klikli-dev)_

Find changes for all versions at [https://github.com/klikli-dev/modonomicon/releases](https://github.com/klikli-dev/modonomicon/releases)

### modonomicon-1.21.1-neoforge-1.120.5.jar
### :bug: Bug Fixes

*   [`418e637`](https://github.com/klikli-dev/modonomicon/commit/418e63787a953d852a9b03bdc17a38d38f34d539) - use crafting y offset for smithing recipe pages _(PR #390 by @klikli-dev)_

Find changes for all versions at [https://github.com/klikli-dev/modonomicon/releases](https://github.com/klikli-dev/modonomicon/releases)

## Not Enough Animations
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/not-enough-animations)

### 1.12.6-1.21.1 - NeoForge
Hotfix
------

*   Fix crash caused by crawling. Fix [#346](https://github.com/tr7zw/NotEnoughAnimations/issues/346)

What's Changed (1.12.5)
-----------------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Resolved some issues with the lantern physics math
*   fix: don't hide spears and tridents when an offhand crossbow is charged by @NovaVanity in [https://github.com/tr7zw/NotEnoughAnimations/pull/337](https://github.com/tr7zw/NotEnoughAnimations/pull/337)
*   Update uk_ua localization by @Tenwoc in [https://github.com/tr7zw/NotEnoughAnimations/pull/344](https://github.com/tr7zw/NotEnoughAnimations/pull/344)

New Contributors
----------------

*   @NovaVanity made their first contribution in [https://github.com/tr7zw/NotEnoughAnimations/pull/337](https://github.com/tr7zw/NotEnoughAnimations/pull/337)
*   @Tenwoc made their first contribution in [https://github.com/tr7zw/NotEnoughAnimations/pull/344](https://github.com/tr7zw/NotEnoughAnimations/pull/344)

**Full Changelog**: [https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.4...1.12.5](https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.4...1.12.5)

### 1.12.5-1.21.8 - NeoForge
What's Changed
--------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Resolved some issues with the lantern physics math
*   fix: don't hide spears and tridents when an offhand crossbow is charged by @NovaVanity in [https://github.com/tr7zw/NotEnoughAnimations/pull/337](https://github.com/tr7zw/NotEnoughAnimations/pull/337)
*   Update uk_ua localization by @Tenwoc in [https://github.com/tr7zw/NotEnoughAnimations/pull/344](https://github.com/tr7zw/NotEnoughAnimations/pull/344)

New Contributors
----------------

*   @NovaVanity made their first contribution in [https://github.com/tr7zw/NotEnoughAnimations/pull/337](https://github.com/tr7zw/NotEnoughAnimations/pull/337)
*   @Tenwoc made their first contribution in [https://github.com/tr7zw/NotEnoughAnimations/pull/344](https://github.com/tr7zw/NotEnoughAnimations/pull/344)

**Full Changelog**: [https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.4...1.12.5](https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.4...1.12.5)

### 1.12.5-1.21.5 - NeoForge
What's Changed
--------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Resolved some issues with the lantern physics math
*   fix: don't hide spears and tridents when an offhand crossbow is charged by @NovaVanity in [https://github.com/tr7zw/NotEnoughAnimations/pull/337](https://github.com/tr7zw/NotEnoughAnimations/pull/337)
*   Update uk_ua localization by @Tenwoc in [https://github.com/tr7zw/NotEnoughAnimations/pull/344](https://github.com/tr7zw/NotEnoughAnimations/pull/344)

New Contributors
----------------

*   @NovaVanity made their first contribution in [https://github.com/tr7zw/NotEnoughAnimations/pull/337](https://github.com/tr7zw/NotEnoughAnimations/pull/337)
*   @Tenwoc made their first contribution in [https://github.com/tr7zw/NotEnoughAnimations/pull/344](https://github.com/tr7zw/NotEnoughAnimations/pull/344)

**Full Changelog**: [https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.4...1.12.5](https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.4...1.12.5)

### 1.12.5-1.21.4 - NeoForge
What's Changed
--------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Resolved some issues with the lantern physics math
*   fix: don't hide spears and tridents when an offhand crossbow is charged by @NovaVanity in [https://github.com/tr7zw/NotEnoughAnimations/pull/337](https://github.com/tr7zw/NotEnoughAnimations/pull/337)
*   Update uk_ua localization by @Tenwoc in [https://github.com/tr7zw/NotEnoughAnimations/pull/344](https://github.com/tr7zw/NotEnoughAnimations/pull/344)

New Contributors
----------------

*   @NovaVanity made their first contribution in [https://github.com/tr7zw/NotEnoughAnimations/pull/337](https://github.com/tr7zw/NotEnoughAnimations/pull/337)
*   @Tenwoc made their first contribution in [https://github.com/tr7zw/NotEnoughAnimations/pull/344](https://github.com/tr7zw/NotEnoughAnimations/pull/344)

**Full Changelog**: [https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.4...1.12.5](https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.4...1.12.5)

### 1.12.5-1.21.3 - NeoForge
What's Changed
--------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Resolved some issues with the lantern physics math
*   fix: don't hide spears and tridents when an offhand crossbow is charged by @NovaVanity in [https://github.com/tr7zw/NotEnoughAnimations/pull/337](https://github.com/tr7zw/NotEnoughAnimations/pull/337)
*   Update uk_ua localization by @Tenwoc in [https://github.com/tr7zw/NotEnoughAnimations/pull/344](https://github.com/tr7zw/NotEnoughAnimations/pull/344)

New Contributors
----------------

*   @NovaVanity made their first contribution in [https://github.com/tr7zw/NotEnoughAnimations/pull/337](https://github.com/tr7zw/NotEnoughAnimations/pull/337)
*   @Tenwoc made their first contribution in [https://github.com/tr7zw/NotEnoughAnimations/pull/344](https://github.com/tr7zw/NotEnoughAnimations/pull/344)

**Full Changelog**: [https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.4...1.12.5](https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.4...1.12.5)

### 1.12.5-1.21.11 - NeoForge
What's Changed
--------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Resolved some issues with the lantern physics math
*   fix: don't hide spears and tridents when an offhand crossbow is charged by @NovaVanity in [https://github.com/tr7zw/NotEnoughAnimations/pull/337](https://github.com/tr7zw/NotEnoughAnimations/pull/337)
*   Update uk_ua localization by @Tenwoc in [https://github.com/tr7zw/NotEnoughAnimations/pull/344](https://github.com/tr7zw/NotEnoughAnimations/pull/344)

New Contributors
----------------

*   @NovaVanity made their first contribution in [https://github.com/tr7zw/NotEnoughAnimations/pull/337](https://github.com/tr7zw/NotEnoughAnimations/pull/337)
*   @Tenwoc made their first contribution in [https://github.com/tr7zw/NotEnoughAnimations/pull/344](https://github.com/tr7zw/NotEnoughAnimations/pull/344)

**Full Changelog**: [https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.4...1.12.5](https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.4...1.12.5)

### 1.12.5-1.21.10 - NeoForge
What's Changed
--------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Resolved some issues with the lantern physics math
*   fix: don't hide spears and tridents when an offhand crossbow is charged by @NovaVanity in [https://github.com/tr7zw/NotEnoughAnimations/pull/337](https://github.com/tr7zw/NotEnoughAnimations/pull/337)
*   Update uk_ua localization by @Tenwoc in [https://github.com/tr7zw/NotEnoughAnimations/pull/344](https://github.com/tr7zw/NotEnoughAnimations/pull/344)

New Contributors
----------------

*   @NovaVanity made their first contribution in [https://github.com/tr7zw/NotEnoughAnimations/pull/337](https://github.com/tr7zw/NotEnoughAnimations/pull/337)
*   @Tenwoc made their first contribution in [https://github.com/tr7zw/NotEnoughAnimations/pull/344](https://github.com/tr7zw/NotEnoughAnimations/pull/344)

**Full Changelog**: [https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.4...1.12.5](https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.4...1.12.5)

### 1.12.5-1.21.1 - NeoForge
What's Changed
--------------

*   Add 26.3 Fabric/NeoForge
*   Add 26.2 NeoForge
*   Resolved some issues with the lantern physics math
*   fix: don't hide spears and tridents when an offhand crossbow is charged by @NovaVanity in [https://github.com/tr7zw/NotEnoughAnimations/pull/337](https://github.com/tr7zw/NotEnoughAnimations/pull/337)
*   Update uk_ua localization by @Tenwoc in [https://github.com/tr7zw/NotEnoughAnimations/pull/344](https://github.com/tr7zw/NotEnoughAnimations/pull/344)

New Contributors
----------------

*   @NovaVanity made their first contribution in [https://github.com/tr7zw/NotEnoughAnimations/pull/337](https://github.com/tr7zw/NotEnoughAnimations/pull/337)
*   @Tenwoc made their first contribution in [https://github.com/tr7zw/NotEnoughAnimations/pull/344](https://github.com/tr7zw/NotEnoughAnimations/pull/344)

**Full Changelog**: [https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.4...1.12.5](https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.4...1.12.5)

### 1.12.4-1.21.8 - NeoForge
What's changed
--------------

*   Added Fabric 26.2.x
*   Added NeoForge 26.1.x

Known issues
------------

*   26.2.x NeoForge will be released at a later point, it is so broken right now, that I can't even boot it

**Full Changelog**: [https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.3...1.12.4](https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.3...1.12.4)

### 1.12.4-1.21.5 - NeoForge
What's changed
--------------

*   Added Fabric 26.2.x
*   Added NeoForge 26.1.x

Known issues
------------

*   26.2.x NeoForge will be released at a later point, it is so broken right now, that I can't even boot it

**Full Changelog**: [https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.3...1.12.4](https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.3...1.12.4)

### 1.12.4-1.21.4 - NeoForge
What's changed
--------------

*   Added Fabric 26.2.x
*   Added NeoForge 26.1.x

Known issues
------------

*   26.2.x NeoForge will be released at a later point, it is so broken right now, that I can't even boot it

**Full Changelog**: [https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.3...1.12.4](https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.3...1.12.4)

### 1.12.4-1.21.3 - NeoForge
What's changed
--------------

*   Added Fabric 26.2.x
*   Added NeoForge 26.1.x

Known issues
------------

*   26.2.x NeoForge will be released at a later point, it is so broken right now, that I can't even boot it

**Full Changelog**: [https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.3...1.12.4](https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.3...1.12.4)

### 1.12.4-1.21.11 - NeoForge
What's changed
--------------

*   Added Fabric 26.2.x
*   Added NeoForge 26.1.x

Known issues
------------

*   26.2.x NeoForge will be released at a later point, it is so broken right now, that I can't even boot it

**Full Changelog**: [https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.3...1.12.4](https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.3...1.12.4)

### 1.12.4-1.21.10 - NeoForge
What's changed
--------------

*   Added Fabric 26.2.x
*   Added NeoForge 26.1.x

Known issues
------------

*   26.2.x NeoForge will be released at a later point, it is so broken right now, that I can't even boot it

**Full Changelog**: [https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.3...1.12.4](https://github.com/tr7zw/NotEnoughAnimations/compare/1.12.3...1.12.4)

## Streams Reflowing
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/streams-reflowing)

### Streams Reflowing 2.13.8
Release Highlights
------------------

*   Lakes fill and meet their streams properly: no dry basins, steps, fountains or grass beds.
*   Far less memory over long sessions, and river currents prepared several times faster.
*   Compatibility fixes for Create, Supplementaries, Sable, Fluidlogged, DreamShift and Still Life.

[2.13.8] - 9/16/2026
----------------------

### Fixed

*   World creation no longer sits on a black screen forever when the streams of one area cannot be prepared or their preparation never reports back; the cause is logged and the land generates without them.
*   Loading a world with XyCraft Machines, or any other mod that lists every fluid, no longer crashes.
*   Creating a world no longer leaves a report saying generation had stopped when it was still working normally.

[2.13.7] - 9/15/2026
----------------------

### Fixed

*   A stream no longer starts in the middle of nowhere at full width, with no headwater above it.

[2.13.6] - 9/15/2026
----------------------

### Changed

*   Worlds hold far less memory as they are explored, and memory no longer builds up over long sessions or each time a single-player world is opened.
*   River currents are prepared several times faster on multi-core machines, and take far less work in worlds with underground rivers.
*   Visible river currents no longer wait behind terrain preparation while you explore; on Fabric and Forge they arrive with the land instead of seconds to minutes later.
*   Worlds with a large plate size no longer prepare all their streams again every time the server starts.
*   Cave streams shape their entrances without preparing the neighbouring land.
*   Each loader's jar no longer carries the other loaders' classes.

### Fixed

*   A lake no longer generates with its basin carved but dry, or with a dry patch, a step or a raised patch in its water.
*   Streams crossing a lake no longer leave columns of water standing above its surface and spilling outward as fountains.
*   A stream entering or leaving a lake now meets its surface flush, with no dry gap or notch between the two.
*   A lake a river runs through is no longer removed, which left the streams feeding it ending in mid-air.
*   Lake shores no longer leave gaps of air beside or beneath the water; built-up shores are a rounded bank level with the water.
*   Grass no longer shows through the water where a stream meets a lake or another stream.
*   A stream meeting a river or a shore now stops in the water instead of carrying on past it and ending in a small pool on dry ground.
*   Stream banks no longer show a grid of bare stone or lost turf along chunk borders.
*   Beaches keep the ground their biome gives them instead of stone.
*   Snow along streams in frozen peaks no longer floats in the air above bare packed ice.
*   Swamp water and other pools a stream cuts beside are walled in with matching ground instead of spilling onto its banks.
*   Plants under stream or lake water no longer leave holes or dry cells in it.
*   Streams near the coast in Still Life and similar overhauls take the world's own coastal water biome, and streams and lakes in worlds whose terrain mod has its own rivers take that mod's river instead of the plain vanilla river.
*   Flowing water built beside a stream or across a river carries items and mobs the way it flows, so water-channel farms work anywhere.
*   Zombies and other mobs are carried by gentle streams at least as strongly as by ordinary flowing water.
*   Dropped items no longer shoot ahead in water spilling over a stream or pool; they drift at the water's pace.
*   On Forge, streams flow and carry players and boats again in packs with mods that change how chunks are sent, such as DreamShift.
*   Pumps, pipes, faucets and tanks from other mods always take plain water from streams, so Create boilers and water recipes accept it.
*   Servers with Sable no longer crash when a physics object in a stream's current is removed, such as a despawning Tree Physics tree or a ragdoll.
*   Joining a server no longer crashes the game when Fluidlogged is installed.

[2.13.5] - 9/11/2026
----------------------

### Changed

*   Removed regression caused in 2.13.4 during the dry outlet fix, restored watershed preparation speed increase of 50%
*   Loading land no longer prepares neighbouring stream regions early just to check structures.

### Fixed

*   Stream regions a player is waiting on no longer slow to a crawl later in a session.
*   The stall diagnostic file is no longer written while a player stands still in loaded land.
*   Worlds created on 2.12.9 or later keep their existing streams after updating instead of preparing them again.

[2.13.4] - 9/9/2026
---------------------

### Fixed

*   Added support for the addon "Caves Reflowing".
*   Land no longer stops arriving for up to 30 seconds at the edge of a stream region still being prepared.
*   Streams no longer end on dry land, where it mistook low elevation for ocean.
*   Small structures on a lake bed no longer leave a block of undug ground in the middle of the lake.
*   On Forge and NeoForge, mobs, items and boats now drift at the current's speed, as on Fabric.
*   Water above or below a stream no longer picks up the stream's current.

### Added

*   Effective and Particular waterfall effects now appear where streams actually fall, not along every pool edge. Water off streams is unaffected.
*   Streams with no outlet can continue underground when an addon that supports it is installed. Without one, nothing changes.
*   If chunk generation stalls for 20 seconds, a diagnostic file (streamsreflowing-stall-<time>.txt) is written to the game folder.

[2.13.3] - 9/8/2026
---------------------

### Fixed

*   Large boulders from Oh The Biomes We've Gone and vanilla mossy forests are no longer sliced into chunk-shaped pieces over streams and lakes.
*   Cold streams and lakes no longer freeze in a patchwork along chunk borders.
*   Land no longer stops arriving in a wide band ahead of you while a stream region is prepared.
*   Streams no longer stop short in a shallow sheet of water or on sea-level ground; they reach real ocean, river or swamp water, or are not generated.
*   Structures no longer generate in streams and lakes.
*   The locate command and structure trackers no longer point at structures that will not generate.

[2.13.2] - 9/3/2026
---------------------

### Changed

*   Land arrives faster: stream regions are prepared about twice as quickly, nearest first. Streams are laid out exactly as before.
*   Chunks near water spend far less time waiting to generate.
*   Fallen logs, toppled trees and driftwood beside water (added in 2.13.0) are withdrawn until a later release. Their unedited files in `config/streamsreflowing/bank_features/` are removed on upgrade; edited ones are kept.

[2.13.1] - 8/26/2026
----------------------

### Fixed

*   Rivers no longer dead-end in a pond too small for them.
*   Create water wheels no longer stop turning after a server restart.
*   Waterfall spray no longer appears where no water is falling, such as seabeds reshaped by other mods.
*   The particle limit setting now also covers waterfalls.
*   Fast flat water no longer throws large waterfall foam; it uses fine spray instead.
*   Teleporting no longer leaves your new surroundings waiting behind the old ones.
*   Physics mod fixed finally? Not sure lol I need to download the pro version.
*   Streams and waterfalls now generate on worlds with a custom sea level or world height.
*   Land already generated keeps its streams after a settings change or mod update; stream-layout settings apply to new land only.
*   Small values of the shortest-stream setting now remove short stubs as intended.
*   Streams no longer stop just short of the sea on a drowned shelf or shallow lagoon.
*   Streams now turn with a river's current where they join, instead of cutting across it.
*   Stream mouths are no longer accepted on dry land near water at low detail settings.

### Changed

*   Streams and lakes no longer carve through Oh The Biomes We've Gone's crag gardens (remove it from "biomes to leave alone" to allow them).
*   The default stream particle limit drops from 3000 to 1000.

### Added

*   New setting for which water the shortest-stream rule applies to: ocean, ocean and rivers (default), or ocean, rivers and lakes.
*   Floating debris, barrels and lures from other mods now drift with the current. Lili's Lucky Lures works out of the box; add others with the `streamsreflowing:drifts_in_current` tag.

[2.13.0] - 8/25/2026
----------------------

### Fixed

*   A world now keeps the streams it was created with, exactly. The way terrain is read could settle differently from one session to the next, and whole stream networks could shift with it -- streams no longer move between visits.

### Changed

*   Streams carve about 30% shallower by default (the "stream depth" setting now defaults to 0.24 of the width instead of 0.34). Applies to newly generated chunks.
*   Chunks near streams generate faster on terrain packs with heavy climate noise: the carve asked the world generator for the biome once per column and now asks once per biome cell, with identical results.

### Added

*   A long river now keeps one direction where it crosses between two areas of the map, instead of its current sometimes meeting itself head-on partway along. New setting, "rivers agree across the join", on by default.
*   Rivers that a terrain mod biomes as something else mid-course (an ocean-tagged arm, a cave stretch, a river diving underground and running through caves at sea level) now keep flowing end to end instead of going still where the river biome stops.
*   Bank features: the land beside water now gets hand-built scenery that fits the biome -- fallen logs and whole toppled trees with branches and canopy in the woods, in the local wood, and sun-bleached driftwood on beaches and in dry country. Each piece lands in a random rotation and mirror, sometimes in another wood, and beds into the ground at the foot of its trunk rather than perching on the surface, so a handful of builds never read as copies. They appear at the same spacing along a stream bank as along a river bank or a shoreline. Every one lives in the `config/streamsreflowing/bank_features/` folder as its own file, so you can delete the ones you do not want, change how often each appears, or move it to other biomes -- and a structure you build in-game and save with a structure block can be added the same way.
*   New setting, "bank features": where that scenery may appear -- nowhere, this mod's streams only, streams and its lakes, or every water edge including rivers and oceans (the default).
*   Stream shape now responds to the land, behind seven new settings, each on at half strength by default (0 turns one off; streams are then exactly as before): "width follows slope" (steep reaches run narrower, flat ones wider, and a flat reach over loose sand or gravel opens out very wide and shallow, like a river over fine sediment or a delta), "width follows climate" (wetter biomes carry wider streams), "width variation" (a stream pinches and broadens along its course), "depth follows terrain" (steep, firm-banked reaches cut deeper; flat sandy ones run shallower), "bend asymmetry" (bends run deep against the outer bank with a gravel shelf on the inside, and the deep water swings from side to side as the stream winds), "channel bars" (flat, long-settled reaches with loose sandy or gravelly banks run shallow and braided -- the bed wavers so the water weaves between bars and small islands it builds itself, more so in dry or cold country; and the ground itself decides -- any bed a shovel digs, sand, gravel, dirt or mud, can braid, the quicker-dug the looser, whatever the biome is called, while stone and other pick-mined ground never does; never on steep reaches, and always with open lanes of water through), and "delta mouths" (flat, loose-banked streams fan out as they reach the sea or a lake, with bars inside the fan). The width settings reshape the stream network and apply to new worlds; the others reshape the bed and apply to newly generated chunks of any world.
*   Bank styles can now say how firmly their banks hold (`cohesion`: loose sand and gravel spread wide, shallow and bar up; clay and rooted soil hold narrow and deep) and what coarse material collects on the inside of bends and on bars (`point_bar`). Both are optional; a style that says nothing is judged from its biome's tags.
*   Currents now have STRENGTH, not just direction. Water runs fast where the bed is steep, pinched or deep, barely stirs on a lazy flat, and races over a fall -- and everything in the water feels the difference: items and boats drift at the current's own pace instead of one fixed speed, mobs are carried accordingly, fishing bobbers stay put in slack water, and the spray reads the same way (rapids churn white, slow reaches stay glassy).

[2.12.9] - 8/25/2026
----------------------

### Fixed

*   Joining a dedicated server crashed the game the moment the player came near flowing water, on Forge and NeoForge ("Registry Object not present"). This was introduced in 2.12.8 by the change that lets players without the mod join: the server stopped announcing the stream spray, which opened the door for them -- but a player who has the mod takes the server's word over their own on what exists, so their spray went with it, and the game fell over trying to show it anyway. The game now checks before showing spray, so a server without it just means still-looking water, never a crash. 2.12.7 and earlier were unaffected; if you downgraded to get around this, it is safe to come back.
*   Turning "generate lakes" off filled the world with more lakes than leaving it on. The off switch worked by setting the smallest allowed lake impossibly high, and the arithmetic that converts that limit wrapped it around into the smallest value allowed instead -- so every dimple in the terrain qualified. Off now means no lakes at all, and none of the work of finding them is done either, so the setting is also the performance saving it always claimed to be.
*   The "smallest lake" setting is now respected everywhere. A basin with strong inflow was allowed in at half the configured size -- and however high you set the bar, a well-fed pond of a few blocks could still form. The size you set is now a hard floor for every lake.
*   Floating plants around streams and lakes: grass tops hanging in the air, vines left drifting where a bank was cut away, and single floating tufts above re-dressed banks. Removing a plant's lower half can strand the half above it, and three different cleanup passes each got this wrong in their own way; all three now take the whole plant.
*   The "droplet size" and "spray density" settings did nothing on Forge and NeoForge. They now work on every loader, and density governs all of the spray -- surface bubbles, drifting leaves and sticks, and whitewater, not just waterfalls.
*   Villages and other structures could generate half-carved by a stream, standing in a lake, or floating above ground that had been dug out from beneath them. The mod avoids placing structures on its water where it can -- but early in world generation it sometimes cannot know yet, and a structure that slipped through then had the ground carved from under it. The carve now steps around every placed structure: buildings stand on their own untouched ground, and a stream crossing one simply parts at its walls.
*   Structure compasses and locator maps could point at a structure that was then never built, leaving the marker aimed at nothing. Where the mod knows its rivers, the answer a compass gets and the structure that actually generates now agree; a wet site is skipped by both, and the pointer moves on to one that really appears.
*   Rare errors in server logs during world generation ("Detected unsafe terrain read"), from bank dressing reaching further than it should beside wide channels. Wide-channel banks now stay within safe range, like every other part of the carve.
*   A regular hitch while exploring -- the game pausing for a moment every fifty seconds or so, felt as rubber-banding -- on machines with slower disks or an antivirus watching the game folder. The mod's memory of where currents run was being saved to disk at a moment that made the whole game wait for the disk; it is written quietly in the background now, and nothing waits on it.
*   A rare crash on processors with very high core counts, where two parts of the mod adjusted the size of the same worker pool at the same moment. Machines with many cores resized far more often and so actually hit it; the pools now take turns.
*   Flowing Fluids could drain a stream through the ordinary water beside it. Streams hold their level against it now.

### Added

*   New setting for server owners, "stream spray on a server" (Forge and NeoForge): choose between stream spray for your players, or letting players without the mod join -- one server cannot have both. On by default, since a server running a worldgen mod usually expects its players to have it. Fabric servers need no such choice: there, players with the mod see spray and players without it join freely, always.
*   Structures that must never lose to water can be named in a datapack tag; the water yields to them instead, parting around their walls. Ships covering No Man's Land's meeting points, so its progression trail always leads to a real structure.

[2.12.8] - 8/20/2026
----------------------

### Fixed

*   Servers now accept players who do not have the mod installed on fabric, neoforge support is closer to completion.
*   Worlds generated by ReTerraForged were not being read through it, even though the mod was installed and working. Streams then re-derived every height from scratch the slow way, which is a large part of why generating them on those worlds was so slow. If it ever cannot read that terrain now, it says so in the log instead of quietly carrying on.
*   Stacked grass blocks along carved banks, where a bank was dressed in a material that belongs only on top. Turf sits on the surface with dirt beneath it now, as natural ground is layered. This covers modded grass as well as vanilla's.
*   Dedicated servers running NeoForge could not start at all with 2.12.7 installed: mod loading failed outright, reporting that a client-only screen class had been requested on a server. The in-game settings button is now set up only where there is a screen to open it. Clients and singleplayer were never affected.
*   Create machines could not use stream water. A hose pulley set into a stream drained it happily but filled its tank with a fluid of its own name that no recipe would accept; machines are handed ordinary water now. This only ever applied where the mod's dedicated stream water is in use (worlds running Flowing Fluids, or the "force baked fluid" setting) and the stream itself is untouched.
*   Blocks placed in that same stream water stayed dry. A fence, slab or stair standing in a stream now fills with water exactly as it would in a river of ordinary water.
*   Settings changed on Fabric did nothing until the game was restarted. The config is re-read at every world launch, and the files are now watched, so an edit takes effect straight away.
*   The Physics Mod laid a second, shimmering animation over flowing stream water, which flickered against the mod's own current. When that mod is present its water effect is now switched off, leaving one animation on the water; its ocean waves are untouched, and the new "Physics Mod water" setting turns the behaviour off if you would rather see both.
*   Bare subsoil along the tops of banks that a carve had only just grazed. A column barely touched now keeps the turf it already had, whatever the slope beneath it.
*   Swamp streams ran over gravel. Swamp beds and waterlines are mud now, as in a mangrove swamp; above the water the bank takes the ground's own material, as every bank does. This holds for any swamp, not just the vanilla one -- a modded swamp that also counts as plains, taiga, hills, woodland, dry or snowy used to be able to take that biome's gravel instead, and can no longer do so.

### Added

*   New setting, "biomes streams may open into": which biomes a stream is allowed to end in, as a list of biome tags and ids. Rivers, oceans, swamps and wetlands by default. A biome counts if it lies within one cell of the mouth, so water sitting just outside the biome that owns it (the last blocks of a river, the edge of a swamp pool) still ends a stream properly. Leave it empty to accept any body of water at all. This mod's own lakes always end a stream whatever the list says. A stream with nowhere it may end is not generated, so a shorter list means fewer streams.
*   New settings, "mobs that hold in currents" and "mobs that drift in currents": name any mob to override whether the water carries it. For a modded swimmer the game does not class as aquatic, or anything you would rather was not washed downstream. A mob named in both drifts.

### Changed

*   Banks now wear the ground's own material above the waterline, in every biome rather than only the ones that named one. Beds and waterlines keep their designated blocks, which is where a chosen material belongs; banks are the part that has to meet whatever land it runs into. Styles that deliberately leave the bank alone are unchanged.
*   Bank dressing now counts ground up to and including 45 degrees as walkable, so a gentle bank keeps its turf further up, while anything steeper stays a bare cut face as before.

[2.12.7] - 8/19/2026
----------------------

### Added

*   Full in-game config overhaul. Now players have access to all options in a well formatted menu when configured or mod menu is installed. (It is known that tooltips will cut off at the top of the screen, and changes will be made in the future to prevent this.)
*   Streams now reach rivers at ANY elevation, including rivers a terrain mod carves high in the mountains, and end in them the way they end in a lake -- flush, at the river's own water level. Previously a stream could only finish at the sea or at one of this mod's lakes, so whole watersheds around a highland river simply had no streams in them.
*   The mod now recognises rivers from any terrain or biome mod, rather than a list of known ones, and names its stream water after whichever river that world would naturally put there -- so streams read as part of the local landscape instead of a foreign river type.
*   Streams and lakes are now separate settings, "generate streams" and "generate lakes", so you can have one without the other -- lakes in a world with no streams, or streams that run to the sea and to rivers with no lakes anywhere. Together they replace the old "generate rivers" switch: with both off the mod does no terrain work at all -- no height sampling, no watershed building -- and generation costs what it would with the mod absent, while natural river currents keep working if you want just those.
*   New settings, "particle size" and "particle density". Size changes how the spray reads -- fine mist through to fat gobbets -- and density changes how much water is in the air. They are independent by design: the amount of spray stays constant as you change its size, because the droplet count follows size in inverse square, the same rule that already keeps distant waterfalls matching near ones. Density is the dial to turn down for frames, and it governs surface bubbles, drifting debris and whitewater as well as waterfall spray. (Stream and waterfall loudness already has its own setting, "water ambience".)
*   New setting, "force baked fluid": always fill stream channels with the mod's own dedicated stream water instead of plain water, for setups where something interferes with plain-water streams -- water-physics mods draining them, or structures whose own water spills into a channel. The stream fluid stays put and keeps its current, and while the setting is on, the "water spills over water" behaviour applies only to the stream fluid, leaving plain vanilla water spreading untouched. New chunks only; players joining a server with this on need the mod installed.
*   New setting, "spill on streams only" (on by default). "Water spills over water" now applies to this mod's own streams rather than every water block in the world, so ponds, lakes, farms and anything players build spread exactly as vanilla water does again. Turn it off to restore the old whole-world behaviour.
*   ReTerraForged support, on by default and inert without it (new setting, "reterraforged integration"). Streams follow that mod's own terrain instead of re-deriving it, which makes stream generation faster on those worlds, and its rivers -- which it generates with no current of their own -- now flow. If you use ReTerraForged, a larger plate size is recommended and its own natural rivers are best turned off: they are small enough that stream networks have little to connect to.
*   Servers running this mod on Fabric now genuinely accept players who do not have it installed. Despite the 2.12.3 change, such clients were still turned away at connection ("This server requires Fabric API installed on your client"), because the mod registered content a joining game is required to know about -- content that never appears in a normal world. A dedicated server now only registers it for the worlds that actually contain it (servers running Flowing Fluids, or old worlds needing the "legacy stream fluid" setting); on every other server, players without the mod connect and see ordinary still water. Singleplayer is unchanged.

### Fixed

*   Water in the Nether and the End could be given a current, in patches that looked random. Streams are an overworld feature and are only ever built there, but the check that asks "does this water carry a current?" knew a position and not which world it was in -- so water standing at the same coordinates as an overworld stream inherited that stream's flow, wherever it was. On a server this pushed boats and items around in those pools too. Currents are now confined to the overworld, and on Fabric the currents from the world you left are dropped when you travel to another dimension.
*   Natural rivers could run two ways at once, splitting somewhere along their length instead of flowing one way to the sea. The way a river's direction is decided has been returned to the version that did not do this; a river now settles on one direction along its whole length.
*   Bare dirt and stone along the tops of stream banks, where the carved bank levels out into untouched land. Banks are dressed with the ground's own material, and the pass that dresses water's edge was reading the column after it had been cut -- so it laid the exposed subsoil back down as if that were the surface. It now works from what the ground looked like before the carve, so a bank ends in the same turf as the land it runs into.
*   Plants stopped bank dressing altogether: a column with grass or a fern growing on it was mistaken for one made of grass, and skipped. The ground beneath the plant is dressed now.
*   Where two biomes' bank styles meet, the change of material fell on a dead-straight line. It now breaks up along the boundary, the same way the biomes themselves do.
*   Where a stream ends in the sea, the current no longer converges on a single point. It spreads outward into the water instead, opening out from the mouth. Rivers that merely run along a coast are untouched.
*   Creating a world could fail outright -- generation stopping near the end and the new world vanishing -- on some terrain-mod combinations. Naming stream and lake areas after their water is cosmetic, but on worlds whose chunks refuse to be renamed it was stopping generation. It is skipped on those worlds now, with a note in the log; the water, the terrain and everything else are unaffected.
*   The patterned bands across lake beds and shores, which followed chunk edges and rearranged themselves every time an area was regenerated. Deciding how to dress the ground around water, the mod looked at the water actually placed in the neighbouring chunks -- but its own lakes and streams are placed chunk by chunk as the land generates, so whether the water was there yet depended on which chunk happened to be built first, and that order changes from run to run. Ground beside a lake was dressed when its neighbour came first and left bare when it did not. The mod now asks its own plan where its water is, which reads the same from any chunk at any time, so a lake bed is dressed the same way whichever order the land is built in.
*   A column on a chunk border could also fail to notice a lake one block away in the next chunk, and treated itself as dry land -- banking and freezing as if the lake were not there.
*   Bands of river-coloured bank and bed blocks along chunk borders, which moved every time an area was regenerated -- and the related patches of ice, and the odd blocks left where a lake had been skipped for a blacklisted biome. All the same cause: asking "which biome is this?" nudges the answer up to two blocks, so a column near a chunk border could be answered by the neighbouring chunk instead, and streams are marked as river at the very end of a chunk's generation. A border column therefore got "this is a river" or "this is forest" depending purely on whether the chunk next door had finished yet, which varies from run to run. Those questions now read the land itself, which gives the same answer from anywhere at any time, so bank materials, plants and the biome blacklist no longer change at chunk borders.
*   Stream particles and sounds could appear underwater, at the bottom of a river, pond or shallow sea: water overhead with solid ground beneath is the same shape as the foot of a waterfall, so a submerged bed was occasionally mistaken for one. Falling water now has to have open air beside it, and a stream surface has to have open air above it, so nothing bubbles or roars from inside the ground or under a sea.
*   Stream sounds kept playing where water had been removed. The current map a stream's sound is read from is built when the land generates, so it went on describing a river through ground that had since been drained, dammed or built over. Sound now also checks that water is really still there, so draining a channel silences it within a few seconds, and refilling it brings it back.
*   The "particles on vanilla water" setting works as intended again. It is meant to choose between effects on any falling water and effects only on this mod's streams, but because streams are ordinary water, turning it off used to switch stream waterfall effects off altogether rather than narrowing them. It now scopes by which water carries a current, so both choices behave sensibly -- and the narrow one is also much cheaper.
*   Natural river currents now work on their own. Turning the mod's own generation off used to silence them too, even though they are vanilla's rivers and need no stream, lake or watershed of ours to flow.
*   Skeletons and zombies are no longer immune to stream currents. Water creatures hold their position against a current so they can swim normally, and the undead were being swept into that group for merely not drowning -- so they stood in flowing water as if it were still. They are carried by the current now, like every other land mob. Drowned still swim freely, as do fish, dolphins, squid, turtles, axolotls, guardians, frogs and tagged modded aquatic mobs.
*   The 1.20.1 versions are building again after a change that only compiled on newer Minecraft versions.

### Changed

*   Every setting now carries a performance notice AND a note saying when it takes effect and whether it is safe to change on a world you have already played: some apply the moment you save, some apply to chunks generated from then on, some need the world reloaded first, and the ones that reshape the stream network warn that new land will not line up with old and are best chosen before starting a world. From "the biggest dial: off costs nothing" down to "negligible, shape only", with the particle options marked as costing frames. Hovering a setting in the Fabric config screen shows that option's full description, its performance line and its world-safety note; on NeoForge and Forge the same text appears in the config files and in mod-config browsers like Configured.
*   The Fabric config screen is now grouped by category -- General, Performance, Appearance, Water, Experimental, Particles & Sound -- one category per page, with the category named at the top.
*   The Mod Menu config screen on Fabric now shows every setting, not just a handful of headline dials. It lists the config files themselves -- both the worldgen/gameplay file and the client file, every option in order, across pages -- so options added in future versions can never be missing from it. Toggles for on/off settings, a level cycle for terrain accuracy, and text fields (validated on save) for everything else; edits are written into the config files with their comments intact.
*   Bank dressing follows the shape of the ground: walkable ground gets the surface material with soil beneath it, as natural ground is layered, while a cut face or a cliff stays bare rock and soil all the way up. Below the waterline nothing changes.
*   Ground levelled up against a carved bank is finished with the surface of the land it meets rather than the material underneath, so filled seams are no longer visible as bare patches.
*   When the river re-biome uses the mod's own stream biome, that biome now takes its climate from wherever it runs: one biome identity for all stream water, freezing, snowing and raining exactly like the land around it.
*   Travelling through the nether now prepares the overworld overhead: the stream region directly above a nether player is readied in the background as they move, so coming back through a portal into fresh terrain no longer means a long wait while that region prepares.

### Removed

*   The "generate rivers" setting, replaced by "generate streams" and "generate lakes" (see Added). The old name described neither what it controlled nor what it cost.
*   The experimental "converge spills" setting, which turned two colliding flows into a new water source. It was off by default and superseded by the way streams are contained now.

[2.12.6] - 8/13/2026
----------------------

### Changed

*   Rivers and oceans keep their own shoreline. Where a stream meets naturally generated water, the bank above the waterline is left exactly as the biome grew it instead of being re-surfaced, so beaches, cliffs and grass run unbroken into the water. Only the parts genuinely under water are dressed. This covers every vanilla river and ocean, and modded ones that use the common tags.
*   River beds now carry gravel and clay.
*   Clay on the biomes that recently gained it (plains, forests and taiga) has moved below the water. It is a bed deposit now, mixed through the gravel on the bottom, instead of a stripe at the waterline or up the bank.

[2.12.5] - Unreleased
-----------------------

### Fixed

*   Console error spam on some setups -- "Detected unsafe terrain read during worldgen ... streamsreflowing:river" repeating during world generation. The probes behind it also made a waterfall's landing shape near chunk borders depend on generation timing; they now stay within the area guaranteed stable, so the result is the same every time and the errors are gone.
*   Missing features return to 1.20.1 forge from a broken build on last release.

### Changed

*   A performance pass over preparing the terrain around areas that form lakes. Worlds on several popular terrain packs build new stream regions substantially faster.

[2.12.4] - Unreleased
-----------------------

### Changed

*   Faster stream preparation on more worlds. Several popular terrain packs (alone and in combination) that previously prepared at the slower baseline now use the optimised path, including on Minecraft 26.1 and 26.2, and the choice is verified against the world's real terrain each time.

### Fixed

*   Streams that met a lake below its surface and climbed up into it at the shore. A stream making contact with a lake now holds at that lake's surface through its whole approach, arriving level and entering flush and every branch feeding that stream is held the same way, so no feeder steps up into held water at a junction. A lake whose incoming water genuinely rises from below its surface which would leave the lake perched over the stream breaching it is not placed at all.
*   "Saving world" hanging forever when quitting while nearby terrain was still generating.

[2.12.3] - Unreleased
-----------------------

### Added

*   Servers running this mod now accept players who do NOT have it installed. The water-current channel is optional, so a vanilla client connects normally and simply sees still water; everything else -- the carved valleys, streams, lakes and banks is part of the world itself and looks the same to everyone.
*   New setting, "river drainage area": how large an area a river's current is worked out over. Larger areas let a long river find its true outlet, so its current runs the right way along its length.
*   The stream-density setting now reaches 2.0: values above 1.0 give a sparser network than the classic one, where a valley carries a single stream instead of a branching set.

### Fixed

*   Vanilla rivers now run more often one way from source to sea.
*   Multi-second freezes while playing, most noticeable when arriving somewhere new, teleporting, or re-entering a regenerated area. Delivering the currents for newly visible water was rebuilding far more of the world's appearance than it needed to, all in the same instant.
*   River and stream currents that took a long time to appear sometimes a minute or more, as if they were waiting for every chunk in sight to finish. Currents now arrive with the water itself, and the few that genuinely have to wait fill in within a second or so.
*   Water in some places losing its biome colour and rendering plain blue, after creating several worlds in a single play session.
*   Small dotted holes cut into hillsides near streams, and the walls and vertical slices that were being carved into the sides of hills alongside them.
*   Low walls no longer follow flat, gentle stretches of stream one block off the water; a raised lip is only built where fast water rides the outside of a bend, it is a single block high, stands a little further from the water's edge, and is built solid.

### Changed

*   Stream berms return to their earlier shape: narrower, with a single flat shoulder at the water's edge before the bank rises.

[2.12.1] - 8/10/2026
----------------------

### Fixed

*   Streams meeting a pond or pool along their course no longer build a walled, ramped channel over the water: the stream now merges into water it runs close above, and a fall ending over open water drops straight in -- no cup, no walls, no earthen ramp connecting it to the surface. Where a stream reaches a body of water, its banks open up from that point on instead of walling the water in.
*   Waterfalls no longer leave stray banks behind: sections of raised bank standing in mid-air along the line the stream would have taken, single blocks of water perched above the pool, and low walls at the foot of a fall are all gone. A stream's banks now follow the water itself, so a whole reach is either contained or open rather than alternating block by block.
*   Raised banks no longer break open where a stream runs along the edge of lower water, and the notches that let water leak out through those gaps are filled.
*   Streams no longer dip for a block or two mid-course, leaving a hollow in the water surface, and no longer leave a lone block of water standing above the rest of the stream.
*   Earthworks are never built through standing water: the small submerged walls that used to trace a stream's path along a lake or river bed are gone.
*   Banks beside a stream now hold flat at the water's level for a block or two before rising, and their outermost block steps back down to the shore, so a bank reads as a shore rather than a wall.
*   A stream running off a sheer drop above a river no longer builds a smooth earthen ramp connecting it down to the water: when real water lies below the drop, the fall is left open and the stream plunges straight in.
*   Streams crossing ravines or running over caves no longer build colossal earthen supports filling the space below them. Every stream now keeps the same shallow, natural cup under its bed regardless of its width -- wide rivers included.
*   Large recurring frame stutters while standing still, most visible with per-block colour resolvers such as Serene Seasons' (reported with a Spark profile -- thank you). Two causes in the water-colour lookup, both fixed: its coordinate keys collided badly enough to turn cache reads into tree walks, and cells still waiting on unloaded chunks re-ran their whole search on every colour resolve instead of being remembered until the chunks arrive.

### Changed

*   Banks alongside streams are wider and spread more gently into the surrounding ground.
*   The `/streams` diagnostic commands are consolidated from eleven subcommands to five: `trace` (every column diagnostic at your feet), `map` (every area map), `regen`, `client` and `census`.
*   `/streams regen` replaces `/streams carve`: instead of re-carving terrain in place (which compounded the carve's own output and wrecked the area), it marks the surrounding chunks and regenerates them from scratch at the next world open, with full diagnostics logged during the regeneration. It asks for an in-chat confirmation first, since everything in those chunks is discarded.
*   Added two new audio types for streams, 'roar close' and 'roar far'.
*   Improved stream audio to play linearly and universally from sources.
*   Tweaked stream audio volume levels.

[2.12.0] - Unreleased
-----------------------

### Fixed

*   Broken lakes on packs using the fast terrain path: partially formed lakes with hard, chunk-aligned water edges, lakes whose water level disagreed with the streams around them, and lakes that came out differently each time the same seed was generated. The terrain path is now decided once per world and remembered, so every part of a world -- and every regeneration of the same seed -- agrees about where water belongs. Existing worlds keep their already-generated terrain but stop producing new inconsistencies from here on.
*   Lake shorelines are now smooth curves instead of blocky, sometimes chunk-aligned edges: the water fills the whole basin it was planned to, shorelines are rounded at every scale, and streams meet their lakes properly (inlets blend into open water instead of stopping at an invisible wall).
*   Small hills inside a lake's footprint no longer survive as buried pockets or dry patches: high ground standing where the lake belongs is reshaped into lakebed, and stream-mouth banks no longer build over freshly placed lake water.
*   Flying quickly along a stream no longer makes the water ambience stutter and restart -- the sound now carries through continuously as you follow the water.

### Tweaked

*   Waterfall sound now comes from each individual cascade around you rather than one blended point, so standing between falls places each one where it really is. Falls fade out by 72 blocks instead of carrying much farther.
*   Stream ambience sits closer to the water: the brook layer fades sooner with distance, and the at-the-water's-edge layer plays quieter overall.

[2.11.0] - 8/5/2026
---------------------

### Performance

*   Chunk loading around streams is substantially faster.
*   Fixed a rare scheduling gap where a chunk waiting on this mod's terrain preparation could be left waiting behind background work; those chunks are now always served first, and the preparation they wait on always gets capacity immediately.
*   Entering a newly created world no longer competes with this mod's background preparation during the first moments after joining, and speculative preparation now follows a player's recent direction of travel more responsively.

### Added

*   Streams and the lakes this mod carves are now marked as river by default, so they read as rivers for the fish and mobs that spawn in them, for ambience, and for anything else that looks for a river -- while keeping the water colour of the biome they run through. A stream through a swamp looks like swamp water; one through a jungle looks like jungle water. New chunks only.
*   What spawns in a marked stream always matches what spawns in `minecraft:river` on your exact pack: the stream serves the vanilla river's live spawn list, so fish and mobs that other mods add to rivers -- however those mods target the river -- appear in streams identically.
*   `rebiomeStreams` and `rebiomeLakes` now take three settings instead of on/off: `0` leaves streams as the biome they run through, `1` marks them as river but keeps the surrounding water colour (the new default), and `2` marks them as plain `minecraft:river`. Choose `2` if another mod's river fish, mobs or features are not showing up in your streams -- some mods name `minecraft:river` directly rather than matching any river, and only `2` satisfies those. Existing configs keep what they had: an old `false` becomes `0`, an old `true` becomes `2`.
*   Config files now keep themselves current: when an option changes shape between versions, is renamed, or a value falls outside its allowed range, the file is rewritten to show the setting actually in effect, and options added since the file was written appear in it automatically.
*   New `/streams tintmap` and `/streams tintclient` commands for diagnosing water marking and colour.
*   Clay riverbanks in plains, deciduous forest and taiga: patches of clay along the water's edge, kept at and below the waterline with softened edges, the way vanilla rivers carry clay.

### Tweaked

*   Clay spawns in streams in more biomes.

[2.10.7] - 8/3/2026
---------------------

### Fixed

*   Rivers no longer pinch to a thin thread partway along their course and widen again afterwards. A wide river could narrow to a trickle for a stretch, with its water sitting a block higher through the pinch and dropping back once the river resumed, so a stretch of water ran visibly uphill and then downhill again. Rivers now keep their width, and their surface only ever falls downstream.
*   Walls and pillars of untouched ground left standing in the middle of a carved hillside, sometimes fifteen blocks tall and well back from the water. The bank shaping that produced them now applies only near the water, where it belongs, and anything of the sort left over is now taken down.
*   Small pits and gashes beside streams that the terrain smoothing left unpatched -- often a single column, sunk between ground the smoothing had just raised on either side of it.

### Added

*   New config option `rebiomeLakes`: marks the lakes this mod carves as river, the same way `rebiomeStreams` already does for streams, so a lake reads as river water for its colour, for the fish and mobs that spawn in it, and for ambience. Where a mod supplies its own river for the local climate, a lake takes that one, exactly as a stream there would. Off by default; new chunks only.

[2.10.6] - 8/3/2026
---------------------

### Fixed

*   Streams no longer stop at the water's edge where they meet a lake. A stream crossing or entering a lake kept its channel right up to the shore and then simply ended, leaving a lake-shaped wall standing underwater across the stream and a bowl of untouched lakebed inside it. The channel now runs on under the water, so a stream reads as one continuous course from one shore to the other.
*   Ridges flanking a stream where it passes in or out of a lake -- two raised lines tracing the channel's edges, standing up through the water.
*   Half-formed lakes. A lake could generate as a set of squared-off fragments with the underlying grid showing through, streams running past as though the water were not there. Lakes are now checked against the real ground before they are placed, and a basin that does not truly hold water is not made into a lake at all.
*   Towers and uncarved ground standing in open water. Where two streams ran close together, ground that belonged in one stream's channel could be left standing because a smaller stream nearby claimed it and did nothing with it.
*   Ground left uncarved between two streams whose banks overlap. The two cuts now meet as one surface instead of one stopping where the other begins.
*   Trees cut by a stream no longer leave their leaves hanging in the air for minutes afterward. A canopy left with nothing holding it up is now cleared at once, while a canopy still touching a neighbouring tree is left alone.

### Changed

*   Where a lower stream's cut is held up beside a higher one, the ground now eases down toward the lower stream instead of ending in a flat shelf and a sheer drop.
*   Terrain smoothing now looks for walls left anywhere in a carve, not only where a carve met the edge of a chunk.

[2.10.5] - Unreleased
-----------------------

### Fixed

*   Sable physics objects were carried far too fast by stream currents -- dropping one into a stream sent it flying forward. The current was moving them twice over; it now carries them once, at the same pace as floating items, scaling with the item drift speed setting.
*   With Sable Beyond 0.5 or newer installed, its flowing-water forces and ours both pushed the same vessel, compounding into far too much speed. Stream water now carries vessels at our controlled drift pace alone; Sable Beyond keeps pushing everything else (lava and modded fluids) untouched.

### Added

*   New setting `vesselDriftSpeed`: how fast the current carries Sable physics vessels, in blocks per second. Set it to 0 to leave vessels entirely to your other mods -- we then neither carry them nor hold back anyone else's water push.
*   Sable support now covers Fabric as well as NeoForge, with the same drift speed, the same setting, and the same handling of Sable Beyond's water push.
*   Sable physics objects resting on a platform above a stream were dragged along by the water beneath them. The current now only carries objects the water actually touches.
*   Shallow sheets of water lying over the landscape. A wide, almost flat hollow could be filled as a lake even though the water came out barely a block deep, so instead of a lake you got a skin of water following the shape of the ground, squared off at its edges, sometimes spreading well past the hollow and hanging above a stream running below it. A hollow now has to hold real depth across its whole area before it becomes a lake. New chunks only.
*   Streams running across ground that was never there. Where a hollow was filled in only so the water had somewhere to go, and no lake formed in it, a stream could still be laid across the top of it -- a channel and its banks standing on nothing. New chunks only.
*   Bare stone down the face of a deeply cut bank. Only the top of the bank was finished, so anything below it showed the rock underneath even where the surrounding cliffs are clay, sand or terracotta. The whole visible face is now finished in the material the surrounding land actually uses.
*   Terrain smoothing no longer leaves single blocks standing alone. Where it eased the ground up toward something the land could not follow, it could finish as a one-block tower; it now stops short and leaves a slope instead.

### Changed

*   Streams leave a lake at the lake's own level for a shorter distance before beginning to descend.
*   Banks in biomes without a style of their own are now finished in that biome's own material rather than left bare. This covers modded biomes automatically, including ones added after this release.
*   Still Life's river biomes are left as they generate, with no bank finishing applied.

[2.10.4] - 8/2/2026
---------------------

### Fixed

*   Streams leaving a lake no longer drop away the moment they clear the water. The channel a stream runs in is cut below ground level, while a lake's water sits at ground level, so a stream left its lake through a two or three block step -- a high bowl with the water suddenly below it. The channel now starts flush with the lake and deepens over the first few blocks. New chunks only.
*   A ragged trench along one side of a stream, and lines of single-block holes dotted along bank edges. Both came from the bank being worked out for each column on its own, so neighbouring columns could disagree by several blocks. Banks now follow their neighbours. New chunks only.
*   Terrain smoothing can no longer place ground higher than the land originally stood in that column, and now runs only where there is an actual step to ease. Away from those steps the landscape is left exactly as the terrain generated it.

[2.10.3] - 7/31/2026
----------------------

### Fixed

*   Long freezes while exploring. Moving through new terrain could stop the game for several seconds at a time, worst near rivers. The current a river carries was being worked out at the moment a chunk reached you, so the game waited on it; it is now prepared in the background and the water simply starts flowing a moment later. Freezes are far less frequent and far shorter, and the longest ones are gone.
*   Chunks load faster around streams. The flow of a chunk's water was being recalculated repeatedly, including for ground that had already been worked out, which slowed loading everywhere streams run.
*   A world-generation crash on packs whose chunks are generated one at a time -- "Accessing PalettedContainer from multiple threads" -- most often reported alongside mods that replace chunk storage. It could also leave chunks unloading around the player. Fixed on 1.21.1 and 1.20.1. If you are on an older build and cannot update, setting `fastChunkLoading` to `false` avoids it.
*   Powered vehicles from physics mods could be thrown forward when they touched down on flowing water. Craft simply drifting with the current were already correct and are unchanged.

### Added

*   New config option `fastChunkLoading`: loads chunks faster on packs that generate chunks in parallel, and does nothing on packs that do not. Leave it on unless world generation crashes or chunks stop loading around you. Default on.

### Changed

*   Returning to a world you have already explored is faster. How each chunk's water flows is now remembered between sessions rather than being worked out again every time you load in.
*   Yellowstone (Terralith) and Caldera (Terrestria) no longer have streams cut through them by default. Both read wrong with a river running through them. New chunks only; add or remove them from `streamBiomeBlacklist` to choose for yourself.

[2.10.2]
----------

### Changed

*   Stream banks are now planted with grass and ferns by default. Re-running the biome's own plants and rocks along the water ("biome-boost") is no longer switched on automatically at any quality level -- it places another mod's decoration in spots its author did not choose, so it is now something you turn on rather than something you get by default. Set `vegetation` (and `allWaterFlora`, for other water) to `2` to bring it back. Affects new chunks only.
*   The `qualityPreset` setting is now called `terrainAccuracyLevel`. Existing configs keep their setting -- the old name is still read if the new one has not been set.

### Added

*   New config option `minStreamLength`: the shortest stream, in blocks, allowed to run from its own source straight into the sea. Anything shorter is dropped, which clears the short stubs that can dot a coastline. Streams that join another stream, or end in a lake, are never affected, and dry biomes are always exempt. Default 50 (unchanged behaviour); 0 keeps every stream. New chunks only.

### Fixed

*   Faster stream generation is now used only where it is actually faster. On some terrain setups the shortcut cost as much as the full-accuracy path, so those worlds were doing extra work for nothing; they now simply use full accuracy.
*   Accelerated stream generation now works on more modded terrain setups, including packs that combine several terrain mods, and refuses to run wherever it cannot reproduce the world's own terrain exactly -- so a world either generates faster or generates exactly as it always did, never something in between.
*   Streams flowing out of a lake now leave it at the lake's own level. They used to start a couple of blocks lower, so the water dropped over a small step the moment it left. New chunks only.
*   Villages, temples and other structures no longer generate in lakes. Lakes were not being considered when deciding whether a structure had clear ground, so one could be dropped straight into the water. The clear zone around streams is wider too, so a building no longer ends up overhanging a channel it barely touches. Structures buried well below the water, such as mineshafts, are still left alone. New chunks only.
*   Spikes and short pillars no longer appear along the top edge of waterfall drops.
*   Terrain smoothing now only reshapes ground the stream carving itself cut into. Natural cliffs, ravine walls and rock formations near a stream are left exactly as your terrain mods made them, and smoothing no longer builds ramps up towards floating structures, boulders or treetops. New chunks only.
*   Stream currents now appear as chunks generate, instead of arriving once the surrounding area has finished loading.
*   Fixed streams generating with no current at all in some worlds.
*   Create water wheels and similar current-driven machines now work on dedicated servers.
*   Lakes no longer leave overhanging or floating blocks above the waterline, and no longer leave trapped air pockets where the water meets the shore. New chunks only.
*   Fixed memory that was not released when leaving a world, which could build up over several worlds in a single session.
*   The config screen now opens correctly on Minecraft 26.x.
*   Removed repeated "unsafe terrain read" warnings from the log.

[2.10.1] - 2026-07-28
-----------------------

### Removed

*   The experimental accelerated stream generation option (`acceleratedStreamGeneration`) has been removed. On some setups it could leave the game unresponsive while exploring. Worlds generate exactly the same as before; if you had the setting enabled, it is simply ignored now and can be deleted from your config.

[2.10.0] - 2026-07-25
-----------------------

### Added

*   Accelerated stream generation (config `acceleratedStreamGeneration`, on by default): new stream regions can prepare much faster where the setup supports it.

### Fixed

*   Terrain smoothing around streams no longer stacks grass blocks into striped banks: built-up columns now match natural terrain (grass on top, soil below, rock deeper), the same as an undisturbed column cut from the surrounding land.
*   Terrain smoothing no longer places floating blocks
*   Terrain smoothing no loonger places cup shapes around tree trunks in rare casess

### Streams Reflowing 2.13.8
Release Highlights
------------------

*   Lakes fill and meet their streams properly: no dry basins, steps, fountains or grass beds.
*   Far less memory over long sessions, and river currents prepared several times faster.
*   Compatibility fixes for Create, Supplementaries, Sable, Fluidlogged, DreamShift and Still Life.

[2.13.8] - 9/16/2026
----------------------

### Fixed

*   World creation no longer sits on a black screen forever when the streams of one area cannot be prepared or their preparation never reports back; the cause is logged and the land generates without them.
*   Loading a world with XyCraft Machines, or any other mod that lists every fluid, no longer crashes.
*   Creating a world no longer leaves a report saying generation had stopped when it was still working normally.

[2.13.7] - 9/15/2026
----------------------

### Fixed

*   A stream no longer starts in the middle of nowhere at full width, with no headwater above it.

[2.13.6] - 9/15/2026
----------------------

### Changed

*   Worlds hold far less memory as they are explored, and memory no longer builds up over long sessions or each time a single-player world is opened.
*   River currents are prepared several times faster on multi-core machines, and take far less work in worlds with underground rivers.
*   Visible river currents no longer wait behind terrain preparation while you explore; on Fabric and Forge they arrive with the land instead of seconds to minutes later.
*   Worlds with a large plate size no longer prepare all their streams again every time the server starts.
*   Cave streams shape their entrances without preparing the neighbouring land.
*   Each loader's jar no longer carries the other loaders' classes.

### Fixed

*   A lake no longer generates with its basin carved but dry, or with a dry patch, a step or a raised patch in its water.
*   Streams crossing a lake no longer leave columns of water standing above its surface and spilling outward as fountains.
*   A stream entering or leaving a lake now meets its surface flush, with no dry gap or notch between the two.
*   A lake a river runs through is no longer removed, which left the streams feeding it ending in mid-air.
*   Lake shores no longer leave gaps of air beside or beneath the water; built-up shores are a rounded bank level with the water.
*   Grass no longer shows through the water where a stream meets a lake or another stream.
*   A stream meeting a river or a shore now stops in the water instead of carrying on past it and ending in a small pool on dry ground.
*   Stream banks no longer show a grid of bare stone or lost turf along chunk borders.
*   Beaches keep the ground their biome gives them instead of stone.
*   Snow along streams in frozen peaks no longer floats in the air above bare packed ice.
*   Swamp water and other pools a stream cuts beside are walled in with matching ground instead of spilling onto its banks.
*   Plants under stream or lake water no longer leave holes or dry cells in it.
*   Streams near the coast in Still Life and similar overhauls take the world's own coastal water biome, and streams and lakes in worlds whose terrain mod has its own rivers take that mod's river instead of the plain vanilla river.
*   Flowing water built beside a stream or across a river carries items and mobs the way it flows, so water-channel farms work anywhere.
*   Zombies and other mobs are carried by gentle streams at least as strongly as by ordinary flowing water.
*   Dropped items no longer shoot ahead in water spilling over a stream or pool; they drift at the water's pace.
*   On Forge, streams flow and carry players and boats again in packs with mods that change how chunks are sent, such as DreamShift.
*   Pumps, pipes, faucets and tanks from other mods always take plain water from streams, so Create boilers and water recipes accept it.
*   Servers with Sable no longer crash when a physics object in a stream's current is removed, such as a despawning Tree Physics tree or a ragdoll.
*   Joining a server no longer crashes the game when Fluidlogged is installed.

[2.13.5] - 9/11/2026
----------------------

### Changed

*   Removed regression caused in 2.13.4 during the dry outlet fix, restored watershed preparation speed increase of 50%
*   Loading land no longer prepares neighbouring stream regions early just to check structures.

### Fixed

*   Stream regions a player is waiting on no longer slow to a crawl later in a session.
*   The stall diagnostic file is no longer written while a player stands still in loaded land.
*   Worlds created on 2.12.9 or later keep their existing streams after updating instead of preparing them again.

[2.13.4] - 9/9/2026
---------------------

### Fixed

*   Added support for the addon "Caves Reflowing".
*   Land no longer stops arriving for up to 30 seconds at the edge of a stream region still being prepared.
*   Streams no longer end on dry land, where it mistook low elevation for ocean.
*   Small structures on a lake bed no longer leave a block of undug ground in the middle of the lake.
*   On Forge and NeoForge, mobs, items and boats now drift at the current's speed, as on Fabric.
*   Water above or below a stream no longer picks up the stream's current.

### Added

*   Effective and Particular waterfall effects now appear where streams actually fall, not along every pool edge. Water off streams is unaffected.
*   Streams with no outlet can continue underground when an addon that supports it is installed. Without one, nothing changes.
*   If chunk generation stalls for 20 seconds, a diagnostic file (streamsreflowing-stall-<time>.txt) is written to the game folder.

[2.13.3] - 9/8/2026
---------------------

### Fixed

*   Large boulders from Oh The Biomes We've Gone and vanilla mossy forests are no longer sliced into chunk-shaped pieces over streams and lakes.
*   Cold streams and lakes no longer freeze in a patchwork along chunk borders.
*   Land no longer stops arriving in a wide band ahead of you while a stream region is prepared.
*   Streams no longer stop short in a shallow sheet of water or on sea-level ground; they reach real ocean, river or swamp water, or are not generated.
*   Structures no longer generate in streams and lakes.
*   The locate command and structure trackers no longer point at structures that will not generate.

[2.13.2] - 9/3/2026
---------------------

### Changed

*   Land arrives faster: stream regions are prepared about twice as quickly, nearest first. Streams are laid out exactly as before.
*   Chunks near water spend far less time waiting to generate.
*   Fallen logs, toppled trees and driftwood beside water (added in 2.13.0) are withdrawn until a later release. Their unedited files in `config/streamsreflowing/bank_features/` are removed on upgrade; edited ones are kept.

[2.13.1] - 8/26/2026
----------------------

### Fixed

*   Rivers no longer dead-end in a pond too small for them.
*   Create water wheels no longer stop turning after a server restart.
*   Waterfall spray no longer appears where no water is falling, such as seabeds reshaped by other mods.
*   The particle limit setting now also covers waterfalls.
*   Fast flat water no longer throws large waterfall foam; it uses fine spray instead.
*   Teleporting no longer leaves your new surroundings waiting behind the old ones.
*   Physics mod fixed finally? Not sure lol I need to download the pro version.
*   Streams and waterfalls now generate on worlds with a custom sea level or world height.
*   Land already generated keeps its streams after a settings change or mod update; stream-layout settings apply to new land only.
*   Small values of the shortest-stream setting now remove short stubs as intended.
*   Streams no longer stop just short of the sea on a drowned shelf or shallow lagoon.
*   Streams now turn with a river's current where they join, instead of cutting across it.
*   Stream mouths are no longer accepted on dry land near water at low detail settings.

### Changed

*   Streams and lakes no longer carve through Oh The Biomes We've Gone's crag gardens (remove it from "biomes to leave alone" to allow them).
*   The default stream particle limit drops from 3000 to 1000.

### Added

*   New setting for which water the shortest-stream rule applies to: ocean, ocean and rivers (default), or ocean, rivers and lakes.
*   Floating debris, barrels and lures from other mods now drift with the current. Lili's Lucky Lures works out of the box; add others with the `streamsreflowing:drifts_in_current` tag.

[2.13.0] - 8/25/2026
----------------------

### Fixed

*   A world now keeps the streams it was created with, exactly. The way terrain is read could settle differently from one session to the next, and whole stream networks could shift with it -- streams no longer move between visits.

### Changed

*   Streams carve about 30% shallower by default (the "stream depth" setting now defaults to 0.24 of the width instead of 0.34). Applies to newly generated chunks.
*   Chunks near streams generate faster on terrain packs with heavy climate noise: the carve asked the world generator for the biome once per column and now asks once per biome cell, with identical results.

### Added

*   A long river now keeps one direction where it crosses between two areas of the map, instead of its current sometimes meeting itself head-on partway along. New setting, "rivers agree across the join", on by default.
*   Rivers that a terrain mod biomes as something else mid-course (an ocean-tagged arm, a cave stretch, a river diving underground and running through caves at sea level) now keep flowing end to end instead of going still where the river biome stops.
*   Bank features: the land beside water now gets hand-built scenery that fits the biome -- fallen logs and whole toppled trees with branches and canopy in the woods, in the local wood, and sun-bleached driftwood on beaches and in dry country. Each piece lands in a random rotation and mirror, sometimes in another wood, and beds into the ground at the foot of its trunk rather than perching on the surface, so a handful of builds never read as copies. They appear at the same spacing along a stream bank as along a river bank or a shoreline. Every one lives in the `config/streamsreflowing/bank_features/` folder as its own file, so you can delete the ones you do not want, change how often each appears, or move it to other biomes -- and a structure you build in-game and save with a structure block can be added the same way.
*   New setting, "bank features": where that scenery may appear -- nowhere, this mod's streams only, streams and its lakes, or every water edge including rivers and oceans (the default).
*   Stream shape now responds to the land, behind seven new settings, each on at half strength by default (0 turns one off; streams are then exactly as before): "width follows slope" (steep reaches run narrower, flat ones wider, and a flat reach over loose sand or gravel opens out very wide and shallow, like a river over fine sediment or a delta), "width follows climate" (wetter biomes carry wider streams), "width variation" (a stream pinches and broadens along its course), "depth follows terrain" (steep, firm-banked reaches cut deeper; flat sandy ones run shallower), "bend asymmetry" (bends run deep against the outer bank with a gravel shelf on the inside, and the deep water swings from side to side as the stream winds), "channel bars" (flat, long-settled reaches with loose sandy or gravelly banks run shallow and braided -- the bed wavers so the water weaves between bars and small islands it builds itself, more so in dry or cold country; and the ground itself decides -- any bed a shovel digs, sand, gravel, dirt or mud, can braid, the quicker-dug the looser, whatever the biome is called, while stone and other pick-mined ground never does; never on steep reaches, and always with open lanes of water through), and "delta mouths" (flat, loose-banked streams fan out as they reach the sea or a lake, with bars inside the fan). The width settings reshape the stream network and apply to new worlds; the others reshape the bed and apply to newly generated chunks of any world.
*   Bank styles can now say how firmly their banks hold (`cohesion`: loose sand and gravel spread wide, shallow and bar up; clay and rooted soil hold narrow and deep) and what coarse material collects on the inside of bends and on bars (`point_bar`). Both are optional; a style that says nothing is judged from its biome's tags.
*   Currents now have STRENGTH, not just direction. Water runs fast where the bed is steep, pinched or deep, barely stirs on a lazy flat, and races over a fall -- and everything in the water feels the difference: items and boats drift at the current's own pace instead of one fixed speed, mobs are carried accordingly, fishing bobbers stay put in slack water, and the spray reads the same way (rapids churn white, slow reaches stay glassy).

[2.12.9] - 8/25/2026
----------------------

### Fixed

*   Joining a dedicated server crashed the game the moment the player came near flowing water, on Forge and NeoForge ("Registry Object not present"). This was introduced in 2.12.8 by the change that lets players without the mod join: the server stopped announcing the stream spray, which opened the door for them -- but a player who has the mod takes the server's word over their own on what exists, so their spray went with it, and the game fell over trying to show it anyway. The game now checks before showing spray, so a server without it just means still-looking water, never a crash. 2.12.7 and earlier were unaffected; if you downgraded to get around this, it is safe to come back.
*   Turning "generate lakes" off filled the world with more lakes than leaving it on. The off switch worked by setting the smallest allowed lake impossibly high, and the arithmetic that converts that limit wrapped it around into the smallest value allowed instead -- so every dimple in the terrain qualified. Off now means no lakes at all, and none of the work of finding them is done either, so the setting is also the performance saving it always claimed to be.
*   The "smallest lake" setting is now respected everywhere. A basin with strong inflow was allowed in at half the configured size -- and however high you set the bar, a well-fed pond of a few blocks could still form. The size you set is now a hard floor for every lake.
*   Floating plants around streams and lakes: grass tops hanging in the air, vines left drifting where a bank was cut away, and single floating tufts above re-dressed banks. Removing a plant's lower half can strand the half above it, and three different cleanup passes each got this wrong in their own way; all three now take the whole plant.
*   The "droplet size" and "spray density" settings did nothing on Forge and NeoForge. They now work on every loader, and density governs all of the spray -- surface bubbles, drifting leaves and sticks, and whitewater, not just waterfalls.
*   Villages and other structures could generate half-carved by a stream, standing in a lake, or floating above ground that had been dug out from beneath them. The mod avoids placing structures on its water where it can -- but early in world generation it sometimes cannot know yet, and a structure that slipped through then had the ground carved from under it. The carve now steps around every placed structure: buildings stand on their own untouched ground, and a stream crossing one simply parts at its walls.
*   Structure compasses and locator maps could point at a structure that was then never built, leaving the marker aimed at nothing. Where the mod knows its rivers, the answer a compass gets and the structure that actually generates now agree; a wet site is skipped by both, and the pointer moves on to one that really appears.
*   Rare errors in server logs during world generation ("Detected unsafe terrain read"), from bank dressing reaching further than it should beside wide channels. Wide-channel banks now stay within safe range, like every other part of the carve.
*   A regular hitch while exploring -- the game pausing for a moment every fifty seconds or so, felt as rubber-banding -- on machines with slower disks or an antivirus watching the game folder. The mod's memory of where currents run was being saved to disk at a moment that made the whole game wait for the disk; it is written quietly in the background now, and nothing waits on it.
*   A rare crash on processors with very high core counts, where two parts of the mod adjusted the size of the same worker pool at the same moment. Machines with many cores resized far more often and so actually hit it; the pools now take turns.
*   Flowing Fluids could drain a stream through the ordinary water beside it. Streams hold their level against it now.

### Added

*   New setting for server owners, "stream spray on a server" (Forge and NeoForge): choose between stream spray for your players, or letting players without the mod join -- one server cannot have both. On by default, since a server running a worldgen mod usually expects its players to have it. Fabric servers need no such choice: there, players with the mod see spray and players without it join freely, always.
*   Structures that must never lose to water can be named in a datapack tag; the water yields to them instead, parting around their walls. Ships covering No Man's Land's meeting points, so its progression trail always leads to a real structure.

[2.12.8] - 8/20/2026
----------------------

### Fixed

*   Servers now accept players who do not have the mod installed on fabric, neoforge support is closer to completion.
*   Worlds generated by ReTerraForged were not being read through it, even though the mod was installed and working. Streams then re-derived every height from scratch the slow way, which is a large part of why generating them on those worlds was so slow. If it ever cannot read that terrain now, it says so in the log instead of quietly carrying on.
*   Stacked grass blocks along carved banks, where a bank was dressed in a material that belongs only on top. Turf sits on the surface with dirt beneath it now, as natural ground is layered. This covers modded grass as well as vanilla's.
*   Dedicated servers running NeoForge could not start at all with 2.12.7 installed: mod loading failed outright, reporting that a client-only screen class had been requested on a server. The in-game settings button is now set up only where there is a screen to open it. Clients and singleplayer were never affected.
*   Create machines could not use stream water. A hose pulley set into a stream drained it happily but filled its tank with a fluid of its own name that no recipe would accept; machines are handed ordinary water now. This only ever applied where the mod's dedicated stream water is in use (worlds running Flowing Fluids, or the "force baked fluid" setting) and the stream itself is untouched.
*   Blocks placed in that same stream water stayed dry. A fence, slab or stair standing in a stream now fills with water exactly as it would in a river of ordinary water.
*   Settings changed on Fabric did nothing until the game was restarted. The config is re-read at every world launch, and the files are now watched, so an edit takes effect straight away.
*   The Physics Mod laid a second, shimmering animation over flowing stream water, which flickered against the mod's own current. When that mod is present its water effect is now switched off, leaving one animation on the water; its ocean waves are untouched, and the new "Physics Mod water" setting turns the behaviour off if you would rather see both.
*   Bare subsoil along the tops of banks that a carve had only just grazed. A column barely touched now keeps the turf it already had, whatever the slope beneath it.
*   Swamp streams ran over gravel. Swamp beds and waterlines are mud now, as in a mangrove swamp; above the water the bank takes the ground's own material, as every bank does. This holds for any swamp, not just the vanilla one -- a modded swamp that also counts as plains, taiga, hills, woodland, dry or snowy used to be able to take that biome's gravel instead, and can no longer do so.

### Added

*   New setting, "biomes streams may open into": which biomes a stream is allowed to end in, as a list of biome tags and ids. Rivers, oceans, swamps and wetlands by default. A biome counts if it lies within one cell of the mouth, so water sitting just outside the biome that owns it (the last blocks of a river, the edge of a swamp pool) still ends a stream properly. Leave it empty to accept any body of water at all. This mod's own lakes always end a stream whatever the list says. A stream with nowhere it may end is not generated, so a shorter list means fewer streams.
*   New settings, "mobs that hold in currents" and "mobs that drift in currents": name any mob to override whether the water carries it. For a modded swimmer the game does not class as aquatic, or anything you would rather was not washed downstream. A mob named in both drifts.

### Changed

*   Banks now wear the ground's own material above the waterline, in every biome rather than only the ones that named one. Beds and waterlines keep their designated blocks, which is where a chosen material belongs; banks are the part that has to meet whatever land it runs into. Styles that deliberately leave the bank alone are unchanged.
*   Bank dressing now counts ground up to and including 45 degrees as walkable, so a gentle bank keeps its turf further up, while anything steeper stays a bare cut face as before.

[2.12.7] - 8/19/2026
----------------------

### Added

*   Full in-game config overhaul. Now players have access to all options in a well formatted menu when configured or mod menu is installed. (It is known that tooltips will cut off at the top of the screen, and changes will be made in the future to prevent this.)
*   Streams now reach rivers at ANY elevation, including rivers a terrain mod carves high in the mountains, and end in them the way they end in a lake -- flush, at the river's own water level. Previously a stream could only finish at the sea or at one of this mod's lakes, so whole watersheds around a highland river simply had no streams in them.
*   The mod now recognises rivers from any terrain or biome mod, rather than a list of known ones, and names its stream water after whichever river that world would naturally put there -- so streams read as part of the local landscape instead of a foreign river type.
*   Streams and lakes are now separate settings, "generate streams" and "generate lakes", so you can have one without the other -- lakes in a world with no streams, or streams that run to the sea and to rivers with no lakes anywhere. Together they replace the old "generate rivers" switch: with both off the mod does no terrain work at all -- no height sampling, no watershed building -- and generation costs what it would with the mod absent, while natural river currents keep working if you want just those.
*   New settings, "particle size" and "particle density". Size changes how the spray reads -- fine mist through to fat gobbets -- and density changes how much water is in the air. They are independent by design: the amount of spray stays constant as you change its size, because the droplet count follows size in inverse square, the same rule that already keeps distant waterfalls matching near ones. Density is the dial to turn down for frames, and it governs surface bubbles, drifting debris and whitewater as well as waterfall spray. (Stream and waterfall loudness already has its own setting, "water ambience".)
*   New setting, "force baked fluid": always fill stream channels with the mod's own dedicated stream water instead of plain water, for setups where something interferes with plain-water streams -- water-physics mods draining them, or structures whose own water spills into a channel. The stream fluid stays put and keeps its current, and while the setting is on, the "water spills over water" behaviour applies only to the stream fluid, leaving plain vanilla water spreading untouched. New chunks only; players joining a server with this on need the mod installed.
*   New setting, "spill on streams only" (on by default). "Water spills over water" now applies to this mod's own streams rather than every water block in the world, so ponds, lakes, farms and anything players build spread exactly as vanilla water does again. Turn it off to restore the old whole-world behaviour.
*   ReTerraForged support, on by default and inert without it (new setting, "reterraforged integration"). Streams follow that mod's own terrain instead of re-deriving it, which makes stream generation faster on those worlds, and its rivers -- which it generates with no current of their own -- now flow. If you use ReTerraForged, a larger plate size is recommended and its own natural rivers are best turned off: they are small enough that stream networks have little to connect to.
*   Servers running this mod on Fabric now genuinely accept players who do not have it installed. Despite the 2.12.3 change, such clients were still turned away at connection ("This server requires Fabric API installed on your client"), because the mod registered content a joining game is required to know about -- content that never appears in a normal world. A dedicated server now only registers it for the worlds that actually contain it (servers running Flowing Fluids, or old worlds needing the "legacy stream fluid" setting); on every other server, players without the mod connect and see ordinary still water. Singleplayer is unchanged.

### Fixed

*   Water in the Nether and the End could be given a current, in patches that looked random. Streams are an overworld feature and are only ever built there, but the check that asks "does this water carry a current?" knew a position and not which world it was in -- so water standing at the same coordinates as an overworld stream inherited that stream's flow, wherever it was. On a server this pushed boats and items around in those pools too. Currents are now confined to the overworld, and on Fabric the currents from the world you left are dropped when you travel to another dimension.
*   Natural rivers could run two ways at once, splitting somewhere along their length instead of flowing one way to the sea. The way a river's direction is decided has been returned to the version that did not do this; a river now settles on one direction along its whole length.
*   Bare dirt and stone along the tops of stream banks, where the carved bank levels out into untouched land. Banks are dressed with the ground's own material, and the pass that dresses water's edge was reading the column after it had been cut -- so it laid the exposed subsoil back down as if that were the surface. It now works from what the ground looked like before the carve, so a bank ends in the same turf as the land it runs into.
*   Plants stopped bank dressing altogether: a column with grass or a fern growing on it was mistaken for one made of grass, and skipped. The ground beneath the plant is dressed now.
*   Where two biomes' bank styles meet, the change of material fell on a dead-straight line. It now breaks up along the boundary, the same way the biomes themselves do.
*   Where a stream ends in the sea, the current no longer converges on a single point. It spreads outward into the water instead, opening out from the mouth. Rivers that merely run along a coast are untouched.
*   Creating a world could fail outright -- generation stopping near the end and the new world vanishing -- on some terrain-mod combinations. Naming stream and lake areas after their water is cosmetic, but on worlds whose chunks refuse to be renamed it was stopping generation. It is skipped on those worlds now, with a note in the log; the water, the terrain and everything else are unaffected.
*   The patterned bands across lake beds and shores, which followed chunk edges and rearranged themselves every time an area was regenerated. Deciding how to dress the ground around water, the mod looked at the water actually placed in the neighbouring chunks -- but its own lakes and streams are placed chunk by chunk as the land generates, so whether the water was there yet depended on which chunk happened to be built first, and that order changes from run to run. Ground beside a lake was dressed when its neighbour came first and left bare when it did not. The mod now asks its own plan where its water is, which reads the same from any chunk at any time, so a lake bed is dressed the same way whichever order the land is built in.
*   A column on a chunk border could also fail to notice a lake one block away in the next chunk, and treated itself as dry land -- banking and freezing as if the lake were not there.
*   Bands of river-coloured bank and bed blocks along chunk borders, which moved every time an area was regenerated -- and the related patches of ice, and the odd blocks left where a lake had been skipped for a blacklisted biome. All the same cause: asking "which biome is this?" nudges the answer up to two blocks, so a column near a chunk border could be answered by the neighbouring chunk instead, and streams are marked as river at the very end of a chunk's generation. A border column therefore got "this is a river" or "this is forest" depending purely on whether the chunk next door had finished yet, which varies from run to run. Those questions now read the land itself, which gives the same answer from anywhere at any time, so bank materials, plants and the biome blacklist no longer change at chunk borders.
*   Stream particles and sounds could appear underwater, at the bottom of a river, pond or shallow sea: water overhead with solid ground beneath is the same shape as the foot of a waterfall, so a submerged bed was occasionally mistaken for one. Falling water now has to have open air beside it, and a stream surface has to have open air above it, so nothing bubbles or roars from inside the ground or under a sea.
*   Stream sounds kept playing where water had been removed. The current map a stream's sound is read from is built when the land generates, so it went on describing a river through ground that had since been drained, dammed or built over. Sound now also checks that water is really still there, so draining a channel silences it within a few seconds, and refilling it brings it back.
*   The "particles on vanilla water" setting works as intended again. It is meant to choose between effects on any falling water and effects only on this mod's streams, but because streams are ordinary water, turning it off used to switch stream waterfall effects off altogether rather than narrowing them. It now scopes by which water carries a current, so both choices behave sensibly -- and the narrow one is also much cheaper.
*   Natural river currents now work on their own. Turning the mod's own generation off used to silence them too, even though they are vanilla's rivers and need no stream, lake or watershed of ours to flow.
*   Skeletons and zombies are no longer immune to stream currents. Water creatures hold their position against a current so they can swim normally, and the undead were being swept into that group for merely not drowning -- so they stood in flowing water as if it were still. They are carried by the current now, like every other land mob. Drowned still swim freely, as do fish, dolphins, squid, turtles, axolotls, guardians, frogs and tagged modded aquatic mobs.
*   The 1.20.1 versions are building again after a change that only compiled on newer Minecraft versions.

### Changed

*   Every setting now carries a performance notice AND a note saying when it takes effect and whether it is safe to change on a world you have already played: some apply the moment you save, some apply to chunks generated from then on, some need the world reloaded first, and the ones that reshape the stream network warn that new land will not line up with old and are best chosen before starting a world. From "the biggest dial: off costs nothing" down to "negligible, shape only", with the particle options marked as costing frames. Hovering a setting in the Fabric config screen shows that option's full description, its performance line and its world-safety note; on NeoForge and Forge the same text appears in the config files and in mod-config browsers like Configured.
*   The Fabric config screen is now grouped by category -- General, Performance, Appearance, Water, Experimental, Particles & Sound -- one category per page, with the category named at the top.
*   The Mod Menu config screen on Fabric now shows every setting, not just a handful of headline dials. It lists the config files themselves -- both the worldgen/gameplay file and the client file, every option in order, across pages -- so options added in future versions can never be missing from it. Toggles for on/off settings, a level cycle for terrain accuracy, and text fields (validated on save) for everything else; edits are written into the config files with their comments intact.
*   Bank dressing follows the shape of the ground: walkable ground gets the surface material with soil beneath it, as natural ground is layered, while a cut face or a cliff stays bare rock and soil all the way up. Below the waterline nothing changes.
*   Ground levelled up against a carved bank is finished with the surface of the land it meets rather than the material underneath, so filled seams are no longer visible as bare patches.
*   When the river re-biome uses the mod's own stream biome, that biome now takes its climate from wherever it runs: one biome identity for all stream water, freezing, snowing and raining exactly like the land around it.
*   Travelling through the nether now prepares the overworld overhead: the stream region directly above a nether player is readied in the background as they move, so coming back through a portal into fresh terrain no longer means a long wait while that region prepares.

### Removed

*   The "generate rivers" setting, replaced by "generate streams" and "generate lakes" (see Added). The old name described neither what it controlled nor what it cost.
*   The experimental "converge spills" setting, which turned two colliding flows into a new water source. It was off by default and superseded by the way streams are contained now.

[2.12.6] - 8/13/2026
----------------------

### Changed

*   Rivers and oceans keep their own shoreline. Where a stream meets naturally generated water, the bank above the waterline is left exactly as the biome grew it instead of being re-surfaced, so beaches, cliffs and grass run unbroken into the water. Only the parts genuinely under water are dressed. This covers every vanilla river and ocean, and modded ones that use the common tags.
*   River beds now carry gravel and clay.
*   Clay on the biomes that recently gained it (plains, forests and taiga) has moved below the water. It is a bed deposit now, mixed through the gravel on the bottom, instead of a stripe at the waterline or up the bank.

[2.12.5] - Unreleased
-----------------------

### Fixed

*   Console error spam on some setups -- "Detected unsafe terrain read during worldgen ... streamsreflowing:river" repeating during world generation. The probes behind it also made a waterfall's landing shape near chunk borders depend on generation timing; they now stay within the area guaranteed stable, so the result is the same every time and the errors are gone.
*   Missing features return to 1.20.1 forge from a broken build on last release.

### Changed

*   A performance pass over preparing the terrain around areas that form lakes. Worlds on several popular terrain packs build new stream regions substantially faster.

[2.12.4] - Unreleased
-----------------------

### Changed

*   Faster stream preparation on more worlds. Several popular terrain packs (alone and in combination) that previously prepared at the slower baseline now use the optimised path, including on Minecraft 26.1 and 26.2, and the choice is verified against the world's real terrain each time.

### Fixed

*   Streams that met a lake below its surface and climbed up into it at the shore. A stream making contact with a lake now holds at that lake's surface through its whole approach, arriving level and entering flush and every branch feeding that stream is held the same way, so no feeder steps up into held water at a junction. A lake whose incoming water genuinely rises from below its surface which would leave the lake perched over the stream breaching it is not placed at all.
*   "Saving world" hanging forever when quitting while nearby terrain was still generating.

[2.12.3] - Unreleased
-----------------------

### Added

*   Servers running this mod now accept players who do NOT have it installed. The water-current channel is optional, so a vanilla client connects normally and simply sees still water; everything else -- the carved valleys, streams, lakes and banks is part of the world itself and looks the same to everyone.
*   New setting, "river drainage area": how large an area a river's current is worked out over. Larger areas let a long river find its true outlet, so its current runs the right way along its length.
*   The stream-density setting now reaches 2.0: values above 1.0 give a sparser network than the classic one, where a valley carries a single stream instead of a branching set.

### Fixed

*   Vanilla rivers now run more often one way from source to sea.
*   Multi-second freezes while playing, most noticeable when arriving somewhere new, teleporting, or re-entering a regenerated area. Delivering the currents for newly visible water was rebuilding far more of the world's appearance than it needed to, all in the same instant.
*   River and stream currents that took a long time to appear sometimes a minute or more, as if they were waiting for every chunk in sight to finish. Currents now arrive with the water itself, and the few that genuinely have to wait fill in within a second or so.
*   Water in some places losing its biome colour and rendering plain blue, after creating several worlds in a single play session.
*   Small dotted holes cut into hillsides near streams, and the walls and vertical slices that were being carved into the sides of hills alongside them.
*   Low walls no longer follow flat, gentle stretches of stream one block off the water; a raised lip is only built where fast water rides the outside of a bend, it is a single block high, stands a little further from the water's edge, and is built solid.

### Changed

*   Stream berms return to their earlier shape: narrower, with a single flat shoulder at the water's edge before the bank rises.

[2.12.1] - 8/10/2026
----------------------

### Fixed

*   Streams meeting a pond or pool along their course no longer build a walled, ramped channel over the water: the stream now merges into water it runs close above, and a fall ending over open water drops straight in -- no cup, no walls, no earthen ramp connecting it to the surface. Where a stream reaches a body of water, its banks open up from that point on instead of walling the water in.
*   Waterfalls no longer leave stray banks behind: sections of raised bank standing in mid-air along the line the stream would have taken, single blocks of water perched above the pool, and low walls at the foot of a fall are all gone. A stream's banks now follow the water itself, so a whole reach is either contained or open rather than alternating block by block.
*   Raised banks no longer break open where a stream runs along the edge of lower water, and the notches that let water leak out through those gaps are filled.
*   Streams no longer dip for a block or two mid-course, leaving a hollow in the water surface, and no longer leave a lone block of water standing above the rest of the stream.
*   Earthworks are never built through standing water: the small submerged walls that used to trace a stream's path along a lake or river bed are gone.
*   Banks beside a stream now hold flat at the water's level for a block or two before rising, and their outermost block steps back down to the shore, so a bank reads as a shore rather than a wall.
*   A stream running off a sheer drop above a river no longer builds a smooth earthen ramp connecting it down to the water: when real water lies below the drop, the fall is left open and the stream plunges straight in.
*   Streams crossing ravines or running over caves no longer build colossal earthen supports filling the space below them. Every stream now keeps the same shallow, natural cup under its bed regardless of its width -- wide rivers included.
*   Large recurring frame stutters while standing still, most visible with per-block colour resolvers such as Serene Seasons' (reported with a Spark profile -- thank you). Two causes in the water-colour lookup, both fixed: its coordinate keys collided badly enough to turn cache reads into tree walks, and cells still waiting on unloaded chunks re-ran their whole search on every colour resolve instead of being remembered until the chunks arrive.

### Changed

*   Banks alongside streams are wider and spread more gently into the surrounding ground.
*   The `/streams` diagnostic commands are consolidated from eleven subcommands to five: `trace` (every column diagnostic at your feet), `map` (every area map), `regen`, `client` and `census`.
*   `/streams regen` replaces `/streams carve`: instead of re-carving terrain in place (which compounded the carve's own output and wrecked the area), it marks the surrounding chunks and regenerates them from scratch at the next world open, with full diagnostics logged during the regeneration. It asks for an in-chat confirmation first, since everything in those chunks is discarded.
*   Added two new audio types for streams, 'roar close' and 'roar far'.
*   Improved stream audio to play linearly and universally from sources.
*   Tweaked stream audio volume levels.

[2.12.0] - Unreleased
-----------------------

### Fixed

*   Broken lakes on packs using the fast terrain path: partially formed lakes with hard, chunk-aligned water edges, lakes whose water level disagreed with the streams around them, and lakes that came out differently each time the same seed was generated. The terrain path is now decided once per world and remembered, so every part of a world -- and every regeneration of the same seed -- agrees about where water belongs. Existing worlds keep their already-generated terrain but stop producing new inconsistencies from here on.
*   Lake shorelines are now smooth curves instead of blocky, sometimes chunk-aligned edges: the water fills the whole basin it was planned to, shorelines are rounded at every scale, and streams meet their lakes properly (inlets blend into open water instead of stopping at an invisible wall).
*   Small hills inside a lake's footprint no longer survive as buried pockets or dry patches: high ground standing where the lake belongs is reshaped into lakebed, and stream-mouth banks no longer build over freshly placed lake water.
*   Flying quickly along a stream no longer makes the water ambience stutter and restart -- the sound now carries through continuously as you follow the water.

### Tweaked

*   Waterfall sound now comes from each individual cascade around you rather than one blended point, so standing between falls places each one where it really is. Falls fade out by 72 blocks instead of carrying much farther.
*   Stream ambience sits closer to the water: the brook layer fades sooner with distance, and the at-the-water's-edge layer plays quieter overall.

[2.11.0] - 8/5/2026
---------------------

### Performance

*   Chunk loading around streams is substantially faster.
*   Fixed a rare scheduling gap where a chunk waiting on this mod's terrain preparation could be left waiting behind background work; those chunks are now always served first, and the preparation they wait on always gets capacity immediately.
*   Entering a newly created world no longer competes with this mod's background preparation during the first moments after joining, and speculative preparation now follows a player's recent direction of travel more responsively.

### Added

*   Streams and the lakes this mod carves are now marked as river by default, so they read as rivers for the fish and mobs that spawn in them, for ambience, and for anything else that looks for a river -- while keeping the water colour of the biome they run through. A stream through a swamp looks like swamp water; one through a jungle looks like jungle water. New chunks only.
*   What spawns in a marked stream always matches what spawns in `minecraft:river` on your exact pack: the stream serves the vanilla river's live spawn list, so fish and mobs that other mods add to rivers -- however those mods target the river -- appear in streams identically.
*   `rebiomeStreams` and `rebiomeLakes` now take three settings instead of on/off: `0` leaves streams as the biome they run through, `1` marks them as river but keeps the surrounding water colour (the new default), and `2` marks them as plain `minecraft:river`. Choose `2` if another mod's river fish, mobs or features are not showing up in your streams -- some mods name `minecraft:river` directly rather than matching any river, and only `2` satisfies those. Existing configs keep what they had: an old `false` becomes `0`, an old `true` becomes `2`.
*   Config files now keep themselves current: when an option changes shape between versions, is renamed, or a value falls outside its allowed range, the file is rewritten to show the setting actually in effect, and options added since the file was written appear in it automatically.
*   New `/streams tintmap` and `/streams tintclient` commands for diagnosing water marking and colour.
*   Clay riverbanks in plains, deciduous forest and taiga: patches of clay along the water's edge, kept at and below the waterline with softened edges, the way vanilla rivers carry clay.

### Tweaked

*   Clay spawns in streams in more biomes.

[2.10.7] - 8/3/2026
---------------------

### Fixed

*   Rivers no longer pinch to a thin thread partway along their course and widen again afterwards. A wide river could narrow to a trickle for a stretch, with its water sitting a block higher through the pinch and dropping back once the river resumed, so a stretch of water ran visibly uphill and then downhill again. Rivers now keep their width, and their surface only ever falls downstream.
*   Walls and pillars of untouched ground left standing in the middle of a carved hillside, sometimes fifteen blocks tall and well back from the water. The bank shaping that produced them now applies only near the water, where it belongs, and anything of the sort left over is now taken down.
*   Small pits and gashes beside streams that the terrain smoothing left unpatched -- often a single column, sunk between ground the smoothing had just raised on either side of it.

### Added

*   New config option `rebiomeLakes`: marks the lakes this mod carves as river, the same way `rebiomeStreams` already does for streams, so a lake reads as river water for its colour, for the fish and mobs that spawn in it, and for ambience. Where a mod supplies its own river for the local climate, a lake takes that one, exactly as a stream there would. Off by default; new chunks only.

[2.10.6] - 8/3/2026
---------------------

### Fixed

*   Streams no longer stop at the water's edge where they meet a lake. A stream crossing or entering a lake kept its channel right up to the shore and then simply ended, leaving a lake-shaped wall standing underwater across the stream and a bowl of untouched lakebed inside it. The channel now runs on under the water, so a stream reads as one continuous course from one shore to the other.
*   Ridges flanking a stream where it passes in or out of a lake -- two raised lines tracing the channel's edges, standing up through the water.
*   Half-formed lakes. A lake could generate as a set of squared-off fragments with the underlying grid showing through, streams running past as though the water were not there. Lakes are now checked against the real ground before they are placed, and a basin that does not truly hold water is not made into a lake at all.
*   Towers and uncarved ground standing in open water. Where two streams ran close together, ground that belonged in one stream's channel could be left standing because a smaller stream nearby claimed it and did nothing with it.
*   Ground left uncarved between two streams whose banks overlap. The two cuts now meet as one surface instead of one stopping where the other begins.
*   Trees cut by a stream no longer leave their leaves hanging in the air for minutes afterward. A canopy left with nothing holding it up is now cleared at once, while a canopy still touching a neighbouring tree is left alone.

### Changed

*   Where a lower stream's cut is held up beside a higher one, the ground now eases down toward the lower stream instead of ending in a flat shelf and a sheer drop.
*   Terrain smoothing now looks for walls left anywhere in a carve, not only where a carve met the edge of a chunk.

[2.10.5] - Unreleased
-----------------------

### Fixed

*   Sable physics objects were carried far too fast by stream currents -- dropping one into a stream sent it flying forward. The current was moving them twice over; it now carries them once, at the same pace as floating items, scaling with the item drift speed setting.
*   With Sable Beyond 0.5 or newer installed, its flowing-water forces and ours both pushed the same vessel, compounding into far too much speed. Stream water now carries vessels at our controlled drift pace alone; Sable Beyond keeps pushing everything else (lava and modded fluids) untouched.

### Added

*   New setting `vesselDriftSpeed`: how fast the current carries Sable physics vessels, in blocks per second. Set it to 0 to leave vessels entirely to your other mods -- we then neither carry them nor hold back anyone else's water push.
*   Sable support now covers Fabric as well as NeoForge, with the same drift speed, the same setting, and the same handling of Sable Beyond's water push.
*   Sable physics objects resting on a platform above a stream were dragged along by the water beneath them. The current now only carries objects the water actually touches.
*   Shallow sheets of water lying over the landscape. A wide, almost flat hollow could be filled as a lake even though the water came out barely a block deep, so instead of a lake you got a skin of water following the shape of the ground, squared off at its edges, sometimes spreading well past the hollow and hanging above a stream running below it. A hollow now has to hold real depth across its whole area before it becomes a lake. New chunks only.
*   Streams running across ground that was never there. Where a hollow was filled in only so the water had somewhere to go, and no lake formed in it, a stream could still be laid across the top of it -- a channel and its banks standing on nothing. New chunks only.
*   Bare stone down the face of a deeply cut bank. Only the top of the bank was finished, so anything below it showed the rock underneath even where the surrounding cliffs are clay, sand or terracotta. The whole visible face is now finished in the material the surrounding land actually uses.
*   Terrain smoothing no longer leaves single blocks standing alone. Where it eased the ground up toward something the land could not follow, it could finish as a one-block tower; it now stops short and leaves a slope instead.

### Changed

*   Streams leave a lake at the lake's own level for a shorter distance before beginning to descend.
*   Banks in biomes without a style of their own are now finished in that biome's own material rather than left bare. This covers modded biomes automatically, including ones added after this release.
*   Still Life's river biomes are left as they generate, with no bank finishing applied.

[2.10.4] - 8/2/2026
---------------------

### Fixed

*   Streams leaving a lake no longer drop away the moment they clear the water. The channel a stream runs in is cut below ground level, while a lake's water sits at ground level, so a stream left its lake through a two or three block step -- a high bowl with the water suddenly below it. The channel now starts flush with the lake and deepens over the first few blocks. New chunks only.
*   A ragged trench along one side of a stream, and lines of single-block holes dotted along bank edges. Both came from the bank being worked out for each column on its own, so neighbouring columns could disagree by several blocks. Banks now follow their neighbours. New chunks only.
*   Terrain smoothing can no longer place ground higher than the land originally stood in that column, and now runs only where there is an actual step to ease. Away from those steps the landscape is left exactly as the terrain generated it.

[2.10.3] - 7/31/2026
----------------------

### Fixed

*   Long freezes while exploring. Moving through new terrain could stop the game for several seconds at a time, worst near rivers. The current a river carries was being worked out at the moment a chunk reached you, so the game waited on it; it is now prepared in the background and the water simply starts flowing a moment later. Freezes are far less frequent and far shorter, and the longest ones are gone.
*   Chunks load faster around streams. The flow of a chunk's water was being recalculated repeatedly, including for ground that had already been worked out, which slowed loading everywhere streams run.
*   A world-generation crash on packs whose chunks are generated one at a time -- "Accessing PalettedContainer from multiple threads" -- most often reported alongside mods that replace chunk storage. It could also leave chunks unloading around the player. Fixed on 1.21.1 and 1.20.1. If you are on an older build and cannot update, setting `fastChunkLoading` to `false` avoids it.
*   Powered vehicles from physics mods could be thrown forward when they touched down on flowing water. Craft simply drifting with the current were already correct and are unchanged.

### Added

*   New config option `fastChunkLoading`: loads chunks faster on packs that generate chunks in parallel, and does nothing on packs that do not. Leave it on unless world generation crashes or chunks stop loading around you. Default on.

### Changed

*   Returning to a world you have already explored is faster. How each chunk's water flows is now remembered between sessions rather than being worked out again every time you load in.
*   Yellowstone (Terralith) and Caldera (Terrestria) no longer have streams cut through them by default. Both read wrong with a river running through them. New chunks only; add or remove them from `streamBiomeBlacklist` to choose for yourself.

[2.10.2]
----------

### Changed

*   Stream banks are now planted with grass and ferns by default. Re-running the biome's own plants and rocks along the water ("biome-boost") is no longer switched on automatically at any quality level -- it places another mod's decoration in spots its author did not choose, so it is now something you turn on rather than something you get by default. Set `vegetation` (and `allWaterFlora`, for other water) to `2` to bring it back. Affects new chunks only.
*   The `qualityPreset` setting is now called `terrainAccuracyLevel`. Existing configs keep their setting -- the old name is still read if the new one has not been set.

### Added

*   New config option `minStreamLength`: the shortest stream, in blocks, allowed to run from its own source straight into the sea. Anything shorter is dropped, which clears the short stubs that can dot a coastline. Streams that join another stream, or end in a lake, are never affected, and dry biomes are always exempt. Default 50 (unchanged behaviour); 0 keeps every stream. New chunks only.

### Fixed

*   Faster stream generation is now used only where it is actually faster. On some terrain setups the shortcut cost as much as the full-accuracy path, so those worlds were doing extra work for nothing; they now simply use full accuracy.
*   Accelerated stream generation now works on more modded terrain setups, including packs that combine several terrain mods, and refuses to run wherever it cannot reproduce the world's own terrain exactly -- so a world either generates faster or generates exactly as it always did, never something in between.
*   Streams flowing out of a lake now leave it at the lake's own level. They used to start a couple of blocks lower, so the water dropped over a small step the moment it left. New chunks only.
*   Villages, temples and other structures no longer generate in lakes. Lakes were not being considered when deciding whether a structure had clear ground, so one could be dropped straight into the water. The clear zone around streams is wider too, so a building no longer ends up overhanging a channel it barely touches. Structures buried well below the water, such as mineshafts, are still left alone. New chunks only.
*   Spikes and short pillars no longer appear along the top edge of waterfall drops.
*   Terrain smoothing now only reshapes ground the stream carving itself cut into. Natural cliffs, ravine walls and rock formations near a stream are left exactly as your terrain mods made them, and smoothing no longer builds ramps up towards floating structures, boulders or treetops. New chunks only.
*   Stream currents now appear as chunks generate, instead of arriving once the surrounding area has finished loading.
*   Fixed streams generating with no current at all in some worlds.
*   Create water wheels and similar current-driven machines now work on dedicated servers.
*   Lakes no longer leave overhanging or floating blocks above the waterline, and no longer leave trapped air pockets where the water meets the shore. New chunks only.
*   Fixed memory that was not released when leaving a world, which could build up over several worlds in a single session.
*   The config screen now opens correctly on Minecraft 26.x.
*   Removed repeated "unsafe terrain read" warnings from the log.

[2.10.1] - 2026-07-28
-----------------------

### Removed

*   The experimental accelerated stream generation option (`acceleratedStreamGeneration`) has been removed. On some setups it could leave the game unresponsive while exploring. Worlds generate exactly the same as before; if you had the setting enabled, it is simply ignored now and can be deleted from your config.

[2.10.0] - 2026-07-25
-----------------------

### Added

*   Accelerated stream generation (config `acceleratedStreamGeneration`, on by default): new stream regions can prepare much faster where the setup supports it.

### Fixed

*   Terrain smoothing around streams no longer stacks grass blocks into striped banks: built-up columns now match natural terrain (grass on top, soil below, rock deeper), the same as an undisturbed column cut from the surrounding land.
*   Terrain smoothing no longer places floating blocks
*   Terrain smoothing no loonger places cup shapes around tree trunks in rare casess

## Structurify - Structure Control
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/structurify)

### Structurify 2.0.41
*   Fixed the TextScaledButtonWidgetMixin mixin crash

* * *

 [![Buy Me a Coffee](https://img.shields.io/static/v1?label=&message=Buy Me a Coffee&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=ko-fi)](/linkout?remoteUrl=https%253a%252f%252fko-fi.com%252ffaboslav) [ ![Become a Patreon](https://img.shields.io/static/v1?label=&message=Become a Patron&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=patreon) ](https://www.patreon.com/Faboslav) [![Join the Community](https://img.shields.io/static/v1?label=&message=Join the community&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=discord)](/linkout?remoteUrl=https%253a%252f%252fdiscord.com%252finvite%252fQGwFvvMQCn)

### Structurify 2.0.40
*   Fixed the StructureManager mixin crash

* * *

 [![Buy Me a Coffee](https://img.shields.io/static/v1?label=&message=Buy Me a Coffee&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=ko-fi)](/linkout?remoteUrl=https%253a%252f%252fko-fi.com%252ffaboslav) [ ![Become a Patreon](https://img.shields.io/static/v1?label=&message=Become a Patron&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=patreon) ](https://www.patreon.com/Faboslav) [![Join the Community](https://img.shields.io/static/v1?label=&message=Join the community&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=discord)](/linkout?remoteUrl=https%253a%252f%252fdiscord.com%252finvite%252fQGwFvvMQCn)

### Structurify 2.0.40
*   Fixed the StructureManager mixin crash

* * *

 [![Buy Me a Coffee](https://img.shields.io/static/v1?label=&message=Buy Me a Coffee&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=ko-fi)](/linkout?remoteUrl=https%253a%252f%252fko-fi.com%252ffaboslav) [ ![Become a Patreon](https://img.shields.io/static/v1?label=&message=Become a Patron&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=patreon) ](https://www.patreon.com/Faboslav) [![Join the Community](https://img.shields.io/static/v1?label=&message=Join the community&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=discord)](/linkout?remoteUrl=https%253a%252f%252fdiscord.com%252finvite%252fQGwFvvMQCn)

### Structurify 2.0.40
*   Fixed the StructureManager mixin crash

* * *

 [![Buy Me a Coffee](https://img.shields.io/static/v1?label=&message=Buy Me a Coffee&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=ko-fi)](/linkout?remoteUrl=https%253a%252f%252fko-fi.com%252ffaboslav) [ ![Become a Patreon](https://img.shields.io/static/v1?label=&message=Become a Patron&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=patreon) ](https://www.patreon.com/Faboslav) [![Join the Community](https://img.shields.io/static/v1?label=&message=Join the community&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=discord)](/linkout?remoteUrl=https%253a%252f%252fdiscord.com%252finvite%252fQGwFvvMQCn)

### Structurify 2.0.40
*   Fixed the StructureManager mixin crash

* * *

 [![Buy Me a Coffee](https://img.shields.io/static/v1?label=&message=Buy Me a Coffee&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=ko-fi)](/linkout?remoteUrl=https%253a%252f%252fko-fi.com%252ffaboslav) [ ![Become a Patreon](https://img.shields.io/static/v1?label=&message=Become a Patron&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=patreon) ](https://www.patreon.com/Faboslav) [![Join the Community](https://img.shields.io/static/v1?label=&message=Join the community&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=discord)](/linkout?remoteUrl=https%253a%252f%252fdiscord.com%252finvite%252fQGwFvvMQCn)

### Structurify 2.0.40
*   Fixed the StructureManager mixin crash

* * *

 [![Buy Me a Coffee](https://img.shields.io/static/v1?label=&message=Buy Me a Coffee&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=ko-fi)](/linkout?remoteUrl=https%253a%252f%252fko-fi.com%252ffaboslav) [ ![Become a Patreon](https://img.shields.io/static/v1?label=&message=Become a Patron&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=patreon) ](https://www.patreon.com/Faboslav) [![Join the Community](https://img.shields.io/static/v1?label=&message=Join the community&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=discord)](/linkout?remoteUrl=https%253a%252f%252fdiscord.com%252finvite%252fQGwFvvMQCn)

### Structurify 2.0.40
*   Fixed the StructureManager mixin crash

* * *

 [![Buy Me a Coffee](https://img.shields.io/static/v1?label=&message=Buy Me a Coffee&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=ko-fi)](/linkout?remoteUrl=https%253a%252f%252fko-fi.com%252ffaboslav) [ ![Become a Patreon](https://img.shields.io/static/v1?label=&message=Become a Patron&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=patreon) ](https://www.patreon.com/Faboslav) [![Join the Community](https://img.shields.io/static/v1?label=&message=Join the community&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=discord)](/linkout?remoteUrl=https%253a%252f%252fdiscord.com%252finvite%252fQGwFvvMQCn)

### Structurify 2.0.40
*   Fixed the StructureManager mixin crash

* * *

 [![Buy Me a Coffee](https://img.shields.io/static/v1?label=&message=Buy Me a Coffee&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=ko-fi)](/linkout?remoteUrl=https%253a%252f%252fko-fi.com%252ffaboslav) [ ![Become a Patreon](https://img.shields.io/static/v1?label=&message=Become a Patron&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=patreon) ](https://www.patreon.com/Faboslav) [![Join the Community](https://img.shields.io/static/v1?label=&message=Join the community&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=discord)](/linkout?remoteUrl=https%253a%252f%252fdiscord.com%252finvite%252fQGwFvvMQCn)

### Structurify 2.0.38
*   Fixed related YACL crash (the rest of it)

* * *

 [![Buy Me a Coffee](https://img.shields.io/static/v1?label=&message=Buy Me a Coffee&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=ko-fi)](/linkout?remoteUrl=https%253a%252f%252fko-fi.com%252ffaboslav) [ ![Become a Patreon](https://img.shields.io/static/v1?label=&message=Become a Patron&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=patreon) ](https://www.patreon.com/Faboslav) [![Join the Community](https://img.shields.io/static/v1?label=&message=Join the community&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=discord)](/linkout?remoteUrl=https%253a%252f%252fdiscord.com%252finvite%252fQGwFvvMQCn)

### Structurify 2.0.38
*   Fixed related YACL crash (the rest of it)

* * *

 [![Buy Me a Coffee](https://img.shields.io/static/v1?label=&message=Buy Me a Coffee&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=ko-fi)](/linkout?remoteUrl=https%253a%252f%252fko-fi.com%252ffaboslav) [ ![Become a Patreon](https://img.shields.io/static/v1?label=&message=Become a Patron&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=patreon) ](https://www.patreon.com/Faboslav) [![Join the Community](https://img.shields.io/static/v1?label=&message=Join the community&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=discord)](/linkout?remoteUrl=https%253a%252f%252fdiscord.com%252finvite%252fQGwFvvMQCn)

### Structurify 2.0.38
*   Fixed related YACL crash (the rest of it)

* * *

 [![Buy Me a Coffee](https://img.shields.io/static/v1?label=&message=Buy Me a Coffee&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=ko-fi)](/linkout?remoteUrl=https%253a%252f%252fko-fi.com%252ffaboslav) [ ![Become a Patreon](https://img.shields.io/static/v1?label=&message=Become a Patron&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=patreon) ](https://www.patreon.com/Faboslav) [![Join the Community](https://img.shields.io/static/v1?label=&message=Join the community&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=discord)](/linkout?remoteUrl=https%253a%252f%252fdiscord.com%252finvite%252fQGwFvvMQCn)

### Structurify 2.0.38
*   Fixed related YACL crash (the rest of it)

* * *

 [![Buy Me a Coffee](https://img.shields.io/static/v1?label=&message=Buy Me a Coffee&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=ko-fi)](/linkout?remoteUrl=https%253a%252f%252fko-fi.com%252ffaboslav) [ ![Become a Patreon](https://img.shields.io/static/v1?label=&message=Become a Patron&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=patreon) ](https://www.patreon.com/Faboslav) [![Join the Community](https://img.shields.io/static/v1?label=&message=Join the community&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=discord)](/linkout?remoteUrl=https%253a%252f%252fdiscord.com%252finvite%252fQGwFvvMQCn)

### Structurify 2.0.38
*   Fixed related YACL crash (the rest of it)

* * *

 [![Buy Me a Coffee](https://img.shields.io/static/v1?label=&message=Buy Me a Coffee&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=ko-fi)](/linkout?remoteUrl=https%253a%252f%252fko-fi.com%252ffaboslav) [ ![Become a Patreon](https://img.shields.io/static/v1?label=&message=Become a Patron&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=patreon) ](https://www.patreon.com/Faboslav) [![Join the Community](https://img.shields.io/static/v1?label=&message=Join the community&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=discord)](/linkout?remoteUrl=https%253a%252f%252fdiscord.com%252finvite%252fQGwFvvMQCn)

### Structurify 2.0.37
*   Fixed related YACL crash introduced by new quality of life tweaks

* * *

 [![Buy Me a Coffee](https://img.shields.io/static/v1?label=&message=Buy Me a Coffee&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=ko-fi)](/linkout?remoteUrl=https%253a%252f%252fko-fi.com%252ffaboslav) [ ![Become a Patreon](https://img.shields.io/static/v1?label=&message=Become a Patron&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=patreon) ](https://www.patreon.com/Faboslav) [![Join the Community](https://img.shields.io/static/v1?label=&message=Join the community&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=discord)](/linkout?remoteUrl=https%253a%252f%252fdiscord.com%252finvite%252fQGwFvvMQCn)

### Structurify 2.0.37
*   Fixed related YACL crash introduced by new quality of life tweaks

* * *

 [![Buy Me a Coffee](https://img.shields.io/static/v1?label=&message=Buy Me a Coffee&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=ko-fi)](/linkout?remoteUrl=https%253a%252f%252fko-fi.com%252ffaboslav) [ ![Become a Patreon](https://img.shields.io/static/v1?label=&message=Become a Patron&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=patreon) ](https://www.patreon.com/Faboslav) [![Join the Community](https://img.shields.io/static/v1?label=&message=Join the community&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=discord)](/linkout?remoteUrl=https%253a%252f%252fdiscord.com%252finvite%252fQGwFvvMQCn)

### Structurify 2.0.37
*   Fixed related YACL crash introduced by new quality of life tweaks

* * *

 [![Buy Me a Coffee](https://img.shields.io/static/v1?label=&message=Buy Me a Coffee&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=ko-fi)](/linkout?remoteUrl=https%253a%252f%252fko-fi.com%252ffaboslav) [ ![Become a Patreon](https://img.shields.io/static/v1?label=&message=Become a Patron&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=patreon) ](https://www.patreon.com/Faboslav) [![Join the Community](https://img.shields.io/static/v1?label=&message=Join the community&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=discord)](/linkout?remoteUrl=https%253a%252f%252fdiscord.com%252finvite%252fQGwFvvMQCn)

### Structurify 2.0.37
*   Fixed related YACL crash introduced by new quality of life tweaks

* * *

 [![Buy Me a Coffee](https://img.shields.io/static/v1?label=&message=Buy Me a Coffee&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=ko-fi)](/linkout?remoteUrl=https%253a%252f%252fko-fi.com%252ffaboslav) [ ![Become a Patreon](https://img.shields.io/static/v1?label=&message=Become a Patron&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=patreon) ](https://www.patreon.com/Faboslav) [![Join the Community](https://img.shields.io/static/v1?label=&message=Join the community&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=discord)](/linkout?remoteUrl=https%253a%252f%252fdiscord.com%252finvite%252fQGwFvvMQCn)

### Structurify 2.0.37
*   Fixed related YACL crash introduced by new quality of life tweaks

* * *

 [![Buy Me a Coffee](https://img.shields.io/static/v1?label=&message=Buy Me a Coffee&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=ko-fi)](/linkout?remoteUrl=https%253a%252f%252fko-fi.com%252ffaboslav) [ ![Become a Patreon](https://img.shields.io/static/v1?label=&message=Become a Patron&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=patreon) ](https://www.patreon.com/Faboslav) [![Join the Community](https://img.shields.io/static/v1?label=&message=Join the community&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=discord)](/linkout?remoteUrl=https%253a%252f%252fdiscord.com%252finvite%252fQGwFvvMQCn)

### Structurify 2.0.37
*   Fixed related YACL crash introduced by new quality of life tweaks

* * *

 [![Buy Me a Coffee](https://img.shields.io/static/v1?label=&message=Buy Me a Coffee&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=ko-fi)](/linkout?remoteUrl=https%253a%252f%252fko-fi.com%252ffaboslav) [ ![Become a Patreon](https://img.shields.io/static/v1?label=&message=Become a Patron&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=patreon) ](https://www.patreon.com/Faboslav) [![Join the Community](https://img.shields.io/static/v1?label=&message=Join the community&color=5b9c51&labelColor=5b9c51&logoColor=ffffff&style=for-the-badge&logo=discord)](/linkout?remoteUrl=https%253a%252f%252fdiscord.com%252finvite%252fQGwFvvMQCn)

## MezzConfig
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/mezzconfig)

### MezzConfig 0.6.3 for NeoForge 1.21.1
### v0.6.3

*   [Serialize multiversion release validation](https://github.com/mezz/MezzConfig/commit/8e7732e89cd249bbace96ea07c9523ce02007a6f) - mezz
    

### v0.6.2

*   [Ignore invalid release notification baselines](https://github.com/mezz/MezzConfig/commit/933cdb208e26b90561e29c3c4b27a597a4e17b9b) - mezz
    

### v0.6.1

*   [Fix release notification commit tracking](https://github.com/mezz/MezzConfig/commit/6fb85a609689890ada61d2dc109741b38459834d) - mezz
    

### v0.6.0

*   [Improve migration API to allow rejected values](https://github.com/mezz/MezzConfig/commit/da1eed9c83209760738f734888b41b6c815225f6) - mezz
    

### v0.5.12

*   [Bump version to 0.5.12](https://github.com/mezz/MezzConfig/commit/5912fd97f02abb02f1d5baa7aaf977d612454028) - mezz
    
*   [Restore Forge support through 1.21.1](https://github.com/mezz/MezzConfig/commit/deddf6032c33ffc9e2ad32cb8ae962fb64c7bf40) - mezz
    
*   [Add NeoForge iconFile](https://github.com/mezz/MezzConfig/commit/9a778e61447553ec7585dc4e0189e487d64223d3) - mezz
    
*   [Speed up multiversion CI](https://github.com/mezz/MezzConfig/commit/21c4e2e0f5a772d0778109ee7a9a07cc9ac774ee) - mezz
    
*   [Add project badges to README](https://github.com/mezz/MezzConfig/commit/4f349c75f2497bc6b8aca80d77c50df1838ec17e) - mezz
    
*   [Create ja_jp.json (#1)](https://github.com/mezz/MezzConfig/commit/86a7c6912a5132287542003804c573bab8dfd105) - Abbage230
    
*   [Document MezzConfig contributor license agreement](https://github.com/mezz/MezzConfig/commit/beb3c0eaf8ac7f418d21942b3290266f4a9edb9c) - mezz
    
*   [Handle first release notifications](https://github.com/mezz/MezzConfig/commit/1e2d9a862ad92af6305c343b9603ca3f742571dc) - mezz
    

### v0.5.11

*   [Bump version to 0.5.11](https://github.com/mezz/MezzConfig/commit/e67918aa1cb689c2eb48ead69bd26f5c90dce5f9) - mezz
    
*   [Defer published API validation](https://github.com/mezz/MezzConfig/commit/0f03b3c3c19331e2c1e3d6c7a83ddd2015c9a9d7) - mezz
    
*   [Fix Jenkins loader manifest parsing](https://github.com/mezz/MezzConfig/commit/add26eb7b9901d832d2a4ef070295373ad4bedbb) - mezz
    

### v0.5.10

*   [Bump version to 0.5.10](https://github.com/mezz/MezzConfig/commit/0ee96f94626b78fedbe581c8a0bae2767a241f7b) - mezz
    
*   [Cache sorting read snapshots](https://github.com/mezz/MezzConfig/commit/2d5968a19d71845dc86598486d063547be2b3603) - mezz
    
*   [Skip snapshots for unchanged config reads](https://github.com/mezz/MezzConfig/commit/b8e6b4fb24cd575a2d64cd41f83f32fc00e8b2e6) - mezz
    
*   [Support multiple Minecraft versions](https://github.com/mezz/MezzConfig/commit/65fd273bc3bac83ab5467e698732545058a067c4) - mezz
    

### v0.5.9

*   [fix: ignore watcher events from config saves](https://github.com/mezz/MezzConfig/commit/a2f4af88372f495cd8225fd378f0dd2b45994d10) - mezz
    

### v0.5.8

*   [Bump version to 0.5.8](https://github.com/mezz/MezzConfig/commit/1a948e340f8e7a74b556ca330caa9c0ce578e67e) - mezz
    
*   [use simpler mod icon](https://github.com/mezz/MezzConfig/commit/fc1399b98b19f64863fdedd785a35f601eebff79) - mezz
    
*   [Avoid notifying about releases in Discord when there's no new release](https://github.com/mezz/MezzConfig/commit/70cdcc70ab40ddf14318db4fb293208c4db8a726) - mezz
    
*   [Remove unused jars from maven publication](https://github.com/mezz/MezzConfig/commit/592c333862072ff9f7f6442b5c2757365752294f) - mezz
    
*   [Improve the clarity of tests with comments](https://github.com/mezz/MezzConfig/commit/c30e34fa4e4f4df4051cf02d61c3a4b2058de421) - mezz
    

### v0.5.7

*   [Register MezzConfig settings schema](https://github.com/mezz/MezzConfig/commit/fc66bb78f89692f8722a7c73c6021fbeb128153b) - mezz
    
*   [Use jenkins notifier](https://github.com/mezz/MezzConfig/commit/d81917889571d37e093c1116608e097a6fabe4f2) - mezz
    

### v0.5.6

*   [Fix oldest published API compatibility baseline](https://github.com/mezz/MezzConfig/commit/69c4c5fb7443c8179fa107ce2d7c63da43d25610) - mezz
    

### v0.5.5

*   [Publish complete loader jars to Maven and bump version to 0.5.5](https://github.com/mezz/MezzConfig/commit/53f41c456575496f6b89156fbc8324a0e50ca19e) - mezz
    
*   [Add mod icon](https://github.com/mezz/MezzConfig/commit/7c06371a60c61a3bc6ff664de865fab37b92ad1d) - mezz

### MezzConfig 0.6.1 for NeoForge 1.21.11
### v0.6.1

*   [Fix release notification commit tracking](https://github.com/mezz/MezzConfig/commit/6fb85a609689890ada61d2dc109741b38459834d) - mezz
    

### v0.6.0

*   [Improve migration API to allow rejected values](https://github.com/mezz/MezzConfig/commit/da1eed9c83209760738f734888b41b6c815225f6) - mezz
    

### v0.5.12

*   [Bump version to 0.5.12](https://github.com/mezz/MezzConfig/commit/5912fd97f02abb02f1d5baa7aaf977d612454028) - mezz
    
*   [Restore Forge support through 1.21.1](https://github.com/mezz/MezzConfig/commit/deddf6032c33ffc9e2ad32cb8ae962fb64c7bf40) - mezz
    
*   [Add NeoForge iconFile](https://github.com/mezz/MezzConfig/commit/9a778e61447553ec7585dc4e0189e487d64223d3) - mezz
    
*   [Speed up multiversion CI](https://github.com/mezz/MezzConfig/commit/21c4e2e0f5a772d0778109ee7a9a07cc9ac774ee) - mezz
    
*   [Add project badges to README](https://github.com/mezz/MezzConfig/commit/4f349c75f2497bc6b8aca80d77c50df1838ec17e) - mezz
    
*   [Create ja_jp.json (#1)](https://github.com/mezz/MezzConfig/commit/86a7c6912a5132287542003804c573bab8dfd105) - Abbage230
    
*   [Document MezzConfig contributor license agreement](https://github.com/mezz/MezzConfig/commit/beb3c0eaf8ac7f418d21942b3290266f4a9edb9c) - mezz
    
*   [Handle first release notifications](https://github.com/mezz/MezzConfig/commit/1e2d9a862ad92af6305c343b9603ca3f742571dc) - mezz
    

### v0.5.11

*   [Bump version to 0.5.11](https://github.com/mezz/MezzConfig/commit/e67918aa1cb689c2eb48ead69bd26f5c90dce5f9) - mezz
    
*   [Defer published API validation](https://github.com/mezz/MezzConfig/commit/0f03b3c3c19331e2c1e3d6c7a83ddd2015c9a9d7) - mezz
    
*   [Fix Jenkins loader manifest parsing](https://github.com/mezz/MezzConfig/commit/add26eb7b9901d832d2a4ef070295373ad4bedbb) - mezz
    

### v0.5.10

*   [Bump version to 0.5.10](https://github.com/mezz/MezzConfig/commit/0ee96f94626b78fedbe581c8a0bae2767a241f7b) - mezz
    
*   [Cache sorting read snapshots](https://github.com/mezz/MezzConfig/commit/2d5968a19d71845dc86598486d063547be2b3603) - mezz
    
*   [Skip snapshots for unchanged config reads](https://github.com/mezz/MezzConfig/commit/b8e6b4fb24cd575a2d64cd41f83f32fc00e8b2e6) - mezz
    
*   [Support multiple Minecraft versions](https://github.com/mezz/MezzConfig/commit/65fd273bc3bac83ab5467e698732545058a067c4) - mezz
    

### v0.5.9

*   [fix: ignore watcher events from config saves](https://github.com/mezz/MezzConfig/commit/a2f4af88372f495cd8225fd378f0dd2b45994d10) - mezz
    

### v0.5.8

*   [Bump version to 0.5.8](https://github.com/mezz/MezzConfig/commit/1a948e340f8e7a74b556ca330caa9c0ce578e67e) - mezz
    
*   [use simpler mod icon](https://github.com/mezz/MezzConfig/commit/fc1399b98b19f64863fdedd785a35f601eebff79) - mezz
    
*   [Avoid notifying about releases in Discord when there's no new release](https://github.com/mezz/MezzConfig/commit/70cdcc70ab40ddf14318db4fb293208c4db8a726) - mezz
    
*   [Remove unused jars from maven publication](https://github.com/mezz/MezzConfig/commit/592c333862072ff9f7f6442b5c2757365752294f) - mezz
    
*   [Improve the clarity of tests with comments](https://github.com/mezz/MezzConfig/commit/c30e34fa4e4f4df4051cf02d61c3a4b2058de421) - mezz
    

### v0.5.7

*   [Register MezzConfig settings schema](https://github.com/mezz/MezzConfig/commit/fc66bb78f89692f8722a7c73c6021fbeb128153b) - mezz
    
*   [Use jenkins notifier](https://github.com/mezz/MezzConfig/commit/d81917889571d37e093c1116608e097a6fabe4f2) - mezz
    

### v0.5.6

*   [Fix oldest published API compatibility baseline](https://github.com/mezz/MezzConfig/commit/69c4c5fb7443c8179fa107ce2d7c63da43d25610) - mezz
    

### v0.5.5

*   [Publish complete loader jars to Maven and bump version to 0.5.5](https://github.com/mezz/MezzConfig/commit/53f41c456575496f6b89156fbc8324a0e50ca19e) - mezz
    
*   [Add mod icon](https://github.com/mezz/MezzConfig/commit/7c06371a60c61a3bc6ff664de865fab37b92ad1d) - mezz
    

### v0.5.4

*   [Mark Common as an FML game library and bump version to 0.5.4](https://github.com/mezz/MezzConfig/commit/cd27b62403781ad4e3158262f1ca5f68622d4aaf) - mezz
    
*   [Remove publishing dry runs from Jenkins](https://github.com/mezz/MezzConfig/commit/63984fd55af83430bebadb4c9d01268f707c9c08) - mezz

### MezzConfig 0.6.1 for NeoForge 1.21.1
### v0.6.1

*   [Fix release notification commit tracking](https://github.com/mezz/MezzConfig/commit/6fb85a609689890ada61d2dc109741b38459834d) - mezz
    

### v0.6.0

*   [Improve migration API to allow rejected values](https://github.com/mezz/MezzConfig/commit/da1eed9c83209760738f734888b41b6c815225f6) - mezz
    

### v0.5.12

*   [Bump version to 0.5.12](https://github.com/mezz/MezzConfig/commit/5912fd97f02abb02f1d5baa7aaf977d612454028) - mezz
    
*   [Restore Forge support through 1.21.1](https://github.com/mezz/MezzConfig/commit/deddf6032c33ffc9e2ad32cb8ae962fb64c7bf40) - mezz
    
*   [Add NeoForge iconFile](https://github.com/mezz/MezzConfig/commit/9a778e61447553ec7585dc4e0189e487d64223d3) - mezz
    
*   [Speed up multiversion CI](https://github.com/mezz/MezzConfig/commit/21c4e2e0f5a772d0778109ee7a9a07cc9ac774ee) - mezz
    
*   [Add project badges to README](https://github.com/mezz/MezzConfig/commit/4f349c75f2497bc6b8aca80d77c50df1838ec17e) - mezz
    
*   [Create ja_jp.json (#1)](https://github.com/mezz/MezzConfig/commit/86a7c6912a5132287542003804c573bab8dfd105) - Abbage230
    
*   [Document MezzConfig contributor license agreement](https://github.com/mezz/MezzConfig/commit/beb3c0eaf8ac7f418d21942b3290266f4a9edb9c) - mezz
    
*   [Handle first release notifications](https://github.com/mezz/MezzConfig/commit/1e2d9a862ad92af6305c343b9603ca3f742571dc) - mezz
    

### v0.5.11

*   [Bump version to 0.5.11](https://github.com/mezz/MezzConfig/commit/e67918aa1cb689c2eb48ead69bd26f5c90dce5f9) - mezz
    
*   [Defer published API validation](https://github.com/mezz/MezzConfig/commit/0f03b3c3c19331e2c1e3d6c7a83ddd2015c9a9d7) - mezz
    
*   [Fix Jenkins loader manifest parsing](https://github.com/mezz/MezzConfig/commit/add26eb7b9901d832d2a4ef070295373ad4bedbb) - mezz
    

### v0.5.10

*   [Bump version to 0.5.10](https://github.com/mezz/MezzConfig/commit/0ee96f94626b78fedbe581c8a0bae2767a241f7b) - mezz
    
*   [Cache sorting read snapshots](https://github.com/mezz/MezzConfig/commit/2d5968a19d71845dc86598486d063547be2b3603) - mezz
    
*   [Skip snapshots for unchanged config reads](https://github.com/mezz/MezzConfig/commit/b8e6b4fb24cd575a2d64cd41f83f32fc00e8b2e6) - mezz
    
*   [Support multiple Minecraft versions](https://github.com/mezz/MezzConfig/commit/65fd273bc3bac83ab5467e698732545058a067c4) - mezz
    

### v0.5.9

*   [fix: ignore watcher events from config saves](https://github.com/mezz/MezzConfig/commit/a2f4af88372f495cd8225fd378f0dd2b45994d10) - mezz
    

### v0.5.8

*   [Bump version to 0.5.8](https://github.com/mezz/MezzConfig/commit/1a948e340f8e7a74b556ca330caa9c0ce578e67e) - mezz
    
*   [use simpler mod icon](https://github.com/mezz/MezzConfig/commit/fc1399b98b19f64863fdedd785a35f601eebff79) - mezz
    
*   [Avoid notifying about releases in Discord when there's no new release](https://github.com/mezz/MezzConfig/commit/70cdcc70ab40ddf14318db4fb293208c4db8a726) - mezz
    
*   [Remove unused jars from maven publication](https://github.com/mezz/MezzConfig/commit/592c333862072ff9f7f6442b5c2757365752294f) - mezz
    
*   [Improve the clarity of tests with comments](https://github.com/mezz/MezzConfig/commit/c30e34fa4e4f4df4051cf02d61c3a4b2058de421) - mezz
    

### v0.5.7

*   [Register MezzConfig settings schema](https://github.com/mezz/MezzConfig/commit/fc66bb78f89692f8722a7c73c6021fbeb128153b) - mezz
    
*   [Use jenkins notifier](https://github.com/mezz/MezzConfig/commit/d81917889571d37e093c1116608e097a6fabe4f2) - mezz
    

### v0.5.6

*   [Fix oldest published API compatibility baseline](https://github.com/mezz/MezzConfig/commit/69c4c5fb7443c8179fa107ce2d7c63da43d25610) - mezz
    

### v0.5.5

*   [Publish complete loader jars to Maven and bump version to 0.5.5](https://github.com/mezz/MezzConfig/commit/53f41c456575496f6b89156fbc8324a0e50ca19e) - mezz
    
*   [Add mod icon](https://github.com/mezz/MezzConfig/commit/7c06371a60c61a3bc6ff664de865fab37b92ad1d) - mezz
    

### v0.5.4

*   [Mark Common as an FML game library and bump version to 0.5.4](https://github.com/mezz/MezzConfig/commit/cd27b62403781ad4e3158262f1ca5f68622d4aaf) - mezz
    
*   [Remove publishing dry runs from Jenkins](https://github.com/mezz/MezzConfig/commit/63984fd55af83430bebadb4c9d01268f707c9c08) - mezz

### MezzConfig 0.6.0 for NeoForge 1.21.11
### v0.6.0

*   [Improve migration API to allow rejected values](https://github.com/mezz/MezzConfig/commit/da1eed9c83209760738f734888b41b6c815225f6) - mezz
    

### v0.5.12

*   [Bump version to 0.5.12](https://github.com/mezz/MezzConfig/commit/5912fd97f02abb02f1d5baa7aaf977d612454028) - mezz
    
*   [Restore Forge support through 1.21.1](https://github.com/mezz/MezzConfig/commit/deddf6032c33ffc9e2ad32cb8ae962fb64c7bf40) - mezz
    
*   [Add NeoForge iconFile](https://github.com/mezz/MezzConfig/commit/9a778e61447553ec7585dc4e0189e487d64223d3) - mezz
    
*   [Speed up multiversion CI](https://github.com/mezz/MezzConfig/commit/21c4e2e0f5a772d0778109ee7a9a07cc9ac774ee) - mezz
    
*   [Add project badges to README](https://github.com/mezz/MezzConfig/commit/4f349c75f2497bc6b8aca80d77c50df1838ec17e) - mezz
    
*   [Create ja_jp.json (#1)](https://github.com/mezz/MezzConfig/commit/86a7c6912a5132287542003804c573bab8dfd105) - Abbage230
    
*   [Document MezzConfig contributor license agreement](https://github.com/mezz/MezzConfig/commit/beb3c0eaf8ac7f418d21942b3290266f4a9edb9c) - mezz
    
*   [Handle first release notifications](https://github.com/mezz/MezzConfig/commit/1e2d9a862ad92af6305c343b9603ca3f742571dc) - mezz
    

### v0.5.11

*   [Bump version to 0.5.11](https://github.com/mezz/MezzConfig/commit/e67918aa1cb689c2eb48ead69bd26f5c90dce5f9) - mezz
    
*   [Defer published API validation](https://github.com/mezz/MezzConfig/commit/0f03b3c3c19331e2c1e3d6c7a83ddd2015c9a9d7) - mezz
    
*   [Fix Jenkins loader manifest parsing](https://github.com/mezz/MezzConfig/commit/add26eb7b9901d832d2a4ef070295373ad4bedbb) - mezz
    

### v0.5.10

*   [Bump version to 0.5.10](https://github.com/mezz/MezzConfig/commit/0ee96f94626b78fedbe581c8a0bae2767a241f7b) - mezz
    
*   [Cache sorting read snapshots](https://github.com/mezz/MezzConfig/commit/2d5968a19d71845dc86598486d063547be2b3603) - mezz
    
*   [Skip snapshots for unchanged config reads](https://github.com/mezz/MezzConfig/commit/b8e6b4fb24cd575a2d64cd41f83f32fc00e8b2e6) - mezz
    
*   [Support multiple Minecraft versions](https://github.com/mezz/MezzConfig/commit/65fd273bc3bac83ab5467e698732545058a067c4) - mezz
    

### v0.5.9

*   [fix: ignore watcher events from config saves](https://github.com/mezz/MezzConfig/commit/a2f4af88372f495cd8225fd378f0dd2b45994d10) - mezz
    

### v0.5.8

*   [Bump version to 0.5.8](https://github.com/mezz/MezzConfig/commit/1a948e340f8e7a74b556ca330caa9c0ce578e67e) - mezz
    
*   [use simpler mod icon](https://github.com/mezz/MezzConfig/commit/fc1399b98b19f64863fdedd785a35f601eebff79) - mezz
    
*   [Avoid notifying about releases in Discord when there's no new release](https://github.com/mezz/MezzConfig/commit/70cdcc70ab40ddf14318db4fb293208c4db8a726) - mezz
    
*   [Remove unused jars from maven publication](https://github.com/mezz/MezzConfig/commit/592c333862072ff9f7f6442b5c2757365752294f) - mezz
    
*   [Improve the clarity of tests with comments](https://github.com/mezz/MezzConfig/commit/c30e34fa4e4f4df4051cf02d61c3a4b2058de421) - mezz
    

### v0.5.7

*   [Register MezzConfig settings schema](https://github.com/mezz/MezzConfig/commit/fc66bb78f89692f8722a7c73c6021fbeb128153b) - mezz
    
*   [Use jenkins notifier](https://github.com/mezz/MezzConfig/commit/d81917889571d37e093c1116608e097a6fabe4f2) - mezz
    

### v0.5.6

*   [Fix oldest published API compatibility baseline](https://github.com/mezz/MezzConfig/commit/69c4c5fb7443c8179fa107ce2d7c63da43d25610) - mezz
    

### v0.5.5

*   [Publish complete loader jars to Maven and bump version to 0.5.5](https://github.com/mezz/MezzConfig/commit/53f41c456575496f6b89156fbc8324a0e50ca19e) - mezz
    
*   [Add mod icon](https://github.com/mezz/MezzConfig/commit/7c06371a60c61a3bc6ff664de865fab37b92ad1d) - mezz
    

### v0.5.4

*   [Mark Common as an FML game library and bump version to 0.5.4](https://github.com/mezz/MezzConfig/commit/cd27b62403781ad4e3158262f1ca5f68622d4aaf) - mezz
    
*   [Remove publishing dry runs from Jenkins](https://github.com/mezz/MezzConfig/commit/63984fd55af83430bebadb4c9d01268f707c9c08) - mezz
    

### v0.5.3

*   [Fix CurseForge publishing and bump version to 0.5.3](https://github.com/mezz/MezzConfig/commit/a408afa226ccd209d1fd48248d0801aaf4ca27f6) - mezz

### MezzConfig 0.6.0 for NeoForge 1.21.1
### v0.6.0

*   [Improve migration API to allow rejected values](https://github.com/mezz/MezzConfig/commit/da1eed9c83209760738f734888b41b6c815225f6) - mezz
    

### v0.5.12

*   [Bump version to 0.5.12](https://github.com/mezz/MezzConfig/commit/5912fd97f02abb02f1d5baa7aaf977d612454028) - mezz
    
*   [Restore Forge support through 1.21.1](https://github.com/mezz/MezzConfig/commit/deddf6032c33ffc9e2ad32cb8ae962fb64c7bf40) - mezz
    
*   [Add NeoForge iconFile](https://github.com/mezz/MezzConfig/commit/9a778e61447553ec7585dc4e0189e487d64223d3) - mezz
    
*   [Speed up multiversion CI](https://github.com/mezz/MezzConfig/commit/21c4e2e0f5a772d0778109ee7a9a07cc9ac774ee) - mezz
    
*   [Add project badges to README](https://github.com/mezz/MezzConfig/commit/4f349c75f2497bc6b8aca80d77c50df1838ec17e) - mezz
    
*   [Create ja_jp.json (#1)](https://github.com/mezz/MezzConfig/commit/86a7c6912a5132287542003804c573bab8dfd105) - Abbage230
    
*   [Document MezzConfig contributor license agreement](https://github.com/mezz/MezzConfig/commit/beb3c0eaf8ac7f418d21942b3290266f4a9edb9c) - mezz
    
*   [Handle first release notifications](https://github.com/mezz/MezzConfig/commit/1e2d9a862ad92af6305c343b9603ca3f742571dc) - mezz
    

### v0.5.11

*   [Bump version to 0.5.11](https://github.com/mezz/MezzConfig/commit/e67918aa1cb689c2eb48ead69bd26f5c90dce5f9) - mezz
    
*   [Defer published API validation](https://github.com/mezz/MezzConfig/commit/0f03b3c3c19331e2c1e3d6c7a83ddd2015c9a9d7) - mezz
    
*   [Fix Jenkins loader manifest parsing](https://github.com/mezz/MezzConfig/commit/add26eb7b9901d832d2a4ef070295373ad4bedbb) - mezz
    

### v0.5.10

*   [Bump version to 0.5.10](https://github.com/mezz/MezzConfig/commit/0ee96f94626b78fedbe581c8a0bae2767a241f7b) - mezz
    
*   [Cache sorting read snapshots](https://github.com/mezz/MezzConfig/commit/2d5968a19d71845dc86598486d063547be2b3603) - mezz
    
*   [Skip snapshots for unchanged config reads](https://github.com/mezz/MezzConfig/commit/b8e6b4fb24cd575a2d64cd41f83f32fc00e8b2e6) - mezz
    
*   [Support multiple Minecraft versions](https://github.com/mezz/MezzConfig/commit/65fd273bc3bac83ab5467e698732545058a067c4) - mezz
    

### v0.5.9

*   [fix: ignore watcher events from config saves](https://github.com/mezz/MezzConfig/commit/a2f4af88372f495cd8225fd378f0dd2b45994d10) - mezz
    

### v0.5.8

*   [Bump version to 0.5.8](https://github.com/mezz/MezzConfig/commit/1a948e340f8e7a74b556ca330caa9c0ce578e67e) - mezz
    
*   [use simpler mod icon](https://github.com/mezz/MezzConfig/commit/fc1399b98b19f64863fdedd785a35f601eebff79) - mezz
    
*   [Avoid notifying about releases in Discord when there's no new release](https://github.com/mezz/MezzConfig/commit/70cdcc70ab40ddf14318db4fb293208c4db8a726) - mezz
    
*   [Remove unused jars from maven publication](https://github.com/mezz/MezzConfig/commit/592c333862072ff9f7f6442b5c2757365752294f) - mezz
    
*   [Improve the clarity of tests with comments](https://github.com/mezz/MezzConfig/commit/c30e34fa4e4f4df4051cf02d61c3a4b2058de421) - mezz
    

### v0.5.7

*   [Register MezzConfig settings schema](https://github.com/mezz/MezzConfig/commit/fc66bb78f89692f8722a7c73c6021fbeb128153b) - mezz
    
*   [Use jenkins notifier](https://github.com/mezz/MezzConfig/commit/d81917889571d37e093c1116608e097a6fabe4f2) - mezz
    

### v0.5.6

*   [Fix oldest published API compatibility baseline](https://github.com/mezz/MezzConfig/commit/69c4c5fb7443c8179fa107ce2d7c63da43d25610) - mezz
    

### v0.5.5

*   [Publish complete loader jars to Maven and bump version to 0.5.5](https://github.com/mezz/MezzConfig/commit/53f41c456575496f6b89156fbc8324a0e50ca19e) - mezz
    
*   [Add mod icon](https://github.com/mezz/MezzConfig/commit/7c06371a60c61a3bc6ff664de865fab37b92ad1d) - mezz
    

### v0.5.4

*   [Mark Common as an FML game library and bump version to 0.5.4](https://github.com/mezz/MezzConfig/commit/cd27b62403781ad4e3158262f1ca5f68622d4aaf) - mezz
    
*   [Remove publishing dry runs from Jenkins](https://github.com/mezz/MezzConfig/commit/63984fd55af83430bebadb4c9d01268f707c9c08) - mezz
    

### v0.5.3

*   [Fix CurseForge publishing and bump version to 0.5.3](https://github.com/mezz/MezzConfig/commit/a408afa226ccd209d1fd48248d0801aaf4ca27f6) - mezz

### MezzConfig 0.5.12 for NeoForge 1.21.11
### v0.5.12

*   [Bump version to 0.5.12](https://github.com/mezz/MezzConfig/commit/5912fd97f02abb02f1d5baa7aaf977d612454028) - mezz
    
*   [Restore Forge support through 1.21.1](https://github.com/mezz/MezzConfig/commit/deddf6032c33ffc9e2ad32cb8ae962fb64c7bf40) - mezz
    
*   [Add NeoForge iconFile](https://github.com/mezz/MezzConfig/commit/9a778e61447553ec7585dc4e0189e487d64223d3) - mezz
    
*   [Speed up multiversion CI](https://github.com/mezz/MezzConfig/commit/21c4e2e0f5a772d0778109ee7a9a07cc9ac774ee) - mezz
    
*   [Add project badges to README](https://github.com/mezz/MezzConfig/commit/4f349c75f2497bc6b8aca80d77c50df1838ec17e) - mezz
    
*   [Create ja_jp.json (#1)](https://github.com/mezz/MezzConfig/commit/86a7c6912a5132287542003804c573bab8dfd105) - Abbage230
    
*   [Document MezzConfig contributor license agreement](https://github.com/mezz/MezzConfig/commit/beb3c0eaf8ac7f418d21942b3290266f4a9edb9c) - mezz
    
*   [Handle first release notifications](https://github.com/mezz/MezzConfig/commit/1e2d9a862ad92af6305c343b9603ca3f742571dc) - mezz
    

### v0.5.11

*   [Bump version to 0.5.11](https://github.com/mezz/MezzConfig/commit/e67918aa1cb689c2eb48ead69bd26f5c90dce5f9) - mezz
    
*   [Defer published API validation](https://github.com/mezz/MezzConfig/commit/0f03b3c3c19331e2c1e3d6c7a83ddd2015c9a9d7) - mezz
    
*   [Fix Jenkins loader manifest parsing](https://github.com/mezz/MezzConfig/commit/add26eb7b9901d832d2a4ef070295373ad4bedbb) - mezz
    

### v0.5.10

*   [Bump version to 0.5.10](https://github.com/mezz/MezzConfig/commit/0ee96f94626b78fedbe581c8a0bae2767a241f7b) - mezz
    
*   [Cache sorting read snapshots](https://github.com/mezz/MezzConfig/commit/2d5968a19d71845dc86598486d063547be2b3603) - mezz
    
*   [Skip snapshots for unchanged config reads](https://github.com/mezz/MezzConfig/commit/b8e6b4fb24cd575a2d64cd41f83f32fc00e8b2e6) - mezz
    
*   [Support multiple Minecraft versions](https://github.com/mezz/MezzConfig/commit/65fd273bc3bac83ab5467e698732545058a067c4) - mezz
    

### v0.5.9

*   [fix: ignore watcher events from config saves](https://github.com/mezz/MezzConfig/commit/a2f4af88372f495cd8225fd378f0dd2b45994d10) - mezz
    

### v0.5.8

*   [Bump version to 0.5.8](https://github.com/mezz/MezzConfig/commit/1a948e340f8e7a74b556ca330caa9c0ce578e67e) - mezz
    
*   [use simpler mod icon](https://github.com/mezz/MezzConfig/commit/fc1399b98b19f64863fdedd785a35f601eebff79) - mezz
    
*   [Avoid notifying about releases in Discord when there's no new release](https://github.com/mezz/MezzConfig/commit/70cdcc70ab40ddf14318db4fb293208c4db8a726) - mezz
    
*   [Remove unused jars from maven publication](https://github.com/mezz/MezzConfig/commit/592c333862072ff9f7f6442b5c2757365752294f) - mezz
    
*   [Improve the clarity of tests with comments](https://github.com/mezz/MezzConfig/commit/c30e34fa4e4f4df4051cf02d61c3a4b2058de421) - mezz
    

### v0.5.7

*   [Register MezzConfig settings schema](https://github.com/mezz/MezzConfig/commit/fc66bb78f89692f8722a7c73c6021fbeb128153b) - mezz
    
*   [Use jenkins notifier](https://github.com/mezz/MezzConfig/commit/d81917889571d37e093c1116608e097a6fabe4f2) - mezz
    

### v0.5.6

*   [Fix oldest published API compatibility baseline](https://github.com/mezz/MezzConfig/commit/69c4c5fb7443c8179fa107ce2d7c63da43d25610) - mezz
    

### v0.5.5

*   [Publish complete loader jars to Maven and bump version to 0.5.5](https://github.com/mezz/MezzConfig/commit/53f41c456575496f6b89156fbc8324a0e50ca19e) - mezz
    
*   [Add mod icon](https://github.com/mezz/MezzConfig/commit/7c06371a60c61a3bc6ff664de865fab37b92ad1d) - mezz
    

### v0.5.4

*   [Mark Common as an FML game library and bump version to 0.5.4](https://github.com/mezz/MezzConfig/commit/cd27b62403781ad4e3158262f1ca5f68622d4aaf) - mezz
    
*   [Remove publishing dry runs from Jenkins](https://github.com/mezz/MezzConfig/commit/63984fd55af83430bebadb4c9d01268f707c9c08) - mezz
    

### v0.5.3

*   [Fix CurseForge publishing and bump version to 0.5.3](https://github.com/mezz/MezzConfig/commit/a408afa226ccd209d1fd48248d0801aaf4ca27f6) - mezz
    

### v0.5.2

*   [Bump version to 0.5.2 and set baseline to 0.5.2 for initial release](https://github.com/mezz/MezzConfig/commit/ac6f299b1f3f3ffbacf7a1a81e7391dc46071cf2) - mezz

### MezzConfig 0.5.12 for NeoForge 1.21.1
### v0.5.12

*   [Bump version to 0.5.12](https://github.com/mezz/MezzConfig/commit/5912fd97f02abb02f1d5baa7aaf977d612454028) - mezz
    
*   [Restore Forge support through 1.21.1](https://github.com/mezz/MezzConfig/commit/deddf6032c33ffc9e2ad32cb8ae962fb64c7bf40) - mezz
    
*   [Add NeoForge iconFile](https://github.com/mezz/MezzConfig/commit/9a778e61447553ec7585dc4e0189e487d64223d3) - mezz
    
*   [Speed up multiversion CI](https://github.com/mezz/MezzConfig/commit/21c4e2e0f5a772d0778109ee7a9a07cc9ac774ee) - mezz
    
*   [Add project badges to README](https://github.com/mezz/MezzConfig/commit/4f349c75f2497bc6b8aca80d77c50df1838ec17e) - mezz
    
*   [Create ja_jp.json (#1)](https://github.com/mezz/MezzConfig/commit/86a7c6912a5132287542003804c573bab8dfd105) - Abbage230
    
*   [Document MezzConfig contributor license agreement](https://github.com/mezz/MezzConfig/commit/beb3c0eaf8ac7f418d21942b3290266f4a9edb9c) - mezz
    
*   [Handle first release notifications](https://github.com/mezz/MezzConfig/commit/1e2d9a862ad92af6305c343b9603ca3f742571dc) - mezz
    

### v0.5.11

*   [Bump version to 0.5.11](https://github.com/mezz/MezzConfig/commit/e67918aa1cb689c2eb48ead69bd26f5c90dce5f9) - mezz
    
*   [Defer published API validation](https://github.com/mezz/MezzConfig/commit/0f03b3c3c19331e2c1e3d6c7a83ddd2015c9a9d7) - mezz
    
*   [Fix Jenkins loader manifest parsing](https://github.com/mezz/MezzConfig/commit/add26eb7b9901d832d2a4ef070295373ad4bedbb) - mezz
    

### v0.5.10

*   [Bump version to 0.5.10](https://github.com/mezz/MezzConfig/commit/0ee96f94626b78fedbe581c8a0bae2767a241f7b) - mezz
    
*   [Cache sorting read snapshots](https://github.com/mezz/MezzConfig/commit/2d5968a19d71845dc86598486d063547be2b3603) - mezz
    
*   [Skip snapshots for unchanged config reads](https://github.com/mezz/MezzConfig/commit/b8e6b4fb24cd575a2d64cd41f83f32fc00e8b2e6) - mezz
    
*   [Support multiple Minecraft versions](https://github.com/mezz/MezzConfig/commit/65fd273bc3bac83ab5467e698732545058a067c4) - mezz
    

### v0.5.9

*   [fix: ignore watcher events from config saves](https://github.com/mezz/MezzConfig/commit/a2f4af88372f495cd8225fd378f0dd2b45994d10) - mezz
    

### v0.5.8

*   [Bump version to 0.5.8](https://github.com/mezz/MezzConfig/commit/1a948e340f8e7a74b556ca330caa9c0ce578e67e) - mezz
    
*   [use simpler mod icon](https://github.com/mezz/MezzConfig/commit/fc1399b98b19f64863fdedd785a35f601eebff79) - mezz
    
*   [Avoid notifying about releases in Discord when there's no new release](https://github.com/mezz/MezzConfig/commit/70cdcc70ab40ddf14318db4fb293208c4db8a726) - mezz
    
*   [Remove unused jars from maven publication](https://github.com/mezz/MezzConfig/commit/592c333862072ff9f7f6442b5c2757365752294f) - mezz
    
*   [Improve the clarity of tests with comments](https://github.com/mezz/MezzConfig/commit/c30e34fa4e4f4df4051cf02d61c3a4b2058de421) - mezz
    

### v0.5.7

*   [Register MezzConfig settings schema](https://github.com/mezz/MezzConfig/commit/fc66bb78f89692f8722a7c73c6021fbeb128153b) - mezz
    
*   [Use jenkins notifier](https://github.com/mezz/MezzConfig/commit/d81917889571d37e093c1116608e097a6fabe4f2) - mezz
    

### v0.5.6

*   [Fix oldest published API compatibility baseline](https://github.com/mezz/MezzConfig/commit/69c4c5fb7443c8179fa107ce2d7c63da43d25610) - mezz
    

### v0.5.5

*   [Publish complete loader jars to Maven and bump version to 0.5.5](https://github.com/mezz/MezzConfig/commit/53f41c456575496f6b89156fbc8324a0e50ca19e) - mezz
    
*   [Add mod icon](https://github.com/mezz/MezzConfig/commit/7c06371a60c61a3bc6ff664de865fab37b92ad1d) - mezz
    

### v0.5.4

*   [Mark Common as an FML game library and bump version to 0.5.4](https://github.com/mezz/MezzConfig/commit/cd27b62403781ad4e3158262f1ca5f68622d4aaf) - mezz
    
*   [Remove publishing dry runs from Jenkins](https://github.com/mezz/MezzConfig/commit/63984fd55af83430bebadb4c9d01268f707c9c08) - mezz
    

### v0.5.3

*   [Fix CurseForge publishing and bump version to 0.5.3](https://github.com/mezz/MezzConfig/commit/a408afa226ccd209d1fd48248d0801aaf4ca27f6) - mezz
    

### v0.5.2

*   [Bump version to 0.5.2 and set baseline to 0.5.2 for initial release](https://github.com/mezz/MezzConfig/commit/ac6f299b1f3f3ffbacf7a1a81e7391dc46071cf2) - mezz

### MezzConfig 0.5.11 for NeoForge 1.21.11
### v0.5.11

*   [Bump version to 0.5.11](https://github.com/mezz/MezzConfig/commit/e67918aa1cb689c2eb48ead69bd26f5c90dce5f9) - mezz
    
*   [Defer published API validation](https://github.com/mezz/MezzConfig/commit/0f03b3c3c19331e2c1e3d6c7a83ddd2015c9a9d7) - mezz
    
*   [Fix Jenkins loader manifest parsing](https://github.com/mezz/MezzConfig/commit/add26eb7b9901d832d2a4ef070295373ad4bedbb) - mezz
    

### v0.5.10

*   [Bump version to 0.5.10](https://github.com/mezz/MezzConfig/commit/0ee96f94626b78fedbe581c8a0bae2767a241f7b) - mezz
    
*   [Cache sorting read snapshots](https://github.com/mezz/MezzConfig/commit/2d5968a19d71845dc86598486d063547be2b3603) - mezz
    
*   [Skip snapshots for unchanged config reads](https://github.com/mezz/MezzConfig/commit/b8e6b4fb24cd575a2d64cd41f83f32fc00e8b2e6) - mezz
    
*   [Support multiple Minecraft versions](https://github.com/mezz/MezzConfig/commit/65fd273bc3bac83ab5467e698732545058a067c4) - mezz
    

### v0.5.9

*   [fix: ignore watcher events from config saves](https://github.com/mezz/MezzConfig/commit/a2f4af88372f495cd8225fd378f0dd2b45994d10) - mezz
    

### v0.5.8

*   [Bump version to 0.5.8](https://github.com/mezz/MezzConfig/commit/1a948e340f8e7a74b556ca330caa9c0ce578e67e) - mezz
    
*   [use simpler mod icon](https://github.com/mezz/MezzConfig/commit/fc1399b98b19f64863fdedd785a35f601eebff79) - mezz
    
*   [Avoid notifying about releases in Discord when there's no new release](https://github.com/mezz/MezzConfig/commit/70cdcc70ab40ddf14318db4fb293208c4db8a726) - mezz
    
*   [Remove unused jars from maven publication](https://github.com/mezz/MezzConfig/commit/592c333862072ff9f7f6442b5c2757365752294f) - mezz
    
*   [Improve the clarity of tests with comments](https://github.com/mezz/MezzConfig/commit/c30e34fa4e4f4df4051cf02d61c3a4b2058de421) - mezz
    

### v0.5.7

*   [Register MezzConfig settings schema](https://github.com/mezz/MezzConfig/commit/fc66bb78f89692f8722a7c73c6021fbeb128153b) - mezz
    
*   [Use jenkins notifier](https://github.com/mezz/MezzConfig/commit/d81917889571d37e093c1116608e097a6fabe4f2) - mezz
    

### v0.5.6

*   [Fix oldest published API compatibility baseline](https://github.com/mezz/MezzConfig/commit/69c4c5fb7443c8179fa107ce2d7c63da43d25610) - mezz
    

### v0.5.5

*   [Publish complete loader jars to Maven and bump version to 0.5.5](https://github.com/mezz/MezzConfig/commit/53f41c456575496f6b89156fbc8324a0e50ca19e) - mezz
    
*   [Add mod icon](https://github.com/mezz/MezzConfig/commit/7c06371a60c61a3bc6ff664de865fab37b92ad1d) - mezz
    

### v0.5.4

*   [Mark Common as an FML game library and bump version to 0.5.4](https://github.com/mezz/MezzConfig/commit/cd27b62403781ad4e3158262f1ca5f68622d4aaf) - mezz
    
*   [Remove publishing dry runs from Jenkins](https://github.com/mezz/MezzConfig/commit/63984fd55af83430bebadb4c9d01268f707c9c08) - mezz
    

### v0.5.3

*   [Fix CurseForge publishing and bump version to 0.5.3](https://github.com/mezz/MezzConfig/commit/a408afa226ccd209d1fd48248d0801aaf4ca27f6) - mezz
    

### v0.5.2

*   [Bump version to 0.5.2 and set baseline to 0.5.2 for initial release](https://github.com/mezz/MezzConfig/commit/ac6f299b1f3f3ffbacf7a1a81e7391dc46071cf2) - mezz
    
*   [Generate publishing changelogs from Git history](https://github.com/mezz/MezzConfig/commit/39c34be0eb44d33d6d98401aaf3ac7ffa7e0dc2d) - mezz
    
*   [Wire Jenkins publishing and complete release validation](https://github.com/mezz/MezzConfig/commit/e508e3f2e7483cdd495f8f41edc97d56b20b3ad2) - mezz
    
*   [Set publishing project IDs](https://github.com/mezz/MezzConfig/commit/d0b5f2df25de01226a685a10042d4b20149603c6) - mezz
    
*   [Configure CurseForge and Modrinth release publishing](https://github.com/mezz/MezzConfig/commit/28bf11a48d332666e425fed6962a6d86ed40bab6) - mezz
    

### v0.5.1

*   [Prepare 0.5.1 release](https://github.com/mezz/MezzConfig/commit/d607e89ca2728349d916b2dd176e53e86c3550e6) - mezz
    
*   [Document all release validation checks](https://github.com/mezz/MezzConfig/commit/068d339a266b83facbf700f3682d6866efe3fc67) - mezz
    
*   [Include the Common runtime in Forge and NeoForge embedding](https://github.com/mezz/MezzConfig/commit/8eb2dd156f3374dba17d5a16b8ed5ce543dac979) - mezz
    
*   [Dispatch config listeners in consistent phases](https://github.com/mezz/MezzConfig/commit/a7a47cfdebab95220add3d42b493292040906c02) - mezz


_________________
# **Removed Mods**

## None


_________________

Changelog generated by [CF-Changelog-Generator](https://github.com/Charismara/CF-Changelog-Generator)