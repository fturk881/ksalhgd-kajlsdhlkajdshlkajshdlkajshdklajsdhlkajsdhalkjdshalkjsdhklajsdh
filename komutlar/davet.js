const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
const Embed = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(message.author.tag,message.author.avatarURL({dynamic:true}))
.setFooter(client.user.username,client.user.avatarURL())
.setThumbnail(client.user.avatarURL())
.setDescription(`> Görünen o ki Botumuzu Beğendin Ve Davet Edeceksin.
> \`!yardım\` Yazarak Daha Detaylı İnceleyebilirsiniz.`)
.addField('BOT Davet','[Tıkla!](https://discord.com/api/oauth2/authorize?client_id=805400608332054588&permissions=8&scope=bot)',true)
.addField('Destek Sunucusu','[Tıkla!](https://discord.gg/xrMhsCk7Wm)',true)

.setTimestamp()
message.channel.send(Embed)
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['DAVET','İnvite','Davet','invite',"İNVİTE","davet"],
  permLevel: 0
}

exports.help = {
  name: 'davet | invite',
  description: 'Davet Linki',
  usage: 'davet'
}