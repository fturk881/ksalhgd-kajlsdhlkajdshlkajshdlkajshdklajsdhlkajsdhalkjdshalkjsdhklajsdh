const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    
    const electra = new Discord.MessageEmbed()
    .setTitle(`Electra Bilişim Hizmetleri`)
    .setURL(`https://electrabilisim.com`)
    .setColor("517c97")
    .setDescription(`Türkiye lokasyon İzmir Vodafone veri merkezinde bulunan sunucularımız ile hızın doruğuna ulaşın. Sadece **₺14.99**'den başlayan fiyatlar ile sanal sunucu sahibi olmak için [**Electrabilisim.com**](https://electrabilisim.com) adlı sitemizi ziyaret edin.`)
    .addField(":flag_tr: Türkiye Lokasyon", "• Sunucularımız İzmir Vodafone veri merkezinde ortak kabinlerde barınmaktadır.", true)
    .addField(":zap: Kaliteli Destek", "• Kullanıcı memnuniyetini en üst düzeyde tutarak sizlere sistemimizle alakalı her yardımı yaparız.", true)
    .addField(":file_cabinet: Kaliteli Sunucular", "• Electra kalitesiyle sizlere en kaliteli sunucuları sunarız.", true)
    .addField(":cd: SSD Disk", "• Hızlı ve kaliteli SSD kullanarak SAS disklere göre oldukça yüksek hızlara ulaşmanızı sağlıyoruz.", true)
    .addField(":satellite: 1Gbit İnternet Hattı", "• 1Gbit internet hattımız ile gecikmesiz sunucu kullanın.", true)
    .addField(":label: Uygun Fiyatlı", "• Sistemlerimizi uygun fiyatla, kaliteli satıyoruz.", true)
    .setImage('https://cdn.discordapp.com/attachments/613871702656548867/822878868347551744/standard.gif')
    .setThumbnail(`https://cdn.discordapp.com/attachments/613871702656548867/714447077391728710/electra.png`)
    message.channel.send(electra)
    
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sponsoaaaaaaaaar'],
};

exports.help = {
  name: 'sponsoaaaaaaaaaaaaar'
};