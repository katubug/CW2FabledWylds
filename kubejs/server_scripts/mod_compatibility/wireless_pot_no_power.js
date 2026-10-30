// pot won't link to RS with 0 FE even when drains are 0 (see refineddelight-server.toml), so just give it 1
const topUpWirelessPot = block => {
	if (block.entityData && block.entityData.getLong('Energy') < 1) block.mergeEntityData({ Energy: NBT.longTag(1) })
}

BlockEvents.placed('refineddelight:wireless_cooking_pot', event => topUpWirelessPot(event.block))

// catches pots placed before this existed
BlockEvents.rightClicked('refineddelight:wireless_cooking_pot', event => topUpWirelessPot(event.block))
