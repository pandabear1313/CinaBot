/** @format */

const Event = require("../Structures/Event.js");
const PrefixSchema = require("../Data/PrefixSchema");

module.exports = new Event("messageCreate", async (client, message) => {
	if (message.author.bot) return;

	// let prefix;
	let data = await PrefixSchema.findOne({
	  _id: message.guild.id
	})

	let prefix = data ? data.newPrefix : "!";

	if (!message.content.startsWith(prefix)) return;

	const args = message.content.trim().substring(prefix.length).split(/ +/);

	const command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) return message.reply(`${args[0]} is not a valid command!`);

	const permission = message.member.permissions.has(command.permission, true);

	if (!permission)
		return message.reply(
			`You do not have the permission \`${command.permission}\` to run this command!`
		);

	command.run(message, args, client);
});