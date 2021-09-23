const Meme = require("memer-api")
const memer = new Meme('1yiE0Wr8xr4');
const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: 'youtube',
    description: "",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        const text = args.slice(1).join(" ");
        let avatar = message.author.displayAvatarURL()

        memer.youtube(message, avatar).then(image => {
            const attachment = new MessageAttachment(image, "youtube.png")
            message.channel.send({ files: [attachment] })
        })
    }
});
