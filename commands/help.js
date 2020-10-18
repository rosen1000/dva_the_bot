module.exports = {
    async run(bot) {
        bot.on("/help", async (message) => {
            message.reply.text(
                "/start - Welcoming message\
                /slots - Play a game of slots (it's free)\
                /help - Show the list of commands"
            );
        });
    },
};
