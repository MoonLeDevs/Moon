const Discord = require('discord.js');
const bot = new Discord.Client();
/*
const cfg = require('./index.json'); // a garder en version desktop
*/
const token = process.env.token // a garder en version heroku
const prefix = ("/");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('Manger Le Riz De Jean Dolri').catch(console.error)
});
bot.login(token)
bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur, va lire les règles et appui sur la réaction pour avoir ton grade' + member.displayName)
        bot.on(`${member.displayName} à rejoind le serveur.`)
    }).catch(console.error)
});



bot.on('message', msg => {
    if (msg.content === "kick"){
        msg.reply("Ne reviens plus.")
    }
    if (msg.content === prefix + "multiclonage"){
        msg.reply("ERROR LIBS NOT FOUND.")
        console.log("Une personne ses clonées.")
    }
    if (msg.content === prefix + "substitution"){
        msg.reply("FIGHT:SUBSTITUTION-NOTFOUND. ")
        console.log("Une personne c'est substitué")
    }
    if (msg.content === prefix + "train"){
        msg.reply("ERROR SYSTEME RESET")
        console.log("une personne et sur le point de s'entrainer")
    }
    if (msg.content === prefix + "confirm"){
        msg.reply ("ERROR 98-2")
        console.log("une personne a augmenter de train")
    
    }
    if (msg.content === prefix + "ringan"){
        msg.reply ("NOT-FOUND")
        console.log("ringan apparu")
    }
    if (msg.content === prefix + "sharingan"){
        msg.reply ("CONSOLEERRORSYNTAX")
        console.log("sharingan apparu")
    }    
});
