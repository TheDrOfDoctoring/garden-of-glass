// priority: 0


JEIEvents.hideItems(event => {
	event.hide('quark:rope')
	event.hide('create:zinc_ore')
	event.hide('create:deepslate_zinc_ore')
	event.hide('create:raw_zinc_block')
	event.hide('create:raw_zinc')
	event.hide('create:crushed_zinc_ore')
	event.hide('create:dough')
	event.hide('twigs:pebble')
	event.hide('ae2:inscriber')
	event.hide('ae2:printed_calculation_processor')
	event.hide('ae2:printed_engineering_processor')
	event.hide('ae2:printed_logic_processor')
	event.hide('ae2:printed_silicon')
	event.hide('ae2:silicon_press')
	event.hide('ae2:vibration_chamber')
	event.hide('ae2:facade')
	event.hide('infernalexp:quartz_glass')
	event.hide('infernalexp:quartz_pane')
	event.hide('ae2:entropy_manipulator')
	event.hide('enderchests:ender_pouch')
	event.hide('botanicadds:flowers/energizera')
	event.hide('botanicadds:flowers/floating/energizera')
	event.hide('prettypipes:item_terminal')
	event.hide('prettypipes:crafting_terminal')
	event.hide('cobblefordays:tier_1')
	event.hide('create:copper_sheet')
	event.hide('create:iron_sheet')
	event.hide('create:gold_sheet')
	event.hide('thermal:ender_pearl_dust')
	event.hide('thermal:dynamo_stirling')
	event.hide('thermal:dynamo_magmatic')
	event.hide('thermal:dynamo_numismatic')
	event.hide('thermal:dynamo_lapidary')
	event.hide('thermal:dynamo_disenchantment')
	event.hide('thermal:dynamo_gourmand')
	event.hide('thermal:dynamo_compression')
	event.hide((/.*silver*/))
	event.hide(/.*material_elements:*/)
	event.hide('thermal:tin_ore')
	event.hide('easy_mob_farm:iron_mob_farm_template')
	event.hide('thermal:deepslate_tin_ore')
	event.hide('easy_mob_farm:animal_plains_farm')
	event.hide('easy_mob_farm:bee_hive_farm')
	event.hide('easy_mob_farm:jungle_farm')
	event.hide('thermal:refined_fuel_bucket')
	event.hide('thermal:refined_fuel')
	event.hide('thermal:creosote_bucket')
	event.hide('thermal:creosote')
	event.hide('thermal:tree_oil_bucket')
	event.hide('thermal:tree_oil')
	event.hide('thermal:sulfur_ore')
	event.hide('thermal:deepslate_sulfur_ore')
	event.hide('thermal:deepslate_cinnabar_ore')
	event.hide('thermal:oil_red_sand')
	event.hide('thermal:charcoal_block')
	event.hide('snad:soul_snad')
	event.hide('create:water_wheel')
	event.hide('create:steam_engine')
	event.hide('create:windmill_bearing')
	event.hide('ars_creo:starbuncle_wheel')
	event.hide('botanicadds:flowers/tempesta')
	event.hide('botanicadds:flowers/floating/tempesta')
	event.hide('botanicadds:flowers/rainute')
	event.hide('botanicadds:flowers/floating/rainute')
	event.hide('create:copper_nugget')
	event.hide('ars_elemental:siren_shards')
	event.hide('ars_elemental:siren_charm')
})
JEIEvents.information(event => {
	event.addItem('genericbotaniapacktweaker:dieselotus', ['§7Other Changes', 'Similar to the Thermalily; can burn refined fuel, creosote oil and tree oil for Mana in that order of level of mana produced'])
	event.addItem('twigs:bloodstone', ['§7Other Changes', 'Obtained by killing a mob ontop of stone, or can be found naturally in the Nether'])
	event.addItem('thermal:apatite', ['§8General Information', 'There is a rare chance of Apatite ore spawning from using an Orechid with Andesite'])
	event.addItem('ars_nouveau:imbuement_chamber', ['§8General Information', 'Source is not required for recipes, but does speed up the crafting process'])
	event.addItem('ars_nouveau:agronomic_sourcelink', ['§6KubeJS Changes', 'Mana Spreaders work on Source Jars, and can transfer Mana to Source, currently it is the only way to get Source!'])
	event.addItem('ars_nouveau:volcanic_sourcelink', ['§6KubeJS Changes', 'Mana Spreaders work on Source Jars, and can transfer Mana to Source, currently it is the only way to get Source!'])
	event.addItem('ars_nouveau:alchemical_sourcelink', ['§6KubeJS Changes', 'Mana Spreaders work on Source Jars, and can transfer Mana to Source, currently it is the only way to get Source!'])
	event.addItem('ars_nouveau:vitalic_sourcelink', ['§6KubeJS Changes', 'Mana Spreaders work on Source Jars, and can transfer Mana to Source, currently it is the only way to get Source!'])
	event.addItem('ars_nouveau:mycelial_sourcelink', ['§6KubeJS Changes', 'Mana Spreaders work on Source Jars, and can transfer Mana to Source, currently it is the only way to get Source!'])
	event.addItem('minecraft:nether_quartz_ore', ['§7Other Changes', 'No longer naturally generates in the Nether'])
	event.addItem('minecraft:quartz', ['§7Other Changes', 'Nether Quartz Ore no longer naturally generates in the Nether'])
	event.addItem('easy_mob_farm:desert_farm', ['§7Other Changes', 'Higher tiers of Mob Farms both decrease the time to generate new items, and increases the amount generated substantially'])
	event.addItem('easy_mob_farm:monster_plains_cave_farm', ['§7Other Changes', 'Higher tiers of Mob Farms both decrease the time to generate new items, and increases the amount generated substantially'])
	event.addItem('easy_mob_farm:swamp_farm', ['§7Other Changes', 'Higher tiers of Mob Farms both decrease the time to generate new items, and increases the amount generated substantially'])
	event.addItem('easy_mob_farm:creative_mob_farm', ['§7Other Changes', 'Higher tiers of Mob Farms both decrease the time to generate new items, and increases the amount generated substantially'])
	event.addItem('minecraft:piston', ['§0Quark Changes', 'Quark allows Pistons to move tile entities, such as chests'])
	event.addItem('minecraft:sticky_piston', ['§0Quark Changes', 'Quark allows Pistons to move tile entities, such as chests'])
	event.addItem('ae2:energy_cell', ['§6KubeJS Changes', 'Mana Spreaders work on Energy Cells, and can transfer Mana to AE Energy, A more concentrated, but malleable form of Mana!'])
	event.addItem('ae2:dense_energy_cell', ['§6KubeJS Changes', 'Mana Spreaders work on Energy Cells, and can transfer Mana to AE Energy, A more concentrated form of Mana!'])
	event.addItem('ars_nouveau:source_jar', ['§6KubeJS Changes', 'Mana Spreaders work on Source Jars, and can transfer Mana to Source, but it is not possible to transfer Source to Mana!'])
	event.addItem('farmersdelight:cabbage_seeds', ['§6KubeJS Changes', 'Obtainable through a Mana Pool with an Alchemy Catalyst and seeds'])
	event.addItem('farmersdelight:tomato_seeds', ['§6KubeJS Changes', 'Obtainable through a Mana Pool with an Alchemy Catalyst and seeds'])
	event.addItem('farmersdelight:cabbage', ['§6KubeJS Changes', 'Seeds obtainable through a Mana Pool with an Alchemy Catalyst and seeds'])
	event.addItem('farmersdelight:tomato', ['§6KubeJS Changes', 'Seeds obtainable through a Mana Pool with an Alchemy Catalyst and seeds'])
	event.addItem('supplementaries:flax', ['§6KubeJS Changes', 'Seeds obtainle through Ars Nouveau Enchanting Apparatus'])
	event.addItem('minecraft:obsidian', ['§0Garden of Glass', 'Getting the obsidian for a portal may be slow, but there could be a small chance of finding ruined portals. Use a Silk-Touch Pickaxe to obtain regular obsidian '])
	event.addItem('kubejs:fractured_obsidian', ['§6KubeJS Changes', 'Too weak to craft with, but can be placed to be a suitable portal material. Use a Silk-Touch Pickaxe to obtain Regular Obsidian '])
	event.addItem('ae2:certus_quartz_crystal', ['§8General Information', 'Make Budding Certus Quartz!'])
	event.addItem('ae2:cable_anchor', ['§8General Information', 'Facades can be made by placing 4 cable anchors around a block in a crafting table'])
	event.addItem('ars_nouveau:drygmy_shard', ['§8General Information', 'Press U on Summoning Altar in JEI to See Summoning Recipes for Ars Nouveau Mobs'])
	event.addItem('ars_nouveau:whirlisprig_shards', ['§8General Information', 'Press U on Summoning Altar in JEI to See Summoning Recipes for Ars Nouveau Mobs'])
	event.addItem('ars_nouveau:wixie_shards', ['§8General Information', 'Press U on Summoning Altar in JEI to See Summoning Recipes for Ars Nouveau Mobs'])
	event.addItem('ars_nouveau:starbuncle_shards', ['§8General Information', 'Press U on Summoning Altar in JEI to See Summoning Recipes for Ars Nouveau Mobs'])
	event.addItem('botania:ender_air_bottle', ['§6KubeJS Changes', 'Can be obtained by right clicking in the end with Glass Bottle or by right clicking on Ender Conduit with a Glass Bottle'])
})

