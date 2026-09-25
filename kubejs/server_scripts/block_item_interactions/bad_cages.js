ItemEvents.entityInteracted('supplementaries:cage', event => {
	const {
		target,
		target: {
			x,
			y,
			z
		}
	} = event;

	if (target.entityType.tags.anyMatch(tag => tag.location() == 'fabled_wylds:cage_banned')) {
	if (target.type == "goblintraders:goblin_trader" || target.type == "goblintraders:vein_goblin_trader"){
		event.player.tell("The Goblin trader escapes handily!")
	}
	event.cancel()
}
})

ServerEvents.tags('entity_type', event => {

	event.add('fabled_wylds:cage_banned',
		'enigmaticgraves:grave',
		'lootr:lootr_minecart',
		'minecraft:item_frame',
		'minecraft:glow_item_frame',
		'quark:glass_item_frame',
		'quark:dyed_item_frame',
		'xercapaint:canvas',
		'milotrader:cat_trader',
		'goblintraders:goblin_trader',
		'goblintraders:vein_goblin_trader'
	)

})
