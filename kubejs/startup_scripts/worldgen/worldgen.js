WorldgenEvents.remove(event => {
    //GRAVEL GOTTA GO GRAVEL GOTTA GO GRAVEL GOTTA GO GRAVEL GOTTA GO
    event.removeFeatureById('underground_ores', ['minecraft:disk_gravel'])
    event.removeFeatureById('local_modifications', ['minecraft:disk_gravel'])
    event.removeFeatureById('top_layer_modification', ['minecraft:disk_gravel'])
    event.removeFeatureById('raw_generation', ['minecraft:disk_gravel'])
    event.removeFeatureById('underground_ores', ['minecraft:ore_quartz_nether'])
	
})
WorldgenEvents.add(event => {
    event.addOre(ore => {
        const { anchors } = event
        ore.biomes = '#minecraft:is_nether'
        ore.worldgenLayer = 'underground_ores'
        ore.addTarget('minecraft:netherrack', 'kubejs:sulfur_ore')
        ore.size = 4
        ore.noSurface = 0.75
        ore.count([2, 6])             
        .squared()                   
        .triangleHeight(				   
          anchors.aboveBottom(12),    
          anchors.absolute(48)	      
        )								              
    })
})