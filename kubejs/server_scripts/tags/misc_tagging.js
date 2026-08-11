ServerEvents.tags('item', event => {

	//acorns to tags
	event.add('enchanted_wilds:acorns',
		'adorablehamsterpets:acorn',
		'crittersandcompanions:acorn'
	)

	//mutandis ingredients
	event.add('enchanted_wilds:mutandis_ingredients',
		'hexalia:spirit_powder',
		'hexalia:dream_paste',
		'hexalia:siren_paste',
		'hexalia:ghost_powder',
		'enchanted:mandrake_root')

	//adding magical herbs to roots' herb pouches
	event.add('roots:herbs',
		'hexerei:belladonna_flowers',
		'hexerei:mandrake_flowers',
		'hexerei:mugwort_flowers',
		'hexerei:mugwort_leaves',
		'hexerei:sage',
		'enchanted:garlic',
		'hexerei:yellow_dock_flowers',
		'hexerei:yellow_dock_leaves',
		'enchanted:rowan_berries',
		'hexerei:dried_belladonna_flowers',
		'hexerei:dried_mandrake_flowers',
		'hexerei:dried_mugwort_flowers',
		'hexerei:dried_mugwort_leaves',
		'hexerei:dried_yellow_dock_flowers',
		'hexerei:dried_yellow_dock_leaves',
		'hexerei:sage_seed',
		'enchanted:water_artichoke',
		'enchanted:mandrake_root',
		'enchanted:wolfsbane_flower',
		'enchanted:glint_weed',
		'enchanted:ember_moss',
		'enchanted:blood_poppy',
		'hexerei:dried_sage'
	)

	//Sunfire tomato is a tomato
	event.add('c:crops/tomato', 'hexalia:sunfire_tomato')
	event.add('c:foods/tomato', 'hexalia:sunfire_tomato')

	//limestone stuff
	event.add('quark:stone_tool_materials',
		'dawnoftimebuilder:puuc_limestone',
		'dawnoftimebuilder:cobbled_limestone',
		'meadow:limestone')
		
	event.add('c:stones',
		'dawnoftimebuilder:puuc_limestone',
		'dawnoftimebuilder:cobbled_limestone',
		'meadow:limestone')


	// Golden Things for Tarot
	event.add('tarotcards:golden',
		'menethersdelight:golden_machete',
		'farmersdelight:golden_knife',
		'tide:golden_fishing_rod'
	)


	//Creeper Drop Music Discs
	event.add('minecraft:creeper_drop_music_discs',
		'the_bumblezone:music_disc_knowing_renren',
		'the_bumblezone:music_disc_bee_ware_of_the_temple',
		'the_bumblezone:music_disc_bee_laxing_with_the_hom_bees',
		'the_bumblezone:music_disc_la_bee_da_loca',
		'the_bumblezone:music_disc_honey_bee_rat_faced_boy',
		'the_bumblezone:music_disc_flight_of_the_bumblebee_rimsky_korsakov',
		'spawn:music_disc_rot',
		'create_connected:music_disc_interlude',
		'create_connected:music_disc_elevator',
		'quark:music_disc_endermosh',
		'the_bumblezone:music_disc_a_last_first_last',
		'the_bumblezone:music_disc_life_renren',
		'the_bumblezone:music_disc_radiance_renren',
		'species:music_disc_dial'
	)

	//Spider Silk is String
	event.add('forge:string',
		'crittersandcompanions:silk'
	)

	//Candles!
	event.add('minecraft:candles',
		'hexerei:candle',
		'fantasyfurniture:decorations/venthyr_candles',
		'fantasyfurniture:decorations/bone_candles',
		'supplementaries:candle_holder',
		'supplementaries:candle_holder_white',
		'supplementaries:candle_holder_green',
		'supplementaries:candle_holder_lime',
		'supplementaries:candle_holder_yellow',
		'supplementaries:candle_holder_orange',
		'supplementaries:candle_holder_red',
		'supplementaries:candle_holder_brown',
		'supplementaries:candle_holder_black',
		'supplementaries:candle_holder_gray',
		'supplementaries:candle_holder_light_gray',
		'supplementaries:candle_holder_cyan',
		'supplementaries:candle_holder_light_blue',
		'supplementaries:candle_holder_blue',
		'supplementaries:candle_holder_purple',
		'supplementaries:candle_holder_magenta',
		'supplementaries:candle_holder_pink'
	)

	//Stoves which can cook
	event.add('forge:cooking_ovens',
		'candlelight:basalt_stove', 
		'candlelight:cobblestone_stove', 
		'candlelight:stone_bricks_stove', 
		'candlelight:deepslate_stove', 
		'candlelight:granite_stove', 
		'candlelight:end_stove', 
		'candlelight:mud_stove', 
		'candlelight:quartz_stove', 
		'candlelight:red_nether_bricks_stove', 
		'candlelight:basalt_stove', 
		'candlelight:bamboo_stove', 
		'farm_and_charm:stove', 
		'candlelight:sandstone_stove'
	)

	//Valid Currencies
	event.add('taverntokens:valid_currency',
		'numismatics:crown', 
		'numismatics:sun', 
		'minecraft:emerald', 
		'numismatics:spur', 
		'numismatics:bevel', 
		'numismatics:sprocket', 
		'numismatics:cog'
	)

})