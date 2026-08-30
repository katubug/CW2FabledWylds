ServerEvents.recipes(event => {

	const netherWoods = new Set(['crimson', 'warped'])

	// Returns the minecraft log/stem ID for a given wood type
	function logId(wood, stripped) {
		let suffix = netherWoods.has(wood) ? 'stem' : 'log'
		return stripped
			? `minecraft:stripped_${wood}_${suffix}`
			: `minecraft:${wood}_${suffix}`
	}

	// === Carved Columns (stonecutter from matching log/stem) ===
	const columnWoods = [
		'acacia', 'acacia_stripped',
		'birch', 'birch_stripped',
		'cherry', 'cherry_stripped',
		'crimson', 'crimson_stripped',
		'dark_oak', 'dark_oak_stripped',
		'jungle', 'jungle_stripped',
		'mangrove', 'mangrove_stripped',
		'oak', 'oak_stripped',
		'pale_oak', 'pale_oak_stripped',
		'spruce', 'spruce_stripped',
		'warped', 'warped_stripped'
	]

	for (const wood of columnWoods) {
		let isStripped = wood.endsWith('_stripped')
		let base = isStripped ? wood.replace('_stripped', '') : wood
		event.stonecutting(`kubejs:${wood}_carved_column`, logId(base, isStripped))
	}

	// === Carved Parquets (stonecutter from planks) ===
	const parquetWoods = [
		'acacia', 'bamboo', 'birch', 'cherry', 'crimson',
		'dark_oak', 'jungle', 'mangrove', 'oak', 'pale_oak',
		'spruce', 'warped'
	]

	for (const wood of parquetWoods) {
		event.stonecutting(`kubejs:${wood}_carved_parquet`, `minecraft:${wood}_planks`)
	}

	// === Bamboo Carved Mosaic (stonecutter from bamboo mosaic) ===
	event.stonecutting('kubejs:bamboo_carved_mosaic', 'minecraft:bamboo_mosaic')

	// === Carved Logs — Xerca-style (stonecutter from stripped log/stem, 8 variants each) ===
	const carvedLogWoods = ['warped', 'crimson', 'birch', 'acacia', 'spruce', 'dark_oak']

	for (const wood of carvedLogWoods) {
		for (let i = 1; i <= 8; i++) {
			event.stonecutting(`kubejs:carved_${wood}_${i}`, logId(wood, true))
		}
	}

})
