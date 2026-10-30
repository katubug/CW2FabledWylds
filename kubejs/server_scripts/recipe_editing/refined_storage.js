// cw1 magitech recipes, ported
ServerEvents.recipes(event => {
	// stock ones get replaced
	[
		'refinedstorage:quartz_enriched_iron',
		'refinedstorage:quartz_enriched_copper',
		'refinedstorage:cable',
		'refinedstorage:storage_housing',
		'refinedstorage:upgrade',
		'refinedstorage:1k_storage_part',
		'refinedstorage:1k_storage_disk',
		'refinedstorage:4k_storage_disk',
		'refinedstorage:16k_storage_disk',
		'refinedstorage:64k_storage_disk',
		'refinedstorage:network_receiver',
		'refinedstorage:network_transmitter',
		'rsinfinitybooster:infinity_card',
		'rsinfinitybooster:dimension_card'
	].forEach(id => event.remove({ id: id }))

	// Illuminite
	event.shaped(Item.of('refinedstorage:quartz_enriched_iron', 8), [
		'AA',
		'AB'
	], {
		A: '#c:ingots/iron',
		B: '#c:dusts/glowstone'
	}).id('fabled_wylds:refinedstorage/quartz_enriched_iron')

	// Rose Illuminite, copper version
	event.shaped(Item.of('refinedstorage:quartz_enriched_copper', 8), [
		'AA',
		'AB'
	], {
		A: '#c:ingots/copper',
		B: '#c:dusts/glowstone'
	}).id('fabled_wylds:refinedstorage/quartz_enriched_copper')

	// cw1 used illuminite here, rose illuminite keeps it from being useless
	event.shaped(Item.of('refinedstorage:cable', 12), [
		'AAA',
		'BCB',
		'AAA'
	], {
		A: 'refinedstorage:quartz_enriched_copper',
		B: 'glassential:glass_redstone',
		C: '#c:dusts/glowstone'
	}).id('fabled_wylds:refinedstorage/cable')

	// Stone Casing
	event.shaped('refinedstorage:storage_housing', [
		'CCC',
		'CAC',
		'BBB'
	], {
		A: 'refinedstorage:quartz_enriched_iron',
		B: 'glassential:glass_redstone',
		C: '#c:stones'
	}).id('fabled_wylds:refinedstorage/storage_housing')

	event.shaped('refinedstorage:upgrade', [
		'ABA',
		'ACA',
		'ABA'
	], {
		A: 'refinedstorage:quartz_enriched_iron',
		B: 'glassential:glass_redstone',
		C: 'refinedstorage:improved_processor'
	}).id('fabled_wylds:refinedstorage/upgrade')

	// Primal Storage Glyph
	event.shaped('refinedstorage:1k_storage_part', [
		' C ',
		'CAC',
		' C '
	], {
		A: 'refinedstorage:quartz_enriched_iron',
		C: 'refinedstorage:basic_processor'
	}).id('fabled_wylds:refinedstorage/1k_storage_part')

	// Glyphstones, housing versions are still stock
	;['1k', '4k', '16k', '64k'].forEach(tier => {
		event.shaped(`refinedstorage:${tier}_storage_disk`, [
			'DBD',
			'BCB',
			'AAA'
		], {
			A: 'refinedstorage:quartz_enriched_iron',
			B: 'glassential:glass_redstone',
			C: `refinedstorage:${tier}_storage_part`,
			D: '#c:stones'
		}).id(`fabled_wylds:refinedstorage/${tier}_storage_disk`)
	})

	// Aetheric Receptor, attuned stone stands in for the ars glyph
	event.shaped('refinedstorage:network_receiver', [
		'AFA',
		'BED',
		'CCC'
	], {
		A: 'refinedstorage:advanced_processor',
		B: 'refinedstorage:construction_core',
		C: '#c:ender_pearls',
		D: 'refinedstorage:destruction_core',
		E: 'refinedstorage:machine_casing',
		F: 'enchanted:attuned_stone'
	}).id('fabled_wylds:refinedstorage/network_receiver')

	// Aetheric Messenger, same thing flipped
	event.shaped('refinedstorage:network_transmitter', [
		'CCC',
		'BED',
		'AFA'
	], {
		A: 'refinedstorage:advanced_processor',
		B: 'refinedstorage:construction_core',
		C: '#c:ender_pearls',
		D: 'refinedstorage:destruction_core',
		E: 'refinedstorage:machine_casing',
		F: 'enchanted:attuned_stone'
	}).id('fabled_wylds:refinedstorage/network_transmitter')

	event.shaped('rsinfinitybooster:infinity_card', [
		' B ',
		'BCB',
		' B '
	], {
		B: 'refinedstorage:range_upgrade',
		C: 'minecraft:nether_star'
	}).id('fabled_wylds:refinedstorage/infinity_card')

	// a bit of every dimension. bee essence replaces deeper darker's heart
	event.shaped('rsinfinitybooster:dimension_card', [
		' A ',
		'BCD',
		' E '
	], {
		A: 'twilightforest:maze_map_focus',
		B: 'the_bumblezone:essence_of_the_bees',
		C: 'rsinfinitybooster:infinity_card',
		D: 'minecraft:dragon_egg',
		E: '#c:ingots/netherite'
	}).id('fabled_wylds:refinedstorage/dimension_card')
})
