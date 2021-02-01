function chat() {
    this.addInput("event", LiteGraph.ACTION);
    this.addInput("text", "string");
    this.addOutput("then", LiteGraph.EVENT);
}

chat.title = "bot.chat";

chat.prototype.onAction = function () {
    bot.chat(this.getInputData(1));
    this.triggerSlot(2);
};

LiteGraph.registerNodeType("mineflayer/bot.chat", chat);
