//disable bonemeal

const BonemealEvent = Java.loadClass('net.neoforged.neoforge.event.entity.player.BonemealEvent')
const TagKey = Java.loadClass('net.minecraft.tags.TagKey')
const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
const Registries = Java.loadClass('net.minecraft.core.registries.Registries')
const crop = TagKey.create(Registries.BLOCK, ResourceLocation.parse('minecraft:bee_growables'))
const sapling = TagKey.create(Registries.BLOCK, ResourceLocation.parse('minecraft:saplings'))

NativeEvents.onEvent(BonemealEvent, event => {
	if (event.getLevel().isClientSide()) return
	if (event.getStack().getId().toString() != 'minecraft:bone_meal') return

	const block = event.getLevel().getBlockState(event.getPos())

	if (block.is(crop) || block.is(sapling)) {
		event.setCanceled(true)
		event.setSuccessful(false)

		if (event.player) {
			event.player.tell("This doesn't seem to work. Try fertilizer instead!")
		}
	}
})