let domCanvas = document.getElementById("canvas");
domCanvas.width = window.innerWidth;
domCanvas.height = window.innerWidth;

var graph = new LGraph();
var canvas = new LGraphCanvas("#canvas", graph);
canvas.zoom_modify_alpha = false;

var node_createBot = LiteGraph.createNode("mineflayer/createBot");
node_createBot.pos = [200, 200];
graph.add(node_createBot);

const runButton = document.getElementById("run");
runButton.onclick = () => {
    if (graph.status == LGraph.STATUS_STOPPED) {
        runButton.innerText = "Stop";
        graph.start();
    } else {
        runButton.innerText = "Run";
        graph.stop();
    }
};

const Store = require("electron-store");
const store = new Store();

document.getElementById("save").onclick = () => {
    store.set("graph", JSON.stringify(graph.serialize()));
};

document.getElementById("load").onclick = () => {
    var data = store.get("graph");
    if (data) graph.configure(JSON.parse(data));
};
