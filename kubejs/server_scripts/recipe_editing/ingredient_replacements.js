ServerEvents.recipes(event => {
	//Recipe Replacements

	// Ingredient replacements for custom recipe types
	// (replaceInput doesn't work on these, so we parse the JSON and rebuild)
	const customReplacements = [
		{ from: 'farm_and_charm:bacon',         to: 'farmersdelight:bacon' },
		{ from: 'farm_and_charm:chicken_parts', to: 'farmersdelight:chicken_cuts' },
		{ from: 'farm_and_charm:onion',         to: 'farmersdelight:onion' },
		{ from: 'farm_and_charm:tomato',        to: 'farmersdelight:tomato' },
		{ from: 'farm_and_charm:corn',          to: 'hearthandharvest:corn' },
		{ from: 'farm_and_charm:lamb_ham',      to: 'farmersdelight:mutton_chops' },
		{ from: 'farm_and_charm:minced_beef',   to: 'farmersdelight:minced_beef' },
		{ from: 'farm_and_charm:raw_pasta',     to: 'farmersdelight:raw_pasta' },
	]

	const customRecipeTypes = [
		'farm_and_charm:roaster',
		'farm_and_charm:crafting_bowl',
		'farm_and_charm:mincer',
		'farm_and_charm:pot_cooking',
		'farm_and_charm:stove',
		'meadow:cooking',
	]

	for (const type of customRecipeTypes) {
		event.forEachRecipe({ type }, r => {
			const json = JSON.parse(r.json.toString())
			let changed = false

			// some types use "ingredient" (singular object), others use "ingredients" (array)
			const ings = json.ingredients ? json.ingredients : json.ingredient ? [json.ingredient] : []

			for (let ing of ings) {
				for (const rep of customReplacements) {
					if (ing.item === rep.from || ing.tag === rep.from) {
						delete ing.item
						delete ing.tag
						ing.item = rep.to
						changed = true
						break
					}
				}
			}

			if (changed) {
				event.remove({ id: r.getId() })
				event.custom(json).id(r.getId())
			}
		})
	}

	//flour 2
	event.replaceInput({
			input: 'create:wheat_flour'
		}, 
		'create:wheat_flour', 
		'#c:flour' 
	)


	//dough
	event.replaceInput({
			input: 'farm_and_charm:dough'
		},
		'farm_and_charm:dough',
		'#c:foods/dough/wheat'
	)

	//dough 2
	event.replaceInput({
			input: 'create:dough'
		},
		'create:dough',
		'#c:foods/dough/wheat'
	)

	//sulfur
	event.replaceInput({
			input: 'minecraft:sulfur'
		}, 
		'minecraft:sulfur', 
		'#fabled_wylds:sulfur' 
	)

	//sulfur
	event.replaceInput({
			input: 'betterend:crystalline_sulphur'
		}, 
		'betterend:crystalline_sulphur', 
		'#fabled_wylds:sulfur' 
	)

	//salt
	event.replaceInput({
			input: 'hexalia:salt'
		}, 
		'hexalia:salt', 
		'#c:dusts/salt' 
	)
	event.replaceInput({
			input: 'meadow:alpine_salt'
		}, 
		'meadow:alpine_salt', 
		'#c:dusts/salt' 
	)
	event.replaceInput({
			input: 'hearthandharvest:salt'
		}, 
		'hearthandharvest:salt', 
		'#c:dusts/salt' 
	)

	//Strawberries
	event.replaceInput({
			input: 'mysticsbiomes:strawberry'
		}, 
		'mysticsbiomes:strawberry', 
		'#c:fruits/strawberries' 
	)

	//Recipe Replacements
	//Strawberries
	event.replaceInput({
			input: 'farm_and_charm:strawberry'
		}, 
		'farm_and_charm:strawberry', 
		'#c:fruits/strawberries' 
	)

	//Belladonna Flowers
	event.replaceInput({
			input: 'enchanted:belladonna_flower'
		}, 
		'enchanted:belladonna_flower', 
		'hexerei:belladonna_flowers' 
	)


	//Cheese Slices
	event.replaceInput({
			input: 'trailandtales_delight:cheese_slice'
		}, 
		'trailandtales_delight:cheese_slice', 
		'#c:cheese_slices' 
	)

	//Bread
	event.replaceInput({
			input: 'minecraft:bread'
		}, 
		'minecraft:bread', 
		'#c:bread_or_bun' 
	)

	//cherries
	event.replaceInput({
			input: 'mysticsbiomes:cherries'
		}, 
		'mysticsbiomes:cherries', 
		'hearthandharvest:cherry' 
	)

	//Eggs
	event.replaceInput({
			input: '#c:eggs'
		},
		'#c:eggs',
		'#c:cooking_eggs'
	)


})
