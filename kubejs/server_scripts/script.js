// priority: 0


ServerEvents.recipes(event => {
	//TODO:
  //organisation
  //mana dynamo?
  //3 new fuels for the endoflame
  //orechid rework
  //exoblast for stone, maybe oil sand and assorted other block blasting stuff
  //continue triplet (energy, time, material) design method for automation heavy items
	event.remove({output: 'ars_nouveau:blue_archwood_sapling'})
	event.remove({output: 'ars_nouveau:purple_archwood_sapling'})
	event.remove({output: 'ars_nouveau:red_archwood_sapling'})
	event.remove({output: 'ars_nouveau:green_archwood_sapling'})
	event.remove({id: 'ars_nouveau:novice_spell_book'})
  event.remove({id: 'create:mixing/brass_ingot'})
  event.remove({id: 'thermal:compat/create/smelter_create_alloy_brass'})
	event.remove({id: 'ars_nouveau:blaze_fiber'})
  event.remove({id: 'create:crafting/materials/rose_quartz'})
  event.remove({id: 'ars_nouveau:scribes_table'})
	event.remove({id: 'enderchests:ender_pouch'})
	event.remove({id: 'botania:terra_plate/terrasteel_ingot'})
  event.remove({id: 'ars_artifice:imbuement_spell_gem_upgrade_t1'})
  event.remove({id: 'ars_artifice:spell_gem_upgrade_t2'})
  event.remove({id: 'ars_artifice:spell_gem_upgrade_t3'})
  event.remove({id: 'botania:mana_fluxfield'})
  event.remove({id: 'infernalexp:crafting/crafting_shaped/quartz_glass'})
  event.remove({id: 'infernalexp:crafting/crafting_shaped/quartz_glass_pane'})
  event.remove({id: 'ae2:network/blocks/inscribers'})
  event.remove({id: 'ars_nouveau:wixie_charm'})
  event.remove({id: 'create:crushing/obsidian'})
  event.remove({id: 'botania:cocoon'})
  event.remove({id: 'botanicadds:elven_fluxfield'})
  event.remove({id: 'botanicadds:mana_fluxfield'})
  event.remove({id: 'prettypipes:crafting_terminal'})
  event.remove({id: 'prettypipes:item_terminal'})
  event.remove({id: 'prettypipes:pipe'})
  event.remove({id: 'botania:gaia_pylon'})
  event.remove({id: 'minecraft:bone_meal_from_bone_block'})
  event.remove({id: 'ae2:network/blocks/interfaces_interface'})
  event.remove({id: 'ae2:transform/fluix_crystals'})
  event.remove({id: 'ae2:network/blocks/energy_vibration_chamber'})
	event.remove({id: 'ars_nouveau:apprentice_spell_book_upgrade'})
	event.remove({id: 'ars_nouveau:archmage_spell_book_upgrade'})
	event.remove({mod: 'cobblefordays'})
	event.remove({id: 'ars_nouveau:sourcestone'})
	event.remove({id: 'ae2:network/blocks/controller'})
	event.remove({id: 'twigs:ender_mesh'})
	event.remove({id: 'ars_nouveau:potion_flask'})
	event.remove({id: 'botania:pure_daisy/sand'})
  event.remove({id: 'ars_nouveau:agronomic_sourcelink'})
  event.remove({type: 'ae2:entropy'})
	event.remove({id: 'create:crafting/materials/andesite_alloy'})
	event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
	event.remove({id: 'supplementaries:rope'})
	event.remove({id: 'quark:building/crafting/rope'})
	event.remove({id: 'quark:oddities/crafting/crate'})
	event.remove({id: 'botania:runic_altar/mana'})
  event.remove({id: 'botania:runic_altar/autumn'})
  event.remove({id: 'infernalexp:stonecutting/basalt_bricks_vertical_slab'})
	event.remove({id: 'botania:pure_daisy/snow_block'})
  event.remove({output: 'ae2:entropy_manipulator'})
  event.remove({id: 'ars_nouveau:vitalic_sourcelink'})
  event.remove({id: 'ars_nouveau:alchemical_sourcelink'})
  event.remove({id: 'ars_nouveau:volcanic_sourcelink'})
  event.remove({id: 'ars_nouveau:mycelial_sourcelink'})
  event.remove({id: 'ae2:network/blocks/storage_drive'})
	event.remove({id: 'ars_nouveau:imbuement_lapis'})
	event.remove({id: 'ars_nouveau:imbuement_amethyst'})
	event.remove({id: 'ars_nouveau:imbuement_amethyst_block'})
	event.remove({id: 'ars_nouveau:wing_to_leather'})
	event.remove({output: 'minecraft:shield'})
  event.remove({id: 'thermal:machines/smelter/smelter_alloy_lumium'})
  event.remove({id: 'thermal:machines/smelter/smelter_alloy_bronze'})
  event.remove({id: 'create:crafting/kinetics/empty_blaze_burner'})
  event.remove({id: 'supplementaries:bellows'})
  event.remove({id: 'create:crafting/materials/electron_tube'})
  event.remove({id: 'botania:elven_trade/dragonstone'})
  event.remove({id: 'botanicadds:elven_fluxfield'})
  event.remove({id: 'botanicadds:flowers/energizera'})
  event.remove({id: 'create:mechanical_crafting/crushing_wheel'})
  event.remove({id: 'thermal:electrum_dust_2'})
  event.remove({id: 'thermal:fire_charge/electrum_ingot_2'})
  event.remove({id: 'botania:spark'})
  event.remove({output: 'create:zinc_ingot'})
  event.remove({output: 'thermal:invar_dust'})
  event.remove({input: 'thermal:invar_dust'})
	event.remove({output: 'easy_mob_farm:animal_plains_farm'})
	event.remove({output: 'easy_mob_farm:monster_plains_cave_farm'})
	event.remove({output: 'easy_mob_farm:bee_hive_farm'})
	event.remove({output: 'easy_mob_farm:jungle_farm'})
	event.remove({output: 'easy_mob_farm:swamp_farm'})
	event.remove({output: 'easy_mob_farm:nether_farm'})
  event.remove({id: 'thermal:machines/centrifuge/centrifuge_oil_red_sand'})
	event.remove({output: 'easy_mob_farm:desert_farm'})
  event.remove({output: 'thermal:invar_ingot', input: 'thermal:iron_dust'})
  event.remove({output: 'thermal:invar_ingot', input: 'minecraft:iron_ingot'})
  event.remove({id: 'create:crushing/asurine'})
  event.remove({id: 'botania:mana_infusion/mana_string'})
  event.remove({id: 'create:crushing/asurine_recycling'})
  event.remove({id: 'botania:bellows'})
  event.remove({id: 'decorative_blocks:lattice'})
  event.remove({id: 'prettypipes:blank_module'})
  event.remove({id: 'prettypipes:low_speed_module'})
  event.remove({id: 'prettypipes:medium_speed_module'})
  event.remove({id: 'prettypipes:high_speed_module'})
  event.remove({id: 'prettypipes:low_extraction_module'})
  event.remove({id: 'thermal:storage/charcoal_block'})
  event.remove({id: 'prettypipes:medium_extraction_module'})
  event.remove({id: 'prettypipes:high_extraction_module'})
  event.remove({id: 'prettypipes:low_retrieval_module'})
  event.remove({id: 'prettypipes:medium_retrieval_module'})
  event.remove({id: 'prettypipes:high_retrieval_module'})
  event.remove({id: 'ars_nouveau:magebloom_fiber'})
  event.remove({output: /thermal.*dynamo*/})
  event.remove({mod: 'material_elements'})
  event.remove({id: 'twigs:bloodstone'})
  event.remove({id: 'thermal:rubber_from_dandelion'})
  event.remove({id: 'create:pressing/brass_ingot'})
  event.remove({id: 'thermal:smelting/cured_rubber_from_smelting'})
  event.remove({id: 'create:pressing/copper_ingot'})
  event.remove({id: 'create:pressing/gold_ingot'})
  event.remove({id: 'create:pressing/iron_ingot'})
  event.remove({id: 'thermal:machines/press/unpacking/press_silver_nugget_unpacking'})
  event.remove({id: 'thermal:machines/press/press_silver_ingot_to_coin'})
  event.remove({id: 'thermal:machines/smelter/smelter_alloy_electrum'})
  event.remove({id: 'thermal:machines/smelter/smelter_raw_tin'})
  event.remove({id: 'thermal:machines/smelter/smelter_tin_ore'})
  event.remove({id: 'thermal:machines/smelter/crushed_tin_ore'})
  event.remove({id: 'thermal:machines/press/packing3x3/press_silver_packing'})
  event.remove({id: 'computercraft:computer_normal'})
  event.remove({id: 'computercraft:computer_advanced'})
  event.remove({id: 'computercraft:computer_advanced_upgrade'})
  event.remove({id: 'computercraft:pocket_computer_normal'})
  event.remove({id: 'computercraft:pocket_computer_advanced'})
  event.remove({id: 'computercraft:pocket_computer_advanced_upgrade'})
  event.remove({id: 'computercraft:turtle_normal'})
  event.remove({id: 'create:compat/ae2/milling/certus_quartz'})
  event.remove({id: 'computercraft:turtle_advanced_upgrade'})
  event.remove({id: 'computercraft:turtle_advanced'})
  event.remove({id: 'ae2:materials/formationcore'})
  event.remove({id: 'moreminecarts:silica_steel_mix'})
  event.remove({id: 'ae2:materials/annihilationcore'})
  event.remove({id: 'supplementaries:end_stone_lamp'})
  event.remove({id: 'snad:snad'})
  event.remove({id: 'snad:red_snad'})
  event.remove({id: 'snad:soul_snad'})
  event.remove({id: 'botania:runic_altar/lust'})
  event.remove({id: 'botania:runic_altar/pride'})
  event.remove({id: 'botania:runic_altar/gluttony'})
  event.remove({id: 'botania:runic_altar/sloth'})
  event.remove({id: 'botania:runic_altar/greed'})
  event.remove({id: 'botania:runic_altar/envy'})
  event.remove({id: 'botania:runic_altar/wrath'})
  event.remove({id: 'create:crafting/kinetics/whisk'})
  event.remove({id: 'thermal:constantan_dust_2'})
  event.remove({id: 'thermal:energy_duct_4'})
  event.remove({id: (/thermal:parts.*gear/)})
  event.remove({mod: 'enderchests'})
  event.remove({mod: 'endertanks'})
  event.remove({output: 'easy_mob_farm:iron_mob_farm_template'})
  event.remove({id: 'thermal:machines/pulverizer/pulverizer_silver_plate_to_dust'})
  event.remove({id: 'thermal:machines/smelter/smelter_silver_plate_to_ingot'})
  event.remove({output: 'easy_mob_farm:steel_mob_farm_template'})
  event.remove({type: 'minecraft:smelting', output: 'thermal:tin_ingot'})
  event.remove({type: 'minecraft:blasting', output: 'thermal:tin_ingot'})
  event.remove({id: 'thermal:machines/refinery/refinery_light_oil'})
  event.remove({id: 'thermal:machines/refinery/refinery_heavy_oil'})
  event.remove({id: 'thermal:machines/refinery/refinery_resin'})
  event.remove({id: 'thermal:machines/pyrolyzer/pyrolyzer_logs'})
  event.remove({id: 'thermal:enderium_dust_2'})
  event.remove({id: 'thermal:machines/pyrolyzer/pyrolyzer_coal'})
  event.remove({id: 'botanicadds:elven_fluxfield'})
  event.replaceInput({input: (/ae2:item.*/)}, ('minecraft:iron_ingot'), 'botania:manasteel_ingot')
  event.replaceInput({id: 'ae2:decorative/quartz_glass'}, '#forge:glass', 'botania:elf_glass')
  event.replaceInput({id: 'ars_nouveau:source_jar'}, '#forge:glass', 'botania:mana_glass')
  event.replaceInput({id: 'entangled:block'}, '#forge:chests/wooden', 'botania:red_string_container')
  event.replaceInput({id: 'create:crafting/kinetics/millstone'}, 'create:cogwheel', 'ars_nouveau:glyph_crush')
  event.replaceInput({id: 'entangled:block'}, 'minecraft:ender_pearl', 'botanicadds:gaia_shard')
  event.replaceInput({id: 'ae2:network/blocks/energy_energy_cell'}, 'ae2:quartz_glass', 'botania:mana_tablet')
  event.replaceInput({id: 'botania:lava_pendant'}, 'botania:manasteel_ingot', 'ars_nouveau:fire_essence')
  event.replaceInput({id: 'ae2:materials/basiccard'}, 'minecraft:gold_ingot', 'kubejs:manaelectrum_ingot')
  event.replaceInput({id: 'ae2:materials/basiccard'}, 'minecraft:redstone', 'ae2:silicon')
  event.replaceInput({id: 'ae2:materials/advancedcard'}, 'minecraft:redstone', 'ae2:silicon')
  event.replaceInput({id: 'ars_nouveau:spell_turret'}, 'ars_nouveau:source_gem_block', 'kubejs:crystallised_blood')
  event.replaceInput({id: 'ars_nouveau:spell_turret'}, 'minecraft:blaze_rod', 'kubejs:vitric_diamond')
  event.replaceInput({id: 'ae2:materials/advancedcard'}, 'minecraft:diamond', 'botania:mana_diamond')
  event.replaceInput({id: 'botania:flower_bag'}, 'minecraft:wool', 'farmersdelight:canvas')
  event.replaceInput({id: 'appbot:mana_cell_housing'}, 'botania:manasteel_ingot', 'botania:terrasteel_ingot')
  event.replaceInput({id: 'ae2:network/parts/quartz_fiber_part'}, '#forge:glass', 'botania:elf_glass')
  event.replaceInput({id: 'botania:alchemy_catalyst'}, 'minecraft:gold_ingot', 'botania:rune_mana')
  event.replaceInput({id: 'storagedrawers:upgrade_template'}, '#storagedrawers:drawers', 'botania:livingwood_log')
  event.replaceInput({id: 'botania:lava_pendant'}, 'botania:mana_string', 'infernalexp:glowsilk')
  event.replaceInput({mod: 'framedblocks'}, '#minecraft:planks', 'botania:livingwood_planks')
  event.replaceInput({mod: 'easy_mob_farm', input: 'easy_mob_farm:iron_mob_farm_template'}, 'easy_mob_farm:iron_mob_farm_template', 'easy_mob_farm:steel_mob_farm_template')
  event.replaceInput({output: 'ae2:formation_plane'}, 'minecraft:iron_ingot', 'botania:terrasteel_nugget')
  event.replaceInput({output: 'ae2:annihilation_plane'}, 'minecraft:iron_ingot', 'botania:terrasteel_nugget')
  event.replaceInput({id: 'create:crafting/kinetics/mechanical_saw'}, 'minecraft:iron_ingot', 'botania:terrasteel_nugget')
  event.replaceInput({id: 'create:crafting/kinetics/mechanical_drill'}, 'create:andesite_alloy', 'botania:terrasteel_nugget')
  event.replaceInput({id: 'botania:natura_pylon'}, 'minecraft:ender_eye', 'ars_nouveau:blaze_fiber')
 event.replaceInput({output: (/ars_nouveau:ritual.*/)}, (/_archwood_log/), 'kubejs:tablet_base')
  event.remove({output: (/ars_nouveau:ritual.*/), input: (/_archwood_log/)})
  event.replaceInput({mod: 'constructionwand'}, 'minecraft:stick', 'botania:livingwood_twig')
  event.replaceInput({id: 'constructionwand:stone_wand'}, 'minecraft:stone_tool_materials', 'botania:livingrock')
  event.replaceInput({id: 'constructionwand:iron_wand'}, 'minecraft:iron_ingot', 'botania:manasteel_ingot')
  event.replaceInput({id: 'constructionwand:diamond_wand'}, 'minecraft:diamond', 'botania:dragonstone')
  event.replaceInput({id: 'constructionwand:infinity_wand'}, 'minecraft:nether_star', Item.of('botania:astrolabe'))
	event.replaceInput({mod: 'storagedrawers', input: '#forge:chests/wooden'}, '#forge:chests/wooden', 'kubejs:livingwood_storage')
  event.replaceInput({mod: 'everycomp', input: '#forge:chests/wooden', output: (/.*drawer.*/)}, '#forge:chests/wooden', 'kubejs:livingwood_storage')
  event.replaceInput({mod: 'everycomp', input: 'everycompat:q/botania/livingwood_chest', output: (/.*drawer.*/)}, 'everycompat:q/botania/livingwood_chest', 'kubejs:livingwood_storage')
  event.replaceInput({mod: 'everycomp', output: (/.*trim.*/)}, 'minecraft:stick', 'botania:livingwood_twig')
	event.replaceInput({mod: 'ars_nouveau'}, 'minecraft:gold_ingot', 'kubejs:manaelectrum_ingot')
	event.replaceInput({mod: 'ars_nouveau'}, 'minecraft:gold_nugget', 'kubejs:manaelectrum_nugget')
  event.replaceInput({mod: 'create', input: '#minecraft:planks'}, '#minecraft:planks', 'botania:livingwood')
	event.replaceInput({mod: 'ars_nouveau'}, 'minecraft:diamond', 'botania:mana_diamond')
	event.replaceInput({mod: 'storagedrawers'}, 'minecraft:stick', 'botania:livingwood_twig')
	event.replaceInput({id: 'storagedrawers:obsidian_storage_upgrade'}, 'minecraft:obsidian', 'minecraft:iron_ingot')
	event.replaceInput({id: 'storagedrawers:iron_storage_upgrade'}, 'minecraft:iron_ingot', 'botania:manasteel_ingot')
	event.replaceInput({id: 'storagedrawers:gold_storage_upgrade'}, 'minecraft:gold_ingot', 'kubejs:manaelectrum_ingot')
	event.replaceInput({input: 'thermal:silver_ingot'}, 'thermal:silver_ingot', 'create:zinc_ingot')
	event.replaceInput({input: 'thermal:iron_gear'}, 'thermal:iron_gear', 'kubejs:manasteel_gear')
  event.replaceInput({id: 'thermal:device_tree_extractor'}, 'thermal:redstone_servo', 'botania:rune_water')
  event.replaceInput({id: 'thermal:augments/upgrade_augment_3'}, '#thermal:glass/hardened', '#kubejs:computation_runes')
  event.replaceOutput({id: 'thermal:machine/pulverizer/pulverizer_silver_ingot_to_dust'}, 'thermal:silver_dust', 'kubejs:zinc_dust')
  event.replaceOutput({id: 'thermal:machine/press/press_silver_ingot_to_gear'}, 'thermal:silver_gear', 'kubejs:zinc_gear')
  event.replaceInput({id: 'thermal:machines/smelter/smelter_alloy_enderium'}, 'thermal:diamond_dust', 'botania:life_essence')
	event.replaceInput({input: 'thermal:silver_plate'}, 'thermal:silver_plate', 'kubejs:zinc_plate')
	event.replaceInput({input: 'thermal:silver_gear'}, 'thermal:silver_gear', 'kubejs:zinc_gear')
	event.replaceInput({input: 'thermal:silver_dust'}, 'thermal:silver_dust', 'kubejs:zinc_dust')
  event.replaceInput({id: 'ae2:network/cells/fluid_cell_housing'}, 'minecraft:copper_ingot', 'kubejs:manaelectrum_ingot')
  event.replaceInput({id: 'ae2:network/cells/fluid_storage_cell_1k'}, 'minecraft:copper_ingot', 'kubejs:manaelectrum_ingot')
  event.replaceInput({id: 'ae2:network/cells/fluid_storage_cell_4k'}, 'minecraft:copper_ingot', 'kubejs:manaelectrum_ingot')
  event.replaceInput({id: 'ae2:network/cells/fluid_storage_cell_16k'}, 'minecraft:copper_ingot', 'kubejs:manaelectrum_ingot')
  event.replaceInput({id: 'ae2:network/cells/fluid_storage_cell_64k'}, 'minecraft:copper_ingot', 'kubejs:manaelectrum_ingot')
  event.replaceInput({id: 'ae2:network/cells/fluid_storage_cell_256k'}, 'minecraft:copper_ingot', 'kubejs:manaelectrum_ingot')
  event.replaceInput({id: 'thermal:machine_refinery'}, 'minecraft:copper_ingot', 'thermal:enderium_ingot')
  event.replaceInput({id: 'thermal:machine_refinery'}, '#forge:glass', 'moreminecarts:silica_steel')
  event.replaceInput({id: 'thermal:fire_charge/constantan_ingot_2'}, 'minecraft:fire_charge', 'ars_nouveau:fire_essence')
  event.replaceInput({id: 'thermal:fire_charge/bronze_ingot_4'}, 'minecraft:fire_charge', 'ars_nouveau:fire_essence')
	event.replaceInput({input: 'thermal:silver_nugget'}, 'thermal:silver_nugget', 'create:zinc_nugget')
	event.replaceInput({id: 'botania:mana_pylon'}, 'minecraft:gold_ingot', 'kubejs:manaelectrum_ingot')
	event.replaceInput({id: 'thermal:machine_frame'}, '#forge:glass', 'botania:terrasteel_nugget')
	event.replaceInput({id: 'thermal:machine_frame'}, 'minecraft:iron_ingot', 'thermal:invar_ingot')
  event.replaceInput({id: 'thermal:fluid_duct_windowed_4'}, 'thermal:bronze_ingot', 'create:brass_ingot')
  event.replaceInput({id: 'thermal:fluid_duct_4'}, 'thermal:bronze_ingot', 'create:brass_ingot')
  event.replaceInput({id: 'thermal:fluid_cell_frame'}, 'minecraft:copper_ingot', 'create:brass_ingot')
	event.replaceInput({id: 'storagedrawers:diamond_storage_upgrade'}, 'minecraft:diamond', 'botania:mana_diamond')
	event.replaceInput({id: 'storagedrawers:emerald_storage_upgrade'}, 'minecraft:emerald', 'botania:terrasteel_ingot')
	event.replaceInput({id: 'ars_nouveau:enchanting_apparatus'}, 'kubejs:manaelectrum_nugget', 'botania:rune_mana')
	event.replaceInput({id: 'storagedrawers:controller'}, 'minecraft:stone', 'botania:dreamwood')
	event.replaceInput({id: 'storagedrawers:compacting_drawers_3'}, 'minecraft:stone', 'botania:dreamwood')
	event.replaceInput({id: 'storagedrawers:compacting_drawers_3'}, 'minecraft:iron_ingot', 'botania:elementium_ingot')
	event.replaceInput({id: 'storagedrawers:controller'}, 'minecraft:diamond', 'botania:dragonstone')
	event.replaceInput({id: 'storagedrawers:controller_slave'}, 'minecraft:stone', 'botania:dreamwood')
	event.replaceInput({id: 'storagedrawers:controller_slave'}, 'minecraft:gold_ingot', 'kubejs:manaelectrum_ingot')
	event.replaceInput({id: 'storagedrawers:controller_slave'}, 'minecraft:comparator', 'botania:spark')
	event.replaceInput({id: 'storagedrawers:controller'}, 'minecraft:comparator', 'botania:spark')
	event.replaceInput({id: 'ae2:network/parts/import_bus'}, 'minecraft:sticky_piston', 'botania:corporea_spark')
	event.replaceInput({id: 'ae2:network/parts/export_bus'}, 'minecraft:piston', 'botania:corporea_spark')
	event.replaceInput({id: 'ae2:network/crafting/molecular_assembler'}, 'minecraft:crafting_table', 'kubejs:manasteel_gear')
	event.replaceInput({id: 'easy_mob_farm:urn_small_from_diorite_and_other_stuff'}, 'minecraft:gold_ingot', 'botania:rune_mana')
  event.replaceInput({id: 'thermal:machine_pulverizer'}, 'minecraft:piston', 'ars_nouveau:glyph_crush')
	event.replaceInput({id: 'easy_mob_farm:urn_small_from_diorite_and_other_stuff'}, 'minecraft:ender_eye', 'quark:soul_bead')
  event.replaceInput({id: 'thermal:machine_insolator'}, 'minecraft:dirt', 'ars_nouveau:earth_essence')
  event.replaceInput({id: 'thermal:energy_cell_frame'}, 'thermal:electrum_gear', 'kubejs:manasteel_gear')
  event.replaceInput({id: 'thermal:machine_insolator'}, 'thermal:rf_coil', 'moreminecarts:hard_light_lens')
  event.replaceInput({mod: 'ars_nouveau', input: 'minecraft:diamond'}, 'minecraft:diamond', 'botania:mana_diamond')
  event.replaceInput({id: 'toomanyglyphs:glyph_amplify_two'}, 'minecraft:diamond', 'botania:mana_diamond')
  event.replaceInput({id: 'toomanyglyphs:glyph_amplify_two'}, 'minecraft:diamond_block', 'botania:mana_diamond_block')
  event.replaceInput({id: 'toomanyglyphs:glyph_amplify_three'}, 'minecraft:diamond', 'botania:mana_diamond')
  event.replaceInput({id: 'toomanyglyphs:glyph_amplify_three'}, 'minecraft:diamond_block', 'botania:mana_diamond_block')
  event.replaceInput({id: 'thermal:machine_pyrolyzer'}, 'minecraft:blaze_rod', 'botania:rune_wrath')
  event.replaceInput({id: 'ae2:network/parts/tunnel_me'}, 'ae2:engineering_processor', 'quark:soul_bead'), 
  event.replaceInput({id: 'ars_artifice:spell_storing_belt'}, 'ars_nouveau:source_gem', 'kubejs:blooded_source')
  event.replaceInput({id: 'ars_artifice:spell_storing_amulet'}, 'ars_nouveau:source_gem', 'kubejs:blooded_source')
  event.replaceInput({id: 'ars_artifice:spell_storing_ring'}, 'ars_nouveau:source_gem', 'kubejs:blooded_source')
  event.replaceInput({id: 'ars_artifice:spell_storing_belt'}, 'minecraft:diamond', 'botania:mana_diamond')
  event.replaceInput({id: 'ars_artifice:spell_storing_amulet'}, 'minecraft:diamond', 'botania:mana_diamond')
  event.replaceInput({id: 'ars_artifice:spell_storing_ring'}, 'minecraft:diamond', 'botania:mana_diamond')
  event.replaceInput({id: 'botania:red_string'}, 'minecraft:string', 'ars_nouveau:blaze_fiber')
  event.remove({id: 'thermal:fire_charge/enderium_ingot_2'})
  event.remove({id: 'botania:red_string_alt'})
  event.remove({id: 'create:mixing/andesite_alloy'})
  event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})
  event.remove({id: 'thermal:bronze_dust_4'})
  event.remove({id: 'thermal:machines/smelter/smelter_alloy_bronze'})
  event.replaceInput({mod: 'ae2'}, 'minecraft:iron_ingot', 'botania:manasteel_ingot')
  event.remove({id: 'thermal:fire_charge/lumium_ingot_4'})
  event.remove({id: 'thermal:machines/smelter/smelter_invar_plate_to_ingot'})
  event.remove({output: 'supplementaries:silver_door'})
  event.remove({output: 'supplementaries:silver_trapdoor'})
  event.remove({output: 'supplementaries:silver_lantern'})
  event.remove({output: 'thermal:silver_dust'})
  event.remove({output: 'thermal:silver_plate'})
  event.remove({output: 'thermal:silver_gear'})
  event.remove({output: 'thermal:silver_block'})
  event.remove({output: 'thermal:silver_nugget'})
  event.recipes.thermal.insolator('2x moreminecarts:glass_cactus', 'moreminecarts:glass_cactus').water(400)
  event.recipes.thermal.press('kubejs:zinc_plate', 'create:zinc_ingot')
  event.recipes.thermal.press('create:brass_sheet', 'create:brass_ingot')
