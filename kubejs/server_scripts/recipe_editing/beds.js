ServerEvents.recipes(event => {
	// Vanilla Colors
    let vanillaColors = [
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
        "cyan",
        "white"
    ];

    // Delicate Dyes Colors
    let delicateDyesColors = [
        "coral",
        "umber",
        "canary",
        "wasabi",
        "sacramento",
        "sky",
        "blurple",
        "lavender",
        "sangria",
        "rose"
    ]

    for (const color of vanillaColors) {
        event.remove({id: 'minecraft:dye_'+color+'_bed'});
        event.remove({id: 'delicate_dyes:'+color+'_bed_from_dye'});

        event.shapeless(
			Item.of('minecraft:'+ color +'_bed'),
			[
			'#c:dyes/'+color,
            '#c:simple_beds'
		    ]
		)
    }

    for (const color of delicateDyesColors) {
		event.remove({id: 'delicate_dyes:'+color+'_bed_from_dye'});
		
        event.shapeless(
			Item.of('delicate_dyes:'+ color +'_bed'),
			[
			'#c:dyes/'+color,
            '#c:simple_beds'
		    ]
		)
	}
})


