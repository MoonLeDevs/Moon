const config = require('./config.json');
const Discord = require('discord.js');
const fs = require('fs');
const ms = require('ms');
const coins = require('./coins.json');

const bot = new Discord.Client({ disableEveryone : true});

bot.on('ready', async () => {
    console.log(`${bot.user.username} est opérationelle !`);
    bot.user.setActivity(`Préfix : "-!help"`)
})

bot.on(`message`, async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm')return;

    let prefix = config.prefix;
    let messageArray = message.content.split(' ');
    let command = messageArray[0];
    let args = messageArray.slice(1);

    //roll
    if (command === `-!roll`) {
        if(message.content.startsWith(prefix + 'roll')) {
            let args = message.content.split(' ').slice(1); 
            let nb = Math.floor(Math.random() * args[0]);
            if(!args[0]) return message.reply("Veuillez mettre un nombre");
            message.reply(`Vous avez roll : ${nb}.`);
        console.log('Roll')
        }
    }

    //Information sur le serveur.
    if (command === `-!serverinfo`) {
        let servIcon = message.guild.iconURL;
        let servEmbed = new Discord.RichEmbed()
        .setTitle('**Les Gardiens Des 6 Éléments !**')
        .setURL('https://discord.gg/q7nBZ7B')
        .setDescription('Informations sur le Serveur.')
        .setColor('#dc134c')
        .setThumbnail(servIcon)
        .addField('Nom du serveur', message.guild.name)
        .addField('Créatrice', ':white_flower: Patate Girl :white_flower:#2187')
        .addField('Date de création du serveur', '05/05/19 21:34:31')
        .addField('**Présentation📜**', 'Ce serveur est un serveur RP. Il est basé sur la magie, et les éléments, c\'est un serveur évolutif. C\'est à dire qu\'il évolue entre le temps, ce n\'est pas un univers fixe !  Le RP du serveur est basé par les actions des personnes, la vie de tous les jours que vous avez le pouvoir de changer. En faisant avancer le monde ou en voulant le détruire. Enfin, le monde... Plutôt l\'île d\'Ardamir, qui est le lieu du RP.   En clair c\'est un serveur où vous avez le choix, où vous forgez la destinée de ce monde. Le staff ne fait que rajouter des choses pour élargir vos horizons ou régler les problèmes mais vous créez l\'histoire.')
        .addField('**Statistiques (Membre) 📊**', message.guild.memberCount) 
        .addField('**Statistiques (Bots) 📊**', "14") 
        .addField('Salons 📁', '108')
        .addField('Rôles🎇-', '76')
        .setFooter('Le bot est un bot fait sur mesure. De ce fait, les droits du bot reviennent au serveur "Les gardiens des 6 élements" ( ID : 574680347128889384 ). Aucune copie de ce bot est autorisé.')

        return message.channel.send(servEmbed);
    }

    //-!help 

    if (command === `-!help`) {

        let botIcon = bot.user.displayAvatarURL;
        let embed = new Discord.RichEmbed()
            .setDescription('Commandes Disponible')
            .setColor('#dc134c')
            .setThumbnail(botIcon)
            .addField('Informations📜', '`help` | `serverinfo`')
            .addField('``` ```' , '``` ```')
            .addField('Modération🔨', '`clear` | `Ban` | `Mute` | `Kick`')
            .addField('``` ```' , '``` ```')
            .addField('RolePlay🎲', '`roll`')
            .addField('``` ```' , '``` ```')
            .addField('Fun🎉', '`say` | `azuki` | `ayr` | `aynee` | `pussy` | `onii` ');

        return message.channel.send(embed);
    }
    //report
    if (command === `${prefix}report`) {

    let reportedUser = message.guild.member(message.mentions.users.first () || message.guild.members.get(args[0]));
    if (!reportedUser) {
      return message.channel.send ("L'utilisateur n'existe pas !");
    }
    let reportedReason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor('#dc143c')
    .addField("Ticket crée par :", `${message.author}`)
    .addField('``` ```' , '``` ```')
    .addField("Utilisateur Rapporté", `${reportedUser}`)
    .addField('``` ```' , '``` ```')
    .addField('Dans', message.channel)
    .addField('``` ```' , '``` ```')
    .addField('Raison', reportedReason);

    let reportChannel = message.guild.channels.find(`name`, "⛔reports⛔");
    if (!reportChannel) {
      return channel.send('Canal introuvable')
    }

    message.delete();
    reportChannel.send(reportEmbed);
  }


  //afk
  if (command === `${prefix}afk`) {
  let reason = args.join(' ') ? args.join(' ') : 'Je suis accutellement afk.';
  let afklist = bot.afk.get(message.author.id);

  if (!afklist) {
      let construct = {
          id: message.author.id,
          reason: reason
      };

      message.channel.send(message.author.id, construct);
      return message.reply(`Tu es désormais Afk pour : ${reason}`).then(msg => msg.delete(5000));
  }

}

  //commande personalisé.

  if (command === `-!checkuser:Ayr`) {
    let servIcon = message.guild.iconURL;
    let ayrEmbed = new Discord.RichEmbed()
    .setTitle('**__Informations sur [XB]Ayr#6748__**')
    .addField('**Pseaudo (Discord):**', '[XB]Ayr#6748')
    .addField('**Pseaudo RolePlay :**', 'Ayr Swalt')
    .addField('**Rôle RP :**', 'Chef de l\'air.')
    .addField('**Rôle HRP :**', 'Membre')  
    .setFooter('Le bot est un bot fait sur mesure. De ce fait, les droits du bot reviennent au serveur "Les gardiens des 6 élements" ( ID : 574680347128889384 ). Aucune copie de ce bot est autorisé.')

    return message.channel.send(ayrEmbed);
}

  if (command === `-!azuki`) {
        message.channel.send("Azuki ? l\'admin sympathique et cool (qui taff tout le temps), celui qui rigole et qui prend jamais la grosse tête, le tueur de démons. En plus, la légende raconte que Saitama et Naruto sont ses disciples ``` ``` Azuki fut l\'un des premiers arrivés du temps nouveau. Il est une personne bien particulière. En un premier temps, il est connu comme tueur de démons lors des tout premiers temps. Ce qui le rend réellement connu est cependant une guerre Quelqu\'un avait pris le pouvoir de l\'eau par la tromperie, l\'homme du prénom de Zerphe déclara la guerre contre la terre. Une guerre qui fut bien bref, cinq contre deux à chaques batailles et ce fut la minorité qui gagne, la terre avec Salmar, Azuki et Onii. Il est cependant quelqu\'un de doux, ayant de l\'amitié envers Suki, Ayr, Onii et Salmar, ils le savent eux. Il mourut au champ de bataille en voulant défendre la montagne mais la destinée renversa cette acte. Il revint à la vie par un miracle inconnu.at")
    }

  if (command === `-!aynee`) {
            message.channel.send("Tss...")
        
  }
  if (command === `-!ayr`) {
    message.channel.send("Quelqu\'un qui n\'est pas du serveur, quelqu\'un a qui il ne faut pas faire confiance, enfin, c'est personne...")
}

    if(command === `-!onii`) {
        message.channel.send("omae wa mou shindeiru")
    }

    if(command === `-!pussy`) {
        message.channel.send("Flemme de te la montrer")
    }




//Banissement

    if (command === `${prefix}ban`) {
  if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
  let member = message.mentions.members.first()
  if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
  if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
  if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglass:")
  message.guild.ban(member, {days: 7})
  message.channel.send('**' + member.user.username + '** a été banni :white_check_mark:')
    }

    if (command === `${prefix}banhammer`) {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous ne pouvez pas toucher le Banhammer . . .")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
        if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglass:")
        message.guild.ban(member, {days: 7})
        message.channel.send('**' + member.user.username + '** a été banni :white_check_mark:')
          }

          //kick
          if (command === `${prefix}kick`) {
          if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
          let member = message.mentions.members.first()
          if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
          if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
          if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")
          member.kick()
          message.channel.send('**' + member.user.username + '** a été exclu :white_check_mark:')
       }


       //mute 
       if (command === `${prefix}mute`) {
       if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Membre introuvable")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre")
       if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("Je ne peux pas mute ce membre")
       let muterole = message.guild.roles.find(role => role.name === 'Muted')
       if (muterole) {
           member.addRole(muterole)
           message.channel.send(member + ' a été mute :white_check_mark:')
       }
       else {
           message.guild.createRole({name: 'Muted', permissions: 0}).then(function (role) {
               message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                   channel.overwritePermissions(role, {
                       SEND_MESSAGES: false
                   })
               })
               member.addRole(role)
               message.channel.send(member + ' a été mute :white_check_mark:')
           })
       }
    }

    //Say

    if (command === `${prefix}say`) {
if (!message.member.hasPermission('CHANGE_NICKNAME'))
    return message.channel.send("Impossible d\'effectuer cette commande par manque de permissions.");

    let messageToBot = args.join(' ');
    message.delete().catch();
    message.channel.send(messageToBot);
    }


    //Message de Bienvenue.

    bot.on('guildMemberAdd', member => {
        member.createDM().then(channel => {
            return channel.send('Bienvenue sur les gardiens des 6 éléments :' + member.displayName)
            console.log(`${member.displayName} à rejoins le serveur.`)
        }).catch(console.error)
    });


    //clear

    if (command === `-!clear`) {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
    let count = args[1]
    if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
    if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
    if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
    message.channel.bulkDelete(parseInt(count) + 1)
    }
});

bot.login(config.token);
