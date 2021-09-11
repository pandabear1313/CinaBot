/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "shutdown",
	description: "This command would shuts down the bot ",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {

    if (message.author.id !== "429283081837477900") { // add your user-id here :D
      return message.reply(`Did you Seriously Think that you are Worthy Enough to Shut me Down?`);
    }
    const shutdown = new Discord.MessageEmbed();

    shutdown
 
    .setDescription(`Shutting Down...`)
    .setColor("RANDOM")
    .setTimestamp(); 
    
    await message.channel.send({ embeds: [shutdown] });
    console.log("Shutting Down!")
    process.exit(0);
  }
});