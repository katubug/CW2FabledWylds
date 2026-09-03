/**
 * Diamond Loot Staging — Chest Loot Modifiers
 *
 * Reads the negative stages set by new_mechanics/diamond_staging.js
 * and strips the relevant items from all chest-type loot tables.
 *
 *   no_iron     → remove raw minecraft:diamond
 *   no_diamonds → remove all vanilla diamond equipment
 */

const DIAMOND_GEAR = new Set([
    'minecraft:diamond_sword',
    'minecraft:diamond_axe',
    'minecraft:diamond_pickaxe',
    'minecraft:diamond_shovel',
    'minecraft:diamond_hoe',
    'minecraft:diamond_helmet',
    'minecraft:diamond_chestplate',
    'minecraft:diamond_leggings',
    'minecraft:diamond_boots',
    'minecraft:diamond_horse_armor',
])

LootJS.modifiers(event => {

    // Gate 1: raw diamonds hidden until iron pickaxe advancement
    event.addTableModifier(LootType.CHEST)
        .hasAnyStage('no_iron')
        .removeLoot('minecraft:diamond')

    // Gate 2: diamond gear hidden until diamonds mined advancement
    event.addTableModifier(LootType.CHEST)
        .hasAnyStage('no_diamonds')
        .removeLoot(ItemFilter.custom(item => DIAMOND_GEAR.has(item.id)))
})
