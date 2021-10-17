const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
const db = require('quick.db')
exports.run = async (client, message, args) => {
const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  
let aylartoplam = {
        "01": "Ocak",
        "02": "Şubat",
        "03": "Mart",
        "04": "Nisan",
        "05": "Mayıs",
        "06": "Haziran",
        "07": "Temmuz",
        "08": "Ağustos",
        "09": "Eylül",
        "10": "Ekim",
        "11": "Kasım",
        "12": "Aralık"
  }
 let aylar = aylartoplam 

 let s = (`${moment(client.user.createdAt).format('DD')} ${aylar[moment(client.user.createdAt).format('MM')]} ${moment(client.user.createdAt).format('YYYY HH:mm:ss')}`)


  const msg = new Discord.MessageEmbed()
    .setColor("")
    .setFooter(client.user.tag, client.user.avatarURL())
  .setThumbnail(client.user.avatarURL())
    .setTitle(`Magama İstatistik`)
    .addField(
      "<a:tac:812091082158505994> **Bot'un Ana Sahibi:**", "<@322756173654786050>",
	  false
    )
    .addField(
      "<a:tac2:812091315008831488>  **Bot'un Sahipleri:**", " <@761573298445615104> <@423374884245078016> <@334063167606882305>",
	  false
    )
    .addField(
      " <:user:812092174262075392>      **Kullanıcı Sayısı:**",
      client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      true
    )
    .addField(
      "<a:loding:812093581304922123>      **Sunucu Sayısı:**",
      client.guilds.cache.size.toLocaleString(),
      true
    )
    .addField(
      "<:HashtagPng:802113917009788948>      **Kanal Sayısı:**",
      client.channels.cache.size.toLocaleString(),
      true
    )
    .addField("<:hype:809515307654971392> **Ping:**", client.ws.ping + " ms", true)
    .addField("<:hype:809515307654971392> **Botun Açık Olduğu Süre**", duration,true)
    .addField("<:hype:809515307654971392> **Botun Kuruluş Tarihi**",s ,true)
  return message.channel.send(msg);


};

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: [ 'i','statistics',"İ"],
    permLevel: 0
  };
   
  exports.help = {
    name: "istatistik",
    description: "Bot i",
    usage: "istatistik"
  };