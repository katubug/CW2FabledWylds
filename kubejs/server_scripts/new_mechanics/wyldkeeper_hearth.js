// Wyldkeeper's Hearth aura.
// Slow regen, a topped-up stomach, and guaranteed good dreams for anyone near
// a finished cottage. Granted by the Rite of the Wyldkeeper.

const HEARTH = 'kubejs:wyldkeeper_hearth'
const INDEX_KEY = 'WyldkeeperHearths'
const RADIUS = 12
const INTERVAL = 40

// Hearth positions are indexed per dimension so the aura never has to scan
// blocks. Stored as "x,y,z;x,y,z" in the level's persistent data.
function readIndex(level) {
	const raw = level.persistentData.getString(INDEX_KEY)
	if (!raw) return []
	return raw.split(';').filter(entry => entry.length > 0)
}

function writeIndex(level, entries) {
	level.persistentData.putString(INDEX_KEY, entries.join(';'))
}

BlockEvents.placed(HEARTH, event => {
	const level = event.level
	const key = `${event.block.x},${event.block.y},${event.block.z}`
	const entries = readIndex(level)

	if (entries.indexOf(key) === -1) {
		entries.push(key)
		writeIndex(level, entries)
	}
})

BlockEvents.broken(HEARTH, event => {
	const level = event.level
	const key = `${event.block.x},${event.block.y},${event.block.z}`

	writeIndex(level, readIndex(level).filter(entry => entry !== key))
})

// True when the player is close to a hearth that is genuinely still standing.
// Only positions already within RADIUS get a block lookup, so this never
// touches an unloaded chunk. Anything that turns out to be gone (explosions,
// world edits, /setblock) is pruned on the way past.
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

	// Regeneration I is roughly one heart per two and a half seconds. Slow on
	// purpose. Hidden particles so it doesn't fog up the cottage.
	player.potionEffects.add('minecraft:regeneration', INTERVAL + 20, 0, true, false)

	const food = player.foodData
	if (food.getFoodLevel() < 20) {
		food.setFoodLevel(Math.min(20, food.getFoodLevel() + 1))
	}
	if (food.getSaturationLevel() < 5) {
		food.setSaturation(5)
	}
})

// Midnight Thoughts: sleeping beside a finished hearth is always a good night.
// Comfort level 5 is the top well-rested tier and sits well above the nightmare
// threshold. Guarded so the script survives the mod being removed.
if (typeof MidnightThoughtsEvents !== 'undefined') {
	MidnightThoughtsEvents.comfortCalculated(event => {
		if (nearHearth(event.player)) event.setLevel(5)
	})
}
