/* 쿼리스트링 */
const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')

const app = express()
const port = 3000
const _path = path.join(__dirname, '/') // dist 위치에 주의
console.log(_path)
app.use('/', express.static(_path))
app.use(logger('tiny'))


let data = JSON.stringify( new Date() )

fs.writeFile('file.txt', data, (e)=>{})

//fs.readfile


app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})