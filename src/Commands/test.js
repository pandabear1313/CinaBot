/** @format */

const Command = require("../Structures/Command.js");
const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

module.exports = new Command({
    name: 'a',
    description: "Gives an Advice <3",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {


      
        const data = await fetch("https://api.adviceslip.com/advice").then((res) => res.json())

        const embed = new MessageEmbed()
        .setDescription(data.slip.advice)
        .setColor("RANDOM")

        message.channel.send({ embeds: [embed] });
    }
});