/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "rd",
	description: "Hello!",
	permission: "SEND_MESSAGES",

    async run(message, args, client){

          const simplydjs= require("simply-djs")
          simplydjs.tictactoe(message,{
            embedColor:"GREEN"
          })
        }
      })
    