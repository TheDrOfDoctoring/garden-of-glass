ServerEvents.recipes(event => {
    event.custom({
        "type": "lychee:dripstone_dripping",
        "source_block": "kubejs:soul_fluid",
        "target_block": "thermal:cinnabar_block",
        "post": [
          {
            "type": "place",
            "block": "air"
          },
          {
            "type": "drop_item",
            "item": "quark:soul_bead",
            "count": 1
          }
        ]
      })
      event.custom({
        "type": "lychee:dripstone_dripping",
        "source_block": "kubejs:soul_fluid",
        "target_block": "minecraft:dirt",
        "post": [
          {
            "type": "place",
            "block": "sculk"
          }
        ]
      })
      event.custom({
        "type": 'lychee:item_exploding',
        "item_in": [
            {
              "item": 'kubejs:bloodstone_block'
            },
            {
              "item": 'botania:rune_fire'
            },
            {
              "item": 'kubejs:volatile_powder'
            }
          ],
          "post": [
            {
              "type": "drop_item",
              "item": "thermal:cinnabar_ore",
              "count": 3
            }
          ]          
    })
    event.custom({
        "type": 'lychee:block_exploding',
        "block_in": "moreminecarts:glass_cactus",
          "post": [
            {
              "type": "drop_item",
              "item": "moreminecarts:glass_spines",
              "count": 3
            }
          ]          
    })
    event.custom({
        "type": 'lychee:item_exploding',
        "item_in": [
            {
              "item": 'kubejs:dense_zinc_dust'
            },
            {
              "item": 'thermal:rosin'
            },
            {
              "item": 'thermal:rosin'
            },
            {
              "item": 'kubejs:dense_copper_dust'
            },
            {
              "item": 'kubejs:dense_copper_dust'
            }
          ],
          "post": [
            {
              "type": "drop_item",
              "item": "kubejs:brass_dust",
              "count": 4
            }
          ]          
    })
    event.custom({
        "type": 'lychee:item_exploding',
        "item_in": [
            {
              "item": 'botania:rune_fire'
            },
            {
              "item": 'minecraft:lightning_rod'
            },
            {
              "item": 'minecraft:diamond'
            }
          ],
          "post": [
            {
              "type": "drop_item",
              "item": "ars_artifice:spell_gem_t1",
              "nbt": '{Damage:145,"ars_nouveau:caster":{current_slot:0,flavor:"",hidden_recipe:"",is_hidden:0b,spell_count:1,spells:{spell0:{name:"",recipe:{part0:"ars_nouveau:glyph_touch",part1:"ars_nouveau:glyph_lightning",size:2},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:180,g:25,r:255,type:"ars_nouveau:constant"}}}}}',
              "count": 1
            }
          ]          
    })
    event.custom({
        "type": 'lychee:item_exploding',
        "item_in": [
            {
              "item": 'botania:rune_fire'
            },
            {
              "item": 'botania:rune_summer'
            },
            {
              "item": 'minecraft:lightning_rod'
            },
            {
              "item": 'minecraft:diamond'
            }
          ],
          "post": [
            {
              "type": "drop_item",
              "item": "ars_artifice:spell_gem_t1",
              "nbt": '{Damage:0,"ars_nouveau:caster":{current_slot:0,flavor:"",hidden_recipe:"",is_hidden:0b,spell_count:1,spells:{spell0:{name:"",recipe:{part0:"ars_nouveau:glyph_touch",part1:"ars_nouveau:glyph_lightning",size:2},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:180,g:25,r:255,type:"ars_nouveau:constant"}}}}}',
              "count": 1
            }
          ]          
    })
    event.custom({
        "type": "lychee:lightning_channeling",
        "item_in": [
            {
              "item": 'minecraft:gunpowder'
            },
            {
              "item": 'thermal:sawdust_block'
            }
          ],
          "post": [
            {
              "type": "drop_item",
              "item": "minecraft:slime_ball",
              "count": 1
            }
          ]
    })
    event.custom({
        "type": "lychee:lightning_channeling",
        "block_in": "minecraft:sand",
        "item_in": [
            {
              "item": 'ae2:quartz_block'
            }
          ],
          "post": [
            {
                "type": "execute",
                "command": "fill ~-2 ~-1 ~-2 ~1 ~ ~1 ae2:quartz_glass replace sand"
            }
          ]
    })
})