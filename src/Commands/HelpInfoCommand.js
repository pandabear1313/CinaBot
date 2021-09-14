/** @format */

const paginationEmbed = require("discordjs-button-pagination");

const Command = require("../Structures/Command.js");

const { MessageEmbed, MessageButton } = require("discord.js");

module.exports = new Command({
  name: "helpinfo",
  description: "More adv. help command",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    const Help = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Bot Information")
      .addField("**Prefix**", "Bot prefix is `!`")
      .addField(
        "**Pages**",
        "`1. Available Commands`, `2. Informations`, `3. Fun`, `4. Moderation`"
      )
      .addField(
        "**Navigation Help **",
        "Use the arrow Below to look through the pages"
      );

    const Information = new MessageEmbed()
      .setColor("#FF7000")
      .setTitle("Informations")
      .addField("`!ping`", `Shows you the Bot Ping!`)
      .addField(
        "`!collect`",
        `Bot would listen to whatever you say and place it in an embed`
      )
      .addField("`!userinfo`", `Shows Players / Authors User infomations`)
      .addField(
        "`!Botinfo`",
        `Bot would Display A Embed Showing the Developer Who created it`
      ); // Remind me to put emojis later

    const Fun = new MessageEmbed()
      .setColor("#FF00BF") // could change colors later but yeah :D
      .setTitle("Fun")
      .addField("`!meme`", `Sends a random meme from SubReddits`)
      .addField(
        "`!fire`",
        `Bot would send a gif stating that the User **Who's pinged** is Fired`
      )
      .addField("`!say`", `Bot would **Repeat** Everything you Say`)
      .addField(
        "`!status`",
        `This command Gives you access to change the Bot Status in a giving Time-Frame`
      )
      .addField(
        "`!hello`",
        `Bot would Reply with **Hello** back Because why not?`

     )
     .addField(
         "`!hug`",
         `You want to send a random gif hugging your friends Im your command`

    )

    .addField(
        "`!pat`",
        `You want to send a random gif patting your friends look no futher i could do just that`

    )

    .addField(
        "`!ttc`",
        `You want to challenge your friends to see who's the best at Tic-Tac-Toe?, look no futher!`
    )

    .addField(
        "`!cat`",
        `This command would send a random picture of a cute cat aswell as send a random fact about them you wouldn't know`
    )

    .addField(
        "`!dog`",
        `This command would send a random picture of a cute dog aswell as send a random fact about them you wouldn't know`
    

      ); // Remind me to Edit these text later :P

    const Moderation = new MessageEmbed()
      .setColor("#00CCFF")
      .setTitle("Moderation")
      .addField(
        "`!clear`",
        `This command could delete messages in chat up to 100 messages Ps it wont go Over 100`
      )
      .addField(
        "`Others Still In Development`",
        `Self-Explanatory Also want to release some cool stuff but Lack **JS** Knowledge`
      );

    const button1 = new MessageButton()
      .setCustomId("previousbtn")
      .setLabel("Previous")
      .setStyle("DANGER");

    const button2 = new MessageButton()
      .setCustomId("nextbtn")
      .setLabel("Next")
      .setStyle("SUCCESS");

    const pages = [Help, Information, Fun, Moderation];

    const timeout = "600000";

    const buttonList = [button1, button2];

    // Call the paginationEmbed method, first three arguments are required
    // timeout is the time till the reaction collectors are active, after this you can't change pages (in ms), defaults to 120000
    paginationEmbed(message, pages, buttonList, timeout);
  },
});