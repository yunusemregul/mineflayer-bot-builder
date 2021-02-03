function getPositionXYZNode() {
    this.addInput("entity", "object");
    this.addOutput("x", "number");
    this.addOutput("y", "number");
    this.addOutput("z", "number");
}

getPositionXYZNode.title = "entity.getPositionXYZ";

getPositionXYZNode.prototype.onAction = function () {
    this.setOutputData(0,this.getInputData(0).position.x);
    this.setOutputData(1,this.getInputData(0).position.y);
    this.setOutputData(2,this.getInputData(0).position.z);
};

LiteGraph.registerNodeType("mineflayer/custom/entity.getPositionXYZ", getPositionXYZNode);
