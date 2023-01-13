const f1 = obj => {
    obj = null
}

let b1 = { "a": 1 }
f1(b1)
console.log(b1) // 또다른 주소값을 생성하고 할당

const f2 = array => {
    array = null
}

let b2 = []
let a2 = b2
f2(b2)
console.log(b2)

const swap = (a, b) => {
    let temp = a
    a = b
    b = temp
}

let x = 1
let y = 2
swap(x, y)
console.log(x, y) //swap 일어나지 않는다