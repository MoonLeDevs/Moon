const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token // a garder en version heroku
const prefix = ("-");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('Regarder Azuki, Sinah, Yusaki et Salmar').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur 4 éléments !' + member.displayName)
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


bot.on('message', msg => {
    if (msg.content === prefix + "help"){
        msg.channel.send("__Elementary Help__")
        .addField("|Moderation-Menu|:hammer:|", "mhelp")
        .addField("|Fun-Menu|:tada:|", "fhelp")
        .addField("|RP-menu|:bar_chart:|", "rphelp**")
    }
    if (msg.content.match(/salut/i)) {
            msg.reply('Je suis d\'accord avec toi.')
    }
    if (msg.content === prefix + "site"){
        msg.channel.send("https://alexpgm.000webhostapp.com/")
        console.log("Une personne a demandé pour aller sur ton site.")
    }

});

bot.login(token); //a garder en version heroku
