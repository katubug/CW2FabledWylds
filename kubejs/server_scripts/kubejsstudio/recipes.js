// kubejsstudio recipes; re-apply merges by recipe id
ServerEvents.generateData('after_mods', event => {
    event.json('kubejsstudio:recipe/dried_green_tea', {"type":"minecraft:smoking","ingredient":{"item":"herbalbrews:green_tea_leaf"},"result":{"id":"herbalbrews:dried_green_tea"},"experience":0.1,"cookingtime":100})
    event.json('kubejsstudio:recipe/dried_oolong_tea', {"type":"minecraft:smoking","ingredient":{"item":"herbalbrews:dried_green_tea"},"result":{"id":"herbalbrews:dried_oolong_tea"},"experience":0.1,"cookingtime":100})
    event.json('kubejsstudio:recipe/dried_black_tea', {"type":"minecraft:smoking","ingredient":{"item":"herbalbrews:dried_oolong_tea"},"result":{"id":"herbalbrews:dried_black_tea"},"experience":0.1,"cookingtime":100})
    event.json('kubejsstudio:recipe/dried_green_tea_leaf_block', {"type":"minecraft:smoking","ingredient":{"item":"herbalbrews:green_tea_leaf_block"},"result":{"id":"herbalbrews:dried_green_tea_leaf_block"},"experience":0.1,"cookingtime":100})
    event.json('kubejsstudio:recipe/oolong_tea_leaf_block', {"type":"minecraft:smoking","ingredient":{"item":"herbalbrews:dried_green_tea_leaf_block"},"result":{"id":"herbalbrews:oolong_tea_leaf_block"},"experience":0.1,"cookingtime":100})
    event.json('kubejsstudio:recipe/black_tea_leaf_block', {"type":"minecraft:smoking","ingredient":{"item":"herbalbrews:oolong_tea_leaf_block"},"result":{"id":"herbalbrews:black_tea_leaf_block"},"experience":0.1,"cookingtime":100})
})
ServerEvents.recipes(event => {
    event.shapeless('kubejs:silverwood_sapling', ['#minecraft:saplings', 'thaumon:mutagen']).id('kubejsstudio:silverwood_sapling')
    event.shapeless('kubejs:greatwood_sapling', ['#minecraft:saplings', 'thaumon:mutagen']).id('kubejsstudio:greatwood_sapling')
    event.shapeless('create:honeyed_apple', ['minecraft:apple', 'minecraft:honey_bottle']).id('kubejsstudio:honeyed_apple')
})
