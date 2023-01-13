const qry = require('request')
const url = 'http://smartcity.gimhae.go.kr/smart_tour/dashboard/api/publicData/dustSensor'
// dotenv 처리할것.

const k_dust = qry(url, function (e, res, data) { // 값을 반환하기 위해 function 전환

    // console.log(data) // 정상
    // console.log(data.data) // 작동하지 않음
    // axios.get 으로 가져올 수 있다.

    const to_obj = JSON.parse(data)
    // console.log(to_obj.data) // 작동함

    return to_obj.data

})


// to_obj.data 사용가능
// console.log(typeof k_dust) // object
console.log(k_dust) // object


// 일반 출력과 지도 포함 함수 별도 작성


// 순회 k_dust.forEach( item , fn() )
k_dust.forEach((item) => {
    let sensors = item.loc


    // .loc 장소
    // .coordx GPS
    // .coordy GPS
    // .pm10_after 미세먼지 
    // .pm25_after 초미세먼지
    // .timestamp 날짜 시간 

    // console.log(sensors)
    // 장소, 시간, 미세, 초미세 활용
    // GPS 좌표 가져와서 지도에 표시하는 기능 추가




    // 각 지역별로, 시간대별 측정결과를 mongoDB에 올려서 컬럭션을 만든다.



}) // end qry 

// bot에서 백그라운드로 자료를 수집한다.
// setTimeout()
// dbrec

// const ask = qry( url, function() )

// async 는 setTimeout, DB에 적용
// await 은 axios.get findOne, updateMany에 적용
// const insertDB = async() => {}  const t = await new_rec.save()
// const new_rec = new model(schema)


// bot 에서 조회요청이 있을시 표를 제시한다.

// const readDB = async() => {
//     const t = await DustDB.find({obj}).lean()
// }

// $in 으로 값이 있는 것을 모두 찾는다.
// timestamp 키 활용

//

// 생성은 save()

