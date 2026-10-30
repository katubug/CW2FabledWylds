ServerEvents.tags('item', event => {

	//no containers in bundles, used by easyshulkerboxes bundle providers
	event.add('fabled_wylds:not_in_bundles',
		'#minecraft:bundles',
		'#c:shulker_boxes',
		'sophisticatedstorage:shulker_box',
		'sophisticatedstorage:copper_shulker_box',
		'sophisticatedstorage:iron_shulker_box',
		'sophisticatedstorage:gold_shulker_box',
		'sophisticatedstorage:diamond_shulker_box',
		'sophisticatedstorage:netherite_shulker_box',
		'#create:toolboxes',
		'hexerei:coffer',
		'hexerei:entangled_coffer',
		'roots:apothecary_pouch',
		'roots:component_pouch',
		'roots:creative_pouch',
		'roots:herb_pouch',
		'roots:sylvan_pouch',
		'sophisticatedbackpacks:backpack',
		'sophisticatedbackpacks:copper_backpack',
		'sophisticatedbackpacks:iron_backpack',
		'sophisticatedbackpacks:gold_backpack',
		'sophisticatedbackpacks:diamond_backpack',
		'sophisticatedbackpacks:netherite_backpack'
	)
})
