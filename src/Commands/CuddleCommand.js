/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

const fetch = require("node-fetch");

module.exports = new Command({
    name: "kiss",
    description: "The kiss command intentionally sends a kiss GIF to the person of choosing",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {

        let user =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.member;


            const usageEmbed = new Discord.MessageEmbed()
        .setAuthor(`${user.user.username} `, user.user.displayAvatarURL())
        .setColor("#00FF1E")
        .setTitle('Invaild Use of Command')
        .addFields({
            name: 'Command',
            value: 'The kiss command intentionally sends a cute \nkissing GIF to the person of choosing.'
        }, {
            name: 'Command Usage',
            value: 'Example `!kiss` **@user**.'
        })
        .setTimestamp()

 
    const sayContent = args.slice(1).join(" ");
 
    if (!sayContent) return message.channel.send({embeds: [usageEmbed]});



        fetch("https://api.waifu.pics/sfw/kiss")
        .then(res => res.json())
        .then(res => {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} kissed ${user.user.username}`, message.author.displayAvatarURL())
            .setColor(`RANDOM`)
            .setImage(res.url)

            message.channel.send({embeds: [embed]});
        });
    }
});