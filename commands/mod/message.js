const Discord = require("discord.js");
module.exports = {
  name: "message",
  description: "Announce a message.",
  usage: "",
  aliases: ["none"],
  example: "message",
  args: false,
run: async (client, message, args) => {    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send(
        new Discord.MessageEmbed()
          .setAuthor("Error!", "https://cdn.donielzoldan.me/xmark.png")
          .setDescription("You do not have permission to run this command!")
          .setColor("2f3136")
      );
    let embed = new Discord.MessageEmbed();
      let otherembed =  new Discord.MessageEmbed().setAuthor("Success!","https://cdn.donielzoldan.me/check.png").setDescription("The embed has been sent!").setColor("2f3136")
      const filter = m => m.author.id === message.author.id;
    message.channel
      .send("Say cancel at any time to end this.\n\nWhat should the Title of the embed be?")
      .then(async () => {
        message.channel
          .awaitMessages(filter, {
            max: 1,
          })
          .then((collected) => {
            if (collected.first().content === 'cancel') return message.reply('Canceled!')
            embed.setTitle(collected.first().content);
            message.channel
              .send("What should the Description of the embed be?")
              .then(async () => {
                message.channel
                  .awaitMessages(filter, {
                    max: 1,
                  })
                  .then((collected) => {
                    if (collected.first().content === 'cancel') return message.reply('Canceled!')
                    embed.setDescription(collected.first().content);
                    message.channel
                      .send(
                        "What color should the embed be? Provide a HEX code."
                      )
                      .then(async () => {
                        message.channel
                          .awaitMessages(filter, {
                            max: 1,
                          })
                          .then((collected) => {
                            if (collected.first().content === 'cancel') return message.reply('Canceled!')
                            embed.setColor(collected.first().content);
                            message.channel
                              .send("What should the Footer of the embed be?")
                              .then(async () => {
                                message.channel
                                  .awaitMessages(filter, {
                                    max: 1,
                                  })
                                  .then((collected) => {
                                    if (collected.first().content === 'cancel') return message.reply('Canceled!')
                                    if (!collected.first().content == 'skip') embed.setFooter(collected.first().content);
                                    message.channel
                                      .send(
                                        "What is the Channel ID the embed should be sent to?"
                                      )
                                      .then(async () => {
                                        message.channel
                                          .awaitMessages(filter, {
                                            max: 1,
                                          })
                                          .then((collected) => {
                                            if (collected.first().content === 'cancel') return message.reply('Canceled!')
                                            client.channels.cache
                                              .get(collected.first().content)
                                              .send(embed);
                                            message.channel.send(otherembed);
                                            
                                          });
                                      });
                                  });
                              });
                          });
                      });
                  });
              });
          });
      });
  },
};