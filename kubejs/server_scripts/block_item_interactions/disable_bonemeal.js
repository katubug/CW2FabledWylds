//disable bonemeal

const BonemealEvent = Java.loadClass('net.neoforged.neoforge.event.entity.player.BonemealEvent')
const TagKey = Java.loadClass('net.minecraft.tags.TagKey')
const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
const Registries = Java.loadClass('net.minecraft.core.registries.Registries')
const crop = TagKey.create(Registries.BLOCK, ResourceLocation.parse('minecraft:bee_growables'))
const sapling = TagKey.create(Registries.BLOCK, ResourceLocation.parse('minecraft:saplings'))

const MOD_IDS = [
  'farm_and_charm:barley_crop',
  'farm_and_charm:corn_crop',
  'farm_and_charm:lettuce_crop',
  'farm_and_charm:oat_crop',
  'farm_and_charm:onion_crop',
  'farm_and_charm:strawberry_crop',
  'farm_and_charm:tomato_crop',
  'farm_and_charm:tomato_crop_body',
  'herbalbrews:tea_plant',
  'herbalbrews:coffee_plant',
  'herbalbrews:rooibos_plant',
  'herbalbrews:yerba_mate_plant'
]

NativeEvents.onEvent(BonemealEvent, event => {
	if (event.getLevel().isClientSide()) return
	if (event.player) {
	if (event.getStack().getId().toString() != 'minecraft:bone_meal') return

	const block = event.level.getBlockState(event.pos)

	if (block['is(net.minecraft.tags.TagKey)'](crop) || block['is(net.minecraft.tags.TagKey)'](sapling) || MOD_IDS.includes(block.block.id)) {
		event.setCanceled(true)
		event.player.tell("This doesn't seem to work. Try fertilizer instead!")
	}
}
})
