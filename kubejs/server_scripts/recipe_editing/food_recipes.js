ServerEvents.recipes(event => {

	event.smelting('supplementaries:ash', 'minecraft:cooked_beef')

	//Cookpot Needed for Cooking Frame
	event.shaped('meadow:cooking_frame', [
		'SSS',
		'SCS',
		'SFS'
	], {
		S: 'minecraft:stick',
		C: 'meadow:cookpot',
		F: 'minecraft:campfire'
	})

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
			'#c:flours/wheat',
			'#c:flours/wheat',
			'minecraft:water_bucket',
			'farm_and_charm:yeast'
		]
	)

	// drying recipes
	event.custom({
		type: 'hexerei:drying_rack',
		input: [{
			item: 'herbalbrews:green_tea_leaf'
		}],
		output: {
			id: 'herbalbrews:dried_green_tea'
		},
		dryingTime: 600
	})

	event.custom({
		type: 'hexerei:drying_rack',
		input: [{
			item: 'trailandtales_delight:cherry_petal'
		}],
		output: {
			id: 'trailandtales_delight:dried_cherry_petal'
		},
		dryingTime: 600
	})

	event.custom({
		type: 'hexerei:drying_rack',
		input: [{
			item: 'betterend:end_lily_leaf'
		}],
		output: {
			id: 'betterend:end_lily_leaf_dried'
		},
		dryingTime: 600
	})

	event.custom({
		type: 'hexerei:drying_rack',
		input: [{
			item: 'herbalbrews:dried_green_tea'
		}],
		output: {
			id: 'herbalbrews:dried_oolong_tea'
		},
		dryingTime: 600
	})

	event.custom({
		type: 'hexerei:drying_rack',
		input: [{
			item: 'herbalbrews:dried_oolong_tea'
		}],
		output: {
			id: 'herbalbrews:dried_black_tea'
		},
		dryingTime: 600
	})

})