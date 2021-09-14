const Event = require("../Structures/Event.js");

const wordsArray = require("../Data/words");

module.exports = new Event("messageCreate", (client, message) => {
    if (message.author.bot) return;

    wordsArray.words.forEach(async word => {
        if (message.content === word) {
            console.log(word);
            await message.channel.send(`<@${message.author.id}> You can't just say: **__${word}__** come one!`).then(msg => {
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