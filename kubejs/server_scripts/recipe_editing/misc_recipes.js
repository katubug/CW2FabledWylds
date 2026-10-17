ServerEvents.recipes(event => {
	// Filled Eccentric tome

	
	let tome = 'eccentrictome:tome[eccentrictome:tome_data={books:{adorablehamsterpets:[{components:{"patchouli:book":"adorablehamsterpets:hamster_tips_guide_book"},count:1,id:"adorablehamsterpets:hamster_guide_book"}],buildinggadgets2:[{components:{"patchouli:book":"buildinggadgets2:buildinggadgets2book"},count:1,id:"patchouli:guide_book"}],delighto_flight:[{count:1,id:"delighto_flight:cook_book"}],enchanted:[{components:{"modopedia:book":"enchanted:art_of_witchcraft"},count:1,id:"modopedia:book"}],fieldguide:[{count:1,id:"fieldguide:field_guide"}],ftbquests:[{count:1,id:"ftbquests:book"}],hexalia:[{count:1,id:"hexalia:verdant_grimoire"}],hexerei:[{components:{"hexerei:book":{book:"hexerei:book_of_shadows",bookmarks:[{color:"white",id:"",index:0},{color:"white",id:"",index:1},{color:"white",id:"",index:2},{color:"white",id:"",index:3},{color:"white",id:"",index:4},{color:"white",id:"",index:5},{color:"white",id:"",index:6},{color:"white",id:"",index:7},{color:"white",id:"",index:8},{color:"white",id:"",index:9},{color:"white",id:"",index:10},{color:"white",id:"",index:11},{color:"white",id:"",index:12},{color:"white",id:"",index:13},{color:"white",id:"",index:14},{color:"white",id:"",index:15},{color:"white",id:"",index:16},{color:"white",id:"",index:17},{color:"white",id:"",index:18},{color:"white",id:"",index:19}],chapter:0,opened:0b,page:0,uuid:[I;215013029,1945849428,-1770281934,-1408088263]}},count:1,id:"hexerei:book_of_shadows"}],longwings:[{count:1,id:"longwings:butterfly_handbook"}],modonomicon:[{components:{"modonomicon:book_id":"icys-better-horses:stable_handbook"},count:1,id:"modonomicon:modonomicon"}],numismatics:[{count:1,id:"numismatics:banking_guide"}],refineddelight:[{components:{"patchouli:book":"refineddelight:guide"},count:1,id:"patchouli:guide_book"}],solonion:[{count:1,id:"solonion:food_book"}],soulhome:[{count:1,id:"soulhome:guide"}],starcatcher:[{count:1,id:"starcatcher:starcatcher_guide"}],twilightdelight:[{components:{"patchouli:book":"twilightdelight:twilight_guide"},count:1,id:"patchouli:guide_book"}]},tome_id:"c4d06d21-951f-40a0-ba21-4873ce105977"}]';
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
