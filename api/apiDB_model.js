
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DustSchema = new Schema({
    loc: String,
    coordx: Number,
    coordy: Number,
    pm10_after: Number,
    pm25_after: Number,
    timestamp: Date
})

// .loc 장소
// .coordx GPS
// .coordy GPS
// .pm10_after 미세먼지 
// .pm25_after 초미세먼지
// .timestamp 날짜 시간 

module.exports = mongoose.model('DustDB', DustSchema)