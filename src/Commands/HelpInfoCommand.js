/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

const{client, message, MessageEmbed } = require("discord.js");

const { pagination } = require("reconlx");


module.exports = new Command({
	name: "helpinfo",
	description: "More adv. help command",
	permission: "SEND_MESSAGES",
	run: async(message, args, client,) => {

        const embed1 = new MessageEmbed().setTitle('one').setFooter('test')
        const embed2 = new MessageEmbed().setTitle('two')

        const embeds = [embed1, embed2];
    
	
        pagination({
            embeds : embeds,

            message : message,

            time: 4000,
        })
	}
});