/** @format */

const Command = require("../Structures/Command.js");

const pop = require("popcat-wrapper")

const Discord = require("discord.js")

module.exports = new Command({
    name: "biden",
    description: "",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {

        const text = args.slice(1).join(" ");

        if (!text) return message.reply(`Please provide a text.`);

        const img = await pop.biden(text).then((img) => {

            const attachment = new Discord.MessageAttachment(img, "biden.png");
            const embed = new Discord.MessageEmbed()
                .setTitle("Tested")
                .setImage("attachment://biden.png");
            message.channel.send({files: [attachment]});
            // console.log(embed)
            // console.log(text)
            // console.log(img)

        })
    }
})

