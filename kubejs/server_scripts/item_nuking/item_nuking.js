// Item list is defined in startup_scripts/nuked_items.js

// Remove all recipes that OUTPUT a nuked item
ServerEvents.recipes(event => {
    for (const item of global.NUKED_ITEMS) {
        event.remove({ output: item })
    }

    // Edge cases
    event.remove({ id: 'farm_and_charm:seeds_corn' })
    event.remove({ id: 'farm_and_charm:stove/roasted_corn' })
})

// Strip all tags from nuked items
ServerEvents.tags('item', event => {
    for (const item of global.NUKED_ITEMS) {
        event.removeAllTagsFrom(item)
    }
})

// Remove nuked items from all chest loot tables
LootJS.modifiers(event => {
    let nukedSet = new Set(global.NUKED_ITEMS)
    event.addTableModifier(LootType.CHEST).removeLoot(ItemFilter.custom(item => nukedSet.has(item.id)))
})
