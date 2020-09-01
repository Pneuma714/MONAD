const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Ready! Logged in as ${client.user.tag}.`);
});

client.on('message', message => {
    if (message.system) return;
    if (message.author.bot) return;

    if (message.content === 'ping?') return message.reply('pong!');

    if (message.content === 'avatar') {
        const embed = new Discord.MessageEmbed()
            .setTitle(`:desktop: | ${message.author.username}'s Avatar`)
            .setImage(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }));
        message.channel.send(embed);
    }
});

client.login();