event.smelting('thermal:tin_ingot', 'thermal:tin_dust')
event.blasting('thermal:tin_ingot', 'thermal:tin_dust')
event.smithing(
  'computercraft:computer_advanced',  
  'computercraft:computer_normal', 
  'ae2:logic_processor'   
)
event.smithing(
  'computercraft:pocket_computer_advanced',  
  'computercraft:pocket_computer_normal', 
  'ae2:logic_processor'   
)
event.smithing(
  'computercraft:turtle_advanced',  
  'computercraft:turtle_normal', 
  'ae2:logic_processor'   
)
event.smithing(
  'easy_mob_farm:monster_plains_cave_farm',  
  'easy_mob_farm:desert_farm', 
  'ars_nouveau:end_fiber'   
)
event.smithing(
  'easy_mob_farm:swamp_farm',  
  'easy_mob_farm:monster_plains_cave_farm', 
  'botania:gaia_ingot'   
)
event.smithing(
  'botanicadds:elven_fluxfield',  
  'botania:mana_fluxfield', 
  'ars_nouveau:end_fiber'   
)
event.smithing(
  'ars_nouveau:archmage_robes',  
  'ars_nouveau:apprentice_robes', 
  'ars_nouveau:end_fiber'   
)
event.smithing(
  'ars_nouveau:archmage_leggings',  
  'ars_nouveau:apprentice_leggings', 
  'ars_nouveau:end_fiber'   
)
event.smithing(
  'ars_nouveau:archmage_boots',  
  'ars_nouveau:apprentice_boots',
  'ars_nouveau:end_fiber' 
)
event.smithing(
  'ars_nouveau:archmage_hood',  
  'ars_nouveau:apprentice_hood', 
  'ars_nouveau:end_fiber'  
)
event.smithing(
  'prettypipes:medium_speed_module',  
  'prettypipes:low_speed_module', 
  'botania:elementium_ingot'  
)
event.smithing(
  'prettypipes:high_speed_module',  
  'prettypipes:medium_speed_module', 
  'botania:terrasteel_ingot'  
)
event.smithing(
  'prettypipes:medium_extraction_module',  
  'prettypipes:low_extraction_module', 
  'botania:elementium_ingot'  
)
event.smithing(
  'prettypipes:high_extraction_module',  
  'prettypipes:medium_extraction_module', 
  'botania:terrasteel_ingot'  
)
event.smithing(
  'prettypipes:medium_retrieval_module',  
  'prettypipes:low_retrieval_module', 
  'botania:elementium_ingot'  
)
event.smithing(
  'prettypipes:high_retrieval_module',  
  'prettypipes:medium_retrieval_module', 
  'botania:terrasteel_ingot'  
)
event.smithing(
  'cobblefordays:tier_3',  
  'cobblefordays:tier_2', 
  'botania:terrasteel_ingot'  
)
event.smithing(
  'cobblefordays:tier_4',  
  'cobblefordays:tier_3', 
  'botania:dragonstone'  
)
event.smithing(
  'cobblefordays:tier_5',  
  'cobblefordays:tier_4', 
  'botania:life_essence'  
)
let manaInfusion = (input, output, mana) => {
		event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": input
  },
  "output": {
    "item": output
  },
  "mana": mana
   })
}
manaInfusion("kubejs:vitric_diamond", "ars_artifice:spell_gem_t1", 20000)
manaInfusion("minecraft:gold_ingot", "kubejs:manaelectrum_ingot", 5000)
manaInfusion("create:asurine", "minecraft:snow_block", 10000)
manaInfusion("minecraft:amethyst_shard", "kubejs:mana_gem", 5000)
manaInfusion("botanicadds:mana_lapis", "kubejs:mana_gem", 5000)
manaInfusion("minecraft:emerald", "kubejs:mana_gem", 5000)
manaInfusion('minecraft:bucket', 'minecraft:water_bucket', 20000)
manaInfusion('ars_nouveau:magebloom_fiber', 'botania:mana_string', 5000)

