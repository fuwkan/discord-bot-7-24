const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'sa') {
 msg.reply('AleykümSelam');
  }

  if (msg.content === 'ping') {
    msg.reply('Yapım Aşamasındadır');
  }

if (msg.content === 'ping') {
  msg.channel.send('ping' + client.ping + 'ms');
}

if (msg.content === 'avatarım') {
    msg.channel.send(msg.author.avatarURL);
}
  
if (msg.content === 'kurucu')
 msg.reply('ByMiralay,Miralay,Furkan...');
  }
  
  
  

};

});

client.login(process.env.BOT_TOKEN);

