const Discord = require("discord.js");

const TOKEN = "MzMxMTI0MTYzMjExMTY1Njk3.DDvigg.RuNceRif1yI_D3DzfxMfU7_DG-8";
const PREFIX = "$";

var bot = new Discord.Client();

bot.on("ready", function() {
  console.log("I am ready");
});

bot.on("message", function(message) {
  member.build.channels.find("name", "general").sendMessage(member.toString() + " Welcome to the NintappleYT Official Discord! You now have the role of Member, and you have basic permissions.");

  member.addRole(member.guild.roles.find("name", "(Members) The Freshest Squids"));
};

bot.on ("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(PREFIX)) return;

  var arg = message.content.substring(PREFIX.length).split(" ");

  switch (arg[0].toLowerCase()) {
    case "hello":
      message.channel.sendMessage("Hey " + message.author.toString() + "!");
      break;
    case "info":
      message.channel.sendMessage(message.author.toString() + " I am the very best bot, like no bot ever was. I was programmed by a boy who caught them all. (No not Ash Ketchum)");
      break;
    case "help":
      message.channel.sendMessage(message.author.toString() + " Here is a list of commands:");
      var embed = new Discord.RichEmbed()
        .addField("$hello:", "Say hi to me!")
        .addField("$info:", "Find out who I am!");
      message.channel.sendEmbed(embed);
      break;
    default:
      message.channel.sendMessage(message.author.toString() + " I don't recognise what you're trying to tell me. Type $help for a list of commands.");
  }
});

bot.login(TOKEN);
