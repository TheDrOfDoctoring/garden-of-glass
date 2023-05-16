ServerEvents.recipes(event => {
 event.custom({
    "type": "genericbotaniapacktweaker:dieselotus",
    "burntime": 10000,
    "input": {
      "type": "block",
      "block": "kubejs:refined_fuel"
    }
 })
 event.custom({
    "type": "genericbotaniapacktweaker:dieselotus",
    "burntime": 1000,
    "input": {
      "type": "block",
      "block": "kubejs:tree_oil"
    }
 })
 event.custom({
    "type": "genericbotaniapacktweaker:dieselotus",
    "burntime": 200,
    "input": {
      "type": "block",
      "block": "kubejs:creosote"
    }
 })
})