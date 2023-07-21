BlockEvents.rightClicked(event => {
	let block = event.getBlock()
	let player = event.getPlayer()
	if(block.id=='supplementaries:end_stone_lamp' &&  player.getMainHandItem().id == 'minecraft:glass_bottle' && event.getHand() == 'main_hand') {
		block.popItem('botania:ender_air_bottle')
		player.getMainHandItem().shrink(1)
		block.set("minecraft:air")
	}
})