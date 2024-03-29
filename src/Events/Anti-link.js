const Event = require("../Structures/Event.js");
const ChannelIgnoreSchema = require("../Data/ChannelIgnoreSchema");

module.exports = new Event("messageCreate", async (client, message) => {

    if (message.author.bot) return;

     if (message.member.permissions.has('MANAGE_GUILD')) return;

    const data = await ChannelIgnoreSchema.findOne({
        _id: message.guild.id
    })

  if(data === null || !data.isIgnored) return;

    const deleteMessage = (msg) => {
        message.delete();
        setTimeout(() => {
            msg.delete();
        }, 10_000)
    }

   
    const links = ['discord.gg/', 'discord.com/invite/', 'https://', 'discord.io/', 'youtube.com/'];

    for (const link of links) {
        if (message.content.includes(link)) return message.channel.send({
            content: `This link seems sketchy to me, i wouldn't click on that <@${message.author.id}> to be honest!`
        }).then(msg => deleteMessage(msg));
    }

});