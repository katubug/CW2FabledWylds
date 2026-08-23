// Mail Order Catalogue payment. A custom task becomes a "buy" button that pays out of
// the player's Create: Numismatics bank account, topping up from loose coins if the account is short.
//
//   Add Task -> Custom, then edit the task and set tag "price_<spurs>"", ie price_64
//   Prices are in spurs: spur 1, bevel 8, sprocket 16, cog 64, crown 512, sun 4096.
//	 Need to relog world after the quest is edited.

const $Numismatics = Java.loadClass('dev.ithundxr.createnumismatics.Numismatics')
const $Coin = Java.loadClass('dev.ithundxr.createnumismatics.content.backend.Coin')
const $BankAccountType = Java.loadClass('dev.ithundxr.createnumismatics.content.backend.BankAccount$Type')
const $Notification = Java.loadClass('dev.latvian.mods.kubejs.util.NotificationToastData')

const PRICE_TAG_PREFIX = 'price_'

// Ascending by value, so coins get spent smallest first and hand back the least change.
const COIN_TIERS = []
const COIN_TIERS_BY_ID = {}

for (let i = 0; i < $Coin.byValueAscending.length; i++) {
	COIN_TIERS.push({
		coin: $Coin.byValueAscending[i],
		id: `numismatics:${$Coin.byValueAscending[i].getName()}`,
		value: $Coin.byValueAscending[i].value
	})
	COIN_TIERS_BY_ID[COIN_TIERS[i].id] = COIN_TIERS[i]
}

// 56 = "3 Sprockets, 1 Bevel"
function describeSpurs(amount) {
	if (amount <= 0) return 'nothing'

	let parts = []
	let left = amount

	for (let i = COIN_TIERS.length - 1; i >= 0; i--) {
		let count = Math.floor(left / COIN_TIERS[i].value)
		if (count <= 0) continue

		left -= count * COIN_TIERS[i].value
		parts.push(`${count} ${COIN_TIERS[i].coin.getDisplayName()}${count === 1 ? '' : 's'}`)
	}

	return parts.join(', ')
}

function priceFromTask(task) {
	let tags = task.getTags().toArray()

	for (let i = 0; i < tags.length; i++) {
		let tag = String(tags[i])
		if (tag.indexOf(PRICE_TAG_PREFIX) !== 0) continue

		let price = parseInt(tag.substring(PRICE_TAG_PREFIX.length), 10)
		if (!isNaN(price) && price > 0) return price
	}

	return 0
}

// Every coin stack the player has in inventory, smallest denomination first.
function collectCoins(player) {
	let inventory = player.getInventory()
	let stacks = []
	let total = 0

	for (let slot = 0; slot < inventory.getContainerSize(); slot++) {
		let stack = inventory.getItem(slot)
		if (stack.isEmpty()) continue

		let tier = COIN_TIERS_BY_ID[String(stack.getId())]
		if (!tier) continue

		stacks.push({ slot: slot, value: tier.value, count: stack.getCount() })
		total += tier.value * stack.getCount()
	}

	stacks.sort((a, b) => a.value - b.value)

	return { total: total, stacks: stacks }
}

// Takes coins worth at least `owed`, cheapest first. Returns what was actually handed over, which
// can overshoot when the last coin used is worth more than the remainder - that becomes change.
function spendCoins(player, purse, owed) {
	let inventory = player.getInventory()
	let paid = 0

	for (let i = 0; i < purse.stacks.length && paid < owed; i++) {
		let take = Math.min(purse.stacks[i].count, Math.ceil((owed - paid) / purse.stacks[i].value))
		inventory.removeItem(purse.stacks[i].slot, take)
		paid += take * purse.stacks[i].value
	}

	player.inventoryMenu.broadcastChanges()

	return paid
}

function giveCoins(player, amount) {
	let left = amount

	for (let i = COIN_TIERS.length - 1; i >= 0 && left > 0; i--) {
		let count = Math.floor(left / COIN_TIERS[i].value)
		if (count <= 0) continue

		left -= count * COIN_TIERS[i].value

		while (count > 0) {
			let give = Math.min(count, 64)
			count -= give
			player.give(COIN_TIERS[i].coin.asStack(give))
		}
	}
}

// Toast and chat to notify players
function announce(player, title, body, chat) {
	player.notify($Notification.ofTitle(Text.of(title), body ? Text.of(body) : null))
	player.tell(chat)
}

function tryPurchase(data, player, price) {
	let account = $Numismatics.BANK.getOrCreateAccount(player.getUuid(), $BankAccountType.PLAYER)
	let banked = account.getBalance()
	let purse = collectCoins(player)

	// Checked before anything is taken, so you don't lose money and get nothing
	if (banked + purse.total < price) {
		announce(player, 'Not enough coin', `That costs ${describeSpurs(price)}.`,
			`§cYou're a bit short.§r That costs §b${describeSpurs(price)}§r, and you have §a${describeSpurs(banked)}§r in the bank and §a${describeSpurs(purse.total)}§r on you.`)
		return
	}

	let fromBank = Math.min(banked, price)

	if (fromBank > 0 && !account.deduct(fromBank)) {
		announce(player, 'Purchase failed', 'The bank turned you down.',
			"§cThe bank wouldn't part with your money just now.§r Give it another try?")
		return
	}

	let owed = price - fromBank
	let fromPocket = owed > 0 ? spendCoins(player, purse, owed) : 0
	let change = fromPocket - owed

	if (change > 0) giveCoins(player, change)

	data.setProgress(1)

	let emptied = banked > 0 && account.getBalance() === 0
	let receipt
	let chat

	if (emptied) {
		receipt = 'That was the last of your savings!'
		chat = `§aPaid §b${describeSpurs(price)}§r. §dThat was the last of your savings - your account is empty now.§r Time to earn a bit more, I think!`
	} else if (fromBank > 0 && owed > 0) {
		receipt = `${describeSpurs(fromBank)} from the bank, the rest out of your pocket.`
		chat = `§aPaid §b${describeSpurs(price)}§r - §a${describeSpurs(fromBank)}§r from the bank, the rest out of your pocket.`
	} else if (fromBank > 0) {
		receipt = `From the bank. ${describeSpurs(account.getBalance())} left.`
		chat = `§aPaid §b${describeSpurs(price)}§r from the bank. §a${describeSpurs(account.getBalance())}§r left.`
	} else {
		receipt = 'Out of pocket.'
		chat = `§aPaid §b${describeSpurs(price)}§r out of pocket.`
	}

	announce(player, `Paid ${describeSpurs(price)}`, receipt, chat)
}

FTBQuestsEvents.customTask(event => {
	let price = priceFromTask(event.task)
	if (price <= 0) return

	event.setMaxProgress(1)
	// Must be 0. Any other value makes FTB Quests auto-submit the task every N ticks
	event.setCheckTimer(0)
	event.setEnableButton(true)
	event.setCheck((data, player) => tryPurchase(data, player, price))

	console.info(`[shop] armed quest task ${event.task} at ${price} spurs`)
})
