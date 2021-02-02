function constantVec3() {
    this.addOutput("vec3", "vec3");
    this.x = this.addWidget("number","x",0,"value");
    this.y = this.addWidget("number","y",0,"value");
    this.z = this.addWidget("number","z",0,"value");
}

constantVec3.title = "Const Vec3";
constantVec3.desc = "Constant Vec3";

constantVec3.prototype.onExecute = function() {
    this.setOutputData(0, v(this.x.value, this.y.value, this.z.value));
};

LiteGraph.registerNodeType("basic/vec3", constantVec3);

function inputVec3() {
    this.addOutput("vec3", "vec3");
    this.addInput("x", "number");
    this.addInput("y", "number");
    this.addInput("z", "number");
}

inputVec3.title = "Variable Vec3";
inputVec3.desc = "Variable Vec3";

inputVec3.prototype.onExecute = function() {
    this.setOutputData(0, v(this.getInputData(0), this.getInputData(1), this.getInputData(2)));
};

LiteGraph.registerNodeType("basic/variableVec3", inputVec3);