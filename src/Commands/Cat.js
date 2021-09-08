/** @format */

const Command = require("../Structures/Command");

const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = new Command({
	name: "cat",
	description: "cat",
	permission: "MANAGE_MESSAGES",
	async run(message, args, client) {



        const subreddits = [

            `cat`,
            `cats`,
            `catpics`,
            `kittens`,
        ];

        module.exports = class extends Command {

            async run(message) {

                const data = await fetch(`https://imgur.com/r${subreddits[Math.floor(Math.random * subreddits.length)]}/hot.json`)
                .then(response => response.json())
                .then(body => body.data)
                const selected = data[Math.floor(Math.random * data.length)];
                return message.channel.send(new MessageEmbed().setImage(`https://imgur/${selected.hash}${select.ext.replace(/\?.*/, '')}`));


            }
        }


    }
});