const axios = require('axios') // 리퀘스트 용도
const cheerio = require('cheerio') // 선택자 용도

const url =
  'https://www.pusan.ac.kr/kor/CMS/MenuMgr/menuListOnBuilding.do?mCode=MN202'

axios.get(url).then((res) => {
  let $ = cheerio.load(res.data)
  let menu = [],
    day = [],
    date = []
  $('.day').each(function () {
    day.push($(this).text())
  })
  $('.date').each(function () {
    date.push($(this).text())
  })
  $('.menu-tit01~p').each(function () {
    menu.push($(this).text())
  })

  for (i in menu) {
    console.log(`${date[i]}(${day[i]})\n${menu[i]}`)
  }
})