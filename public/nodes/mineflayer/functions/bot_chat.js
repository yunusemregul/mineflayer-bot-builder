function bot_chat() {
    this.addInput("event", LiteGraph.ACTION);
    this.addInput("text", "string");
    this.addOutput("then", LiteGraph.EVENT);
}

bot_chat.title = "bot.chat";

bot_chat.prototype.onAction = function () {
    bot.chat(this.getInputData(1));
    this.triggerSlot(2);
};

LiteGraph.registerNodeType("mineflayer/bot_chat", bot_chat);
