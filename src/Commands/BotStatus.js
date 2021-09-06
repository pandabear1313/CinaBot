const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: "status",
    description: "Change status of BOT",
    permission: "ADMINISTRATOR",
    async run(message, args, client){
        content = args.slice(1).join(" ");
        client.user.setPresence({ activities: [{ name: (content) }], status: 'idle' });
           
       

             
		

    }
})