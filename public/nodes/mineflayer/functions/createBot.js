function CreateBot() {
    this.host = this.addWidget("string", "host", "localhost", "host");
    this.port = this.addWidget("string", "port", "50200", "port"); // 25565
    this.username = this.addWidget("string", "username", "mineflayer", "username");
    this.password = this.addWidget("string", "password", "", "password");
    this.version = this.addWidget("string", "version", "auto", "version");

    this.addOutput("events", LiteGraph.EVENT);
}

let bot;

CreateBot.title = "mineflayer.createBot";
CreateBot.prototype.onStart = function () {
    bot = mineflayer.createBot({
        host: this.host.value,
        port: this.port.value,
        username: this.username.value,
        password: this.password.value,
        version: this.version.value === "auto" ? false : this.version.value,
    });

    bot.on("connect", () => {
        this.triggerSlot(0);
        log("connect");
    });

    bot.on("error", (err) => {
        log(err);
    });
};
CreateBot.prototype.onStop = function () {
    log("destroying the bot");
    bot.end();
}

LiteGraph.registerNodeType("mineflayer/createBot", CreateBot);
