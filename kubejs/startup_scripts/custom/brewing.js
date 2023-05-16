//REMOVE BREWING RECIPES I DON'T WANT!!
MoreJSEvents.registerPotionBrewing((event) => {
    event.removeByPotion(null, null, 'minecraft:fire_resistance');
    event.removeByPotion(null, null, 'minecraft:long_fire_resistance');
})      