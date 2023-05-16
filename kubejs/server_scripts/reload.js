LevelEvents.loaded(event => {
    //load time increases for the beauty of kube
    event.getServer().runCommandSilent('reload')
    event.getServer().gameRules.set("doInsomnia", "false")
})

