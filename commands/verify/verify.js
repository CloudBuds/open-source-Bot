const Discord = require('discord.js')
module.exports = {
  name: "verify",
  aliases: [],
  usage: "verify",
  description: "verify",
  run: async (client, message, args) => {

const user = message.member

  let role = message.guild.roles.cache.find(r => r.name === `User`);
if (!role) return message.channel.send("No role called User!");

user.roles.add(role)
message.channel.send("Congratulations! You have been verified! You now have access to the rest of the server.Enjoy your time here!")
  }
}