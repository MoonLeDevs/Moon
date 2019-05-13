const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token
const TOKEN = "NTc3MTU0NzE2NzYxNDU2NjUw.XNk-bA.P5irSQPb77JzZGkD05Ro93b_jg8";
const prefix = ("-");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('rien').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur de Alexpgm' + member.displayName)
        console.log(`${member.displayName} à rejoind le serveur.`)
    }).catch(console.error)
});

const ban = require('./kick et ban/ban');
require('./embed/RichEmbed');

bot.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
});
        
    if (message.content.startsWith("-kick")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " a été expulser ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Impossible d/executer cette commande !");        
     })
});

bot.login(token);
