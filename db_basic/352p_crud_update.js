
// DB ID졍보를 env에 저장

// require('dotenv').config
// .process.env

const mongoose = require('mongoose')
const USER = 'dbuser'
const PWD = 'dbuser_db_pwd'
// const HOST = 'localhost:27017'
const HOST = '127.0.0.1:27017'
const DB = 'sensor'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`
// mongoose.set('useFindAndModify', false) // 6.0부터 자동으로 관리 
mongoose.set('strictQuery', false) // 권장
mongoose.connect(mongodbURL, { useNewUrlParser: true })
    .then(() => console.log('접속에 성공함'))
    .catch((err) => console.error(err))

const Photo = require('./photo.js')

// module.exports = { mongoose, Photo }

const main = async () => { // main() 아님

    const t = await Photo.updateMany({
        "title": { $eq: 'stone' }
    }, {
        $set: { "url": 'mail@email.com' }
    }, {
        upsert: true, multi: true, new: true
    }).lean()

    console.log(t) // 정상출력됨
}

main()
