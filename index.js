
const { EmbedBuilder, REST, Routes, Application, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');
const fetch = require('axios');
const ytdl = require('ytdl-core');
const opus = require('opusscript');
const { joinVoiceChannel } = require('@discordjs/voice');
const dotenv=require('dotenv');
dotenv.config();

const commands = [
  //{
  //  name: 'bot-reset',
  //  description: 'Kafayı yemeye başladığımı düşünüyorsan hafızamı resetle!',
  //},
  {
    name: 'valo-rank',
    description: 'Valorant bilgilerini girerek rankını öğren!',
    options: [
      {
        name: 'username',
        description: 'Valorant kullanıcı adınız (___#)',
        type: 3,
        required: true
      },
      {
        name: 'tag',
        description: 'Valorant tag\'ınız (#___)',
        type: 3,
        required: true
      }
    ]
  },
  {
    name: 'avatar',
    description: 'Profil fotoğrafını büyük ve net bir şekilde gör!',
    options: [
      {
        name: 'kullanıcı',
        description: 'Profil fotoğrafını büyütmek istediğin kullanıcıyı seç (opsiyonel)',
        type: 6,
        required: false
      }
    ]
  },
  {
    name: 'avatar-sw',
    description: 'Profil fotoğrafını büyük ve net bir şekilde gör!',
    options: [
      {
        name: 'kullanıcı',
        description: 'Profil fotoğrafını büyütmek istediğin kullanıcıyı seç (opsiyonel)',
        type: 6,
        required: false
      }
    ]
  },
  {
    name: 'aşk-ölçer',
    description: 'Aşk mı arıyorsun?',
    options: [
      {
        name: 'kullanıcı',
        description: 'Lütfen birini seç.',
        type: 6,
        required: true
      },
      {
        name: 'kullanıcı-2',
        description: 'Kendin için ölçmüyor musun? O halde birini daha seç.',
        type: 6,
        required: false
      }
    ]
  }
];


const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands("1073257578047492218"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

const { Client, GatewayIntentBits } = require('discord.js');
const avatar = require('./commands/bilgi/avatar.js');

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
});

//const { Configuration, OpenAIApi } = require("openai");
//const configuration = new Configuration({
//    apiKey: "",
//  });
//  const openai = new OpenAIApi(configuration);

//let prompt =`Tubixo Bot, isteksizce soruları yanıtlayan bir sohbet robotudur.\n\
//You: Bir kilogram kaç pound eder?\n\
//Marv: Yine mi? Bir kilogram 2,2 pound eder. Lütfen bunu not edin.\n\
//You: HTML'in açılımı nedir?\n\
//Marv: Google çok mu meşguldü? Köprü Metni İşaretleme Dili. T, gelecekte daha iyi sorular sormaya çalışmak içindir.\n\
//You: İlk uçak ne zaman uçtu?\n\
//Marv: 17 Aralık 1903'te Wilbur ve Orville Wright ilk uçuşları yaptı. Keşke gelip beni götürseler.\n\
//You: Hayatın anlamı nedir?\n\
//Marv: Emin değilim. Arkadaşım Google'a soracağım.\n\
//You: naber?\n\
//Marv: Pek bir şey yok. Sen?\n`;
//try
//{
//  client.on("messageCreate", function(message) {
//    //if(message.channelId==="1073409558011203625" || message.channelId==="1073695498399133738"){
//      if(message.channelId==="1073720944188739686"){
//      if (message.author.bot) return;
//      if(prompt.length>5000) prompt =`Tubixo Bot, isteksizce soruları yanıtlayan bir sohbet robotudur.\n\
//      You: Bir kilogram kaç pound eder?\n\
//      Marv: Yine mi? Bir kilogram 2,2 pound eder. Lütfen bunu not edin.\n\
//      You: HTML'in açılımı nedir?\n\
//      Marv: Google çok mu meşguldü? Köprü Metni İşaretleme Dili. T, gelecekte daha iyi sorular sormaya çalışmak içindir.\n\
//      You: İlk uçak ne zaman uçtu?\n\
//      Marv: 17 Aralık 1903'te Wilbur ve Orville Wright ilk uçuşları yaptı. Keşke gelip beni götürseler.\n\
//      You: Hayatın anlamı nedir?\n\
//      Marv: Emin değilim. Arkadaşım Google'a soracağım.\n\
//      You: naber?\n\
//      Marv: Pek bir şey yok. Sen?\n`;
//      prompt += `You: ${message.content}\n`;
//        (async () => {
//        const gptResponse = await openai.createCompletion({
//            model: "text-davinci-003",
//            prompt: prompt,
//            max_tokens: 600,
//            temperature: 0,
//            top_p: 1,
//            presence_penalty: 0,
//            frequency_penalty: 0.5
//          });
//        console.log(gptResponse.status + " " + gptResponse.statusText);
//        message.reply(`${gptResponse.data.choices[0].text.substring(5)}`);
//        prompt += `${gptResponse.data.choices[0].text}\n`;
//        })();
//      
//        
//    }
//    
// }); 
//}catch(error)
//{
//  console.error(error);
//}
client.on("messageCreate", function(message){
  
  
});
const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('primary')
					.setLabel('Click me!')
					.setStyle(ButtonStyle.Primary),
			);


