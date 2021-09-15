const Event = require("../Structures/Event.js");

const { words } = require("../Data/words");

module.exports = new Event("messageCreate", (client, message) => {
    if (message.author.bot) return;

    words.forEach(async word => {
        if (message.content === word) {
            await message.channel.send(`<@${message.author.id}> <:bot_mod:887130116273094656> You can't just say: **__${word}__** come one!`).then(msg => {
                setTimeout(() => {
                    msg.delete();
                }, 10000)

                setTimeout(() => {
                    message.delete();
                }, 1000);
            });
            
        }
    })
});