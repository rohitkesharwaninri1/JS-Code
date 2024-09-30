const promise1 = new Promise((resolve, reject) => {
    resolve("Result1")
    // reject("reject")
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolve")
        // reject("reject")
    }, 1000)
})
const promise3 = 10;

// Promise.any([promise1, promise2, promise3]) // "Result1"
//     .then((result)=>{console.log(result)})
//     .catch((err)=>{console.log(err)})

// Promise.any([promise3, promise2, promise1]) // 10
//     .then((result)=>{console.log(result)})
//     .catch((err)=>{console.log(err)})   
    
// Promise.any([promise1, promise2])  
//     .then((result)=>{console.log(result)})
//     .catch((err)=>{console.log(err)})        
//if All rejected happen then => [AggregateError: All promises were rejected]

Promise.myAny = (arrayOfPromises) =>{
    return new Promise((resolve, reject)=>{
        let errrors = [];
        let counter = 0;
        for(let i=0; i < arrayOfPromises.length; i++){
            Promise.resolve(arrayOfPromises[i]).then((data)=>{
                resolve(data)
            })
            .catch((err)=>{
                errrors[i] = err
                counter++
                if(counter === arrayOfPromises.length){
                    reject(new AggregateError(errrors, "All promises were rejected"))
                }
            })
        }
    })
}

Promise.myAny([promise1, promise2, 10])  
    .then((result)=>{console.log(result)})
    .catch((err)=>{console.log(err)})  