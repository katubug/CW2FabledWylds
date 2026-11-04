// dd mixin jams these in at recipe load so kubejs/data cant override them
const DDCompatRecipe = Java.loadClass('com.fizzware.dramaticdoors.neoforge.compat.DDCompatRecipe')

const ddDeadRecipe = recipe => {
	let json = String(recipe)
	return json.includes('vanillabackport:pale_oak_door')
}

DDCompatRecipe.SHORT_DOOR_RECIPES.removeIf(ddDeadRecipe)
DDCompatRecipe.TALL_DOOR_RECIPES.removeIf(ddDeadRecipe)

ServerEvents.recipes(event => {
	// same recipes dd would make, pointed at doors that exist
	// no jacaranda door anymore, lavender's the closest match
	;[
		['pale_oak', 'minecraft:pale_oak_door'],
	].forEach(door => {
		event.stonecutting('2x dramaticdoors:short_' + door[0] + '_door', door[1])
			.id('dramaticdoors:short_' + door[0] + '_door')

		event.shaped('2x dramaticdoors:tall_' + door[0] + '_door', ['#', '#', '#'], { '#': door[1] })
			.group('tall_wooden_door')
			.id('dramaticdoors:tall_' + door[0] + '_door')
	})
})
