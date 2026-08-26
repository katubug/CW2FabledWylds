// kubejsstudio recipes; re-apply merges by recipe id
ServerEvents.recipes(event => {
    event.shapeless('kubejs:silverwood_sapling', ['#minecraft:saplings', 'thaumon:mutagen']).id('kubejsstudio:silverwood_sapling')
    event.shapeless('kubejs:greatwood_sapling', ['#minecraft:saplings', 'thaumon:mutagen']).id('kubejsstudio:greatwood_sapling')
})
