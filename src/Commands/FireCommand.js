/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: "fire",
    description: "This is a fun command to troll your friend and Staff-members sending an attachment saying that the user is fired ",
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
            value: 'The Fire command allows you troll your friends by sending \nan attachment saying that the user is fired'
        }, {
            name: 'Command Useage',
            value: 'Example `!fire` **@user**'
        })
        .setTimestamp()
 
    const sayContent = args.slice(1).join(" ");
 
    if (!sayContent) return message.channel.send({embeds: [usageEmbed]});


        const embed = new Discord.MessageEmbed();
        embed.setAuthor(`${user.user.username} you are fired`, user.user.displayAvatarURL())
            .setColor("#00FF1E")
            .setImage("https://c.tenor.com/aHv5-YfU-rgAAAAM/fired-office.gif")

            message.channel.send({ embeds: [embed] });
    }
});