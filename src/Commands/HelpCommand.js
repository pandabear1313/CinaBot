/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({

	name: "help",
	description: "This command shows all the available commands that the bot can Do!",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {


		const help = new Discord.MessageEmbed()
        .setColor("BLURPLE")
        .setTitle('Prefix- `!`')
        .setAuthor('Command List', message.author.displayAvatarURL())


        .addFields({

             name: 'Available Commands',
             value: 'shows all the available commands',

        },
        {

           name: 'Informations',
           value: '`ping` | `collect` |`userinfo` | `Botinfo` | `uptime`',

        },
        {

            name: 'Fun',
            value: '`meme` | `fire` | `say` | `status` | `hello`  \n`hug`  | `pat`  | `ttc`  | `dog`  | `cat`'
                    
        },
        {

            name: 'Moderation',
            value: '`clear` | `Others Still In Development` '
        }

        )

        message.channel.send({ embeds: [help] });

    }

});