ItemEvents.entityInteracted('enchanted:ent_twig', event => {
	let target = event.target
	if (!target.entityType.tags.anyMatch(tag => tag.location() == 'roots:sprouts')) return
	if (target.baby || target.inLove) return

	target.setInLove(event.player)
	event.player.swing(event.hand)
	event.cancel()
})