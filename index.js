const TelegramBot = require("node-telegram-bot-api");

const TOKEN = process.env.BOT_TOKEN;
const ADMINS = [
  7078921958,
  5661041571,
  1049137909
];

const bot = new TelegramBot(TOKEN, {
  polling: true
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  if (!ADMINS.includes(chatId)) {
    return;
  }

  bot.sendMessage(chatId, "Бот работает ✅");
});

console.log("Бот запущен и слушает сообщения");
