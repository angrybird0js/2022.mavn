const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PhotoSchema = new Schema({
    albumId: Number,
    id: Number,
    title: String,
    url: String,
    thumbnailUrl: String
})

module.exports = mongoose.model('Photo', PhotoSchema) // expoets 는 바로가기

// module.exports = mongoose.model('Photo', PhotoSchema, 'Photo')
