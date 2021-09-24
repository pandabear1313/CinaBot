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

        const usageEmbed = new Discord.MessageEmbed()
        .setAuthor(`${user.user.username} `, user.user.displayAvatarURL())
        .setColor("#00FF1E")
        .setTitle('Invaild Use of Command')
        .addFields({
            name: 'Command',
            value: 'The Wave command send an anime gif waving at the person mention'
        }, {
            name: 'Command Useage',
            value: 'Example `!wave` **@user**'
        })
        .setTimestamp()
 
    const sayContent = args.slice(1).join(" ");
 
    if (!sayContent) return message.channel.send({embeds: [usageEmbed]});


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