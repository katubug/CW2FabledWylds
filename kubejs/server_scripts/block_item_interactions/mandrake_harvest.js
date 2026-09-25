BlockEvents.leftClicked('hexalia:mandrake_crop', event => {
	const { level, block, player } = event;
	let mandrake = player.block.createEntity("enchanted:mandrake")
	if (block.properties.age != '3') return;
	mandrake.setRotation(player.yaw, player.pitch)
    mandrake.setPos(player.x, player.y + 1, player.z)
    // spawn the mandrake in the world
    mandrake.spawn()

	//block.set('minecraft:air');
	//event.server.runCommandSilent(
	//	`summon enchanted:mandrake ${block.x} ${block.y} ${block.z}`
	//);
});