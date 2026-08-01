BlockEvents.rightClicked(event => {
	//needs reworking to stop the other right click events

	
	const {
		block,
		hand,
		item,
		player
	} = event;
	if (hand != 'MAIN_HAND') return;
	if (item.id == 'mysticsbiomes:cherries' || item.id == 'hearthandharvest:cherry' || item.id == 'environmental:cherries') {
		if (block.id == 'bakery:chocolate_cake') {
			item.count--
			event.block.set('bakery:chocolate_gateau')
		}
	}
});