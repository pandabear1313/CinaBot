/** @format */

const Command = require("../Structures/Command");

const Discord = require("discord.js");

const cap = require("capitalize-first-letter");

module.exports = new Command({
  name: "rps",
  description: "",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    let user = message.mentions.members.first();
    if (!user)
      return message.reply("Please mention a **valid** user to play with");
    if (user.user.id == message.author.id)
      return message.reply("You can't play with **yourself** smh");
    if (user.user.bot) return message.reply("You can't play with **bots**!");

    let confe = new Discord.MessageEmbed()
      .setDescription(
        `Waiting for **${user.user.username}** to accept your game of **RPS**`
      )
      .setColor("BLUE");

    let confirm = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel("Accept")
        .setStyle("SUCCESS")
        .setCustomId("accept"),
      new Discord.MessageButton()
        .setLabel("Decline")
        .setStyle("DANGER")
        .setCustomId("decline")
    );

    message
      .reply({
        embeds: [confe],
        components: [confirm],
        allowedMentions: {
          repliedUser: false,
        },
      })
      .then((m) => {
        let filter = (button) => button.user.id == user.user.id;
        const collector = m.createMessageComponentCollector({
          filter,
          type: "BUTTON",
          time: 60000,
        });
        collector.on("collect", (button) => {
          if (button.customId == "decline") {
            button.deferUpdate();
            return collector.stop("decline");
          }
          button.deferUpdate();
          let pick = new Discord.MessageEmbed()
            .setTitle(`${message.author.username} VS. ${user.user.username}`)
            .setColor("RANDOM")
            .setDescription("Choose either 🪨, 📄, or ✂️");

          let choices = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
              .setCustomId("rock")
              .setStyle("SECONDARY")
              .setEmoji("🪨"),
            new Discord.MessageButton()
              .setCustomId("paper")
              .setStyle("SECONDARY")
              .setEmoji("📄"),
            new Discord.MessageButton()
              .setCustomId("scissors")
              .setStyle("SECONDARY")
              .setEmoji("✂️")
          );

          m.edit({
            embeds: [pick],
            components: [choices],
          });

          collector.stop();

          let users = new Set();
          users.add(message.author.id);
          users.add(user.user.id);
          let ping, pong;
          let filter = (b) => users.has(b.user.id);
          const collect = m.createMessageComponentCollector({
            type: "BUTTON",
            time: 60000,
          });
          collect.on("collect", (b) => {
            users.delete(b.user.id);
            if (b.user.id == user.user.id) {
              ping = b.customId;
              b.reply({
                content: `You have choosen **${cap(b.customId)}**`,
                ephemeral: true,
              });
            }
            if (b.user.id == message.author.id) {
              pong = b.customId;
              b.reply({
                content: `You have choosen **${cap(b.customId)}**`,
                ephemeral: true,
              });
            }
            if (users.size == 0) return collect.stop();
          });
          collect.on("end", (c, reason) => {
            if (reason == "time") {
              let timeout = new Discord.MessageEmbed()
                .setTitle("Timeout")
                .setColor("RED")
                .setDescription(
                  "A player did not pick in time, so I cancelled the game"
                );
              m.edit({
                embeds: [timeout],
                components: [],
              });
            } else {
              if (ping == "rock" && pong == "scissors") {
                let embed = new Discord.MessageEmbed()
                  .setTitle(`${user.user.username} Wins!`)
                  .setColor("GREEN")
                  .setDescription("**Rock** made **Scissors** broken!")
                  .setFooter("Winner: *Rock*");
                m.edit({
                  embeds: [embed],
                  components: [],
                });
              } else if (ping == "scissors" && pong == "rock") {
                let embed = new Discord.MessageEmbed()
                  .setTitle(`${message.member.user.username} Wins!`)
                  .setColor("GREEN")
                  .setDescription("**Rock** made **Scissors** broken!")
                  .setFooter("Winner: *Rock*");
                m.edit({ embeds: [embed], components: [] });
              } else if (ping == "scissors" && pong == "paper") {
                let embed = new Discord.MessageEmbed()
                  .setTitle(`${user.user.username} Wins!`)
                  .setColor("GREEN")
                  .setDescription(
                    "**Scissors** cuts **Paper**! Rest in pieces!"
                  )
                  .setFooter("Winner: *Scissors*");
                m.edit({ embeds: [embed], components: [] });
              } else if (ping == "paper" && pong == "scissors") {
                let embed = new Discord.MessageEmbed()
                  .setTitle(`${message.author.username} Wins!`)
                  .setColor("GREEN")
                  .setDescription(
                    "**Scissors** cuts **Paper**! Rest in pieces!"
                  )
                  .setFooter("Winner: *Scissors*");
                m.edit({ embeds: [embed], components: [] });
              } else if (ping == "paper" && pong == "rock") {
                let embed = new Discord.MessageEmbed()
                  .setTitle(`${user.user.username} Wins!`)
                  .setColor("GREEN")
                  .setDescription("**Paper** wraps up **Rock**!")
                  .setFooter("Winner: *Paper*");
                m.edit({ embeds: [embed], components: [] });
              } else if (ping == "rock" && pong == "paper") {
                let embed = new Discord.MessageEmbed()
                  .setTitle(`${message.member.user.username} Wins!`)
                  .setColor("GREEN")
                  .setDescription("**Paper** wraps up **Rock**!")
                  .setFooter("Winner: *Paper*");
                m.edit({ embeds: [embed], components: [] });
              } else {
                let embed = new Discord.MessageEmbed()
                  .setTitle("Draw!")
                  .setColor("BLUE")
                  .setDescription(`Both players chose ${mem}!`)
                  .setFooter("Winner: *None*");
                m.edit({ embeds: [embed], components: [] });
              }
            }
          });
        });
        collector.on("end", (collected, reason) => {
          if (reason == "time") {
            let embed = new Discord.MessageEmbed()
              .setTitle("Timeout")
              .setColor("RED")
              .setDescription(
                `**${user.user.username}** did not confirm before 60 seconds of time`
              );
            m.edit({
              embeds: [embed],
              components: [],
            });
          }
          if (reason == "decline") {
            let embed = new Discord.MessageEmbed()
              .setTitle("Declined")
              .setColor("RED")
              .setDescription(
                `**${user.user.username}** has declined your game of RPS`
              );
            m.edit({
              embeds: [embed],
              components: [],
            });
          }
        });
      });
  },
});
