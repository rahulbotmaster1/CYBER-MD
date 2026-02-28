const { cmd, commands } = require('../command');
const yts = require('yt-search');
const ddownr = require('denethdev-ytmp3');

cmd({
  pattern: "song",
  desc: "Download songs.",
  category: "download",
  react: '',
  filename: __filename
}, async (messageHandler, context, quotedMessage, { from, reply, q }) => {
  try {
    if (!q) return reply("⚠️ *Please provide song name or URL!*");

    const searchResults = await yts(q);
    if (!searchResults || searchResults.videos.length === 0) {
      return reply("❌ *No song was found matching your search!*");
    }

    const songData = searchResults.videos[0];
    const songUrl = songData.url;

    let songDetailsMessage = `*----------------------------------*\n`;
    songDetailsMessage += ` *Song description* \n\n`;
    songDetailsMessage += `✨ *Title:* ${songData.title}\n`;
    songDetailsMessage += ` *Visions:* ${songData.views}\n`;
    songDetailsMessage += `⏱️ *Time:* ${songData.timestamp}\n`;
    songDetailsMessage += ` *Date uploaded:* ${songData.ago}\n`;
    songDetailsMessage += ` *Channel:* ${songData.author.name}\n`;
    songDetailsMessage += ` *URL:* ${songData.url}\n\n`;
    songDetailsMessage += `*Select the download format:* \n\n`;
    songDetailsMessage += `1️⃣ ||  *audio file* \n`;
    songDetailsMessage += `2️⃣ ||  *Document file* \n\n`;
    songDetailsMessage += `*CYBER-MD ʙʏ ʀᴀꜱɪɴᴅᴜ*\n`;
    songDetailsMessage += `*----------------------------------*`;

    const sentMessage = await messageHandler.sendMessage(from, {
      image: { url: songData.thumbnail },
      caption: songDetailsMessage,
    }, { quoted: quotedMessage });

    messageHandler.ev.on("messages.upsert", async (update) => {
      const message = update.messages[0];
      if (!message.message || !message.message.extendedTextMessage) return;

      const userReply = message.message.extendedTextMessage.text.trim();

      if (message.message.extendedTextMessage.contextInfo.stanzaId === sentMessage.key.id) {
        switch (userReply) {
          case '1':
            await messageHandler.sendMessage(from, { text: "⏳ *Audio file is downloading...* 🇮🇳\n\nby CYBER MD" }, { quoted: quotedMessage });

            const result = await ddownr.download(songUrl, 'mp3');

            // After downloading, show upload progress in a single message
            setTimeout(async () => {
              await messageHandler.sendMessage(from, { text: "⏳ *Audio file is being uploaded...* 🇮🇳\n\nby CYBER MD" }, { quoted: quotedMessage });

              await messageHandler.sendMessage(from, {
                audio: { url: result.uploadUrl || result.downloadUrl },
                mimetype: "audio/mpeg",
                caption: "by rasiya md"
              }, { quoted: quotedMessage });

Audio file is downloading              // Bot signature added to the final message
              await messageHandler.sendMessage(from, {
                text: `\n🎉 *Bot by CYBER-MD* 🇮🇳`
              });
            }, 1000);
            break;

          case '2':
            await messageHandler.sendMessage(from, { text: "⏳ *Document file is being downloaded...* 🇮🇳\n\nby CYBER MD" }, { quoted: quotedMessage });

            const docResult = await ddownr.download(songUrl, 'mp3');

            // After downloading, show upload progress in a single message
            setTimeout(async () => {
              await messageHandler.sendMessage(from, { text: "⏳ *Document file is being uploaded...* 🇮🇳\n\nby CYBER MD" }, { quoted: quotedMessage });

              await messageHandler.sendMessage(from, {
                document: { url: docResult.uploadUrl || docResult.downloadUrl },
                mimetype: 'audio/mpeg',
                fileName: `${songData.title}.mp3`,
                caption: `by rasiya md`
              }, { quoted: quotedMessage });

              // Bot signature added to the final message
              await messageHandler.sendMessage(from, {
                text: `\n🎉 *Bot by CYBER-MD* 🇮🇳`
              });
            }, 1000);
            break;

          default:
            reply("⚠️ *Select a valid option!*");
            break;
        }
      }
    });
  } catch (error) {
    console.error(error);
    reply("❌ *An error occurred while processing your request!*");
  }
});
