// Zombies spawn plain: no leader health bonus, no speed boosts

const Attributes = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes')

// Covers all zombie-family mobs
const ZOMBIE_TYPES = [
	'minecraft:zombie',
	'minecraft:zombie_villager',
	'minecraft:husk',
	'minecraft:drowned'
]

function stripModifiers(entity, attribute) {
	let inst = entity.getAttribute(attribute)
	if (!inst) return
	// copy first, can't remove while iterating the live set
	let mods = inst.getModifiers().toArray()
	for (let i = 0; i < mods.length; i++) inst.removeModifier(mods[i].id())
}

ZOMBIE_TYPES.forEach(type => {
	EntityEvents.spawned(type, event => {
		let entity = event.entity
		stripModifiers(entity, Attributes.MAX_HEALTH)
		stripModifiers(entity, Attributes.MOVEMENT_SPEED)
		if (entity.health > entity.maxHealth) entity.health = entity.maxHealth
	})
})
