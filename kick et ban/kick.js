 bot.on(message.content.startsWith("-kick")) {
    if member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(":wave: " + member.displayName + " a été expulser ");
        }).catch(() => {
            message.channel.send("Impossible d/executer cette commande !");        
    }
});
