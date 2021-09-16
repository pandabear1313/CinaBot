const Event = require("../Structures/Event.js");

const { words } = require("../Data/words");

module.exports = new Event("messageCreate", (client, message) => {
    if (message.author.bot) return;

    if (message.member.permissions.has("ADMINISTRATOR")) return;

    const sentence = message.content.toLowerCase().split(' ');
    const stringWord = sentence.join(' ');
    const word = (element) => sentence.includes(element);

    if (words.some(word)) {
        message.delete();
        message.channel.send(`<@${message.author.id}> <:bot_mod:887130116273094656> You can't just say: **__${stringWord}__** come on!`).then(msg => {
            setTimeout(() => {
                msg.delete();
            }, 10000)
        });
    }
});   

