// fairy lights only knows vanilla dyes, so delicate dyes colors show an empty dye slot in jei
// swap its special recipes for normal ones, one per color
ServerEvents.recipes(event => {
	// name, ingredient, dye item to read the color from
	const dyes = [
		['white', '#c:dyes/white', 'minecraft:white_dye'],
		['orange', '#c:dyes/orange', 'minecraft:orange_dye'],
		['magenta', '#c:dyes/magenta', 'minecraft:magenta_dye'],
		['light_blue', '#c:dyes/light_blue', 'minecraft:light_blue_dye'],
		['yellow', '#c:dyes/yellow', 'minecraft:yellow_dye'],
		['lime', '#c:dyes/lime', 'minecraft:lime_dye'],
		['pink', '#c:dyes/pink', 'minecraft:pink_dye'],
		['gray', '#c:dyes/gray', 'minecraft:gray_dye'],
		['light_gray', '#c:dyes/light_gray', 'minecraft:light_gray_dye'],
		['cyan', '#c:dyes/cyan', 'minecraft:cyan_dye'],
		['purple', '#c:dyes/purple', 'minecraft:purple_dye'],
		['blue', '#c:dyes/blue', 'minecraft:blue_dye'],
		['brown', '#c:dyes/brown', 'minecraft:brown_dye'],
		['green', '#c:dyes/green', 'minecraft:green_dye'],
		['red', '#c:dyes/red', 'minecraft:red_dye'],
		['black', '#c:dyes/black', 'minecraft:black_dye'],
		['coral', 'delicate_dyes:coral_dye', 'delicate_dyes:coral_dye'],
		['umber', 'delicate_dyes:umber_dye', 'delicate_dyes:umber_dye'],
		['canary', 'delicate_dyes:canary_dye', 'delicate_dyes:canary_dye'],
		['wasabi', 'delicate_dyes:wasabi_dye', 'delicate_dyes:wasabi_dye'],
		['sacramento', 'delicate_dyes:sacramento_dye', 'delicate_dyes:sacramento_dye'],
		['sky', 'delicate_dyes:sky_dye', 'delicate_dyes:sky_dye'],
		['blurple', 'delicate_dyes:blurple_dye', 'delicate_dyes:blurple_dye'],
		['lavender', 'delicate_dyes:lavender_dye', 'delicate_dyes:lavender_dye'],
		['sangria', 'delicate_dyes:sangria_dye', 'delicate_dyes:sangria_dye'],
		['rose', 'delicate_dyes:rose_dye', 'delicate_dyes:rose_dye']
	]

	const paper = 'minecraft:paper'
	const string = '#c:strings'
	const iron = 'minecraft:iron_ingot'
	const pane = '#c:glass_panes'
	const whitePane = 'minecraft:white_stained_glass_pane'
	const nugget = 'minecraft:gold_nugget'

	// item, old recipe id, count, pattern, keys. D is always the dye
	const recipes = [
	['fairy_light', 'fairy_light', 4, 
		[
		' I '
		, 'IDI', 
		' G '
	], {
		I: iron,
		G: pane
	}],
	['paper_lantern', 'paper_lantern', 4, 
		[
			' I ', 
			'PDP', 
			'PPP'
		], {
		I: iron,
		P: paper
	}],
	['orb_lantern', 'orb_lantern', 4, 
		[
			' I ', 
			'SDS', 
			' W '
		], {
		I: iron,
		S: string,
		W: 'minecraft:white_wool'
	}],
	['flower_light', 'flower_light', 4, 
		[
			' I ', 
			'RDB', 
			' Y '
		], {
		I: iron,
		R: 'minecraft:poppy',
		B: 'minecraft:blue_orchid',
		Y: 'minecraft:dandelion'
	}],
	['candle_lantern_light', 'candle_lantern_light', 4, 
		[
			' I ', 
			'GDG', 
			'IGI'
		], {
		I: iron,
		G: nugget
	}],
	['oil_lantern_light', 'oil_lantern_light', 4, 
		[
			' I ', 
			'SDS', 
			'IGI'
		], {
		I: iron,
		S: 'minecraft:stick',
		G: pane
	}],
	['jack_o_lantern', 'jack_o_lantern', 4, 
		[
			' I ',
			 'SDS', 
			 'GPG'
			], {
		I: iron,
		S: '#minecraft:wooden_slabs',
		G: 'minecraft:torch',
		P: 'minecraft:jack_o_lantern'
	}],
	['skull_light', 'skull_light', 4, 
		[
			' I ', 
			'IDI', 
			' B '
		], {
		I: iron,
		B: 'minecraft:bone'
	}],
	['ghost_light', 'ghost_light', 4, 
		[
			' I ', 
			'PDP', 
			'IGI'
		], {
		I: iron,
		P: paper,
		G: whitePane
	}],
	['spider_light', 'spider_light', 4, 
		[
			' I ', 
			'WDW', 
			'SES'
		], {
		I: iron,
		W: 'minecraft:cobweb',
		S: string,
		E: 'minecraft:spider_eye'
	}],
	['witch_light', 'witch_light', 4, 
		[
			' I ', 
			'BDW', 
			' S '
		], {
		I: iron,
		B: 'minecraft:glass_bottle',
		W: 'minecraft:wheat',
		S: 'minecraft:stick'
	}],
	['snowflake_light', 'snowflake_light', 4, 
		[
			' I ', 
			'SDS', 
			' G '
		], {
		I: iron,
		S: 'minecraft:snowball',
		G: whitePane
	}],
	['heart_light', 'heart_light', 4, 
		[
			' I ', 
			'IDI', 
			' G '
		], {
		I: iron,
		G: pane
	}],
	['moon_light', 'moon_light', 4, 
		[
			' I ', 
			'GDG', 
			' C '
		], {
		I: iron,
		G: whitePane,
		C: 'minecraft:clock'
	}],
	['star_light', 'star_light', 4, 
		[
			' I ', 
			'PDP', 
			' G '
		], {
		I: iron,
		P: whitePane,
		G: nugget
	}],
	['icicle_lights', 'icicle_lights', 4, 
		[
			' I ', 
			'GDG', 
			' B '
		], {
		I: iron,
		G: pane,
		B: 'minecraft:water_bucket'
	}],
	['meteor_light', 'meteor_light', 4, 
		[
			' I ', 
			'GDG', 
			'IPI'
		], {
		I: iron,
		G: 'minecraft:glowstone_dust',
		P: paper
	}],
	['tinsel', 'tinsel_garland', 1, 
		[
			' P ', 
			'ISI', 
			' D '
		], {
		P: paper,
		I: iron,
		S: string
	}],
	['triangle_pennant', 'triangle_pennant', 1, 
		[
			'S S', 
			'PDP', 
			' P '
		], {
		S: string,
		P: paper
	}],
	['spearhead_pennant', 'spearhead_pennant', 1, 
		[
			'S S', 
			'PDP', 
			' PP'
		], {
		S: string,
		P: paper
	}],
	['swallowtail_pennant', 'swallowtail_pennant', 1, 
		[
		'S S', 
		'PDP', 
		'P P'
	], {
		S: string,
		P: paper
	}],
	['square_pennant', 'square_pennant', 1, 
		[
			'S S', 
			'PDP', 
			'PPP'
		], {
		S: string,
		P: paper
	}]
]

	recipes.forEach(r => {
		event.remove({ id: 'fairylights:' + r[1] })

		dyes.forEach(dye => {
			// DyeableItem.getColor is ambiguous in rhino. mod overrides black and gray
			let color = Item.of(dye[2]).item.dyeColor.textureDiffuseColor
			if (dye[0] == 'black') color = -13487566
			if (dye[0] == 'gray') color = -10461088

			let keys = { D: dye[1] }
			Object.keys(r[4]).forEach(k => { keys[k] = r[4][k] })

			event.shaped(
				Item.of('fairylights:' + r[0] + '[fairylights:color=' + color + ']', r[2]),
				r[3],
				keys
			).id('fabled_wylds:fairylights/' + r[0] + '_' + dye[0])
		})
	})
})
