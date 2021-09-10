/** @format */

const paginationEmbed = require('discordjs-button-pagination');

const Command = require("../Structures/Command.js");

const { MessageEmbed , MessageButton} = require('discord.js');

module.exports = new Command({
   name: "test",
	description: "test",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
	

const embed1 = new MessageEmbed()
                .setTitle('First Page')
                .setDescription('This is the first page');
 
const embed2 = new MessageEmbed()
                .setTitle('Second Page')
                .setDescription('This is the second page');
 
const button1 = new MessageButton()
                .setCustomId('previousbtn')
                .setLabel('Previous')
                .setStyle('DANGER');
 
const button2 = new MessageButton()
                .setCustomId('nextbtn')
                .setLabel('Next')
                .setStyle('SUCCESS');
 
// Create an array of embeds
pages = [
    embed1,
    embed2,
    //....
    //embedN
];
 
//create an array of buttons
 
buttonList = [
    button1,
    button2
]
 
 
// Call the paginationEmbed method, first three arguments are required
// timeout is the time till the reaction collectors are active, after this you can't change pages (in ms), defaults to 120000
paginationEmbed(interaction, pages, buttonList, timeout);
// There you go, now you have paged embeds

   }
});