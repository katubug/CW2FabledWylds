ItemEvents.foodEaten(event => {

    let bottlelessTeas = [ 'farm_and_charm:ribwort_tea', 'farm_and_charm:strawberry_tea'];

    const {player, server} = event;
    if (bottlelessTeas.includes(event.item.id)) {
            event.player.give(Item.of('minecraft:glass_bottle'))
    }
})