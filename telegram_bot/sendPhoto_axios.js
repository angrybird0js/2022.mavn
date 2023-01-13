import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.telegram.org/bottoken/sendPhoto',
  headers: {
    accept: 'application/json',
    'User-Agent': 'Telegram Bot SDK - (https://github.com/irazasyed/telegram-bot-sdk)',
    'content-type': 'application/json'
  },
  data: {
    photo: 'Required',
    caption: 'Optional',
    disable_notification: false,
    reply_to_message_id: null
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });