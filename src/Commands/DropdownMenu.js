/** @format */

const{MessageActionRow, MessageSelectMenu } = require('discord.js')

const {MessageEmbed} = require('discord.js')

const Discord = require("discord.js");

const { Collection } = require("mongoose");

const Command = require("../Structures/Command.js");
module.exports = new Command({
	name: "p",
	description: "Hello!",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {

        const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
            .setCustomId("select")
            .setPlaceholder("Select your option")
            .addOptions([
                {
                    label: "Information",
                    description: "Click here to see all the Informative Commands",
                    value: "first",
                    emoji: "<a:check:890025594593628190>",
                  
                },
                {
                    label: "Fun",
                    description: "Click here to see all the Cool/Fun Commands",
                    value: "second",
                    emoji: "<a:HappyPanda:848937481088663552>",

                },
                {
                    label: "Moderation",
                    description: "Click here to get all the Moderation Commands",
                    value: "third",
                    emoji: "<:bot_mod:887130116273094656>",
                },
                {
                
                    label: " Anime",
                    description: "Click me if you want Anime Commands",
                    value: "fourth",
                    emoji: "<:anime:891343368456634448>",
            }
            ])

        )

        let embed = new Discord.MessageEmbed()

        embed
        
        .setTitle("Welcome to the dropdown selection")
        .setDescription("Choose the option you want to select")
        .setColor("RANDOM")

        let sendmsg = await message.channel.send({content : 
            " ", ephemeral:true, embeds : [embed], 
        components:[row]})



        let embed1 = new Discord.MessageEmbed()

        
        .setTitle("You selected something!")
        .setDescription("You chouse option 1")
        .setColor("RANDOM")

        let embed2 = new Discord.MessageEmbed()

        
        .setTitle("You selected something!")
        .setDescription("You chouse option 2")
        .setColor("RANDOM")

        let embed3 = new Discord.MessageEmbed()

        
        .setTitle("You selected something!")
        .setDescription("You chouse option 3")
        .setColor("RANDOM")

        let embed4 = new Discord.MessageEmbed()

        
        .setTitle("You selected something!")
        .setDescription("You chouse option 4")
        .setColor("RANDOM")


     const collector = message.channel.createMessageComponentCollector({

        componentType: "SELECT_MENU"
     })

     collector.on("collect", async (collected) => {

        const value = collected.values[0]

        if(value === "first") {

            collected.reply({embeds:[embed1], ephemeral:true})
        }
        if(value === "second") {

            collected.reply({embeds:[embed2], ephemeral:true})
        }
        if(value === "third") {

            collected.reply({embeds:[embed3], ephemeral:true})
        }
        if(value === "fourth") {

            collected.reply({embeds:[embed4], ephemeral:true})
        }

     })

    }
    
});