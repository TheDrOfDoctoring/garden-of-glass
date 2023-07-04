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
    event.get('ars_nouveau:archwood').add('ars_elemental:yellow_archwood_sapling')

    event.get('botania:rune_seasons').add('botania:rune_spring')
    event.get('botania:rune_seasons').add('botania:rune_autumn')
    event.get('botania:rune_seasons').add('botania:rune_winter')
    event.get('botania:rune_seasons').add('botania:rune_summer')

    event.get('kubejs:computation_runes').add('kubejs:rune_logic')
    event.get('kubejs:computation_runes').add('kubejs:rune_calculation')
    event.get('kubejs:computation_runes').add('kubejs:rune_engineering')

    event.get('kubejs:pure_essences').add('kubejs:pure_earth_essence')
    event.get('kubejs:pure_essences').add('kubejs:pure_water_essence')
    event.get('kubejs:pure_essences').add('kubejs:pure_air_essence')
    event.get('kubejs:pure_essences').add('kubejs:pure_fire_essence')

    event.get('forge:ores/sulfur').add('kubejs:sulfur_ore')

    event.get('kubejs:processing/lead').add('thermal:raw_lead')
    event.get('kubejs:processing/lead').add('thermal:deepslate_lead_ore')
    event.get('kubejs:processing/iron').add('minecraft:iron_ore')
    event.get('kubejs:processing/iron').add('minecraft:deepslate_iron_ore')
    event.get('kubejs:processing/iron').add('minecraft:raw_iron')
    event.get('kubejs:processing/nickel').add('thermal:deepslate_nickel_ore')
    event.get('kubejs:processing/nickel').add('thermal:raw_nickel')
    event.get('kubejs:processing/gold').add('minecraft:gold_ore')
    event.get('kubejs:processing/gold').add('minecraft:raw_gold')
    event.get('kubejs:processing/gold').add('minecraft:deepslate_gold_ore')
    event.get('kubejs:processing/copper').add('minecraft:copper_ore')
    event.get('kubejs:processing/copper').add('minecraft:deepslate_copper_ore')
    event.get('kubejs:processing/copper').add('minecraft:raw_copper')

    event.remove('forge:ingots/steel', 'material_elements:steel_ingot')
    event.remove('forge:dusts/ender_pearl', 'thermal:ender_pearl_dust')
    event.remove('forge:ores/sulfur', 'thermal:sulfur_ore')

    event.remove('forge:nuggets/copper', 'create:copper_nugget')

    event.remove('ars_nouveau:robe', ['ars_nouveau:apprentice_robes', 'ars_nouveau:novice_robes'])
    event.remove('ars_nouveau:boots', ['ars_nouveau:apprentice_boots', 'ars_nouveau:novice_boots'])
    event.remove('ars_nouveau:legs', ['ars_nouveau:apprentice_leggings', 'ars_nouveau:novice_leggings'])
    event.remove('ars_nouveau:hood', ['ars_nouveau:apprentice_hood', 'ars_nouveau:novice_hood'])
})

//automate logs don't veinmine 
ServerEvents.tags('block', event => {
    event.get('ftbultimine:excluded_blocks').add('minecraft:netherrack')
    event.get('ftbultimine:excluded_blocks').add('#minecraft:logs')
    event.get('ftbultimine:excluded_blocks').add('botania:livingrock')
    event.remove('ars_nouveau:harvest/fellable', '#minecraft:logs')
    event.get('ars_nouveau:harvest/fellable').add('minecraft:oak_log')
    event.get('ars_nouveau:harvest/fellable').add('minecraft:spruce_log')
    event.get('ars_nouveau:harvest/fellable').add('minecraft:birch_log')
    event.get('ars_nouveau:harvest/fellable').add('minecraft:jungle_log')
    event.get('ars_nouveau:harvest/fellable').add('minecraft:acacia_log')
    event.get('ars_nouveau:harvest/fellable').add('minecraft:dark_oak_log')
    event.get('ars_nouveau:harvest/fellable').add('minecraft:mangrove_log')
    event.get('ars_nouveau:harvest/fellable').add('ars_nouveau:blue_archwood_log')
    event.get('ars_nouveau:harvest/fellable').add('ars_nouveau:purple_archwood_log')
    event.get('ars_nouveau:harvest/fellable').add('ars_nouveau:green_archwood_log')
    event.get('ars_nouveau:harvest/fellable').add('ars_nouveau:red_archwood_log')
    event.get('ars_nouveau:harvest/fellable').add('botania:livingwood_log')
    event.get('ars_nouveau:harvest/fellable').add('quark:blossom_log')
    event.get('ars_nouveau:harvest/fellable').add('quark:azalea_log')
    event.get('ars_nouveau:harvest/fellable').add('quark:ancient_log')
    event.get('ars_nouveau:harvest/fellable').add('botanicadds:elvenwood_log')
})
ServerEvents.tags('entity_type', event => {
    event.get('botania:coocon/rare').add('minecraft:bee')
})