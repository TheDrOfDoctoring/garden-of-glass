ServerEvents.tags('item', event => {
	event.get('botania:mana_big').add('botania:mana_diamond')
	event.get('botania:mana_big').add('botania:mana_pearl')

    event.get('kubejs:fractured').add('minecraft:obsidian')
    event.get('kubejs:fractured').add('kubejs:fractured_obsidian')

    event.get('ae2:knife').add('farmersdelight:netherite_knife')
    event.get('ae2:knife').add('farmersdelight:diamond_knife')

    event.get('ars_nouveau:archwood').add('ars_nouveau:blue_archwood_sapling')
    event.get('ars_nouveau:archwood').add('ars_nouveau:red_archwood_sapling')
    event.get('ars_nouveau:archwood').add('ars_nouveau:purple_archwood_sapling')
    event.get('ars_nouveau:archwood').add('ars_nouveau:green_archwood_sapling')

    event.get('botania:rune_seasons').add('botania:rune_spring')
    event.get('botania:rune_seasons').add('botania:rune_autumn')
    event.get('botania:rune_seasons').add('botania:rune_winter')
    event.get('botania:rune_seasons').add('botania:rune_summer')

    event.get('kubejs:computation_runes').add('kubejs:rune_logic')
    event.get('kubejs:computation_runes').add('kubejs:rune_calculation')
    event.get('kubejs:computation_runes').add('kubejs:rune_engineering')

    event.remove('forge:ingots/steel', 'material_elements:steel_ingot')
    event.remove('forge:dusts/ender_pearl', 'thermal:ender_pearl_dust')

})

//YOU ONLY DESERVE ULTIMINE FOR THE ORECHID!!!!!
ServerEvents.tags('block', event => {
    event.get('ftbultimine:excluded_blocks').add('minecraft:netherrack')
    event.get('ftbultimine:excluded_blocks').add('#minecraft:logs')
})
ServerEvents.tags('entity_type', event => {
    event.get('botania:coocon/rare').add('minecraft:bee')
})