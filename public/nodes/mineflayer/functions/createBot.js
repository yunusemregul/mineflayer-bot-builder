function CreateBot() {
    this.host = this.addWidget("string", "host", "localhost", "host");
    this.port = this.addWidget("string", "port", "25565", "port");
    this.username = this.addWidget("string", "username", "mineflayer", "username");
    this.password = this.addWidget("string", "password", "", "password");
    this.version = this.addWidget("string", "version", "auto", "version");

    this.addOutput("events", LiteGraph.ACTION);
}

CreateBot.title = "mineflayer.createBot";
CreateBot.prototype.generateCode = function () {
    return `
const bot = mineflayer.createBot({
    host: "${this.host.value}",
    port: "${this.port.value}",
    username: "${this.username.value}",
    password: "${this.password.value}", ${this.version.value !== "auto" ? "\n\tversion: " + this.version.value : ""}
});
`;
};
CreateBot.prototype.onExecute = function () {};

LiteGraph.registerNodeType("mineflayer/createBot", CreateBot);
