ServerEvents.tags('item', event => {
	// plushies tag for bountiful / filter quests
	event.add('c:plushies', /^plushie_buddies:plushie_/, 'kubejs:witch_cat_plushie')
})
