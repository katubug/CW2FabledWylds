## Mod Updates
- **Adorable Hamster Pets** updated from 3.6.1-1.21.1+neoforge to 3.7.0-1.21.1+neoforge
- **Amendments** updated from 1.21-2.1.9 to 1.21-2.1.10
- **Blueprint** updated from 8.1.1 to 8.2.0
- **Broom Closet** updated from 0.6.7beta to 0.6.8beta
- **Corail Tombstone** updated from 9.5.5 to 9.5.6
- **Create: Copycats+** updated from 3.0.8+mc.1.21.1-neoforge to 3.0.9+mc.1.21.1-neoforge
- **Entity Model Features** updated from 3.3.3 to 3.3.5
- **FTB Quests** updated from 2101.1.34 to 2101.1.35
- **Fusion** updated from 1.3.14+a to 1.3.15+a
- **Hearth and Harvest** updated from 1.3.3 to 1.3.4
- **Just Enough Items** updated from 19.51.0.418 to 19.53.0.426
- **KubeJS** updated from 2101.7.2-build.374 to 2101.7.2-build.377
- **Legendary Titles** updated from 1.0.8 to 2.0.0
- **Lithostitched** updated from 1.8.0+beta4 to 1.8.0+beta6
- **Little Joys** updated from 21.1.16 to 21.1.18
- **Lootr** updated from 1.21.1-1.11.38.124 to 1.21.1-1.11.38.125
- **MoogsEndStructures** updated from2.0.3 to v2.1.0
- **Moonlight Lib** updated from 1.21.1-3.6.0 to 1.21.1-3.6.3
- **More Culling** updated from 1.0.9 to 1.0.10
- **More Quest Types** updated from 1.3.6 to 1.3.8
- **Polytone** updated from 1.21-4.1.0 to 1.21-4.2.0
- **Punchy** updated from 2.7d to 2.7e
- **Puzzles Lib** updated from 21.1.56 to 21.1.60
- **Quark** updated from 4.1-482 to 4.1-483
- **Quests Visual** updated from 1.0.33 to 1.0.39
- **Reliable Replacer** updated from 1.7.0 to 1.7.1
- **Sophisticated Backpacks** updated from 3.25.78 to 3.26.2
- **Sophisticated Core** updated from 1.4.90 to 1.5.1
- **Starcatcher** updated from 3.1.2-NEOFORGE-1.21.1 to 3.1.4.1-NEOFORGE-1.21.1
- **Supplementaries** updated from 1.21.1-3.9.6 to 1.21.1-3.9.8
- **Torchmaster** updated from 21.1.10 to 21.1.12
- **Traveler Tool Belt** updated from 1.0.2 to 1.0.3
- **Waystones** updated from 21.1.42 to 21.1.44

## New Mods
- **AttributeCore** v1.0.3
- **Compass to Map: Xaero's Minimap & Explorer's Compass & Nature's Compass Addon** v0.1.2
- **Ecstatic** v1.4.1
- **GuideME** v21.1.17
- **Music Maker Mod** v1.21.1-1.2.1
- **chunksending mod** v3.9

## Removed Mods
- **Guide** (was v1.2.1)
- **Yukami's Sophisticated Backpack Tab** (was v1.1.1) - unsure if this will keep updating, but soph updates like 24/7 so it keeps breaking

## Quest Changes
Category: Quest Changes

- Reworked reward delivery across many chapters (Arts & Witchcrafts, Quest Shoppe, Witchery, Wildlife) to use the new parcel/mail delivery system instead of direct loot
- Wildlife: added a new hamster-taming quest line (find a hamster, then tame it with cucumber slices) for the hamster guide. Existing "obtain hamster item" quest now depends on the new taming quest and moved position. More to come later.
- Witchery: added several new decorative book panels and titles to help organize this page. Reworked quest dependencies so the starting witch oven and broom quests no longer require prior quests, and repositioned many quests in the chapter layout. Witch oven quest now also offers a birch sapling and rowan sapling as alternate rewards instead of spruce sapling.
- Arts & Witchcrafts: removed a decorative separator image, adjusted quest positions, and updated several quests to use parcel-based rewards; some quest reward tiers changed (e.g. paper count, random loot tables).
- Quest Shoppe: added a new purchasable paper quest (costs price tier 3) with a 16x paper parcel reward.
- Updated text: Related crow references renamed to "Ravens" throughout quest descriptions.
- Added a few new quests as well.

## Config Changes
- Disabled vanilla recipe book in Crafting Tweaks config
- Disabled Cooking Pot recipe book in Farmers Delight
- Disabled simple harvest in Quark config
- Disabled Quark's programmer art resource pack generation and onboarding popup
- Enabled ftb chunk death waypoint disabling via mixin in Broom Closet - I FUCKING HOPE
- Changed recipe book button mode from TOGGLE to DISABLED in Nerb config
- Enabled static sky in Stellar View for shader compat
- Added Verdant Grimoire to Eccentric Tome whitelist
- Started GuideMe guides but since I might switch to Guide, this is just a scaffold for now.

