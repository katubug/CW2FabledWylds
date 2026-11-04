// one missing entry and the whole tag gets thrown out, so pull the dead ones
ServerEvents.tags('item', event => {
	// backpackrs jar, ars compat isnt installed
	event.remove('sophisticatedbackpacks:upgrade', '@arssophisticatedcompat')

	// old forge tag
	event.remove('snuffles:snuffle_food', '#forge:crops/potato')
	event.add('snuffles:snuffle_food', '#c:crops/potato', 'minecraft:potato')

	// supplementaries compat datapack
	event.remove('supplementaries:cookies', [
		'endersdelight:uncanny_cookies',
		'rainbowreef:basslet_cookie',
		'aether:gingerbread_man',
		'aether:candy_cane',
		'aetherdelight:oat_cookie',
		'miners_delight:bat_cookie',
		'abnormals_delight:maple_cookie',
		'abnormals_delight:cherry_cookie',
		'estrogen:estrogen_chip_cookie'
	])

	event.remove('supplementaries:hourglass_dusts', [
		'illagerinvasion:unusual_dust',
		'illagerinvasion:illusionary_dust',
		'alexscaves:sulfur_dust',
		'alexscaves:moth_dust',
		'tfmg:nitrate_dust',
		'tfmg:sulfur_dust',
		'tfmg:coal_coke_dust',
		'tfmg:thermite_powder',
		'tfmg:limesand',
		'deeperdarker:soul_dust',
		'better_end:ender_dust'
	])
})
