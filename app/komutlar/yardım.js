const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const umutbey = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`Polonyalı`, client.user.avatarURL) 
      .setDescription('**[Destek Sunucum](https://discord.gg/AFTDvTZ)**')
.setThumbnail(client.user.avatarURL)
      .addField('** Komutlar (13)**', '`jail`, `oylama`, `reklam-taraması`, `rol-koruma`, `say`, `temizle`, `cekilis`, `banlananlar`, `avatar`, `ping`, `gifara`, `kullanıcı-bilgi`, ')
      .addField('** Komutlar (5)**', '`ban`, `kick`, `üyedurum`, `reklam-engelle`, ``, ``, ``, ``, ``, ``, ``')
      .addField('** Yakında Gelicek (0)**', '``, ``, ``, ``')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(umutbey).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['y'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'bY Polonyalı',
      description: '+yardım.',
};