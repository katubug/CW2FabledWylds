// fairy lights has no names for delicate dyes colors
ClientEvents.lang('en_us', event => {
	const colors = {
		coral: 'Coral',
		umber: 'Umber',
		canary: 'Canary',
		wasabi: 'Wasabi',
		sacramento: 'Sacramento',
		sky: 'Sky',
		blurple: 'Blurple',
		lavender: 'Lavender',
		sangria: 'Sangria',
		rose: 'Rose'
	}

	Object.keys(colors).forEach(c => {
		event.add('fairylights', 'color.fairylights.' + c, colors[c])
	})
})
