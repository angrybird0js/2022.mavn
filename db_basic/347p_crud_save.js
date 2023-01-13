// 347p
// ...

// const { mongoose, Photo } = require('./crud_conn.js')


const mongoose = require('mongoose')
const USER = 'dbuser'
const PWD = 'dbuser_db_pwd'
// const HOST = 'localhost:27017'
const HOST = '127.0.0.1:27017' // 처음 성공함
const DB = 'sensor'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`

// mongoose.set('useFindAndModify', false) // 6.0부터 자동으로 관리 
mongoose.set('strictQuery', false) // 권장

mongoose.connect(mongodbURL, { useNewUrlParser: true })
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err))

const Photo = require('./photo.js')


/////////////////////////
// main 을 insertDB 등으로 사용 
const main = async () => {
    const _data = {
        "albumId": 12010,
        "id": 12010,
        "title": "stone",
        "url": "mail@email.com",
        "thumbnailUrl": "https://via.placeholder.com/150/13454b"
    }

    const new_photo = new Photo(_data)
    const t = await new_photo.save()
    console.log(t)
}


// 절차 단계에서 활용
main()
