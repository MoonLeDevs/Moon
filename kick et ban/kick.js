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
