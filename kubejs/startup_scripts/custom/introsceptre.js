
BlockEvents.rightClicked(event => {
	let block = event.getBlock()
	let player = event.getPlayer()
	if((block.id== 'botania:mana_pool' || block.id== 'botania:diluted_pool' || block.id== 'botania:fabulous_pool' || block.id== 'botanicadds:dreaming_pool') && player.getMainHandItem().id == 'kubejs:introsceptre' && event.getHand() == 'main_hand') {
	    let cap = event.block.entity.getCapability(BotaniaCapabilities.MANA_RECEIVER).orElse(null)
    	if (cap != null) {
		player.sendSystemMessage(Text.aqua(Text.string(cap.getCurrentMana())).append(Text.gold(Text.string(" Mana Stored."))), true)
		}
	}
})			