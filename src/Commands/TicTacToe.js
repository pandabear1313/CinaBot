/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "ttc",
	description: "Hello!",
	permission: "SEND_MESSAGES",

    async run(message, args, client){

          const simplydjs= require("simply-djs")
          simplydjs.tictactoe(message,{
            embedColor:"GREEN"
          })
        }
      })
    