/** @format */

const Command = require("../Structures/Command");

module.exports = new Command({

        name: "say",
        description: "Bot would repeat Every and anything you say!",
        permission: "SEND_MESSAGES",
        async run(message, args, client) {

            const sayContent = args.slice(1).join(" ");

            if (!sayContent || !args[1])/* <--- both works*/ return message.channel.send(`<@${message.author.id}> Send a message to let me say something`);

            const msg = await message.channel.send(sayContent);

            message.delete();    
        }                                                  
    });  