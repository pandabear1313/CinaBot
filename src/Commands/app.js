/** @format */

const { eightBall } = require('../Data/pickup.json')

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "8ball",
	description: "This commands shows the Botinfo and All the hard-working developers who created it",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {

        if (!args[0]) return client.commands.get('help').execute(client, message, args, Discord)
        const n = Math.floor(Math.random() * eightBall.length)
        const embed = new Discord.MessageEmbed()
        .setColor("#C64600")
        .setDescription(`:8ball: ${eightBall[n]}`)
        message.channel.send({ embeds: [embed] });
  
    }});