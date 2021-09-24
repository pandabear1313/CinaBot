const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: "status",
    description: "Change status of BOT",
    permission: "ADMINISTRATOR",
    async run(message, args, client){
        content = args.slice(1).join(" ");
        client.user.setPresence({ activities: [{ name: (content) }], status: 'idle' });
           
        let member =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]) ||
        message.member;

    const usageEmbed = new Discord.MessageEmbed()
        .setAuthor(`${member.user.username} `, member.user.displayAvatarURL())
        .setColor("#00FF1E")
        .setTitle('Invaild Use of Command')
        .addFields({
            name: 'Command',
            value: 'The Status command allows you to change \nthe bot status for a specific timeframe.'
        }, {
            name: 'Command Useage',
            value: 'Example `!status` Hello guys Cina bot has a status.'
        })
        .setTimestamp()

    const sayContent = args.slice(1).join(" ");

    if (!sayContent) return message.channel.send({embeds: [usageEmbed]});
             
		

    }
})