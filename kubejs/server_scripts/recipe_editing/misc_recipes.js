ServerEvents.recipes(event => {
	// Filled Eccentric tome

	//all the books ingame as of 7/27/26:
	/* 
	'hexalia:verdant_grimoire'
	['hexerei:book_of_colors[hexerei:book={book:"hexerei:book_of_colors",bookmarks:[{color:"white",id:"",index:0},{color:"white",id:"",index:1},{color:"white",id:"",index:2},{color:"white",id:"",index:3},{color:"white",id:"",index:4},{color:"white",id:"",index:5},{color:"white",id:"",index:6},{color:"white",id:"",index:7},{color:"white",id:"",index:8},{color:"white",id:"",index:9},{color:"white",id:"",index:10},{color:"white",id:"",index:11},{color:"white",id:"",index:12},{color:"white",id:"",index:13},{color:"white",id:"",index:14},{color:"white",id:"",index:15},{color:"white",id:"",index:16},{color:"white",id:"",index:17},{color:"white",id:"",index:18},{color:"white",id:"",index:19}],chapter:0,opened:0b,page:0,uuid:[I;-1815762065,212028966,-1392564362,-829137014]}]', 'hexerei:notebook[hexerei:book={book:"hexerei:notebook",bookmarks:[{color:"white",id:"",index:0},{color:"white",id:"",index:1},{color:"white",id:"",index:2},{color:"white",id:"",index:3},{color:"white",id:"",index:4},{color:"white",id:"",index:5},{color:"white",id:"",index:6},{color:"white",id:"",index:7},{color:"white",id:"",index:8},{color:"white",id:"",index:9},{color:"white",id:"",index:10},{color:"white",id:"",index:11},{color:"white",id:"",index:12},{color:"white",id:"",index:13},{color:"white",id:"",index:14},{color:"white",id:"",index:15},{color:"white",id:"",index:16},{color:"white",id:"",index:17},{color:"white",id:"",index:18},{color:"white",id:"",index:19}],chapter:0,opened:0b,page:0,uuid:[I;863979964,-185121256,-2105476051,-406030229]}]', 'hexerei:book_of_shadows[hexerei:book={book:"hexerei:book_of_shadows",bookmarks:[{color:"white",id:"",index:0},{color:"white",id:"",index:1},{color:"white",id:"",index:2},{color:"white",id:"",index:3},{color:"white",id:"",index:4},{color:"white",id:"",index:5},{color:"white",id:"",index:6},{color:"white",id:"",index:7},{color:"white",id:"",index:8},{color:"white",id:"",index:9},{color:"white",id:"",index:10},{color:"white",id:"",index:11},{color:"white",id:"",index:12},{color:"white",id:"",index:13},{color:"white",id:"",index:14},{color:"white",id:"",index:15},{color:"white",id:"",index:16},{color:"white",id:"",index:17},{color:"white",id:"",index:18},{color:"white",id:"",index:19}],chapter:0,opened:0b,page:0,uuid:[I;2105842942,2018921124,-1571119892,-1787064787]}]', 'esquissemod:sketchbook', 'delighto_flight:cook_book', 'ftbquests:book', 'modopedia:book[modopedia:book="enchanted:art_of_witchcraft"]', 'adorablehamsterpets:hamster_guide_book', 'patchouli:guide_book[patchouli:book="twilightdelight:twilight_guide"]', 'patchouli:guide_book[patchouli:book="animal_pen:guide_book"]', 'starcatcher:starcatcher_guide', 'fieldguide:field_guide', 'soulhome:guide', 'numismatics:banking_guide']
	*/

	//TODO: fix this!!
	let tome = 'eccentrictome:tome[eccentrictome:tome_data={books:{adorablehamsterpets:[{components:{"patchouli:book":"adorablehamsterpets:hamster_tips_guide_book"},count:1,id:"adorablehamsterpets:hamster_guide_book"}],animal_pen:[{components:{"patchouli:book":"animal_pen:guide_book"},count:1,id:"patchouli:guide_book"}],delighto_flight:[{count:1,id:"delighto_flight:cook_book"}],enchanted:[{components:{"modopedia:book":"enchanted:art_of_witchcraft"},count:1,id:"modopedia:book"}],fieldguide:[{count:1,id:"fieldguide:field_guide"}],ftbquests:[{count:1,id:"ftbquests:book"}],soulhome:[{count:1,id:"soulhome:guide"}],starcatcher:[{count:1,id:"starcatcher:starcatcher_guide"}],twilightdelight:[{components:{"patchouli:book":"twilightdelight:twilight_guide"},count:1,id:"patchouli:guide_book"}]},tome_id:"2a6c2fab-5f36-4158-81d8-878cda6cff3a"}]';
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

	//tea


	event.shapeless(
		Item.of('herbalbrews:tea_leaf_crate'),
		[
			'herbalbrews:green_tea_leaf',
			'herbalbrews:green_tea_leaf',
			'herbalbrews:green_tea_leaf',
			'herbalbrews:green_tea_leaf',
			'herbalbrews:green_tea_leaf',
			'herbalbrews:green_tea_leaf',
			'herbalbrews:green_tea_leaf',
			'herbalbrews:green_tea_leaf',
			'herbalbrews:green_tea_leaf',
		]
	)

	event.shapeless(
		Item.of('9x herbalbrews:green_tea_leaf'),
		[
			'herbalbrews:tea_leaf_crate'
		]
	)


})