// Removes nuked items from player inventories at runtime.
// Item list is defined in startup_scripts/nuked_items.js

let nukedSet = null

function getNukedSet() {
    if (nukedSet === null) {
        nukedSet = new Set(global.NUKED_ITEMS)
    }
    return nukedSet
}

// Fires whenever a player's inventory changes — only checks the changed slot
PlayerEvents.inventoryChanged(event => {
    if (getNukedSet().has(event.item.id)) {
        event.player.inventory.setItem(event.slot, ItemStack.EMPTY)
        event.player.tell([event.item.getHoverName(), Text.of(' §7§ohas been disabled in this modpack.')])
    }
})