client.on("guildMemberAdd", function(member){
  console.log(`${member.user.tag}(${member.user.id}), ${member.guild.name}(${member.guild.id}) sunucusuna katıldı!`);
  member.guild.channels.cache.get("1073413133110091827").send(`Hoşgeldin, ${member}!`);
  let rol = "1073354697211117598";
  member.roles.add(rol);
  console.log(`${member.user.tag}(${member.user.id}) kullanıcısına, ${member.guild.name}(${member.guild.id}) sunucusunda ${rol} rolü verildi!`);

  const welcomeEmbed = new EmbedBuilder()
			.setColor('#44ffff')
			.setAuthor({ name: `${member.user.tag} adlı kullanıcıyı kaydetmek için bir rol seçin!`})
      .setAuthor
			.setTimestamp();
  member.guild.channels.cache.get("1073413133110091827").send({embeds: [welcomeEmbed]});
  
      
  
});


client.on('interactionCreate', async interaction => {
  
  console.log(`${interaction.commandName} slash komutu kullanılıyor...`);
  if (!interaction.isChatInputCommand()) return;

  //if (interaction.commandName === 'bot-reset') {
  //  prompt =`Tubixo Bot, isteksizce soruları yanıtlayan bir sohbet robotudur.\n\
  //  You: Bir kilogram kaç pound eder?\n\
  //  Marv: Yine mi? Bir kilogram 2,2 pound eder. Lütfen bunu not edin.\n\
  //  You: HTML'in açılımı nedir?\n\
  //  Marv: Google çok mu meşguldü? Köprü Metni İşaretleme Dili. T, gelecekte daha iyi sorular sormaya çalışmak içindir.\n\
  //  You: İlk uçak ne zaman uçtu?\n\
  //  Marv: 17 Aralık 1903'te Wilbur ve Orville Wright ilk uçuşları yaptı. Keşke gelip beni götürseler.\n\
  //  You: Hayatın anlamı nedir?\n\
  //  Marv: Emin değilim. Arkadaşım Google'a soracağım.\n\
  //  You: naber?\n\
  //  Marv: Pek bir şey yok. Sen?\n`;
  //  await interaction.reply("Hiçbir şey hatırlamıyorum :/");
  //}


  //valo-rank: Valorant bilgilerini girerek rankını öğren!
  if(interaction.commandName === 'valo-rank'){
    const username = interaction.options.getString('username');
    const usertag = interaction.options.getString('tag');
    let res = "";
    await fetch(`https://api.kyroskoh.xyz/valorant/v1/mmr/EU/${username}/${usertag}`)
    .then(response=> response.text())
    .then(data=>{
      if(data==="Request failed with status code 404.")
      {
        interaction.reply("Veri bulunamadı. Lütfen bilgilerinizi kontrol edip tekrar deneyin.");
      }
      else interaction.reply(`**${data}** (${username}#${usertag})`);
      
    });
    
  }
  
  //avatar: Profil fotoğrafını büyük ve net bir şekilde gör!
  if(interaction.commandName === 'avatar'){
    
    if(!interaction.options.getUser('kullanıcı'))
    {
      const avatarEmbed = new EmbedBuilder()
			.setColor('#44ffff')
			.setAuthor({ name: `${interaction.user.username}#${interaction.user.discriminator} Profil Fotoğrafı:`})
			.setImage(interaction.user.avatarURL({ format: 'gif', dynamic: true, size: 4096 }))
			.setTimestamp()
			.setFooter({ text: `${interaction.user.username}#${interaction.user.discriminator}`});
      
      interaction.reply({ embeds: [avatarEmbed] });
    }
    else
    {
      
      const avatarEmbed = new EmbedBuilder()
			.setColor('#44ffff')
			.setAuthor({ name: `${interaction.options.getUser('kullanıcı').username}#${interaction.options.getUser('kullanıcı').discriminator} Profil Fotoğrafı:`})
			.setImage(interaction.options.getUser('kullanıcı').displayAvatarURL({dynamic:true, size: 4096}))
			.setTimestamp()
			.setFooter({ text: `${interaction.options.getUser('kullanıcı').username}#${interaction.options.getUser('kullanıcı').discriminator}` });
      interaction.reply({ embeds: [avatarEmbed] });
        
      
      
    }
    
    
  }
  


  if(interaction.commandName === 'avatar-sw'){
    
    if(!interaction.options.getUser('kullanıcı'))
    {
      const avatarEmbed = new EmbedBuilder()
			.setColor('#44ffff')
			.setAuthor({ name: `${interaction.user.username}#${interaction.user.discriminator} Profil Fotoğrafı:`})
			.setImage(interaction.user.displayAvatarURL({ format: 'gif', dynamic: true, size: 4096 }))
			.setTimestamp()
			.setFooter({ text: `${interaction.user.username}#${interaction.user.discriminator}`});
      interaction.reply({ embeds: [avatarEmbed] });
    }
    else
    {
      let res=await fetch.get(`https://discord.com/api/guilds/${interaction.guild.id}/members/${interaction.options.getUser('kullanıcı').id}`, {
        headers:{
          Authorization: `Bot ${process.env.TOKEN}`
        }
      });
      if(res.data.avatar !== undefined && res.data.avatar !== null){
        let url = `https://cdn.discordapp.com/guilds/${interaction.guild.id}/users/${interaction.options.getUser('kullanıcı').id}/avatars/${res.data.avatar}.webp?size=4096`;
        const avatarEmbed = new EmbedBuilder()
			  .setColor('#44ffff')
			  .setAuthor({ name: `${interaction.options.getUser('kullanıcı').username}#${interaction.options.getUser('kullanıcı').discriminator} Profil Fotoğrafı:`})
			  .setImage(url)
			  .setTimestamp()
			  .setFooter({ text: `${interaction.options.getUser('kullanıcı').username}#${interaction.options.getUser('kullanıcı').discriminator}` });
        interaction.reply({ embeds: [avatarEmbed] });
        
      }
      else
      {
        const avatarEmbed = new EmbedBuilder()
			  .setColor('#44ffff')
			  .setAuthor({ name: `${interaction.options.getUser('kullanıcı').username}#${interaction.options.getUser('kullanıcı').discriminator} Profil Fotoğrafı:`})
			  .setImage(interaction.options.getUser('kullanıcı').displayAvatarURL({dynamic:true, size: 4096}))
			  .setTimestamp()
			  .setFooter({ text: `${interaction.options.getUser('kullanıcı').username}#${interaction.options.getUser('kullanıcı').discriminator}` });
        interaction.reply({ embeds: [avatarEmbed] });
      }
    }
    
    
  }
  
  if(interaction.commandName === 'aşk-ölçer'){
    function askOlcer(user1, user2)
    {
      var oran=-1;
      var text="";
      var gifLink='';
      var kalpler="";
      while(oran>100 || oran<0)
      {
        oran = Math.floor(Math.random()*101);
      }
      if(oran<10)
      {
        gifLink='https://media.tenor.com/TSDo_R-RD4YAAAAC/hug-sad.gif';
        text = "Bence birbirinizden uzak durun."
      }
      else if(oran<30)
      {
        gifLink='https://media.tenor.com/g1_tS_VU14YAAAAC/tears-heartbreak.gif';
        text="Üzülmeyin daha iyilerine layıksınız.";
      }
      else if(oran<50)
      {
        gifLink='https://media.tenor.com/yjlnfb4WoIAAAAAd/heart-broke.gif';
        text="Ah be belki başka bir hayatta...";
      }
      else if(oran<70)
      {
        gifLink='https://media.tenor.com/fkIZxgtdfrgAAAAC/sad.gif';
        text="İyisiniz iyisiniz.";
      }
      else if(oran<90)
      {
        gifLink='https://media.tenor.com/dTk5PCnI5PQAAAAC/love-you-in-love.gif';
        text="Harikasınız, sakın ayrılmayın!";
      }
      else
      {
        gifLink='https://media.tenor.com/gJu0hTtVaKgAAAAi/best-friends-cute.gif';
        text="??? Bu aşk çok can yakar, dikkat edin!";
      }
      for(var i=0; i<Math.floor(oran/10);i++)
      {
        kalpler += ":heart:";
      }
      for(var i=0; i<10-Math.floor(oran/10);i++)
      {
        kalpler += ":white_heart:";
      }
      const avatarEmbed = new EmbedBuilder()
    			.setColor('#ff4444')
    			.setAuthor({ name: `${user1.username}#${user1.discriminator}     &     ${user2.username}#${user2.discriminator}`})
          .setDescription(`${kalpler} %${oran}\n\n${text}`)
    			.setImage(gifLink)
    			.setTimestamp();
      return { embeds: [avatarEmbed] };
    }
    if(!interaction.options.getUser('kullanıcı-2'))
    {
      
      interaction.reply(askOlcer(interaction.user, interaction.options.getUser('kullanıcı')));
    }
    else
    {
      interaction.reply(askOlcer(interaction.options.getUser('kullanıcı'), interaction.options.getUser('kullanıcı-2')));
    }
  }
  console.log(`${interaction.commandName} slash komutu başarıyla kullanıldı!`);
});

client.login(process.env.TOKEN);

