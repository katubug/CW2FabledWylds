/**
 * Diamond Loot Staging — Stage Lifecycle
 *
 * Manages two negative stages that gate chest loot behind vanilla advancements:
 *
 *   no_iron     — present until "Isn't It Iron Pick?" (minecraft:story/iron_tools)
 *   no_diamonds — present until "Diamonds!"           (minecraft:story/mine_diamond)
 *
 * Stages are added on first login (when absent + advancement not yet earned),
 * and removed when the corresponding advancement fires.
 *
 * The loggedIn sync handles:
 *   - New players (stages absent, need to be added)
 *   - Retroactive players (already had the advancement before this script was added)
 *   - Returning players where stage state may have drifted
 */

/**
 * Returns true if the player has completed the given advancement.
 * Fails open if the advancement is not found on the server.
 * Used only in loggedIn sync — not in the hot loot path.
 */
const hasAdvancement = (player, advId) => {
    const holder = player.server.getAdvancements().get(ResourceLocation.parse(advId))
    if (!holder) return true
    return player.getAdvancements().getOrStartProgress(holder).isDone()
}

// Sync stage state on every login — idempotent, handles all edge cases
PlayerEvents.loggedIn(event => {
    const player = event.player

    const hasIron     = hasAdvancement(player, 'minecraft:story/iron_tools')
    const hasDiamonds = hasAdvancement(player, 'minecraft:story/mine_diamond')

    if (hasIron && player.stages.has('no_iron')) {
        player.stages.remove('no_iron')
    } else if (!hasIron && !player.stages.has('no_iron')) {
        player.stages.add('no_iron')
    }

    if (hasDiamonds && player.stages.has('no_diamonds')) {
        player.stages.remove('no_diamonds')
    } else if (!hasDiamonds && !player.stages.has('no_diamonds')) {
        player.stages.add('no_diamonds')
    }
})

// Remove stage immediately when advancement is earned (no relog required)
PlayerEvents.advancement('minecraft:story/iron_tools', event => {
    event.player.stages.remove('no_iron')
})

PlayerEvents.advancement('minecraft:story/mine_diamond', event => {
    event.player.stages.remove('no_diamonds')
})
