/** @format */

const Event = require("../Structures/Event.js");

const Discord = require("discord.js");

module.exports = new Event("guildMemberAdd", (client, member) => {
    const channel = member.guild.channels.cache.find(
        c => c.name == "welcome-and-goodbye"
    );

    if (!channel) return;

    const embed = new Discord.MessageEmbed();

    embed
        .setTitle(member.user.tag)  
        .setColor("#10FF00")
        .setAuthor("New Member") 
        .setThumbnail(member.user.avatarURL({ dynamic: true }))
        .addFields(
            {
                name: "Account Created",
                value: member.user.createdAt.toUTCString(),
                inline: true
            },
            {
                name: "User Joined",
                value: member.joinedAt.toUTCString(),
                inline: true
            }
        )
        .setTimestamp(member.joinedTimestamp);

    channel.send({ embeds: [embed] });
})