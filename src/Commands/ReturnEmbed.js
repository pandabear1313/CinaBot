const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "o",
	description: "Hello!",
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


    
    message.channel.send({ embeds: [report] });



    }


    });

