// Cross-mod fishing tackle compatibility between Starcatcher and Tide

ServerEvents.tags('item', event => {

	// ── Starcatcher hooks → Tide hook tag ──
	event.add('tide:hooks', [
		'starcatcher:hook',
		'starcatcher:vanilla_hook',
		'starcatcher:gold_hook',
		'starcatcher:heavy_hook',
		'starcatcher:mossy_hook',
		'starcatcher:stone_hook',
		'starcatcher:shiny_hook',
		'starcatcher:echoing_hook',
		'starcatcher:split_hook',
		'starcatcher:frozen_hook',
		'starcatcher:copper_hook',
		'starcatcher:exposed_copper_hook',
		'starcatcher:weathered_copper_hook',
		'starcatcher:oxidised_copper_hook',
		'starcatcher:amethyst_hook'
	])

	// ── Starcatcher bobbers → Tide bobber tag ──
	event.add('tide:bobbers', [
		'starcatcher:bobber',
		'starcatcher:vanilla_bobber',
		'starcatcher:clear_bobber',
		'starcatcher:steady_bobber',
		'starcatcher:slimey_bobber',
		'starcatcher:aqua_bobber',
		'starcatcher:leaf_bobber'
	])

	// ── Starcatcher bait → Tide bait tag ──
	event.add('tide:bait', [
		'starcatcher:worm',
		'starcatcher:almighty_worm',
		'starcatcher:cherry_bait',
		'starcatcher:murkwater_bait',
		'starcatcher:lush_bait',
		'starcatcher:dripstone_bait',
		'starcatcher:sculk_bait',
		'starcatcher:gunpowder_bait',
		'starcatcher:legendary_bait',
		'starcatcher:meteorological_bait',
		'starcatcher:seeking_worm'
	])

	// ── Tide hooks → Starcatcher hook tag ──
	event.add('starcatcher:hooks', [
		'tide:fishing_hook',
		'tide:iron_fishing_hook',
		'tide:lavaproof_fishing_hook',
		'tide:void_fishing_hook'
	])

	// ── Tide bobbers → Starcatcher bobber tag ──
	event.add('starcatcher:bobbers', [
		'tide:red_fishing_bobber',
		'tide:orange_fishing_bobber',
		'tide:yellow_fishing_bobber',
		'tide:lime_fishing_bobber',
		'tide:green_fishing_bobber',
		'tide:light_blue_fishing_bobber',
		'tide:cyan_fishing_bobber',
		'tide:blue_fishing_bobber',
		'tide:purple_fishing_bobber',
		'tide:magenta_fishing_bobber',
		'tide:pink_fishing_bobber',
		'tide:white_fishing_bobber',
		'tide:light_gray_fishing_bobber',
		'tide:gray_fishing_bobber',
		'tide:black_fishing_bobber',
		'tide:brown_fishing_bobber',
		'tide:apple_fishing_bobber',
		'tide:golden_apple_fishing_bobber',
		'tide:enchanted_golden_apple_fishing_bobber',
		'tide:iron_fishing_bobber',
		'tide:golden_fishing_bobber',
		'tide:diamond_fishing_bobber',
		'tide:netherite_fishing_bobber',
		'tide:amethyst_fishing_bobber',
		'tide:echo_fishing_bobber',
		'tide:chorus_fishing_bobber',
		'tide:feather_fishing_bobber',
		'tide:lichen_fishing_bobber',
		'tide:nautilus_fishing_bobber',
		'tide:pearl_fishing_bobber',
		'tide:heart_fishing_bobber',
		'tide:grassy_fishing_bobber',
		'tide:duck_fishing_bobber'
	])

	// ── Tide bait → Starcatcher bait tag ──
	event.add('starcatcher:baits', [
		'tide:bait',
		'tide:lucky_bait',
		'tide:magnetic_bait'
	])
})
