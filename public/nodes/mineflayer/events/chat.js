function event_bot_chat() {
    this.addInput("events", LiteGraph.ACTION);
    this.addOutput("username", "string");
    this.addOutput("message", "string");
    this.addOutput("event", LiteGraph.EVENT);
}

event_bot_chat.title = "bot.on chat";
event_bot_chat.prototype.onStart = function () {};
event_bot_chat.prototype.onAction = function () {
    bot.on(
        "chat",
        ((username, message) => {
            if (username === bot.username) return;
            this.setOutputData(0, username);
            this.setOutputData(1, message);
            this.setOutputData(2, true);
            this.triggerSlot(2, true);
        }).bind(this)
    );
};

LiteGraph.registerNodeType("mineflayer/events/chat", event_bot_chat);