let runicInfusion = (input, output) => {
  event.custom({
    "type": "botania:mana_infusion",
    "catalyst": {
      "type": "block",
      "block": "kubejs:runic_catalyst"
    },
    "input": {
      "item": input
    },
    "output": {
      "item": output
    },
    "mana": 31250
     }).id("kubejs"+output)
}
let crushItUp = (input, output, mana) => {
  event.custom({
    "type": "botania:mana_infusion",
    "catalyst": {
      "type": "block",
      "block": "kubejs:crusher"
    },
    "input": {
      "item": input
    },
    "output": {
      "item": output
    },
    "mana": mana
     }).id("kubejs"+input+"_crushed")
  event.custom({
      "type": "ars_nouveau:crush",
      "input": {
        "item": input
      },
      "output": [
        {
          "chance": 1.0,
          "count": 1,
          "item": output
        }
      ]
  })
	event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "thermal:cinnabar"
  },
  "output": {
    "item": "kubejs:mana_gem",
    "count": 4
  },
  "mana": 5000
   })
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      {
        "item": input
      }
    ],
    "processingTime": 150,
    "results": [
      {
        "count": 1,
        "item": output
      }
    ]
  })
  event.custom({
    "type": "thermal:pulverizer",
    "ingredient": {
      "item": input
    },
    "result": [
      {
        "item": output,
        "count": 1
      }
    ],
    "experience": 0.0
   })
}
crushItUp('kubejs:bloodstone_block', 'kubejs:blood_drop', 5000)
crushItUp('ae2:certus_quartz_crystal', 'ae2:certus_quartz_dust', 5000)
runicInfusion("minecraft:ice", "botania:rune_water")
runicInfusion("minecraft:hay_block", "botania:rune_earth")
runicInfusion("minecraft:feather", "botania:rune_air")
runicInfusion("minecraft:blaze_powder", "botania:rune_fire")
	event.replaceInput({id: 'twigs:rocky_dirt'}, 'twigs:pebble', 'botania:pebble')
	event.replaceInput({id: 'farmeresdelight:basket'}, 'minecraft:bamboo', 'farmersdelight:straw')
	event.replaceInput({id: 'ars_nouveau:basic_spell_turret'}, 'minecraft:redstone_block', 'botania:avatar')

	event.shapeless(
    Item.of('kubejs:manaelectrum_nugget', 9), 
  [ 
    'kubejs:manaelectrum_ingot'
  ]
 )
 event.shapeless(
  Item.of('kubejs:ender_sap', 1), 
[ 
  'kubejs:sap',
  'ae2:ender_dust',
  'ars_nouveau:air_essence'
]
)
 event.shapeless(
  Item.of('kubejs:runic_ingot', 9), 
[ 
  'kubejs:runic_block'
]
)
event.shapeless(
  Item.of('kubejs:sap', 4), 
[ 
  'thermal:sap_bucket'
]
).replaceIngredient('thermal:sap_bucket', 'minecraft:bucket')
 event.shapeless(
  Item.of('kubejs:hot_resin', 1), 
[ 
  'thermal:resin_bucket'
]
).replaceIngredient('thermal:resin_bucket', 'minecraft:bucket')
 event.shapeless(
  Item.of('create:zinc_ingot', 9), 
[ 
  'create:zinc_block'
]
)
	event.shapeless(
    Item.of('ars_nouveau:novice_spell_book', 1), 
  [ 
    'botania:rune_mana',
    'kubejs:manaelectrum_ingot',
	'minecraft:book'	
  ]
 )

 event.shapeless(
   Item.of('minecraft:leather', 1), 
 [ 
   'ars_nouveau:wilden_wing', 
   'ars_nouveau:wilden_wing', 
   'ars_nouveau:wilden_wing'	
 ]
)
event.shapeless(
  Item.of('kubejs:glow_rosin', 1), 
[ 
  'thermal:rosin', 
  'minecraft:glowstone_dust'
]
)
event.shapeless(
  Item.of('genericbotaniapacktweaker:dieselotus_floating', 1), 
[ 
  'genericbotaniapacktweaker:dieselotus', 
  '#botania:floating_flowers'
]
)
event.shapeless(
  Item.of('kubejs:blooded_source', 1), 
[ 
  'ars_nouveau:source_gem', 
  'kubejs:crystallised_blood'
]
)
event.shapeless(
  Item.of('kubejs:vitric_diamond', 1), 
[ 
  'botania:mana_diamond', 
  'moreminecarts:glass_spines',
  'moreminecarts:glass_spines'
]
)
event.shapeless(
  Item.of('create:rose_quartz', 1), 
[ 
  'minecraft:quartz', 
  'kubejs:crystallised_blood',
  'kubejs:crystallised_blood'
]
)
event.shapeless(
  Item.of('thermal:lumium_ingot', 2), 
[ 
  'thermal:tin_ingot', 
  'thermal:tin_ingot',
  'thermal:tin_ingot',
  'create:zinc_ingot',
  'kubejs:glow_rosin',
  'ars_nouveau:fire_essence'
]
)
event.shapeless(
  Item.of('kubejs:brass_dust', 2), 
[ 
  'kubejs:zinc_dust', 
  'thermal:copper_dust',
  'thermal:copper_dust',
  'thermal:rosin',
  'thermal:rosin'
]
)
event.shapeless(
  Item.of('minecraft:kelp', 1), 
[ 
  'botania:rune_water', 
  'minecraft:vine',
'ars_nouveau:manipulation_essence'	
]
)

