// starshine's reply letters (config/contactquests/npc_config.json)
// <plush_gift> in a letter = mail an axolotl plush along with it, once per player

ContactEvents.registerReplacers(event => {
	event.registerNpcReply((text, ctx) => {
		let t = String(text)
		if (!t.includes('<plush_gift>')) return t

		let player = ctx.player
		// already got one, return null so contact picks a different letter
		if (player.persistentData.getBoolean('cw_starshine_plush')) return null

		player.persistentData.putBoolean('cw_starshine_plush', true)
		ContactQuests.sendMail(player, String(ctx.name), Item.of('plushie_buddies:plushie_axolotl'), false)
		return t.replace('<plush_gift>', '')
	})
})
