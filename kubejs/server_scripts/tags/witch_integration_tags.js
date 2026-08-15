ServerEvents.tags('block', event => {

    //resin logs for Hexalia
    event.add('hexalia:resin_logs',
        'hexerei:mahogany_log',
        'hexerei:stripped_mahogany_log',
        'hexerei:willow_log',
        'hexerei:stripped_willow_log',
        'hexerei:witch_hazel_log',
        'hexerei:stripped_witch_hazel_log',
        'enchanted:alder_log',
        'enchanted:stripped_alder_log',
        'enchanted:hawthorn_log',
        'enchanted:stripped_hawthorn_log',
        'enchanted:rowan_log',
        'enchanted:stripped_rowan_log',
        'roots:wildwood_log',
        'roots:stripped_wildwood_log',
        'dreamwoods:grimholt_log',
        'dreamwoods:stripped_grimholt_log',
        'dreamwoods:hemlock_log',
        'dreamwoods:stripped_hemlock_log'
    )

//Altars for power providing
event.add('fabled_wylds:altars',
    'hexerei:book_of_shadows_altar', 
    'hexerei:willow_altar', 
    'hexerei:witch_hazel_altar'
)

event.add('fabled_wylds:witchy_plants',
    'hexerei:sage_crop',
    'hexerei:mandrake_plant',
    'hexerei:belladonna_plant',
    'hexerei:mugwort_bush',
    'hexerei:yellow_dock_bush'
)

event.add('fabled_wylds:witchy_upgrades',
    'hexerei:sage_burning_plate',
    'hexerei:herb_jar',
    'hexerei:mahogany_broom_stand', 
    'hexerei:willow_broom_stand', 
    'hexerei:witch_hazel_broom_stand'
)

event.add('fabled_wylds:witchy_blocks',
    'hexerei:mahogany_broom_stand', 
    'hexerei:willow_broom_stand', 
    'hexerei:witch_hazel_broom_stand', 
    'hexerei:pestle_and_mortar', 
    'hexerei:willow_courier_depot', 
    'hexerei:mahogany_courier_depot', 
    'hexerei:witch_hazel_courier_depot',
    'roots:primal_grove_stone',
    'roots:fairy_grove_stone',
    'roots:elemental_grove_stone',
    'roots:twilight_grove_stone',
    'roots:fungal_grove_stone',
    'roots:cultivation_grove_stone'
)

event.add('fabled_wylds:witchy_crystals',
    'minecraft:budding_amethyst',
    'minecraft:small_amethyst_bud',
    'minecraft:medium_amethyst_bud',
    'minecraft:large_amethyst_bud',
    'hexerei:budding_selenite',
    'hexerei:large_selenite_bud',
    'hexerei:medium_selenite_bud',
    'hexerei:small_selenite_bud',
    'excessive_building:budding_fiery_block',
    'excessive_building:small_fiery_bud',
    'excessive_building:medium_fiery_bud',
    'excessive_building:large_fiery_bud',
    'excessive_building:budding_kyanite_block',
    'excessive_building:small_kyanite_bud',
    'excessive_building:medium_kyanite_bud',
    'excessive_building:large_kyanite_bud',
    'excessive_building:budding_miralen_block',
    'excessive_building:small_miralen_bud',
    'excessive_building:medium_miralen_bud',
    'excessive_building:large_miralen_bud',
    'ae2:flawless_budding_quartz',
    'ae2:flawed_budding_quartz',
    'ae2:chipped_budding_quartz',
    'ae2:damaged_budding_quartz',
    'ae2:small_quartz_bud',
    'ae2:medium_quartz_bud',
    'ae2:large_quartz_bud',
    'opalescence:budding_opal',
    'opalescence:large_opal_crystal_bud',
    'opalescence:medium_opal_crystal_bud',
    'opalescence:small_opal_crystal_bud'
)

event.add('enchanted:broom_sweepable',
    'spelunkery:salt', 
    'minecraft:redstone_wire',
    'supplementaries:ash'
)

})
ServerEvents.tags('item', event => {

	//mutandis ingredients
	event.add('fabled_wylds:mutandis_ingredients',
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
})