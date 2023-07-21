ServerEvents.recipes(event => {
  event.remove({id: 'botania:orechid/lapis_ore'})
  event.remove({id: 'botania:orechid/deepslate_lapis_ore'})
  event.remove({id: 'botania:orechid/gold_ore'})
  event.remove({id: 'botania:orechid/diamond_ore'})
  //dirt gambling
    event.custom({
        "type": "botania:orechid",
        "input": {
          "type": "block",
          "block": "kubejs:dirty_dirt"
        },
        "output": {
          "type": "block",
          "block": "minecraft:dirt"
        },
        "weight": 4098
    })
    event.custom({
        "type": "botania:orechid",
        "input": {
          "type": "block",
          "block": "kubejs:dirty_dirt"
        },
        "output": {
          "type": "block",
          "block": "minecraft:mud"
        },
        "weight": 1079
    })
    
    event.custom({
        "type": "botania:orechid",
        "input": {
          "type": "block",
          "block": "kubejs:dirty_dirt"
        },
        "output": {
          "type": "block",
          "block": "decorative_blocks:rocky_dirt"
        },
        "weight": 883
    })

    //deepslate changes
    event.custom({
      "type": "botania:orechid",
      "input": {
        "type": "block",
        "block": "minecraft:deepslate"
      },
      "output": {
        "type": "block",
        "block": "minecraft:deepslate_lapis_ore"
      },
      "weight": 201
    })
    event.custom({
      "type": "botania:orechid",
      "input": {
        "type": "block",
        "block": "minecraft:deepslate"
      },
      "output": {
        "type": "block",
        "block": "thermal:deepslate_niter_ore"
      },
      "weight": 315
    })
    event.custom({
      "type": "botania:orechid",
      "input": {
        "type": "block",
        "block": "minecraft:deepslate"
      },
      "output": {
        "type": "block",
        "block": "thermal:deepslate_lead_ore"
      },
      "weight": 304
    })
    event.custom({
      "type": "botania:orechid",
      "input": {
        "type": "block",
        "block": "minecraft:deepslate"
      },
      "output": {
        "type": "block",
        "block": "thermal:deepslate_nickel_ore"
      },
      "weight": 264
    })
    event.custom({
        "type": "botania:orechid",
        "input": {
          "type": "block",
          "block": "minecraft:stone"
        },
        "output": {
          "type": "block",
          "block": "minecraft:gold_ore"
        },
        "weight": 4125
    })
    event.custom({
      "type": "botania:orechid",
      "input": {
        "type": "block",
        "block": "minecraft:stone"
      },
      "output": {
        "type": "block",
        "block": "minecraft:lapis_ore"
      },
      "weight": 2078
    })

    //sulfur addition


    event.custom({
      "type": "botania:orechid_ignem",
      "input": {
        "type": "block",
        "block": "minecraft:netherrack"
      },
      "output": {
        "type": "block",
        "block": "kubejs:sulfur_ore"
      },
      "weight": 1882
    })
    
    //andesite
    event.custom({
      "type": "botania:orechid",
      "input": {
        "type": "block",
        "block": "minecraft:andesite"
      },
      "output": {
        "type": "block",
        "block": "thermal:apatite_ore"
      },
      "weight": 303
    })
    event.custom({
      "type": "botania:orechid",
      "input": {
        "type": "block",
        "block": "minecraft:andesite"
      },
      "output": {
        "type": "block",
        "block": "thermal:niter_ore"
      },
      "weight": 982
    })
    event.custom({
      "type": "botania:orechid",
      "input": {
        "type": "block",
        "block": "minecraft:andesite"
      },
      "output": {
        "type": "block",
        "block": "thermal:niter_block"
      },
      "weight": 201
    })
    event.custom({
      "type": "botania:orechid",
      "input": {
        "type": "block",
        "block": "minecraft:andesite"
      },
      "output": {
        "type": "block",
        "block": "minecraft:stone"
      },
      "weight": 2698
    })
    //bloodstone
    event.custom({
      "type": "botania:orechid_ignem",
      "input": {
        "type": "block",
        "block": "twigs:bloodstone"
      },
      "output": {
        "type": "block",
        "block": "minecraft:netherrack"
      },
      "weight": 501
    })
    event.custom({
      "type": "botania:orechid_ignem",
      "input": {
        "type": "block",
        "block": "twigs:bloodstone"
      },
      "output": {
        "type": "block",
        "block": "minecraft:deepslate_diamond_ore"
      },
      "weight": 101
    })
    event.custom({
      "type": "botania:orechid_ignem",
      "input": {
        "type": "block",
        "block": "twigs:bloodstone"
      },
      "output": {
        "type": "block",
        "block": 'thermal:deepslate_nickel_ore'
      },
      "weight": 101
    })
    event.custom({
      "type": "botania:orechid_ignem",
      "input": {
        "type": "block",
        "block": "twigs:bloodstone"
      },
      "output": {
        "type": "block",
        "block": "minecraft:nether_quartz_ore"
      },
      "weight": 303
    })
    event.custom({
      "type": "botania:orechid_ignem",
      "input": {
        "type": "block",
        "block": "twigs:bloodstone"
      },
      "output": {
        "type": "block",
        "block": "minecraft:cobbled_deepslate"
      },
      "weight": 205
    })

    event.custom({
        "type": "botania:orechid",
        "input": {
          "type": "block",
          "block": "minecraft:stone"
        },
        "output": {
          "type": "block",
          "block": "minecraft:diamond_ore"
        },
        "weight": 1201
    })
})