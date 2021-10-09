/** @format */

const Discord = require('discord.js')

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "avatar",
	description: "Shows the avatar of the mentioned user",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {

        let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]) ||
        message.member;

       // let guildMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        const Target = message.mentions.users.first() || message.author;


        const responseEmbed = new Discord.MessageEmbed()
        responseEmbed
        .setColor("#00ff11")
        .setAuthor(`${Target.tag}\'s Avatar`, user.user.displayAvatarURL())
        .setImage(Target.displayAvatarURL({dynamic: true, size: 512}))
        .setFooter(`Requested by ${message.author.username}`)
       // .setDescription(`${guildMember.user}`)
        .setTimestamp()

        message.channel.send({ embeds: [responseEmbed] })
    }
})




        


