function getPositionVec3Node() {
    this.addInput("entity", "object");
    this.addOutput("vec3", "vec3");
}

getPositionVec3Node.title = "entity.getPositionVec3";

getPositionVec3Node.prototype.onAction = function () {
    this.setOutputData(0,v(this.getInputData(0).position.x, this.getInputData(0).position.y, this.getInputData(0).position.z));
};

LiteGraph.registerNodeType("mineflayer/custom/entity.getPositionVec3", getPositionVec3Node);
