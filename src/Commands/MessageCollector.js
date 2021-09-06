const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
  name: "collect",
  description: "Bot would collect inputed messages and outputs the message but in an embed",
  permission: "ADMINISTRATOR",
  async run(message, args, client) {

    const logChannel = client.channels.cache.get("788512538588479501");

    message.channel.send(":white_check_mark: Your next message will be embedded and sent to");

    let filter = m => !m.author.bot;

    const collector = new Discord.MessageCollector(message.channel, {filter, max: 1});

    collector.on("collect", (msg) => {

        const embed = new Discord.MessageEmbed()
          .setColor("#10FF00")
          .setDescription(msg.content)

        logChannel.send({embeds: [embed]}).then(() => {
          message.reply(`Your message was send to: <#${logChannel.id}> \n\n Send by <@${message.author.id}>`);


        })
    })
  }
});