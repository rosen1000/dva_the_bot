require("dotenv").config();
const telebot = require("telebot");
const bot = new telebot(process.env.TOKEN);
const fs = require("fs");

fs.readdir("commands", (_, files) => {
    let commandFiles = files.filter(f => f.endsWith(".js"));
    commandFiles.forEach(commandFile => {
        let command = require(__dirname + "/commands/" + commandFile);
        command.run(bot);
    })
});

bot.start();