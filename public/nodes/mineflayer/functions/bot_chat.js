function bot_chat() {
    this.addInput("event", LiteGraph.ACTION);
    this.addInput("text", "string");
    this.addOutput("then", LiteGraph.ACTION);
}

bot_chat.title = "bot.chat";

bot_chat.prototype.onExecute = function () {};
bot_chat.prototype.generateCode = function () {

    return `
bot.chat(${input})
`;
};

LiteGraph.registerNodeType("mineflayer/bot_chat", bot_chat);
