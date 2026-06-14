ServerEvents.tags('item', event => {

	//Souls for Soul Receptacle
	event.add(
		'c:souls',
		'endrem:undead_soul'
	)

	// Pearls for Pearl Necklaces etc
	event.add('c:pearls',
		'crittersandcompanions:pearl'
	)

	// Eyes tags for Enderman Overhaul recipes plus an FTB Filter system quest
	event.add('c:eyes',
		'endrem:evil_eye',
		'endrem:cursed_eye',
		'endrem:rogue_eye',
		'endrem:old_eye',
		'endrem:nether_eye',
		'endrem:lost_eye',
		'endrem:corrupted_eye',
		'endrem:cold_eye',
		'endrem:black_eye',
		'endrem:guardian_eye',
		'endrem:magical_eye',
		'endrem:wither_eye',
		'endrem:witch_eye',
		'endrem:undead_eye',
		'endrem:exotic_eye'
	)

	//Strawberry tagging for Bakery Recipes
	event.add('c:fruits/strawberries',
		'mysticsbiomes:sweet_strawberry')

	// Organic materials for Compost Recipe
	event.add('c:compost',
		'farmersdelight:organic_compost', 
		'farm_and_charm:compost',
		'farmersdelight:tree_bark',
		'minecraft:rotten_flesh',
		'mysticsbiomes:maple_leaf_pile',
		'mysticsbiomes:orange_maple_leaf_pile',
		'mysticsbiomes:yellow_maple_leaf_pile',
		'regions_unexplored:maple_leaf_pile',
		'regions_unexplored:red_maple_leaf_pile',
		'regions_unexplored:orange_maple_leaf_pile',
		'regions_unexplored:enchanted_birch_leaf_pile',
		'regions_unexplored:silver_birch_leaf_pile'
	)

	// Dirt for Compost Recipe
	event.add('c:dirt',
		'minecraft:dirt',
		'minecraft:coarse_dirt',
		'minecraft:rooted_dirt',
		'minecraft:podzol')

	//Salmonberries
	event.add('c:fruits/salmonberries',
		'regions_unexplored:salmonberry'
	)

	//Jam Tagging
	event.add('c:jams',
		'bakery:strawberry_jam',
		'bakery:sweetberry_jam',
		'bakery:glowberry_jam',
		'bakery:apple_jam'
	)

	//Barley
	event.add('c:crops/barley',
		'regions_unexplored:barley'
	)

	//Sea Crystals
	event.add('c:sea_crystals',
		'mermod:sea_crystal',
		'mermod:deep_sea_crystal_modifier',
		'minecraft:prismarine_crystals'
	)

	//Terrestrial Crystals
	event.add('c:terrestrial_crystals',
		'minecraft:amethyst_shard'
	)

	//Syrups
	event.add('supplementaries:pancake_syrup',
		'hearthandharvest:syrup_bottle'
	)

	//Glowberry jams
	event.add('c:glowberry_jam',
		'bakery:glowberry_jam'
	)

	//strawberries
	event.add('c:strawberries',
		'mysticsbiomes:sweet_strawberry'
	)

	event.add('c:fruits/strawberries',
		'farm_and_charm:strawberry'
	)

	//bun tag to bun

	event.add('c:bread_or_bun',
		'bakery:bun'
	)

	event.add('c:cheese',
		'hearthandharvest:cheddar_cheese_slice',
		'hearthandharvest:goat_cheese_slice'
	)

	event.add('c:cheese_slices',
		'hearthandharvest:cheddar_cheese_slice',
		'hearthandharvest:goat_cheese_slice',
		'meadow:piece_of_sheep_cheese',
		'meadow:piece_of_grain_cheese',
		'meadow:piece_of_amethyst_cheese',
		'meadow:piece_of_buffalo_cheese',
		'meadow:piece_of_warped_cheese'
	)

	event.add('twilightforest:kobold_pacification_breads',
		'delightful:cantaloupe_bread',
		'bakery:braided_bread',
		'bakery:crusty_bread',
		'bakery:toast',
		'bakery:baguette',
		'bakery:bread',
		'autumnity:pumpkin_bread',
		'farmersrespite:nether_wart_sourdough',
	)

	event.add('c:bread_or_bun',
		'bakery:braided_bread',
		'bakery:crusty_bread',
		'bakery:toast',
		'bakery:baguette',
		'bakery:bread',
	)

	event.add('c:cooking_eggs',
		'minecraft:egg',
		'mysticsbiomes:pink_egg',
		'mysticsbiomes:orange_egg',
		'mysticsbiomes:yellow_egg',
		'mysticsbiomes:lime_egg',
		'mysticsbiomes:cyan_egg',
		'mysticsbiomes:purple_egg',
		'autumnity:turkey_egg'
	)

	//Clovers
	event.add('c:clover',
		'regions_unexplored:clover', 
		'twilightforest:clover_patch'
	)

	//Nut Butters
	event.add('c:nut_butter',
		'hearthandharvest:peanut_butter'
	)

	//H&H Jelly to Tag
	event.add('c:jams',
		'hearthandharvest:grape_jam', 
		'hearthandharvest:blueberry_jam', 
		'hearthandharvest:raspberry_jam'
	)
})