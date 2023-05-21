ServerEvents.recipes(event => {


  event.remove({id: 'ars_nouveau:end_fiber'})
	event.remove({id: 'ars_nouveau:apprentice_leggings'})
	event.remove({id: 'ars_nouveau:apprentice_robes'})
	event.remove({id: 'ars_nouveau:apprentice_hood'})
	event.remove({id: 'ars_nouveau:apprentice_boots'})
	event.remove({id: 'ars_nouveau:novice_leggings'}) 
	event.remove({id: 'ars_nouveau:novice_robes'})
	event.remove({id: 'ars_nouveau:novice_hood'})
	event.remove({id: 'ars_nouveau:novice_boots'})
	event.remove({id: 'ars_nouveau:archmage_leggings'})
	event.remove({id: 'ars_nouveau:archmage_robes'})
	event.remove({id: 'ars_nouveau:archmage_hood'})
	event.remove({id: 'ars_nouveau:archmage_boots'})
	event.remove({id: 'botania:flask'})
	event.remove({id: 'botania:vial'})
  event.remove({id: 'botania:munchdew'})
  event.remove({id: 'botania:rosa_arcana'})
  event.remove({id: 'easy_mob_farm:nether_fortress_farm_from_steel_mob_farm_template'})
	event.remove({id: 'botania:vial'})
  event.remove({id: 'thermal:rubber_from_vine'})
	event.remove({id: 'ars_nouveau:amulet_of_mana_boost'})
	event.remove({id: 'ars_nouveau:amulet_of_mana_regen'})
	event.remove({id: 'ars_nouveau:belt_of_levitation'})
  event.remove({id: 'botania:mana_infusion/cocoa_beans_to_wheat_seeds'})
  event.remove({id: 'botania:runic_altar/mana'})
  event.remove({id: 'ars_nouveau:potion_flask'})
  event.remove({id: 'botania:terra_plate'})
  event.remove({id: 'botania:orechid_ignem'})
  event.remove({output: 'botania:mana_powder'})
  event.remove({id: 'create:crushing/raw_tin_ore'})
  event.remove({id: 'create:crushing/raw_tin_block'})
  event.remove({id: 'create:crushing/tin_ore'})
  event.remove({type: 'create:crushing', output: 'create:crushed_lead_ore'})
  event.remove({type: 'create:crushing', output: 'create:crushed_iron_ore'})
  event.remove({type: 'create:crushing', output: 'create:crushed_gold_ore'})
  event.remove({type: 'create:crushing', output: 'create:crushed_nickel_ore'})
  event.remove({type: 'create:crushing', output: 'create:crushed_copper_ore'})
  event.remove({input: 'create:crushed_iron_ore'})
  event.remove({input: 'create:crushed_gold_ore'})
  event.remove({input: 'create:crushed_copper_ore'})
  event.remove({input: 'create:crushed_tin_ore'})
  event.remove({input: 'create:crushed_nickel_ore'})
  event.remove({input: 'create:crushed_lead_ore'})
  event.remove({id: 'thermal:compat/create/pulverizer_create_crimsite'})
  event.remove({id: 'thermal:compat/create/pulverizer_create_crimsite_recycle'})
  event.remove({id: 'thermal:compat/create/pulverizer_create_ochrum'})
  event.remove({id: 'thermal:compat/create/pulverizer_create_ochrum_recycle'})
  event.remove({id: 'thermal:compat/create/pulverizer_create_veridium'})
  event.remove({id: 'thermal:compat/create/pulverizer_create_veridium_recycle'})
  event.remove({id: 'thermal:earth_charge/ender_pearl_dust_from_ender_pearl'})
  event.remove({id: 'thermal:machines/pulverizer/pulverizer_ender_pearl'})
  event.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": false,
    "key": {
      "A": {
        "item": "botania:rune_fire"
      },
      "B": {
        "item": "botania:rune_earth"
      },
      "C": {
        "item": "botania:rune_air"
      },
      "D": {
        "item": "botania:rune_water"
      },
      "E": {
        "item": "botania:rune_summer"
      },
      "F": {
        "item": "botania:rune_winter"
      },
      "G": {
        "item": "botania:rune_autumn"
      },
      "H": {
        "item": "botania:rune_spring"
      },
      "M": {
        "item": 'botania:rune_mana'
      },
      "N": {
        "item": "botania:rune_sloth"
      },
      "O": {
        "item": "botania:rune_greed"
      },
      "P": {
        "item": "botania:rune_wrath"
      },
      "Q": {
        "item": "botania:rune_lust"
      },
      "R": {
        "item": "botania:rune_gluttony"
      },
      "V": {
        "item": "botania:rune_sloth"
      },
      "T": {
        "item": "botania:rune_pride"
      },
      "M": {
        "item": 'botania:rune_mana'
      },
      "X": {
        "item": "kubejs:rune_calculation"
      },
      "Y": {
        "item": "kubejs:rune_engineering"
      },
      "Z": {
        "item": 'kubejs:rune_logic'
      },
      "S": {
        "item": "botanicadds:gaiasteel_ingot"
      }
    },
    "pattern": [
      " NXYZN ",
      "TMEAFMT",
      "VMBSCMR",
      "OMGDHMO",
      " PXYZQ "
    ],
    "result": {
      "count": 1,
      "item": "kubejs:runic_ingot"
    }
  })
  event.custom({
    "type": "thermal:pyrolyzer",
  "ingredient": {
    "tag": "minecraft:logs"
  },
  "result": [
    {
      "item": "minecraft:charcoal"
    },
    {
      "fluid": "kubejs:creosote",
      "amount": 125
    }
  ],
  "experience": 0.15
  })
  event.custom({
    "type": "thermal:pyrolyzer",
  "ingredient": {
    "item": "minecraft:coal"
  },
  "result": [
    {
      "item": "thermal:coal_coke"
    },
    {
      "item": "thermal:tar",
      "chance": 0.25
    },
    {
      "fluid": "kubejs:creosote",
      "amount": 250
    }
  ],
  "experience": 0.15
  })
  event.custom({
    "type": "thermal:refinery",
    "ingredient": {
      "fluid": "thermal:resin",
      "amount": 200
    },
    "result": [
      {
        "fluid": "kubejs:tree_oil",
        "amount": 100
      },
      {
        "item": "thermal:rosin",
        "chance": 0.50
      }
    ],
    "energy": 4000
  })
  event.custom({
    "type": "thermal:refinery",
  "ingredient": {
    "fluid": "thermal:light_oil",
    "amount": 100
  },
  "result": [
    {
      "fluid": "kubejs:refined_fuel",
      "amount": 100
    },
    {
      "item": "thermal:sulfur_dust",
      "chance": 0.20
    }
  ],
  "energy": 4500
  })
  event.custom({
    "type": "thermal:refinery",
    "ingredient": {
      "fluid": "thermal:heavy_oil",
      "amount": 100
    },
    "result": [
      {
        "fluid": "kubejs:refined_fuel",
        "amount": 75
      },
      {
        "item": "thermal:tar",
        "chance": 0.10
      }
    ],
    "energy": 4500
  })
  event.custom({
    "type": "thermal:crystallizer",
    "ingredients": [
      {
        "fluid": "minecraft:water",
        "amount": 2000
      },
      {
        "item": "kubejs:brass_dust"
      }
    ],
    "result": [
      {
        "item": "kubejs:brass_crystal"
      }
    ]
  })
  event.custom({
    "type": "thermal:crystallizer",
    "ingredients": [
      {
        "fluid": "minecraft:water",
        "amount": 2000
      },
      {
        "item": "kubejs:blood_drop"
      }
    ],
    "result": [
      {
        "item": "kubejs:crystallised_blood"
      }
    ]
  })
  event.custom({
    "type": "thermal:crystallizer",
    "ingredients": [
      {
        "fluid": "minecraft:water",
        "amount": 2000
      },
      {
        "item": "kubejs:nether_quartz_dust"
      }
    ],
    "result": [
      {
        "item": "kubejs:nether_quartz_crystal"
      }
    ]
  })
  event.custom({
    "type": "thermal:chiller",
    "ingredients": [
      {
        "fluid": "minecraft:water",
        "amount": 1000
      },
      {
        "item": "kubejs:hot_resin"
      }
    ],
    "result": [
      {
        "item": "thermal:rosin",
        "count": 5
      }
    ],
    "energy": 2000
  })
  event.custom({
    "type": "thermal:pulverizer_recycle",
    "ingredient": {
      "tag": "create:stone_types/crimsite"
    },
    "result": [
      {
        "item": "thermal:iron_dust",
        "chance": 0.4
      },
      {
        "item": "minecraft:iron_nugget",
        "chance": 0.4
      }
    ],
    "conditions": [
      {
        "type": "thermal:flag",
        "flag": "mod_create"
      }
    ]
  })
  event.custom({
    "type": "thermal:pulverizer",
    "ingredient": {
      "item": "create:crimsite"
    },
    "result": [
      {
        "item": "thermal:iron_dust",
        "chance": 0.4
      },
      {
        "item": "minecraft:iron_nugget",
        "chance": 0.4
      }
    ],
    "conditions": [
      {
        "type": "thermal:flag",
        "flag": "mod_create"
      }
    ]
  })

  event.custom({
    "type": "thermal:pulverizer",
    "ingredient": {
      "item": "create:ochrum"
    },
    "result": [
      {
        "item": "thermal:gold_dust",
        "chance": 0.2
      },
      {
        "item": "minecraft:gold_nugget",
        "chance": 0.2
      }
    ],
    "conditions": [
      {
        "type": "thermal:flag",
        "flag": "mod_create"
      }
    ]
  })
  event.custom({
    "type": "thermal:pulverizer",
    "ingredient": {
      "item": "create:zinc_ingot"
    },
    "result": [
      {
        "item": "kubejs:zinc_dust",
        "chance": 1
      }
    ],
    "conditions": [
      {
        "type": "thermal:flag",
        "flag": "mod_create"
      }
    ]
  })
  event.custom({
    "type": "thermal:pulverizer_recycle",
    "ingredient": {
      "tag": "create:stone_types/ochrum"
    },
    "result": [
      {
        "item": "thermal:gold_dust",
        "chance": 0.2
      },
      {
        "item": "minecraft:gold_nugget",
        "chance": 0.2
      }
    ],
    "conditions": [
      {
        "type": "thermal:flag",
        "flag": "mod_create"
      }
    ]
  })
  event.custom({
      "type": "thermal:pulverizer",
      "ingredient": {
        "item": "create:veridium"
      },
      "result": [
        {
          "item": "thermal:copper_dust",
          "chance": 0.8
        },
        {
          "item": "create:copper_nugget",
          "chance": 0.8
        }
      ],
      "conditions": [
        {
          "type": "thermal:flag",
          "flag": "mod_create"
        }
      ]
  })
  event.custom({
    "type": "thermal:pulverizer_recycle",
    "ingredient": {
      "tag": "create:stone_types/veridium"
    },
    "result": [
      {
        "item": "thermal:copper_dust",
        "chance": 0.8
      },
      {
        "item": "create:copper_nugget",
        "chance": 0.8
      }
    ],
    "conditions": [
      {
        "type": "thermal:flag",
        "flag": "mod_create"
      }
    ]
  })
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      {
        "item": "minecraft:deepslate_iron_ore"
      }
    ],
    "processingTime": 350,
    "results": [
      {
        "count": 2,
        "item": "thermal:iron_dust"
      },
      {
        "chance": 0.25,
        "item": "thermal:iron_dust"
      },
      {
        "chance": 0.75,
        "item": "create:experience_nugget"
      },
      {
        "chance": 0.125,
        "item": "minecraft:cobbled_deepslate"
      }
    ]
  })
 event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:raw_iron"
    }
  ],
  "processingTime": 400,
  "results": [
    {
      "item": "thermal:iron_dust"
    },
    {
      "chance": 0.75,
      "item": "create:experience_nugget"
    }
  ]
 })
 event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "tag": "create:stone_types/crimsite"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "chance": 0.4,
      "item": "thermal:iron_dust"
    },
    {
      "chance": 0.4,
      "item": "minecraft:iron_nugget"
    }
  ]
 })
 event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "tag": "forge:ender_pearls"
  },
  "result": [
    {
      "item": "ae2:ender_dust",
      "count": 1
    }
  ],
  "experience": 0.2
 })
 event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "create:crimsite"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "chance": 0.4,
      "item": "thermal:iron_dust"
    },
    {
      "chance": 0.4,
      "item": "minecraft:iron_nugget"
    }
  ]
 })
 event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:iron_ore"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "item": "thermal:iron_dust"
    },
    {
      "chance": 0.75,
      "item": "thermal:iron_dust"
    },
    {
      "chance": 0.75,
      "item": "create:experience_nugget"
    },
    {
      "chance": 0.125,
      "item": "minecraft:cobblestone"
    }
  ]
 })
 
 event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:raw_iron_block"
    }
  ],
  "processingTime": 400,
  "results": [
    {
      "count": 9,
      "item": "thermal:iron_dust"
    },
    {
      "chance": 0.75,
      "count": 9,
      "item": "create:experience_nugget"
    }
  ]
 })
 event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:deepslate_gold_ore"
    }
  ],
  "processingTime": 350,
  "results": [
    {
      "count": 2,
      "item": "thermal:gold_dust"
    },
    {
      "chance": 0.25,
      "item": "thermal:gold_dust"
    },
    {
      "chance": 0.75,
      "item": "create:experience_nugget"
    },
    {
      "chance": 0.125,
      "item": "minecraft:cobbled_deepslate"
    }
  ]
 })
 event.custom({
  "type": "create:crushing",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:storage_blocks/raw_lead"
      }
    }
  ],
  "ingredients": [
    {
      "tag": "forge:storage_blocks/raw_lead"
    }
  ],
  "processingTime": 400,
  "results": [
    {
      "count": 9,
      "item": "thermal:lead_dust"
    },
    {
      "chance": 0.75,
      "count": 9,
      "item": "create:experience_nugget"
    }
  ]
 })
 event.custom({
  "type": "create:crushing",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:raw_materials/nickel"
      }
    }
  ],
  "ingredients": [
    {
      "tag": "forge:raw_materials/nickel"
    }
  ],
  "processingTime": 400,
  "results": [
    {
      "item": "thermal:nickel_dust"
    },
    {
      "chance": 0.75,
      "item": "create:experience_nugget"
    }
  ]
 })
 event.custom({
  "type": "create:crushing",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:storage_blocks/raw_nickel"
      }
    }
  ],
  "ingredients": [
    {
      "tag": "forge:storage_blocks/raw_nickel"
    }
  ],
  "processingTime": 400,
  "results": [
    {
      "count": 9,
      "item": "thermal:nickel_dust"
    },
    {
      "chance": 0.75,
      "count": 9,
      "item": "create:experience_nugget"
    }
  ]
 })
 event.custom({
  "type": "create:crushing",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:ores/nickel"
      }
    }
  ],
  "ingredients": [
    {
      "tag": "forge:ores/nickel"
    }
  ],
  "processingTime": 400,
  "results": [
    {
      "item": "thermal:nickel_dust"
    },
    {
      "chance": 0.75,
      "item": "thermal:nickel_dust"
    },
    {
      "chance": 0.75,
      "item": "create:experience_nugget"
    }
  ]
 })
 event.custom({
  "type": "create:crushing",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:raw_materials/lead"
      }
    }
  ],
  "ingredients": [
    {
      "tag": "forge:raw_materials/lead"
    }
  ],
  "processingTime": 400,
  "results": [
    {
      "item": "thermal:lead_dust"
    },
    {
      "chance": 0.75,
      "item": "create:experience_nugget"
    }
  ]
 })
 event.custom({
  "type": "create:crushing",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:ores/lead"
      }
    }
  ],
  "ingredients": [
    {
      "tag": "forge:ores/lead"
    }
  ],
  "processingTime": 400,
  "results": [
    {
      "item": "thermal:lead_dust"
    },
    {
      "chance": 0.75,
      "item": "thermal:lead_dust"
    },
    {
      "chance": 0.75,
      "item": "create:experience_nugget"
    }
  ]
 })
 event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "create:veridium"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "chance": 0.8,
      "item": "thermal:copper_dust"
    },
    {
      "chance": 0.8,
      "item": "create:copper_nugget"
    }
  ]
 })
 event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "tag": "create:stone_types/veridium"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "chance": 0.8,
      "item": "thermal:copper_dust"
    },
    {
      "chance": 0.8,
      "item": "create:copper_nugget"
    }
  ]
 })
 event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:raw_copper_block"
    }
  ],
  "processingTime": 400,
  "results": [
    {
      "count": 9,
      "item": "thermal:copper_dust"
    },
    {
      "chance": 0.75,
      "count": 9,
      "item": "create:experience_nugget"
    }
  ]
 })
 event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:raw_copper"
    }
  ],
  "processingTime": 400,
  "results": [
    {
      "item": "thermal:copper_dust"
    },
    {
      "chance": 0.75,
      "item": "create:experience_nugget"
    }
  ]
 })
 event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:deepslate_copper_ore"
    }
  ],
  "processingTime": 350,
  "results": [
    {
      "count": 7,
      "item": "thermal:copper_dust"
    },
    {
      "chance": 0.25,
      "item": "thermal:copper_dust"
    },
    {
      "chance": 0.75,
      "item": "create:experience_nugget"
    },
    {
      "chance": 0.125,
      "item": "minecraft:cobbled_deepslate"
    }
  ]
 })
 event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:copper_ore"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "count": 5,
      "item": "thermal:copper_dust"
    },
    {
      "chance": 0.25,
      "item": "thermal:copper_dust"
    },
    {
      "chance": 0.75,
      "item": "create:experience_nugget"
    },
    {
      "chance": 0.125,
      "item": "minecraft:cobblestone"
    }
  ]
 })
 event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "tag": "create:stone_types/ochrum"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "chance": 0.2,
      "item": "thermal:gold_dust"
    },
    {
      "chance": 0.2,
      "item": "minecraft:gold_nugget"
    }
  ]
 })
 event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "create:ochrum"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "chance": 0.2,
      "item": "thermal:gold_dust"
    },
    {
      "chance": 0.2,
      "item": "minecraft:gold_nugget"
    }
  ]
 })
 event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:raw_gold"
    }
  ],
  "processingTime": 400,
  "results": [
    {
      "item": "thermal:gold_dust"
    },
    {
      "chance": 0.75,
      "item": "create:experience_nugget"
    }
  ]
 })
 event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "create:zinc_ingot"
    }
  ],
  "processingTime": 400,
  "results": [
    {
      "item": "kubejs:zinc_dust"
    }
  ]
 })
 event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:gold_ore"
    }
  ],
  "processingTime": 250,
  "results": [
    {
      "item": "thermal:gold_dust"
    },
    {
      "chance": 0.75,
      "item": "thermal:gold_dust"
    },
    {
      "chance": 0.75,
      "item": "create:experience_nugget"
    },
    {
      "chance": 0.125,
      "item": "minecraft:cobblestone"
    }
  ]
 })
 event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:raw_gold_block"
    }
  ],
  "processingTime": 400,
  "results": [
    {
      "count": 9,
      "item": "thermal:gold_dust"
    },
    {
      "chance": 0.75,
      "count": 9,
      "item": "create:experience_nugget"
    }
  ]
 })
  event.custom({
    "type": "create:mixing",
    "heatRequirement": "superheated",
    "ingredients": [
      {
        "item": "botania:rune_fire"
      },
      {
        "item": "thermal:nickel_ingot"
      },
      {
        "item": "minecraft:iron_ingot"
      },
      {
        "item": "minecraft:iron_ingot"
      }
    ],
    "results": [
      {
        "count": 3,
        "item": "thermal:invar_ingot"
      }
    ]
  })
  event.custom({
    "type": "botania:petal_apothecary",
    "ingredients": [
      {
        "tag": "botania:petals/blue"
      },
      {
        "tag": "botania:petals/blue"
      },
      {
        "tag": "botania:petals/yellow"
      },
      {
        "tag": "botania:petals/yellow"
      },
      {
        "item": "botania:rune_mana"
      },
      {
        "item": "botania:rune_air"
      },
      {
        "item": "botania:redstone_root"
      }
    ],
    "output": {
      "item": "genericbotaniapacktweaker:spinerette"
    },
    "reagent": {
      "tag": "botania:seed_apothecary_reagent"
    }
  })
  event.custom({
    "type": "botania:petal_apothecary",
    "ingredients": [
      {
        "tag": "botania:petals/red"
      },
      {
        "tag": "botania:petals/red"
      },
      {
        "tag": "botania:petals/white"
      },
      {
        "tag": "botania:petals/white"
      },
      {
        "tag": "botania:petals/pink"
      },
      {
        "item": "botania:rune_pride"
      },
      {
        "item": "botania:rune_greed"
      },
      {
        "item": "botania:redstone_root"
      }
    ],
    "output": {
      "item": "botania:orechid_ignem"
    },
    "reagent": {
      "tag": "botania:seed_apothecary_reagent"
    }
  })
  event.custom({
    "type": "botania:petal_apothecary",
    "ingredients": [
      {
        "tag": "botania:petals/lime"
      },
      {
        "tag": "botania:petals/lime"
      },
      {
        "tag": "botania:petals/red"
      },
      {
        "tag": "botania:petals/red"
      },
      {
        "tag": "botania:petals/green"
      },
      {
        "item": "botania:rune_spring"
      }
    ],
    "output": {
      "item": "botania:munchdew"
    },
    "reagent": {
      "tag": "botania:seed_apothecary_reagent"
    }
  })
  //im aware you can get them from growing trees
  event.custom({
    "type": "botania:pure_daisy",
    "input": {
      "type": "block",
      "block": "infernalexp:glowsilk_cocoon"
    },
    "output": {
      "name": "minecraft:bee_nest"
    }
  })
  event.custom({
      "type": "thermal:chiller",
      "ingredients": [
        {
          "fluid": "thermal:sap",
          "amount": 1000
        }
      ],
      "result": [
        {
          "item": "kubejs:sap",
          "count": 4
        }
      ],
      "energy": 4000
  })
  event.custom({
      "type": "thermal:crucible",
      "ingredient": {
        "item": "kubejs:ender_sap"
      },
      "result": [
        {
          "fluid": "thermal:ender",
          "amount": 1000
        }
      ],
      "energy": 35000
    })
    event.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "keepNbtOfReagent": true,
      "output": {
        "item": "genericbotaniapacktweaker:imbued_dirt"
      },
      "pedestalItems": [
        {
          "item": {
            "item": "botania:rune_earth"
          }
        },
        {
          "item": {
            "item": "botania:rune_spring"
          }
        },
        {
          "item": {
            "item": "botania:rune_earth"
          }
        }
      ],
      "reagent": [
        {
          "item": "farmersdelight:rich_soil"
        }
      ],
      "sourceCost": 2500
    })
    event.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "keepNbtOfReagent": true,
      "output": {
        "item": "genericbotaniapacktweaker:mana_motor"
      },
      "pedestalItems": [
        {
          "item": {
            "item": "ars_nouveau:air_essence"
          }
        },
        {
          "item": {
            "item": "botania:rune_sloth"
          }
        },
        {
          "item": {
            "item": "create:andesite_alloy"
          }
        },
        {
          "item": {
            "item": "create:andesite_alloy"
          }
        }
      ],
      "reagent": [
        {
          "item": "botania:manasteel_block"
        }
      ],
      "sourceCost": 2500
    })
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "output": {
      "item": "minecraft:ender_pearl"
    },
    "pedestalItems": [
      {
        "item": {
          "item": "ars_nouveau:air_essence"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:source_berry"
        }
      },
      {
        "item": {
          "item": "kubejs:sap"
        }
      },
      {
        "item": {
          "item": "ae2:fluix_dust"
        }
      }
    ],
    "reagent": [
      {
        "item": "botania:mana_powder"
      }
    ],
    "sourceCost": 1250
  })
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "output": {
      "item": "ars_nouveau:novice_robes"
    },
    "pedestalItems": [
      {
        "item": {
          "item": "minecraft:leather_chestplate"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:magebloom_fiber"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:magebloom_fiber"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:magebloom_fiber"
        }
      }
    ],
    "reagent": [
      {
        "item": "botania:manaweave_cloth"
      }
    ],
    "sourceCost": 250
  })
  
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "output": {
      "item": "ars_nouveau:novice_leggings"
    },
    "pedestalItems": [
      {
        "item": {
          "item": "minecraft:leather_leggings"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:magebloom_fiber"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:magebloom_fiber"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:magebloom_fiber"
        }
      }
    ],
    "reagent": [
      {
        "item": "botania:manaweave_cloth"
      }
    ],
    "sourceCost": 250
  })
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "output": {
      "item": "ars_nouveau:novice_boots"
    },
    "pedestalItems": [
      {
        "item": {
          "item": "minecraft:leather_boots"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:magebloom_fiber"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:magebloom_fiber"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:magebloom_fiber"
        }
      }
    ],
    "reagent": [
      {
        "item": "botania:manaweave_cloth"
      }
    ],
    "sourceCost": 250
  })
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "output": {
      "item": "minecraft:vine"
    },
    "pedestalItems": [
      {
        "item": {
          "item": "minecraft:weeping_vines"
        }
      },
      {
        "item": {
          "item": "minecraft:weeping_vines"
        }
      },
      {
        "item": {
          "item": "minecraft:twisting_vines"
        }
      },
      {
        "item": {
          "item": "minecraft:twisting_vines"
        }
      }
    ],
    "reagent": [
      {
        "item": "botania:rune_earth"
      }
    ],
    "sourceCost": 250
  })
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "output": {
      "item": "ars_nouveau:novice_hood"
    },
    "pedestalItems": [
      {
        "item": {
          "item": "minecraft:leather_helmet"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:magebloom_fiber"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:magebloom_fiber"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:magebloom_fiber"
        }
      }
    ],
    "reagent": [
      {
        "item": "botania:manaweave_cloth"
      }
    ],
    "sourceCost": 250
  })
  event.custom({

    "type": "botania:mana_infusion",
    "input": [
      {
        "item": "minecraft:gunpowder"
      },
      {
        "item": "minecraft:redstone"
      },
      {
        "item": "minecraft:glowstone_dust"
      },
      {
        "item": "infernalexp:moth_dust"
      },
      {
        "item": "minecraft:sugar"
      }
    ],
    "mana": 500,
    "output": {
      "item": "botania:mana_powder"
    }
  })
  event.custom({
    "type": "botania:elven_trade",
    "ingredients": [
      {
        "item": "ars_nouveau:green_archwood_sapling"
      }
    ],
    "output": [
      {
        "item": "quark:ancient_sapling"
      } 
    ]
  })
  event.custom({
    "type": "botania:elven_trade",
    "ingredients": [
      {
        "item": "ars_nouveau:purple_archwood_sapling"
      }
    ],
    "output": [
      {
        "item": "quark:ancient_sapling"
      } 
    ]
  })
  event.custom({
    "type": "botania:elven_trade",
    "ingredients": [
      {
        "item": "ars_nouveau:red_archwood_sapling"
      }
    ],
    "output": [
      {
        "item": "quark:ancient_sapling"
      } 
    ]
  })
  event.custom({
    "type": "botania:elven_trade",
    "ingredients": [
      {
        "item": "ars_nouveau:blue_archwood_sapling"
      }
    ],
    "output": [
      {
        "item": "quark:ancient_sapling"
      } 
    ]
  })
  event.custom({
    "type": "ars_artifice:no_damage_enchantment",
    "keepNbtOfReagent": false,
    "output": {
      "item": "ars_artifice:spell_gem_t2"
    },
    "pedestalItems": [
      {
        "item": {
          "item": "botania:dragonstone"
        }
      },
      {
        "item": {
          "tag": "forge:storage_blocks/source"
        }
      },
      {
        "item": {
          "item": "botania:dragonstone"
        }
      }
    ],
    "reagent": [
      {
        "item": "ars_artifice:spell_gem_t1"
      }
    ],
    "sourceCost": 2500
  })
  event.custom({
    "type": "ars_artifice:no_damage_enchantment",
    "keepNbtOfReagent": false,
    "output": {
      "item": "ars_artifice:spell_gem_t3"
    },
    "pedestalItems": [
      {
        "item": {
          "tag": "forge:storage_blocks/source"
        }
      },
      {
        "item": {
          "item": "botania:dragonstone_block"
        }
      },
      {
        "item": {
          "tag": "forge:storage_blocks/source"
        }
      }
    ],
    "reagent": [
      {
        "item": "ars_artifice:spell_gem_t2"
      }
    ],
    "sourceCost": 5000
  })
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item": "botania:mana_string"
    },
    "output": "infernalexp:glowsilk",
    "pedestalItems": [
      {
        "item": {
          "item": "infernalexp:moth_dust"
        }
      },
      {
        "item": {
          "item": "infernalexp:moth_dust"
        }
      }
    ],
    "source": 500
  })

  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item": "minecraft:sweet_berries"
    },
    "output": "ars_nouveau:source_berry",
    "pedestalItems": [
      {
        "item": {
          "item": "ars_nouveau:source_gem"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:source_gem"
        }
      }
    ],
    "source": 100
  })

  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item": "botania:mana_powder"
    },
    "output": "infernalexp:moth_dust",
    "pedestalItems": [
      {
        "item": {
          "item": "minecraft:glowstone_dust"
        }
      },
      {
        "item": {
          "item": "minecraft:glowstone_dust"
        }
      },
      {
        "item": {
          "item": "minecraft:glowstone_dust"
        }
      },
      {
        "item": {
          "item": "minecraft:glowstone_dust"
        }
      }
    ],
    "source": 500
  })
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 2,
    "input": {
      "item": "minecraft:stone"
    },
    "output": "minecraft:deepslate",
    "pedestalItems": [
      {
        "item": {
          "item": "ars_nouveau:earth_essence"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:earth_essence"
        }
      }
    ],
    "source": 400
  })

 
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": false,
    "output": {
      "item": "moreminecarts:glass_cactus"
    },
    "pedestalItems": [
      {
        "item": {
          "item": "kubejs:brass_crystal"
        }
      },
      {
        "item": {
          "item": "kubejs:brass_crystal"
        }
      },
      {
        "item": {
          "item": "kubejs:brass_crystal"
        }
      },
      {
        "item": {
          "item": "kubejs:brass_crystal"
        }
      }
    ],
    "reagent": [
      {
        "item": "minecraft:cactus"
      }
    ],
    "sourceCost": 100
  })
  event.custom({
    "type": "botania:petal_apothecary",
    "ingredients": [
      {
        "tag": "botania:petals/pink"
      },
      {
        "tag": "botania:petals/pink"
      },
      {
        "tag": "botania:petals/purple"
      },
      {
        "tag": "botania:petals/purple"
      },
      {
        "tag": "botania:petals/lime"
      }
    ],
    "output": {
      "item": "botania:rosa_arcana"
    },
    "reagent": {
      "tag": "botania:seed_apothecary_reagent"
    }
  })
  event.custom({
    "type": "botania:petal_apothecary",
    "ingredients": [
      {
        "tag": "botania:petals/black"
      },
      {
        "tag": "botania:petals/black"
      },
      {
        "tag": "botania:petals/gray"
      },
      {
        "item": "botania:rune_fire"
      },
      {
        "item": "botania:rune_wrath"
      }
    ],
    "output": { 
      "item": "genericbotaniapacktweaker:dieselotus"
    },
    "reagent": {
      "tag": "botania:seed_apothecary_reagent"
    }
  })
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item": "botania:manasteel_ingot"
    },
    "output": "create:brass_ingot",
    "pedestalItems": [
      {
        "item": {
          "item": "kubejs:brass_crystal"
        }
      },
      {
        "item": {
          "item": "kubejs:brass_crystal"
        }
      },
      {
        "item": {
          "item": "kubejs:brass_crystal"
        }
      },
      {
        "item": {
          "item": "kubejs:brass_crystal"
        }
      }
    ],
    "source": 500
  })
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item": "twigs:bloodstone"
    },
    "output": "kubejs:bloodstone_block",
    "pedestalItems": [
      {
        "item": {
          "item": "minecraft:stone"
        }
      },
      {
        "item": {
          "item": "botania:rune_earth"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:manipulation_essence"
        }
      }
    ],
    "source": 2500
  })
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      {
        "item": "minecraft:quartz_block"
      }
    ],
    "processingTime": 150,
    "results": [
      {
        "count": 3,
        "item": "kubejs:nether_quartz_dust"
      },
      {
        "chance": 0.25,
        "count": 1,
        "item": "kubejs:nether_quartz_dust"
      }
    ]
  })
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": false,
    "output": {
      "item": "ars_nouveau:potion_flask"
    },
    "pedestalItems": [
      {
        "item": {
          "item": "ars_nouveau:abjuration_essence"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:abjuration_essence"
        }
      },
      {
        "item": {
          "tag": "forge:storage_blocks/source"
        }
      },
      {
        "item": {
          "tag": "forge:storage_blocks/gold"
        }
      }
    ],
    "reagent": [
      {
        "item": "botania:flask"
      }
    ],
    "sourceCost": 0
  })
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": false,
    "output": {
      "count": 1,
      "item": "create:creative_blaze_cake"
    },
    "pedestalItems": [
      {
        "item": {
          "item": "create:blaze_cake"
        }
      },
      {
        "item": {
          "item": "create:blaze_cake"
        }
      },
      {
        "item": {
          "item": "create:blaze_cake"
        }
      },
      {
        "item": {
          "item": "create:blaze_cake"
        }
      }
    ],
    "reagent": [
      {
        "item": "botanicadds:gaiasteel_ingot"
      }
    ],
    "sourceCost": 0
  })
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": false,
    "output": {
      "count": 4,
      "item": "kubejs:bloodstone_block"
    },
    "pedestalItems": [
      {
        "item": {
          "item": "twigs:bloodstone"
        }
      },
      {
        "item": {
          "item": "twigs:bloodstone"
        }
      },
      {
        "item": {
          "item": "twigs:bloodstone"
        }
      },
      {
        "item": {
          "item": "twigs:bloodstone"
        }
      }
    ],
    "reagent": [
      {
        "item": "botania:rune_earth"
      }
    ],
    "sourceCost": 0
  })
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": false,
    "output": {
      "count": 4,
      "item": "thermal:oil_sand"
    },
    "pedestalItems": [
      {
        "item": {
          "item": "ars_nouveau:fire_essence"
        }
      },
      {
        "item": {
          "item": "minecraft:coal"
        }
      },
      {
        "item": {
          "item": "minecraft:sand"
        }
      },
      {
        "item": {
          "item": "minecraft:sand"
        }
      },
      {
        "item": {
          "item": "minecraft:sand"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:water_essence"
        }
      }
      
    ],
    "reagent": [
      {
        "item": "minecraft:sand"
      }
    ],
    "sourceCost": 0
  })
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": false,
    "output": {
      "count": 2,
      "item": "minecraft:amethyst_shard"
    },
    "pedestalItems": [
      {
        "item": {
          "item": "kubejs:crystallised_blood"
        }
      },
      {
        "item": {
          "item": "minecraft:lapis_lazuli"
        }
      }
    ],
    "reagent": [
      {
        "tag": "forge:glass"
      }
    ],
    "sourceCost": 100
  })
