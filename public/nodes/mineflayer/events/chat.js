function event_bot_chat() {
    this.addInput("events", LiteGraph.ACTION);
    this.addOutput("username", "string");
    this.addOutput("message", "string");
    this.addOutput("event", LiteGraph.EVENT);
}

event_bot_chat.title = "bot.on chat";

event_bot_chat.prototype.onExecute = function () {};

LiteGraph.registerNodeType("mineflayer/events/chat", event_bot_chat);