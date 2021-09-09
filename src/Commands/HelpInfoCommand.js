/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "helpinfo",
	description: "More adv. help command",
	permission: "SEND_MESSAGES",
	async run(message, args, client, bot) {
	
        const Help = new Discord.MessageEmbed()
        .addFields([
            {name: "field 1", value: "some value", inline: true},
            {name: "blabla", value: "e", inline: true}
            ])


            message.channel.send({ embeds: [Help] });
	}
});