ItemEvents.tooltip(event => {
	event.add('thermal:apatite', "§8There's a rare chance of Apatite ore spawning from using an Orechid with Andesite")
	event.add('kubejs:nether_quartz_dust', "§8This might be expensive...")
	event.add('kubejs:source_timber', "§8It tries to escape your grasp...")
	event.add('kubejs:runic_ingot', "§8Why would you make this?")
	event.add('botania:ender_air_bottle', '§8Can be obtained by right clicking in the end with a Glass Bottle or by right clicking on Ender Conduit with a Glass Bottle')
	event.add('ae2:controller', '§8A Mana-Energy System')
	event.add('ars_nouveau:drygmy_shard', '§9Press U on Summoning Altar in JEI to See Summoning Recipes for Ars Nouveau Mobs')
	event.add('ars_nouveau:whirlisprig_shards', '§9Press U on Summoning Altar in JEI to See Summoning Recipes for Ars Nouveau Mobs')
	event.add('ars_nouveau:wixie_shards', '§9Press U on Summoning Altar in JEI to See Summoning Recipes for Ars Nouveau Mobs')
	event.add('ars_nouveau:starbuncle_shards', '§9Press U on Summoning Altar in JEI to See Summoning Recipes for Ars Nouveau Mobs')
	event.add('ae2:logic_processor', '§7Why would you do that?')
	event.add('ae2:calculation_processor', '§7Why would you do that?')
	event.add('ae2:engineering_processor', '§7Why would you do that?')
	event.add('ae2:fluix_crystal', '§7An Ethical Experiment')
	event.add('kubejs:infused_livingwood', '§4A Work of Art')
	event.add('#quark:hollow_logs', '§7Shift next to one to crawl through')
	event.add('minecraft:glow_berries', '§7Good for your pet toretoise')
	event.add('create:zinc_ingot', '§7..What?')
	event.add('kubejs:dirty_dirt', '§7Gambling for Dirt')
	event.add('kubejs:runic_block', "Rubik's Cube")
	event.add('kubejs:blood_iron_dust', "§7Both superheated and regular heating will work, but superheating will give you more nuggets")
	event.add('kubejs:blood_gold_dust', "§7Both superheated and regular heating will work, but superheating will give you more nuggets")
	event.add('kubejs:blood_copper_dust', "§7Both superheated and regular heating will work, but superheating will give you more nuggets")
	event.add('kubejs:blood_nickel_dust', "§7Both superheated and regular heating will work, but superheating will give you more nuggets")
	event.add('kubejs:blood_lead_dust', "§7Both superheated and regular heating will work, but superheating will give you more nuggets")
})