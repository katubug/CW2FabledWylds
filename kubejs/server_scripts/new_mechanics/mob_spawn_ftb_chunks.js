const ClaimedChunkManagerImpl =
	Java.loadClass("dev.ftb.mods.ftbchunks.data.ClaimedChunkManagerImpl")

const ChunkDimPos =
	Java.loadClass("dev.ftb.mods.ftblibrary.math.ChunkDimPos")

EntityEvents.checkSpawn(event => {
	const entity = event.entity
	if (!entity.monster) return

	const manager = ClaimedChunkManagerImpl.getInstance()

	const blockPos = entity.blockPosition()

	const dimChunkPos = new ChunkDimPos(event.level, blockPos)

	const claimed = manager.getChunk(dimChunkPos)

	if (claimed != null) {
		event.cancel()
	}
})