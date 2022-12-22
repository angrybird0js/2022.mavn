const express = require('express')
const path = require('path')
const logger = require('morgan')
const app = express()
const PORT = 3000
const _path = path.join( __dirname, 'dist' )
console.log(_path)

app.use( '/' , express.static(_path))
app.use(logger('tiny'))

app.use( (req, res, next ) => {
    console.log('요청이 왔네요')
    next()
})

app.get( '/book/:bookName' , (req, res) => {
    const {bookName} = req.params
    res.send( `안녕하세요 ${bookName} 을 주문하셨네요 ` )
})

app.listen( PORT, () => {
    console.log( `서버 ${PORT} `)
})
