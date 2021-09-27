const axios = require('axios');

const { MessageEmbed } = require('discord.js');

const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "pat",
    description: "This command would send a gif patting the mentioned user or could work on the author who uses the command without pinging the user",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        const url = "https://some-random-api.ml/animu/pat";

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
            value: 'The Pat command end a gif patting the mentioned user \nor could work on the author as-well'
        }, {
            name: 'Command Usage',
            value: 'Example `!pat` **@user**'
        })
        .setTimestamp()
 
    const sayContent = args.slice(1).join(" ");
 
    if (!sayContent) return message.channel.send({embeds: [usageEmbed]});

        let image, response;
        try {
            response = await axios.get(url);
            image = response.data;

        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }


        const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} Patted ${user.user.username}`, user.user.displayAvatarURL())
            .setColor(`RANDOM`)
            .setImage(image.link)

        await message.channel.send({ embeds: [embed] })
    }
})
