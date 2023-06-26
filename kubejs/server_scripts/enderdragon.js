EntityEvents.spawned(event => {
    if(event.entity.type === "minecraft:ender_dragon") {
            event.entity.maxHealth = 1000
            event.entity.health = 1000
    }
})