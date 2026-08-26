// Hides nuked items from JEI/EMI completely (item + all recipe displays).
// Item list is defined in startup_scripts/nuked_items.js

RecipeViewerEvents.removeEntriesCompletely('item', event => {
    for (const item of global.NUKED_ITEMS) {
        event.remove(item)
    }
})
