ServerEvents.recipes(event => {
	// Plushie Duplication
	let usedColors = [
        "red",
        "orange",
        "yellow",
        "green",
        "lime",
        "light_blue",
        "blue",
        "purple",
        "magenta",
        "pink",
        "brown",
        "black",
        "gray",
        "light_gray",
        "cyan"
    ];

    for (const color of usedColors) {
		event.shapeless(
			Item.of('waystones:'+ color +'_sharestone'),
			[
			'#c:dyes/'+color,
			'#waystones:waystones'
		    ]
		)
		event.remove({id: 'waystones:'+color+'_sharestone'});
	}

})