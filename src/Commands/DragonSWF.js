/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

const fetch = require("node-fetch");

module.exports = new Command({
    name: "hentai",
    description: "This command would send hentai only in NSFW channels",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {


         const embed4 = new Discord.MessageEmbed()
            .setTitle('NSFW not allowed here')
            .setDescription(
                'Use NSFW commands in a NSFW marked channel (look in channel settings, dummy)'
            )
            .setImage('https://i.imgur.com/oe4iK5i.gif')
        if (!message.channel.nsfw) return message.channel.send({embeds: [embed4]}); 

        fetch("https://api.waifu.pics/nsfw/waifu")
        .then(res => res.json())
        .then(res => {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} Here's your hentai`, message.author.displayAvatarURL())
            .setColor(`RANDOM`)
            .setImage(res.url)

            message.channel.send({embeds: [embed]});
        });

        
        


    }
});