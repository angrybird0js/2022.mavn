
const ax = require('axios')
// require('request')

// async await module
// const ret = ax.get("https://www.pusan.ac.kr/kor/CMS/MenuMgr/menuListOnBuilding.do?mCode=MN202#childTab_tmp")
//     .then(res => (
//         console.log(res)
//     ))

// 전역변수로 반출 
// 모듈로 반출 const 대신 exports

const ret = ax.get("http://smartcity.gimhae.go.kr/smart_tour/dashboard/api/publicData/dustSensor")
    .then((res) => {


        //    console.log(res) // 개별 item 들이 Object로 표시됨
        console.log(res.data.data[0]) // 미세먼지 센서 정보
        // res.data.data[0] 전역변수로 반출함

    })

// module.exports = out (전역변수)
// console.log(ret) // promise
// 따라서 RES에 값이 저장되어 있으며 밖에서는 직접 사용할수 없다.

// const sensor = ret.data.data.forEach((item) => {

//     console.log(item)
// })


// setTimeout(() => {

// })


// db저장
// const mongoURL = '/sensors'
// mongoose.connect( mongoURL, )

// db.sensors.insertMany( data, () => {} )

// const insertData = async() => {

//     const t = await data.save()

// }

// insertData