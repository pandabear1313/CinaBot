/** @format */

const Event = require("../Structures/Event.js");

const Discord = require('discord.js');

module.exports = new Event("messageDelete", (client, message) => {

    let user =
    message.mentions.members.first() ||
    message.member;

  const logChannel = message.guild.channels.cache.find(chnl => chnl.name === "mod-logs");

  if (!logChannel) return;

  try {
    if (message.member.bot) return;

    if (!message.member.permissions.has('SEND_MESSAGES')) return;

    if (message.content.startsWith("https://")) return; 

    const messageDelete = new Discord.MessageEmbed()

  .setAuthor(`${user.user.tag} `, user.user.displayAvatarURL())
  .setColor("RANDOM")
  .setTitle("Message Was Deleted")
  .setDescription(`**Channel**\n${message.channel}\n\n**Username**\n${message.author}\n\n**Message**\n${message}`)
  .setTimestamp()

  logChannel.send({ embeds: [messageDelete] });

} catch (err) {

    const embed = new Discord.MessageEmbed()
     .setColor("#FF0000")
     .setTitle("Error!")
     .setDescription("**Error Code:** *" + err + "*")
     .setTimestamp();
     logChannel.send({ embeds: [embed] });

}

})

