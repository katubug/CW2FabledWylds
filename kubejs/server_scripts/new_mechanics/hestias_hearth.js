// hestia's hearth - regen + food + good dreams nearby

const HEARTH = 'kubejs:hestias_hearth'
const INDEX_KEY = 'HestiasHearths'
const RADIUS = 12
const INTERVAL = 40

// potionEffects.add hides the icon if particles are off, so do it manually
const $MobEffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')
const $MobEffects = Java.loadClass('net.minecraft.world.effect.MobEffects')

// hearth positions, "x,y,z;x,y,z" per dimension
function readIndex(level) {
	// needs String() or the filter eats everything (java string)
	const raw = String(level.persistentData.getString(INDEX_KEY))
	if (!raw) return []
	return raw.split(';').filter(entry => entry.length > 0)
}

function writeIndex(level, entries) {
	level.persistentData.putString(INDEX_KEY, entries.join(';'))
}

// 2 wide. main block draws everything, side half is invisible. only main gets indexed
const HEARTH_SIDE = 'kubejs:hestias_hearth_side'
const SIDE_OF = { north: 'west', east: 'north', south: 'east', west: 'south' }
const MAIN_OF = { north: 'east', east: 'south', south: 'west', west: 'north' }

function facingOf(block) {
	return String(block.properties.get('facing'))
}

function unindex(level, block) {
	const key = `${block.x},${block.y},${block.z}`
	writeIndex(level, readIndex(level).filter(entry => entry !== key))
}

BlockEvents.placed(HEARTH, event => {
	const level = event.level
	const facing = facingOf(event.block)
	const side = event.block[SIDE_OF[facing]]

	// no room
	if (!side.blockState.canBeReplaced()) {
		event.cancel()
		return
	}
	side.set(HEARTH_SIDE, { facing: facing })

	const key = `${event.block.x},${event.block.y},${event.block.z}`
	const entries = readIndex(level)

	if (entries.indexOf(key) === -1) {
		entries.push(key)
		writeIndex(level, entries)
	}
})

BlockEvents.broken(HEARTH, event => {
	const side = event.block[SIDE_OF[facingOf(event.block)]]
	if (side.id === HEARTH_SIDE) side.set('minecraft:air')

	unindex(event.level, event.block)
})

// side broken -> break main too (main drops the item)
BlockEvents.broken(HEARTH_SIDE, event => {
	const main = event.block[MAIN_OF[facingOf(event.block)]]
	if (main.id !== HEARTH) return

	unindex(event.level, main)
	event.level.destroyBlock(main.pos, !event.player.isCreative())
})

// only checks blocks in range. removes entries that aren't hearths anymore
function nearHearth(player) {
	const level = player.level
	const entries = readIndex(level)
	if (entries.length === 0) return false

	const stale = []
	let found = false

	entries.forEach(entry => {
		const parts = entry.split(',')
		const x = parseInt(parts[0])
		const y = parseInt(parts[1])
		const z = parseInt(parts[2])

		if (Math.abs(player.x - x) > RADIUS) return
		if (Math.abs(player.y - y) > RADIUS) return
		if (Math.abs(player.z - z) > RADIUS) return

		if (level.getBlock(x, y, z).id === HEARTH) found = true
		else stale.push(entry)
	})

	if (stale.length > 0) {
		writeIndex(level, entries.filter(entry => stale.indexOf(entry) === -1))
	}

	return found
}

PlayerEvents.tick(event => {
	const player = event.player
	if (player.tickCount % INTERVAL !== 0) return
	if (!nearHearth(player)) return

	// regen 1, no particles
	player.addEffect(new $MobEffectInstance($MobEffects.REGENERATION, INTERVAL + 20, 0, true, false, true))

	const food = player.foodData
	if (food.getFoodLevel() < 20) {
		food.setFoodLevel(Math.min(20, food.getFoodLevel() + 1))
	}
	if (food.getSaturationLevel() < 5) {
		food.setSaturation(5)
	}
})

// midnight thoughts: max comfort near hearth = no nightmares
if (typeof MidnightThoughtsEvents !== 'undefined') {
	MidnightThoughtsEvents.comfortCalculated(event => {
		if (nearHearth(event.player)) event.setLevel(5)
	})
}
