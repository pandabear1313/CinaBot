/** @format */

const Command = require("../Structures/Command.js");

const { MessageEmbed } = require('discord.js');

module.exports = new Command({
  name: 'report',
  description: 'bug report command',
  permission: "SEND_MESSAGES",

	async run(message, args, client) {

    const channel = client.channels.cache.get('882887842957783050');
    const query = args.join(" ");
    if(!query[0]) return messsage.reply("please specify a bug");
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
