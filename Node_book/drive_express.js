// express 사용 
// 특정 폴더에서 npm init , express 설치

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 참고: /main 추가하면 라우터 구성 가능.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})