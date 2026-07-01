BlockEvents.rightClicked(event => {
	//main hand only
	const {
		block,
		hand,
		item
	} = event;
	if (hand != 'MAIN_HAND') return;
	if (item.id == 'mysticsbiomes:cherries' && block.id == 'bakery:chocolate_cake') {
		item.count--
		event.block.set('bakery:chocolate_gateau')
	}
});