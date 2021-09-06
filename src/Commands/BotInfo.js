/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "Botinfo",
	description: "This commands shows the Botinfo and All the hard-working developers who created it",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		embed
			.setTitle("Welcome to **CinaBot** Info Page")
			.setURL("https://discord.gg/CV99SND8BQ")
			.setAuthor(
				message.author.username,
				message.author.avatarURL({ dynamic: true }),
				"https://discord.gg/CV99SND8BQ"
			)
			.setDescription(
				"**The Developers who created me were**\n\n**Cinna** - Developer \n\n**Justin | Codr_** - Bot Developer/ Error Fixer\n\n**Tim Honks** - Bot Idea Manager\n\n**Dragn** - Bot Developer"
			)
			.setColor("BLURPLE")
			.setThumbnail(message.author.avatarURL({ dynamic: true }))
			.setTimestamp()
			.setImage(
				"https://cdn.discordapp.com/avatars/876669718633775214/0aaac470b4926ff4b7805f96676e2a2d.webp?size=128"
			)
			.addFields(
				{
					name: "Bot Version",
					value: "1.0.0",
					inline: true
				},
				{
					name: "Bot Name",
					value: client.user.username,
					inline: true
				}
			);

		message.reply({ embeds: [embed] });
	}
});
