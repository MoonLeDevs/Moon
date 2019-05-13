const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token // a garder en version heroku
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
const kick = require ('./kick et ban/kick');
require('./embed/RichEmbed');

bot.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
});


bot.on('message', msg => {
    if (msg.content === "bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    
    if (msg.content === prefix + "help"){
        msg.channel.send("**__**Elementary Help**__")
        .addField("**|Moderation-Menu|🔨|**", "**mhelp**")
        .addField("**|Fun-Menu|🎉|**", "**fhelp**")
        .addField("**|RP-menu|📊|**", "**rphelp**")
        
        
}

{
     if (m.author.id != config.userid) { return; }
          if (!m.guild) return
          if(!m.member.hasPermission("KICK_MEMBERS"));
          if (m.content.startsWith(".kick")) {
    let auth = m.author
    let user = m.mentions.users.first();
          if (user) {
    const member = m.guild.member(user);
          if (member) {
                member.kick("**Bye bye").then(() => {
                m.reply(`${user.tag} a été kick`);
                       }).catch(err => {
                m.reply('I was unable to kick the member');
                       console.error(err);
                  });
           } else {
                m.reply('That user isn\'t in this guild!');
           }
    } else {
                m.reply('You didn\'t mention the user to kick!');
                m.delete()
              }
       }
}

});

bot.login(token); //a garder en version desktop
