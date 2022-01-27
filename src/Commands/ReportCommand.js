/** @format */

const Command = require("../Structures/Command.js");

const { MessageEmbed } = require('discord.js');

const Discord = require('discord.js')

module.exports = new Command({
  name: 'report',
  description: 'bug report command',
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
        value: 'Report Command is used when you found a bug with the bot'
    }, {
        name: 'Command Usage',
        value: 'Example  `!report` there is a bug with the bot-status!'
    })
    .setTimestamp()

const sayContent = args.slice(1).join(" ");

if (!sayContent) return message.channel.send({embeds: [usageEmbed]});


    const channel = client.channels.cache.get('891425124048326756');

    const embed = new MessageEmbed()
    .setTitle("Bug-Report")
    .setColor("BLUE")
    .setThumbnail(message.author.displayAvatarURL())
    .addFields(
      {name: 'Author', value: `${message.author.tag}`},
      {name: 'ID', value: `${message.author.id}`},
      {name: 'Guild', value: `${message.guild.name}`},
      {name: 'Bug', value: `${query}`}
      )

      message.reply({content: 'Report was Succesfully sent!'});

      channel.send({embeds: [embed]});
      
  }
});
