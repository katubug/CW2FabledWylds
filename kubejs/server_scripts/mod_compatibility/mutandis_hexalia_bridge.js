const MUTAVIS_SWAPS = {
	'minecraft:granite': 'minecraft:andesite',
	'minecraft:andesite': 'minecraft:diorite',
	'minecraft:diorite': 'minecraft:granite',
	'minecraft:netherrack': 'minecraft:blackstone',
	'minecraft:ice': 'minecraft:blue_ice',
	'minecraft:snow_block': 'minecraft:packed_ice',
	'minecraft:clay': 'minecraft:mud',
	'minecraft:sand': 'minecraft:red_sand',
	'minecraft:dirt': 'minecraft:rooted_dirt',
	'minecraft:rooted_dirt': 'minecraft:podzol',
	'minecraft:dripstone_block': 'minecraft:tuff',
	'minecraft:oak_sapling': 'hexalia:cottonwood_sapling',
	'minecraft:birch_sapling': 'hexalia:willow_sapling',
	'minecraft:brown_mushroom': 'hexalia:dreamshroom',
	'minecraft:fern': 'hexalia:ghost_fern',
	'minecraft:lily_pad': 'hexalia:lotus_flower',
	'minecraft:cactus': 'hexalia:saltsprout',
	'minecraft:kelp': 'hexalia:siren_kelp',
	'minecraft:blue_orchid': 'hexalia:spirit_bloom',
	'minecraft:azure_bluet': 'hexalia:witchweed',
	'minecraft:red_tulip': 'hexalia:celestial_bloom',
	'minecraft:orange_tulip': 'hexalia:celestial_bloom',
	'minecraft:white_tulip': 'hexalia:celestial_bloom',
	'minecraft:pink_tulip': 'hexalia:celestial_bloom'
}

const MUTANDIS_ITEMS = ['enchanted:mutandis', 'enchanted:mutandis_extremis']

// fall back to Enchanted's own mutagens system for blocks not covered by the Hexalia swap table above.
const MutagenManager = Java.loadClass('net.favouriteless.enchanted.api.MutagenManager')

function playMutationEffects(server, x, y, z) {
	server.runCommandSilent(`playsound minecraft:block.enchantment_table.use block @a ${x} ${y} ${z}`)
	server.runCommandSilent(`particle minecraft:witch ${x + 0.5} ${y + 0.5} ${z + 0.5} 0.5 0.5 0.5 0 25`)
}

// Mutates the block at (x, y, z): instant swap if it's in the table, otherwise falls back to Enchanted's native mutagen system
function mutateAt(level, server, x, y, z, extremis) {
	const target = level.getBlock(x, y, z)
	const output = MUTAVIS_SWAPS[target.id]

	if (output) {
		target.set(output)
		playMutationEffects(server, x, y, z)
		return true
	}

	if (MutagenManager.get().tryStartMutating(level, target.pos, extremis)) {
		playMutationEffects(server, x, y, z)
		return true
	}

	return false
}

// Single-target
BlockEvents.rightClicked(event => {
	const { block, hand, item, player, server, level } = event
	if (hand != 'MAIN_HAND') return
	if (!MUTANDIS_ITEMS.includes(item.id)) return

	const extremis = item.id == 'enchanted:mutandis_extremis'
	if (!mutateAt(level, server, block.x, block.y, block.z, extremis)) return

	if (!player.creative) item.count--
})

// AOE: right-click a Morphora with Mutandis to mutate everything in a 7x7 flat ring
BlockEvents.rightClicked('hexalia:morphora', event => {
	const { block, hand, item, player, server, level } = event
	if (hand != 'MAIN_HAND') return
	if (!MUTANDIS_ITEMS.includes(item.id)) return

	const extremis = item.id == 'enchanted:mutandis_extremis'
	let converted = false

	// NOTE: coordinates are computed inline
	for (let dx = -3; dx <= 3; dx++) {
		for (let dz = -3; dz <= 3; dz++) {
			if (dx == 0 && dz == 0) continue
			if (mutateAt(level, server, block.x + dx, block.y, block.z + dz, extremis)) converted = true
		}
	}

	if (!converted) return
	if (!player.creative) item.count--
})
