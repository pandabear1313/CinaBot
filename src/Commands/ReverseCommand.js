const Command  = require("../Structures/Command.js");

module.exports = new Command({
    name: "reverse",
    description: "reverse your text!",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        if(!args.slice(1).length) return message.reply({content: ` Please supply some text!`})
        message.reply({content: `${args.slice(1).join(" ").split("").reverse().join("")}`})
    }
});