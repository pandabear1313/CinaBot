/** @format */

const { eightBall } = require('../Data/pickup.json')

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "8ball",
	description: "This commands shows the Botinfo and All the hard-working developers who created it",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {

        const sayContent = args.slice(1).join(" ");

        if (!sayContent || !args[1])/* <--- both works*/ return message.channel.send(`<@${message.author.id}> Please send a message for me to predict your future :D`);

        if (!args[0]) return client.commands.get('help').execute(client, message, args, Discord)
        const n = Math.floor(Math.random() * eightBall.length)
        const embed = new Discord.MessageEmbed()
        .setColor("#00ff08")
        .setDescription(`:8ball: ${eightBall[n]}`)
        message.channel.send({ embeds: [embed] });
  
    }});