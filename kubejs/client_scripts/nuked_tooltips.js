// Flags nuked items that leak into the world so beta testers report them.
// Item list is defined in startup_scripts/nuked_items.js

ItemEvents.modifyTooltips(event => {
    // skip ids from mods that aren't installed or the ingredient chokes
    let items = global.NUKED_ITEMS.filter(id => Item.exists(id))
    event.add(items, [
        Text.of("This item isn't meant to be used in this pack!").lightPurple(),
        Text.of('If you found one, please let Cottage Witch know where it came from.').gray()
    ])
})
