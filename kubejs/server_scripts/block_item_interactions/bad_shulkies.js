// no sophisticated tier upgrades on any vanilla-style shulker box (dyed ones too)
BlockEvents.rightClicked(e => {
	if (!e.block.hasTag('minecraft:shulker_boxes')) return
	if (String(e.block.id).startsWith('sophisticatedstorage:')) return
	let id = String(e.item.id)
	if (id.startsWith('sophisticatedstorage:') && id.endsWith('tier_upgrade')) e.cancel()
})