event.shapeless(
  Item.of('kubejs:dirty_dirt', 2), 
[ 
  'minecraft:dirt',
  'minecraft:dirt'
]
)
event.shapeless(
  Item.of('ars_nouveau:magebloom_fiber', 2), 
[ 
  'ars_nouveau:magebloom',
]
)
event.shapeless(
  Item.of('kubejs:fiery_coal', 6), 
[ 
  'minecraft:coal',
  'minecraft:coal',
  'minecraft:coal',
  'minecraft:coal',
  'minecraft:coal',
  'minecraft:coal',
  'botania:rune_fire'
]
)


//REWORK THESE!
 event.shapeless(
  Item.of('ae2:engineering_processor', 1),  
[ 
  'ae2:engineering_processor_press',
  'quark:soul_bead',
  'thermal:steel_ingot',
  'minecraft:redstone_block',
  'kubejs:rune_engineering'
]
).keepIngredient('ae2:engineering_processor_press')
event.shapeless(
Item.of('ae2:logic_processor', 1), 
[ 
  'ae2:logic_processor_press',
  'quark:soul_bead',
  'create:brass_ingot',
  'minecraft:redstone_block',
  'kubejs:rune_logic'
]
).keepIngredient('ae2:logic_processor_press')

event.shapeless(
  Item.of('ae2:calculation_processor', 1), 
  [ 
    'ae2:calculation_processor_press',
    'quark:soul_bead',
    'ae2:certus_quartz_crystal',
    'minecraft:redstone_block',
    'kubejs:rune_calculation'
  ]
  ).keepIngredient('ae2:calculation_processor_press')

