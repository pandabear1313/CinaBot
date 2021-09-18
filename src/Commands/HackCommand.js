const Discord = require("discord.js");
const ms = require("ms");
const Command = require("../Structures/Command");

let ips = [
    '14.621.152.163.87.5',
    '96.492.139.149.12.8',
    '84.424.522.985.24.1',
    '82.245.242.874.83.13',
    '91.532.981.149.25.1',
    '24.123.091.134.24.4',
    '82.244.251.142.15.9',
    '21.981.847.109.12.3',
    '69.420.360.360.21.9',
    '87.242.081.018.24.6'
  ];
 

  let emails = [
      `sucks@gmail.com`,
      `isdumbdumb@gmail.com`,
      `@yahoo.com`,
    `@isdumb.io`,
      `@noob.com`,
      `idiot@noob.net`,
    `gae@wannabe.com`,
      `hacked@noob.com`,
      `artifical.intelegance@bot.com`,
      `getgood@ha.xyz`,
      `nub.nub@nub.nub`,
      `yes.no@yesnt.exe`,
      `obama@prism.old`,
      `joe@bidome.new`,
      `badpickup@line.tinder`,
    `dogwater@yes.com`
  ];
  
  
  let ccis = [
      '5430112115445621',
      '9283109176382620',
      '1384378743864386',
      '2473897583563753',
      '3978564875648756',
      '4878567578565787',
      '8573647365736573',
      '7756542654265426',
      '6789768976789878',
      '6942021360420699',
      '9874899483648346',
      '0876578976374634',
      '7374826537265742',
      '942i758265487562',
      '1432874628746328',
      '9876546789098765',
      '8765678908765467',
      '6784932483724232',
      '7867524725278527',
      '8765456789876545',
      '3647284257425423',
  ];
  
  
  let names = [
  'Josh',
  'Ronald',
  'Joe',
  'Liam',
  'Noah',
  'Oliver',
  'Henry',
  'James',
  'Alexander',
  'Hugh jass',
  'Mike croch',
  'Liam',
  'Aria',
  'Daniel',
  'Sebastian',
  'Gabriel',
  'Jacob',
  'Elias',
  'Matthew',
  'Diamond',
  'Peter'
  ]

let passwords = [
    'idiotsandwich12345',
    'noobgaedumass360',
    'imadoptedlolololololololol',
    'reconispogiwannamarryhim',
    'joemamaurmama',
    'yesisyesyesimnub',
    '12345',
    'abcdef',
    'ilikecoconut12345',
    'penpinapplepinapplepen',
    'sussyimposter541',
    '!oyRewsY43',
    '#LWxmxYX0W',
    'wwq9XHb1PdLxGQP',
    'sWggjN3Rtvjfpl2',
    'y5GUBu1R4a2vEMg',
    ];

let Broswers = [
   'Nsfw imagies',
   'furry imagies',
   'How to sex online',
   'how to boil water',
   'High paying jobs for people who hate math',
   'How to spell apple lmao',
   'Do cars run out of honk',
   'how fast can a Tv run',
   'How to get Free V-Bucks on Ebay',
   'Free v-bucks generators',
   'Discord nitro hack',
   'Is Zulater human?',
   'how to hack in Roblox',
   'How to buy a keyboard online',
   'How to cheat on my Girlfriend',
   'Cringe Tiktok Dances'
];

let words = [
  'lol',
  'lmao',
  'ok',
  'ofc',
  'bro',
];

const email = emails[Math.floor(Math.random() * emails.length)];

const password = passwords[Math.floor(Math.random() * passwords.length)];

const ip = ips[Math.floor(Math.random() * ips.length)];

const Broswer = Broswers[Math.floor(Math.random() * Broswers.length)];

const word = words[Math.floor(Math.random() * words.length)];

const cci = ccis[Math.floor(Math.random() * ccis.length)];

const name = names[Math.floor(Math.random() * names.length)];


module.exports = new Command({
   name: "hack",
  description: "Bot sends a fake hack script to scare the user",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {

    const hacked = message.mentions.users.first();
    const user = message.mentions.users.first();
    if(user == client.users.cache.get(message.author.id))
    {
      return message.channel.send(" ok, You are hacked Pick someone else")
    }
            function wait(ms){
            let start = new Date().getTime();
            let end = start;
            while(end < start + ms) {
              end = new Date().getTime();
           }
         }

if(!user)
{
  return message.reply("Who to hack? Please Mention him");
}
const prompt = await message.channel.send(`Hacking ${user ? hacked.username : hacked} now...`);
    
   await wait(2700);
     await  prompt.edit('Finding discord login...');
     await wait(2700);
     await  prompt.edit(`Found:\n**Email**: \`${user.username}${email}\`\n**Password**: \`${password}\``);
     await  wait(3700);
     await  prompt.edit('Fetching dms');
     await  wait(3700);
     await prompt.edit(`Listing most common words... **${word}**`);
     await  wait(2700);
     await  prompt.edit(`Injecting virus into discriminator #${hacked.discriminator}`);
    await  wait(3700);
     await  prompt.edit('Virus injected');
     await  wait(3700);
    
   await prompt.edit(`Finding IP address  ${ip}`);
    await wait(5000);
   await prompt.edit(`${user.username}'s credit card number : ${cci}`);
    await wait(5000);
    await prompt.edit(`Viewing Broswer History.....`);
    await wait(5000);
    await prompt.edit(`I found **${Broswer}** while searching his history`);
    await wait(5000);
   await  prompt.edit('Spamming email...');
   await wait(6700);
   await  prompt.edit(`Selling their data to ${name} on facebook...`); // add emmojis later & text
  await   wait(3700);
  let embed = new Discord.MessageEmbed()
  .setDescription(`A Dangerous and very ORIGINAL HACKING of ${user ? hacked.username : hacked} is just completed  `)
  .setColor("#FF0000")
  await prompt.delete
   await  message.channel.send({ embeds: [embed] });
    

  }
})


