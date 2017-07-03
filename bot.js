const Discord = require("discord.js");

const TOKEN = "MzMxMTI0MTYzMjExMTY1Njk3.DDvigg.RuNceRif1yI_D3DzfxMfU7_DG-8";
const PREFIX = "$";

var bot = new Discord.Client();

bot.on("ready", function() {
  console.log("I am ready");
});

bot.on ("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(PREFIX)) return;

  var arg = message.content.substring(PREFIX.length).split(" ");

  switch (arg[0].toLowerCase()) {
    case "hello":
      message.channel.sendMessage("Hey!");
      break;
    case "info":
      message.channel.sendMessage("I am the very best bot, like no bot ever was. I was programmed by a boy who caught them all. (No not Ash Ketchum)");
      break;
    case "help":
      var embed = new Discord.RichEmbed()
        .addField("$hello:", "Say hi to me!")
        .addField("$info:", "Find out who I am!");
        .setColor(0x00FFFF);
      message.channel.sendEmbed(embed);
      break;
    default:
      message.channel.sendMessage("I don't recognise what you're trying to tell me. Type $help for a list of commands.");
  }
});

bot.login(TOKEN);
