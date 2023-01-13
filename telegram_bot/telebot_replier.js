
// telegram 응답기


const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TTC
// 'YOUR_TELEGRAM_BOT_TOKEN';
// 

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => { // regexp, param
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever" (.+)
    // 채팅내용을 저장하는 DB로 연결

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp); // /echo + 문자열 입력받은 메시지를 봇이 출력하게함 
});


// 위의 onxtxt 와 아래의 on은 별개의 기능으로 작동한다.
// 위의 ontext는 /echo 메시지를 받으면 작동한다. 

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {

    // message 수신
    // msg는 object
    const chatId = msg.chat.id; // bot id

    // const entry = Object.entries(msg);

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, '단지 메시지가 수신되면 반응하는 sendMessage를 호출함');



    if (msg.text == 'help' || msg.text == '도움') {
        bot.sendMessage(chatId, 'help 또는 도움 입력시 본 메시지를 출력함');
    } // meg.text 에서 성공함 


});


// function msg_obj() {
//     for (let value of Object.values(user)) {
//         alert(value); // Violet과 30이 연속적으로 출력됨
//       }
// }