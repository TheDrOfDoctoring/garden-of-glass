ServerEvents.recipes(event => {
      //why did i not do this through a loop?
    //this was faster tbh
    event.recipes.minecraft.smelting('3x minecraft:iron_nugget', 'minecraft:iron_ore').xp(0.7)
    event.recipes.minecraft.smelting('3x minecraft:iron_nugget', 'minecraft:raw_iron').xp(0.7)
    event.recipes.minecraft.smelting('3x minecraft:iron_nugget', 'minecraft:deepslate_iron_ore').xp(0.7)
    event.recipes.minecraft.smelting('3x minecraft:iron_nugget', 'infernalexp:basalt_iron_ore').xp(0.7)
    event.recipes.minecraft.smelting('3x minecraft:iron_ingot',  'minecraft:raw_iron_block').xp(6.3)
    event.recipes.minecraft.smelting('3x thermal:copper_nugget', 'minecraft:copper_ore').xp(0.7)
    event.recipes.minecraft.smelting('3x thermal:copper_nugget', 'minecraft:raw_copper').xp(0.7)
    event.recipes.minecraft.smelting('3x thermal:copper_nugget', 'minecraft:deepslate_copper_ore').xp(0.7)
    event.recipes.minecraft.smelting('3x minecraft:copper_ingot', 'minecraft:raw_copper_block').xp(6.3)
    event.recipes.minecraft.smelting('3x minecraft:gold_nugget', 'minecraft:gold_ore').xp(0.7)
    event.recipes.minecraft.smelting('3x minecraft:gold_nugget', 'minecraft:raw_gold').xp(0.7)
    event.recipes.minecraft.smelting('3x minecraft:gold_nugget', 'minecraft:deepslate_gold_ore').xp(0.7)
    event.recipes.minecraft.smelting('3x minecraft:gold_nugget', 'minecraft:nether_gold_ore').xp(0.7)
    event.recipes.minecraft.smelting('3x minecraft:gold_ingot',  'minecraft:raw_gold_block').xp(6.3)
    event.recipes.minecraft.smelting('3x thermal:lead_nugget', 'thermal:lead_ore').xp(0.7)
    event.recipes.minecraft.smelting('3x thermal:lead_nugget', 'thermal:raw_lead').xp(0.7)
    event.recipes.minecraft.smelting('3x thermal:lead_nugget', 'thermal:deepslate_lead_ore').xp(0.7)
    event.recipes.minecraft.smelting('3x thermal:nickel_nugget', 'thermal:nickel_ore').xp(0.7)
    event.recipes.minecraft.smelting('3x thermal:nickel_nugget', 'thermal:raw_nickel').xp(0.7)
    event.recipes.minecraft.smelting('3x thermal:nickel_nugget', 'thermal:deepslate_nickel_ore').xp(0.7)
    event.recipes.minecraft.blasting('3x minecraft:iron_nugget', 'minecraft:iron_ore').xp(0.7)
    event.recipes.minecraft.blasting('3x minecraft:iron_nugget', 'minecraft:raw_iron').xp(0.7)
    event.recipes.minecraft.blasting('3x minecraft:iron_nugget', 'minecraft:deepslate_iron_ore').xp(0.7)
    event.recipes.minecraft.blasting('3x minecraft:iron_nugget', 'infernalexp:basalt_iron_ore').xp(0.7)
    event.recipes.minecraft.blasting('3x minecraft:iron_ingot',  'minecraft:raw_iron_block').xp(6.3)
    event.recipes.minecraft.blasting('3x thermal:copper_nugget', 'minecraft:copper_ore').xp(0.7)
    event.recipes.minecraft.blasting('3x thermal:copper_nugget', 'minecraft:raw_copper').xp(0.7)
    event.recipes.minecraft.blasting('3x thermal:copper_nugget', 'minecraft:deepslate_copper_ore').xp(0.7)
    event.recipes.minecraft.blasting('3x minecraft:copper_ingot', 'minecraft:raw_copper_block').xp(6.3)
    event.recipes.minecraft.blasting('3x minecraft:gold_nugget', 'minecraft:gold_ore').xp(0.7)
    event.recipes.minecraft.blasting('3x minecraft:gold_nugget', 'minecraft:raw_gold').xp(0.7)
    event.recipes.minecraft.blasting('3x minecraft:gold_nugget', 'minecraft:deepslate_gold_ore').xp(0.7)
    event.recipes.minecraft.blasting('3x minecraft:gold_nugget', 'minecraft:nether_gold_ore').xp(0.7)
    event.recipes.minecraft.blasting('3x minecraft:gold_ingot',  'minecraft:raw_gold_block').xp(6.3)
    event.recipes.minecraft.blasting('3x thermal:lead_nugget', 'thermal:lead_ore').xp(0.7)
    event.recipes.minecraft.blasting('3x thermal:lead_nugget', 'thermal:raw_lead').xp(0.7)
    event.recipes.minecraft.blasting('3x thermal:lead_nugget', 'thermal:deepslate_lead_ore').xp(0.7)
    event.recipes.minecraft.blasting('3x thermal:nickel_nugget', 'thermal:nickel_ore').xp(0.7)
    event.recipes.minecraft.blasting('3x thermal:nickel_nugget', 'thermal:raw_nickel').xp(0.7)
    event.recipes.minecraft.blasting('3x thermal:nickel_nugget', 'thermal:deepslate_nickel_ore').xp(0.7)


    let processingMaterials = ["lead", "iron", "nickel", "gold", "copper"]
    processingMaterials.forEach(materials => {
        event.recipes.minecraft.blasting('4x #forge:nuggets/'+materials, "kubejs:mana_"+materials+"_dust").xp(0.7)
        event.recipes.minecraft.smelting('4x #forge:nuggets/'+materials, "kubejs:mana_"+materials+"_dust").xp(0.7)
        event.recipes.minecraft.blasting('5x #forge:nuggets/'+materials, "kubejs:imbued_"+materials+"_dust").xp(0.7)
        event.recipes.minecraft.smelting('5x #forge:nuggets/'+materials, "kubejs:imbued_"+materials+"_dust").xp(0.7)
        event.recipes.minecraft.blasting('7x #forge:nuggets/'+materials, "kubejs:pure_"+materials+"_dust").xp(0.7)
        event.recipes.minecraft.smelting('7x #forge:nuggets/'+materials, "kubejs:pure_"+materials+"_dust").xp(0.7)
        event.recipes.minecraft.blasting('#forge:ingots/'+materials, "kubejs:elven_"+materials+"_dust").xp(0.7)
        event.recipes.minecraft.smelting('#forge:ingots/'+materials, "kubejs:elven_"+materials+"_dust").xp(0.7)
        event.recipes.minecraft.blasting('11x #forge:nuggets/'+materials, "kubejs:soul_"+materials+"_dust").xp(0.7)
        event.recipes.minecraft.smelting('11x #forge:nuggets/'+materials, "kubejs:soul_"+materials+"_dust").xp(0.7)
        event.shapeless('2x kubejs:mana_'+materials+'_dust', ["#kubejs:processing/"+materials, 'kubejs:scorching_sulfur'])
        event.shapeless('3x kubejs:blood_'+materials+'_dust', ["3x kubejs:soul_"+materials+"_dust", 'kubejs:crystallised_blood'])

        event.custom({
            "type": "create:mixing",
            "ingredients": [
              {
                "item": "kubejs:elven_"+materials+"_dust"
              },
              {
                "amount": 100,
                "fluid": "kubejs:soul_fluid"
              }
            ],
            "results": [
              {
                "item": "kubejs:soul_"+materials+"_dust"
              }
            ]
          })
      event.custom({
        "type": "botania:mana_infusion",
        "input": {
          "tag": "kubejs:processing/"+materials
        },
        "output": {
          "item": "kubejs:mana_"+materials+"_dust",
          "count": 1
        },
        "mana": 30
         })
         event.custom({
            "type": "botania:elven_trade",
            "ingredients": [
              {
                "item": "kubejs:pure_"+materials+"_dust"
              }
            ],
            "output": [
              {
                "item": "kubejs:elven_"+materials+"_dust"
              } 
            ]
          })
      event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item": "kubejs:mana_"+materials+"_dust"
        },
         "output": "kubejs:imbued_"+materials+"_dust",
         "pedestalItems": [
           {
             "item": {
               "item": "ars_nouveau:fire_essence"
              }
           },
            {
             "item": {
                "item": "ars_nouveau:earth_essence"
              }
            }
          ],
           "source": 350
       })
       event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "item": "kubejs:imbued_"+materials+"_dust"
        },
         "output": "kubejs:pure_"+materials+"_dust",
         "pedestalItems": [
           {
             "item": {
               "item": "kubejs:pure_fire_essence"
              }
           },
            {
             "item": {
               "item": "kubejs:pure_earth_essence"
              }
            }
          ],
           "source": 1500
       })   
       event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "output": {
          "item": "kubejs:pure_"+materials+"_dust"
        },
        "pedestalItems": [
          {
            "item": {
              "item": "ars_nouveau:fire_essence"
            }
          },
          {
            "item": {
              "item": "ars_nouveau:earth_essence"
            }
          }
        ],
        "reagent": [
          {
            "item": "kubejs:imbued_"+materials+"_dust"
          }
        ],
        "sourceCost": 100
      })    
    })
    //Create doesn't accept tags as outputs sadly
    
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "heated",
        "ingredients": [
          {
            "item": "kubejs:blood_iron_dust"
          },
          {
            "item": "ars_nouveau:water_essence"
          }
        ],
        "results": [
          {
            "item": "minecraft:iron_nugget",
            "count": 13
          }
        ]
      })
      event.custom({
        "type": "create:mixing",
        "heatRequirement": "superheated",
        "ingredients": [
          {
            "item": "kubejs:blood_iron_dust"
          },
          {
            "item": "ars_nouveau:water_essence"
          }
        ],
        "results": [
          {
            "item": "minecraft:iron_nugget",
            "count": 15
          }
        ]
      })
      event.custom({
        "type": "create:mixing",
        "heatRequirement": "heated",
        "ingredients": [
          {
            "item": "kubejs:blood_gold_dust"
          },
          {
            "item": "ars_nouveau:water_essence"
          }
        ],
        "results": [
          {
            "item": "minecraft:gold_nugget",
            "count": 13
          }
        ]
      })
      event.custom({
        "type": "create:mixing",
        "heatRequirement": "superheated",
        "ingredients": [
          {
            "item": "kubejs:blood_gold_dust"
          },
          {
            "item": "ars_nouveau:water_essence"
          }
        ],
        "results": [
          {
            "item": "minecraft:gold_nugget",
            "count": 15
          }
        ]
      })
      event.custom({
        "type": "create:mixing",
        "heatRequirement": "heated",
        "ingredients": [
          {
            "item": "kubejs:blood_copper_dust"
          },
          {
            "item": "ars_nouveau:water_essence"
          }
        ],
        "results": [
          {
            "item": "minecraft:copper_nugget",
            "count": 13
          }
        ]
      })
      event.custom({
        "type": "create:mixing",
        "heatRequirement": "superheated",
        "ingredients": [
          {
            "item": "kubejs:blood_copper_dust"
          },
          {
            "item": "ars_nouveau:water_essence"
          }
        ],
        "results": [
          {
            "item": "minecraft:copper_nugget",
            "count": 15
          }
        ]
      })
      event.custom({
        "type": "create:mixing",
        "heatRequirement": "heated",
        "ingredients": [
          {
            "item": "kubejs:blood_nickel_dust"
          },
          {
            "item": "ars_nouveau:water_essence"
          }
        ],
        "results": [
          {
            "item": "thermal:nickel_nugget",
            "count": 13
          }
        ]
      })
      event.custom({
        "type": "create:mixing",
        "heatRequirement": "superheated",
        "ingredients": [
          {
            "item": "kubejs:blood_nickel_dust"
          },
          {
            "item": "ars_nouveau:water_essence"
          }
        ],
        "results": [
          {
            "item": "thermal:nickel_nugget",
            "count": 15
          }
        ]
      })
      event.custom({
        "type": "create:mixing",
        "heatRequirement": "heated",
        "ingredients": [
          {
            "item": "kubejs:blood_lead_dust"
          },
          {
            "item": "ars_nouveau:water_essence"
          }
        ],
        "results": [
          {
            "item": "thermal:lead_nugget",
            "count": 13
          }
        ]
      })
      event.custom({
        "type": "create:mixing",
        "heatRequirement": "superheated",
        "ingredients": [
          {
            "item": "kubejs:blood_lead_dust"
          },
          {
            "item": "ars_nouveau:water_essence"
          }
        ],
        "results": [
          {
            "item": "thermal:lead_nugget",
            "count": 15
          }
        ]
      })
})