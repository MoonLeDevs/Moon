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
    if (msg.content === "sharingan"){
        msg.reply("L'oeuil rouge ressort en toi ... C'est la technique du Sharingan ... La prochaine attaque de l'advairsaire tu copira.")
    }
    if (msg.content.match(/mpx en force/i)) {
            msg.reply('Je suis d\'accord avec toi la mpx est la meileure.')
    }
    if (msg.content === prefix + "multiclonage"){
        msg.channel.send("Une petite fumée se forme autour de lui , il se clone.")
        console.log("Une personne ses clonées")
    }
 
});
