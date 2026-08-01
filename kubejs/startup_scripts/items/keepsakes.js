// Wyldkeeper capstone.
// Six keepsakes, one per chapter strand. They exist only to be spent on the
// Rite of the Wyldkeeper, so nobody has to give up a trinket they actually like.
// Rite lives in kubejs/data/kubejs/enchanted/circle_magic/rite/wyldkeeper.json

StartupEvents.registry('item', event => {

	// [id, display name, tooltip]
	const keepsakes = [
		['pressed_herbarium', 'Pressed Herbarium', 'Every leaf you ever coaxed out of the ground.'],
		['blue_ribbon', 'Blue Ribbon', 'First place. Deservedly.'],
		['well_loved_collar', 'Well-Loved Collar', 'A little worn. A lot loved.'],
		['menagerie_census', 'Menagerie Census', 'Every name you learned by heart.'],
		['wayfarers_knot', "Wayfarer's Knot", 'One thread from everywhere you went.'],
		['curators_seal', "Curator's Seal", 'Proof that you kept absolutely everything.']
	]

	keepsakes.forEach(keepsake => {
		event.create(keepsake[0])
			.displayName(keepsake[1])
			.tooltip(keepsake[2])
			.unstackable()
			.rarity('epic')
			.glow(true)
			.fireResistant()
			.tag('kubejs:keepsakes')
	})

})

StartupEvents.registry('block', event => {

	event.create('wyldkeeper_hearth')
		.displayName("Wyldkeeper's Hearth")
		.soundType('stone')
		.hardness(2)
		.resistance(1200)
		.lightLevel(0.8)
		.fullBlock(false)
		.notSolid()
		.opaque(false)
		.box(1, 0, 1, 15, 12, 15)
		.tagBlock('minecraft:mineable/pickaxe')
		// Fallback comfort if the Midnight Thoughts KubeJS hook ever goes away.
		.tagBlock('midnightthoughts:comfort_furniture')
		.item(item => item
			.rarity('epic')
			.glow(true)
			.fireResistant())

})
