ServerEvents.recipes(event => {
	// Filled Eccentric tome
	//TODO: fix this!!
	let tome = 'minecraft:stick';
	event.shapeless(
		Item.of(tome),
		[
			'minecraft:book',
			'minecraft:stick'
		]
	)

	//Hanging Pot uses rope tag
	event.shaped(
		Item.of('beautify:hanging_pot'),
		[
			' A ',
			' B '
		], {
			A: '#supplementaries:ropes',
			B: 'minecraft:flower_pot'
		}
	)


	// Palette
	event.shaped(
		Item.of('xercapaint:item_palette'),
		[
			'AA ',
			'AA '
		], {
			A: '#minecraft:wooden_slabs'
		}
	)

	//Adding in QOL Dirt Recipes
	event.shapeless(
			Item.of('minecraft:dirt'), // arg 1: output
			[
				'regions_unexplored:ashen_dirt'
			]
		),
		event.shapeless(
			Item.of('minecraft:dirt'), // arg 1: output
			[
				'regions_unexplored:peat_dirt'
			]
		),
		event.shapeless(
			Item.of('minecraft:coarse_dirt'), // arg 1: output
			[
				'regions_unexplored:peat_coarse_dirt'
			]
		),
		event.shapeless(
			Item.of('minecraft:dirt'), // arg 1: output
			[
				'regions_unexplored:silt_dirt'
			]
		),
		event.shapeless(
			Item.of('minecraft:coarse_dirt'), // arg 1: output
			[
				'regions_unexplored:silt_coarse_dirt'
			]
		),
		event.shapeless(
			Item.of('minecraft:dirt'), // arg 1: output
			[
				'regions_unexplored:argillite'
			]
		),

		event.shaped('8x regions_unexplored:silt_dirt', [
			'AAA',
			'ABA',
			'AAA'
		], {
			A: 'minecraft:dirt',
			B: 'regions_unexplored:barley'
		}),
		event.shaped('8x regions_unexplored:peat_dirt', [
			'AAA',
			'ABA',
			'AAA'
		], {
			A: 'minecraft:dirt',
			B: 'regions_unexplored:blackwood_sapling'
		}),
		event.shaped('8x regions_unexplored:argillite', [
			'AAA',
			'ABA',
			'AAA'
		], {
			A: 'minecraft:dirt',
			B: 'regions_unexplored:dropleaf'
		})

	
	    // Pipez Item Pipe
	    event.shaped(
	        Item.of('pipez:item_pipe', 16),
	        [
	            'AAA',
	            'BBB',
	            'AAA'
	        ], {
	            A: 'minecraft:copper_ingot',
	            B: 'minecraft:redstone'
	        }
	    )

	//Dusky Myalite obtainable
	event.shaped(
		Item.of('quark:dusky_myalite', 8),
		[
			'AAA',
			'ABA',
			'AAA'
		], {
			A: 'quark:myalite',
			B: 'hexerei:moon_dust'
		}
	)
/*
		//tier 1 lens
	event.shaped(
		Item.of('exposure_space:normal_telescopic_lens'),
		[
			'ABA',
			'BCB',
			'ABA'
		], {
			A: 'minecraft:amethyst_shard',
			B: 'minecraft:iron_ingot',
			C: 'minecraft:glass_pane'
		}
	)*/

	//Myalite Crystals obtainable
	event.shaped(
		Item.of('quark:myalite_crystal', 8),
		[
			'AAA',
			'ABA',
			'AAA'
		], {
			A: '#quark:corundum',
			B: 'enchanted:mutandis'
		}
	)

	event.smelting('hearthandharvest:syrup_bottle', 'autumnity:sap_bottle')

	//Saddles

	event.shaped(
		Item.of('minecraft:saddle'),
		[
			' A ',
			'ABA'
		], {
			A: 'minecraft:leather',
			B: 'minecraft:iron_nugget'
		}
	)

	
})