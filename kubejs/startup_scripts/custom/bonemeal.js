
const SaplingBlock = Java.loadClass('net.minecraft.world.level.block.SaplingBlock')

ForgeEvents.onEvent("net.minecraftforge.event.entity.player.BonemealEvent", event => {
    if(event != null) {
        if(event.getStack() != null && !(event.getStack().id === "minecraft:bonemeal") && event.getStack().id === "botania:living_root" && (/.*sapling/.test(event.getBlock().getBlock().id.toString()))) {
            if(event.getBlock().getBlock() instanceof SaplingBlock &&  !event.getLevel().isClientSide()) {
                let block = event.getBlock().getBlock()
                block.advanceTree(event.getLevel(), event.getPos(), event.getBlock(), event.getLevel().random)
            }
        } 
    }
})  

