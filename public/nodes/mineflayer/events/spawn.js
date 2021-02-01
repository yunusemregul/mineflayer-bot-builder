function event_bot_spawn() {
    this.addInput("events", LiteGraph.ACTION);
    this.addOutput("event", LiteGraph.EVENT);
}

event_bot_spawn.title = "bot.on spawn";
event_bot_spawn.prototype.onAction = function () {
    bot.on(
        "spawn",
        (() => {
            this.setOutputData(0, true);
            this.triggerSlot(0, true);
            log("spawn");
        }).bind(this)
    );
};

LiteGraph.registerNodeType("mineflayer/events/spawn", event_bot_spawn);
