BlockEvents.modification(event => {
	//Make Deepslate faster to mine
	event.modify('minecraft:deepslate', block => {
		block.destroySpeed = 2
	})
	event.modify('minecraft:cobbled_deepslate', block => {
		block.destroySpeed = 2
	})
	event.modify('minecraft:polished_deepslate', block => {
		block.destroySpeed = 2
	})
})
