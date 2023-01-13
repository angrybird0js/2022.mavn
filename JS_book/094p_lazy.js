// fxjs가 설치되어 있나 확인

const _ = require("fxjs/Strict")
const L = require("fxjs/Lazy")
const C = require("fxjs/Concurrency")

const a = [1,2,3,4,5,6,7,8]
const ret = _.go (
    a,
    _.map(a => a),
    _.filter(a => a % 2),
    _.take(2)
)
console.log(ret)

const ret_lazy = _.go(
    a,
    L.map(a =>a),
    L.filter(a => a % 2),
    L.take(2)
)
console.log([...ret_lazy])
