const 조건 = e => e.height >= 180
const 친구들 = [
    { "name" : "박종선", "height" : 173 },
    { "name" : "연제호", "height" : 175 },
    { "name" : "윤성용", "height" : 180 },
    { "name" : "최주원", "height" : 190 }
]

const 키큰친구 = 친구들.find(조건) // 첫번째 요소만 뽑고 종료9
console.log(키큰친구)

const 키큰친구인덱스 = 친구들.findIndex(조건)
console.log(키큰친구인덱스)

const a = [1,2,3,4,5]
console.log( a.includes(3) )

const ret = a.findIndex( e => e === 3 )
console.log(ret)