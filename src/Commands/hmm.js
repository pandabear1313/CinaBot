/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "t",
	description: "Hello!",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {

let user = message.mentions.users.first();
let astra = args.splice(1).join(' ');
if(!user){
return message.channel.send("please mention someone");
};
if(!astra){
return message.channel.send("can't send an empty message");
};
user.send(astra);

    }
});