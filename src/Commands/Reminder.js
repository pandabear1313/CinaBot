/** @format */

const Discord = require("discord.js");

const ms = require('ms')

const Command = require("../Structures/Command.js");


module.exports = new Command({
	name: "remind",
	description: "Reminds you of your future Events",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        message.delete();

        let reminder = args.slice(2).join(' ');
        let time = args[1];

        let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]) ||
        message.member;

        const noDurationEmbed = new Discord.MessageEmbed()
            .setColor("DARK_RED")
            .setTitle("Error")
            .setDescription("Please state a Duration for the Reminder!")
            .setFooter(`${user.user.username} `, user.user.displayAvatarURL())
            .setTimestamp()

        if(!time) return message.channel.send({ embeds: [noDurationEmbed]});

        const noReminderEmbed = new Discord.MessageEmbed()
            .setColor("DARK_RED")
            .setTitle("Error")
            .setDescription("Please state the reminder!")
            .setFooter(`${user.user.username} `, user.user.displayAvatarURL())
            .setTimestamp()

        if(!reminder) return message.channel.send({ embeds: [noReminderEmbed]}).then(msg => deleteMessage(msg));

        const reminderSetEmbed = new Discord.MessageEmbed()
            .setColor("BLURPLE")
            .setAuthor('Reminder was Set!', message.author.displayAvatarURL())
            .setDescription(`Successfully set ${message.author.username}'s reminder!`)
            .addField('Remind In', `${time}`)
            .addField('Reminder', `${reminder}`)
            .setFooter(`${user.user.username} `, user.user.displayAvatarURL())
            .setTimestamp()

        message.channel.send({ embeds: [reminderSetEmbed]}).then(msg => {
            deleteMessage(msg);
        });

        setTimeout(async () => {

            message.channel.send(`<@${message.author.id}>, here is your reminder!`).then(msg => deleteMessage(msg));

            const reminderAlertEmbed = new Discord.MessageEmbed()
                .setColor("BLURPLE")
                .setAuthor('Reminder Alert!', message.author.displayAvatarURL())
                .addField('Reminder', `${reminder}`)
                .setFooter(`${user.user.username} `, user.user.displayAvatarURL())
                .setTimestamp()

            message.channel.send({ embeds: [reminderAlertEmbed]}).then(msg => deleteMessage(msg));

        }, ms(time));
    },
});

const deleteMessage = msg => {
    setTimeout(() => {
        msg.delete();
    }, 10_000)  
} 

