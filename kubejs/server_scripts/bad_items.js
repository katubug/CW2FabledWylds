EntityEvents.spawned('minecraft:item', event => {
    if (event.entity.item == 'hexerei:mandrake_root') {
        event.entity.setItem('enchanted:mandrake_root')
    }

    if (event.entity.item == 'hexalia:salt') {
        event.entity.setItem('spelunkery:salt')
    }

    if (event.entity.item == 'mysticsbiomes:peach') {
        event.entity.setItem('fruitsdelight:peach')
    }

    if (event.entity.item == 'mysticsbiomes:cherries') {
        event.entity.setItem('vinery:cherry')
    }
})

//disable bonemeal

const BonemealEvent = Java.loadClass('net.neoforged.neoforge.event.entity.player.BonemealEvent')
const TagKey = Java.loadClass('net.minecraft.tags.TagKey')
const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
const Registries = Java.loadClass('net.minecraft.core.registries.Registries')
const crop = TagKey.create(Registries.BLOCK, ResourceLocation.parse('minecraft:bee_growables'))
const sapling = TagKey.create(Registries.BLOCK, ResourceLocation.parse('minecraft:saplings'))

NativeEvents.onEvent(BonemealEvent, event => {
  const block = event.getLevel().getBlockState(event.getPos())

  if (block.is(crop) || block.is(sapling)) {
    event.setCanceled(true)
    event.setSuccessful(false)
    event.player.tell("This doesn't seem to work. Try fertilizer instead!")
  }
})
