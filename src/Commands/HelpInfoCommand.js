/** @format */

const pagination = require ("discord.js-pagination");

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "helpinfo",
	description: "More adv. help command",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
	
        const Help = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Bot Information')
        .addFields('**Prefix**', 'Bot prefix is `!`')
        .addFields('**Pages**', '`1. Available Commands`, `2. Informations`, `3. Fun`, `4. Moderation`')
        .addFields('**Navigation Help **', 'Use the arrow Below to look through the pages')

        const Information = new Discord.MessageEmbed()
        .setColor("#FF7000")
        .setTitle('Informations')
        .addFields('`!ping`', `Shows you the Bot Ping!`)
        .addFields('`!collect`', `Bot would listen to whatever you say and place it in an embed`)
        .addFields('`!userinfo`', `Shows Players / Authors User infomations`)
        .addFields('`!Botinfo`', `Bot would Display A Embed Showing the Developer Who created it`)  // Remind me to put emojis later 



       const Fun =  new Discord.MessageEmbed()
       .setColor("#FF00BF")     // could change colors later but yeah :D
       .setTitle('Fun')
       .addFields('`!meme`', `Sends a random meme from SubReddits`)
       .addFields('`!fire`', `Bot would send a gif stating that the User **Who's pinged** is Fired`)
       .addFields('`!say`', `Bot would **Repeat** Everything you Say`)
       .addFields('`!status`', `This command Gives you access to change the Bot Status in a giving Time-Frame`) 
       .addFields('`!hello`', `Bot would Reply with **Hello** back Because why not?`)  // Remind me to Edit these text later :P


    const Moderation = new Discord.MessageEmbed()
    .setColor("#00CCFF")  
    .setTitle('Moderation')
    .addFields('`!clear`', `This command could delete messages in chat up to 100 messages Ps it wont go Over 100`)
    .addFields('`Others Still In Development`', `Self-Explanatory Also want to release some cool stuff but Lack **JS** Knowledge`)



       const pages = [
                    
        Help,
        Information,
        Fun,
        Moderation,

       ]

       const emojiList = ["⬅️", "➡️"]


       const timeout = ('600000');

   pagination(message, page, emojiList, timeout)
	}
});


