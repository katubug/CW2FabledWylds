//have not tested this script yet
const SAPLINGS = {
	greatwood_sapling: {
		name: 'Greatwood Sapling',
		structures: ['kubejs:greatwood_tree_1', 'kubejs:greatwood_tree_2', 'kubejs:greatwood_tree_3']
	},
	silverwood_sapling: {
		name: 'Silverwood Sapling',
		structures: ['kubejs:silverwood_tree_1', 'kubejs:silverwood_tree_2', 'kubejs:silverwood_tree_3']
	}
}

// Roughly 1-in-7 chance per random tick, same odds vanilla oak saplings use.
const GROW_CHANCE = 7

StartupEvents.registry('block', event => {
	for (const id in SAPLINGS) {
		const data = SAPLINGS[id]
		event.create(id)
			.displayName(data.name)
			.notSolid()
			.noCollision()
			.fullBlock(false)
			.defaultCutout()
			.hardness(0)
			.soundType('grass')
			.box(2, 0, 2, 14, 12, 14)
			.randomTick(makeGrowCallback(data.structures))
	}
})

function makeGrowCallback(structurePool) {
	return event => growTree(event, structurePool)
}

function growTree(event, structurePool) {
	if (event.random.nextInt(GROW_CHANCE) !== 0) return

	const level = event.level
	const pos = event.block.pos

	const structureId = structurePool[event.random.nextInt(structurePool.length)]

	const manager = level.getStructureManager()
	const template = manager.get(structureId)
	if (!template) {
		console.warn(`[Saplings] Could not find structure ${structureId}`)
		return
	}

	// Clear the sapling first so it isn't left behind under the trunk.
	event.block.set('minecraft:air')

	const StructurePlaceSettings = Java.loadClass('net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings')
	const settings = new StructurePlaceSettings()

	template.placeInWorld(level, pos, pos, settings, level.random, 2)
}