event.shaped(
  Item.of('kubejs:manaelectrum_ingot', 1), 
  [ 
    'AAA', 
    'AAA', 
    'AAA'  
  ],
  {
    A: 'kubejs:manaelectrum_nugget',  
  }
)
event.shaped(
  Item.of('infernalexp:glowsilk_cocoon', 1), 
  [ 
    'AAA', 
    'AAA', 
    'AAA'  
  ],
  {
    A: 'infernalexp:glowsilk',  
  }
)

event.shaped(
  Item.of('kubejs:bloodstone_block', 1), 
  [ 
    'AAA', 
    'AAA', 
    'AAA'  
  ],
  {
    A: 'twigs:bloodstone',  
  }
)
event.shaped(
  Item.of('botania:creative_pool', 1), 
  [ 
    'DDD', 
    'DAD', 
    'DDD'  
  ],
  {
    D: 'kubejs:runic_block',
    A: 'botania:mana_pool',  
  }
)
event.shaped(
  Item.of('create:andesite_alloy', 1), 
  [ 
    'AC ', 
    'CB ', 
    '   '  
  ],
  {
    A: 'minecraft:andesite',  
	B: 'botania:rune_sloth',
	C: 'create:zinc_ingot'
	
  }
)
event.shaped(
  Item.of('minecraft:deepslate', 8), 
  [ 
    'AAA', 
    'ABA',
    'AAA'  
  ],
  {
  A: 'minecraft:stone',  
	B: 'botania:rune_earth'
  }
)
event.shaped(
  Item.of('minecraft:gravel', 8), 
  [ 
    'AAA', 
    'ABA',
    'AAA'  
  ],
  {
  A: 'minecraft:cobblestone',  
	B: 'botania:rune_earth'
  }
)
event.shaped(
  Item.of('minecraft:sand', 8), 
  [ 
    'AAA', 
    'ABA',
    'AAA'  
  ],
  {
  A: 'minecraft:gravel',  
	B: 'botania:rune_earth'
  }
)
event.shaped(
  Item.of('ars_nouveau:sourcestone', 8), 
  [ 
    'AAA', 
    'ABA',
    'AAA'  
  ],
  {
    A: 'botania:livingrock',  
	B: 'ars_nouveau:source_gem'
  }
).id("ars_nouveau:a1")
event.shaped(
  Item.of('kubejs:infused_livingwood', 1), 
  [ 
    'CAC', 
    'ABA',
    'CAC'  
  ],
  {
    A: 'botania:terrasteel_nugget',  
	  B: 'botania:livingwood',
    C: 'botania:manasteel_nugget'
  }
)
event.shaped(
  Item.of('easy_mob_farm:steel_mob_farm_template', 1), 
  [ 
    'CAC', 
    'A A',
    'CAC'  
  ],
  {
    A: 'botania:elf_glass',  
    C: 'botania:manasteel_ingot'
  }
)

