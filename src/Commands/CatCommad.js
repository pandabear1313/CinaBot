const axios = require('axios');

const { MessageEmbed } = require('discord.js');

const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "cat",
    description: "",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        const url = "https://some-random-api.ml/img/cat";
        const facts = "https://some-random-api.ml/facts/cat"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Random Cat Image and Fact`)
            .setColor(`RANDOM`)
            .setDescription(fact.fact)
            .setImage(image.link)

        await message.channel.send({ embeds: [embed] })
    }
})