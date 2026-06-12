ServerEvents.recipes(event => {

	//Cakes use Cake Dough
	//First, fallback Cake recipe for vanilla
	event.shaped(
		Item.of('minecraft:cake'),
		[
			'AAA',
			'BCB',
			'DDD'
		], {
			A: '#c:milk/milk_bottle',
			B: '#c:sugar',
			C: '#c:cooking_eggs',
			D: '#c:wheat'
		}
	)
	//Basic Cake
	event.shaped(
		Item.of('minecraft:cake'),
		[
			'B D',
			'ACA'
		], {
			A: '#c:milk/milk_bottle',
			B: '#c:sugar',
			C: 'bakery:cake_dough',
			D: '#c:wheat'
		}
	)
	//Coffee Cake
	event.shaped(
		Item.of('farmersrespite:coffee_cake'),
		[
			'E E',
			'BED',
			'ACA'
		], {
			A: '#c:milk/milk_bottle',
			B: '#c:sugar',
			C: 'bakery:cake_dough',
			D: '#c:wheat',
			E: 'farmersrespite:coffee_beans'
		}
	)
	//Carrot Cake
	event.shaped(
		Item.of('hearthandharvest:carrot_cake'),
		[
			'E E',
			'BED',
			'ACA'
		], {
			A: '#c:milk/milk_bottle',
			B: '#c:sugar',
			C: 'bakery:cake_dough',
			D: '#c:wheat',
			E: 'minecraft:carrot'
		}
	)
	//Vanilla Cake
	event.shaped(
		Item.of('mysticsbiomes:vanilla_cake'),
		[
			'E E',
			'BED',
			'ACA'
		], {
			A: 'mysticsbiomes:vanilla_milk_bucket',
			B: '#c:sugar',
			C: 'bakery:cake_dough',
			D: '#c:wheat',
			E: 'mysticsbiomes:vanilla_beans'
		}
	)
	//Strawberry Cake
	event.shaped(
		Item.of('mysticsbiomes:strawberry_cake'),
		[
			'E E',
			'BED',
			'ACA'
		], {
			A: 'mysticsbiomes:strawberry_milk_bucket',
			B: '#c:sugar',
			C: 'bakery:cake_dough',
			D: '#c:wheat',
			E: 'mysticsbiomes:sweet_strawberry'
		}
	)
	//Milk Chocolate Cake
	event.shaped(
		Item.of('mysticsbiomes:chocolate_cake'),
		[
			'B D',
			'ACA'
		], {
			A: 'mysticsbiomes:chocolate_milk_bucket',
			B: '#c:sugar',
			C: 'bakery:cake_dough',
			D: '#c:wheat'
		}
	)
	//pink Cake
	event.shaped(
		Item.of('mysticsbiomes:pink_frosted_cake'),
		[
			'BED',
			'ACA'
		], {
			A: '#c:milk/milk_bottle',
			B: '#c:sugar',
			C: 'bakery:cake_dough',
			D: '#c:wheat',
			E: 'mysticsbiomes:pink_egg'
		}
	)
	//orange Cake
	event.shaped(
		Item.of('mysticsbiomes:orange_frosted_cake'),
		[
			'BED',
			'ACA'
		], {
			A: '#c:milk/milk_bottle',
			B: '#c:sugar',
			C: 'bakery:cake_dough',
			D: '#c:wheat',
			E: 'mysticsbiomes:orange_egg'
		}
	)
	//yellow Cake
	event.shaped(
		Item.of('mysticsbiomes:yellow_frosted_cake'),
		[
			'BED',
			'ACA'
		], {
			A: '#c:milk/milk_bottle',
			B: '#c:sugar',
			C: 'bakery:cake_dough',
			D: '#c:wheat',
			E: 'mysticsbiomes:yellow_egg'
		}
	)
	//lime Cake
	event.shaped(
		Item.of('mysticsbiomes:lime_frosted_cake'),
		[
			'BED',
			'ACA'
		], {
			A: '#c:milk/milk_bottle',
			B: '#c:sugar',
			C: 'bakery:cake_dough',
			D: '#c:wheat',
			E: 'mysticsbiomes:lime_egg'
		}
	)
	//cyan Cake
	event.shaped(
		Item.of('mysticsbiomes:cyan_frosted_cake'),
		[
			'BED',
			'ACA'
		], {
			A: '#c:milk/milk_bottle',
			B: '#c:sugar',
			C: 'bakery:cake_dough',
			D: '#c:wheat',
			E: 'mysticsbiomes:cyan_egg'
		}
	)
	//purple Cake
	event.shaped(
		Item.of('mysticsbiomes:purple_frosted_cake'),
		[
			'BED',
			'ACA'
		], {
			A: '#c:milk/milk_bottle',
			B: '#c:sugar',
			C: 'bakery:cake_dough',
			D: '#c:wheat',
			E: 'mysticsbiomes:purple_egg'
		}
	)

	//Pies!
	//Chocolate Pie
	event.shaped(
		Item.of('farmersdelight:chocolate_pie'),
		[
			'DDD',
			'CCC',
			'BAB'
		], {
			A: 'farmersdelight:pie_crust',
			B: '#c:sugar',
			C: '#c:milk/milk_bottle',
			D: '#c:chocolate'
		}
	)
	//Chillberry Pie
	event.shaped(
		Item.of('hexalia:chillberry_pie'),
		[
			'DCD',
			'BAB'
		], {
			A: 'farmersdelight:pie_crust',
			B: '#c:sugar',
			C: '#c:cooking_eggs',
			D: 'hexalia:chillberries'
		}
	)
	//Cherry Pie
	event.shaped(
		Item.of('mysticsbiomes:cherry_pie'),
		[	
			'C',
			'D',
			'A'
		], {
			A: 'farmersdelight:pie_crust',
			C: 'minecraft:wheat',
			D: 'hearthandharvest:cherry_jam'
		}
	)
	//Peach Pie
	event.shaped(
		Item.of('mysticsbiomes:peach_pie'),
		[
			' C ',
			' D ',
			'BAB'
		], {
			A: 'farmersdelight:pie_crust',
			C: 'minecraft:wheat',
			D: 'mysticsbiomes:peach',
			B: 'minecraft:sugar'
		}
	)

	//Cookies!
	//Sweet Berry Glazed Cookie
	event.shaped(
		Item.of('bakery:sweetberry_glazed_cookie'),
		[
			'BA'
		], {
			A: 'farmersdelight:honey_cookie',
			B: 'bakery:sweetberry_jam'
		}
	)
	//Chocolate Glazed Cookie
	event.shaped(
		Item.of('bakery:chocolate_glazed_cookie'),
		[
			'BA'
		], {
			A: 'farmersdelight:honey_cookie',
			B: 'bakery:chocolate_jam'
		}
	)
	//Strawberry Glazed Cookie
	event.shaped(
		Item.of('bakery:strawberry_glazed_cookie'),
		[
			'BA'
		], {
			A: 'farmersdelight:honey_cookie',
			B: 'bakery:strawberry_jam'
		}
	)
	//Torchberry Cookie
	event.shaped(
		Item.of('twilightdelight:torchberry_cookie', 8),
		[
			'BA',
			'A '
		], {
			A: 'minecraft:wheat',
			B: 'twilightforest:torchberries'
		}
	)
	//Peanut Butter Cookie
	event.shaped(
		Item.of('hearthandharvest:peanut_butter_cookie', 8),
		[
			'BA',
			'A '
		], {
			A: 'minecraft:wheat',
			B: 'hearthandharvest:peanut_butter'
		}
	)
	//Sweet Berry Cookie
	event.shaped(
		Item.of('farmersdelight:sweet_berry_cookie', 8),
		[
			'BA',
			'A '
		], {
			A: 'minecraft:wheat',
			B: 'minecraft:sweet_berries'
		}
	)
	//Green Tea Cookie
	event.shaped(
		Item.of('farmersrespite:green_tea_cookie', 8),
		[
			'BA',
			'A '
		], {
			A: 'minecraft:wheat',
			B: 'herbalbrews:dried_green_tea'
		}
	)
})