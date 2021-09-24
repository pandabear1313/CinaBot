const Command  = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: "reverse",
    description: "reverse your text!",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        let member =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]) ||
        message.member;
 


    const usageEmbed = new Discord.MessageEmbed()
        .setAuthor(`${member.user.username} `, member.user.displayAvatarURL())
        .setColor("#00FF1E")
        .setTitle('Invaild Use of Command')
        .addFields({
            name: 'Command',
            value: 'The Reverse command generally reverse your text'
        }, {
            name: 'Command Useage',
            value: 'Example `!reverse` **text**'
        })
        .setTimestamp()
 
    const sayContent = args.slice(1).join(" ");
 
    if (!sayContent) return message.channel.send({embeds: [usageEmbed]});

        message.reply({content: `${args.slice(1).join(" ").split("").reverse().join("")}`})
    }
});