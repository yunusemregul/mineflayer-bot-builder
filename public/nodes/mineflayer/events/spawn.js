function onSpawn() {
    this.addInput("bot", LiteGraph.ACTION);
    this.addOutput("event", LiteGraph.EVENT);
}

onSpawn.title = "bot.on spawn";
onSpawn.prototype.onAction = function (name, param) {
    log(name, param);
    bot.on(
        "spawn",
        (() => {
            log("spawn");
            log(this);
            this.setOutputData(0, true);
            this.trigger("event", true);
        }).bind(this)
    );
};

LiteGraph.registerNodeType("mineflayer/bot.on/spawn", onSpawn);
