const Discord = require('discord.js');

const HelpEmbed = new Discord.MessageEmbed()
    .setColor('#0b6b19')
    .setTitle('MAIL BOT HELP')
    .setDescription('All agruments seperated by "; " the prefix is "!".')
    .addFields(
        { name: '!help', value: 'posts the helpembed' },
        { name: '!mailinglist; <EmailAdress>', value: 'Add one Email Adress to mailing list.' },
        { name: '!mailinglist; view', value: 'shows the contents of the Mail List'},
        { name: '!email; <Title(Subject)>; <Description(Body)>', value: 'Sends an Email to the Email list Cannot use if you cant (@everyone or @here)' }
    )
module.exports = HelpEmbed;