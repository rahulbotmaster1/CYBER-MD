const axios = require('axios');

// translation service  - Google Translate API
async function translate(text, targetLang = 'si', apiKey = process.env.GOOGLE_API_KEY) {
    try {
        const response = await axios.post(
            'https://translation.googleapis.com/language/translate/v2',
            { q: text, target: targetLang },
            { params: { key: apiKey } }
        );
        return response.data.data.translations[0].translatedText;
    } catch (error) {
        console.error('⚠️ translation error:', error.message);
        return text; // returns the original text on error
    }
}

// WhatsApp Adding as a plugin for bots
function setupTranslatePlugin(client) {
    client.on('message', async (message) => {
        if (message.body.startsWith('!tr')) {
            const [, targetLang, ...textParts] = message.body.split(' ');
            const text = textParts.join(' ');

            if (!text || !targetLang) {
                return message.reply('⚙️ usage: !tr <l> <text>: !tr si Hello');
            }

            const translatedText = await translate(text, targetLang);
            message.reply(`🌍 translation (${targetLang}): ${translatedText}`);
        }
    });
}

module.exports = { translate, setupTranslatePlugin };
