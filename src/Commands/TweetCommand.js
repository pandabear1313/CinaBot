const Meme = require("memer-api")
const memer = new Meme('1yiE0Wr8xr4');
const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: "tweet",
    description: "Change status of BOT",
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
        const text = args.slice(1).join(" ");
        if (!text) return message.channel.send("Please provide a text to send! ;)");  // justin pro at code ;D future job for you is at microsoft tbf or apple 
        let avatar = message.author.displayAvatarURL()

        memer.tweet(avatar, message.author.username, text).then(image => {
            const attachment = new MessageAttachment(image, "tweet.png")
            
            message.channel.send({ files: [attachment] })
        })
    }
});
