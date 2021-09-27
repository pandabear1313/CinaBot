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

        const test = new Discord.MessageEmbed()

    .setAuthor(`${user.user.username} `, user.user.displayAvatarURL())
    .setColor("#00FF1E")
	.setTitle('Invaild Use of Command')
    .addFields(
        { name: 'Command', value: '8ball Command generally predicts ones Future Events '},

        { name: 'Command Usage', value: 'Example  `!8ball` Does my gf loves me?' }
    )
    .setTimestamp()  


    
    message.channel.send({ embeds: [test] });



    }


    });

