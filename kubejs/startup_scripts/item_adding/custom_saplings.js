
const SAPLINGS = {
	greatwood_sapling: {
		name: 'Greatwood Sapling',
		structures: ['fabled_wylds:corkscrew_greatwood', 'fabled_wylds:canopy_greatwood'],
		requires2x2: true
	},
	silverwood_sapling: {
		name: 'Silverwood Sapling',
		structures: ['fabled_wylds:thick_silverwood'],
		requires2x2: false
	}
}

// Sapling block IDs for lookup in the fertilizer event.
const SAPLING_IDS = new Set(Object.keys(SAPLINGS).map(id => `kubejs:${id}`))

// Roughly 1-in-7 chance per random tick, same odds vanilla oak saplings use.
const GROW_CHANCE = 7

StartupEvents.registry('block', event => {
	for (const id in SAPLINGS) {
		event.create(id)
			.displayName(SAPLINGS[id].name)
			.notSolid()
			.noCollision()
			.fullBlock(false)
			.defaultCutout()
			.hardness(0)
			.soundType('grass')
			.box(2, 0, 2, 14, 12, 14)
			.randomTick(makeGrowCallback(id))
	}
})

function makeGrowCallback(saplingId) {
	return event => growTree(event, saplingId)
}

// 2x2 offsets: each entry is a possible south-west corner offset relative to the
// ticked sapling.  check all four arrangements that include this block.
const QUAD_OFFSETS = [
	{ cx: 0, cz: 0 },   // SW corner
	{ cx: -1, cz: 0 },  // SE corner
	{ cx: 0, cz: -1 },  // NW corner
	{ cx: -1, cz: -1 }  // NE corner
]

/**
 * Finds a valid 2x2 quad of the given sapling block around pos.
 * Returns the SW corner BlockPos, or null if no quad exists.
 */
function find2x2(level, pos, blockId) {
	const BlockPos = Java.loadClass('net.minecraft.core.BlockPos')
	for (let i = 0; i < QUAD_OFFSETS.length; i++) {
		const swX = pos.x + QUAD_OFFSETS[i].cx
		const swZ = pos.z + QUAD_OFFSETS[i].cz
		let valid = true
		for (let dx = 0; dx < 2 && valid; dx++) {
			for (let dz = 0; dz < 2 && valid; dz++) {
				if (level.getBlockState(new BlockPos(swX + dx, pos.y, swZ + dz)).block.id !== blockId) {
					valid = false
				}
			}
		}
		if (valid) return new BlockPos(swX, pos.y, swZ)
	}
	return null
}

/**
 * Checks if there's empty space.
 * Skips Y=0 (ground level) and allows air, leaves, plants, and other non-solid blocks.
 */
function hasObstructions(level, placementPos, size) {
	const BlockPos = Java.loadClass('net.minecraft.core.BlockPos')
	for (let x = 0; x < size.x; x++) {
		for (let y = 1; y < size.y; y++) {
			for (let z = 0; z < size.z; z++) {
				const state = level.getBlockState(
					new BlockPos(placementPos.x + x, placementPos.y + y, placementPos.z + z)
				)
				if (!state.isAir() && state.canOcclude()) return true
			}
		}
	}
	return false
}

function growTree(event, saplingId) {
	if (event.random.nextInt(GROW_CHANCE) !== 0) return

	const data = SAPLINGS[saplingId]
	const blockId = 'kubejs:' + saplingId
	const level = event.level
	const pos = event.block.pos

	const BlockPos = Java.loadClass('net.minecraft.core.BlockPos')

	// If this sapling requires a 2x2, find the quad or exit
	let cornerPos = null
	if (data.requires2x2) {
		cornerPos = find2x2(level, pos, blockId)
		if (!cornerPos) return
	}

	const structurePool = data.structures
	const structureId = structurePool[event.random.nextInt(structurePool.length)]

	const manager = level.getStructureManager()
	const template = manager.get(structureId).orElse(null)
	if (!template) {
		console.warn(`[Saplings] Could not find structure ${structureId}`)
		return
	}

	// Center the structure on the sapling, ish
	const size = template.getSize()
	let originX, originZ
	if (cornerPos) {
		originX = cornerPos.x + 1 - Math.floor(size.x / 2)
		originZ = cornerPos.z + 1 - Math.floor(size.z / 2)
	} else {
		originX = pos.x - Math.floor(size.x / 2)
		originZ = pos.z - Math.floor(size.z / 2)
	}
	const placementPos = new BlockPos(originX, pos.y, originZ)

	// Abort if there are solid blocks in the way.
	if (hasObstructions(level, placementPos, size)) return

	// Clear all saplings before placing the tree.
	if (cornerPos) {
		const Blocks = Java.loadClass('net.minecraft.world.level.block.Blocks')
		const air = Blocks.AIR.defaultBlockState()
		for (let dx = 0; dx < 2; dx++) {
			for (let dz = 0; dz < 2; dz++) {
				level.setBlock(new BlockPos(cornerPos.x + dx, pos.y, cornerPos.z + dz), air, 2)
			}
		}
	} else {
		event.block.set('minecraft:air')
	}

	const StructurePlaceSettings = Java.loadClass('net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings')
	const settings = new StructurePlaceSettings()

	template.placeInWorld(level, placementPos, placementPos, settings, level.random, 2)
}
