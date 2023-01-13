function arrow() {
    setTimeout( () => {
        console.log(this) // arrow 자신을 가리킨다 
    }, 1000)
}

function not_arrow(){
    setTimeout( function() {
        console.log(this) // window, node에서는 timeout
    }, 1000)
}
const p1 = new not_arrow()
const p2 = new arrow()