BlockEvents.placed(event => {
    if(event.block.id === 'kubejs:fractured_obsidian') {
        event.block.set('minecraft:obsidian')
    }

})