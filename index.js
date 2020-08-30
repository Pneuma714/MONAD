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
            .setTitle(`${message.author.username}'s Avatar`)
            .setImage(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }));
        message.channel.send(embed);
    }
});

client.login();

// ==============================

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
    console.log(`Listening at port ${process.env.PORT}`);
});