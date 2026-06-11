ServerEvents.recipes(event => {
	// Plushie Duplication
	let plushDupe = [
		'plushie_buddies:plushie_cow',
		'plushie_buddies:plushie_chicken',
		'plushie_buddies:plushie_cat',
		'plushie_buddies:plushie_camel',
		'plushie_buddies:plushie_blaze',
		'plushie_buddies:plushie_axolotl',
		'plushie_buddies:plushie_allay',
		'plushie_buddies:plushie_bat',
		'plushie_buddies:plushie_bee',
		'plushie_buddies:plushie_wither',
		'plushie_buddies:plushie_witch',
		'plushie_buddies:plushie_wandering_trader',
		'plushie_buddies:plushie_warden',
		'plushie_buddies:plushie_vindicator',
		'plushie_buddies:plushie_villager',
		'plushie_buddies:plushie_vex',
		'plushie_buddies:plushie_zombified_piglin',
		'plushie_buddies:plushie_zombie_villager',
		'plushie_buddies:plushie_zombie',
		'plushie_buddies:plushie_zoglin',
		'plushie_buddies:plushie_wolf',
		'plushie_buddies:plushie_wither_skeleton',
		'plushie_buddies:plushie_turtle',
		'plushie_buddies:plushie_trader_lama',
		'plushie_buddies:plushie_ravanger',
		'plushie_buddies:plushie_rabbit',
		'plushie_buddies:plushie_pillager',
		'plushie_buddies:plushie_pufferfish',
		'plushie_buddies:plushie_polar_bear',
		'plushie_buddies:plushie_piglin_brute',
		'plushie_buddies:plushie_piglin',
		'plushie_buddies:plushie_pig',
		'plushie_buddies:plushie_phantom',
		'plushie_buddies:plushie_ghast',
		'plushie_buddies:plushie_goat',
		'plushie_buddies:plushie_horse',
		'plushie_buddies:plushie_hoglin',
		'plushie_buddies:plushie_husk',
		'plushie_buddies:plushie_magma_cube',
		'plushie_buddies:plushie_mooshroom',
		'plushie_buddies:plushie_panda',
		'plushie_buddies:plushie_parrot',
		'plushie_buddies:plushie_frog',
		'plushie_buddies:plushie_fox',
		'plushie_buddies:plushie_evoker',
		'plushie_buddies:plushie_enderman',
		'plushie_buddies:plushie_enderdragon',
		'plushie_buddies:plushie_drowned',
		'plushie_buddies:plushie_donkey',
		'plushie_buddies:plushie_dolphin',
		'plushie_buddies:plushie_creeper',
		'plushie_buddies:plushie_sheep',
		'plushie_buddies:plushie_skeleton',
		'plushie_buddies:plushie_skeleton_horse',
		'plushie_buddies:plushie_spider',
		'plushie_buddies:plushie_squid',
		'plushie_buddies:plushie_stray',
		'plushie_buddies:plushie_strider',
		'plushie_buddies:plushie_iron_golem',
		'plushie_buddies:plushie_sniffer'
	];

	for (const plush of plushDupe) {
		event.shaped(
			Item.of(plush, 2),
			[
				'AAA',
				'ABA',
				'AAA'
			], {
				A: '#minecraft:wool',
				B: plush
			}
		)
	}

	//Sherd Dupe
	let sherdDupe = [
		'minecraft:angler_pottery_sherd',
		'minecraft:archer_pottery_sherd',
		'minecraft:arms_up_pottery_sherd',
		'minecraft:blade_pottery_sherd',
		'minecraft:brewer_pottery_sherd',
		'minecraft:burn_pottery_sherd',
		'minecraft:danger_pottery_sherd',
		'minecraft:explorer_pottery_sherd',
		'minecraft:friend_pottery_sherd',
		'minecraft:heartbreak_pottery_sherd',
		'minecraft:heart_pottery_sherd',
		'minecraft:howl_pottery_sherd',
		'minecraft:miner_pottery_sherd',
		'minecraft:mourner_pottery_sherd',
		'minecraft:plenty_pottery_sherd',
		'minecraft:prize_pottery_sherd',
		'minecraft:sheaf_pottery_sherd',
		'minecraft:shelter_pottery_sherd',
		'minecraft:skull_pottery_sherd',
		'minecraft:snort_pottery_sherd',
		'ohmysherd:invader_pottery_sherd',
		'ohmysherd:remains_pottery_sherd',
		'ohmysherd:snip_pottery_sherd',
	];

	for (const sherd of sherdDupe) {
		event.shaped(
			Item.of(sherd, 2),
			[
				' A ',
				'ABA',
				' A '
			], {
				A: 'minecraft:brick',
				B: sherd
			}
		)
	}
})