ServerEvents.recipes(event => {

    // All Recipe Removal
    let toRemove = [
        //Removed Recipes
        { id: 'farm_and_charm:stove/improved_bread'},
        { id: 'quark:tweaks/crafting/utility/bent/bread'},
        { id: 'utilitarian:utility/bread'},
        { id: 'hearthandharvest:flour_dough_from_water_bottle'},
        { id: 'hearthandharvest:flour_dough_from_water_bucket'},
        { id: 'hearthandharvest:flour_dough_from_egg'},
        { id: 'farmersdelight:wheat_dough_from_egg'},
        { id: 'minecraft:bread'},
        { id: 'create:smelting/bread'},
        { id: 'create:smoking/bread'},
        { id: 'create:campfire_cooking/bread'},
        { id: 'create:mixing/chocolate_melting'},   // create bar suppressed; bar→fluid melt route removed
        { id: 'regions_unexplored:barley_smelting'},
        { id: 'regions_unexplored:barley_smoking'},
        { id: 'hexalia:string_from_mortar_and_pestle'},
        { id: 'conditional:farm_and_charm/mincer/alpine_salt_from_mincer'},
        //Replaced Recipes
        {id: 'farmersdelight:wheat_dough_from_water'},
        {id: 'farmersdelight:wheat_dough_from_eggs'},
        {output: 'meadow:oil_lantern'},
        {output: 'beautify:hanging_pot'},
        {output: 'tarotcards:tarot_deck'},
        {mod: 'plushie_buddies'},
        {id: 'netherdepthsupgrade:eyeball'},
        {id: 'netherdepthsupgrade:fortress_grouper_plate'},
        {output: 'minecraft:brush'},
        {output: 'betterarcheology:iron_brush'},
        {output: 'betterarcheology:diamond_brush'},
        {output: 'minecraft:cake'},
        {id: 'farm_and_charm:pot_cooking/nettle_tea'},
        {id: 'farm_and_charm:meadow/cooking/nettle_tea'},
        {output: 'malum:spectral_lens'},
        {id: 'hexerei:leather_from_drying_rack'},
        //{type: 'meadow:cooking'},
        {type: 'enchanted:witch_cauldron'},
        //{type: 'farm_and_charm:pot_cooking'},
        {id: 'hexerei:mahogany_broom_from_mixing_cauldron'},
        {id: 'hexerei:willow_broom_from_mixing_cauldron'},
        {id: 'hexerei:witch_hazel_broom_from_mixing_cauldron'},
        {output: 'hexerei:pestle_and_mortar'},
        {output: 'hexerei:mixing_cauldron'},
        {id: 'farmersdelight:cooking/unripe_cheddar_cheese_wheel'},
        {id: 'farmersdelight:cooking/unripe_goat_cheese_wheel'},
        {output: 'wardrobe:silk'},
        {output: 'bakery:strawberry_cake'},
        {output: 'minecraft:cake'},
        {output: 'trailandtales_delight:cherry_cake'},
        {output: 'hearthandharvest:carrot_cake'},
        {output: 'mysticsbiomes:vanilla_cake'},
        {output: 'mysticsbiomes:pink_frosted_cake'},
        {output: 'mysticsbiomes:purple_frosted_cake'},
        {output: 'farmersrespite:coffee_cake'},
        {output: 'mysticsbiomes:cyan_frosted_cake'},
        {output: 'mysticsbiomes:orange_frosted_cake'},
        {output: 'mysticsbiomes:yellow_frosted_cake'},
        {output: 'mysticsbiomes:lime_frosted_cake'},
        {output: 'mysticsbiomes:chocolate_cake'},
        {output: 'mysticsbiomes:strawberry_cake'},
        {output: 'mysticsbiomes:peach_pie'},
        {output: 'mysticsbiomes:cherry_pie'},
        {output: 'hexalia:chillberry_pie'},
        {output: 'farmersdelight:chocolate_pie'},
        {output: 'farmersrespite:green_tea_cookie'},
        {output: 'farmersdelight:sweet_berry_cookie'},
        {output: 'bakery:chocolate_glazed_cookie'},
        {output: 'bakery:sweetberry_glazed_cookie'},
        {output: 'bakery:strawberry_glazed_cookie'},
        {output: 'hearthandharvest:peanut_butter_cookie'},
        {output: 'twilightdelight:torchberry_cookie'},
        {id: 'hearthandharvest:string_from_cotton'},
        {output: 'meadow:cooking_frame'}
    
    ];
    
      for (const remove of toRemove) {
        event.remove(remove);
    }

    event.remove({ output: 'minecraft:green_dye', type: 'minecraft:smoking' })
})