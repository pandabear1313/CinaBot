const Event = require("../Structures/Event.js");

const fetch = require("node-fetch");

module.exports = new Event("messageCreate", (client, message) => {
    if (message.author.bot) return;
	
    if (message.channel.id === "788512538588479501") { //for a specific channel
        fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}&key=W4GWwI52Ez3QgWATX2UOiqD8Y`)
          .then(res => res.json())
          .then(data => {
              message.channel.send(data.response)
          })
          .catch(err => {
              console.log(err);
              message.channel.send("There aren't any results, sorry :( .")
          })
    }
}); //for a specific channel
   