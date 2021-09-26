const axios = require("axios");

const Command = require("../Structures/Command");

const Discord = require("discord.js");

module.exports = new Command({
  name: "animequote",
  description: "",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {

    
    let user =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]) ||
    message.member;
    
    const url = "https://animechan.vercel.app/api/random";

    axios.get(url).then((res) => {
      const embed = new Discord.MessageEmbed()
        .setTitle(`Anime Quote`)
        .addFields(
            { name: 'Anime', value: res.data.character},
            { name: 'Character', value: res.data.anime },
            { name: 'Quote', value: res.data.quote },
        )

        .setTimestamp()
        .setThumbnail(user.user.displayAvatarURL())
        .setColor("#ff8800")
         
      message.channel.send({ embeds: [embed] });
    });
  },
});
