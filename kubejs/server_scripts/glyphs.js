ServerEvents.recipes(event => {
    event.remove({id: 'ars_nouveau:glyph_aoe'})
    event.remove({id: 'ars_nouveau:glyph_grow'})
  
    event.custom({    
        "type": "ars_nouveau:glyph",
        "count": 1,
        "exp": 55,
        "inputItems": [
          {
            "item": {
              "item": "ars_nouveau:abjuration_essence"
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