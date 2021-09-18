/** @format */

const Command = require("../Structures/Command.js");

const { pickup } = require('../Data/pickup.json');

const Discord = require("discord.js");



module.exports = new Command({
	name: "pickup",
	description: "Hello!",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
    

        const { member, mentions, channel, guild, author } = message;
        const target = mentions.members.first() || guild.members.cache.get(args[0]) || member;
        const rand = Math.floor(Math.random() * pickup.length);
        

        const sayContent = args.slice(1).join(" ");

        if (!sayContent || !args[1])/* <--- both works*/ return message.channel.send(`<@${message.author.id}> Please mention a User to send a pickup line too`);
        const embed = new Discord.MessageEmbed()

        .setAuthor(`${message.author.username}'s pickup line`, message.author.displayAvatarURL())
        .setColor("#ff8000")
        .setDescription(`Hey ${target.user.username}, ${pickup[rand]}`)
        .setFooter(`From yours truly, ${author.tag}`)

        message.channel.send({ embeds: [embed] }).catch(err => console.log(err))
    }


});