/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: "fire",
    description: "This is a fun command to troll your friend and Staff-members sending an attachment saying that the user is fired ",
    permission: "MANAGE_MESSAGES",

    async run(message, args, client) {
let user =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.member;

        const embed = new Discord.MessageEmbed();
        embed.setAuthor(`${user.user.username} you are fired`, user.user.displayAvatarURL())
            .setColor("RANDOM")
            .setImage("https://c.tenor.com/aHv5-YfU-rgAAAAM/fired-office.gif");
            message.channel.send({ embeds: [embed] });
    }
});