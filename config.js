const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "nhAEjR5Q#avzMD5zz21MnSiNkn_wB0FZoKT7fGMF-V3Odfc4eBWQ",
  OWNER_NUM: process.env.OWNER_NUM || "919356730236",
  PREFIX: process.env.PREFIX || ".",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/qLMbzYQq/temp.jpg",
  ALIVE_MSG: process.env.ALIVE_MSG || "Hi I am alive❤️😇 Please leave a comment 𝚃𝚑𝚒𝚜 𝚋𝚘𝚝 𝚌𝚛𝚎𝚊𝚝𝚎𝚍 𝚋𝚢 RAHUL-MASTER",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER : process.env.AUTO_STICKER || "false",
  AUTO_STICKER : process.env.AUTO_STICKER || "false",
  MODE: process.env.MODE || "public",
  GEMINI_API_KEY : process.env.GEMINI_API_KEY || "AIzaSyC8pSIvRTtYS-ZghDZWWPUY360gEFB37hM",
  MOVIE_API_KEY : process.env.MOVIE_API_KEY || "sky|ef8ec9b6478140b29bdab63164f82bc02ef713a2",
  BOT_NAME: "CYBER-MD",  // New addition
  VERSION: "1.0.0",           // New addition
