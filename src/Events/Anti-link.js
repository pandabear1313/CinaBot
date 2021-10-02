const Event = require("../Structures/Event.js");

module.exports = new Event("messageCreate", async (client, message) => {

    if (message.author.bot) return;

   // if (message.member.permissions.has('MANAGE_MESSAGES'))

    const deleteMessage = (msg) => {
        message.delete();
        setTimeout(() => {
            msg.delete();
        }, 10_000)

        const links = ['discord.gg/', 'discord.com/invite/', 'https://', 'discord.io/', 'youtube.com/']; // oke do nodejs -v

        for (const link of links) {
            if (message.content.includes(link)) return message.channel.send({
                content: `This link seems sketchy to me, i wouldn't click on that <@${message.author.id}> to be honest!`
            }).then(msg => deleteMessage(msg));
        }

        // if(!message.guild) return;
        // if(message.member.permissions.has('MANAGE_MESSAGES'))
        // function deleteMessage() {

        //     message.delete();
        //     message.channel.send("I wouldn't click on that to be honest")

        // }

        //  const links = ['discord.gg/', 'discord.com/invite/'];
        //  const forbiddenLinks = ['https://', 'discord.io/', 'youtube.com/']

        // forbiddenLinks.forEach((link) => {
        //     if(!message.content.includes(link)) return deleteMessage();
        // })

        //  for(const link of links) {

        //     if(!message.content.includes(link)) return;

        //     const code = message.content.split(link)[1].split(" ")[0];

        //     const isGuildInvite = message.guild.invites.cache.has(code);


        //     if(!isGuildInvite) {

        //         try{

        //             const vanity = await  message.guild.fetchVanityData();
        //             if(code !== vanity?.code) return deleteMessage();
        //         }catch(err) {
        //             deleteMessage();
        //         }
        //     }
        //  }
    }
});