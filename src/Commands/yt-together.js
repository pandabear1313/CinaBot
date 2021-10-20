const Command = require("../Structures/Command.js");

const fetch = require("node-fetch");

module.exports = new Command({
    name: "yt-t",
    description: "Watch youtube with ur friends ^_^",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        let channel = message.member.voice.channel;
        if (!channel)
            return message.channel.send(
                `:x: You need to be in a voice channel first!`
            );
        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755600276941176913",
                target_type: 2,
                temporary: false,
                validate: null,
            }),
            headers: {
                Authorization: `Bot ${client.token}`,
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((invite) => {
                if (!invite.code)
                    return message.channel.send(
                        `${client.xmark} Sorry, I cannot start a YT Together`
                    );
                message.channel.send(
                    `:white_check_mark: https://discord.com/invite/${invite.code}`
                );
            });
    },
});