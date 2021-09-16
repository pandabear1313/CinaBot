/** @format */

const Event = require("../Structures/Event.js");


const Discord = require('discord.js');

module.exports = new Event("messageUpdate", (client, oldMessage, newMessage) => {

  const logChannel = oldMessage.guild.channels.cache.find(chnl => chnl.name === "dumb-logs");
  if (!logChannel) return;   // noice, whats next?  the chat filter it doesn't remove the  swear words in sentences

try {
 if (oldMessage.member.bot) return;
 if (!oldMessage.member.permissions.has("ADMINISTRATOR")) return; //yo im checking how to check the permissions in v13 xd
 
 if (oldMessage.content.startsWith("https://")) return;   // ahh
 if (oldMessage.content.startsWith("http://")) return;
 const messageUpdate = new Discord.MessageEmbed()
  .setTitle("**MESSAGE EDIT**")
  .setThumbnail(oldMessage.author.avatarURL())
  .setColor("RANDOM")
  .setDescription(`**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
  .setTimestamp()
  .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL());
  logChannel.send({ embeds: [messageUpdate] });
} catch (err) {

 const embed = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setTitle("Error!")
  .setDescription("**Error Code:** *" + err + "*")
  .setTimestamp();
  logChannel.send({ embeds: [embed] });
} 

})