event.shaped(
  Item.of('kubejs:clay_gear', 2), 
  [ 
    ' A ', 
    'ABA',
    ' A '  
  ],
  {
    A: 'minecraft:clay',  
	  B: 'minecraft:slime_ball',
  }
)
event.shaped(
  Item.of('prettypipes:blank_module', 1), 
  [ 
    'CAC', 
    'ABA',
    'CAC'  
  ],
  {
    A: 'minecraft:redstone',  
	  C: 'botania:livingrock',
    B: 'botania:manasteel_ingot'
  }
)
event.shaped(
  Item.of('thermal:oil_sand', 2), 
  [ 
    'AAA', 
    'ABA',
    'AAA'  
  ],
  {
    A: 'minecraft:bone_block',  
    B: 'ars_nouveau:manipulation_essence'
  }
)
event.shaped(
  Item.of('thermal:energy_duct', 6), 
  [ 
    'CAC', 
    'DBD',
    'CAC'  
  ],
  {
    A: 'kubejs:crystallised_blood',  
	  C: 'kubejs:manaelectrum_nugget',
    B: '#forge:glass',
    D: 'thermal:lead_ingot'
  }
)
event.shaped(
  Item.of('cobblefordays:tier_2', 1), 
  [ 
    'CCC', 
    'ZBX',
    'CCC'  
  ],
  {
	  C: 'minecraft:cobblestone',
    B: 'minecraft:lava_bucket',
    X: 'botania:rune_fire',
    Z: 'botania:rune_water'
  }
)
event.shaped(
  Item.of('botania:cocoon', 1), 
  [ 
    'CCC', 
    'CBC',
    'CAC'  
  ],
  {
    A: 'botania:rune_spring',  
	  B: 'botania:fel_pumpkin',
    C: 'minecraft:string'
  }
)
event.shaped(
  Item.of('ars_nouveau:scribes_table', 1), 
  [ 
    'CCC', 
    'BDB',
    'A A'  
  ],
  {
    A: '#forge:logs/archwood',  
	  B: 'kubejs:manaelectrum_ingot',
    C: 'ars_nouveau:archwood_slab',
    D: 'botania:rune_mana'
  }
)
event.shaped(
  Item.of('computercraft:computer_normal', 1), 
  [ 
    'CCC', 
    'CDC',
    'CBC'  
  ],
  {
	  B: '#forge:glass',
    C: 'botania:livingrock',
    D: 'kubejs:rune_calculation'
  }
)
event.shaped(
  Item.of('computercraft:pocket_computer_normal', 1), 
  [ 
    'CAC', 
    'CDC',
    'CBC'  
  ],
  {
    A: 'botania:rune_pride',
	  B: '#forge:glass',
    C: 'botania:livingrock',
    D: 'kubejs:rune_calculation'
  }
)
event.shaped(
  Item.of('computercraft:turtle_normal', 1), 
  [ 
    'CAC', 
    'CDC',
    'CBC'  
  ],
  {
    A: 'quark:soul_bead',
	  B: '#forge:glass',
    C: 'botania:livingrock',
    D: 'kubejs:rune_calculation'
  }
)
event.shaped(
  Item.of('create:empty_blaze_burner', 1), 
  [ 
    'CAC', 
    'ABA',
    'CAC'  
  ],
  {
    A: 'create:sturdy_sheet',  
	  B: 'minecraft:netherrack',
    C: 'ae2:silicon'
  }
)
event.shaped(
  Item.of('enderchests:ender_chest', 1), 
  [ 
    'CAC', 
    'ABA',
    'CAC'  
  ],
  {
    A: 'minecraft:obsidian',  
	  B: 'botania:gaia_ingot',
    C: 'ars_nouveau:end_fiber'
  }
)
event.shaped(
  Item.of('enderchests:ender_bag', 1), 
  [ 
    'CAC', 
    ' B ',
    'CAC'  
  ],
  {
    A: 'minecraft:obsidian',  
	  B: 'botania:ender_hand',
    C: 'ars_nouveau:end_fiber'
  }
)
event.shaped(
  Item.of('endertanks:ender_bucket', 1), 
  [ 
    'CAC', 
    ' B ',
    'CAC'  
  ],
  {
    A: 'minecraft:bucket',  
	  B: 'botania:ender_hand',
    C: 'ars_nouveau:end_fiber'
  }
)
event.shaped(
  Item.of('endertanks:ender_tank', 1), 
  [ 
    'CAC', 
    'ABA',
    'CAC'  
  ],
  {
    A: 'minecraft:obsidian',  
	  B: 'thermal:fluid_cell',
    C: 'ars_nouveau:end_fiber'
  }
)
event.shaped(
  Item.of('create:whisk', 1), 
  [ 
    ' B ', 
    'ABA',
    'AAA'  
  ],
  {
    A: 'minecraft:iron_ingot',  
	  B: 'create:andesite_alloy',
  }
)
event.shaped(
  Item.of('botania:vial', 1), 
  [ 
    '   ', 
    'ABA',
    ' A '  
  ],
  {
    A: 'botania:mana_glass',  
	  B: 'botania:rune_mana',
  }
)
event.shaped(
  Item.of('botania:flask', 1), 
  [ 
    '   ', 
    'ABA',
    ' A '  
  ],
  {
    A: 'botania:mana_glass',  
	  B: 'thermal:cured_rubber',
  }
)
event.shaped(
  Item.of('ae2:annihilation_core', 4), 
  [ 
    '   ', 
    'ABC',
    '   '  
  ],
  {
    A: 'botania:rune_wrath',  
	  B: 'ae2:fluix_dust',
    C: 'ae2:logic_processor'
  }
)
event.shaped(
  Item.of('ae2:formation_core', 4), 
  [ 
    '   ', 
    'ABC',
    '   '  
  ],
  {
    A: 'botania:rune_sloth',  
	  B: 'ae2:fluix_dust',
    C: 'ae2:logic_processor'
  }
)
event.shaped(
  Item.of('decorative_blocks:lattice', 1), 
  [ 
    ' A ', 
    'AAA',
    ' A '  
  ],
  {
    A: 'minecraft:stick',  
  }
)
event.shaped(
  Item.of('genericbotaniapacktweaker:manaelectrum_pickaxe', 1), 
  [ 
    'BBB', 
    ' A ',
    ' A '  
  ],
  {
    A: 'botania:livingwood_twig',  
    B: 'kubejs:manaelectrum_ingot'
  }
)
event.shaped(
  Item.of('genericbotaniapacktweaker:manaelectrum_axe', 1), 
  [ 
    'BB ', 
    'BA ',
    ' A '  
  ],
  {
    A: 'botania:livingwood_twig',  
    B: 'kubejs:manaelectrum_ingot'
  }
)
event.shaped(
  Item.of('genericbotaniapacktweaker:manaelectrum_axe', 1), 
  [ 
    ' BB', 
    ' AB',
    ' A '  
  ],
  {
    A: 'botania:livingwood_twig',  
    B: 'kubejs:manaelectrum_ingot'
  }
)
event.shaped(
  Item.of('genericbotaniapacktweaker:manaelectrum_hoe', 1), 
  [ 
    'BB ', 
    ' A ',
    ' A '  
  ],
  {
    A: 'botania:livingwood_twig',  
    B: 'kubejs:manaelectrum_ingot'
  }
)
event.shaped(
  Item.of('genericbotaniapacktweaker:manaelectrum_hoe', 1), 
  [ 
    ' BB', 
    ' A ',
    ' A '  
  ],
  {
    A: 'botania:livingwood_twig',  
    B: 'kubejs:manaelectrum_ingot'
  }
)
event.shaped(
  Item.of('genericbotaniapacktweaker:manaelectrum_sword', 1), 
  [ 
    ' B ', 
    ' B ',
    ' A '  
  ],
  {
    A: 'botania:livingwood_twig',  
    B: 'kubejs:manaelectrum_ingot'
  }
)
event.shaped(
  Item.of('genericbotaniapacktweaker:manaelectrum_shovel', 1), 
  [ 
    ' B ', 
    ' A ',
    ' A '  
  ],
  {
    A: 'botania:livingwood_twig',  
    B: 'kubejs:manaelectrum_ingot'
  }
)

