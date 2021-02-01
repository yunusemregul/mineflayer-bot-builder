function onChat() {
    this.addInput("events", LiteGraph.ACTION);
    this.addOutput("username", "string");
    this.addOutput("message", "string");
    this.addOutput("event", LiteGraph.EVENT);
}

onChat.title = "bot.on chat";
onChat.prototype.onStart = function () {};
onChat.prototype.onAction = function () {
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

LiteGraph.registerNodeType("mineflayer/bot.on/chat", onChat);
