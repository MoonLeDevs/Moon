const prefix = ("-");

module.exports = class ban {
    static match (message) {
      return message.content.startsWith('-ban')
    }
            
    static action (message) {
      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('tu n\'est pas admin . ');
          const member = message.mentions.members.first();
        if (!member) return message.reply('Commande Invalide, il faut mettre `-ban @User#1234`');
          member.ban({
            days: args[1] || null,
            reason: `Banni par ${message.author.tag}`
              
          }
                if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Admin", "Administrator", "Moderator", "Moderador", "Administradores", "Moderadores", "Administrador"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Menciona un usuario valido!");
    if(!member.kickable) 
      return message.reply("No pude matalo por permisos insuficientes.");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Lo siento ${message.author}, No pude patearlo xd por : ${error}`));
    message.reply(`${member.user.tag} se ha ido hacia el charcho tirao por ${message.author.tag} con rason: ${reason}`);

      }
    //}
}
    });
