/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

const fetch = require("node-fetch");

module.exports = new Command({
    name: "waifu",
    description: "The bot would send a picture of cool waifus",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {

        fetch("https://api.waifu.pics/sfw/waifu")
        .then(res => res.json())
        .then(res => {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} Here's your Waifu`, message.author.displayAvatarURL())
            .setColor(`RANDOM`)
            .setImage(res.url)

            message.channel.send({embeds:[embed]}) 

            
        });

    }
    
});