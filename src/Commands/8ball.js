/** @format */

const {
    eightBall
} = require('../Data/pickup.json')

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: "8ball",
    description: "The bot predicts your future",
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
                value: '8ball Command generally predicts ones Future Events '
            }, {
                name: 'Command Useage',
                value: 'Example  `!8ball` Does my gf loves me?'
            })
            .setTimestamp()

        const sayContent = args.slice(1).join(" ");

        if (!sayContent) return message.channel.send({embeds: [usageEmbed]});

        if (!args[0]) return client.commands.get('help').execute(client, message, args, Discord)
        const n = Math.floor(Math.random() * eightBall.length)
        const embed = new Discord.MessageEmbed()

            .setAuthor(`${message.author.username} Your Prediction`, message.author.displayAvatarURL())
            .setColor("#00ff08")
            .addFields({
                name: 'Your Message <:boty:889655287408099388> ',
                value: `${sayContent}`
            }, {
                name: 'Your Answer  <:dev:889652696192286800> ',
                value: `${eightBall[n]}`
            }, )
        message.channel.send({
            embeds: [embed]
        });
    }
});