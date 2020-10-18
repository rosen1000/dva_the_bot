const axios = require("axios").default;

module.exports = {
    async run(bot) {
        bot.on("/hentai", async (message) => {
            const options = [
                "erofeet",
                "lewdk",
                "eroyuri",
                "tits",
                "pussy",
                "lewdkemo",
                "lewd",
                "cum",
                "spank",
                "boobs",
                "yuri",
                "gasm",
                "hentai",
                "ero",
            ];
            const option = options[Math.floor(Math.random() * options.length)];
            axios.get(`https://nekos.life/api/v2/img/${option}`).then((response) => {
                console.log(response);
                return message.reply.photo(response.data.url);
            });
        });
    },
};
