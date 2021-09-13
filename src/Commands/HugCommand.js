const axios = require('axios');

const { MessageEmbed } = require('discord.js');

const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "hug",
    description: "This command sends a animated gif hugging the user you pinged aswell as hug you aswell if you're feeling down", // !hug <user> 
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        const url = "https://some-random-api.ml/animu/hug";
        const facts = "https://some-random-api.ml/facts/dog"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }
        let user =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.member;

        const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} Hugged ${user.user.username}`, message.author.displayAvatarURL())
            .setColor(`RANDOM`)
            .setImage(image.link)

        await message.channel.send({ embeds: [embed] })
    }
})