## Server Script Changes
- Added item tags for magical logs (rowan logs, willow logs, witch hazel logs from various mods) and roots spells
- Fixed the starter kit - players should now spawn with a Witch Charm (so witches won't aggro)
- Added ingredient replacements to normalize acorns from various mods to a common tag
- Added special wood recipe handling for Better Nether logs

## Startup Script Changes
- Added `mysticsbiomes:butterfly_nest` to the nuked items list

## Asset Changes
- Refactored tip JSON files to use translation keys instead of hardcoded text, centralizing all tip text strings in the lang file
- Updated quest theme colors: dependency line requires color changed to bright green (#7cffa1), required_for color changed to bright purple (#df74ff), and increased dependency line thickness from 0.75 to 0.9
- Renamed AHP's Acorns to Hard Acorns

## Datapack Changes
- Fixed hamster bedding recipe to use correct dirt tag (changed from `c:dirts` to `c:dirt`)
- Added stuff to Roots recipes (previously moved from Pyre to Mixing Cauldron) because MC recipes require 8 items.
- Added new enchanted altar crafting recipe because the previous one was annoying.

 
# Mod Changelog 
 
## Just Enough Items (JEI)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/jei)

### 19.53.0.426 for NeoForge 1.21.1
### Current release 19.53.0

*   [Fix #4474 Dragging bookmarks can cause bookmark area to move around](https://github.com/mezz/JustEnoughItems/commit/98184cc26839d7a40da31b019ff098198ac1f931) - mezz
    
*   [Expose bookmark APIs for #4469](https://github.com/mezz/JustEnoughItems/commit/874fc7566fb7476323f4b2d5e49da60542a3d453) - mezz
    
*   [Fix #4468 Double clicking issue on Fabric with Kilt](https://github.com/mezz/JustEnoughItems/commit/c009212ba8c079d6e4f85e106e67778a42a93f89) - mezz
    
*   [Render Forge overlays with an identity pose](https://github.com/mezz/JustEnoughItems/commit/c84b8f5c9f94447e7457e8d503b9624fc37550b8) - mezz
    
*   [Suppress tooltips behind pinned previews](https://github.com/mezz/JustEnoughItems/commit/bf0f4661fd004b712a14f582200b99273d18fd26) - mezz
    *   Adapt tooltip suppression to 1.21.1's immediate rendering hooks and retained Forge loader.
*   [Fix Forge development classpath for shaded libraries](https://github.com/mezz/JustEnoughItems/commit/ba257c7904fbeab983a1501291f000f0fda4ea34) - mezz
    
*   [Clean up bookmark preview tooltip text](https://github.com/mezz/JustEnoughItems/commit/e75573bbd335c779302fc5c52bddd101d0091732) - mezz
*   [Show transfer controls in pinned bookmark previews](https://github.com/mezz/JustEnoughItems/commit/a929948c63a92312abd5f3eb044e39195a3d0b33) - mezz
    *   Integrate pinned transfers with 1.21.1's recipe-transfer lifecycle service and PoseStack rendering.
*   [Use the pin key for bookmark preview details](https://github.com/mezz/JustEnoughItems/commit/9808bb8dba0a9e9747bd8fcea6551e602d08c445) - mezz
*   [Allow focus hotkeys while pinned tooltips are open](https://github.com/mezz/JustEnoughItems/commit/68fe0c4cf229999fd4fa29af53b45e4e2788c092) - mezz
    *   Retain 1.21.1's input-handler signature and Catalyst role, and support its retained Forge key mappings.
*   [Disable unbound bookmark preview pinning](https://github.com/mezz/JustEnoughItems/commit/5d2a9e623135f7e8a189fe2498f6149667e8f6ef) - mezz
*   [Reuse pinned tooltip rendering for ingredient candidates](https://github.com/mezz/JustEnoughItems/commit/1a2785183461fe37b8aa93722317a12c66bfdd0d) - mezz
    *   Retain 1.21.1's PoseStack depth handling for nested ingredient tooltips.
*   [Expose bookmark previews as recipe focus sources](https://github.com/mezz/JustEnoughItems/commit/b85b558f95a2a83ce598973282ecc43061609d5d) - mezz
*   [detect when other mods add mod names to tooltips with neoforge events](https://github.com/mezz/JustEnoughItems/commit/53101ce85892443dbe7b9863a081c175a0d53649) - mezz
    *   Adapt the loader tooltip hook to 1.21.1's retained Forge implementation as well.
*   [Add pinnable interactive tooltip for bookmark recipe previews (#4462)](https://github.com/mezz/JustEnoughItems/commit/41914ebcae0582eb90b9cdf1466ca60dd39a64f3) - vfyjxf
    *   Adapt preview rendering to 1.21.1's PoseStack API and retained recipe-transfer service.
*   [stop logging errors when there are empty itemstacks in the creative menu](https://github.com/mezz/JustEnoughItems/commit/2c7691a85056a6ded5f00d38d8b9ad9e25046816) - mezz
*   [Track pinned bookmark preview sources](https://github.com/mezz/JustEnoughItems/commit/03a703df9d8538d19ea1183c324aa4312d5936ac) - mezz
*   [Fix Fabric Maven publication](https://github.com/mezz/JustEnoughItems/commit/bfae96326858b4f2c9bd5b4f7643812ac8a07dd6) - mezz
*   [Fix ingredient list cheat regressions](https://github.com/mezz/JustEnoughItems/commit/1e84f22cf7f0a907d0ed07d4a0b1677fdcf79765) - mezz
*   [Speed up client game tests](https://github.com/mezz/JustEnoughItems/commit/e30d37aac4113b175d42caa7974b899e12688b61) - mezz
    
*   [Add recipe transfer lifecycle API](https://github.com/mezz/JustEnoughItems/commit/d0f3db4db0e7e8606a22ca779ff50f8451e10955) - mezz
*   [Fix #4461 legacy tooltips should not be given blank lines](https://github.com/mezz/JustEnoughItems/commit/c2d532d21eadbe619753c26b7982e646ec229ac3) - mezz
*   [Update ja_jp.json (#4465)](https://github.com/mezz/JustEnoughItems/commit/bb7449dbc31f25469bb817bf51f1daa719885b69) - Abbage230
    
*   [Fix crash with mods that use the texture atlas (embeddium, Factory API)](https://github.com/mezz/JustEnoughItems/commit/19032e46fa8bc09b7c9408c540996052115de746) - mezz
*   [Publish only shaded loader artifacts](https://github.com/mezz/JustEnoughItems/commit/702855932d3a7273e92fb4c6f31ecebe49751bbc) - mezz
    *   Attach the final shaded binary and sources jars directly to each Maven publication. This keeps Gradle module metadata and unshaded intermediate jars out of the repository, so ordinary mod dependencies always resolve a self-contained JEI jar.
*   [Fix Forge development runs](https://github.com/mezz/JustEnoughItems/commit/cdb5dfd397cac36535fc407ef8e24eaaa10a63bd) - mezz
    
*   [Fix Forge runtime compatibility](https://github.com/mezz/JustEnoughItems/commit/7d8f578c96af316d97363278d586531673d4a0d3) - mezz
    
*   [Fix Fabric recipe tooltip render ordering](https://github.com/mezz/JustEnoughItems/commit/4fc6379d0c0c82384d8cd518ddc8a7d876d8a8d1) - mezz
    *   Draw JEI foreground layers after non-container screens finish rendering so interactive ingredient tooltips do not depth-clip recipe contents. Restore recipe widgets to their inherited Z.
*   [Fix cooking fuels and recipe overlay rendering](https://github.com/mezz/JustEnoughItems/commit/78225af1cb73148b8d2df3953c89595891663437) - mezz
    *   Restore the explicit furnace fuel list needed by 1.21.1 cooking categories. Port the 1.20.1 rendering depth fixes for recipe widgets, slot badges, and interactive ingredient tooltips.
*   [fix tests](https://github.com/mezz/JustEnoughItems/commit/2b7ea257b62b0e9314a66d39fd4354c96a1e62c5) - mezz

### 27.37.0.96 for NeoForge 1.21.11
### Current release 27.37.0

*   [Expose bookmark APIs for #4469](https://github.com/mezz/JustEnoughItems/commit/ff23de785ced1dfed38dd5360b852cbad49adb27) - mezz
*   [Fix #4468 Double clicking issue on Fabric with Kilt](https://github.com/mezz/JustEnoughItems/commit/ceb97cd5eef30a578a30f305b9cc0410aa372bfc) - mezz
*   [Use mezzdev JavaFormatting rules](https://github.com/mezz/JustEnoughItems/commit/d52154cc88ba8ecf2e0685a1ce05e423cccea362) - mezz
    *   Replace the target-local Spotless rules with java-formatting 0.4.0 and apply the final rule set across the 1.21.11 sources.
    *   Fold source formatting follow-ups c41cef372, 8a7ac02ef, and 1162407bf.
*   [Suppress tooltips behind pinned previews](https://github.com/mezz/JustEnoughItems/commit/8c1fb415fa8ce47e6dd9670eb51bb6985bdfe454) - mezz
*   [Add recipe transfer lifecycle API](https://github.com/mezz/JustEnoughItems/commit/615419aab3dab2737f7d4ba72fca4a75545e70e0) - mezz
*   [Use the pin key for bookmark preview details](https://github.com/mezz/JustEnoughItems/commit/2b0b9e9b1f22cae49dffb45e5dafb96131bdbd85) - mezz
*   [Show transfer controls in pinned bookmark previews](https://github.com/mezz/JustEnoughItems/commit/9c7a06416095a12b5e599953d370d5a813fd6148) - mezz
*   [Reuse pinned tooltip rendering for ingredient candidates](https://github.com/mezz/JustEnoughItems/commit/566f4483c0c8e40ced22e5a388433871302316c6) - mezz
*   [Allow focus hotkeys while pinned tooltips are open](https://github.com/mezz/JustEnoughItems/commit/4bdf853ab7b3b7e091b2bfc3243f870a4c194506) - mezz
*   [Clean up bookmark preview tooltip text](https://github.com/mezz/JustEnoughItems/commit/4531f9d1dbb597bbe13be9dd10a89a3d72cd1ce2) - mezz
*   [Disable unbound bookmark preview pinning](https://github.com/mezz/JustEnoughItems/commit/3aab7f95b0eb8de9e1854161e34014fbaa028368) - mezz
*   [Track pinned bookmark preview sources](https://github.com/mezz/JustEnoughItems/commit/8c673450b97f90ccb167879b1ceeac656540209a) - mezz
*   [Add pinnable interactive tooltip for bookmark recipe previews (#4462)](https://github.com/mezz/JustEnoughItems/commit/853fdde1cca0c65597d24989affe4aa9496023f4) - vfyjxf
*   [Expose bookmark previews as recipe focus sources](https://github.com/mezz/JustEnoughItems/commit/273f608a999f736e691ed1a50d15682fd00a3040) - mezz
*   [stop logging errors when there are empty itemstacks in the creative menu](https://github.com/mezz/JustEnoughItems/commit/1726133e577bc238bd7a872700d453de41f3197a) - mezz
*   [detect when other mods add mod names to tooltips with neoforge events](https://github.com/mezz/JustEnoughItems/commit/ae72fe4451ca099bb6d5d636db466dae37788c7b) - mezz
*   [Fix pinning recipe slot candidate tooltips](https://github.com/mezz/JustEnoughItems/commit/b4dc245b7ba82b6863ba295f22b0b3d1f39e2820) - mezz
*   [Fix ingredient list cheat regressions](https://github.com/mezz/JustEnoughItems/commit/a9dc2313c352c55330772b59597c54018a53f2a0) - mezz
*   [Fix Fabric Maven publication](https://github.com/mezz/JustEnoughItems/commit/7b64308fc0e38e9accafbd19725d44219e6d6068) - mezz
    
*   [Fix crash with mods that use the texture atlas (embeddium, Factory API)](https://github.com/mezz/JustEnoughItems/commit/a6e8671cfda32439976600209ea9a693a0805b61) - mezz
*   [Publish only shaded loader artifacts](https://github.com/mezz/JustEnoughItems/commit/0910a818ed7bffa0985ed87c52ed6f7f6c53e20a) - mezz
    *   Attach the final shaded binary and sources jars directly to each Maven publication. This keeps Gradle module metadata and unshaded intermediate jars out of the repository, so ordinary mod dependencies always resolve a self-contained JEI jar.
*   [fix tests](https://github.com/mezz/JustEnoughItems/commit/f7dc4ef4c371e68bd96d953c0d852178f893bda0) - mezz
*   [Add more convenient widgets for drawing recipes](https://github.com/mezz/JustEnoughItems/commit/dff3dc2aa0f604185761735e1f56076e89e1abb8) - mezz
*   [Remove 1.21 from supported versions list](https://github.com/mezz/JustEnoughItems/commit/24e5d8d2e156fa0720558fcf50aef1c13b687dea) - mezz
*   [Fix #4457 Protect grindstone recipes from mod crashes](https://github.com/mezz/JustEnoughItems/commit/b259af10ea6b869142996626f5e59ad425820eb0) - mezz
*   [Implement UidContext.Recipe focus filtering in recipes](https://github.com/mezz/JustEnoughItems/commit/0b85ac55f346d91b9f1786fc98de40872d2dfc9e) - mezz
*   [Clean up recipe ingredient helpers](https://github.com/mezz/JustEnoughItems/commit/e556dd8c56c00662f38063cc350c01a6c2f0cc15) - mezz
*   [Close #4238 Add context-aware ingredient visibility](https://github.com/mezz/JustEnoughItems/commit/21671b89ff36cd8254f505f1a36d0b412fe6c3f5) - mezz
*   [Fix localization key issue](https://github.com/mezz/JustEnoughItems/commit/0f5e77491aa0e236a1ffc932ee9cae334b4dd66c) - mezz
*   [Close #4439 Provide ContextMap during ingredient registration](https://github.com/mezz/JustEnoughItems/commit/005468701c4082526da97b0b6e65968a798a2825) - mezz

### 19.53.0.425 for NeoForge 1.21.1
### Current release 19.53.0

*   [Expose bookmark APIs for #4469](https://github.com/mezz/JustEnoughItems/commit/874fc7566fb7476323f4b2d5e49da60542a3d453) - mezz
    
*   [Fix #4468 Double clicking issue on Fabric with Kilt](https://github.com/mezz/JustEnoughItems/commit/c009212ba8c079d6e4f85e106e67778a42a93f89) - mezz
    
*   [Render Forge overlays with an identity pose](https://github.com/mezz/JustEnoughItems/commit/c84b8f5c9f94447e7457e8d503b9624fc37550b8) - mezz
    
*   [Suppress tooltips behind pinned previews](https://github.com/mezz/JustEnoughItems/commit/bf0f4661fd004b712a14f582200b99273d18fd26) - mezz
    *   Adapt tooltip suppression to 1.21.1's immediate rendering hooks and retained Forge loader.
*   [Fix Forge development classpath for shaded libraries](https://github.com/mezz/JustEnoughItems/commit/ba257c7904fbeab983a1501291f000f0fda4ea34) - mezz
    
*   [Clean up bookmark preview tooltip text](https://github.com/mezz/JustEnoughItems/commit/e75573bbd335c779302fc5c52bddd101d0091732) - mezz
*   [Show transfer controls in pinned bookmark previews](https://github.com/mezz/JustEnoughItems/commit/a929948c63a92312abd5f3eb044e39195a3d0b33) - mezz
    *   Integrate pinned transfers with 1.21.1's recipe-transfer lifecycle service and PoseStack rendering.
*   [Use the pin key for bookmark preview details](https://github.com/mezz/JustEnoughItems/commit/9808bb8dba0a9e9747bd8fcea6551e602d08c445) - mezz
*   [Allow focus hotkeys while pinned tooltips are open](https://github.com/mezz/JustEnoughItems/commit/68fe0c4cf229999fd4fa29af53b45e4e2788c092) - mezz
    *   Retain 1.21.1's input-handler signature and Catalyst role, and support its retained Forge key mappings.
*   [Disable unbound bookmark preview pinning](https://github.com/mezz/JustEnoughItems/commit/5d2a9e623135f7e8a189fe2498f6149667e8f6ef) - mezz
*   [Reuse pinned tooltip rendering for ingredient candidates](https://github.com/mezz/JustEnoughItems/commit/1a2785183461fe37b8aa93722317a12c66bfdd0d) - mezz
    *   Retain 1.21.1's PoseStack depth handling for nested ingredient tooltips.
*   [Expose bookmark previews as recipe focus sources](https://github.com/mezz/JustEnoughItems/commit/b85b558f95a2a83ce598973282ecc43061609d5d) - mezz
*   [detect when other mods add mod names to tooltips with neoforge events](https://github.com/mezz/JustEnoughItems/commit/53101ce85892443dbe7b9863a081c175a0d53649) - mezz
    *   Adapt the loader tooltip hook to 1.21.1's retained Forge implementation as well.
*   [Add pinnable interactive tooltip for bookmark recipe previews (#4462)](https://github.com/mezz/JustEnoughItems/commit/41914ebcae0582eb90b9cdf1466ca60dd39a64f3) - vfyjxf
    *   Adapt preview rendering to 1.21.1's PoseStack API and retained recipe-transfer service.
*   [stop logging errors when there are empty itemstacks in the creative menu](https://github.com/mezz/JustEnoughItems/commit/2c7691a85056a6ded5f00d38d8b9ad9e25046816) - mezz
*   [Track pinned bookmark preview sources](https://github.com/mezz/JustEnoughItems/commit/03a703df9d8538d19ea1183c324aa4312d5936ac) - mezz
*   [Fix Fabric Maven publication](https://github.com/mezz/JustEnoughItems/commit/bfae96326858b4f2c9bd5b4f7643812ac8a07dd6) - mezz
*   [Fix ingredient list cheat regressions](https://github.com/mezz/JustEnoughItems/commit/1e84f22cf7f0a907d0ed07d4a0b1677fdcf79765) - mezz
*   [Speed up client game tests](https://github.com/mezz/JustEnoughItems/commit/e30d37aac4113b175d42caa7974b899e12688b61) - mezz
    
*   [Add recipe transfer lifecycle API](https://github.com/mezz/JustEnoughItems/commit/d0f3db4db0e7e8606a22ca779ff50f8451e10955) - mezz
*   [Fix #4461 legacy tooltips should not be given blank lines](https://github.com/mezz/JustEnoughItems/commit/c2d532d21eadbe619753c26b7982e646ec229ac3) - mezz
*   [Update ja_jp.json (#4465)](https://github.com/mezz/JustEnoughItems/commit/bb7449dbc31f25469bb817bf51f1daa719885b69) - Abbage230
    
*   [Fix crash with mods that use the texture atlas (embeddium, Factory API)](https://github.com/mezz/JustEnoughItems/commit/19032e46fa8bc09b7c9408c540996052115de746) - mezz
*   [Publish only shaded loader artifacts](https://github.com/mezz/JustEnoughItems/commit/702855932d3a7273e92fb4c6f31ecebe49751bbc) - mezz
    *   Attach the final shaded binary and sources jars directly to each Maven publication. This keeps Gradle module metadata and unshaded intermediate jars out of the repository, so ordinary mod dependencies always resolve a self-contained JEI jar.
*   [Fix Forge development runs](https://github.com/mezz/JustEnoughItems/commit/cdb5dfd397cac36535fc407ef8e24eaaa10a63bd) - mezz
    
*   [Fix Forge runtime compatibility](https://github.com/mezz/JustEnoughItems/commit/7d8f578c96af316d97363278d586531673d4a0d3) - mezz
    
*   [Fix Fabric recipe tooltip render ordering](https://github.com/mezz/JustEnoughItems/commit/4fc6379d0c0c82384d8cd518ddc8a7d876d8a8d1) - mezz
    *   Draw JEI foreground layers after non-container screens finish rendering so interactive ingredient tooltips do not depth-clip recipe contents. Restore recipe widgets to their inherited Z.
*   [Fix cooking fuels and recipe overlay rendering](https://github.com/mezz/JustEnoughItems/commit/78225af1cb73148b8d2df3953c89595891663437) - mezz
    *   Restore the explicit furnace fuel list needed by 1.21.1 cooking categories. Port the 1.20.1 rendering depth fixes for recipe widgets, slot badges, and interactive ingredient tooltips.
*   [fix tests](https://github.com/mezz/JustEnoughItems/commit/2b7ea257b62b0e9314a66d39fd4354c96a1e62c5) - mezz
*   [Add more convenient widgets for drawing recipes](https://github.com/mezz/JustEnoughItems/commit/78ca55a5db926f8f3bc4a3c8d250ffad18cbb806) - mezz

### 27.36.0.95 for NeoForge 1.21.11
### Current release 27.36.0

*   [Fix #4468 Double clicking issue on Fabric with Kilt](https://github.com/mezz/JustEnoughItems/commit/ceb97cd5eef30a578a30f305b9cc0410aa372bfc) - mezz
*   [Use mezzdev JavaFormatting rules](https://github.com/mezz/JustEnoughItems/commit/d52154cc88ba8ecf2e0685a1ce05e423cccea362) - mezz
    *   Replace the target-local Spotless rules with java-formatting 0.4.0 and apply the final rule set across the 1.21.11 sources.
    *   Fold source formatting follow-ups c41cef372, 8a7ac02ef, and 1162407bf.
*   [Suppress tooltips behind pinned previews](https://github.com/mezz/JustEnoughItems/commit/8c1fb415fa8ce47e6dd9670eb51bb6985bdfe454) - mezz
*   [Add recipe transfer lifecycle API](https://github.com/mezz/JustEnoughItems/commit/615419aab3dab2737f7d4ba72fca4a75545e70e0) - mezz
*   [Use the pin key for bookmark preview details](https://github.com/mezz/JustEnoughItems/commit/2b0b9e9b1f22cae49dffb45e5dafb96131bdbd85) - mezz
*   [Show transfer controls in pinned bookmark previews](https://github.com/mezz/JustEnoughItems/commit/9c7a06416095a12b5e599953d370d5a813fd6148) - mezz
*   [Reuse pinned tooltip rendering for ingredient candidates](https://github.com/mezz/JustEnoughItems/commit/566f4483c0c8e40ced22e5a388433871302316c6) - mezz
*   [Allow focus hotkeys while pinned tooltips are open](https://github.com/mezz/JustEnoughItems/commit/4bdf853ab7b3b7e091b2bfc3243f870a4c194506) - mezz
*   [Clean up bookmark preview tooltip text](https://github.com/mezz/JustEnoughItems/commit/4531f9d1dbb597bbe13be9dd10a89a3d72cd1ce2) - mezz
*   [Disable unbound bookmark preview pinning](https://github.com/mezz/JustEnoughItems/commit/3aab7f95b0eb8de9e1854161e34014fbaa028368) - mezz
*   [Track pinned bookmark preview sources](https://github.com/mezz/JustEnoughItems/commit/8c673450b97f90ccb167879b1ceeac656540209a) - mezz
*   [Add pinnable interactive tooltip for bookmark recipe previews (#4462)](https://github.com/mezz/JustEnoughItems/commit/853fdde1cca0c65597d24989affe4aa9496023f4) - vfyjxf
*   [Expose bookmark previews as recipe focus sources](https://github.com/mezz/JustEnoughItems/commit/273f608a999f736e691ed1a50d15682fd00a3040) - mezz
*   [stop logging errors when there are empty itemstacks in the creative menu](https://github.com/mezz/JustEnoughItems/commit/1726133e577bc238bd7a872700d453de41f3197a) - mezz
*   [detect when other mods add mod names to tooltips with neoforge events](https://github.com/mezz/JustEnoughItems/commit/ae72fe4451ca099bb6d5d636db466dae37788c7b) - mezz
*   [Fix pinning recipe slot candidate tooltips](https://github.com/mezz/JustEnoughItems/commit/b4dc245b7ba82b6863ba295f22b0b3d1f39e2820) - mezz
*   [Fix ingredient list cheat regressions](https://github.com/mezz/JustEnoughItems/commit/a9dc2313c352c55330772b59597c54018a53f2a0) - mezz
*   [Fix Fabric Maven publication](https://github.com/mezz/JustEnoughItems/commit/7b64308fc0e38e9accafbd19725d44219e6d6068) - mezz
    
*   [Fix crash with mods that use the texture atlas (embeddium, Factory API)](https://github.com/mezz/JustEnoughItems/commit/a6e8671cfda32439976600209ea9a693a0805b61) - mezz
*   [Publish only shaded loader artifacts](https://github.com/mezz/JustEnoughItems/commit/0910a818ed7bffa0985ed87c52ed6f7f6c53e20a) - mezz
    *   Attach the final shaded binary and sources jars directly to each Maven publication. This keeps Gradle module metadata and unshaded intermediate jars out of the repository, so ordinary mod dependencies always resolve a self-contained JEI jar.
*   [fix tests](https://github.com/mezz/JustEnoughItems/commit/f7dc4ef4c371e68bd96d953c0d852178f893bda0) - mezz
*   [Add more convenient widgets for drawing recipes](https://github.com/mezz/JustEnoughItems/commit/dff3dc2aa0f604185761735e1f56076e89e1abb8) - mezz
*   [Remove 1.21 from supported versions list](https://github.com/mezz/JustEnoughItems/commit/24e5d8d2e156fa0720558fcf50aef1c13b687dea) - mezz
*   [Fix #4457 Protect grindstone recipes from mod crashes](https://github.com/mezz/JustEnoughItems/commit/b259af10ea6b869142996626f5e59ad425820eb0) - mezz
*   [Implement UidContext.Recipe focus filtering in recipes](https://github.com/mezz/JustEnoughItems/commit/0b85ac55f346d91b9f1786fc98de40872d2dfc9e) - mezz
*   [Clean up recipe ingredient helpers](https://github.com/mezz/JustEnoughItems/commit/e556dd8c56c00662f38063cc350c01a6c2f0cc15) - mezz
*   [Support #4442 Make recipe slot display overrides authoritative](https://github.com/mezz/JustEnoughItems/commit/977c315c06b19ea32ec50d48d4b72e64d932ff48) - mezz
    *   treat display overrides as the slot’s current contents for rendering, tooltips, lookup, bookmarks, focus, highlights, tag navigation, and ingredient-counts
    *   refresh dynamic recipe layouts after overrides change
    *   use ISlottedRecipeWidget hit testing for clicks and interactive tooltips.
*   [Close #4238 Add context-aware ingredient visibility](https://github.com/mezz/JustEnoughItems/commit/21671b89ff36cd8254f505f1a36d0b412fe6c3f5) - mezz
*   [Fix localization key issue](https://github.com/mezz/JustEnoughItems/commit/0f5e77491aa0e236a1ffc932ee9cae334b4dd66c) - mezz
*   [Close #4439 Provide ContextMap during ingredient registration](https://github.com/mezz/JustEnoughItems/commit/005468701c4082526da97b0b6e65968a798a2825) - mezz

### 19.52.0.424 for NeoForge 1.21.1
### Current release 19.52.0

*   [Fix #4468 Double clicking issue on Fabric with Kilt](https://github.com/mezz/JustEnoughItems/commit/c009212ba8c079d6e4f85e106e67778a42a93f89) - mezz
    
*   [Render Forge overlays with an identity pose](https://github.com/mezz/JustEnoughItems/commit/c84b8f5c9f94447e7457e8d503b9624fc37550b8) - mezz
    
*   [Suppress tooltips behind pinned previews](https://github.com/mezz/JustEnoughItems/commit/bf0f4661fd004b712a14f582200b99273d18fd26) - mezz
    *   Adapt tooltip suppression to 1.21.1's immediate rendering hooks and retained Forge loader.
*   [Fix Forge development classpath for shaded libraries](https://github.com/mezz/JustEnoughItems/commit/ba257c7904fbeab983a1501291f000f0fda4ea34) - mezz
    
*   [Clean up bookmark preview tooltip text](https://github.com/mezz/JustEnoughItems/commit/e75573bbd335c779302fc5c52bddd101d0091732) - mezz
*   [Show transfer controls in pinned bookmark previews](https://github.com/mezz/JustEnoughItems/commit/a929948c63a92312abd5f3eb044e39195a3d0b33) - mezz
    *   Integrate pinned transfers with 1.21.1's recipe-transfer lifecycle service and PoseStack rendering.
*   [Use the pin key for bookmark preview details](https://github.com/mezz/JustEnoughItems/commit/9808bb8dba0a9e9747bd8fcea6551e602d08c445) - mezz
*   [Allow focus hotkeys while pinned tooltips are open](https://github.com/mezz/JustEnoughItems/commit/68fe0c4cf229999fd4fa29af53b45e4e2788c092) - mezz
    *   Retain 1.21.1's input-handler signature and Catalyst role, and support its retained Forge key mappings.
*   [Disable unbound bookmark preview pinning](https://github.com/mezz/JustEnoughItems/commit/5d2a9e623135f7e8a189fe2498f6149667e8f6ef) - mezz
*   [Reuse pinned tooltip rendering for ingredient candidates](https://github.com/mezz/JustEnoughItems/commit/1a2785183461fe37b8aa93722317a12c66bfdd0d) - mezz
    *   Retain 1.21.1's PoseStack depth handling for nested ingredient tooltips.
*   [Expose bookmark previews as recipe focus sources](https://github.com/mezz/JustEnoughItems/commit/b85b558f95a2a83ce598973282ecc43061609d5d) - mezz
*   [detect when other mods add mod names to tooltips with neoforge events](https://github.com/mezz/JustEnoughItems/commit/53101ce85892443dbe7b9863a081c175a0d53649) - mezz
    *   Adapt the loader tooltip hook to 1.21.1's retained Forge implementation as well.
*   [Add pinnable interactive tooltip for bookmark recipe previews (#4462)](https://github.com/mezz/JustEnoughItems/commit/41914ebcae0582eb90b9cdf1466ca60dd39a64f3) - vfyjxf
    *   Adapt preview rendering to 1.21.1's PoseStack API and retained recipe-transfer service.
*   [stop logging errors when there are empty itemstacks in the creative menu](https://github.com/mezz/JustEnoughItems/commit/2c7691a85056a6ded5f00d38d8b9ad9e25046816) - mezz
*   [Track pinned bookmark preview sources](https://github.com/mezz/JustEnoughItems/commit/03a703df9d8538d19ea1183c324aa4312d5936ac) - mezz
*   [Fix Fabric Maven publication](https://github.com/mezz/JustEnoughItems/commit/bfae96326858b4f2c9bd5b4f7643812ac8a07dd6) - mezz
*   [Fix ingredient list cheat regressions](https://github.com/mezz/JustEnoughItems/commit/1e84f22cf7f0a907d0ed07d4a0b1677fdcf79765) - mezz
*   [Speed up client game tests](https://github.com/mezz/JustEnoughItems/commit/e30d37aac4113b175d42caa7974b899e12688b61) - mezz
    
*   [Add recipe transfer lifecycle API](https://github.com/mezz/JustEnoughItems/commit/d0f3db4db0e7e8606a22ca779ff50f8451e10955) - mezz
*   [Fix #4461 legacy tooltips should not be given blank lines](https://github.com/mezz/JustEnoughItems/commit/c2d532d21eadbe619753c26b7982e646ec229ac3) - mezz
*   [Update ja_jp.json (#4465)](https://github.com/mezz/JustEnoughItems/commit/bb7449dbc31f25469bb817bf51f1daa719885b69) - Abbage230
    
*   [Fix crash with mods that use the texture atlas (embeddium, Factory API)](https://github.com/mezz/JustEnoughItems/commit/19032e46fa8bc09b7c9408c540996052115de746) - mezz
*   [Publish only shaded loader artifacts](https://github.com/mezz/JustEnoughItems/commit/702855932d3a7273e92fb4c6f31ecebe49751bbc) - mezz
    *   Attach the final shaded binary and sources jars directly to each Maven publication. This keeps Gradle module metadata and unshaded intermediate jars out of the repository, so ordinary mod dependencies always resolve a self-contained JEI jar.
*   [Fix Forge development runs](https://github.com/mezz/JustEnoughItems/commit/cdb5dfd397cac36535fc407ef8e24eaaa10a63bd) - mezz
    
*   [Fix Forge runtime compatibility](https://github.com/mezz/JustEnoughItems/commit/7d8f578c96af316d97363278d586531673d4a0d3) - mezz
    
*   [Fix Fabric recipe tooltip render ordering](https://github.com/mezz/JustEnoughItems/commit/4fc6379d0c0c82384d8cd518ddc8a7d876d8a8d1) - mezz
    *   Draw JEI foreground layers after non-container screens finish rendering so interactive ingredient tooltips do not depth-clip recipe contents. Restore recipe widgets to their inherited Z.
*   [Fix cooking fuels and recipe overlay rendering](https://github.com/mezz/JustEnoughItems/commit/78225af1cb73148b8d2df3953c89595891663437) - mezz
    *   Restore the explicit furnace fuel list needed by 1.21.1 cooking categories. Port the 1.20.1 rendering depth fixes for recipe widgets, slot badges, and interactive ingredient tooltips.
*   [fix tests](https://github.com/mezz/JustEnoughItems/commit/2b7ea257b62b0e9314a66d39fd4354c96a1e62c5) - mezz
*   [Add more convenient widgets for drawing recipes](https://github.com/mezz/JustEnoughItems/commit/78ca55a5db926f8f3bc4a3c8d250ffad18cbb806) - mezz
*   [Remove 1.21 from supported versions list](https://github.com/mezz/JustEnoughItems/commit/506796f01f09c8400d6c86d8f6e0487dc356b047) - mezz

### 19.52.0.423 for NeoForge 1.21.1
### Current release 19.52.0

*   [Render Forge overlays with an identity pose](https://github.com/mezz/JustEnoughItems/commit/c84b8f5c9f94447e7457e8d503b9624fc37550b8) - mezz
    
*   [Suppress tooltips behind pinned previews](https://github.com/mezz/JustEnoughItems/commit/bf0f4661fd004b712a14f582200b99273d18fd26) - mezz
    *   Adapt tooltip suppression to 1.21.1's immediate rendering hooks and retained Forge loader.
*   [Fix Forge development classpath for shaded libraries](https://github.com/mezz/JustEnoughItems/commit/ba257c7904fbeab983a1501291f000f0fda4ea34) - mezz
    
*   [Clean up bookmark preview tooltip text](https://github.com/mezz/JustEnoughItems/commit/e75573bbd335c779302fc5c52bddd101d0091732) - mezz
*   [Show transfer controls in pinned bookmark previews](https://github.com/mezz/JustEnoughItems/commit/a929948c63a92312abd5f3eb044e39195a3d0b33) - mezz
    *   Integrate pinned transfers with 1.21.1's recipe-transfer lifecycle service and PoseStack rendering.
*   [Use the pin key for bookmark preview details](https://github.com/mezz/JustEnoughItems/commit/9808bb8dba0a9e9747bd8fcea6551e602d08c445) - mezz
*   [Allow focus hotkeys while pinned tooltips are open](https://github.com/mezz/JustEnoughItems/commit/68fe0c4cf229999fd4fa29af53b45e4e2788c092) - mezz
    *   Retain 1.21.1's input-handler signature and Catalyst role, and support its retained Forge key mappings.
*   [Disable unbound bookmark preview pinning](https://github.com/mezz/JustEnoughItems/commit/5d2a9e623135f7e8a189fe2498f6149667e8f6ef) - mezz
*   [Reuse pinned tooltip rendering for ingredient candidates](https://github.com/mezz/JustEnoughItems/commit/1a2785183461fe37b8aa93722317a12c66bfdd0d) - mezz
    *   Retain 1.21.1's PoseStack depth handling for nested ingredient tooltips.
*   [Expose bookmark previews as recipe focus sources](https://github.com/mezz/JustEnoughItems/commit/b85b558f95a2a83ce598973282ecc43061609d5d) - mezz
*   [detect when other mods add mod names to tooltips with neoforge events](https://github.com/mezz/JustEnoughItems/commit/53101ce85892443dbe7b9863a081c175a0d53649) - mezz
    *   Adapt the loader tooltip hook to 1.21.1's retained Forge implementation as well.
*   [Add pinnable interactive tooltip for bookmark recipe previews (#4462)](https://github.com/mezz/JustEnoughItems/commit/41914ebcae0582eb90b9cdf1466ca60dd39a64f3) - vfyjxf
    *   Adapt preview rendering to 1.21.1's PoseStack API and retained recipe-transfer service.
*   [stop logging errors when there are empty itemstacks in the creative menu](https://github.com/mezz/JustEnoughItems/commit/2c7691a85056a6ded5f00d38d8b9ad9e25046816) - mezz
*   [Track pinned bookmark preview sources](https://github.com/mezz/JustEnoughItems/commit/03a703df9d8538d19ea1183c324aa4312d5936ac) - mezz
*   [Fix Fabric Maven publication](https://github.com/mezz/JustEnoughItems/commit/bfae96326858b4f2c9bd5b4f7643812ac8a07dd6) - mezz
*   [Fix ingredient list cheat regressions](https://github.com/mezz/JustEnoughItems/commit/1e84f22cf7f0a907d0ed07d4a0b1677fdcf79765) - mezz
*   [Speed up client game tests](https://github.com/mezz/JustEnoughItems/commit/e30d37aac4113b175d42caa7974b899e12688b61) - mezz
    
*   [Add recipe transfer lifecycle API](https://github.com/mezz/JustEnoughItems/commit/d0f3db4db0e7e8606a22ca779ff50f8451e10955) - mezz
*   [Fix #4461 legacy tooltips should not be given blank lines](https://github.com/mezz/JustEnoughItems/commit/c2d532d21eadbe619753c26b7982e646ec229ac3) - mezz
*   [Update ja_jp.json (#4465)](https://github.com/mezz/JustEnoughItems/commit/bb7449dbc31f25469bb817bf51f1daa719885b69) - Abbage230
    
*   [Fix crash with mods that use the texture atlas (embeddium, Factory API)](https://github.com/mezz/JustEnoughItems/commit/19032e46fa8bc09b7c9408c540996052115de746) - mezz
*   [Publish only shaded loader artifacts](https://github.com/mezz/JustEnoughItems/commit/702855932d3a7273e92fb4c6f31ecebe49751bbc) - mezz
    *   Attach the final shaded binary and sources jars directly to each Maven publication. This keeps Gradle module metadata and unshaded intermediate jars out of the repository, so ordinary mod dependencies always resolve a self-contained JEI jar.
*   [Fix Forge development runs](https://github.com/mezz/JustEnoughItems/commit/cdb5dfd397cac36535fc407ef8e24eaaa10a63bd) - mezz
    
*   [Fix Forge runtime compatibility](https://github.com/mezz/JustEnoughItems/commit/7d8f578c96af316d97363278d586531673d4a0d3) - mezz
    
*   [Fix Fabric recipe tooltip render ordering](https://github.com/mezz/JustEnoughItems/commit/4fc6379d0c0c82384d8cd518ddc8a7d876d8a8d1) - mezz
    *   Draw JEI foreground layers after non-container screens finish rendering so interactive ingredient tooltips do not depth-clip recipe contents. Restore recipe widgets to their inherited Z.
*   [Fix cooking fuels and recipe overlay rendering](https://github.com/mezz/JustEnoughItems/commit/78225af1cb73148b8d2df3953c89595891663437) - mezz
    *   Restore the explicit furnace fuel list needed by 1.21.1 cooking categories. Port the 1.20.1 rendering depth fixes for recipe widgets, slot badges, and interactive ingredient tooltips.
*   [fix tests](https://github.com/mezz/JustEnoughItems/commit/2b7ea257b62b0e9314a66d39fd4354c96a1e62c5) - mezz
*   [Add more convenient widgets for drawing recipes](https://github.com/mezz/JustEnoughItems/commit/78ca55a5db926f8f3bc4a3c8d250ffad18cbb806) - mezz
*   [Remove 1.21 from supported versions list](https://github.com/mezz/JustEnoughItems/commit/506796f01f09c8400d6c86d8f6e0487dc356b047) - mezz
*   [Fix #4457 Protect grindstone recipes from mod crashes](https://github.com/mezz/JustEnoughItems/commit/1c0369650929da2de5470a5245be29e770fe588b) - mezz

### 27.36.0.94 for NeoForge 1.21.11
### Current release 27.36.0

*   [Use mezzdev JavaFormatting rules](https://github.com/mezz/JustEnoughItems/commit/d52154cc88ba8ecf2e0685a1ce05e423cccea362) - mezz
    *   Replace the target-local Spotless rules with java-formatting 0.4.0 and apply the final rule set across the 1.21.11 sources.
    *   Fold source formatting follow-ups c41cef372, 8a7ac02ef, and 1162407bf.
*   [Suppress tooltips behind pinned previews](https://github.com/mezz/JustEnoughItems/commit/8c1fb415fa8ce47e6dd9670eb51bb6985bdfe454) - mezz
*   [Add recipe transfer lifecycle API](https://github.com/mezz/JustEnoughItems/commit/615419aab3dab2737f7d4ba72fca4a75545e70e0) - mezz
*   [Use the pin key for bookmark preview details](https://github.com/mezz/JustEnoughItems/commit/2b0b9e9b1f22cae49dffb45e5dafb96131bdbd85) - mezz
*   [Show transfer controls in pinned bookmark previews](https://github.com/mezz/JustEnoughItems/commit/9c7a06416095a12b5e599953d370d5a813fd6148) - mezz
*   [Reuse pinned tooltip rendering for ingredient candidates](https://github.com/mezz/JustEnoughItems/commit/566f4483c0c8e40ced22e5a388433871302316c6) - mezz
*   [Allow focus hotkeys while pinned tooltips are open](https://github.com/mezz/JustEnoughItems/commit/4bdf853ab7b3b7e091b2bfc3243f870a4c194506) - mezz
*   [Clean up bookmark preview tooltip text](https://github.com/mezz/JustEnoughItems/commit/4531f9d1dbb597bbe13be9dd10a89a3d72cd1ce2) - mezz
*   [Disable unbound bookmark preview pinning](https://github.com/mezz/JustEnoughItems/commit/3aab7f95b0eb8de9e1854161e34014fbaa028368) - mezz
*   [Track pinned bookmark preview sources](https://github.com/mezz/JustEnoughItems/commit/8c673450b97f90ccb167879b1ceeac656540209a) - mezz
*   [Add pinnable interactive tooltip for bookmark recipe previews (#4462)](https://github.com/mezz/JustEnoughItems/commit/853fdde1cca0c65597d24989affe4aa9496023f4) - vfyjxf
*   [Expose bookmark previews as recipe focus sources](https://github.com/mezz/JustEnoughItems/commit/273f608a999f736e691ed1a50d15682fd00a3040) - mezz
*   [stop logging errors when there are empty itemstacks in the creative menu](https://github.com/mezz/JustEnoughItems/commit/1726133e577bc238bd7a872700d453de41f3197a) - mezz
*   [detect when other mods add mod names to tooltips with neoforge events](https://github.com/mezz/JustEnoughItems/commit/ae72fe4451ca099bb6d5d636db466dae37788c7b) - mezz
*   [Fix pinning recipe slot candidate tooltips](https://github.com/mezz/JustEnoughItems/commit/b4dc245b7ba82b6863ba295f22b0b3d1f39e2820) - mezz
*   [Fix ingredient list cheat regressions](https://github.com/mezz/JustEnoughItems/commit/a9dc2313c352c55330772b59597c54018a53f2a0) - mezz
*   [Fix Fabric Maven publication](https://github.com/mezz/JustEnoughItems/commit/7b64308fc0e38e9accafbd19725d44219e6d6068) - mezz
    
*   [Fix crash with mods that use the texture atlas (embeddium, Factory API)](https://github.com/mezz/JustEnoughItems/commit/a6e8671cfda32439976600209ea9a693a0805b61) - mezz
*   [Publish only shaded loader artifacts](https://github.com/mezz/JustEnoughItems/commit/0910a818ed7bffa0985ed87c52ed6f7f6c53e20a) - mezz
    *   Attach the final shaded binary and sources jars directly to each Maven publication. This keeps Gradle module metadata and unshaded intermediate jars out of the repository, so ordinary mod dependencies always resolve a self-contained JEI jar.
*   [fix tests](https://github.com/mezz/JustEnoughItems/commit/f7dc4ef4c371e68bd96d953c0d852178f893bda0) - mezz
*   [Add more convenient widgets for drawing recipes](https://github.com/mezz/JustEnoughItems/commit/dff3dc2aa0f604185761735e1f56076e89e1abb8) - mezz
*   [Remove 1.21 from supported versions list](https://github.com/mezz/JustEnoughItems/commit/24e5d8d2e156fa0720558fcf50aef1c13b687dea) - mezz
*   [Fix #4457 Protect grindstone recipes from mod crashes](https://github.com/mezz/JustEnoughItems/commit/b259af10ea6b869142996626f5e59ad425820eb0) - mezz
*   [Implement UidContext.Recipe focus filtering in recipes](https://github.com/mezz/JustEnoughItems/commit/0b85ac55f346d91b9f1786fc98de40872d2dfc9e) - mezz
*   [Clean up recipe ingredient helpers](https://github.com/mezz/JustEnoughItems/commit/e556dd8c56c00662f38063cc350c01a6c2f0cc15) - mezz
*   [Support #4442 Make recipe slot display overrides authoritative](https://github.com/mezz/JustEnoughItems/commit/977c315c06b19ea32ec50d48d4b72e64d932ff48) - mezz
    *   treat display overrides as the slot’s current contents for rendering, tooltips, lookup, bookmarks, focus, highlights, tag navigation, and ingredient-counts
    *   refresh dynamic recipe layouts after overrides change
    *   use ISlottedRecipeWidget hit testing for clicks and interactive tooltips.
*   [Close #4238 Add context-aware ingredient visibility](https://github.com/mezz/JustEnoughItems/commit/21671b89ff36cd8254f505f1a36d0b412fe6c3f5) - mezz
*   [Fix localization key issue](https://github.com/mezz/JustEnoughItems/commit/0f5e77491aa0e236a1ffc932ee9cae334b4dd66c) - mezz
*   [Close #4439 Provide ContextMap during ingredient registration](https://github.com/mezz/JustEnoughItems/commit/005468701c4082526da97b0b6e65968a798a2825) - mezz
*   [Fix tooltip search in headless environments](https://github.com/mezz/JustEnoughItems/commit/76a67608623b8e18ea8467df0951a938ba886d03) - mezz

### 19.52.0.422 for NeoForge 1.21.1
### Current release 19.52.0

*   [Speed up client game tests](https://github.com/mezz/JustEnoughItems/commit/e30d37aac4113b175d42caa7974b899e12688b61) - mezz
    
*   [Add recipe transfer lifecycle API](https://github.com/mezz/JustEnoughItems/commit/d0f3db4db0e7e8606a22ca779ff50f8451e10955) - mezz
*   [Fix #4461 legacy tooltips should not be given blank lines](https://github.com/mezz/JustEnoughItems/commit/c2d532d21eadbe619753c26b7982e646ec229ac3) - mezz
*   [Update ja_jp.json (#4465)](https://github.com/mezz/JustEnoughItems/commit/bb7449dbc31f25469bb817bf51f1daa719885b69) - Abbage230
    
*   [Fix crash with mods that use the texture atlas (embeddium, Factory API)](https://github.com/mezz/JustEnoughItems/commit/19032e46fa8bc09b7c9408c540996052115de746) - mezz
*   [Publish only shaded loader artifacts](https://github.com/mezz/JustEnoughItems/commit/702855932d3a7273e92fb4c6f31ecebe49751bbc) - mezz
    *   Attach the final shaded binary and sources jars directly to each Maven publication. This keeps Gradle module metadata and unshaded intermediate jars out of the repository, so ordinary mod dependencies always resolve a self-contained JEI jar.
*   [Fix Forge development runs](https://github.com/mezz/JustEnoughItems/commit/cdb5dfd397cac36535fc407ef8e24eaaa10a63bd) - mezz
    
*   [Fix Forge runtime compatibility](https://github.com/mezz/JustEnoughItems/commit/7d8f578c96af316d97363278d586531673d4a0d3) - mezz
    
*   [Fix Fabric recipe tooltip render ordering](https://github.com/mezz/JustEnoughItems/commit/4fc6379d0c0c82384d8cd518ddc8a7d876d8a8d1) - mezz
    *   Draw JEI foreground layers after non-container screens finish rendering so interactive ingredient tooltips do not depth-clip recipe contents. Restore recipe widgets to their inherited Z.
*   [Fix cooking fuels and recipe overlay rendering](https://github.com/mezz/JustEnoughItems/commit/78225af1cb73148b8d2df3953c89595891663437) - mezz
    *   Restore the explicit furnace fuel list needed by 1.21.1 cooking categories. Port the 1.20.1 rendering depth fixes for recipe widgets, slot badges, and interactive ingredient tooltips.
*   [fix tests](https://github.com/mezz/JustEnoughItems/commit/2b7ea257b62b0e9314a66d39fd4354c96a1e62c5) - mezz
*   [Add more convenient widgets for drawing recipes](https://github.com/mezz/JustEnoughItems/commit/78ca55a5db926f8f3bc4a3c8d250ffad18cbb806) - mezz
*   [Remove 1.21 from supported versions list](https://github.com/mezz/JustEnoughItems/commit/506796f01f09c8400d6c86d8f6e0487dc356b047) - mezz
*   [Fix #4457 Protect grindstone recipes from mod crashes](https://github.com/mezz/JustEnoughItems/commit/1c0369650929da2de5470a5245be29e770fe588b) - mezz
*   [Implement UidContext.Recipe focus filtering in recipes](https://github.com/mezz/JustEnoughItems/commit/abf6130a1a9eb88f4f9ab0df68cafae96938ed02) - mezz
*   [Fix tooltip search in headless environments](https://github.com/mezz/JustEnoughItems/commit/7661ae99a2e79cefff12dfc579169bb2ccfbb0e0) - mezz
*   [Support #4442 Make recipe slot display overrides authoritative](https://github.com/mezz/JustEnoughItems/commit/565536d6987fc1346edeca988fa1bb39cfcc9d56) - mezz
    *   treat display overrides as the slot’s current contents for rendering, tooltips, lookup, bookmarks, focus, highlights, tag navigation, and ingredient-counts
    *   refresh dynamic recipe layouts after overrides change
    *   use ISlottedRecipeWidget hit testing for clicks and interactive tooltips.
*   [Close #4440 Pass TooltipContext and Player to IIngredientRenderer#getTooltip](https://github.com/mezz/JustEnoughItems/commit/19d8bf02c39e55361bf32e2d29fabef922c10876) - mezz
*   [Close #4238 Add context-aware ingredient visibility](https://github.com/mezz/JustEnoughItems/commit/011e932db8dc530dae999b41afc4c852ad3251f1) - mezz
*   [Add config toggle to disable recipe sync warning messages (#4428)](https://github.com/mezz/JustEnoughItems/commit/9281ea694bad213c93ed3415eaaa48c43f3a0c31) - MakerYuichi
*   [Update jarcompatibilitychecker to 0.1.19](https://github.com/mezz/JustEnoughItems/commit/7a5c7d2460f7a2342c31bdab917d430bf08a377c) - mezz
*   [Improve recipe slot ingredient tooltips](https://github.com/mezz/JustEnoughItems/commit/7197809e7fa705d4ddbaf948fae051058d97b63c) - mezz
*   [Reject unobtainable flowing fluid ingredients](https://github.com/mezz/JustEnoughItems/commit/5733a0454653c7df48a1328d486fc42fcbdc8c24) - mezz
*   [use jenkins-release-notifier for discord notifications](https://github.com/mezz/JustEnoughItems/commit/4da291518d2e5dcdb1a7307362ead3feb18f31f0) - mezz
*   [Move recipe slot badges above stack counts](https://github.com/mezz/JustEnoughItems/commit/443f80647b79a931124a0adc4fe1b2f64f331fdc) - mezz
*   [Speed up Jenkins Gradle stages](https://github.com/mezz/JustEnoughItems/commit/f977fd8f5fe08a72c27854e7b6af9010568cd651) - mezz
*   [Preserve Jenkins release comments across failures](https://github.com/mezz/JustEnoughItems/commit/bc5d8ce8b45aafb72dc2c1559714f1e6b1d2a779) - mezz
*   [Fix #4431 Empty fluid ingredient summary crash](https://github.com/mezz/JustEnoughItems/commit/6e88622dd72751558c5da8e336afe0ae6373f710) - mezz
*   [Use shared Jenkins release notifier](https://github.com/mezz/JustEnoughItems/commit/32659e87449ae3f4524a4f63930a7cde82b45703) - mezz
*   [Fix #4427 Maximize rectangular ingredient grid area around exclusions](https://github.com/mezz/JustEnoughItems/commit/272c5d86b665e174199b5ed05f73fcb00bb4e16d) - mezz

### 27.36.0.93 for NeoForge 1.21.11
### Current release 27.36.0

*   [Suppress tooltips behind pinned previews](https://github.com/mezz/JustEnoughItems/commit/8c1fb415fa8ce47e6dd9670eb51bb6985bdfe454) - mezz
*   [Add recipe transfer lifecycle API](https://github.com/mezz/JustEnoughItems/commit/615419aab3dab2737f7d4ba72fca4a75545e70e0) - mezz
*   [Use the pin key for bookmark preview details](https://github.com/mezz/JustEnoughItems/commit/2b0b9e9b1f22cae49dffb45e5dafb96131bdbd85) - mezz
*   [Show transfer controls in pinned bookmark previews](https://github.com/mezz/JustEnoughItems/commit/9c7a06416095a12b5e599953d370d5a813fd6148) - mezz
*   [Reuse pinned tooltip rendering for ingredient candidates](https://github.com/mezz/JustEnoughItems/commit/566f4483c0c8e40ced22e5a388433871302316c6) - mezz
*   [Allow focus hotkeys while pinned tooltips are open](https://github.com/mezz/JustEnoughItems/commit/4bdf853ab7b3b7e091b2bfc3243f870a4c194506) - mezz
*   [Clean up bookmark preview tooltip text](https://github.com/mezz/JustEnoughItems/commit/4531f9d1dbb597bbe13be9dd10a89a3d72cd1ce2) - mezz
*   [Disable unbound bookmark preview pinning](https://github.com/mezz/JustEnoughItems/commit/3aab7f95b0eb8de9e1854161e34014fbaa028368) - mezz
*   [Track pinned bookmark preview sources](https://github.com/mezz/JustEnoughItems/commit/8c673450b97f90ccb167879b1ceeac656540209a) - mezz
*   [Add pinnable interactive tooltip for bookmark recipe previews (#4462)](https://github.com/mezz/JustEnoughItems/commit/853fdde1cca0c65597d24989affe4aa9496023f4) - vfyjxf
*   [Expose bookmark previews as recipe focus sources](https://github.com/mezz/JustEnoughItems/commit/273f608a999f736e691ed1a50d15682fd00a3040) - mezz
*   [stop logging errors when there are empty itemstacks in the creative menu](https://github.com/mezz/JustEnoughItems/commit/1726133e577bc238bd7a872700d453de41f3197a) - mezz
*   [detect when other mods add mod names to tooltips with neoforge events](https://github.com/mezz/JustEnoughItems/commit/ae72fe4451ca099bb6d5d636db466dae37788c7b) - mezz
*   [Fix pinning recipe slot candidate tooltips](https://github.com/mezz/JustEnoughItems/commit/b4dc245b7ba82b6863ba295f22b0b3d1f39e2820) - mezz
*   [Fix ingredient list cheat regressions](https://github.com/mezz/JustEnoughItems/commit/a9dc2313c352c55330772b59597c54018a53f2a0) - mezz
*   [Fix Fabric Maven publication](https://github.com/mezz/JustEnoughItems/commit/7b64308fc0e38e9accafbd19725d44219e6d6068) - mezz
    
*   [Fix crash with mods that use the texture atlas (embeddium, Factory API)](https://github.com/mezz/JustEnoughItems/commit/a6e8671cfda32439976600209ea9a693a0805b61) - mezz
*   [Publish only shaded loader artifacts](https://github.com/mezz/JustEnoughItems/commit/0910a818ed7bffa0985ed87c52ed6f7f6c53e20a) - mezz
    *   Attach the final shaded binary and sources jars directly to each Maven publication. This keeps Gradle module metadata and unshaded intermediate jars out of the repository, so ordinary mod dependencies always resolve a self-contained JEI jar.
*   [fix tests](https://github.com/mezz/JustEnoughItems/commit/f7dc4ef4c371e68bd96d953c0d852178f893bda0) - mezz
*   [Add more convenient widgets for drawing recipes](https://github.com/mezz/JustEnoughItems/commit/dff3dc2aa0f604185761735e1f56076e89e1abb8) - mezz
*   [Remove 1.21 from supported versions list](https://github.com/mezz/JustEnoughItems/commit/24e5d8d2e156fa0720558fcf50aef1c13b687dea) - mezz
*   [Fix #4457 Protect grindstone recipes from mod crashes](https://github.com/mezz/JustEnoughItems/commit/b259af10ea6b869142996626f5e59ad425820eb0) - mezz
*   [Implement UidContext.Recipe focus filtering in recipes](https://github.com/mezz/JustEnoughItems/commit/0b85ac55f346d91b9f1786fc98de40872d2dfc9e) - mezz
*   [Clean up recipe ingredient helpers](https://github.com/mezz/JustEnoughItems/commit/e556dd8c56c00662f38063cc350c01a6c2f0cc15) - mezz
*   [Support #4442 Make recipe slot display overrides authoritative](https://github.com/mezz/JustEnoughItems/commit/977c315c06b19ea32ec50d48d4b72e64d932ff48) - mezz
    *   treat display overrides as the slot’s current contents for rendering, tooltips, lookup, bookmarks, focus, highlights, tag navigation, and ingredient-counts
    *   refresh dynamic recipe layouts after overrides change
    *   use ISlottedRecipeWidget hit testing for clicks and interactive tooltips.
*   [Close #4238 Add context-aware ingredient visibility](https://github.com/mezz/JustEnoughItems/commit/21671b89ff36cd8254f505f1a36d0b412fe6c3f5) - mezz
*   [Fix localization key issue](https://github.com/mezz/JustEnoughItems/commit/0f5e77491aa0e236a1ffc932ee9cae334b4dd66c) - mezz
*   [Close #4439 Provide ContextMap during ingredient registration](https://github.com/mezz/JustEnoughItems/commit/005468701c4082526da97b0b6e65968a798a2825) - mezz
*   [Fix tooltip search in headless environments](https://github.com/mezz/JustEnoughItems/commit/76a67608623b8e18ea8467df0951a938ba886d03) - mezz
*   [Close #4440 Pass TooltipContext and Player to IIngredientRenderer#getTooltip](https://github.com/mezz/JustEnoughItems/commit/9c821cc6f613b28183b4abc446b397f94f43dbf5) - mezz

### 19.52.0.421 for NeoForge 1.21.1
### Current release 19.52.0

*   [Add recipe transfer lifecycle API](https://github.com/mezz/JustEnoughItems/commit/d0f3db4db0e7e8606a22ca779ff50f8451e10955) - mezz
*   [Fix #4461 legacy tooltips should not be given blank lines](https://github.com/mezz/JustEnoughItems/commit/c2d532d21eadbe619753c26b7982e646ec229ac3) - mezz
*   [Update ja_jp.json (#4465)](https://github.com/mezz/JustEnoughItems/commit/bb7449dbc31f25469bb817bf51f1daa719885b69) - Abbage230
    
*   [Fix crash with mods that use the texture atlas (embeddium, Factory API)](https://github.com/mezz/JustEnoughItems/commit/19032e46fa8bc09b7c9408c540996052115de746) - mezz
*   [Publish only shaded loader artifacts](https://github.com/mezz/JustEnoughItems/commit/702855932d3a7273e92fb4c6f31ecebe49751bbc) - mezz
    *   Attach the final shaded binary and sources jars directly to each Maven publication. This keeps Gradle module metadata and unshaded intermediate jars out of the repository, so ordinary mod dependencies always resolve a self-contained JEI jar.
*   [Fix Forge development runs](https://github.com/mezz/JustEnoughItems/commit/cdb5dfd397cac36535fc407ef8e24eaaa10a63bd) - mezz
    
*   [Fix Forge runtime compatibility](https://github.com/mezz/JustEnoughItems/commit/7d8f578c96af316d97363278d586531673d4a0d3) - mezz
    
*   [Fix Fabric recipe tooltip render ordering](https://github.com/mezz/JustEnoughItems/commit/4fc6379d0c0c82384d8cd518ddc8a7d876d8a8d1) - mezz
    *   Draw JEI foreground layers after non-container screens finish rendering so interactive ingredient tooltips do not depth-clip recipe contents. Restore recipe widgets to their inherited Z.
*   [Fix cooking fuels and recipe overlay rendering](https://github.com/mezz/JustEnoughItems/commit/78225af1cb73148b8d2df3953c89595891663437) - mezz
    *   Restore the explicit furnace fuel list needed by 1.21.1 cooking categories. Port the 1.20.1 rendering depth fixes for recipe widgets, slot badges, and interactive ingredient tooltips.
*   [fix tests](https://github.com/mezz/JustEnoughItems/commit/2b7ea257b62b0e9314a66d39fd4354c96a1e62c5) - mezz
*   [Add more convenient widgets for drawing recipes](https://github.com/mezz/JustEnoughItems/commit/78ca55a5db926f8f3bc4a3c8d250ffad18cbb806) - mezz
*   [Remove 1.21 from supported versions list](https://github.com/mezz/JustEnoughItems/commit/506796f01f09c8400d6c86d8f6e0487dc356b047) - mezz
*   [Fix #4457 Protect grindstone recipes from mod crashes](https://github.com/mezz/JustEnoughItems/commit/1c0369650929da2de5470a5245be29e770fe588b) - mezz
*   [Implement UidContext.Recipe focus filtering in recipes](https://github.com/mezz/JustEnoughItems/commit/abf6130a1a9eb88f4f9ab0df68cafae96938ed02) - mezz
*   [Fix tooltip search in headless environments](https://github.com/mezz/JustEnoughItems/commit/7661ae99a2e79cefff12dfc579169bb2ccfbb0e0) - mezz
*   [Support #4442 Make recipe slot display overrides authoritative](https://github.com/mezz/JustEnoughItems/commit/565536d6987fc1346edeca988fa1bb39cfcc9d56) - mezz
    *   treat display overrides as the slot’s current contents for rendering, tooltips, lookup, bookmarks, focus, highlights, tag navigation, and ingredient-counts
    *   refresh dynamic recipe layouts after overrides change
    *   use ISlottedRecipeWidget hit testing for clicks and interactive tooltips.
*   [Close #4440 Pass TooltipContext and Player to IIngredientRenderer#getTooltip](https://github.com/mezz/JustEnoughItems/commit/19d8bf02c39e55361bf32e2d29fabef922c10876) - mezz
*   [Close #4238 Add context-aware ingredient visibility](https://github.com/mezz/JustEnoughItems/commit/011e932db8dc530dae999b41afc4c852ad3251f1) - mezz
*   [Add config toggle to disable recipe sync warning messages (#4428)](https://github.com/mezz/JustEnoughItems/commit/9281ea694bad213c93ed3415eaaa48c43f3a0c31) - MakerYuichi
*   [Update jarcompatibilitychecker to 0.1.19](https://github.com/mezz/JustEnoughItems/commit/7a5c7d2460f7a2342c31bdab917d430bf08a377c) - mezz
*   [Improve recipe slot ingredient tooltips](https://github.com/mezz/JustEnoughItems/commit/7197809e7fa705d4ddbaf948fae051058d97b63c) - mezz
*   [Reject unobtainable flowing fluid ingredients](https://github.com/mezz/JustEnoughItems/commit/5733a0454653c7df48a1328d486fc42fcbdc8c24) - mezz
*   [use jenkins-release-notifier for discord notifications](https://github.com/mezz/JustEnoughItems/commit/4da291518d2e5dcdb1a7307362ead3feb18f31f0) - mezz
*   [Move recipe slot badges above stack counts](https://github.com/mezz/JustEnoughItems/commit/443f80647b79a931124a0adc4fe1b2f64f331fdc) - mezz
*   [Speed up Jenkins Gradle stages](https://github.com/mezz/JustEnoughItems/commit/f977fd8f5fe08a72c27854e7b6af9010568cd651) - mezz
*   [Fix #4415 Harden anvil recipes against linkage errors](https://github.com/mezz/JustEnoughItems/commit/c4baff86317c6ba7819ba3163c07019953ce56da) - mezz
*   [Preserve Jenkins release comments across failures](https://github.com/mezz/JustEnoughItems/commit/bc5d8ce8b45aafb72dc2c1559714f1e6b1d2a779) - mezz
*   [Fix #4431 Empty fluid ingredient summary crash](https://github.com/mezz/JustEnoughItems/commit/6e88622dd72751558c5da8e336afe0ae6373f710) - mezz
*   [Use shared Jenkins release notifier](https://github.com/mezz/JustEnoughItems/commit/32659e87449ae3f4524a4f63930a7cde82b45703) - mezz
*   [Fix #4427 Maximize rectangular ingredient grid area around exclusions](https://github.com/mezz/JustEnoughItems/commit/272c5d86b665e174199b5ed05f73fcb00bb4e16d) - mezz

### 27.35.0.92 for NeoForge 1.21.11
### Current release 27.35.0

*   [Fix Fabric Maven publication](https://github.com/mezz/JustEnoughItems/commit/7b64308fc0e38e9accafbd19725d44219e6d6068) - mezz
    
*   [Fix crash with mods that use the texture atlas (embeddium, Factory API)](https://github.com/mezz/JustEnoughItems/commit/a6e8671cfda32439976600209ea9a693a0805b61) - mezz
*   [Publish only shaded loader artifacts](https://github.com/mezz/JustEnoughItems/commit/0910a818ed7bffa0985ed87c52ed6f7f6c53e20a) - mezz
    *   Attach the final shaded binary and sources jars directly to each Maven publication. This keeps Gradle module metadata and unshaded intermediate jars out of the repository, so ordinary mod dependencies always resolve a self-contained JEI jar.
*   [fix tests](https://github.com/mezz/JustEnoughItems/commit/f7dc4ef4c371e68bd96d953c0d852178f893bda0) - mezz
*   [Add more convenient widgets for drawing recipes](https://github.com/mezz/JustEnoughItems/commit/dff3dc2aa0f604185761735e1f56076e89e1abb8) - mezz
*   [Remove 1.21 from supported versions list](https://github.com/mezz/JustEnoughItems/commit/24e5d8d2e156fa0720558fcf50aef1c13b687dea) - mezz
*   [Fix #4457 Protect grindstone recipes from mod crashes](https://github.com/mezz/JustEnoughItems/commit/b259af10ea6b869142996626f5e59ad425820eb0) - mezz
*   [Implement UidContext.Recipe focus filtering in recipes](https://github.com/mezz/JustEnoughItems/commit/0b85ac55f346d91b9f1786fc98de40872d2dfc9e) - mezz
*   [Clean up recipe ingredient helpers](https://github.com/mezz/JustEnoughItems/commit/e556dd8c56c00662f38063cc350c01a6c2f0cc15) - mezz
*   [Support #4442 Make recipe slot display overrides authoritative](https://github.com/mezz/JustEnoughItems/commit/977c315c06b19ea32ec50d48d4b72e64d932ff48) - mezz
    *   treat display overrides as the slot’s current contents for rendering, tooltips, lookup, bookmarks, focus, highlights, tag navigation, and ingredient-counts
    *   refresh dynamic recipe layouts after overrides change
    *   use ISlottedRecipeWidget hit testing for clicks and interactive tooltips.
*   [Close #4238 Add context-aware ingredient visibility](https://github.com/mezz/JustEnoughItems/commit/21671b89ff36cd8254f505f1a36d0b412fe6c3f5) - mezz
*   [Fix localization key issue](https://github.com/mezz/JustEnoughItems/commit/0f5e77491aa0e236a1ffc932ee9cae334b4dd66c) - mezz
*   [Close #4439 Provide ContextMap during ingredient registration](https://github.com/mezz/JustEnoughItems/commit/005468701c4082526da97b0b6e65968a798a2825) - mezz
*   [Fix tooltip search in headless environments](https://github.com/mezz/JustEnoughItems/commit/76a67608623b8e18ea8467df0951a938ba886d03) - mezz
*   [Close #4440 Pass TooltipContext and Player to IIngredientRenderer#getTooltip](https://github.com/mezz/JustEnoughItems/commit/9c821cc6f613b28183b4abc446b397f94f43dbf5) - mezz
*   [Move recipe slot badges above stack counts](https://github.com/mezz/JustEnoughItems/commit/bf3dfea894767c32d33c0b8d68f2bcb5b51f9595) - mezz
*   [Keep recipe slot candidates across display groups](https://github.com/mezz/JustEnoughItems/commit/62b960d45c8bf9bb209b9175fb573e548de53664) - mezz
*   [Improve recipe slot ingredient tooltips](https://github.com/mezz/JustEnoughItems/commit/dfdb57b3344355f7c153fb881d7bce75174d8ff8) - mezz
*   [Reject unobtainable flowing fluid ingredients](https://github.com/mezz/JustEnoughItems/commit/5d410fd408aed1b5dc717558dce2e5141c5d7393) - mezz
*   [Support transforming slot display children](https://github.com/mezz/JustEnoughItems/commit/e880c3496d2de92648fd808a6e1aa921c470c182) - mezz
*   [Use shared Jenkins release notifier](https://github.com/mezz/JustEnoughItems/commit/f53d546815e733101d1e71488e09dc3787a3c3f7) - mezz
*   [use jenkins-release-notifier for discord notifications](https://github.com/mezz/JustEnoughItems/commit/5c7356cc992d2164ea6ba94d63f0a1ecfd3b3ee2) - mezz
*   [Add config toggle to disable recipe sync warning messages (#4428)](https://github.com/mezz/JustEnoughItems/commit/59c6e91396efb33679b2fa0799400970f2b9a2c9) - MakerYuichi
*   [Update jarcompatibilitychecker to 0.1.19](https://github.com/mezz/JustEnoughItems/commit/1c7027f39fea043e961dc2408a56d2a528b3d88b) - mezz
*   [Fix #4431 Empty fluid ingredient summary crash](https://github.com/mezz/JustEnoughItems/commit/161e944ccdc4ab445453094103f9e566c7506e32) - mezz
*   [Fix #4427 Maximize rectangular ingredient grid area around exclusions](https://github.com/mezz/JustEnoughItems/commit/7581684ca0c17578121a1e0c863355ba96680917) - mezz
*   [Close #4436 Bring back 'button_disabled', 'button_highlight', and 'button_enabled' gui textures](https://github.com/mezz/JustEnoughItems/commit/2f06a59551e90f51c11f502e0953d179203f23ce) - mezz
*   [Restore NeoForge client test compile classpath](https://github.com/mezz/JustEnoughItems/commit/d628d902628c99601257cff9fcdda6674070a821) - mezz
    
*   [Simplify Fabric API publication](https://github.com/mezz/JustEnoughItems/commit/95db9109b1766ce96049598556b29c5914a2bb93) - mezz
    
*   [Keep bundled modules out of published metadata](https://github.com/mezz/JustEnoughItems/commit/ebe468d8de61bcffe55515ffbb839559615b9d9a) - mezz

### 19.51.0.420 for NeoForge 1.21.1
### Current release 19.51.0

*   [Fix #4461 legacy tooltips should not be given blank lines](https://github.com/mezz/JustEnoughItems/commit/c2d532d21eadbe619753c26b7982e646ec229ac3) - mezz
*   [Update ja_jp.json (#4465)](https://github.com/mezz/JustEnoughItems/commit/bb7449dbc31f25469bb817bf51f1daa719885b69) - Abbage230
    
*   [Fix crash with mods that use the texture atlas (embeddium, Factory API)](https://github.com/mezz/JustEnoughItems/commit/19032e46fa8bc09b7c9408c540996052115de746) - mezz
*   [Publish only shaded loader artifacts](https://github.com/mezz/JustEnoughItems/commit/702855932d3a7273e92fb4c6f31ecebe49751bbc) - mezz
    *   Attach the final shaded binary and sources jars directly to each Maven publication. This keeps Gradle module metadata and unshaded intermediate jars out of the repository, so ordinary mod dependencies always resolve a self-contained JEI jar.
*   [Fix Forge development runs](https://github.com/mezz/JustEnoughItems/commit/cdb5dfd397cac36535fc407ef8e24eaaa10a63bd) - mezz
    
*   [Fix Forge runtime compatibility](https://github.com/mezz/JustEnoughItems/commit/7d8f578c96af316d97363278d586531673d4a0d3) - mezz
    
*   [Fix Fabric recipe tooltip render ordering](https://github.com/mezz/JustEnoughItems/commit/4fc6379d0c0c82384d8cd518ddc8a7d876d8a8d1) - mezz
    *   Draw JEI foreground layers after non-container screens finish rendering so interactive ingredient tooltips do not depth-clip recipe contents. Restore recipe widgets to their inherited Z.
*   [Fix cooking fuels and recipe overlay rendering](https://github.com/mezz/JustEnoughItems/commit/78225af1cb73148b8d2df3953c89595891663437) - mezz
    *   Restore the explicit furnace fuel list needed by 1.21.1 cooking categories. Port the 1.20.1 rendering depth fixes for recipe widgets, slot badges, and interactive ingredient tooltips.
*   [fix tests](https://github.com/mezz/JustEnoughItems/commit/2b7ea257b62b0e9314a66d39fd4354c96a1e62c5) - mezz
*   [Add more convenient widgets for drawing recipes](https://github.com/mezz/JustEnoughItems/commit/78ca55a5db926f8f3bc4a3c8d250ffad18cbb806) - mezz
*   [Remove 1.21 from supported versions list](https://github.com/mezz/JustEnoughItems/commit/506796f01f09c8400d6c86d8f6e0487dc356b047) - mezz
*   [Fix #4457 Protect grindstone recipes from mod crashes](https://github.com/mezz/JustEnoughItems/commit/1c0369650929da2de5470a5245be29e770fe588b) - mezz
*   [Implement UidContext.Recipe focus filtering in recipes](https://github.com/mezz/JustEnoughItems/commit/abf6130a1a9eb88f4f9ab0df68cafae96938ed02) - mezz
*   [Fix tooltip search in headless environments](https://github.com/mezz/JustEnoughItems/commit/7661ae99a2e79cefff12dfc579169bb2ccfbb0e0) - mezz
*   [Support #4442 Make recipe slot display overrides authoritative](https://github.com/mezz/JustEnoughItems/commit/565536d6987fc1346edeca988fa1bb39cfcc9d56) - mezz
    *   treat display overrides as the slot’s current contents for rendering, tooltips, lookup, bookmarks, focus, highlights, tag navigation, and ingredient-counts
    *   refresh dynamic recipe layouts after overrides change
    *   use ISlottedRecipeWidget hit testing for clicks and interactive tooltips.
*   [Close #4440 Pass TooltipContext and Player to IIngredientRenderer#getTooltip](https://github.com/mezz/JustEnoughItems/commit/19d8bf02c39e55361bf32e2d29fabef922c10876) - mezz
*   [Close #4238 Add context-aware ingredient visibility](https://github.com/mezz/JustEnoughItems/commit/011e932db8dc530dae999b41afc4c852ad3251f1) - mezz
*   [Add config toggle to disable recipe sync warning messages (#4428)](https://github.com/mezz/JustEnoughItems/commit/9281ea694bad213c93ed3415eaaa48c43f3a0c31) - MakerYuichi
*   [Update jarcompatibilitychecker to 0.1.19](https://github.com/mezz/JustEnoughItems/commit/7a5c7d2460f7a2342c31bdab917d430bf08a377c) - mezz
*   [Improve recipe slot ingredient tooltips](https://github.com/mezz/JustEnoughItems/commit/7197809e7fa705d4ddbaf948fae051058d97b63c) - mezz
*   [Reject unobtainable flowing fluid ingredients](https://github.com/mezz/JustEnoughItems/commit/5733a0454653c7df48a1328d486fc42fcbdc8c24) - mezz
*   [use jenkins-release-notifier for discord notifications](https://github.com/mezz/JustEnoughItems/commit/4da291518d2e5dcdb1a7307362ead3feb18f31f0) - mezz
*   [Move recipe slot badges above stack counts](https://github.com/mezz/JustEnoughItems/commit/443f80647b79a931124a0adc4fe1b2f64f331fdc) - mezz
*   [Speed up Jenkins Gradle stages](https://github.com/mezz/JustEnoughItems/commit/f977fd8f5fe08a72c27854e7b6af9010568cd651) - mezz
*   [Fix #4415 Harden anvil recipes against linkage errors](https://github.com/mezz/JustEnoughItems/commit/c4baff86317c6ba7819ba3163c07019953ce56da) - mezz
*   [Preserve Jenkins release comments across failures](https://github.com/mezz/JustEnoughItems/commit/bc5d8ce8b45aafb72dc2c1559714f1e6b1d2a779) - mezz
*   [Fix #4431 Empty fluid ingredient summary crash](https://github.com/mezz/JustEnoughItems/commit/6e88622dd72751558c5da8e336afe0ae6373f710) - mezz
*   [Use shared Jenkins release notifier](https://github.com/mezz/JustEnoughItems/commit/32659e87449ae3f4524a4f63930a7cde82b45703) - mezz
*   [Fix #4427 Maximize rectangular ingredient grid area around exclusions](https://github.com/mezz/JustEnoughItems/commit/272c5d86b665e174199b5ed05f73fcb00bb4e16d) - mezz
*   [Fix focus search from creative inventory](https://github.com/mezz/JustEnoughItems/commit/a4a9de1902c9577bad18a8d4a3d7579589c9d571) - mezz

### 19.51.0.419 for NeoForge 1.21.1
### Current release 19.51.0

*   [Update ja_jp.json (#4465)](https://github.com/mezz/JustEnoughItems/commit/bb7449dbc31f25469bb817bf51f1daa719885b69) - Abbage230
    
*   [Fix crash with mods that use the texture atlas (embeddium, Factory API)](https://github.com/mezz/JustEnoughItems/commit/19032e46fa8bc09b7c9408c540996052115de746) - mezz
*   [Publish only shaded loader artifacts](https://github.com/mezz/JustEnoughItems/commit/702855932d3a7273e92fb4c6f31ecebe49751bbc) - mezz
    *   Attach the final shaded binary and sources jars directly to each Maven publication. This keeps Gradle module metadata and unshaded intermediate jars out of the repository, so ordinary mod dependencies always resolve a self-contained JEI jar.
*   [Fix Forge development runs](https://github.com/mezz/JustEnoughItems/commit/cdb5dfd397cac36535fc407ef8e24eaaa10a63bd) - mezz
    
*   [Fix Forge runtime compatibility](https://github.com/mezz/JustEnoughItems/commit/7d8f578c96af316d97363278d586531673d4a0d3) - mezz
    
*   [Fix Fabric recipe tooltip render ordering](https://github.com/mezz/JustEnoughItems/commit/4fc6379d0c0c82384d8cd518ddc8a7d876d8a8d1) - mezz
    *   Draw JEI foreground layers after non-container screens finish rendering so interactive ingredient tooltips do not depth-clip recipe contents. Restore recipe widgets to their inherited Z.
*   [Fix cooking fuels and recipe overlay rendering](https://github.com/mezz/JustEnoughItems/commit/78225af1cb73148b8d2df3953c89595891663437) - mezz
    *   Restore the explicit furnace fuel list needed by 1.21.1 cooking categories. Port the 1.20.1 rendering depth fixes for recipe widgets, slot badges, and interactive ingredient tooltips.
*   [fix tests](https://github.com/mezz/JustEnoughItems/commit/2b7ea257b62b0e9314a66d39fd4354c96a1e62c5) - mezz
*   [Add more convenient widgets for drawing recipes](https://github.com/mezz/JustEnoughItems/commit/78ca55a5db926f8f3bc4a3c8d250ffad18cbb806) - mezz
*   [Remove 1.21 from supported versions list](https://github.com/mezz/JustEnoughItems/commit/506796f01f09c8400d6c86d8f6e0487dc356b047) - mezz
*   [Fix #4457 Protect grindstone recipes from mod crashes](https://github.com/mezz/JustEnoughItems/commit/1c0369650929da2de5470a5245be29e770fe588b) - mezz
*   [Implement UidContext.Recipe focus filtering in recipes](https://github.com/mezz/JustEnoughItems/commit/abf6130a1a9eb88f4f9ab0df68cafae96938ed02) - mezz
*   [Fix tooltip search in headless environments](https://github.com/mezz/JustEnoughItems/commit/7661ae99a2e79cefff12dfc579169bb2ccfbb0e0) - mezz
*   [Support #4442 Make recipe slot display overrides authoritative](https://github.com/mezz/JustEnoughItems/commit/565536d6987fc1346edeca988fa1bb39cfcc9d56) - mezz
    *   treat display overrides as the slot’s current contents for rendering, tooltips, lookup, bookmarks, focus, highlights, tag navigation, and ingredient-counts
    *   refresh dynamic recipe layouts after overrides change
    *   use ISlottedRecipeWidget hit testing for clicks and interactive tooltips.
*   [Close #4440 Pass TooltipContext and Player to IIngredientRenderer#getTooltip](https://github.com/mezz/JustEnoughItems/commit/19d8bf02c39e55361bf32e2d29fabef922c10876) - mezz
*   [Close #4238 Add context-aware ingredient visibility](https://github.com/mezz/JustEnoughItems/commit/011e932db8dc530dae999b41afc4c852ad3251f1) - mezz
*   [Add config toggle to disable recipe sync warning messages (#4428)](https://github.com/mezz/JustEnoughItems/commit/9281ea694bad213c93ed3415eaaa48c43f3a0c31) - MakerYuichi
*   [Update jarcompatibilitychecker to 0.1.19](https://github.com/mezz/JustEnoughItems/commit/7a5c7d2460f7a2342c31bdab917d430bf08a377c) - mezz
*   [Improve recipe slot ingredient tooltips](https://github.com/mezz/JustEnoughItems/commit/7197809e7fa705d4ddbaf948fae051058d97b63c) - mezz
*   [Reject unobtainable flowing fluid ingredients](https://github.com/mezz/JustEnoughItems/commit/5733a0454653c7df48a1328d486fc42fcbdc8c24) - mezz
*   [use jenkins-release-notifier for discord notifications](https://github.com/mezz/JustEnoughItems/commit/4da291518d2e5dcdb1a7307362ead3feb18f31f0) - mezz
*   [Move recipe slot badges above stack counts](https://github.com/mezz/JustEnoughItems/commit/443f80647b79a931124a0adc4fe1b2f64f331fdc) - mezz
*   [Speed up Jenkins Gradle stages](https://github.com/mezz/JustEnoughItems/commit/f977fd8f5fe08a72c27854e7b6af9010568cd651) - mezz
*   [Fix #4415 Harden anvil recipes against linkage errors](https://github.com/mezz/JustEnoughItems/commit/c4baff86317c6ba7819ba3163c07019953ce56da) - mezz
*   [Preserve Jenkins release comments across failures](https://github.com/mezz/JustEnoughItems/commit/bc5d8ce8b45aafb72dc2c1559714f1e6b1d2a779) - mezz
*   [Fix #4431 Empty fluid ingredient summary crash](https://github.com/mezz/JustEnoughItems/commit/6e88622dd72751558c5da8e336afe0ae6373f710) - mezz
*   [Use shared Jenkins release notifier](https://github.com/mezz/JustEnoughItems/commit/32659e87449ae3f4524a4f63930a7cde82b45703) - mezz
*   [Fix #4427 Maximize rectangular ingredient grid area around exclusions](https://github.com/mezz/JustEnoughItems/commit/272c5d86b665e174199b5ed05f73fcb00bb4e16d) - mezz
*   [Use JarCompatibilityChecker Gradle plugin](https://github.com/mezz/JustEnoughItems/commit/aa4db2193630f0dd44bc9074f60db136d80875cd) - mezz
*   [Fix focus search from creative inventory](https://github.com/mezz/JustEnoughItems/commit/a4a9de1902c9577bad18a8d4a3d7579589c9d571) - mezz

## Reliable Replacer
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/reliable-replacer)

### Reliable Replacer Neoforge 1.21.1 - 1.7.1
### Changed

*   Small tweak to how structure bounding boxes are evaluated.

## FTB Quests (NeoForge)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/ftb-quests-forge)

### [NEOFORGE][1.21.1] FTB Quests 2101.1.35
[2101.1.35]
-------------

### Fixed

*   Fixed player permission checking bug which could cause problems with other mods running `/ftbquests ...` commands

### Support

If you have any issues with this mod, please report them on our [Issue Tracker](/linkout?remoteUrl=https%253a%252f%252fgo.ftb.team%252fsupport-mod-issues)

## Supplementaries
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/supplementaries)

### supplementaries-1.21.1-3.9.8-neoforge
*   fixed pulley animation on first pull
*   fixed cannon boat shoot range
*   fixed flags banner config item renderer
*   changed hourglass load method some

### supplementaries-1.21.1-3.9.7-neoforge
*   misc fixes
*   improved cannon handling on sable stuff (experimental)

## Quark
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/quark)

### Quark-4.1-483.jar
Quark 4.1-483 For Neoforge 1.21.1
=================================

Minor but impactful fixes and additions.

Fixes
=====

*   Fixed #5638: Several Enchantments (Modded and Vanilla) Not Functioning with "Golden Tools Have Fortune" Config [1.21.1]
    *   Also, mutual exclusions are now applied correctly to built-in and applied enchantments.
    *   This fix undoes a previous change, and as a result compatibility with Kilt is potentially reduced, but this is untested and not something we are explicitly supporting.
*   Potentially fixed #5647: Make Azalea Tree Change be not hard coded

Changes
=======

*   Updated Finnish translation (Thanks footwanterfin)
*   Azalea Wood Module, if disabled manually or by anti-overlap, will no longer force the vanilla azalea tree ConfiguredFeature to use Oak Logs

Additions
=========

*   Added a config option to Oddities' Totem of Holding to drop all items on hit (Thanks Lightning323)
*   Backpacks have item handler capabilities now; modded items and tools can potentially use items from the backpack (Thanks MehVahdJukaar)
*   Feeding trough has item handler capability now; you should be able to insert into it with modded pipes (Thanks Klisz)

## Starcatcher
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/starcatcher)

### starcatcher-3.1.4.1-NEOFORGE-1.21.1.jar
*   fixed message about a missing model showing up when a fish dies

### starcatcher-3.1.4-NEOFORGE-1.21.1.jar
- fixed bucketing non-lava fish giving a lava fish bucket  
- fixed double item render call for golden items  
- Fixed vanilla bobber treasure not working  
- Fixed treasure sometimes loading as empty  
- Removed rods from creative mode tab to stop people from getting baited by jemi  
- Added chat message when summoning a fish without a model in creative  
- Fixed treasure outline rendering above treasure item  
- Fixed Rarity Caught restriction wrongly calculating total fishes caught  
- Fixed golden fishes not being able to be caught  
- clams now place facing you  
- Fixed luck potion effect giving you extra handle speed  
- Fixed guide showing wrong dimension color on dedicated servers  
- Fixed treasures not spawning naturally on dedicated servers  
- Swapped to homemade tag-like system for default modifiers & dimension tags  
- Dimension tags are now dimension_entries  
- Light level no longer restricts fishes in area  
- Fixed using bonemeal on rich farmland not giving seeking/almighty

### starcatcher-3.1.3-NEOFORGE-1.21.1.jar
*   Golden worms now award extra golden chance
*   Changed `Daytime` tooltip on index hover to `Time of Day`
*   Structure restriction now properly detects if you're inside the structure on the client side
*   Improved JEI smithing recipe compatibilily
*   Added missing Survivor & Valley recipes
*   Fixed JEI/EMI fish entry pages not showing hover tooltips
*   improved radar animation when playing on low tps servers
*   Added missing tag & config translations
*   Removed default luck modifier

## Little Joys
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/little-joys)

### littlejoys-neoforge-1.21.1-21.1.18.jar
- Fixed potential chunk loads while trying to spawn dig spots  
- Fixed potential chunk loads while trying to spawn fishing spots

## Polytone
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/polytone)

### polytone-1.21-4.2.0-neoforge
*   gpu particle force spawn
*   some new properties in colors.json for water fog

## Hearth and Harvest
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/hearth-and-harvest)

### hearthandharvest-1.21.1-1.3.4.jar
**Hearth and Harvest 1.3.4**
============================

*   **Additions:**
    *   Added a plethora of new and existing tags to blocks/items throughout the mod to increase compatibility and fix a few issues. Thank you to VioletEverbloom and Qwerty97475 for the suggestions on the tagging
    *   Added Lilliput Lane structure, the winner of the vineyard building contest made by Hazed
        *   Can be found in forests
*   **Changes:**
    *   Fluid handling in the mod has been heavily reworked. Please let me know of any new issue
    *   Plucking chickens has a 30 second cooldown
    *   Trellis ghosts will no longer appear if you aren’t able to place it (adventure mode, spawn protection, outside of world border)
    *   Casks can now be extracted from on the sides
    *   Jugs now give proper comparator output range of 0-15
*   **Fixes:**
    *   Fixed Every Compat (Wood Good) support
    *   Fixed missing Melon Wine and Glow Berry Wine models for BnC coasters
    *   Fixed empty jugs not stacking
    *   Fixed jug fluid duplication
    *   Fixed jug deleting waterlogged blocks
    *   Fixed jugs being able to pickup fluids in build-protected areas (adventure mode, spawn protection, outside of world border)
    *   Fixed stomping basin fluid loss when combining/breaking multiblock
    *   Fixed cleavers not counting kills correctly
    *   Fixed cleavers charge speed applying while mounted
    *   Fixed cleavers damaging the wrong item in offhand
    *   Fixed trellis ghosts showing the wrong material in some instances
    *   Fixed casks progress bar not scaling with processing speed and un-needed ticking not processing
    *   Fixed tilling enchantment not using durability
    *   Fixed watering can not being audible to other players
    *   Pungent and tempting should be less laggy
    *   A number of other small tweaks, changes, and improvements internally

## Sophisticated Backpacks
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks)

### sophisticatedbackpacks-1.21.1-3.26.2.2141.jar
### Features

*   Added linked storage to SB Create integration

### sophisticatedbackpacks-1.21.1-3.26.1.2124.jar
### Fixes

*   Fixed placed backpacks losing their colors after loading

### sophisticatedbackpacks-1.21.11-3.26.1.2125.jar
### Fixes

*   Fixed placed backpacks losing their colors after loading

### sophisticatedbackpacks-1.21.8-3.26.1.2129.jar
### Fixes

*   Fixed placed backpacks losing their colors after loading

### sophisticatedbackpacks-1.21.5-3.27.1.2127.jar
### Fixes

*   Fixed placed backpacks losing their colors after loading

### sophisticatedbackpacks-1.21.10-3.26.1.2128.jar
### Fixes

*   Fixed placed backpacks losing their colors after loading

### sophisticatedbackpacks-1.21.4-3.27.1.2126.jar
### Fixes

*   Fixed placed backpacks losing their colors after loading

### sophisticatedbackpacks-1.21.1-3.26.0.2116.jar
### Features

*   Added linked Backpack storage -
    *   Link Backpacks with an Ender Linker to share inventory, settings, tanks, energy, and upgrades.
    *   Use a blank Linker with a Backpack to create a link or target a linked Backpack, then use it to link compatible Backpacks.
    *   All linked Backpacks access the same storage; global and tick-driven upgrades run only through the primary Backpack.
    *   Linking closes an open Backpack menu so it reopens with the shared storage state.

### sophisticatedbackpacks-1.21.11-3.26.0.2117.jar
### Features

*   Added linked Backpack storage -
    *   Link Backpacks with an Ender Linker to share inventory, settings, tanks, energy, and upgrades.
    *   Use a blank Linker with a Backpack to create a link or target a linked Backpack, then use it to link compatible Backpacks.
    *   All linked Backpacks access the same storage; global and tick-driven upgrades run only through the primary Backpack.
    *   Linking closes an open Backpack menu so it reopens with the shared storage state.

### sophisticatedbackpacks-1.21.10-3.26.0.2118.jar
### Features

*   Added linked Backpack storage -
    *   Link Backpacks with an Ender Linker to share inventory, settings, tanks, energy, and upgrades.
    *   Use a blank Linker with a Backpack to create a link or target a linked Backpack, then use it to link compatible Backpacks.
    *   All linked Backpacks access the same storage; global and tick-driven upgrades run only through the primary Backpack.
    *   Linking closes an open Backpack menu so it reopens with the shared storage state.

### sophisticatedbackpacks-1.21.8-3.26.0.2120.jar
### Features

*   Added linked Backpack storage -
    *   Link Backpacks with an Ender Linker to share inventory, settings, tanks, energy, and upgrades.
    *   Use a blank Linker with a Backpack to create a link or target a linked Backpack, then use it to link compatible Backpacks.
    *   All linked Backpacks access the same storage; global and tick-driven upgrades run only through the primary Backpack.
    *   Linking closes an open Backpack menu so it reopens with the shared storage state.

### sophisticatedbackpacks-1.21.4-3.27.0.2122.jar
### Features

*   Added linked Backpack storage -
    *   Link Backpacks with an Ender Linker to share inventory, settings, tanks, energy, and upgrades.
    *   Use a blank Linker with a Backpack to create a link or target a linked Backpack, then use it to link compatible Backpacks.
    *   All linked Backpacks access the same storage; global and tick-driven upgrades run only through the primary Backpack.
    *   Linking closes an open Backpack menu so it reopens with the shared storage state.

### sophisticatedbackpacks-1.21.5-3.27.0.2123.jar
### Features

*   Added linked Backpack storage -
    *   Link Backpacks with an Ender Linker to share inventory, settings, tanks, energy, and upgrades.
    *   Use a blank Linker with a Backpack to create a link or target a linked Backpack, then use it to link compatible Backpacks.
    *   All linked Backpacks access the same storage; global and tick-driven upgrades run only through the primary Backpack.
    *   Linking closes an open Backpack menu so it reopens with the shared storage state.

### sophisticatedbackpacks-1.21.11-3.25.84.2111.jar
### Fixes

*   Fixed backpacks closing at extended reach

### sophisticatedbackpacks-1.21.5-3.25.78.2113.jar
### Fixes

*   Fixed backpacks closing at extended reach

### sophisticatedbackpacks-1.21.8-3.25.78.2110.jar
### Fixes

*   Fixed backpacks closing at extended reach

### sophisticatedbackpacks-1.21.10-3.25.81.2112.jar
### Fixes

*   Fixed backpacks closing at extended reach

## Adorable Hamster Pets
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/adorable-hamster-pets)

### 3.7.0-1.21.1+neoforge
[3.7.0] - 2026-09-08
----------------------

**The Fever Pitch Update**
==========================

Some cave hamsters have inhaled a little too much redstone dust, so naturally the treatment now includes a flute solo. Redstone Fever introduces rare aggressive cave encounters and a sunlight rescue challenge, while the new Acorn Flute can distract threats, call trained hamsters to your shoulder from a configurable distance, and is also used to obtain a new music disc. The new Acorn Ring adds truces between pet households, and Hide & Seek, combat, food luring, storage crates, water rescue, and several other systems received fixy fixy attention.

**IMPORTANT:** If you've been looking for **White** or **Pearl Rose** hamsters and couldn't find them, this update fixes that— but **with one important condition:** you must follow the _**Missing White & Pearl Rose Hamsters**_ instructions down below (I colored it red) to manually restore the affected settings to their new defaults. Why? Because I didn't want to overwrite everyone's custom worldgen config settings in case some people have spent a lot of time on it.

### Added

*   **Redstone Fever**
*   You might now come across rare wild aggressive cave hamsters with scars, glowing red eyes, rapid health regen, new animations, redstone particles, 3 new custom sound effect types, and unpredictable circular energy bursts. Thanks to [@The Retro Stitcher](/linkout?remoteUrl=https%253a%252f%252ftheretrostitcher.com%252f) for the original Redstone Fever concept/idea!
    *   Currently, Redstone Fever is only applied when a hamster first spawns. Existing hamsters cannot contract it. I might add contagiousness in the future if it's requested.
    *   Food cannot tame, distract, or pacify an untreated hamster. You'll need to play a riff on the Acorn Flute to briefly interrupt its attacks while it keeps watching you with those red eyes. Lead it above redstone depth and keep it in direct clear sunlight for 3 Minecraft days to cure the condition and restore ordinary wild behavior.
    *   How do you lead it? You're the bait. Better find some good armor. For your toes.
    *   Spawning, sunlight treatment, aggression, bursts, and eligible dimensions are configurable. The Jade HUD overlay can optionally show Severe, Recovering, or Nearly Cured status if you enable it.
    *   Added a set of hidden config settings commissioned by the **After Beyond Networks** team for their upcoming "Ultimate Nightmare" event. These settings allow pre-existing wild hamsters to resolve one hidden surface-surprise roll when first approached by a player. Each result persists, so reloading or changing the chance cannot reroll the same hamster. These settings are purposefully hidden at the bottom of the config under "Commissioned Features." This changelog is the only place they will be mentioned.
*   **Acorn Flute & Acorn Music Disc**
    *   Thanks to [@The Retro Stitcher](/linkout?remoteUrl=https%253a%252f%252ftheretrostitcher.com%252f) for the base Acorn Flute idea, the crafting recipes and the flute textures!
    *   Craft separate Lush, Ember, and Harmony Acorn Flutes from Acorn Shards, string, and pitcher plants or torchflowers. All three stack to 16 and share the same mechanics; the color is purely cosmetic at this stage, but does affect the color of the musical note particles.
    *   Play from your main hand to begin one of random riff sounds. You can play again right away to switch sounds. Switching items ends your active performance immediately. You can't play a flute if you aren't holding it. Duh. Different players can perform at the same time, so multiplayer flute incidents remain fully supported. I tried to make sure all the sounds were in E minor, but I'm not a music expert, lol.
    *   Server owners can turn up an Anti-Spam Cooldown that enforces a minimum wait between flute plays (config, just 0.5 seconds by default— I didn't want to punish your shaky aim if you intended to summon the hamster to your shoulder but missed the target and played a normal riff instead).
    *   Normal riffs can be heard up to 80 blocks away (very quiet) and distract threats within 16 blocks by default.
    *   You can distract creepers and fevered hamsters with the flute. Server owners can decide whether you should be able to calm all creepers or charged creepers only in the config.
    *   Fevered hamsters keep pursuing players while distracted, but won't attack or frantically sprint around in circles.
    *   Look directly at an owned hamster within 8 blocks while you have an open shoulder or head slot, and your flute will play a shorter chiff sound instead of the normal riff. The hamster will think about what that means, and then jump onto your shoulder. Successfully repeating this will train that exact hamster from a 3-second response toward 1 second after a configurable number of mounts (50 by default). A new optional Jade HUD line shows `Untrained`, `Learning`, `Responsive`, or `Attuned`. I left it off by default since the Jade HUD is already getting crowded.
    *   A flute-assisted sunlight cure qualifies that exact hamster for the Acorn Music Disc ritual. Tame it, mount it, then throw it at a charged creeper while any player's normal riff is actively calming the creeper. The qualified rescuer must make the killing throw; but failed attempts do not consume the qualification so if you can find another charged creeper you can try again.
    *   A successful ritual replaces the ordinary Cheese Music Disc drop with one Acorn Music Disc. It contains a fully licensed zampoña style version of the AHP theme song.
*   **Acorn Ring**
    *   Craft an Acorn Ring from an Acorn Hat and four Copper Ingots, or find one independently in uncommon loot chests.
    *   Wear it in your offhand with no extra mod, or in a ring slot through [**Accessories**](/linkout?remoteUrl=https%253a%252f%252fmodrinth.com%252fmod%252faccessories) on Fabric/NeoForge, [**Trinkets**](/linkout?remoteUrl=https%253a%252f%252fmodrinth.com%252fmod%252ftrinkets) on Fabric, or [**Curios API**](/linkout?remoteUrl=https%253a%252f%252fmodrinth.com%252fmod%252fcurios) on Forge/NeoForge.
    *   When two players both wear a ring, their pets will not target the other player or pets that player owns—even in Menace mode. Server owners can limit the contract to hamsters in the config.
    *   An offhand ring stays out of sight. Removing either ring ends protection without starting a fight.
    *   By default, the ring also keeps you from accidentally hitting your own pets. A separate setting can extend that restraint to other ring wearers' pets; the all-pet contract and loot frequency are configurable too.
*   **Hamster Combat Timer**
    *   Standard-mode hamsters now abandon a fight after 30 seconds without relevant combat from their owner. Menace mode remains professionally unreasonable.
*   **Per-Hamster Armor Visibility**
    *   Each hamster inventory now has a compact checkbox for hiding that hamster's armor without removing its protection. The global armor-visual setting remains the final authority.
*   **Hamster Turning Animations**
    *   Idling hamsters now shuffle their paws and rock their body when rotating in place instead of gliding around like a robotic turntable.
*   **Hamster Reset Command**
    *   Added `/ahp reset_hamster` for server OPs. It returns the nearest hamster to a freshly spawned wild state while preserving its fur, patterns, eyes, animation personality, and cheek-pouch loot. Ownership, equipment, AI state, cooldowns, and other history get a clean slate.
*   **Redstone Fever Admin Commands**
    *   Added `/ahp redstone_fever apply` and `/ahp redstone_fever cure` for server OPs. With no target, each affects the nearest live hamster within 16 blocks; pass an entity selector when the whole cave needs attention. Doesn't work on tamed hamsters, and admin cures won't grant advancements.
*   **New Hamster Tips Guidebook Entries**
    *   **Redstone Fever**
    *   Explains how to interrupt attacks with an Acorn Flute riff, and the **Musical Rodentry** entry gained a page hinting at how to get the new Acorn Music Disc.
    *   **Acorn Flute**
    *   Explains how a riff distracts creepers and interrupts fevered hamsters, how to summon a hamster onto your shoulder, and how successful mounts train that hamster to respond faster.
    *   **Hide & Seek Minigame**
    *   Explains the start message, hiding-place clues, time limit and reward so people don't keep asking me why their hamster disappeared lol.
*   **New Advancements**
    *   **Redstone Fever**
    *   Discover a hamster suffering from Redstone Fever. Apparently prolonged redstone exposure has side effects.
    *   **Flute-Assisted Recovery**
    *   Cure a fevered hamster with prolonged direct sunlight and good music. Medical licensing remains pending.
    *   **The Final Note**
    *   Complete the Acorn Music Disc ritual with the same hamster you helped cure. Poetic. Legendary.
    *   **Hide and Squeak**
    *   Find your hamster during a game of Hide & Seek before time runs out. Apparently this counts as responsible pet ownership.

### Changed

*   **Limited Sulking & Knocked Out States**
    *   Hamsters now recover from being knocked out or sulking within 10 seconds at most.
    *   I did this so you can more easily find your hamsters easier after throwing them. When they were permanently knocked out, they would never teleport to you in that condition.
*   **Teleport Rescue**
    *   My custom rescue code that brings following hamsters with you through all kinds of teleports is now silent and does not include particle effects. Its destination and delayed-spawn behavior remain unchanged. I just wanted to make sure it won't conflict with the new [**Void Hamster**](https://docs.google.com/document/d/1xlr4_pgvQ2KUDc4nyUVGhpClXSoFtABiVfZbJshMgps/edit?usp=sharing) coming in the next update.
    *   Long-distance rescue now cancels active minigames when the owner moves far enough away, while ordinary minigame behavior remains uninterrupted and commanded-sitting or bed-sleeping hamsters stay in place.
    *   Teleport Rescue now applies to hamsters that are knocked out and sulking. When they spawn next to you at the new location, they will be normal.
*   **Fast and Slow Hamster Dancing**
    *   Hamsters now bounce to Fast song matches and loop a new swaying animation to Slow matches. The existing `dancingMusicDiscStrings` setting and all saved values remain the Fast list; the new Slow list defaults to `low-fi` and `zampoña` and wins when both lists match. For example, if a song name contained both “hamster” and “zampoña," a nearby hamster would do the slower dance.
*   **Food Gets a Hamster's Attention**
    *   Every configured hamster food can now lure eligible hamsters, temporarily interrupting ordinary combat without erasing a valid target. Tamed hamsters still only follow their owner.
    *   Begging is reserved for taming food and shoulder-mount treats. Other food attracts them without the performance.
*   **Recipe Output Adjustments**
    *   Hamster Food Mix crafting now produces 4 Hamster Food Mix instead of 1.
*   **Acorn Composting**
    *   Acorns now compost more reliably, and now you can also compost Acorn Shards for a smaller but still useful contribution, and Acorn Hats provide the lowest contribution.
*   **Cycle Aggression States Without Sneaking**
    *   Configured Pacifist, Standard, and Menace items now change aggression through ordinary feeding.
    *   If the hamster is already in Standard aggression mode, configured sunflower seeds remain ordinary food.
    *   Flowers now equip as accessories with sneak + right-click, keeping normal right-click available for feeding.
*   **Instantly End Hamster Fights**
    *   Feeding your hamster a flower during a fight will instantly wipe its memory of the current target without enabling Pacifist mode.
    *   Trying to enable **Pacifist mode**? Just feed it a second flower while it is calm.
*   **Less Frequent Hide & Seek Games**
    *   Doubled the default initiation interval from roughly 3 minutes to roughly 6 minutes. _Existing worlds retain their saved value; open the setting in the config screen, right-click it, and select **Restore Defaults** to apply the new default._
*   **Shoulder Hamster Throw Selection**
    *   Throwing now skips hamsters whose cooldown is still active and selects the next ready hamster in the configured FIFO/LIFO order. If every mounted hamster is recovering, the normal cooldown message still appears.
*   **Snowshoe Hamsters**
    *   Hamsters now walk on top of powdered snow instead of sinking in, and thrown hamsters land on the drift rather than vanishing into it. Hamsters are lightweights so it feels like it always should have been this way. Now your hamsters can comfortably watch you freeze to death.

### Fixed

*   **Chiseled Bookshelves**
    *   The Hamster Tips guidebook can now be stored in chiseled bookshelves.
*   **Crop Tag Compatibility**
    *   Cucumber and Green Bean crops now work with vanilla crop and farmland-maintenance checks, improving compatibility with crop-focused mods.
*   **Cave Hamster Spawning**
    *   Wild hamsters can now spawn naturally on valid underground cave floors instead of leaving every cave suspiciously rodent-free. Existing surface spawning remains unchanged, and cave hamsters use the configured cave color weights.
    *   This bug existed from the mod's first release because I was relying on vanilla Minecraft's passive-animal spawner. That system starts its search at the surface instead of looking for cave floors, so underground hamsters never received a fair spawn attempt.
*   **Water Rescue**
    *   Following hamsters now escape waterlogged navigation traps, and drowning hamsters teleport to nearby safe dry ground when one is available. Failed rescues no longer provide free drowning immunity.
*   **Reliable Hamster Cheeks**
    *   Wild hamsters spawned with loot now inflate the matching cheek immediately, and inspecting them with Jade no longer visually deflates cheeks that still contain items, fixing a synchronization flaw present since at least v1.1.0.
*   **Missing Guidebook Warning**
    *   The warning now remembers each player's acknowledgement on the server and permanently recognizes anyone who has held the guidebook, preventing repeats after restarts, client config resets, or mod updates.
    *   Players who manually obtained and discarded the guidebook before this update may still receive one final warning, because the mod had no way to record that earlier possession. But now it will be a one-time message for real. For real for real.
*   **Crate Retrieval**
    *   Acorn, cucumber, green bean, and Hamster Food Mix crates now drop themselves when broken, prefer axes, and count as standard storage blocks for storage-focused mod compatibility.
*   **AI-Disabled Hamster Taming**
    *   Incorrect taming attempts no longer permanently lock command-spawned, AI-disabled hamsters or disturb their frozen pose. A later valid sneak-taming attempt still reawakens them normally.
*   **Mud and Snow Rendering**
    *   Hamsters now render on top of mud and snow layers instead of sinking into lowered surfaces, where they would be partially or even sometimes completely hidden.
*   **Idle Breathing Floor Clipping**
    *   Hamster idle breathing animations now expand naturally upward and outward. Previously, the expansion caused the hamster's paws to subtly phase into the ground with every breath.
*   **Guidebook Taming Typo**
    *   Corrected an extra word in the sliced-cucumber instructions.
*   **Symphonic Dairy Translation**
    *   The Symphonic Dairy advancement now displays its title instead of its translation key.
*   **Missing White & Pearl Rose Hamsters**
    *   If you've been exploring snowy biomes hoping to find pure white hamsters, you might have wondered why you were getting mostly blue and sky-colored hamsters instead. Snowy biomes were accidentally getting lumped into the "Icy" environment group, but they now correctly spawn with their intended snowy coat colors.
    *   This happened because the color-sorting system checks for Icy biomes before Snowy ones, and the Icy filter was accidentally set up to catch anything labeled as "snowy." Since snowy biomes got caught in the icy filter first, they were given icy blue palettes instead of white ones.
    *   If you've been looking for Pearl Rose hamsters in Magical Environments and couldn't find any, it wasn't just bad luck. A typo in the Magical Environment config names kept the settings from loading correctly, so Pearl Rose hamsters couldn't spawn there.
    *   Also cleaned up a few modded biome defaults and restored compatibility tag support so hamsters spawn properly across modded biomes.
    *   You'll need to restore a few worldgen config settings to get these fixes. To opt into the corrected defaults without resetting your entire worldgen config, open the AHP config screen, go to **World Generation → Region-Based Color Filters**, and follow the exact reset locations below:
    *   **Priority 2: Icy Environments**
        *   Right-click **Included Biomes** and select **Restore Defaults**.
    *   **Priority 3: Magical Environments**
        *   Right-click **Included Biomes** and select **Restore Defaults**.
        *   Right-click **Zone Weights** and select **Restore Defaults**.
    *   **Priority 4: Cherry Environments**
        *   Right-click **Included Biomes** and select **Restore Defaults**.
    *   **Priority 5: Snowy Environments**
        *   Right-click **Included Biomes** and select **Restore Defaults**.
    *   **Priority 9: Sandy Environments**
        *   Right-click **Included Biomes** and select **Restore Defaults**.
    *   **Priority 10: Forest Environments**
        *   Right-click **Included Biomes** and select **Restore Defaults**.

## [EMF] Entity Model Features [Fabric & Forge]
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/entity-model-features)

### 3.3.5-neoforge-1.21
*   fixed v3.3.4 breaking layer models when multiple of an entity type is present
*   fixed baby sheep wool undercoat model fallbacks breaking in < 26.1

### 3.3.4-neoforge-1.21.9
*   fixed certain held entities re-triggering the `reset player pose` setting e.g. holding a trident breaking other player held item positions
*   fixed broken model texture overrides on some older versions
*   removed a deprecated class that was frequently being targeted by other mod mixins
*   updated emote craft emote pausing support in EMF
*   updated Essential emote pausing support into EMF
*   fixed a crash with older emote craft versions

### 3.3.4-neoforge-1.21.6
*   fixed certain held entities re-triggering the `reset player pose` setting e.g. holding a trident breaking other player held item positions
*   fixed broken model texture overrides on some older versions
*   removed a deprecated class that was frequently being targeted by other mod mixins
*   updated emote craft emote pausing support in EMF
*   updated Essential emote pausing support into EMF
*   fixed a crash with older emote craft versions

### 3.3.4-neoforge-1.21.5
*   fixed certain held entities re-triggering the `reset player pose` setting e.g. holding a trident breaking other player held item positions
*   fixed broken model texture overrides on some older versions
*   removed a deprecated class that was frequently being targeted by other mod mixins
*   updated emote craft emote pausing support in EMF
*   updated Essential emote pausing support into EMF
*   fixed a crash with older emote craft versions

### 3.3.4-neoforge-1.21.4
*   fixed certain held entities re-triggering the `reset player pose` setting e.g. holding a trident breaking other player held item positions
*   fixed broken model texture overrides on some older versions
*   removed a deprecated class that was frequently being targeted by other mod mixins
*   updated emote craft emote pausing support in EMF
*   updated Essential emote pausing support into EMF
*   fixed a crash with older emote craft versions

### 3.3.4-neoforge-1.21.3
*   fixed certain held entities re-triggering the `reset player pose` setting e.g. holding a trident breaking other player held item positions
*   fixed broken model texture overrides on some older versions
*   removed a deprecated class that was frequently being targeted by other mod mixins
*   updated emote craft emote pausing support in EMF
*   updated Essential emote pausing support into EMF
*   fixed a crash with older emote craft versions

### 3.3.4-neoforge-1.21.11
*   fixed certain held entities re-triggering the `reset player pose` setting e.g. holding a trident breaking other player held item positions
*   fixed broken model texture overrides on some older versions
*   removed a deprecated class that was frequently being targeted by other mod mixins
*   updated emote craft emote pausing support in EMF
*   updated Essential emote pausing support into EMF
*   fixed a crash with older emote craft versions

### 3.3.4-neoforge-1.21
*   fixed certain held entities re-triggering the `reset player pose` setting e.g. holding a trident breaking other player held item positions
*   fixed broken model texture overrides on some older versions
*   removed a deprecated class that was frequently being targeted by other mod mixins
*   updated emote craft emote pausing support in EMF
*   updated Essential emote pausing support into EMF
*   fixed a crash with older emote craft versions

### 3.3.3-neoforge-1.21.9
*   fixed a crash on 1.21.3-4
*   added more api methods for the manual animation triggers and further documentation on their usage

### 3.3.3-neoforge-1.21.6
*   fixed a crash on 1.21.3-4
*   added more api methods for the manual animation triggers and further documentation on their usage

### 3.3.3-neoforge-1.21.5
*   fixed a crash on 1.21.3-4
*   added more api methods for the manual animation triggers and further documentation on their usage

### 3.3.3-neoforge-1.21.4
*   fixed a crash on 1.21.3-4
*   added more api methods for the manual animation triggers and further documentation on their usage

### 3.3.3-neoforge-1.21.3
*   fixed a crash on 1.21.3-4
*   added more api methods for the manual animation triggers and further documentation on their usage

### 3.3.3-neoforge-1.21.11
*   fixed a crash on 1.21.3-4
*   added more api methods for the manual animation triggers and further documentation on their usage

## Amendments
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/amendments)

### amendments-1.21-2.1.10-neoforge
*   new UI for villager trades

## Blueprint
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/blueprint)

### Blueprint 1.21.1 - 8.2.0
*   Modded biome slices are now faster at high slice counts
*   Added an event for modifying slices right before they get assigned to dimensions
*   OverlayModdedBiomeProvider now supports choosing which "underlay" biome provider it uses
*   Added finalize(...) method to ModdedBiomeProvider so custom types can initialize generation data that is server-data-dependent
*   Remolded resource streams are no longer single-use (fixes some rare incompatibilities)

## Complementary Shaders - Unbound
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/complementary-unbound)

### Complementary Unbound r5.9
Another major Complementary update is out now. This time mainly focusing on polishing the general experience. Aside from fully supporting Minecraft 26.2 features like the special fog in Sulfur Caves; r5.9 brings improved frame rates, tweaked daytime sky, complete volumetric reflection support for the End, more control over shader settings, rebalanced higher performance profiles, a bunch of tweaks, improvements, and a ton of bug fixes as always.  
  
The full list of changes can be found at [https://www.complementary.dev/changelogs](/linkout?remoteUrl=https%253a%252f%252fwww.complementary.dev%252fchangelogs)

## Lootr (Forge & NeoForge)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/lootr)

### lootr-neoforge-1.21.1-1.11.38.125
*   Bump version for release. [(3289dfcb)](https://github.com/noobanidus/Lootr/commit/3289dfcb)
*   Trigger an advancement for emergency conversion. [(2efedafc)](https://github.com/noobanidus/Lootr/commit/2efedafc)
*   Fix #889: suspicious no longer blocks chest opening. [(28a3275b)](https://github.com/noobanidus/Lootr/commit/28a3275b)
*   Don't override the limiter. [(db016041)](https://github.com/noobanidus/Lootr/commit/db016041)
*   Test particle center in frustum instead. [(3c70f6c4)](https://github.com/noobanidus/Lootr/commit/3c70f6c4)
*   "Fix" #887: test line of sight for particles. [(751d5e2a)](https://github.com/noobanidus/Lootr/commit/751d5e2a)
*   Bump version for maven. [(35e3999d)](https://github.com/noobanidus/Lootr/commit/35e3999d)

## Punchy! - First person animations
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/punchy)

### Punchy 2.7e (NeoForge) - 1.21.1
Punchy v2.7e released.
======================

Fixed
-----

*   Fixed saved Hand Editor tuning, active Mixpacks profiles, and animations settling incorrectly after resource-pack reloads. Punchy now performs a final refresh after the resource manager has finished loading.
*   Fixed animation sounds continuing after an animation changes, stops, is disabled, or resources reload.
*   Fixed multi-axis Blockbench `itemgrip` rotations so combined keyframes preserve their intended rotation order and held items align correctly.

Minecraft 26.3 Pre-Release 1
----------------------------

*   Added Fabric support for Minecraft 26.3 Pre-Release 1.
*   Updated Punchy's rendering integration for the 26.3 pose-stack API changes.
*   Fixed the drop-key mixin target for 26.3.

Notes
-----

This release includes adjustments for issues caused by loading and reloading resource packs, including severe performance degradation. I could not reproduce every reported case, so this release may not resolve every issue related to resource-pack reloads. Please continue to send bug reports; I will investigate, reproduce, and fix any remaining cases.

### Punchy 2.7d (NeoForge) - 1.21.5
Punchy v2.7d released.
======================

Fixed
-----

*   Fixed saved Hand Editor tuning, active Mixpacks profiles, and animations not applying automatically after launching or restarting the game.
*   Fixed a resource-loading retry loop that could repeatedly rebuild Punchy resources after startup, causing severe FPS drops with Punchy resource packs.

### Punchy 2.7d (NeoForge) - 1.21.11
Punchy v2.7d released.
======================

Fixed
-----

*   Fixed saved Hand Editor tuning, active Mixpacks profiles, and animations not applying automatically after launching or restarting the game.
*   Fixed a resource-loading retry loop that could repeatedly rebuild Punchy resources after startup, causing severe FPS drops with Punchy resource packs.

## Waystones
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/waystones)

### waystones-neoforge-1.21.1-21.1.44.jar
- Fixed setting waystones to activation visibility no longer working when default visibility is set to global  
- Fixed silk-touched waystones still showing up in global/team index  
- Fixed unseen, unnamed waystones showing up when default visibility is global  
- Fixed world gen features being registered multiple times in some cases, resulting in feature cycle order crashes  
- Fixed animations becoming choppy as time passes

## Traveler Tool Belt
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/traveler-tool-belt)

### travelertoolbelt-neoforge-1.21.1-1.0.3
🐛 Fixed duplication issue

⭐ Want to receive **Supporter Star Badge** for a **lifetime**? - [visit my Ko-Fi page](/linkout?remoteUrl=https%253a%252f%252fko-fi.com%252ftiviacz1337)!  
![Banner](https://i.imgur.com/SSrFv58.png)

### travelertoolbelt-neoforge-1.21.11-1.0.3
🐛 Fixed duplication issue

⭐ Want to receive **Supporter Star Badge** for a **lifetime**? - [visit my Ko-Fi page](/linkout?remoteUrl=https%253a%252f%252fko-fi.com%252ftiviacz1337)!  
![Banner](https://i.imgur.com/SSrFv58.png)

### travelertoolbelt-neoforge-1.21.11-1.0.2.jar
✨ Added "Hold To Open" config option (default true) - changing to false will allow to open/close tool belt radial menu by single key press (no need to hold it)  
✨ Netherite Tool Belt item is fire resistant like netherite armor  
📚 Added Hungarian translation - Thanks Gery D.!  
📚 Added Russian translation - Thanks Quanzy!

⭐ Want to receive **Supporter Star Badge** for a **lifetime**? - [visit my Ko-Fi page](/linkout?remoteUrl=https%253a%252f%252fko-fi.com%252ftiviacz1337)!  
![Banner](https://i.imgur.com/SSrFv58.png)

## Fusion (Connected Textures)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/fusion-connected-textures)

### Fusion 1.3.15a for NeoForge 1.21.1
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

### Fusion 1.3.15 for NeoForge 1.21.11
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
*   Fixed Sodium preventing Fusion animated textures from animating

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

*   Fixed crash with Sodium

### Fusion 1.2.11

*   Initial release of Fusion for Minecraft 1.21.11

### Fusion 1.3.15 for NeoForge 1.21.9
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

### Fusion 1.3.15 for NeoForge 1.21.8
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

### Fusion 1.3.15 for NeoForge 1.21.5
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

### Fusion 1.3.15 for NeoForge 1.21.4
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

### Fusion 1.3.15 for NeoForge 1.21.3
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

### Fusion 1.3.15 for NeoForge 1.21.1
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

### Fusion 1.3.14a for NeoForge 1.21.11
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
*   Fixed Sodium preventing Fusion animated textures from animating

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

*   Fixed crash with Sodium

### Fusion 1.2.11

*   Initial release of Fusion for Minecraft 1.21.11

### Fusion 1.3.14a for NeoForge 1.21.9
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

### Fusion 1.3.14a for NeoForge 1.21.8
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

### Fusion 1.3.14a for NeoForge 1.21.5
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

### Fusion 1.3.14a for NeoForge 1.21.4
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

### Fusion 1.3.14a for NeoForge 1.21.3
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

### v1.8.0+beta6 ~ Neoforge 21.1
Additions

*   `add_spawn_costs` modifier (adds spawn costs for mobs in given biome(s))
*   `set_tree_decorators` modifier (adds/overrides tree decorators on given tree feature(s))
*   `branched_mega_jungle` foliage placer (for wider mega jungle trees)
*   `branched_mega_pine` foliage placer (for wider pine jungle trees)
*   `large_mangrove` root placer (for root placements with 2x2 trees)
*   `cellular` density function type (in-house 2d cellular noise with more consistency/features than fast noise)

Fixes

*   Fixed surface rules from Terrablender behaving incorrectly.
*   Fixed annoying but harmless log errors when World Weaver is installed.
*   Fixed biome worldgen modifiers not applying on Neoforge.
*   Fix the assumed minimum value in various places (e.g. sample_density placement condition) being 0, not roughly -1.8E308.

## Create: Copycats+
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/copycats)

### copycats-3.0.9+mc.1.21.1-neoforge
Check out the detailed changelog at [https://github.com/copycats-plus/copycats/blob/multiloader/CHANGELOG.md](https://github.com/copycats-plus/copycats/blob/multiloader/CHANGELOG.md)

## Puzzles Lib
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/puzzles-lib)

### [NEOFORGE] [1.21.1] v21.1.60
Changelog
=========

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](/linkout?remoteUrl=https%253a%252f%252fkeepachangelog.com%252fen%252f1.0.0%252f), and this project adheres to [Semantic Versioning](/linkout?remoteUrl=https%253a%252f%252fsemver.org%252fspec%252fv2.0.0.html).

[v21.1.60-mc1.21.1] - 2026-09-07
----------------------------------

### Added

*   Backport `ColorCollection`
*   Backport `VariantUtils`
*   Backport `ProjectileHelper`
*   Backport `EntityHelper::dropFromGiftLootTable` & `EntityHelper::dropFromShearingLootTable`

[v21.1.59-mc1.21.1] - 2026-09-06
----------------------------------

### Added

*   Backport `ServerResourcesLoadCallback` & `ClientTagsUpdatedCallback`

[v21.1.58-mc1.21.1] - 2026-09-05
----------------------------------

### Added

*   Backport `BlockStateResolverContext`
*   Backport `AbstractMenuSelectionList`

[v21.1.57-mc1.21.1] - 2026-09-02
----------------------------------

### Added

*   Backport updated `RangedSliderButton`

[v21.1.56-mc1.21.1] - 2026-08-31
----------------------------------

### Added

*   Backport modern `ParticleProvider`
*   Backport `TrimPatternBuilder`
*   Backport `RegistryManager::registerCreativeModeTab`

### Changed

*   Delay setting up handshake payloads to avoid registering `IModBusEvents` too early on NeoForge
*   Set spawn cost in `SpawnerDataBuilder`

[v21.1.55-mc1.21.1] - 2026-08-13
----------------------------------

### Added

*   Backport modern vanilla input classes (most importantly `InputWithModifiers`)
*   Backport modern `SimpleJsonResourceReloadListener`
*   Backport modern `DataProvider` methods
*   Backport `AbstractWidgetsContainerScreen`
*   Backport updated `ScreenOpeningCallback`
*   Backport updated `GuiGraphicsHelper`

### Changed

*   Update `EventResult#value` type

[v21.1.54-mc1.21.1] - 2026-07-02
----------------------------------

### Changed

*   Ship an access transformer instead of a class tweaker file for backwards compatibility on Fabric

[v21.1.53-mc1.21.1] - 2026-07-01
----------------------------------

### Changed

*   Use Multiloader Convention Plugins v1.1

[v21.1.52-mc1.21.1] - 2026-06-15
----------------------------------

### Fixed

*   Fix `NetworkingHelper::hasChannel` not checking `Connection::isConnected` on NeoForge

[v21.1.51-mc1.21.1] - 2026-05-30
----------------------------------

### Changed

*   Make registry syncing more lenient for vanilla clients on Fabric

### Fixed

*   Fix crash when trying to open a config screen for a config which is not loaded

[v21.1.50-mc1.21.1] - 2026-05-28
----------------------------------

### Changed

*   Support registering stripple blocks without an `axis` property on Fabric

[v21.1.49-mc1.21.1] - 2026-05-27
----------------------------------

### Fixed

*   Fix wrong sign type being passed to the `BlockSetVariant#HANGING_SIGN` item

[v21.1.48-mc1.21.1] - 2026-05-27
----------------------------------

### Added

*   Backport `ChunkSectionLayer` from Minecraft 1.21.11
*   Backport missing `BlockSetFamily` related methods in `AbstractRecipeProvider` & `AbstractTagProvider`

[v21.1.47-mc1.21.1] - 2026-05-26
----------------------------------

### Added

*   Backport `BlockSetFamily`
*   Backport `BlockSetVariant`
*   Backport `ClientBlockSetFamily`

### Fixed

*   Fix `RenderTypeHelper::getRenderType` not calling the proper method on NeoForge

[v21.1.46-mc1.21.1] - 2026-05-23
----------------------------------

### Fixed

*   Fix wrong `MeshDefinition` parameter in `LayerDefinition::create`

[v21.1.45-mc1.21.1] - 2026-05-23
----------------------------------

### Added

*   Backport `ModelAndTexture` from Minecraft 26.1
*   Backport `ClientAsset` from Minecraft 26.1
*   Backport `LateBoundIdMapper` from Minecraft 26.1
*   Backport `SpecialModelRenderer` from Minecraft 26.1
*   Backport some codecs in `CodecExtras` from Minecraft 26.1

### Fixed

*   Make sure our custom `LayerDefinition` stores a custom `MeshDefinition`, not the vanilla variant

[v21.1.44-mc1.21.1] - 2026-05-21
----------------------------------

### Added

*   Backport updated `AbstractTagAppender`

### Fixed

*   Fix tag generation failing when including tags from other namespaces

[v21.1.43-mc1.21.1] - 2026-05-21
----------------------------------

### Added

*   Add `TransformingForwardingList`
*   Add some helper methods to `ShapesHelper`
*   Add some helper methods to `AbstractRecipeProvider`

[v21.1.42-mc1.21.1] - 2026-05-20
----------------------------------

### Added

*   Add custom `LayerDefinition` from Minecraft 26.1

### Changed

*   Backport internal development tools

### Fixed

*   Fix custom `PartDefinition` `ClassCastException`

[v21.1.41-mc1.21.1] - 2026-05-19
----------------------------------

### Added

*   Add `DataAttachmentType::remove`
*   Backport `EntityDamageImmunityCallback`
*   Backport `StopSleepInBedCallback`
*   Backport `ServerEntityEvents`, deprecating `ServerEntityLevelEvents`
*   Backport `ConfigHolder::registerConfigurationScreen`
*   Backport `ContainerMenuHelper::openMenu`
*   Backport `TickingBlockEntity::clientTick` and `TickingBlockEntity::serverTick` methods with additional context

### Changed

*   Replace internal `ConfigurationScreen` with a custom version which also handles translations among other things
*   Backport attachment syncing
*   Backport updated `ComponentHelper` & `StyleCombiningCharSink`

### Removed

*   Remove `ConfigTranslationsManager`, translations are now handled directly on the config screen

### Fixed

*   Fix `EventResultHolder` not accepting a `null` value
*   Fix config lists not being allowed empty in some cases

[v21.1.40-mc1.21.1] - 2025-12-09
----------------------------------

### Changed

*   Major backport of many features from Puzzles Lib for Minecraft 1.21.10

[v21.1.39-mc1.21.1] - 2025-10-23
----------------------------------

### Changed

*   Add access widener for `CreativeModeInventoryScreen$SlotWrapper`

[v21.1.38-mc1.21.1] - 2025-08-11
----------------------------------

### Added

*   Add `PackRepositorySourcesContext::registerBuiltInPack`
*   Support built-in packs in `DataProviderHelper`

[v21.1.37-mc1.21.1] - 2025-08-05
----------------------------------

### Fixed

*   Fix `ShieldBlockCallback` being called even when not actively blocking on NeoForge

[v21.1.36-mc1.21.1] - 2025-05-04
----------------------------------

### Changed

*   Allow `DataProviderHelper` to support `RegistrySetBuilder`

[v21.1.35-mc1.21.1] - 2025-05-04
----------------------------------

### Removed

*   Remove unused breathing and drowning event implementations on Fabric to improve compatibility with Lunar Client

[v21.1.34-mc1.21.1] - 2025-04-25
----------------------------------

### Changed

*   Improve compatibility with other mods injecting into the `Gui` class on Fabric

[v21.1.33-mc1.21.1] - 2025-03-16
----------------------------------

### Fixed

*   Fix `ModelPart$Vertex` & `ModelPart$Polygon` being inaccessible on NeoForge

[v21.1.32-mc1.21.1] - 2025-03-14
----------------------------------

### Changed

*   Add a bunch of safety checks for casting in event invokers

[v21.1.31-mc1.21.1] - 2025-03-13
----------------------------------

### Added

*   Add `ModConstructor::onRegisterGameplayContent`
*   Add `ModelLocationHelper` & `ModelTemplateHelper`
*   Add `ResourceKeyHelper`
*   Add `AbstractDatapackRegistriesProvider`

[v21.1.30-mc1.21.1] - 2025-03-11
----------------------------------

### Fixed

*   Fix a rare start-up crash when registering generated config translations on NeoForge

[v21.1.29-mc1.21.1] - 2025-03-09
----------------------------------

### Fixed

*   Fix CommonAbstractions::hasChannel crashing for invalid players on NeoForge

[v21.1.28-mc1.21.1] - 2025-02-25
----------------------------------

### Added

*   Backport new block, item and creative mode tab registration methods to `RegistryManager`
*   Backport `CompostableBlocksContext`

### Changed

*   Update `FabricEventFactory` to handle faulty return values more leniently

[v21.1.27-mc1.21.1] - 2025-01-17
----------------------------------

### Fixed

*   Fix network packets executing with one tick delay on Fabric

[v21.1.26-mc1.21.1] - 2025-01-16
----------------------------------

### Changed

*   Allow setting empty lines for `TooltipBuilder` to prevent the tooltip from drawing

### Fixed

*   Fix unable to set a new widget tooltip using vanilla methods when `TooltipBuilder` has been used for the widget

[v21.1.25-mc1.21.1] - 2025-01-10
----------------------------------

### Fixed

*   Avoid unnecessarily high memory usage from holding on to top level model locations after model events have completed
*   Wrap `BlockStateModelLoader` in a `WeakReference` to avoid holding on to it when it is no longer needed

[v21.1.24-mc1.21.1] - 2024-12-22
----------------------------------

### Changed

*   Adjust `RangedSliderButton` implementation to no longer require an access widener to help compatibility with the [Cloth Config](/linkout?remoteUrl=https%253a%252f%252fmodrinth.com%252fmod%252fcloth-config) mod

[v21.1.23-mc1.21.1] - 2024-10-24
----------------------------------

### Changed

*   Support using `AbstractTagAppender` as string list builder

[v21.1.22-mc1.21.1] - 2024-10-22
----------------------------------

### Added

*   Add `ChangeEntitySizeCallback`
*   Add `RegistryManager::registerAttribute`

### Changed

*   Expand `LivingEntityRenderLayersContext` with some additional methods

[v21.1.21-mc1.21.1] - 2024-10-10
----------------------------------

### Changed

*   Allow `PlayerSet` to handle a provided client level more leniently

[v21.1.20-mc1.21.1] - 2024-10-10
----------------------------------

### Added

*   Add `CommonAbstractions::getPartEntityParent`

### Fixed

*   Fix removed data attachments failing to synchronize to clients

[v21.1.19-mc1.21.1] - 2024-10-05
----------------------------------

### Changed

*   Replace `ClientParticleTypes` with `ClientParticleHelper`

[v21.1.18-mc1.21.1] - 2024-10-04
----------------------------------

### Changed

*   Add more helper methods to `GuiGraphicsHelper`

### Fixed

*   Fix `DynamicPackResources` failing to generate some resources

[v21.1.17-mc1.21.1] - 2024-10-01
----------------------------------

### Added

*   Add `ClientAbstractions::hasChannel` & `CommonAbstractions::hasChannel`

### Changed

*   Network messages are no longer sent to clients & servers that do not understand them

[v21.1.16-mc1.21.1] - 2024-09-30
----------------------------------

### Changed

*   `RenderGuiLayerEvents` no longer fire when the hud is hidden via `F1`

[v21.1.15-mc1.21.1] - 2024-09-30
----------------------------------

### Changed

*   Slight `RenderGuiEvents` adjustments

### Fixed

*   Fix some gui layers from other mods failing to render

[v21.1.14-mc1.21.1] - 2024-09-29
----------------------------------

### Added

*   Add `RenderGuiEvents`, replacing `RenderGuiCallback`

[v21.1.13-mc1.21.1] - 2024-09-29
----------------------------------

### Changed

*   Overhaul `RenderGuiLayerEvents` implementation on Fabric

[v21.1.12-mc1.21.1] - 2024-09-29
----------------------------------

### Added

*   Add `NeoForgeCapabilityHelper::registerItemContainer`
*   Add `GuiGraphicsHelper::blitTiledSprite`
*   Add a bunch of helper methods to `ClientAbstractions` for handling `Gui#leftHeight` & `Gui#rightHeight`

### Changed

*   Minor `ConfigTranslationsManager` improvements

### Removed

*   Remove `ModLoaderEnvironment::getObjectShareAccess`

[v21.1.11-mc1.21.1] - 2024-09-25
----------------------------------

### Added

*   Add `CodecExtras`
*   Add some helper methods to `ItemModelDisplayOverrides`
*   Add enum helpers to `ExtraStreamCodecs`
*   Add some helper methods to `CreativeModeTabConfigurator`
*   Add helper methods to `ShapesHelper` for rotating shapes horizontally

### Changed

*   Allow for compatibility with Minecraft 1.21 on Fabric if enabled via [dependency overrides](/linkout?remoteUrl=https%253a%252f%252ffabricmc.net%252fwiki%252ftutorial%253adependency_overrides)
*   Allow `RegistryManager::registerBlockItem` to take an `Item$Properties` supplier

### Fixed

*   Fix `RenderHighlightCallback` crashing on NeoForge

[v21.1.10-mc1.21.1] - 2024-09-20
----------------------------------

### Changed

*   Allow `ItemModelDisplayOverrides` to accept both `ResourceLocation` as well as `ModelResourceLocation`

[v21.1.9-mc1.21.1] - 2024-09-18
---------------------------------

### Added

*   Add `TooltipBuilder::setTooltipLineProcessor`

[v21.1.8-mc1.21.1] - 2024-09-18
---------------------------------

### Changed

*   Pass original `ClientTooltipPositioner` to tooltip positioner factory in `TooltipBuilder`

[v21.1.7-mc1.21.1] - 2024-09-17
---------------------------------

### Fixed

*   Fix `LivingDropsCallback` failing to capture player drops on Fabric
*   Fix some keybinds failing to trigger properly on Fabric

[v21.1.6-mc1.21.1] - 2024-09-17
---------------------------------

### Changed

*   Overhaul `AbstractRegistriesDatapackGenerator` so that generated registry values can be used in other data providers

[v21.1.5-mc1.21.1] - 2024-09-16
---------------------------------

### Added

*   Add new data attachment api

### Changed

*   Revert codec support for capabilities, use attachments for that
*   Rename `PlayerSet::notify` to `PlayerSet::broadcast`

[v21.1.4-mc1.21.1] - 2024-09-14
---------------------------------

### Changed

*   Support codecs for capabilities
*   Simplify `ModelLayerFactory` implementation

[v21.1.3-mc1.21.1] - 2024-09-13
---------------------------------

### Added

*   Add `ScreenSkipper`
*   Add `GsonCodecHelper`
*   Add `TagFactory`

[v21.1.2-mc1.21.1] - 2024-09-12
---------------------------------

### Added

*   Add `RegistryManager::registerTrimMaterial` and `RegistryManager::registerLootTable`

[v21.1.1-mc1.21.1] - 2024-09-11
---------------------------------

### Added

*   Add `RegistryManager::registerDataComponentType`

### Changed

*   Minor updates for `ConfigTranslationsManager`
*   Hide some annoying toast messages in development environments

### Removed

*   Remove `BlockEntityHelper`

[v21.1.0-mc1.21.1] - 2024-09-10
---------------------------------

*   Port to Minecraft 1.21.1

### [NEOFORGE] [1.21.1] v21.1.59
Changelog
=========

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](/linkout?remoteUrl=https%253a%252f%252fkeepachangelog.com%252fen%252f1.0.0%252f), and this project adheres to [Semantic Versioning](/linkout?remoteUrl=https%253a%252f%252fsemver.org%252fspec%252fv2.0.0.html).

[v21.1.59-mc1.21.1] - 2026-09-06
----------------------------------

### Added

*   Backport `ServerResourcesLoadCallback` & `ClientTagsUpdatedCallback`

[v21.1.58-mc1.21.1] - 2026-09-05
----------------------------------

### Added

*   Backport `BlockStateResolverContext`
*   Backport `AbstractMenuSelectionList`

[v21.1.57-mc1.21.1] - 2026-09-02
----------------------------------

### Added

*   Backport updated `RangedSliderButton`

[v21.1.56-mc1.21.1] - 2026-08-31
----------------------------------

### Added

*   Backport modern `ParticleProvider`
*   Backport `TrimPatternBuilder`
*   Backport `RegistryManager::registerCreativeModeTab`

### Changed

*   Delay setting up handshake payloads to avoid registering `IModBusEvents` too early on NeoForge
*   Set spawn cost in `SpawnerDataBuilder`

[v21.1.55-mc1.21.1] - 2026-08-13
----------------------------------

### Added

*   Backport modern vanilla input classes (most importantly `InputWithModifiers`)
*   Backport modern `SimpleJsonResourceReloadListener`
*   Backport modern `DataProvider` methods
*   Backport `AbstractWidgetsContainerScreen`
*   Backport updated `ScreenOpeningCallback`
*   Backport updated `GuiGraphicsHelper`

### Changed

*   Update `EventResult#value` type

[v21.1.54-mc1.21.1] - 2026-07-02
----------------------------------

### Changed

*   Ship an access transformer instead of a class tweaker file for backwards compatibility on Fabric

[v21.1.53-mc1.21.1] - 2026-07-01
----------------------------------

### Changed

*   Use Multiloader Convention Plugins v1.1

[v21.1.52-mc1.21.1] - 2026-06-15
----------------------------------

### Fixed

*   Fix `NetworkingHelper::hasChannel` not checking `Connection::isConnected` on NeoForge

[v21.1.51-mc1.21.1] - 2026-05-30
----------------------------------

### Changed

*   Make registry syncing more lenient for vanilla clients on Fabric

### Fixed

*   Fix crash when trying to open a config screen for a config which is not loaded

[v21.1.50-mc1.21.1] - 2026-05-28
----------------------------------

### Changed

*   Support registering stripple blocks without an `axis` property on Fabric

[v21.1.49-mc1.21.1] - 2026-05-27
----------------------------------

### Fixed

*   Fix wrong sign type being passed to the `BlockSetVariant#HANGING_SIGN` item

[v21.1.48-mc1.21.1] - 2026-05-27
----------------------------------

### Added

*   Backport `ChunkSectionLayer` from Minecraft 1.21.11
*   Backport missing `BlockSetFamily` related methods in `AbstractRecipeProvider` & `AbstractTagProvider`

[v21.1.47-mc1.21.1] - 2026-05-26
----------------------------------

### Added

*   Backport `BlockSetFamily`
*   Backport `BlockSetVariant`
*   Backport `ClientBlockSetFamily`

### Fixed

*   Fix `RenderTypeHelper::getRenderType` not calling the proper method on NeoForge

[v21.1.46-mc1.21.1] - 2026-05-23
----------------------------------

### Fixed

*   Fix wrong `MeshDefinition` parameter in `LayerDefinition::create`

[v21.1.45-mc1.21.1] - 2026-05-23
----------------------------------

### Added

*   Backport `ModelAndTexture` from Minecraft 26.1
*   Backport `ClientAsset` from Minecraft 26.1
*   Backport `LateBoundIdMapper` from Minecraft 26.1
*   Backport `SpecialModelRenderer` from Minecraft 26.1
*   Backport some codecs in `CodecExtras` from Minecraft 26.1

### Fixed

*   Make sure our custom `LayerDefinition` stores a custom `MeshDefinition`, not the vanilla variant

[v21.1.44-mc1.21.1] - 2026-05-21
----------------------------------

### Added

*   Backport updated `AbstractTagAppender`

### Fixed

*   Fix tag generation failing when including tags from other namespaces

[v21.1.43-mc1.21.1] - 2026-05-21
----------------------------------

### Added

*   Add `TransformingForwardingList`
*   Add some helper methods to `ShapesHelper`
*   Add some helper methods to `AbstractRecipeProvider`

[v21.1.42-mc1.21.1] - 2026-05-20
----------------------------------

### Added

*   Add custom `LayerDefinition` from Minecraft 26.1

### Changed

*   Backport internal development tools

### Fixed

*   Fix custom `PartDefinition` `ClassCastException`

[v21.1.41-mc1.21.1] - 2026-05-19
----------------------------------

### Added

*   Add `DataAttachmentType::remove`
*   Backport `EntityDamageImmunityCallback`
*   Backport `StopSleepInBedCallback`
*   Backport `ServerEntityEvents`, deprecating `ServerEntityLevelEvents`
*   Backport `ConfigHolder::registerConfigurationScreen`
*   Backport `ContainerMenuHelper::openMenu`
*   Backport `TickingBlockEntity::clientTick` and `TickingBlockEntity::serverTick` methods with additional context

### Changed

*   Replace internal `ConfigurationScreen` with a custom version which also handles translations among other things
*   Backport attachment syncing
*   Backport updated `ComponentHelper` & `StyleCombiningCharSink`

### Removed

*   Remove `ConfigTranslationsManager`, translations are now handled directly on the config screen

### Fixed

*   Fix `EventResultHolder` not accepting a `null` value
*   Fix config lists not being allowed empty in some cases

[v21.1.40-mc1.21.1] - 2025-12-09
----------------------------------

### Changed

*   Major backport of many features from Puzzles Lib for Minecraft 1.21.10

[v21.1.39-mc1.21.1] - 2025-10-23
----------------------------------

### Changed

*   Add access widener for `CreativeModeInventoryScreen$SlotWrapper`

[v21.1.38-mc1.21.1] - 2025-08-11
----------------------------------

### Added

*   Add `PackRepositorySourcesContext::registerBuiltInPack`
*   Support built-in packs in `DataProviderHelper`

[v21.1.37-mc1.21.1] - 2025-08-05
----------------------------------

### Fixed

*   Fix `ShieldBlockCallback` being called even when not actively blocking on NeoForge

[v21.1.36-mc1.21.1] - 2025-05-04
----------------------------------

### Changed

*   Allow `DataProviderHelper` to support `RegistrySetBuilder`

[v21.1.35-mc1.21.1] - 2025-05-04
----------------------------------

### Removed

*   Remove unused breathing and drowning event implementations on Fabric to improve compatibility with Lunar Client

[v21.1.34-mc1.21.1] - 2025-04-25
----------------------------------

### Changed

*   Improve compatibility with other mods injecting into the `Gui` class on Fabric

[v21.1.33-mc1.21.1] - 2025-03-16
----------------------------------

### Fixed

*   Fix `ModelPart$Vertex` & `ModelPart$Polygon` being inaccessible on NeoForge

[v21.1.32-mc1.21.1] - 2025-03-14
----------------------------------

### Changed

*   Add a bunch of safety checks for casting in event invokers

[v21.1.31-mc1.21.1] - 2025-03-13
----------------------------------

### Added

*   Add `ModConstructor::onRegisterGameplayContent`
*   Add `ModelLocationHelper` & `ModelTemplateHelper`
*   Add `ResourceKeyHelper`
*   Add `AbstractDatapackRegistriesProvider`

[v21.1.30-mc1.21.1] - 2025-03-11
----------------------------------

### Fixed

*   Fix a rare start-up crash when registering generated config translations on NeoForge

[v21.1.29-mc1.21.1] - 2025-03-09
----------------------------------

### Fixed

*   Fix CommonAbstractions::hasChannel crashing for invalid players on NeoForge

[v21.1.28-mc1.21.1] - 2025-02-25
----------------------------------

### Added

*   Backport new block, item and creative mode tab registration methods to `RegistryManager`
*   Backport `CompostableBlocksContext`

### Changed

*   Update `FabricEventFactory` to handle faulty return values more leniently

[v21.1.27-mc1.21.1] - 2025-01-17
----------------------------------

### Fixed

*   Fix network packets executing with one tick delay on Fabric

[v21.1.26-mc1.21.1] - 2025-01-16
----------------------------------

### Changed

*   Allow setting empty lines for `TooltipBuilder` to prevent the tooltip from drawing

### Fixed

*   Fix unable to set a new widget tooltip using vanilla methods when `TooltipBuilder` has been used for the widget

[v21.1.25-mc1.21.1] - 2025-01-10
----------------------------------

### Fixed

*   Avoid unnecessarily high memory usage from holding on to top level model locations after model events have completed
*   Wrap `BlockStateModelLoader` in a `WeakReference` to avoid holding on to it when it is no longer needed

[v21.1.24-mc1.21.1] - 2024-12-22
----------------------------------

### Changed

*   Adjust `RangedSliderButton` implementation to no longer require an access widener to help compatibility with the [Cloth Config](/linkout?remoteUrl=https%253a%252f%252fmodrinth.com%252fmod%252fcloth-config) mod

[v21.1.23-mc1.21.1] - 2024-10-24
----------------------------------

### Changed

*   Support using `AbstractTagAppender` as string list builder

[v21.1.22-mc1.21.1] - 2024-10-22
----------------------------------

### Added

*   Add `ChangeEntitySizeCallback`
*   Add `RegistryManager::registerAttribute`

### Changed

*   Expand `LivingEntityRenderLayersContext` with some additional methods

[v21.1.21-mc1.21.1] - 2024-10-10
----------------------------------

### Changed

*   Allow `PlayerSet` to handle a provided client level more leniently

[v21.1.20-mc1.21.1] - 2024-10-10
----------------------------------

### Added

*   Add `CommonAbstractions::getPartEntityParent`

### Fixed

*   Fix removed data attachments failing to synchronize to clients

[v21.1.19-mc1.21.1] - 2024-10-05
----------------------------------

### Changed

*   Replace `ClientParticleTypes` with `ClientParticleHelper`

[v21.1.18-mc1.21.1] - 2024-10-04
----------------------------------

### Changed

*   Add more helper methods to `GuiGraphicsHelper`

### Fixed

*   Fix `DynamicPackResources` failing to generate some resources

[v21.1.17-mc1.21.1] - 2024-10-01
----------------------------------

### Added

*   Add `ClientAbstractions::hasChannel` & `CommonAbstractions::hasChannel`

### Changed

*   Network messages are no longer sent to clients & servers that do not understand them

[v21.1.16-mc1.21.1] - 2024-09-30
----------------------------------

### Changed

*   `RenderGuiLayerEvents` no longer fire when the hud is hidden via `F1`

[v21.1.15-mc1.21.1] - 2024-09-30
----------------------------------

### Changed

*   Slight `RenderGuiEvents` adjustments

### Fixed

*   Fix some gui layers from other mods failing to render

[v21.1.14-mc1.21.1] - 2024-09-29
----------------------------------

### Added

*   Add `RenderGuiEvents`, replacing `RenderGuiCallback`

[v21.1.13-mc1.21.1] - 2024-09-29
----------------------------------

### Changed

*   Overhaul `RenderGuiLayerEvents` implementation on Fabric

[v21.1.12-mc1.21.1] - 2024-09-29
----------------------------------

### Added

*   Add `NeoForgeCapabilityHelper::registerItemContainer`
*   Add `GuiGraphicsHelper::blitTiledSprite`
*   Add a bunch of helper methods to `ClientAbstractions` for handling `Gui#leftHeight` & `Gui#rightHeight`

### Changed

*   Minor `ConfigTranslationsManager` improvements

### Removed

*   Remove `ModLoaderEnvironment::getObjectShareAccess`

[v21.1.11-mc1.21.1] - 2024-09-25
----------------------------------

### Added

*   Add `CodecExtras`
*   Add some helper methods to `ItemModelDisplayOverrides`
*   Add enum helpers to `ExtraStreamCodecs`
*   Add some helper methods to `CreativeModeTabConfigurator`
*   Add helper methods to `ShapesHelper` for rotating shapes horizontally

### Changed

*   Allow for compatibility with Minecraft 1.21 on Fabric if enabled via [dependency overrides](/linkout?remoteUrl=https%253a%252f%252ffabricmc.net%252fwiki%252ftutorial%253adependency_overrides)
*   Allow `RegistryManager::registerBlockItem` to take an `Item$Properties` supplier

### Fixed

*   Fix `RenderHighlightCallback` crashing on NeoForge

[v21.1.10-mc1.21.1] - 2024-09-20
----------------------------------

### Changed

*   Allow `ItemModelDisplayOverrides` to accept both `ResourceLocation` as well as `ModelResourceLocation`

[v21.1.9-mc1.21.1] - 2024-09-18
---------------------------------

### Added

*   Add `TooltipBuilder::setTooltipLineProcessor`

[v21.1.8-mc1.21.1] - 2024-09-18
---------------------------------

### Changed

*   Pass original `ClientTooltipPositioner` to tooltip positioner factory in `TooltipBuilder`

[v21.1.7-mc1.21.1] - 2024-09-17
---------------------------------

### Fixed

*   Fix `LivingDropsCallback` failing to capture player drops on Fabric
*   Fix some keybinds failing to trigger properly on Fabric

[v21.1.6-mc1.21.1] - 2024-09-17
---------------------------------

### Changed

*   Overhaul `AbstractRegistriesDatapackGenerator` so that generated registry values can be used in other data providers

[v21.1.5-mc1.21.1] - 2024-09-16
---------------------------------

### Added

*   Add new data attachment api

### Changed

*   Revert codec support for capabilities, use attachments for that
*   Rename `PlayerSet::notify` to `PlayerSet::broadcast`

[v21.1.4-mc1.21.1] - 2024-09-14
---------------------------------

### Changed

*   Support codecs for capabilities
*   Simplify `ModelLayerFactory` implementation

[v21.1.3-mc1.21.1] - 2024-09-13
---------------------------------

### Added

*   Add `ScreenSkipper`
*   Add `GsonCodecHelper`
*   Add `TagFactory`

[v21.1.2-mc1.21.1] - 2024-09-12
---------------------------------

### Added

*   Add `RegistryManager::registerTrimMaterial` and `RegistryManager::registerLootTable`

[v21.1.1-mc1.21.1] - 2024-09-11
---------------------------------

### Added

*   Add `RegistryManager::registerDataComponentType`

### Changed

*   Minor updates for `ConfigTranslationsManager`
*   Hide some annoying toast messages in development environments

### Removed

*   Remove `BlockEntityHelper`

[v21.1.0-mc1.21.1] - 2024-09-10
---------------------------------

*   Port to Minecraft 1.21.1

## Moonlight Lib
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/selene)

### moonlight-1.21.1-3.6.3-neoforge
*   added api to add loom supported items
*   config improvements

### moonlight-1.21.1-3.6.1-neoforge
api improvements some compat with sable and its sublevels when it comes to collisions for our projectiles

## Torchmaster
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/torchmaster)

### torchmaster-neoforge-1.21.1-21.1.12
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

### torchmaster-neoforge-1.21.1-21.1.11
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

## MES - Moog's End Structures
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/moogs-end-structures)

### Moog's End Structures 2.1.0-1.21+ [UNIVERSAL]
### Added

*   Every mega ship now has a proper crew. Each intact ship is led by a captain, backed by sword-carrying guards and archers, all kitted out in armoured gear with trims
*   Two of the deepslate ships now fly decorated banners
*   Every structure now has its own toggle, spacing slider and preview button in the mod's config screen

### Changed

*   Ship crews are rolled fresh every time a ship generates
*   The crashed mega ships now get buried into the terrain they generate in instead of on top. This makes generation look a lot more natural
*   Mega ship treasure chests hand out fewer netherite ingots, noticeably fewer end crystals, and nether stars are now a genuinely rare find
*   The overgrown vines on the placid prairie have been trimmed back to varied lengths
*   Every structure has been rebuilt for each Minecraft version it supports, fixing a range of small visual and loading problems
*   The pack now loads on Minecraft 26.2

### Fixed

*   A few chests that always held the exact same handful of items now roll real loot, like every other chest in the mod
*   Chests and barrels that generated completely empty now hold proper loot
*   Brushing suspicious sand now turns up End themed finds. It used to give nothing at all

## Epic RPG: Legendary Titles
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/legendary-titles)

### legendarytitles-neo-1.21.1-2.0.0
Perks have arrived in Neo!

*   The new Perk system has been added
*   Plus all the changes from Forge version 2.0

## Sophisticated Core
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/sophisticated-core)

### sophisticatedcore-1.21.1-1.5.1.2341.jar
### Features

*   Updated Chinese (Simplified) translation (Thanks ZHAY10086)

### sophisticatedcore-1.21.11-1.5.0.2340.jar
### Features

*   Updated Chinese (Simplified) translation (Thanks ZHAY10086)

### sophisticatedcore-1.21.4-1.5.0.2336.jar
### Features

*   Updated Chinese (Simplified) translation (Thanks ZHAY10086)

### sophisticatedcore-1.21.5-1.5.0.2338.jar
### Features

*   Updated Chinese (Simplified) translation (Thanks ZHAY10086)

### sophisticatedcore-1.21.10-1.5.0.2339.jar
### Features

*   Updated Chinese (Simplified) translation (Thanks ZHAY10086)

### sophisticatedcore-1.21.1-1.5.1.2333.jar
### Features

*   Added linked storage to SB Create integration

### sophisticatedcore-1.21.4-1.5.0.2317.jar
### Features

*   Added linked storage support

### sophisticatedcore-1.21.8-1.5.0.2323.jar
### Features

*   Added linked storage support

### sophisticatedcore-1.21.5-1.5.0.2318.jar
### Features

*   Added linked storage support

### sophisticatedcore-1.21.10-1.5.0.2321.jar
### Features

*   Added linked storage support

### sophisticatedcore-1.21.11-1.5.0.2319.jar
### Features

*   Added linked storage support

### sophisticatedcore-1.21.1-1.5.0.2322.jar
### Features

*   Added linked storage support

### sophisticatedcore-1.21.11-1.4.97.2313.jar
### Fixes

*   Fixed recipe restocking for recipes with many ingredient alternatives

### sophisticatedcore-1.21.5-1.4.82.2310.jar
### Fixes

*   Fixed recipe restocking for recipes with many ingredient alternatives

### sophisticatedcore-1.21.4-1.4.84.2309.jar
### Fixes

*   Fixed recipe restocking for recipes with many ingredient alternatives

### sophisticatedcore-1.21.10-1.4.95.2312.jar
### Fixes

*   Fixed recipe restocking for recipes with many ingredient alternatives

### sophisticatedcore-1.21.8-1.4.86.2311.jar
### Fixes

*   Fixed recipe restocking for recipes with many ingredient alternatives

## KubeJS
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/kubejs)

### KubeJS NeoForge 2101.7.2-build.377
[https://kubejs.com/changelog?mc=1.21.1](/linkout?remoteUrl=https%253a%252f%252fkubejs.com%252fchangelog%253fmc%253d1.21.1)

## Corail Tombstone
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/corail-tombstone)

### Corail Tombstone 9.5.6 for 1.21.1 [NeoForge]
_**This mod supports mc version from 1.8.9 to 26.2  
Minecraft Version = [1.21.1] - NeoForge Version [21.+] - Java 21  
Latest : 9.5.6 - Recommended : 9.5.6**__**  
Changes 9.5.6:  
**_- fixes xp restoration on death with high level count (integer overflow)_**  
Changes 9.5.5:  
**_- compatibility Create Aeronautics (respawn on vehicule, issue 351)_**  
Changes 9.5.4:  
**_- ritual flute melodies now play automatically on the correct block once learned (the ritual flute screen is removed)  
- rewrote most lore stories (some objectives may have changed)_**  
Changes 9.5.3:  
**_- new lore "The Nights of Nour": the Endless Storyteller has left her parchments scattered across the desert, and an ancient lamp seems to interest the undead roaming there. A very special carpet might be offered to you_**  
Changes 9.5.2:  
**_- Grave Guardian trades are now data-driven  
-> cost/reward items can simply be item/count or a loot entry (so also a loottable)  
-> If you want to add new trades with a datapack, you can check the default trades as examples (in folder /data/tombstone/grave_guardian_trades)  
- adapts readable scrolls to be less cryptic (and command /tbreadable)  
- updates dutch lang  
- fixes guiscale being changed when opening guiscreen (issue 349)_**  
Changes 9.5.1:  
**_- About Grave Guardian trades:  
 - trades will no longer reset entirely if a single trade can't be loaded (from a removed mod's item)  
 - trades for items disabled via config now show as "out of stock" instead of being removed or replaced, and will work again automatically if the item is re-enabled  
 - trade restocking now depends on each trade's behavior: some trades gradually regain stock over time, others swap to a new offer once exhausted, and some always swap offers on restock  
 - updates all trades to be more dynamic  
- cyclable options in screen config are translatable (with text scrolling if needed)  
- re-adds the crafting recipe to set a capturable type on receptacle of familiar  
- ingredients from coded recipes are put correctly in the crafting grid when clicking the recipe in the recipe book (enchanted grave key & receptacle of familiar with a capturable type)  
- added russian translation (courtesy of lNullCatl)  
- fixes command /tbrecovery (issue 347)_**  
Changes 9.5.0:  
**_- new item Bone Scepter allowing to force tamed undeads to sit  
- overhauled Grave Guardian trades system  
- Grave Guardian trades now update immediately when forcing a special event via config  
- some Grave Guardian trades now have specific restock behaviors  
- new spellcasting animation for tamed undeads & Grave Guardian  
- improves AI goals  
- fixes automatic player backup not happening (condition never true, since 9.4.7)

## More Quest Types
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/more-quest-types)

### More Quest Types [NEOFORGE] [1.21.1] - [1.3.8]
Updated FTBQuests .30 -> .34 fixing the crash with quest panel Fixed LevelZ compat Updated Reskillable compat to the latest version + Fabric Compat

### More Quest Types [NEOFORGE] [1.21.1] - [1.3.7]
Updated Puffish Skills compat v0.19.0

## Quests Visual
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/questsvisual)

### QuestsVisual-1.21.1-1.0.39.jar
Added new structures

## MoreCulling
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/moreculling)

### v1.0.10
*   Fix #455 farmers delight basket culling incorrectly
*   Fix #469 crash on loading screen

## Complementary Shaders - Reimagined
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/complementary-reimagined)

### Complementary Reimagined r5.9
Another major Complementary update is out now. This time mainly focusing on polishing the general experience. Aside from fully supporting Minecraft 26.2 features like the special fog in Sulfur Caves; r5.9 brings improved frame rates, tweaked daytime sky, complete volumetric reflection support for the End, more control over shader settings, rebalanced higher performance profiles, a bunch of tweaks, improvements, and a ton of bug fixes as always.  
  
The full list of changes can be found at [https://www.complementary.dev/changelogs](/linkout?remoteUrl=https%253a%252f%252fwww.complementary.dev%252fchangelogs)
_________________

Changelog generated by [CF-Changelog-Generator](https://github.com/Charismara/CF-Changelog-Generator)