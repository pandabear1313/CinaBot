/** @format */

const Command = require("../Structures/Command.js");
const { MessageActionRow, MessageButton } = require("discord.js");

module.exports = new Command({
  name: "weep",
  description: "The bot would send an anime gif waving at the person mention",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {

    const button = new MessageButton()
      .setCustomId("random")
      .setLabel("primary")
      .setStyle("PRIMARY")

    const row = new MessageActionRow()
      .addComponents(button)

  message.channel.send({content: "Hello World!", components: [row]});

  }

});
