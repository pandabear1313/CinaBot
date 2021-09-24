const axios = require('axios');

const { MessageEmbed } = require('discord.js');

const Discord = require("discord.js");

const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "hug",
    description: "This command sends a animated gif hugging the user you pinged aswell as hug you aswell if you're feeling down", // !hug <user> 
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        const url = "https://some-random-api.ml/animu/hug";

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
            value: 'The Hug command allows a user to sends an \nanimated gif hugging the user you pinged'
        }, {
            name: 'Command Useage',
            value: 'Example `!hug` **@user**'
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
            .setAuthor(`${message.author.username} Hugged ${user.user.username}`, message.author.displayAvatarURL())
            .setColor(`RANDOM`)
            .setImage(image.link)

        await message.channel.send({ embeds: [embed] })
    }
})
