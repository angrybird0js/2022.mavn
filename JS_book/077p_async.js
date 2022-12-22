// async await

const a = () => {

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log(1)
            resolve(1)
    
        }, Math.random() * 100 ) // 기다리는 시간
    })

}

const b = () => {

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log(2)
            resolve(2)
    
        }, Math.random() * 100 ) 
    })

}

const c = () => {

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log(3)
            resolve(3)
    
        }, Math.random() * 100 ) 
    })


}

const main = async () => {
    await a()
    await b()
    await c()
}

main()
