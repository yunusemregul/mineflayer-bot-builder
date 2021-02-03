function getPlayerByNameNode() {
    this.addInput("name", "string");
    this.addOutput("player", "object");
    this.addOutput("player.entity", "object");
}

getPlayerByNameNode.title = "bot.players getPlayerByName";

getPlayerByNameNode.prototype.onAction = function () {
    this.setOutputData(0,bot.players[this.getInputData(0)]);
    this.setOutputData(1,bot.players[this.getInputData(0)].entity);
};

LiteGraph.registerNodeType("mineflayer/custom/bot.players getPlayerByName", getPlayerByNameNode);
