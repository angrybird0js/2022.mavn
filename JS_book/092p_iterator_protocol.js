const log = console.log
function* gen() {
    yield 10
    if (false) yield 20
    yield 30
    return 90
    yield 30
}

let iter = gen()

log([...iter])
log(iter)

iter = gen() // 없으면 이하의 값이 안나온다.

for (const a of iter) {
    log(a)
}

