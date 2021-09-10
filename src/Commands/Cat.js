const { get } = require("https");
const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
    let punched = message.mentions.members.first();
    
     if(!punched) return message.reply("Vous devez mentionner un utiliseur pour le **taper**")

    .get("https://neko-love.xyz/api/v1/punch", (res) => {
    const { statusCode } = res;
    if (statusCode != 200) {
        res.resume;
    }
    res.setEncoding("utf8");
    let rawData = '';
    res.on("data", (chunk) => {
        rawData += chunk;
    });
    res.on("end", () => {
        try {
            const parsedData = JSON.parse(rawData);

               let embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setDescription(`Aïe ! ${message.author} a frappé ${punched}`)
   .setImage(parsedData.url)
   .setTimestamp()
            
            message.channel.send(embed)

            
        } catch (e) {
            console.error(e.message);
        }
    });
}).on("error", (err) => {
    console.error(err.message);
});
}

module.exports.help = {
    name: 'punch'
};