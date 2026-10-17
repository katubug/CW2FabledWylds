(() => {

	//This script allows players to go Trick or Treating around Halloween, by right-clicking entities with a Bundle in their main hand. They will randomly receive a trick or a treat from a specified list of events. As written, it requires external mods like Hearth & Harvest, Farmer's Delight, etc. But those can easily be changed for your personal modpack.

	//Thanks to Lexxie and Hof for helping with the date portion of things!
	//Date info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

	//Thanks to Rad for helping with the removal of the stages after the dates pass!

	// halloween week, oct 25-31. months start at 0
	function isTrickOrTreatTime(date) {
		return (date.getMonth() == 9) && (date.getDate() >= 25);
	}

	// wipes last year's progress
	function checkTrickOrTreatYear(player, year) {
		let pd = player.persistentData
		if (pd.getInt('cw_tot_year') != year) {
			pd.putInt('cw_tot_year', year)
			pd.putBoolean('cw_tot_pail', false)
			pd.putString('cw_tot_visited', '')
		}
	}

	// visited mob types, comma separated
	function getVisited(player) {
		let s = String(player.persistentData.getString('cw_tot_visited'))
		return s == '' ? [] : s.split(',')
	}

	const TREATS = [
		{ msg: "...treat! Here's some candy corn!", item: 'hearthandharvest:candy_corn' },
		{ msg: "...treat! Here's some candy!", item: 'supplementaries:candy' },
		{ msg: "...treat! Here's a cookie!", item: 'farmersdelight:honey_cookie' },
		{ msg: "...treat! Here's a cookie!", item: 'farmersdelight:sweet_berry_cookie' },
		{ msg: "...treat! Here's a cookie!", item: 'hearthandharvest:maple_cookie' },
		{ msg: "...treat! Here's some cotton candy!", item: 'hearthandharvest:cotton_candy' },
		{ msg: "...treat! Here's a caramel apple!", item: 'hearthandharvest:caramel_apple' },
		{ msg: "...treat! Here's a candied crabapple!", item: 'trailandtales_delight:candied_crystal_crabapple' },
		{ msg: "...treat! Here's some chocolate!", item: 'bakery:chocolate_truffle' },
		{ msg: "...treat! Here's a roasted marshmallow!", item: 'hearthandharvest:roasted_marshmallow_stick' }
	]

	PlayerEvents.loggedIn(event => {
		let player = event.player
		let currentTime = new Date()
		if (!isTrickOrTreatTime(currentTime)) return
		checkTrickOrTreatYear(player, currentTime.getFullYear())
		if (!player.persistentData.getBoolean('cw_tot_pail')) {
			player.give(Item.of('minecraft:orange_bundle')
				.withCustomName(Text.of('Trick or Treat Pail').italic(false))
				.withLore([Text.of('A cute little Halloween pail for Trick or Treating. However, any Bundle will do in a pinch.').gold().italic(false)]))
			player.persistentData.putBoolean('cw_tot_pail', true)
		}
	})

	// no item filter, the filter can't take tags
	ItemEvents.entityInteracted(event => {
		const { player, target, item } = event
		if (String(event.hand) != 'MAIN_HAND') return
		if (!item.hasTag('minecraft:bundles')) return
		if (!target.living || target.player) return

		let currentTime = new Date()

		//Check whether the date is in Halloween week. January is 0, so October is 9.
		if (!isTrickOrTreatTime(currentTime)) return
		checkTrickOrTreatYear(player, currentTime.getFullYear())

		//Check whether the player has already visited this entity type
		let clicked = String(target.type)
		let visited = getVisited(player)
		if (visited.indexOf(clicked) != -1) {
			player.tell(`You have already received a Trick or Treat from this creature type.`)
			return
		}
		//If player has not clicked that entity yet, execute the Trick or Treat script.
		player.tell("Hmmm, you can have a...")
		//Remember the entity type so that players can't ToT more than once per entity.
		visited.push(clicked)
		player.persistentData.putString('cw_tot_visited', visited.join(','))

		// grab these now, player moves during the delay
		let name = String(player.name.string)
		let x = player.x
		let y = player.y
		let z = player.z

		event.server.scheduleInTicks(1.5 * 20, callback => {
			//Set two RNG variables: One for Trick vs Treat, and one for WHICH Trick or Treat
			let rng = Math.random()
			let subRng = Math.random()
			//Treats
			if (rng > 0.25) {
				let treat = TREATS[Math.floor(subRng * TREATS.length)]
				player.tell(treat.msg)
				player.give(treat.item)
				return
			}
			//Tricks
			if (subRng <= 0.20) {
				player.tell("...trick. Enjoy your new rock!")
				player.give(Item.of('minecraft:stone_button')
					.withCustomName(Text.of('Rock').italic(false))
					.withLore([Text.of('Aww, I got a rock...').yellow().italic(false)]))
				return
			}
			if (subRng <= 0.40) {
				player.tell("...trick! Enjoy your new dirt!")
				player.give("minecraft:dirt")
				return
			}
			if (subRng <= 0.60) {
				player.tell("...trick! Enjoy fighting the Warden!")
				event.server.runCommandSilent(`playsound minecraft:entity.warden.emerge player ${name} ${x} ${y} ${z} 10`)
				event.server.scheduleInTicks(3.5 * 20, callback => {
					player.tell("Hah! Just kidding. We wouldn't do that to you.")
				})
				return
			}
			if (subRng <= 0.80) {
				player.tell("...trick! Enjoy your flight!")
				event.server.runCommandSilent(`effect give ${name} minecraft:levitation 10 1`)
				return
			}
			if (subRng <= 0.90) {
				player.tell("...trick! Enjoy ANGRY BEES!")
				for (let i = 0; i < 4; i++) {
					event.server.runCommandSilent(`summon minecraft:bee ${x} ${y} ${z} {AngerTime:999}`)
				}
				// at the player, not world spawn
				event.server.runCommandSilent(`execute at ${name} as @e[type=minecraft:bee,distance=..4,limit=4,sort=nearest] run data modify entity @s AngryAt set from entity ${name} UUID`)
				return
			}
			player.tell("...trick! Watch out for that Creeper!!")
			event.server.runCommandSilent(`playsound minecraft:entity.creeper.primed player ${name} ${x} ${y} ${z} 10`)
			event.server.runCommandSilent(`summon sheep ${x} ${y} ${z} {Color:13,CustomName:'[{"text":"Dinnerbone"}]',Silent:1b}`)
		})
	})

})();
