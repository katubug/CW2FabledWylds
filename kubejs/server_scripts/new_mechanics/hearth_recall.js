// A reusable sethome/home rune with two modes, toggled by shift + right clicking. runs with elevated permissions.


const HEARTH_RECALL_MODE_KEY = 'HearthRecallMode'
const HEARTH_RECALL_PERMISSION_LEVEL = 4

function getHearthRecallMode(item) {
	return item.getCustomData().getString(HEARTH_RECALL_MODE_KEY) || 'set'
}

function setHearthRecallMode(item, mode) {
	let tag = item.getCustomData()
	tag.putString(HEARTH_RECALL_MODE_KEY, mode)
	item.setCustomData(tag)
}

ItemEvents.rightClicked('kubejs:hearth_recall', event => {
	let { player, item, server } = event

	if (player.isShiftKeyDown()) {
		let newMode = getHearthRecallMode(item) === 'set' ? 'teleport' : 'set'
		setHearthRecallMode(item, newMode)

		if (newMode === 'set') {
			player.sendSystemMessage('Set Home Mode', true)
			server.runCommandSilent(`playsound minecraft:item.book.page_turn player ${player.name.string} ${player.x} ${player.y} ${player.z} 1 1.2`)
		} else {
			player.sendSystemMessage('Teleport Home Mode', true)
			server.runCommandSilent(`playsound minecraft:entity.enderman.teleport player ${player.name.string} ${player.x} ${player.y} ${player.z} 1 1`)
		}

		return
	}

	let mode = getHearthRecallMode(item)
	let command = mode === 'set'
		? `sethome hearthrecall`
		: `home hearthrecall`

	let source = player.createCommandSourceStack().withPermission(HEARTH_RECALL_PERMISSION_LEVEL)
	server.getCommands().performPrefixedCommand(source, command)
})
