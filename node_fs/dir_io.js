const path = require('path')
const fs = require('fs')

const _path = path.join(__dirname, '/') // dist 위치에 주의
console.log(_path)


fs.readdir( _path + '/files' , (err, list) => { // 경로지정에 주의

    console.log(list)
    console.log(err)
    // list.forEach( file => {
    //     console.log(file)
    //   })
})


