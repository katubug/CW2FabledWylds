const ProjectileImpactEvent = Java.loadClass("net.neoforged.neoforge.event.entity.ProjectileImpactEvent")
const EntityHitResult = Java.loadClass("net.minecraft.world.phys.EntityHitResult")
const ThrownEgg = Java.loadClass("net.minecraft.world.entity.projectile.ThrownEgg")
const Snowball = Java.loadClass("net.minecraft.world.entity.projectile.Snowball")
const ThrownExperienceBottle = Java.loadClass("net.minecraft.world.entity.projectile.ThrownExperienceBottle")

const THROWN_AT_WARDEN = [
	{ isMatch: p => p instanceof ThrownEgg, advancement: "enchanted_wilds:misc/deviled_egg" },
	{ isMatch: p => p instanceof Snowball, advancement: "enchanted_wilds:misc/snowballs_chance" },
	{ isMatch: p => p instanceof ThrownExperienceBottle, advancement: "enchanted_wilds:misc/xp_to_spare" },
]

NativeEvents.onEvent(ProjectileImpactEvent, event => {
	const hit = event.rayTraceResult
	if (!(hit instanceof EntityHitResult)) return

	const target = hit.entity
	if (target.type !== "minecraft:warden") return

	const projectile = event.projectile
	const thrower = projectile.getOwner()
	if (!thrower || !thrower.isPlayer()) return

	const entry = THROWN_AT_WARDEN.find(e => e.isMatch(projectile))
	if (!entry) return

	thrower.runCommandSilent(`advancement grant @s only ${entry.advancement}`)
})

const CAPSTONE_ADVANCEMENT = "enchanted_wilds:misc/stop_throwing_things_at_the_warden"

const CAPSTONE_CRITERION_BY_ADVANCEMENT = {
	"enchanted_wilds:misc/deviled_egg": "thrown_egg",
	"enchanted_wilds:misc/snowballs_chance": "thrown_snowball",
	"enchanted_wilds:misc/xp_to_spare": "thrown_xp_bottle",
}

PlayerEvents.advancement(event => {
	const criterion = CAPSTONE_CRITERION_BY_ADVANCEMENT[event.advancement.getId().toString()]
	if (!criterion) return

	event.player.runCommandSilent(`advancement grant @s only ${CAPSTONE_ADVANCEMENT} ${criterion}`)
})
