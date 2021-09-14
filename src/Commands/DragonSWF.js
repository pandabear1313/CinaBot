/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

const fetch = require("node-fetch");

module.exports = new Command({
    name: "test",
    description: "",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {

        fetch("https://api.waifu.pics/nsfw/waifu")
        .then(res => res.json())
        .then(res => {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} Here's your Waifu`, message.author.displayAvatarURL())
            .setColor(`RANDOM`)
            .setImage(res.url)

            message.channel.send({embeds: [embed]});
        });
    }
});