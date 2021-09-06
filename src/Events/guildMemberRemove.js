/** @format */

const Event = require("../Structures/Event.js");

const Discord = require("discord.js");

module.exports = new Event("guildMemberRemove", (client, member) => {
	const channel = member.guild.channels.cache.find(
		c => c.name == "welcome-and-goodbye"
	);

	if (!channel) return;

	const embed = new Discord.MessageEmbed();

	embed
		.setTitle(member.user.tag) // member.user.tag
		.setColor("#FF0000")
		.setAuthor("Member Left") // "Member Left"
		.setThumbnail(member.user.avatarURL({ dynamic: true }))
		.addField("User Joined", member.joinedAt.toUTCString())
		.setTimestamp();

	channel.send({ embeds: [embed] });
});
