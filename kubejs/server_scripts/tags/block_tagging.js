ServerEvents.tags('block', event => {
	//Hot Blocks
	let hotBlocks = [
		'create:blaze_burner',
		'fantasyfurniture:bone/skeleton/oven',
		'fantasyfurniture:bone/wither/oven',
		'fantasyfurniture:necrolord/oven',
		'fantasyfurniture:nordic/oven',
		'fantasyfurniture:royal/oven',
		'fantasyfurniture:venthyr/oven',
		'farmersdelight:stove',
		'farm_and_charm:stove',
		'handcrafted:oven',
		'meadow:stove_tiles',
		'meadow:stove_tiles_lid',
		'meadow:stove_tiles_wood',
		'minecraft:magma_block',
	]

	for (const block of hotBlocks) {
		event.add('farmersdelight:heat_sources', block);
		event.add('create:passive_boiler_heaters', block);
		event.add('meadow:allows_cooking', block);
		event.add('bakery:allows_cooking', block);
	}
})