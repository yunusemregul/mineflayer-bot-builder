function loadPlugin() {
    this.plugin = this.addWidget("combo", "Plugin", "pathfinder", function (v) {}, { values: ["pathfinder"] });
    this.addInput("bot", LiteGraph.ACTION);
}

loadPlugin.title = "bot.loadPlugin";
loadPlugin.prototype.onAction = function () {
    if (this.plugin.value === "pathfinder") {
    }

    switch (this.plugin.value) {
        case "pathfinder": {
            var mcData = require("minecraft-data")(bot.version);
            var { pathfinder, Movements } = require("mineflayer-pathfinder");

            bot.loadPlugin(pathfinder);
            bot.pathfinder.setMovements(new Movements(bot, mcData));
            break;
        }
    }
};

LiteGraph.registerNodeType("mineflayer/loadPlugin", loadPlugin);
