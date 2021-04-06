const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    aliases: [],
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('`uh!kick`', 'Kicks a member from your server via mention or ID')
        .addField('`uh!ban`', 'Bans a member from your server via mention or ID')
        .addField('`uh!clear`', 'Purges messages')
        .addField('`uh!message`', 'sends an embed message.')
        .addField('`uh!lock`', 'locks and channel')
        .addField('`uh!unlock`', 'unlocks an channel.')
        .addField('`uh!mute`', 'Mutes user.')
        .addField('`uh!unmute`', 'Unmutes an user.')
        .addField('`uh!giveaway`', 'Makes an giveaway')
        .addField('`uh!verify`', 'verifys an user')
        .setTimestamp()

        
        const pages = [
                moderation,
                
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}