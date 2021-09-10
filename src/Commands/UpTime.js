/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "uptime",
	description: "Shows How long the bot has been running for",
	permission: "ADMINISTRATOR",
	async run(message, args, client) {

  let days = Math.floor(client.uptime / 86400000);
  let hours = Math.floor(client.uptime / 3600000) % 24;
  let minutes = Math.floor(client.uptime / 60000) % 60;
  let seconds = Math.floor(client.uptime / 1000) % 60;

  let uptime = new Discord.MessageEmbed()

    .setColor("#fc6203")
    .setDescription(` \`\💻\`\ | **__Uptime:__**`) // remind me to remove this emoji 
    .addField("**Days:**", `${days}`)
    .addField("** Hours: **" , `${hours}`) 
    .addField("** Minutes: **", `${minutes}`) 
    .addField("**Seconds:**", `${seconds}`)
  .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL())

  message.channel.send({ embeds: [uptime] });
  }
});
