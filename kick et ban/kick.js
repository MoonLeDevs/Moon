{
          if (!message.guild) return
          if(!message.member.hasPermission("KICK_MEMBERS"));
          if (message.content.startsWith(".kick")) {
    let auth = message.author
    let user = message.mentions.users.first();
          if (user) {
    const member = message.guild.member(user);
          if (member) {
                member.kick("**Bye bye").then(() => {
                message.reply(`${user.tag} a été kick`);
                       }).catch(err => {
                message.reply('I was unable to kick the member');
                       console.error(err);
                  });
           } else {
                message.reply('That user isn\'t in this guild!');
           }
    } else {
                message.reply('You didn\'t mention the user to kick!');
                message.delete()
              }
       }
}
