// Cap zombie max health at 20 HP and strip bonus movement speed.
// Vanilla "leader zombies" can roll bonus health (up to 30+) and a
// speed modifier on spawn. This clamps both back to defaults.

const ZOMBIE_HEALTH_CAP = 20

// Covers all zombie-family mobs. Add/remove types as needed.
const ZOMBIE_TYPES = [
	'minecraft:zombie',
	'minecraft:zombie_villager',
	'minecraft:husk',
	'minecraft:drowned'
]

ZOMBIE_TYPES.forEach(type => {
	EntityEvents.spawned(type, event => {
		let entity = event.entity

		// Cap health
		if (entity.getMaxHealth() > ZOMBIE_HEALTH_CAP) {
			entity.setMaxHealth(ZOMBIE_HEALTH_CAP)
			entity.health = Math.min(entity.health, ZOMBIE_HEALTH_CAP)
		}

		// Strip bonus movement speed (leader zombie modifier)
		let baseSpeed = entity.getDefaultMovementSpeed()
		if (entity.getTotalMovementSpeed() > baseSpeed) {
			entity.setDefaultMovementSpeedMultiplier(1.0)
			entity.setMovementSpeedAddition(0.0)
		}
	})
})
