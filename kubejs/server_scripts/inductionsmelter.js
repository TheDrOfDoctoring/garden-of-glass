ServerEvents.recipes(event => {

    event.recipes.thermal.smelter('4x thermal:bronze_ingot', ['3x #forge:ingots/copper', '#forge:ingots/tin', 'thermal:rosin']).energy(6400)
    event.recipes.thermal.smelter('4x thermal:lumium_ingot', ['3x #forge:ingots/tin', 'create:zinc_ingot', 'kubejs:glow_rosin']).energy(15000)
    event.recipes.thermal.smelter('4x create:brass_ingot', ['3x kubejs:brass_crystal', '2x minecraft:iron_ingot']).energy(10000)



      event.custom({
        "type": "thermal:smelter",
        "ingredients": [
          {
                "item": "kubejs:brass_crystal",
                "count": 3
          },
          {
            "item": "minecraft:iron_ingot",
            "count": 2
          },
        ],
        "result": [
          {
            "item": "create:brass_ingot",
            "count": 4
          }
        ],
        "energy": 12000
      })


})


