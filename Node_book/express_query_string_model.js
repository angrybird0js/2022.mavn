/* 쿼리스트링 */
const express = require('express')
const path = require('path')
const logger = require('morgan')

const app = express()
const port = 3000
const _path = path.join(__dirname, '/dist') // dist 위치에 주의
console.log(_path)
app.use('/', express.static(_path))
app.use(logger('tiny'))

app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})