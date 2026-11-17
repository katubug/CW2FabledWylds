ServerEvents.tags('item', event => {

	// everything that isn't food, used by easyshulkerboxes lunchbag providers
	// same check solonion uses, so it matches the bag's own rules
	let notFood = []
	Item.getTypeList().forEach(id => {
		try {
			if (Item.of(id).getFoodProperties(null) == null) notFood.push(String(id))
		} catch (e) {
			notFood.push(String(id))
		}
	})
	event.add('fabled_wylds:not_in_lunchbags', notFood)
})
