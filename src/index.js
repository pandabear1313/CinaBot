/** @format */

console.clear();

const Client = require("./Structures/Client.js");

const config = require("./Data/config.json");

const client = new Client();

client.on('ready', () => {
    process.setMaxListeners(0);
    console.log(`Client: Ready`);
    console.log(`Logged in: ${client.user.tag}`);
       
    client.user.setStatus('Online');
    
    let i = 0;
    setInterval(async () => {
    const activities = [
    `Your Every Move`,
    ];
    client.user.setActivity(`${activities[i++ % activities.length]}`, { type: 'WATCHING' })}, 10000000  )


    
});

client.start(config.token);