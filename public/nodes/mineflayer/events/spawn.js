function onSpawn() {
    this.addInput("events", LiteGraph.ACTION);
    this.addOutput("event", LiteGraph.EVENT);
}

onSpawn.title = "bot.on spawn";
onSpawn.prototype.onAction = function () {
    bot.on(
        "spawn",
        (() => {
            this.setOutputData(0, true);
            this.triggerSlot(0, true);
            log("spawn");
        }).bind(this)
    );
};

LiteGraph.registerNodeType("mineflayer/bot.on/spawn", onSpawn);
