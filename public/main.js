let domCanvas = document.getElementById("canvas");
domCanvas.width = window.innerWidth;
domCanvas.height = window.innerWidth;

var graph = new LGraph();
var canvas = new LGraphCanvas("#canvas", graph);

var node_createBot = LiteGraph.createNode("mineflayer/createBot");
node_createBot.pos = [200, 200];
graph.add(node_createBot);

graph.start();

document.getElementById("download-code").onclick = () => {
    generateCodeFromGraph(graph);
};

document.getElementById("print-graph").onclick = () => {
    console.log(graph.serialize());
};

document.getElementById("download-graph").onclick = () => {
    var data = JSON.stringify(graph.serialize());
    var file = new Blob([data]);
    var url = URL.createObjectURL(file);
    var element = document.createElement("a");
    element.setAttribute("href", url);
    element.setAttribute("download", "graph.JSON");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setTimeout(function () {
        URL.revokeObjectURL(url);
    }, 1000 * 60);
};