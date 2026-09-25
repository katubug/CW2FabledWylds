LootJS.modifiers((event) => {
    event
        .addBlockModifier('dreamwoods:ground_moss')
        .randomChance(0.5)
        .addLoot('roots:grove_spores')
})
