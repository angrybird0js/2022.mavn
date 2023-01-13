const qry = require('request')

// let key = process.env.pkey

let key = "z%2FnzLXChjKAJvs4k28dAg9s9pPmz2k8y4F5nFRgvd1WWohcUFoQrkFW6%2BAkY6kZ6jkFTJZRzgmavB3fEisOqsQ%3D%3D"
let qryp = "busStopList?arsno=13708&pageNo=1&numOfRows=10&serviceKey="
const url = 'http://apis.data.go.kr/6260000/BusanBIMS/' + qryp + key

console.log(url)

var ask = '' // const는 오류

qry(url, (e, res, body) => {

    console.log(body)

    // xml 을 파싱해야 한다. 

    const { XMLParser, XMLBuilder, XMLValidator } = require("fast-xml-parser");

    const parser = new XMLParser();
    let jObj = parser.parse(body); // XMLdata

    // 다시 XML로 변환
    // const builder = new XMLBuilder();
    // const xmlContent = builder.build(jObj);


    //   const rst = JSON.parse(body)
    //   const _ = rst.getAirQualityInfoClassifiedByStation.body.items.item[3]
    //   console.log(
    //     `[${_.site}]\n 일산화탄소:${_.co}\n 오존:${_.o3}\n 초미세먼지:${_.pm25}\n 미세먼지:${_.pm10}\n`
    //  )

    console.log(jObj) // 작동함

    // let rslt_obj = jObj.response.body.items
    // console.log(rslt_obj) // 작동함


    // 주의: 이하 object는 api 요청 주기 내에 재 요청시 응답하지 않는다.
    ask = jObj.response.body.items
    // console.log(ask) //

    // return jObj 작동안됨
    // console.log(xmlContent)

}) // end qry

// console.log(ask)



