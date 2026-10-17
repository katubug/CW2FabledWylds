ServerEvents.recipes(event => {
	// Brushes Use Tags
	event.shaped(
		Item.of('minecraft:brush'),
		[
			' A ',
			' B ',
			' C '
		], {
			A: '#c:feathers',
			B: 'minecraft:copper_ingot',
			C: '#c:rods/wooden'
		}
	)

	event.shaped(
		Item.of('betterarcheology:iron_brush'),
		[
			' A ',
			' B ',
			' C '
		], {
			A: '#c:feathers',
			B: 'minecraft:iron_ingot',
			C: '#c:rods/wooden'
		}
	)

	event.shaped(
		Item.of('betterarcheology:diamond_brush'),
		[
			' A ',
			' B ',
			' C '
		], {
			A: '#c:feathers',
			B: 'minecraft:diamond',
			C: '#c:rods/wooden'
		}
	)
})
