// Add mysticsbiomes:sweet_strawberry as a rare drop from Farm & Charm's strawberry crop
LootJS.modifiers((event) => {
    event
        .addBlockModifier('farm_and_charm:strawberry_crop')
        .randomChance(0.05)
        .addLoot('mysticsbiomes:sweet_strawberry')
})