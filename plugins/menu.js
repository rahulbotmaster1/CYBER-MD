const { cmd, commands } = require("../command");
const config = require("../config");
cmd(
  {
    pattern: "menu",
    alise: ["getmenu"],
    react: "🚀",
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[
            commands[i].category
          ] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let madeMenu = `👋 *Hello  ${pushname}*


| *☄️MAIN COMMANDS* |
    ▫️.alive
    ▫️.menu
    ▫️.ai <text>
    ▫️.system
    ▫️.owner
| * 📩 DOWNLOAD COMMANDS* |
    ▫️.song 
    ▫️.video 
    ▫️.fb
| *✨ GROUP COMMANDS* |
${menu.group}
| *👤 OWNER COMMANDS* |
    ▫️.restart
    ▫️.update
| *🌠 CONVERT COMMANDS* |
    ▫️.sticker 
    ▫️.img 
    ▫️.tr 
    ▫️.tts 
| *🚥SEARCH COMMANDS* |
${menu.search}


⚡ 𝐌𝐚𝐝𝐞 𝐛𝐲 RAHUL-MASTER 🇮🇳

> ▶️CYBER-MD MENU MSG◀️
`;
      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://i.ibb.co/V0z1qPjJ/temp.jpg",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
