    if (msg.content === prefix + "site"){
    if (message.content.startsWith("-kick")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " a été expulser ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Impossible d/executer cette commande !");
        });
    }
});
