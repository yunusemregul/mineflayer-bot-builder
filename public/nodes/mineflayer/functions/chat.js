function chat() {
    this.addInput("text", "string");
}

chat.title = "bot.chat";

chat.prototype.onAction = function () {
    bot.chat(this.getInputData(0));
};

LiteGraph.registerNodeType("mineflayer/bot.chat", chat);
