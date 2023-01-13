const path = require('path')
const fs = require('fs')

const _path = path.join(__dirname, '/files/') // dist 위치에 주의
console.log(_path)

let data = JSON.stringify( new Date() ) 

// let json = 
// 반환값에 쌍따옴표를 추가
// 기존 파일이 있을경우 오류, 빈 내용을 덮어쓴다.

let file = _path + 'file.txt'



fs.writeFile( file, data, (e)=>{ 
    e?console.log('error'):console.log('done') })
    // 저장했는가
    // 입출력 관련 별도 함수 작성, 매개변수 전달

let reader = fs.readFile( file, 'utf-8', (e)=>{ 
    e?console.log('error'):console.log('done') })
    // utf-8 생략시 버퍼가 들어감

let viewer = JSON.parse( reader , () => { console.log( viewer ) } )


