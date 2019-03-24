const Discord = require('discord.js');
const bot = new Discord.Client();
/*
const cfg = require('./index.json'); // a garder en version desktop
*/
const token = process.env.token // a garder en version heroku
const prefix = ("/");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('Surveiller').catch(console.error)
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
        msg.reply("t'es désirs son des ordre , des clônes apparait autour de lui.")
        console.log("Une personne ses clonées.")
    }
    if (msg.content === prefix + "substitution"){
        msg.reply("Pas mal , tu te substitue , touche une personne pour uttilisé l'attaque. ")
        console.log("Une personne c'est substitué")
    }
    if (msg.content === prefix + "train"){
        msg.reply("Tu est sur le point d'entrainer cette technique utilse le /confirm pour confirmer l'entrainement")
        console.log("une personne et sur le point de s'entrainer")
    }
    if (msg.content === prefix + "confirm"){
        msg.reply ("Bravo ! tu t'es entrainer a tu a augenter la puissance de ta technique de 20%")
        console.log("une personne a augmenter de train")}
    }
    if (msg.content === prefix + "ringan"){
        msg.reply ("Mm ... L'oeuil devient mauve avec un rond noir tu a desormais le ringan")
        console.log("une personne a augmenter de train")}
    }
    if (msg.content === prefix + "ringan"){
        msg.reply ("Mm ... L'oeuil devient mauve avec un rond noir tu a desormais le ringan")
        console.log("Ringan apparu")}
    }
    if (msg.content === prefix + "sharingan"){
        msg.reply ("L'oeuil rouge qui te hantais ... Et devenue ton ami ... Tu a desormais le Sharingan")
        console.log("Sharingan apparu")}
    });