event.shaped(
  Item.of('prettypipes:low_speed_module', 2), 
  [ 
    ' C ', 
    'ABA',
    ' A '  
  ],
  {
    A: 'minecraft:redstone',  
	  B: 'prettypipes:blank_module',
    C: 'botania:rune_air'
  }
)
event.shaped(
  Item.of('prettypipes:low_extraction_module', 2), 
  [ 
    ' C ', 
    'ABA',
    ' A '  
  ],
  {
    A: 'minecraft:redstone',  
	  B: 'prettypipes:blank_module',
    C: 'botania:rune_fire'
  }
)
event.shaped(
  Item.of('prettypipes:low_retrieval_module', 2), 
  [ 
    ' C ', 
    'ABA',
    ' A '  
  ],
  {
    A: 'minecraft:redstone',  
	  B: 'prettypipes:blank_module',
    C: 'botania:rune_earth'
  }
)
event.shaped(
  Item.of('botania:bellows', 1), 
  [ 
    ' A ', 
    'CBC',
    ' A '  
  ],
  {
    A: 'botania:livingwood_log',  
	  B: 'supplementaries:bellows',
    C: 'botania:rune_air'
  }
)
event.shaped(
  Item.of('prettypipes:pipe', 8), 
  [ 
    ' A ', 
    'CBC',
    ' A '  
  ],
  {
    A: 'botania:mana_glass',  
	  B: 'botania:rune_air',
    C: 'kubejs:manaelectrum_ingot'
  }
)
event.shaped(
  Item.of('botania:gaia_pylon', 1), 
  [ 
    ' E ', 
    'CBD',
    ' A '  
  ],
  {
    A: 'botania:pixie_dust',  
	  B: 'botania:natura_pylon',
    C: 'ae2:calculation_processor',
    D: 'ae2:engineering_processor',
    E: 'ae2:logic_processor'
  }
)
event.shaped(
  Item.of('ae2:controller', 1), 
  [ 
    'CAC', 
    'ABA',
    'CAC'  
  ],
  {
    A: 'quark:soul_bead',  
	  B: 'ae2:engineering_processor',
    C: 'kubejs:infused_livingwood'
  }
)
event.shaped(
  Item.of('supplementaries:end_stone_lamp', 4), 
  [ 
    'CAC', 
    'ABA',
    'CAC'  
  ],
  {
    A: 'botania:mana_pearl',  
	  B: 'minecraft:obsidian',
    C: 'ae2:ender_dust'
  }
)
event.shaped(
  Item.of('ae2:interface', 1), 
  [ 
    'CAC', 
    'DBE',
    'CAC'  
  ],
  {
    A: 'botania:elf_glass',  
	  B: 'botania:corporea_spark',
    D: 'ae2:annihilation_core',
    E: 'ae2:formation_core',
    C: 'minecraft:iron_ingot'
  }
)
event.shaped(
  Item.of('ae2:drive', 1), 
  [ 
    'CTC', 
    'ABA',
    'CTC'  
  ],
  {
    B: 'botania:livingrock',
    A: 'ae2:fluix_glass_cable',  
	  T: 'ae2:engineering_processor',
    C: 'kubejs:infused_livingwood'

  }
)
event.shaped(
  Item.of('botania:terra_plate', 1), 
  [ 
    'CTC', 
    'ADA',
    'XTX'  
  ],
  {
    A: 'botania:rune_mana',  
	  T: 'minecraft:lapis_block',
    C: 'ars_nouveau:earth_essence',
    D: 'ars_nouveau:source_gem_block',
    X: 'botania:spark',
  }
)
event.shaped(
  Item.of('kubejs:runic_block', 1), 
  [ 
    'AAA', 
    'AAA',
    'AAA'  
  ],
  {
    A: 'kubejs:runic_ingot',  
  }
)
event.shaped(
  Item.of('create:zinc_ingot', 1), 
  [ 
    'AAA', 
    'AAA',
    'AAA'  
  ],
  {
    A: 'create:zinc_nugget',  
  }
)
event.shaped(
  Item.of('ae2:calculation_processor_press', 1), 
  [ 
    'AAA', 
    'ABA',
    'AAA'  
  ],
  {
    A: 'ae2:silicon',
    B: 'ae2:calculation_processor'  
  }
)
event.shaped(
  Item.of('ae2:logic_processor_press', 1), 
  [ 
    'AAA', 
    'ABA',
    'AAA'  
  ],
  {
    A: 'ae2:silicon',
    B: 'ae2:logic_processor'  
  }
)
event.shaped(
  Item.of('ae2:engineering_processor_press', 1), 
  [ 
    'AAA', 
    'ABA',
    'AAA'  
  ],
  {
    A: 'ae2:silicon',
    B: 'ae2:engineering_processor'  
  }
)
	event.shaped(Item.of("quark:crate", 1), [
		'MMM',
		'M M',
		'MBM'
	], {
		M: 'botania:livingwood_planks',
		B: 'farmersdelight:basket'

	})
  event.shaped(Item.of("kubejs:crystalliser", 1), [
		'MBM',
		'BAB',
		'MBM'
	], {
		M: 'botania:terrasteel_nugget',
		B: 'botania:manasteel_ingot',
    A: 'botania:manasteel_block'

	})
  event.shaped(Item.of("kubejs:crusher", 1), [
		'MBM',
		'BAB',
		'MBM'
	], {
		M: 'minecraft:redstone_block',
		B: 'botania:manasteel_ingot',
    A: 'ars_nouveau:glyph_crush'

	})
  event.shaped(Item.of("minecraft:sculk", 1), [
		' B ',
		'BAB',
		' B '
	], {
		B: 'botania:ender_air_bottle',
    A: 'minecraft:end_stone'

	})
  event.shaped(Item.of("kubejs:runic_catalyst", 1), [
		'MCM',
		'BAB',
		'MBM'
	], {
		M: 'botania:livingrock',
		B: 'botania:gaia_ingot',
    A: 'botania:alchemy_catalyst',
    C: 'botania:life_essence'

	})
	event.shaped(Item.of("summoningrituals:altar", 1), [
		'   ',
		' M ',
		'ABA'
	], {
		M: 'minecraft:wither_skeleton_skull',
		B: '#minecraft:logs',
    A: 'kubejs:manaelectrum_ingot'

	})
	event.shaped(Item.of("supplementaries:rope", 1), [
		' M ',
		' M ',
		' M '
	], {
		M: 'farmersdelight:rope', 

	})
	event.shaped(Item.of("create:electron_tube", 1), [
		' C ',
		' M ',
		' D '
	], {
		M: 'create:iron_sheet', 
    C: 'create:polished_rose_quartz',
    D: 'ae2:silicon'

	})
	event.shaped(Item.of("kubejs:introsceptre", 1), [
		'  M',
		' C ',
		'D  '
	], {
		M: 'botania:mana_glass', 
    C: 'botania:livingwood_twig',
    D: 'kubejs:rune_calculation'

	})
	event.shaped(Item.of("kubejs:livingwood_storage", 2), [
		'MMM',
		'M M',
		'MMM'
	], {
		M: 'botania:livingwood_log', 

	})
	event.shaped(Item.of("supplementaries:bellows", 1), [
		'MMM',
		'CAC',
		'MMM'
	], {
		M: '#minecraft:wooden_slabs', 
    C: 'minecraft:leather',
    A: 'botania:rune_fire'

	})
	event.shaped(Item.of("kubejs:tablet_base", 2), [
		'CMC',
		'MAM',
		'CMC'
	], {
		M: 'botania:livingrock', 
    C: 'minecraft:stone',
    A: '#botania:runes'

	})
event.custom({
	  "type": "botania:marimorphosis",
  "biome_bonus": 11,
  "biome_bonus_tag": "botania:marimorphosis_desert_bonus",
  "input": {
    "type": "block",
    "block": "botania:metamorphic_desert_cobblestone"
  },
  "output": {
    "type": "block",
    "block": "create:ochrum"
  },
  "weight": 1
})
event.custom({
	"type": "botania:petal_apothecary",	
  "ingredients": [
    {
      "item": "minecraft:glowstone_dust"
    },
    {
      "item": "minecraft:glowstone_dust"
    },
    {
      "item": "minecraft:glowstone_dust"
    },
    {
      "item": "minecraft:glowstone_dust"
    }
  ],
  "output": {
    "item": "minecraft:glow_lichen"
  },
  "reagent": {
    "item": "minecraft:vine"
  }
})
event.custom({
	  "type": "botania:marimorphosis",
  "biome_bonus": 11,
  "biome_bonus_tag": "botania:marimorphosis_desert_bonus",
  "input": {
    "type": "block",
    "block": "minecraft:netherrack"
  },
  "output": {
    "type": "block",
    "block": "create:crimsite"
  },
  "weight": 1
})
event.custom({
	  "type": "botania:marimorphosis",
  "biome_bonus": 11,
  "biome_bonus_tag": "botania:marimorphosis_desert_bonus",
  "input": {
    "type": "block",
    "block": "botania:metamorphic_forest_cobblestone"
  },
  "output": {
    "type": "block",
    "block": "create:veridium"
  },
  "weight": 1
})
event.custom({
	  "type": "botania:marimorphosis",
  "biome_bonus": 11,
  "biome_bonus_tag": "botania:marimorphosis_desert_bonus",
  "input": {
    "type": "block",
    "block": "botania:metamorphic_taiga_cobblestone"
  },
  "output": {
    "type": "block",
    "block": "create:asurine"
  },
  "weight": 1
})
let colors = ["blue", "red", "green", "purple"]
colors.forEach(color => {
	
event.custom({
	"type": "botania:petal_apothecary",	
  "ingredients": [
    {
      "tag": "botania:petals/"+color
    },
    {
      "tag": "botania:petals/"+color
    },
    {
      "item": "botania:rune_mana"
    },
    {
      "tag": "minecraft:saplings"
    }
  ],
  "output": {
    "item": "ars_nouveau:"+color+"_archwood_sapling"
  },
  "reagent": {
    "tag": "botania:seed_apothecary_reagent"
  }
})
})
let blossoms =  ["red", "blue", "yellow", "pink", "orange"]
blossoms.forEach(blossom => {
  event.custom({
    "type": "botania:petal_apothecary",	
    "ingredients": [
      {
        "tag": "botania:petals/"+blossom
      },
      {
        "tag": "botania:petals/"+blossom
      },
      {
        "item": "botania:rune_spring"
      },
      {
        "tag": "minecraft:saplings"
      }
    ],
    "output": {
      "item": "quark:"+blossom+"_blossom_sapling"
    },
    "reagent": {
      "tag": "botania:seed_apothecary_reagent"
    }
  })
})
let materialsGear = ["steel", "rose_gold", "iron", "gold", "copper", "netherite", 'lapis', 'diamond', 'emerald', 'quartz', 'signalum', 'lumium', 'enderium', 'tin', 'lead', 'nickel', 'bronze', 'electrum', 'invar', 'constantan']
let materialsPlate = ["steel", "rose_gold", "iron", "gold", "copper", "netherite", 'signalum', 'lumium', 'enderium', 'tin', 'lead', 'nickel', 'bronze', 'electrum', 'invar', 'constantan']
function getMaterialforInput(input) {
  let text = ""
  switch(input) {
    case 'iron':
      text = "minecraft:iron_ingot"
      break;
    case 'gold': 
      text = 'minecraft:gold_ingot'
      break;
    case 'diamond':
      text = 'minecraft:diamond'
      break;
    case 'quartz':
      text = 'kubejs:nether_quartz_crystal'
      break;
    case 'netherite':
      text = 'minecraft:netherite_ingot'
      break;
    case 'lapis':
      text = 'minecraft:lapis_lazuli' 
      break;
    case 'emerald':
      text = 'minecraft:emerald'
      break;
    case 'copper':
      text = 'minecraft:copper_ingot'
      break;
    default: 
      text = 'thermal:'+input+'_ingot'
      break;
    return text

  }
  return text
}
materialsGear.forEach(material => {
  let materialthing = getMaterialforInput(material)
  event.custom({
		  "type": "ars_nouveau:enchanting_apparatus",
  "keepNbtOfReagent": true,
  "output": {
    "item": "thermal:"+material+"_gear"
  },  
  "pedestalItems": [
    {
      "item": {
        "item": materialthing
      }
    },
    {
      "item": {
        "item": materialthing
      }
    },
    {
      "item": {
        "item": materialthing
      }
    },
    {
      "item": {
        "item": materialthing
      }
    }
  ],
  "reagent": [
    {
      "item": "kubejs:clay_gear"
    }
  ],
  "sourceCost": 0
  })
})
materialsPlate.forEach(material => {
  let materialPlate = getMaterialforInput(material)
  event.custom({
    "type": "ars_nouveau:crush",
    "input": {
      "item": materialPlate
    },
    "output": [
      {
        "chance": 1.0,
        "count": 1,
        "item": "thermal:"+material+"_plate"
      }
    ]
  })
})
event.custom({
  "type": "ars_nouveau:crush",
  "input": {
    "item": "create:zinc_ingot"
  },
  "output": [
    {
      "chance": 1.0,
      "count": 1,
      "item": "kubejs:zinc_plate"
    }
  ]
})
event.custom({
  "type": "ars_nouveau:crush",
  "input": {
    "item": "create:brass_ingot"
  },
  "output": [ 
    {
      "chance": 1.0,
      "count": 1,
      "item": "create:brass_sheet"
    }
  ]
})
event.custom({
  "type": "botania:petal_apothecary",	
  "ingredients": [
    {
      "tag": "botania:petals/magenta"
    },
    {
      "tag": "botania:petals/magenta"
    },
    {
      "item": "botania:rune_spring"
    },
    {
      "tag": "minecraft:saplings"
    }
  ],
  "output": {
    "item": "quark:lavender_blossom_sapling"
  },
  "reagent": {
    "tag": "botania:seed_apothecary_reagent"
  }
})
//what's a map?
function getInputsForEssence(essence) {
	let text = new Array()
	
	switch(essence) {
		case 'abjuration':	
		    text = ['botania:rune_envy', 'botania:pure_daisy']
			break;
		case 'conjuration':
			text = ['botania:rune_greed', 'ars_nouveau:wilden_horn']
			break;
		case 'air':
			 text = ['botania:rune_air', 'ars_nouveau:wilden_wing']
			break;
		case 'earth':
			 text = ['botania:rune_earth', 'minecraft:dirt']
			break;
		case 'fire':
		    text = ['botania:rune_fire', 'minecraft:fire_charge']
			break;
		case 'manipulation':
			 text = ['botania:rune_pride', 'minecraft:clock']
			break;
		case 'water':
		     text = ['botania:rune_water', 'minecraft:snow_block']
			break;
		return text;
		
	}
	return text;
}
let essences = ['abjuration', 'conjuration', 'air', 'earth', 'fire', 'manipulation', 'water']
essences.forEach(essence => {
	event.remove({id: 'ars_nouveau:imbuement_'+essence+'_essence'})
let items = getInputsForEssence(essence)
event.custom({
	
	  "type": "ars_nouveau:imbuement",
  "count": 1,
  "input": {
    "tag": "forge:gems/source"
  },
  "output": "ars_nouveau:"+essence+"_essence",
  "pedestalItems": [
    {
      "item": {
        "item": "botania:rune_mana"
      }
    },
    {
      "item": {
        "item": items[0]
      }
    },
    {
      "item": {
        "item": items[1]
      }
    }
  ],
  "source": 2000
})
})

