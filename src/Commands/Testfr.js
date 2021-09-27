/** @format */

const Discord = require("discord.js");

const ms = require('ms')

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "remind",
	description: "Reminds you of your future Events",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {

        let reminder = args.slice(2).join(' ');
        let time = args[1]

        let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]) ||
        message.member;

    const noDurationEmbed = new Discord.MessageEmbed();

    noDurationEmbed

    .setColor("DARK_RED")
    .setTitle("Error")
    .setDescription("Please state a Duration for the Reminder!")
    .setFooter(`${user.user.username} `, user.user.displayAvatarURL())
    .setTimestamp()

    if(!time) return message.channel.send({ embeds: [noDurationEmbed]});

    const noReminderEmbed = new Discord.MessageEmbed();

    noReminderEmbed

    .setColor("DARK_RED")
    .setTitle("Error")
    .setDescription("Please state the reminder!")
    .setFooter(`${user.user.username} `, user.user.displayAvatarURL())
    .setTimestamp()

    if(!reminder) return message.channel.send({ embeds: [noReminderEmbed]});

    const reminderSetEmbed = new Discord.MessageEmbed()

    reminderSetEmbed

    .setColor("BLURPLE")
    .setAuthor('Reminder was Set!', message.author.displayAvatarURL())
    .setDescription(`Successfully set ${message.author.username}'s reminder!`)
    .addField('Remind In', `${time}`)
    .addField('Reminder', `${reminder}`)
    .setFooter(`${user.user.username} `, user.user.displayAvatarURL())
    .setTimestamp()

    message.channel.send({ embeds: [reminderSetEmbed]});

    setTimeout(async function () {

        message.channel.send(`<@${message.author.id}>, here is your reminder!`);

        const reminderAlertEmbed = new Discord.MessageEmbed()

        reminderAlertEmbed
    
        .setColor("BLURPLE")
        .setAuthor('Reminder Alert!', message.author.displayAvatarURL())
        .addField('Reminder', `${reminder}`)
        .setFooter(`${user.user.username} `, user.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send({ embeds: [reminderAlertEmbed]});

    }, ms (time));

    },
});
