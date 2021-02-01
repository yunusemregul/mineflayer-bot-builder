function event_bot_spawn() {
    this.addInput("events", LiteGraph.ACTION);
    this.addOutput("event", LiteGraph.EVENT);
}

event_bot_spawn.title = "bot.on spawn";
event_bot_spawn.prototype.generateCode = function () {
    let childrenCode = ""


    return `
        bot.on("spawn", () => {
            ${childrenCode}
        })
    `;
};
event_bot_spawn.prototype.onExecute = function () {};

LiteGraph.registerNodeType("mineflayer/events/spawn", event_bot_spawn);
