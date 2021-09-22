/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: 'dumbrate',
    description: 'Sends you your dumb rate',
    usage: 'dumbrate [user]',
    category: 'Fun',
    permission: "SEND_MESSAGES",
    guildOnly: true,
	async run(message, args, client) {

        const sayContent = args.slice(1).join(" ");

        if (!sayContent || !args[1])/* <--- both works*/ return message.channel.send(`<@${message.author.id}> Mention someone for me to check their dumbrate score`);
        let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase())
        let gayrate = Math.floor(Math.random() * 101)
        let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]) ||
        message.member;


        if(!User){
            let gayrateEmbed = new Discord.MessageEmbed()
                .setTitle("<a:alert:890019091027488779> Dumbrate Machine <a:alert:890019091027488779>") 
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 256 })) 
                .setColor("#03d3fc")
                .addFields(
                    { name: 'Dumbrate Results <a:check:890025594593628190>', value: "You are `" + gayrate + "%` dumb!" },
                )
                 .setTimestamp()
            message.channel.send({ embeds: [gayrateEmbed] }).catch(e => {
                console.log(e)
            })
        } else {
            let argsEmbed = new Discord.MessageEmbed()
                .setTitle("<a:alert:890019091027488779> Dumbrate Machine <a:alert:890019091027488779>") 
                .setColor("#03d3fc")
                .setThumbnail(user.user.displayAvatarURL({ dynamic: true, size: 256 })) 
                .addFields(
                    { name: `Dumbrate Results <a:check:890025594593628190> `, value: `${user.user.username} is \`${gayrate}%\` dumb!` },
                )
                .setTimestamp()
            message.channel.send({ embeds: [argsEmbed] }).catch(e => {
                console.log(e)
            })
        }
    }
});