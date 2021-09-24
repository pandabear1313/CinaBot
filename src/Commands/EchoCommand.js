/** @format */

const Command = require("../Structures/Command");

const Discord = require('discord.js')
module.exports = new Command({

        name: "say",
        description: "Bot would repeat Every and anything you say!",
        permission: "SEND_MESSAGES",
        async run(message, args, client) {

            let user =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.member;
    
            const report = new Discord.MessageEmbed()
    
        .setAuthor(`${user.user.username} `, user.user.displayAvatarURL())
        .setColor("#00FF1E")
        .setTitle('Invaild Use of Command')
        .addFields(
            { name: 'Command', value: 'Say Command allows a user to send a message \nand bot would repeat that same message'},
    
            { name: 'Command Useage', value: 'Example  `!say` Hello world' }
        )
        .setTimestamp()  
    
            const sayContent = args.slice(1).join(" ");

            if (!sayContent || !args[1])  return message.channel.send({ embeds: [report] });

            const msg = await message.channel.send(sayContent);

            message.delete();    
        }                                                  
    });  