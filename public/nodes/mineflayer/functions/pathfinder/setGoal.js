function setGoal() {
    this.addInput("event", LiteGraph.ACTION);
    this.addInput("Goal", "goal");
    this.addOutput("onArrive", LiteGraph.EVENT);
    this.addOutput("then", LiteGraph.EVENT);
}

setGoal.title = "bot.pathfinder.setGoal";

setGoal.prototype.onAction = function () {
    const goal = this.getInputData(1);
    bot.pathfinder.setGoal(goal);
    bot.once("goal_reached", (reachedGoal) => {
        if (goal.isEnd(reachedGoal)) {
            this.triggerSlot(2);
        }
    });
    this.triggerSlot(3);
};

LiteGraph.registerNodeType("mineflayer/pathfinder/setGoal", setGoal);
