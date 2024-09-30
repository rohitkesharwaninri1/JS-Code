// What ever the thing shettel first that one will receive
const promise1 = new Promise((resolve, reject) => {
    // resolve("Result1")
    reject("reject")
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolve")
        // reject("reject")
    }, 1000)
})
const promise3 = 10;

Promise.race([promise2, promise1, promise3]) // "Result1"
    .then((result) => { console.log(result) })
    .catch((err) => { console.log(err) })
// Same
// Promise.race([promise2, promise1, promise3]) // "Result1"
//     .then((result)=>{console.log(result)}, (err)=>{console.log(err)})

Promise.myRace = (arrayOfPromises) => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arrayOfPromises.length; i++) {
            // Promise.resolve(arrayOfPromises[i])
            //     .then((data) => {
            //         resolve(data)
            //     })
            //     .catch((err) => {
            //         reject(err)
            //     })
            Promise.resolve(arrayOfPromises[i])
                .then((data) => { resolve(data)}, (err) => {reject(err)}) // this is tricky we need to use this syntax in case of error

}
    })
}
Promise.myRace([promise2, promise1, promise3]) // "Result1"
    .then((result) => { console.log(result) })
    .catch((err) => { console.log(err) })