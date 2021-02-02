function createBot() {
    this.host = this.addWidget("string", "host", "localhost", "host");
    this.port = this.addWidget("string", "port", "52879", "port"); // 25565
    this.username = this.addWidget("string", "username", "mineflayer", "username");
    this.password = this.addWidget("string", "password", "", "password");
    this.version = this.addWidget("string", "version", "auto", "version");

    this.addOutput("bot", LiteGraph.EVENT);
}

let bot;

createBot.title = "mineflayer.createBot";
createBot.prototype.onStart = function () {
    bot = mineflayer.createBot({
        host: this.host.value,
        port: this.port.value,
        username: this.username.value,
        password: this.password.value,
        version: this.version.value === "auto" ? false : this.version.value,
    });

    bot.on("connect", () => {
        log("connect");
        this.setOutputData(0, bot);
        this.trigger("bot", bot);
    });

    bot.on("error", (err) => {
        log(err);
    });
};
createBot.prototype.onStop = function () {
    log("destroying the bot");
    bot.end();
};

LiteGraph.registerNodeType("mineflayer/createBot", createBot);
