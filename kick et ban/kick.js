const prefix = ("-");

module.exports = class kick {
    static match (message) {
      return message.content.startsWith('-kick')
    }
            
    static action (message) {
      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('Accès Refusé : Permission **Admin** Requise. ');
          const member = message.mentions.members.first();
        if (!member) return message.reply('Commande Invalide, il faut mettre `-kick @user#1234`');
          member.kick({
          });
      }
    //}
}
