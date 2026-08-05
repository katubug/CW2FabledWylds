EntityEvents.afterHurt('twilightforest:alpha_yeti', event => {
    let source = event.getSource()
    let player = source.getPlayer()
    if (!player) return

    if (source.getType() === 'roots:rose_thorns') {
        player.runCommandSilent('advancement grant @s only enchanted_wilds:twilight_forest/thorns_yeti')
    }
})
