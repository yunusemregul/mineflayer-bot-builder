function ifNode() {
    this.size = [60, 30];
    this.addInput("if", "");
    this.addInput("event", LiteGraph.ACTION);
    this.addOutput("true", LiteGraph.EVENT);
    this.addOutput("false", LiteGraph.EVENT);
}

ifNode.title = "if";

ifNode.prototype.onAction = function (action, param) {
    var v = this.getInputData(0);
    if (v) this.triggerSlot(0, param);
    if (!v) this.triggerSlot(1, param);
};

LiteGraph.registerNodeType("logic/if", ifNode);