event.custom({
  "type": "create:mechanical_crafting",
  "acceptMirrored": false,
  "key": {
    "A": {
      "item": "create:andesite_alloy"
    },
    "P": {
      "tag": "minecraft:planks"
    },
    "S": {
      "item": "ars_nouveau:glyph_crush"
    }
  },
  "pattern": [
    " AAA ",
    "AAPAA",
    "APSPA",
    "AAPAA",
    " AAA "
  ],
  "result": {
    "count": 2,
    "item": "create:crushing_wheel"
  }
})
  event.custom({
  
    "type": "botania:terra_plate",
    "ingredients": [
      {
        "item": "botania:manasteel_ingot"
      },
      {
        "item": "ars_nouveau:earth_essence"
      },
      {
        "item": "minecraft:netherite_ingot"
      }
    ],
    "mana": 500000,
    "result": {
      "item": "botania:terrasteel_ingot"
    }
  })
  event.custom({
    "type": "ars_nouveau:crush",
    "input": {
      "item": "minecraft:quartz_block"
    },
    "output": [
      {
        "chance": 1.0,
        "count": 3,
        "item": "kubejs:nether_quartz_dust"
      },
      {
        "chance": 0.5,
        "count": 2,
        "item": "kubejs:nether_quartz_dust"
      }
    ]
  })
  event.custom({
    "type": "ars_nouveau:crush",
    "input": {
      "item": "minecraft:bone_block"
    },
    "output": [
      {
        "chance": 1.0,
        "count": 9,
        "item": "minecraft:bone_meal"
      }
    ]
  })
  event.custom({
    "type": "ars_nouveau:crush",
    "input": {
      "item": "minecraft:netherrack"
    },
    "output": [
      {
        "chance": 1.0,
        "count": 1,
        "item": "create:cinder_flour"
      }
    ]
  })
  event.custom({
    "type": "ars_nouveau:crush",
    "input": {
      "item": "minecraft:ender_pearl"
    },
    "output": [
      {
        "chance": 1.0,
        "count": 1,
        "item": "ae2:ender_dust"
      }
    ]
  })
  event.custom({
    "type": "ars_nouveau:crush",
    "input": {
      "tag": "kubejs:fractured"
    },
    "output": [
      {
        "chance": 1.0,
        "count": 1,
        "item": "create:powdered_obsidian"
      }
    ]
  })

  event.custom({
    "type": "ars_nouveau:crush",
    "input": {
      "item": "ae2:fluix_block"
    },
    "output": [
      {
        "chance": 1.0,
        "count": 3,
        "item": "ae2:fluix_dust"
      },
      {
        "chance": 0.5,
        "count": 2,
        "item": "ae2:fluix_dust"
      }
    ]
  })

  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": false,
    "output": {
      "item": "ars_nouveau:amulet_of_mana_boost"
    },
    "pedestalItems": [
      {
        "item": {
          "item": "botania:mana_diamond"
        }
      },
      {
        "item": {
          "item": "botania:mana_diamond"
        }
      },
      {
        "item": {
          "item": "botania:mana_diamond"
        }
      },
      {
        "item": {
          "item": "botania:rune_greed"
        }
      },
      {
        "item": {
          "tag": "forge:gems/source"
        }
      },
      {
        "item": {
          "tag": "forge:gems/source"
        }
      },
      {
        "item": {
          "tag": "forge:gems/source"
        }
      }
    ],
    "reagent": [
      {
        "item": "ars_nouveau:dull_trinket"
      }
    ],
    "sourceCost": 0
  })
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      {
        "tag": "botania:rune_seasons"
      },
      {
        "item": "minecraft:egg"
      },
      {
        "item": "minecraft:egg"
      },
      {
        "amount": 100,
        "fluid": "minecraft:water",
        "nbt": {}
      }
    ],
    "results": [
      {
        "amount": 1000,
        "fluid": "kubejs:soul_fluid"
      }
    ]
  })
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      {
        "tag": "botania:rune_seasons"
      },
      {
        "item": "kubejs:crystallised_blood"
      },
      {
        "amount": 100,
        "fluid": "minecraft:water",
        "nbt": {}
      }
    ],
    "results": [
      {
        "amount": 1500,
        "fluid": "kubejs:soul_fluid"
      }
    ]
  })
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      {
        "item": "ae2:silicon"
      },
      {
        "item": "ae2:silicon"
      },
      {
        "item": "minecraft:iron_ingot"
      },
      {
        "amount": 250,
        "fluid": "kubejs:soul_fluid",
        "nbt": {}
      }
    ],
    "results": [
      {
        "item": 'moreminecarts:silica_steel_mix',
        "count": 4
      }
    ]
  })
  event.custom({
      "type": "create:haunting",
      "ingredients": [
        {
          "item": "botania:mana_pearl"
        }
      ],
      "results": [
        {
          "item": "kubejs:soul_pearl",
          "count": 3
        }
      ]
    
  })
  event.custom({
    "type": "create:haunting",
    "ingredients": [
      {
        "item": "quark:soul_bead"
      }
    ],
    "results": [
      {
        "item": "minecraft:phantom_membrane",
        "count": 1
      }
    ]
  
})
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "kubejs:manaelectrum_ingot"
    },
    "loops": 1,
    "results": [
      {
        "chance": 120.0,
        "item": "thermal:electrum_ingot"
      }
    ],
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "kubejs:manaelectrum_ingot"
          },
          {
            "amount": 500,
            "fluid": "minecraft:water",
            "nbt": {}
          }
        ],
        "results": [
          {
            "item": "kubejs:manaelectrum_ingot"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:manaelectrum_ingot"
          },
          {
            "item": "create:zinc_ingot"
          }
        ],
        "results": [
          {
            "item": "kubejs:manaelectrum_ingot"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:manaelectrum_ingot"
          },
          {
            "item": "minecraft:redstone"
          }
        ],
        "results": [
          {
            "item": "kubejs:manaelectrum_ingot"
          }
        ]
      }
    ],
    "transitionalItem": {
      "item": "kubejs:manaelectrum_ingot"
    }
  })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "kubejs:soul_pearl"
    },
    "loops": 1,
    "results": [
      {
        "chance": 120.0,
        "item": "quark:soul_bead"
      }
    ],
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "kubejs:soul_pearl"
          },
          {
            "amount": 250,
            "fluid": "kubejs:soul_fluid",
            "nbt": {}
          }
        ],
        "results": [
          {
            "item": "kubejs:soul_pearl"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:soul_pearl"
          },
          {
            "item": "botania:fel_pumpkin"
          }
        ],
        "results": [
          {
            "item": "kubejs:soul_pearl"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:soul_pearl"
          },
          {
            "item": "minecraft:rotten_flesh"
          }
        ],
        "results": [
          {
            "item": "kubejs:soul_pearl"
          }
        ]
      }
    ],
    "transitionalItem": {
      "item": "kubejs:soul_pearl"
    }
  })
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "botania:mana_powder"
    },
    "loops": 1,
    "results": [
      {
        "chance": 120.0,
        "item": "thermal:rubber"
      }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "botania:mana_powder"
          },
          {
            "item": "botania:mana_powder"
          }
        ],
        "results": [
          {
            "item": "botania:mana_powder"
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "botania:mana_powder"
          },
          {
            "amount": 250,
            "fluid": "thermal:latex",
            "nbt": {}
          }
        ],
        "results": [
          {
            "item": "botania:mana_powder"
          }
        ]
      },

      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "botania:mana_powder"
          }
        ],
        "results": [
          {
            "item": "botania:mana_powder"
          }
        ]
      }
    ],
    "transitionalItem": {
      "item": "botania:mana_powder"
    }
  })
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
  "keepNbtOfReagent": false,
  "output": {
    "item": "ars_nouveau:belt_of_levitation"
  },
  "pedestalItems": [
    {
      "item": {
        "item": "kubejs:manaelectrum_ingot"
      }
    },
    {
      "item": {
        "item": "kubejs:manaelectrum_ingot"
      }
    },
    {
      "item": {
        "item": "kubejs:manaelectrum_ingot"
      }
    },
    {
      "item": {
        "item": "kubejs:manaelectrum_ingot"
      }
    },
    {
      "item": {
        "item": "minecraft:feather"
      }
    },
    {
      "item": {
        "item": "minecraft:feather"
      }
    },
    {
      "item": {
        "item": "ars_nouveau:air_essence"
      }
    }
  ],
  "reagent": [
    {
      "item": "botania:cloud_pendant"
    }
  ],
  "sourceCost": 0
  })
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
  "keepNbtOfReagent": false,
  "output": {
    "item": "ars_nouveau:amulet_of_mana_regen"
  },
  "pedestalItems": [
    {
      "item": {
        "item": "botania:mana_diamond"
      }
    },
    {
      "item": {
        "item": "botania:mana_diamond"
      }
    },
    {
      "item": {
        "item": "kubejs:manaelectrum_ingot"
      }
    },
    {
      "item": {
        "item": "kubejs:manaelectrum_ingot"
      }
    },
    {
      "item": {
        "item": "botania:rune_sloth"
      }
    },
    {
      "item": {
        "tag": "forge:gems/source"
      }
    },
    {
      "item": {
        "tag": "forge:gems/source"
      }
    },
    {
      "item": {
        "tag": "forge:gems/source"
      }
    }
  ],
  "reagent": [
    {
      "item": "ars_nouveau:dull_trinket"
    }
  ],
  "sourceCost": 0
  })
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": false,
    "output": {
      "item": "supplementaries:flax_seeds"
    },
    "pedestalItems": [
      {
        "item": {
          "item": "botania:spell_cloth"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:manipulation_essence"
        }
      },
      {
        "item": {
          "item": "botania:grass_seeds"
        }
      }
    ],
    "reagent": [
      {
        "tag": "forge:seeds"
      }
    ],
    "sourceCost": 2500
  })
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": false,
    "output": {
      "item": "ars_nouveau:blaze_fiber",
      "count": 2
    },
    "pedestalItems": [
      {
        "item": {
          "item": "botania:rune_earth"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:magebloom_fiber"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:magebloom_fiber"
        }
      }
    ],
    "reagent": [
      {
        "item": "botania:terrasteel_nugget"
      }
    ],
    "sourceCost": 500
  })
  event.custom({
    "type": "create:mixing",
    "heatRequirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:stone"
      },
      {
        "item": "minecraft:stone"
      },
      {
        "item": "minecraft:stone"
      },
      {
        "item": "minecraft:stone"
      },
      {
        "item": "minecraft:stone"
      },
      {
        "item": "minecraft:stone"
      },
      {
        "item": "minecraft:stone"
      },
      {
        "item": "minecraft:stone"
      },
      {
        "amount": 250,
        "fluidTag": "forge:milk"
      }
    ],
    "results": [
      {
        "count": 8,
        "item": "minecraft:calcite"
      }
    ]
  })
  event.custom({
    "type": "create:mixing",
    "heatRequirement": "heated",
    "ingredients": [
      {
        "item": "thermal:rubber"
      },
      {
        "item": "thermal:rubber"
      },
      {
        "item": "thermal:rubber"
      },
      {
        "item": "thermal:rubber"
      },
      {
        "item": "thermal:rubber"
      },
      {
        "item": "thermal:rubber"
      },
      {
        "item": "thermal:rubber"
      },
      {
        "item": "thermal:rubber"
      },
      {
        "item": "botania:rune_fire"
      }
    ],
    "results": [
      {
        "count": 8,
        "item": "thermal:cured_rubber"
      }
    ]
  })
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
"keepNbtOfReagent": true,
"output": {
  "item": "kubejs:zinc_gear"
},  
"pedestalItems": [
  {
    "item": {
      "item": "create:zinc_ingot"
    }
  },
  {
    "item": {
      "item": "create:zinc_ingot"
    }
  },
  {
    "item": {
      "item": "create:zinc_ingot"
    }
  },
  {
    "item": {
      "item": "create:zinc_ingot"
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
event.custom({
  "type": "ars_nouveau:enchanting_apparatus",
"keepNbtOfReagent": true,
"output": {
"item": "easy_mob_farm:nether_fortress_farm"
},  
"pedestalItems": [
{
  "item": {
    "item": "botania:rune_fire"
  }
},
{
  "item": {
    "item": "thermal:sulfur_block"
  }
},
{
  "item": {
    "item": "quark:blaze_lantern"
  }
},
{
  "item": {
    "item": "minecraft:netherite_scrap"
  }
}
],
"reagent": [
{
  "item": "easy_mob_farm:steel_mob_farm_template"
}
],
"sourceCost": 1000
})
event.custom({
  "type": "ars_nouveau:enchanting_apparatus",
"keepNbtOfReagent": true,
"output": {
"item": "easy_mob_farm:creative_mob_farm"
},  
"pedestalItems": [
{
  "item": {
    "item": "botania:gaia_ingot"
  }
},
{
  "item": {
    "item": "botania:life_essence"
  }
},
{
  "item": {
    "item": "botania:gaia_ingot"
  }
},
{
  "item": {
    "item": "minecraft:nether_star"
  }
}
],
"reagent": [
{
  "item": "easy_mob_farm:swamp_farm"
}
],
"sourceCost": 10000
})
event.custom({
  "type": "ars_nouveau:enchanting_apparatus",
"keepNbtOfReagent": true,
"output": {
"item": "easy_mob_farm:desert_farm"
},  
"pedestalItems": [
{
  "item": {
    "item": "botania:rune_summer"
  }
},
{
  "item": {
    "item": "minecraft:dead_bush"
  }
},
{
  "item": {
    "item": "infernalexp:glowdust_sand"
  }
},
{
  "item": {
    "item": "minecraft:cactus"
  }
}
],
"reagent": [
{
  "item": "easy_mob_farm:steel_mob_farm_template"
}
],
"sourceCost": 1000
})
event.custom({
  "type": "ars_nouveau:enchanting_apparatus",
"keepNbtOfReagent": true,
"output": {
"count": 1,
"item": "minecraft:blaze_rod"
},  
"pedestalItems": [
{
  "item": {
    "item": "ars_nouveau:fire_essence"
  }
},
{
  "item": {
    "item": "ars_nouveau:fire_essence"
  }
},
{
  "item": {
    "item": "ars_nouveau:fire_essence"
  }
},
{
  "item": {
    "item": "ars_nouveau:fire_essence"
  }
}
],
"reagent": [
{
  "item": "botania:livingwood_twig"
}
],
"sourceCost": 2500
})
event.custom({
  "type": "ars_nouveau:enchanting_apparatus",
"keepNbtOfReagent": true,
"output": {
"count": 4,
"item": "snad:snad"
},  
"pedestalItems": [
{
  "item": {
    "item": "minecraft:sand"
  }
},
{
  "item": {
    "item": "minecraft:sand"
  }
},
{
  "item": {
    "item": "minecraft:sand"
  }
},
{
  "item": {
    "item": "minecraft:sand"
  }
}
],
"reagent": [
{
  "item": "ars_nouveau:earth_essence"
}
],
"sourceCost": 2500
})
event.custom({
  "type": "ars_nouveau:enchanting_apparatus",
"keepNbtOfReagent": true,
"output": {
"count": 4,
"item": "snad:red_snad"
},  
"pedestalItems": [
{
  "item": {
    "item": "minecraft:red_sand"
  }
},
{
  "item": {
    "item": "minecraft:red_sand"
  }
},
{
  "item": {
    "item": "minecraft:red_sand"
  }
},
{
  "item": {
    "item": "minecraft:red_sand"
  }
}
],
"reagent": [
{
  "item": "ars_nouveau:earth_essence"
}
],
"sourceCost": 2500
})
event.custom({
  "type": "ars_nouveau:enchanting_apparatus",
"keepNbtOfReagent": true,
"output": {
"item": "kubejs:brass_gear"
},  
"pedestalItems": [
{
  "item": {
    "item": "create:brass_ingot"
  }
},
{
  "item": {
    "item": "create:brass_ingot"
  }
},
{
  "item": {
    "item": "create:brass_ingot"
  }
},
{
  "item": {
    "item": "create:brass_ingot"
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
event.custom({
  "type": "thermal:tree_extractor",
  "trunk": "quark:ancient_log",
  "leaves": "quark:ancient_leaves",
  "result": {
    "fluid": "thermal:latex",
    "amount": 75
  }
})
event.custom({
  "type": "ars_nouveau:enchanting_apparatus",
"keepNbtOfReagent": true,
"output": {
"item": "kubejs:manasteel_gear"
},  
"pedestalItems": [
{
  "item": {
    "item": "botania:manasteel_ingot"
  }
},
{
  "item": {
    "item": "botania:manasteel_ingot"
  }
},
{
  "item": {
    "item": "botania:manasteel_ingot"
  }
},
{
  "item": {
    "item": "botania:manasteel_ingot"
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
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": false,
    "output": {
      "item": "minecraft:bamboo",
      "count": 1
    },
    "pedestalItems": [
      {
        "item": {
          "item": "botania:rune_earth"
        }
      },
      {
        "item": {
          "item": "botania:rune_air"
        }
      }
    ],
    "reagent": [
      {
        "item": "minecraft:stick"
      }
    ],
    "sourceCost": 500
  })
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": false,
    "output": {
      "item": "botania:spark",
      "count": 2
    },
    "pedestalItems": [
      {
        "item": {
          "item": "minecraft:blaze_powder"
        }
      },
      {
        "item": {
          "item": "minecraft:blaze_powder"
        }
      }
    ],
    "reagent": [
      {
        "item": "minecraft:fire_charge"
      }
    ],
    "sourceCost": 250
  })
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": false,
    "output": {
      "item": "ars_nouveau:end_fiber",
      "count": 2
    },
    "pedestalItems": [
      {
        "item": {
          "item": "botania:terrasteel_ingot"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:blaze_fiber"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:blaze_fiber"
        }
      }
    ],
    "reagent": [
      {
        "item": "botania:life_essence"
      }
    ],
    "sourceCost": 500
  })
  event.custom({

    "type": "botania:mana_infusion",
    "catalyst": {
      "type": "block",
      "block": "botania:alchemy_catalyst"
    },
    "input": {
      "item": "minecraft:end_stone"
    },
    "mana": 6000,
    "output": {
      "item": "minecraft:sculk_catalyst"
    }
    })
  event.custom({

  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  },
  "group": "botania:crop_cycle",
  "input": {
    "item": "minecraft:cocoa_beans"
  },
  "mana": 6000,
  "output": {
    "item": "farmersdelight:cabbage_seeds"
  }
  })
  event.custom({

    "type": "botania:mana_infusion",
    "catalyst": {
      "type": "block",
      "block": "botania:alchemy_catalyst"
    },
    "group": "botania:crop_cycle",
    "input": {
      "item": "farmersdelight:cabbage_seeds"
    },
    "mana": 6000,
    "output": {
      "item": "farmersdelight:tomato_seeds"
    }
    })
    event.custom({

      "type": "botania:mana_infusion",
      "catalyst": {
        "type": "block",
        "block": "botania:alchemy_catalyst"
      },
      "group": "botania:crop_cycle",
      "input": {
        "item": "farmersdelight:tomato_seeds"
      },
      "mana": 6000,
      "output": {
        "item": "minecraft:wheat_seeds"
      }
      })
	event.custom({
		  "type": "ars_nouveau:enchanting_apparatus",
  "keepNbtOfReagent": true,
  "output": {
    "item": "ars_nouveau:apprentice_robes"
  },  
  "pedestalItems": [  	
    {
      "item": {
        "item": "ars_nouveau:magebloom_fiber"
      }
    },
    {
      "item": {
        "item": "ars_nouveau:magebloom_fiber"
      }
    },
    {
      "item": {
        "item": "ars_nouveau:magebloom_fiber" 
      }
    },
    {
      "item": {
        "item": "ars_nouveau:magebloom_fiber"
      }
    }
  ],
  "reagent": [
    {
      "item": "botania:manaweave_chestplate"
    }
  ],
  "sourceCost": 500
	})
		event.custom({
		  "type": "ars_nouveau:enchanting_apparatus",
  "keepNbtOfReagent": true,
  "output": {
    "item": "ars_nouveau:apprentice_boots"
  },
  "pedestalItems": [
    {
      "item": {
        "item": "ars_nouveau:magebloom_fiber"
      }
    },
    {
      "item": {
        "item": "ars_nouveau:magebloom_fiber"
      }
    },
    {
      "item": {
        "item": "ars_nouveau:magebloom_fiber"
      }
    },
    {
      "item": {
        "item": "ars_nouveau:magebloom_fiber"
      }
    }
  ],
  "reagent": [
    {
      "item": "botania:manaweave_boots"
    }
  ],
  "sourceCost": 500
	})
	event.custom({
		  "type": "ars_nouveau:enchanting_apparatus",
  "keepNbtOfReagent": true,
  "output": {
    "item": "ars_nouveau:apprentice_leggings"
  },
  "pedestalItems": [
    {
      "item": {
        "item": "ars_nouveau:magebloom_fiber"
      }
    },
    {
      "item": {
        "item": "ars_nouveau:magebloom_fiber"
      }
    },
    {
      "item": {
        "item": "ars_nouveau:magebloom_fiber"
      }
    },
    {
      "item": {
        "item": "ars_nouveau:magebloom_fiber"
      }
    }
  ],
  "reagent": [
    {
      "item": "botania:manaweave_leggings"
    }
  ],
  "sourceCost": 500
	})
  event.custom({
      "type": "botania:mana_infusion",
      "catalyst": {
        "type": "block",
        "block": "kubejs:runic_catalyst"
      },
      "input": {
        "item": "botania:life_essence"
      },
      "output": {
        "item": "botania:life_essence",
        "count": 2
      },
      "mana": 250000
  })
	event.custom({
		  "type": "ars_nouveau:enchanting_apparatus",
  "keepNbtOfReagent": true,
  "output": {
    "item": "ars_nouveau:apprentice_hood"
  },
  "pedestalItems": [
    {
      "item": {
        "item": "ars_nouveau:magebloom_fiber"
      }
    },
    {
      "item": {
        "item": "ars_nouveau:magebloom_fiber"
      }
    },
    {
      "item": {
        "item": "ars_nouveau:magebloom_fiber"
      }
    },
    {
      "item": {
        "item": "ars_nouveau:magebloom_fiber"
      }
    }
  ],
  "reagent": [
    {
      "item": "botania:manaweave_helmet"
    }
  ],
  "sourceCost": 500
	})
	
})