ServerEvents.recipes(event => {
    event.remove({id: 'ars_nouveau:glyph_aoe'})
    event.remove({id: 'ars_nouveau:glyph_grow'})
    event.remove({id: 'ars_nouveau:glyph_extract'})
    event.remove({id: 'ars_nouveau:glyph_smelt'})
    event.remove({id: 'ars_nouveau:glyph_fortune'})
    event.remove({id: 'ars_nouveau:glyph_sense_magic'})
    event.replaceInput({id: 'ars_nouveau:glyph_redstone_signal'}, 'ars_nouveau:manipulation_essence', 'botania:rune_air')
    event.replaceInput({id: 'ars_nouveau:glyph_lightning'}, 'minecraft:heart_of_the_sea', 'botania:rune_pride')
    event.replaceInput({id: 'ars_nouveau:glyph_invisibility'}, 'ars_nouveau:manipulation_essence', 'botania:rune_air')
    event.replaceInput({id: 'ars_nouveau:glyph_toss'}, 'ars_nouveau:manipulation_essence', 'botania:rune_air')
    event.replaceInput({id: 'ars_nouveau:glyph_name'}, 'ars_nouveau:manipulation_essence', 'thermal:rosin')
    event.replaceInput({id: 'ars_nouveau:glyph_evaporate'}, 'ars_nouveau:manipulation_essence', 'botania:rune_water')
    event.replaceInput({id: 'ars_nouveau:glyph_bounce'}, 'ars_nouveau:abjuration_essence', 'botania:rune_earth')
    event.replaceInput({id: 'ars_nouveau:glyph_rotate'}, 'ars_nouveau:manipulation_essence', 'botania:redstone_root')
    event.replaceInput({id: 'ars_nouveau:glyph_ender_inventory'}, 'ars_nouveau:manipulation_essence', 'botania:ender_air_bottle')
    event.replaceInput({id: 'ars_nouveau:glyph_heal'}, 'ars_nouveau:abjuration_essence', 'kubejs:pure_water_essence')
    event.replaceInput({id: 'ars_nouveau:glyph_dispel'}, 'ars_nouveau:abjuration_essence', 'botania:fel_pumpkin')
    event.replaceInput({id: 'ars_nouveau:glyph_invisibility'}, 'ars_nouveau:abjuration_essence', 'kubejs:soul_fluid_bucket')
    event.replaceInput({id: 'ars_nouveau:glyph_toss'}, 'ars_nouveau:conjuration_essence', 'botania:rune_water')
    event.replaceInput({id: 'ars_nouveau:glyph_animate_block'}, 'ars_nouveau:conjuration_essence', 'quark:soul_bead')
    event.replaceInput({id: 'ars_nouveau:glyph_delay'}, 'ars_nouveau:manipulation_essence', 'minecraft:redstone')
    event.replaceInput({id: 'ars_nouveau:glyph_infuse'}, 'ars_nouveau:abjuration_essence', 'kubejs:blooded_source')
    event.replaceInput({id: 'ars_nouveau:glyph_infuse'}, 'minecraft:blaze_rod', 'kubejs:pure_water_essence')
    event.replaceInput({id: 'ars_nouveau:glyph_interact'}, 'ars_nouveau:manipulation_essence', 'botania:livingwood_twig')
    event.replaceInput({id: 'ars_nouveau:glyph_place_block'}, 'ars_nouveau:manipulation_essence', 'minecraft:dispenser')
    event.replaceInput({id: 'toomanyglyphs:glyph_reverse_direction'}, 'ars_nouveau:manipulation_essence', 'botania:rune_air')
    event.replaceInput({id: 'toomanyglyphs:glyph_chaining'}, 'ars_nouveau:manipulation_essence', 'kubejs:pure_air_essence')
    event.replaceInput({id: 'toomanyglyphs:glyph_chaining'}, 'minecraft:redstone_block', 'kubejs:source_timber')
    event.replaceInput({id: 'toomanyglyphs:glyph_chaining'}, 'minecraft:lapis_block', 'kubejs:source_timber')
    event.replaceInput({id: 'ars_nouveau:glyph_exchange'}, 'ars_nouveau:manipulation_essence', 'kubejs:pure_earth_essence')
    event.replaceInput({id: 'ars_nouveau:glyph_exchange'}, 'minecraft:ender_pearl', 'botania:pixie_dust')
    event.replaceInput({id: 'ars_nouveau:glyph_linger'}, 'minecraft:blaze_rod', 'kubejs:pure_air_essence')
    event.replaceInput({id: 'ars_nouveau:glyph_linger'}, 'minecraft:diamond_block', 'botania:dragonstone')
    event.replaceInput({id: 'ars_nouveau:glyph_linger'}, 'minecraft:dragon_breath', 'botania:hourglass')
    event.replaceInput({id: 'ars_nouveau:glyph_wall'}, 'minecraft:dragon_breath', 'kubejs:pure_air_essence')
    event.replaceInput({id: 'ars_nouveau:glyph_wall'}, 'minecraft:diamond_block', 'kubejs:pure_earth_essence')
    event.replaceInput({id: 'ars_nouveau:glyph_wall'}, 'minecraft:blaze_rod', 'twigs:bloodstone')
    event.replaceInput({id: 'ars_nouveau:glyph_pierce'}, 'minecraft:arrow', 'botania:rune_summer')
    event.replaceInput({id: 'ars_nouveau:glyph_rune'}, 'minecraft:tripwire_hook', 'botania:rune_earth')
    event.replaceInput({id: 'ars_nouveau:glyph_intangible'}, 'minecraft:ender_pearl', 'kubejs:pure_air_essence')
    event.replaceInput({id: 'ars_nouveau:glyph_life_link'}, 'minecraft:sculk_sensor', 'kubejs:blooded_source')
    event.replaceInput({id: 'ars_nouveau:glyph_explosion'}, 'ars_nouveau:fire_essence', 'kubejs:pure_fire_essence')
    event.replaceInput({id: 'ars_nouveau:glyph_explosion'}, 'minecraft:fire_charge', 'kubejs:unstable_powder')
    event.custom({    
      "type": "ars_nouveau:glyph",
      "count": 1,
      "exp": 55,
      "inputItems": [
        {
          "item": {
            "item": "kubejs:pure_fire_essence"
          }
        },
        {
          "item": {
            "item": "kubejs:scorching_sulfur"
          }
        },
        {
          "item": {
            "item": "kubejs:scorching_sulfur"
          }
        }
      ],
      "output": "ars_nouveau:glyph_smelt"     
  }).id('ars_nouveau:glyph_smelt')
  event.custom({    
    "type": "ars_nouveau:glyph",
    "count": 1,
    "exp": 55,
    "inputItems": [
      {
        "item": {
          "item": "botania:rune_air"
        }
      },
      {
        "item": {
          "item": "botania:rune_mana"
        }
      },
      {
        "item": {
          "item": "botania:livingwood_twig"
        }
      }
    ],
    "output": "ars_nouveau:glyph_sense_magic"     
}).id('ars_nouveau:glyph_sense_magic')
  event.custom({    
    "type": "ars_nouveau:glyph",
    "count": 1,
    "exp": 55,
    "inputItems": [
      {
        "item": {
          "item": "kubejs:manaelectrum_ingot"
        }
      },
      {
        "item": {
          "item": "botania:terrasteel_nugget"
        }
      },
      {
        "item": {
          "item": "kubejs:pure_earth_essence"
        }
      }
    ],
    "output": "ars_nouveau:glyph_fortune"     
}).id('ars_nouveau:glyph_fortune')
    event.custom({    
      "type": "ars_nouveau:glyph",
      "count": 1,
      "exp": 55,
      "inputItems": [
        {
          "item": {
            "item": "ars_nouveau:air_essence"
          }
        },
        {
          "item": {
            "item": "thermal:rosin"
          }
        },
        {
          "item": {
            "item": "botania:rune_earth"
          }
        }
      ],
      "output": "ars_nouveau:glyph_extract"     
  }).id('ars_nouveau:glyph_extract')
    event.custom({    
        "type": "ars_nouveau:glyph",
        "count": 1,
        "exp": 55,
        "inputItems": [
          {
            "item": {
              "item": "kubejs:pure_air_essence"
            }
          },
          {
            "item": {
              "item": "botania:rune_greed"
            }
          },
          {
            "item": {
              "item": "minecraft:tnt"
            }
          }
        ],
        "output": "ars_nouveau:glyph_aoe"        
    }).id('ars_nouveau:glyph_aoe')
    event.custom({
        "type": "ars_nouveau:glyph",
        "count": 1,
        "exp": 55,
        "inputItems": [
          {
            "item": {
              "item": "ars_nouveau:earth_essence"
            }
          },
          {
            "item": {
              "item": "minecraft:bone_block"
            }
          },
          {
            "item": {
              "item": "minecraft:bone_block"
            }
          },
          {
            "item": {
              "item": "minecraft:bone_block"
            }
          },
          {
            "item": {
              "item": "minecraft:bone_block"
            }
          },
          {
            "item": {
              "item": "minecraft:bone_block"
            }
          },
          {
            "item": {
              "item": "botania:rune_summer"
            }
          },
          {
            "item": {
              "tag": "forge:seeds"
            }
          },
          {
            "item": {
              "tag": "forge:seeds"
            }
          }
        ],
        "output": "ars_nouveau:glyph_grow"
    }).id('ars_nouveau:glyph_grow')
    


})