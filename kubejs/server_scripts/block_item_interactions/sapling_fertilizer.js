// Right-click a custom sapling with Farm and Charm fertilizer to force-grow it.

const FERTILIZER = 'farm_and_charm:fertilizer'

const SAPLING_DATA = {
	'kubejs:greatwood_sapling': {
		structures: ['fabled_wylds:corkscrew_greatwood', 'fabled_wylds:canopy_greatwood'],
		requires2x2: true
	},
	'kubejs:silverwood_sapling': {
		structures: ['fabled_wylds:thick_silverwood'],
		requires2x2: false
	}
}

const QUAD_OFFSETS = [
	{ cx: 0, cz: 0 },
	{ cx: -1, cz: 0 },
	{ cx: 0, cz: -1 },
	{ cx: -1, cz: -1 }
]

function find2x2Server(level, pos, blockId) {
	const BlockPos = Java.loadClass('net.minecraft.core.BlockPos')
	for (let i = 0; i < QUAD_OFFSETS.length; i++) {
		let swX = pos.x + QUAD_OFFSETS[i].cx
		let swZ = pos.z + QUAD_OFFSETS[i].cz
		let valid = true
		for (let dx = 0; dx < 2 && valid; dx++) {
			for (let dz = 0; dz < 2 && valid; dz++) {
				if (level.getBlockState(new BlockPos(swX + dx, pos.y, swZ + dz)).getBlock().arch$registryName().toString() !== blockId) {
					valid = false
				}
			}
		}
		if (valid) return new BlockPos(swX, pos.y, swZ)
	}
	return null
}

function hasObstructionsServer(level, placementPos, size) {
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

BlockEvents.rightClicked(event => {
	const blockId = event.block.id
	if (!SAPLING_DATA[blockId]) return
	if (event.item.id !== FERTILIZER) return

	const data = SAPLING_DATA[blockId]
	const player = event.player
	const level = event.level
	const pos = event.block.pos
	const BlockPos = Java.loadClass('net.minecraft.core.BlockPos')

	let cornerPos = null
	if (data.requires2x2) {
		cornerPos = find2x2Server(level, pos, blockId)
		if (!cornerPos) return
	}

	const structurePool = data.structures
	const structureId = structurePool[Math.floor(Math.random() * structurePool.length)]

	const manager = level.getStructureManager()
	const template = manager.get(structureId).orElse(null)
	if (!template) {
		console.warn(`[Saplings] Could not find structure ${structureId}`)
		return
	}

	// Center the structure on the sapling ish
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
	if (hasObstructionsServer(level, placementPos, size)) return

	// Consume one fertilizer (unless creative)
	if (!player.creative) {
		event.item.shrink(1)
	}

	// Swing arm
	player.swing()

	// Clear all saplings before placing
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
})
