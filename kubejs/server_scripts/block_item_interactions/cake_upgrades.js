BlockEvents.rightClicked(event => {
	const {
		block,
		hand,
		item,
		player
	} = event;
	if (hand != 'MAIN_HAND') return;

	// chocolate gateau upgrade
	const cherries = ['mysticsbiomes:cherries', 'hearthandharvest:cherry', 'environmental:cherries'];
	if (cherries.includes(item.id)) {
		if (block.id == 'bakery:chocolate_cake' && block.properties.cuts == '0') {
			item.count--;
			event.block.set('bakery:chocolate_gateau');
		}
		event.cancel();
		return;
	}
});