var GoalBlock;

function goalBlockNode() {
    GoalBlock = require("mineflayer-pathfinder").goals.GoalBlock;

    this.addInput("XYZ", "vec3");
    this.addOutput("GoalBlock", "goal");
}

goalBlockNode.title = "bot.pathfinder.GoalBlock";

goalBlockNode.prototype.onExecute = function () {
    const pos = this.getInputData(0)
    this.setOutputData(0, new GoalBlock(pos.x, pos.y, pos.z));
};

LiteGraph.registerNodeType("mineflayer/pathfinder/GoalBlock", goalBlockNode);
