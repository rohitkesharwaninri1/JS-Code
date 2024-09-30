// Input is array of promises or any value
// Return array of result of input promises
// Wait for all promises to be resolved or any to be rejected
// You will not get result if any of promise is rejected.
// But get in the code of all 

const promise1 = new Promise((resolve, reject) => {
    resolve("Result1")
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolve")
        // reject("reject")
    }, 1000)
})

// Promise.all([promise1, promise2])
//     .then((result) => { console.log("result", result) })
//     .catch((err) => { console.log("error") })

Promise.myAll = (arrayOfPromised) => {
    return new Promise((resolve, reject) => {
        const results = [];
        let counter = 0;
        for (let i = 0; i < arrayOfPromised.length; i++) {
            Promise.resolve(arrayOfPromised[i]).then(data => { //Promise.resolve handle when we have number in array
                results[i] = data
                counter++
                if (counter === arrayOfPromised.length) {
                    resolve(results)
                }
            }).catch((err) => {
                reject(err)
            })
        }
    })
}

Promise.myAll([promise1, promise2, 10])
    .then((result) => { console.log("result", result) })
    .catch((err) => { console.log("error", err) })