const http = require( 'http' ) // 내장객체를 가져와야 한다.
const PORT = 12010
const server = http.createServer( (req, res) =>{ // 임의명칭
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')

    // data를 추가할수 있으며 end 에서 표시 180p
    // JSON.strinfy(obj)
    res.end('안녕하세요 MEVN 프로젝트입니다.')
})

// error test
// setTimeout(() => {
//     JSON.parse( "{Z")
// }, 3000)

server.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`)
})

// 서버 올리기 node 파일명 &
// 서버 내리기 kill -n 번호


// 이하 같음

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });





