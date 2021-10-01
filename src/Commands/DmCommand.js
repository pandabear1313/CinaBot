/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "dm",
	description: "send a direct message to a user",
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

message.delete()

    }
});

// got to redo