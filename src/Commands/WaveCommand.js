/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

const fetch = require("node-fetch");

module.exports = new Command({
    name: "wave",
    description: "The bot would send an anime gif waving at the person mention",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {

        let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]) ||
        message.member;
        
        fetch("https://api.waifu.pics/sfw/wave")
        .then(res => res.json())
        .then(res => {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} waves at ${user.user.username}`, message.author.displayAvatarURL())
            .setColor(`RANDOM`)
            .setImage(res.url)

            message.channel.send({embeds:[embed]})

            
        });

    }
    
});