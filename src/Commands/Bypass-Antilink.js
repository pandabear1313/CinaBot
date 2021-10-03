const Command = require("../Structures/Command.js");
const ChannelIgnoreSchema = require("../Data/ChannelIgnoreSchema");

const Discord = require("discord.js");

module.exports = new Command({
    name: "ignore",
    description: "This command would ignore some chats from links being posted",
    permission: "ADMINISTRATOR",
    async run(message, args, client) {

        if (!args[1]) return message.channel.send({content: "Please give this command 'on / off'."});
        const status = args[1];
        let data;

        data = await ChannelIgnoreSchema.findOne({
            _id: message.guildId
        })
        // message.channel.send({content: `The status is now: ${data.isIgnored === true ? "on" : "off"}`});
        if (!data) {
            let newData = await ChannelIgnoreSchema.create({
                _id: message.guildId,
                isIgnored: status
            })
            newData.save();
        } else {
            switch(args[1]) {
                case 'on':
                    //code to turn the thing on
                    message.channel.send({content: "on thingy"});
    
                    await ChannelIgnoreSchema.findOneAndUpdate({
                        _id: message.guild.id,
                        isIgnored: true,
                    })
                break;
                case 'off':
                    //code to turn the thing off
                    message.channel.send({content: "off thingy"});
    
                    await ChannelIgnoreSchema.findOneAndUpdate({
                        _id: message.guild.id,
                        isIgnored: false,
                    })
                break; 
                default: 
                    //a default message
                    message.channel.send({content: "use 'on or off'."})
            }
            
        }
        message.channel.send({content: `The status is set to: ${status}`});
        console.log(data)
    }
});