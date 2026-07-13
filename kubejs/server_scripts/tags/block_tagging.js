ServerEvents.tags('block', event => {
	//Hot Blocks
	let hotBlocks = [
		'glassential:glass_lava_lamp_tinted',
		'decorative_blocks:soul_brazier',
		'glassential:glass_lava_lamp',
		'mynethersdelight:nether_bricks_stove',
		'cnb:cinder_furnace',
		'betternether:cincinnasite_forge',
		'minecraft:campfire',
		'minecraft:soul_campfire',
		'dawnoftimebuilder:irori_fireplace',
		'betternether:netherite_fire_bowl_soul',
		'meadow:stove_tiles_lid',
		'meadow:stove_tiles_wood',
		'meadow:stove_tiles',
		'twilightdelight:maze_stove',
		'trailandtales_delight:mud_stove',
		'farmersdelight:stove',
		'farm_and_charm:stove',
		'handcrafted:oven',
		'betternether:bricks_fire_bowl_soul',
		'betternether:netherite_fire_bowl',
		'betternether:cincinnasite_fire_bowl_soul',
		'betternether:cincinnasite_fire_bowl',
		'betternether:bricks_fire_bowl',
		'decorative_blocks:brazier',
		'decorative_blocks:soul_brazier',
		'glassential:glass_lava_lamp',
		'minecraft:magma_block',
		'glassential:glass_lava_lamp_tinted'
	]

	for (const block of hotBlocks) {
		event.add('farmersdelight:heat_sources', block);
		event.add('meadow:allows_cooking', block);
		event.add('bakery:allows_cooking', block);
		event.add('farm_and_charm:allows_cooking', block);
		event.add('mynethersdelight:letios_flames', block);
		event.add('amendments:cauldron_heat_source', block);
		event.add('hexerei:heat_sources', block);
	}
})