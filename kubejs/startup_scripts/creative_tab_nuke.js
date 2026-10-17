// Pulls nuked items out of every creative tab + search.
// Item list is defined in startup_scripts/nuked_items.js
// raw neoforge event so we don't need a list of every tab

const $BuildCreativeModeTabContentsEvent = Java.loadClass('net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent')
const $EventPriority = Java.loadClass('net.neoforged.bus.api.EventPriority')
const $TabVisibility = Java.loadClass('net.minecraft.world.item.CreativeModeTab$TabVisibility')

// lowest so mods that add stuff in this same event go first
NativeEvents.onEvent($EventPriority.LOWEST, $BuildCreativeModeTabContentsEvent, event => {
    let nukedSet = new Set(global.NUKED_ITEMS)

    // toArray() copies, can't remove while iterating the live set
    for (let stack of event.getParentEntries().toArray()) {
        if (nukedSet.has(String(stack.id))) event.remove(stack, $TabVisibility.PARENT_TAB_ONLY)
    }
    for (let stack of event.getSearchEntries().toArray()) {
        if (nukedSet.has(String(stack.id))) event.remove(stack, $TabVisibility.SEARCH_TAB_ONLY)
    }
})