/*event.custom({
	  "type": "botania:orechid",
  "input": {
    "type": "block",
    "block": "botania:mana_quartz"
  },
  "output": {
    "type": "block",
    "block": "create:zinc_ore"
  },
  "weight": 75
})*/
event.custom({
  "type": "botania:elven_trade",
  "ingredients": [
    {
      "item": "ars_nouveau:source_gem"
    }
  ],
  "output": [
    {
      "item": "botania:dragonstone"
    }
  ]
}).id("kubejs:botania/dragonstone")

event.custom({
  "type": "botania:elven_trade",
  "ingredients": [
    {
      "item": "kubejs:manaelectrum_ingot"
    }
  ],
  "output": [
    {
      "item": "create:zinc_ingot"
    }
  ]
}).id("kubejs:botania/zinc_ingot")

event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 2,
  "input": {
    "item": "botania:mana_diamond"
  },
  "output": "ars_nouveau:source_gem",
  "pedestalItems": [],
  "source": 500

})

event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 1,
  "input": {
    "item": "kubejs:mana_gem"
  },
  "output": "ars_nouveau:source_gem",
  "pedestalItems": [],
  "source": 500

})
event.custom({
"type": "ars_nouveau:book_upgrade",
  "pattern":
  [
    "   ",
    " y ",
    "   "
  ],
  "key": {
    "y": {
      "item": "ars_nouveau:spell_book"
    }
  },
  "ingredients": [
    {
      "item": "ars_nouveau:novice_spell_book"
    },
    {
      "item": "botania:rune_mana"
    },
    {
      "item": "botania:rune_mana"
    },
    {
      "item": "botania:mana_diamond"

    },
    {
      "item": "botania:mana_bottle"
    }
  ],
  "result":
  {
    "item": "ars_nouveau:apprentice_spell_book"
  }
	
})
event.custom({
	  "type": "ars_nouveau:book_upgrade",
  "ingredients": [
    {
      "item": "ars_nouveau:apprentice_spell_book"
    },
    {
      "item": "botania:gaia_ingot"
    },
    {
      "item": "botania:gaia_ingot"
    },
    {
      "item": "botania:dragonstone"
    },
    {
      "item": "ars_nouveau:wilden_tribute"
    },
    {
      "item": "botania:life_essence"
    }
  ],
  "result": {
    "item": "ars_nouveau:archmage_spell_book"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "botania:conjuration_catalyst"
  },
  "input": {
    "item": "create:andesite_alloy"
  },
  "mana": 10000,
  "output": {
    "count": 2,
    "item": "create:andesite_alloy"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "kubejs:crystalliser"
  },
  "input": {
    "item": "kubejs:nether_quartz_dust"
  },
  "mana": 50000,
  "output": {
    "count": 1,
    "item": "kubejs:nether_quartz_crystal"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "kubejs:hot_resin"
  },
  "mana": 5000,
  "output": {
    "count": 2,
    "item": "thermal:rosin"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "kubejs:crystalliser"
  },
  "input": {
    "item": "kubejs:blood_drop"
  },
  "mana": 5000,
  "output": {
    "count": 1,
    "item": "kubejs:crystallised_blood"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "kubejs:crystalliser"
  },
  "input": {
    "item": "kubejs:brass_dust"
  },
  "mana": 15000,
  "output": {
    "count": 1,
    "item": "kubejs:brass_crystal"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "botania:conjuration_catalyst"
  },
  "input": {
    "item": "ae2:fluix_crystal"
  },
  "mana": 10000,
  "output": {
    "count": 2,
    "item": "ae2:fluix_crystal"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  },
  "input": {
    "item": "botania:metamorphic_taiga_stone"
  },
  "mana": 2000,
  "output": {
    "count": 1,
    "item": "ae2:sky_stone_block"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  },
  "input": {
    "item": "minecraft:egg"
  },
  "mana": 20000,
  "output": {
    "count": 1,
    "item": "minecraft:turtle_egg"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  },
  "input": {
    "item": "minecraft:glow_lichen"
  },
  "mana": 2000,
  "output": {
    "count": 1,
    "item": "twigs:petrified_lichen"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  },
  "input": {
    "item": "minecraft:sand"
  },
  "mana": 2000,
  "output": {
    "count": 1,
    "item": "infernalexp:glowdust_sand"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "kubejs:crusher"
  },
  "input": {
    "item": "minecraft:raw_copper"
  },
  "mana": 2000,
  "output": {
    "count": 1,
    "item": "thermal:copper_dust"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "kubejs:crusher"
  },
  "input": {
    "item": "minecraft:copper_ingot"
  },
  "mana": 2000,
  "output": {
    "count": 1,
    "item": "thermal:copper_dust"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "kubejs:crusher"
  },
  "input": {
    "item": "create:zinc_ingot"
  },
  "mana": 2000,
  "output": {
    "count": 1,
    "item": "kubejs:zinc_dust"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  },
  "input": {
    "item": "infernalexp:glowdust_sand"
  },
  "mana": 2000,
  "output": {
    "count": 1,
    "item": "minecraft:sand"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  },
  "input": {
    "item": "infernalexp:trapped_glowdust_sand"
  },
  "mana": 2000,
  "output": {
    "count": 1,
    "item": "minecraft:gravel"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  },
  "input": {
    "item": "minecraft:gravel"
  },
  "mana": 2000,
  "output": {
    "count": 1,
    "item": "infernalexp:trapped_glowdust_sand"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  },
  "input": {
    "item": "create:zinc_ingot"
  },
  "mana": 5000,
  "output": {
    "count": 1,
    "item": "thermal:tin_ingot"
  }
})
event.custom({
  "type": "botania:elven_trade",
  "ingredients": [
    {
      "item": "kubejs:nether_quartz_crystal"
    }
  ],
  "output": [
    {
      "item": "ae2:certus_quartz_crystal"
    }
  ]
})
})




