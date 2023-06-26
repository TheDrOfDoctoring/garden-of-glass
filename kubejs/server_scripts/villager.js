MoreJSEvents.playerStartTrading(event => {
        event.forEachOffers((o, i) => {
            if(o.getOutput().id === "advancedperipherals:peripheral_casing" || o.getOutput().id === "computercraft:turtle_advanced" || o.getOutput().id === "supplementaries:flax_seeds" || o.getOutput().id === "ae2:fluix_crystal" || o.getOutput().id === "ae2:logic_processor_press" || o.getOutput().id === "ae2:engineering_processor_press" || o.getOutput().id === "ae2:calculation_processor_press" || o.getOutput().id === "ae2:silicon_press" || o.getOutput().id === "ae2:certus_quartz_crystal")
            o.disabled = true;
        });
})