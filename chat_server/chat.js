
const { Server } = require('socket.io')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const http = require('http')
const app = express()

const server = http.createServer(app)
const io = new Server(server)




const PORT = 3000
const _path = path.join( __dirname, '/' )
console.log(_path)

app.use( '/' , express.static(_path))
app.use(logger('tiny'))

// app.get( '/', (req, res) => {
//     res.sendFile( __dirname + '/index.html')
// } )

io.on( 'connection' , (socket) => {
    socket.on( 'chat_message', (msg) => { 
        // 서버는 chat_message 이벤트에서 받으며
        // 받은 내용을 다시 emit 하여 내보낸다.
        
        io.emit( 'chat_message', msg ) // 이벤트 발생
        // 이 메시지는 프론트엔드의 socket 에서 받는다.
        // 메시지를 보내지 않으면 받기만 하고 표시는 하나도 안해준다.
    })
} )



server.listen( PORT, () => {
    console.log( `서버 가동중 ${PORT} `)
})