const Command = require("../Structures/Command.js");

const { MessageActionRow, MessageButton, } = require("discord.js");

const Discord = require('discord.js'); 

module.exports = new Command({
	name: "td",
	description: "Hello!",
	permission: "SEND_MESSAGES",
	async run(message, args, client)  {


      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]) ||
        message.member;


       const embed = new Discord.MessageEmbed()

       .setAuthor(`${user.user.username} `, user.user.displayAvatarURL())
       .setColor("#00FF1E")
       .setTitle('Welcome to Truth Or Dare')
       .addFields(
           { name: 'Truth Or Dare', value: 'Welcome to truth or dare where you can expose\nfind the truth on someone or get a horrible dare'},

           { name: 'Warning', value: 'Once you start there is no going back' }
       )
       .setTimestamp()          

   
    const row = new MessageActionRow()
    .addComponents(
    
        new MessageButton()

        .setStyle('SUCCESS')
        .setLabel('Truth')
        .setEmoji('🤫')
        .setCustomId('Truth_user')
    

    )
    .addComponents(

        new MessageButton()
        
        .setStyle('DANGER')
        .setLabel('Dare')
        .setEmoji('😈')
        .setCustomId('Dare_user')
        


    );


    let sendmsg = await message.channel.send({content : 
        " ", ephemeral:true, embeds : [embed],
    components:[row]})


    let embed1 = new Discord.MessageEmbed()

        
    .setAuthor( user.user.username, user.user.displayAvatarURL())
    .setColor("#00FF1E")
    .setTitle('**Welcome** to the `Information` section')
    .addFields(
        { name: 'Information Page', value: '**Information** Commands generally show information \nabout the bot as well as show statistics on users'}
    )
    .setTimestamp()


        const collector = message.channel.createMessageComponentCollector({

            componentType: "BUTTON"
        })

        collector.on("collect", async (collected) => {

            const customId = collected.customId

            if (customId === "Dare_user") {
                collected.reply({embeds: [embed1], ephemeral: true})
            }

            if(customId === "Truth_user") {

                collected.reply({content: "hello"})
            }
        })
    }
});