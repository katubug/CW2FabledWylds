ServerEvents.recipes(event => {
	//Recipe Replacements
	//Strawberries
	event.replaceInput({
			input: 'mysticsbiomes:strawberry'
		}, // Arg 1: the filter
		'mysticsbiomes:strawberry', // Arg 2: the item to replace
		'#c:fruits/strawberries' // Arg 3: the item to replace it with
	)

	//Recipe Replacements
	//Strawberries
	event.replaceInput({
			input: 'create:wheat_flour'
		}, // Arg 1: the filter
		'create:wheat_flour', // Arg 2: the item to replace
		'#c:flour' // Arg 3: the item to replace it with
	)

	//Strawberries 2
	event.replaceInput({
			input: 'farm_and_charm:strawberry'
		}, // Arg 1: the filter
		'farm_and_charm:strawberry', // Arg 2: the item to replace
		'#c:fruits/strawberries' // Arg 3: the item to replace it with
	)

	//Belladonna Flowers
	event.replaceInput({
		input: 'enchanted:belladonna_flower'
	}, // Arg 1: the filter
	'enchanted:belladonna_flower', // Arg 2: the item to replace
	'hexerei:belladonna_flowers' // Arg 3: the item to replace it with
	)


	//Cheese Slices
	event.replaceInput({
		input: 'trailandtales_delight:cheese_slice'
	}, // Arg 1: the filter
	'trailandtales_delight:cheese_slice', // Arg 2: the item to replace
	'#c:cheese_slices' // Arg 3: the item to replace it with
	)

	//Bread
	event.replaceInput({
		input: 'minecraft:bread'
	}, // Arg 1: the filter
	'minecraft:bread', // Arg 2: the item to replace
	'#c:bread_or_bun' // Arg 3: the item to replace it with
	)
	
	//cherries
	event.replaceInput({
		input: 'mysticsbiomes:cherries'
	}, // Arg 1: the filter
	'mysticsbiomes:cherries', // Arg 2: the item to replace
	'hearthandharvest:cherry' // Arg 3: the item to replace it with
	)

	//Eggs
	event.replaceInput({
		input: '#c:eggs'
	},
	'#c:eggs',
	'#c:cooking_eggs'
	)
	
	
})