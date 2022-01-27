const discord = require('discord.js')
const PrefixSchema = require('../Data/PrefixSchema')

const Command = require("../Structures/Command.js");

module.exports = new Command({
        name: 'setprefix',
        permission: "SEND_MESSAGES",
        aliases: [],

        async run(message, args, client) {

    if(!message.member.permissions.has('SEND_MESSAGES')) return message.reply('you don\'t have permission to use this cmd');

    const newprefix = args[1]
    if(!newprefix) return message.channel.send("please provide a new prefix!");
    if(newprefix.length > 5) return message.channel.send('This prefix is too long, you have max 5 characters');

    let data;
    try {
        
    data = await PrefixSchema.findOne({
            _id: message.guild.id
        })
        if(!data) {
            let newdata = await PrefixSchema.create({
                _id: message.guild.id
            })
            newdata.save()
        } else {
            await PrefixSchema.findOneAndUpdate(
            {
                _id: message.guild.id,
            },
            {
                newPrefix: newprefix
            })
        }
        message.channel.send(`The Prefix has Been set to ${newprefix}`)
    } catch (err) {
        console.log(err)
    }
}


});