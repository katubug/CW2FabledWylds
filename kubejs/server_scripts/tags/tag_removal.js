ServerEvents.tags('item', event => {

	//Remove All Tags
	let toNuke = [
      	'#forge:eggs'
	]

	for (const nuke of toNuke) {
        event.removeAllTagsFrom(nuke);
    } 

})