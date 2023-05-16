PlayerEvents.loggedIn(event => {
    if(event.player.persistentData.join == null ) {
        event.player.inventory.setStackInSlot(8, Item.of('ars_nouveau:novice_spell_book').getItem())
        event.player.inventory.getStackInSlot(8).getOrCreateTag().putInt("color", 13)
        event.player.persistentData.join = 1
    }
})
