const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MrgE1bxQ#QXcv1VGsjvT-lfQNvPxq4vLHmQDP1LTOvcg8G7NLB24", //Put your session code here
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/5xGNHz7Q/temp.jpg",ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/nN2rP4PP/temp.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "*HEY DEAR* ${pushname}\n *I Am *CYBER-MD* Alive Now ✔️*",
SUDO_NB: process.env.SUDO_NB || "918149730236",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};

