/** @format */

const Command = require("../Structures/Command");

module.exports = new Command({

        name: "say",
        description: "Bot would repeat Every and anything you say!",
        permission: "SEND_MESSAGES",
        async run(message, args, client) {

            const msg = await message.channel.send(args.slice(1).join(" "));

            message.delete(); 
         
        }

    });