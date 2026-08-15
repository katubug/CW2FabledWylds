ItemEvents.rightClicked('enchanted:mandrake_root', event => {
    if (event.player.isCrouching()) {
        FieldGuide.unlock(event.player, 'minecraft:cow')
        event.player.tell('You unlocked the Cow entry!')
    }
})