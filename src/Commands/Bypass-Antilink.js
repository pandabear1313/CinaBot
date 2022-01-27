const Command = require("../Structures/Command.js");
const ChannelIgnoreSchema = require("../Data/ChannelIgnoreSchema");

const Discord = require("discord.js");

module.exports = new Command({
    name: "ignore",
    description: "This command would ignore some chats from links being posted",
    permission: "ADMINISTRATOR",
    async run(message, args, client) {

        const getDataAndUpdate = async isIgnored => {
            await ChannelIgnoreSchema.findOneAndUpdate(
            {
                _id: message.guild.id
            },
            {
                isIgnored: isIgnored
            })
            
            message.channel.send({content: `The status is set to: ${status}`});
        }

        if (!args[1]) return message.channel.send({content: "Please give this command 'on / off / status'."});
        const status = args[1];
        let data;  

        data = await ChannelIgnoreSchema.findOne({
            _id: message.guild.id
        })
        
        if (!data) {
            let newData = await ChannelIgnoreSchema.create({
                _id: message.guild.id
            })
            newData.save();
        }// else {
            switch(args[1]) {
                case 'on':
                    //code to turn the thing on
    
                    getDataAndUpdate(true);
                break;
                case 'off':
                    //code to turn the thing off
    
                    getDataAndUpdate(false);
                break;
                case 'status':
                    if (!data) return message.channel.send({content: "There was no data found ;)"});
                    message.channel.send({content: `The status currently: ${data.isIgnored ? "on" : 'off'}`});
                    break;
            }
        // }
    }
});


