/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "ttc",
	description: "Play TicTacToe with your friends let's see who has the smartest and strategic persons",
	permission: "SEND_MESSAGES",

    async run(message, args, client){

          const simplydjs= require("simply-djs")
          simplydjs.tictactoe(message,{
            embedColor:"GREEN"
          })
        }
      })
    