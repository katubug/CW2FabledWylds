ServerEvents.recipes(event => {

	//Witchy Compost
	event.shapeless(
		Item.of('farmersdelight:organic_compost', 2),
		[
			'#c:dirt',
			'#supplementaries:straw',
			'#supplementaries:straw',
			'minecraft:bone_meal',
			'minecraft:bone_meal',
			'#c:compost',
			'#c:compost',
			'#c:compost',
			'#c:compost'
		]
	)

	//Slime Balls
	event.shapeless(
		Item.of('minecraft:slime_ball'),
		['#c:dyes/lime',
			'farmersdelight:wheat_dough'
		]
	)

	//Dough
	event.shapeless(
		Item.of('farmersdelight:wheat_dough', 3),
		[
			'#c:flour',
			'#c:flour',
			'minecraft:water_bucket',
			'farm_and_charm:yeast'
		]
	)

	//Recipes Use Cheese ======================================================
	
	//==================================================================

	//Dough conversion
	event.shapeless(
		Item.of('farmersdelight:wheat_dough'),
		[
			'farm_and_charm:dough'
		]
	)

	//Dough conversion 2
	event.shapeless(
		Item.of('farmersdelight:wheat_dough'),
		[
			'create:dough'
		]
	)

	//Dough conversion 3
	event.shapeless(
		Item.of('farmersdelight:wheat_dough'),
		[
			'cornexpansion:corn_dough'
		]
	)

	//Raw Pasta conversion
	event.shapeless(
		Item.of('farmersdelight:raw_pasta'),
		[
			'farm_and_charm:raw_pasta'
		]
	)
})