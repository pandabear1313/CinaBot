/** @format */

const Command = require("../Structures/Command.js");

const Meme = require("memer-api");

const memer = new Meme("1yiE0Wr8xr4");

const Discord = require("discord.js");

module.exports = new Command({
    name: "tweet",
    description: "Make fake tweet to troll your friend",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        let user =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.member;

        const avatar = user.user.displayAvatarURL({dynamic: false});

        const text = args.slice(1).join(" ");

        if (!text) return message.reply(`Please provide a text.`);

        const username = user.user.username;

        memer.tweet(avatar, username, text).then((image) => {
            var attachment = new Discord.MessageAttachment(image, "tweet.png");
            const embed = new Discord.MessageEmbed()
                .setTitle("Tweeted!")
                .setImage("attachment://tweet.png");
            message.channel.send({embeds: [embed], files: [attachment]});
        });
    },
});