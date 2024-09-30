// always return new arr
// logic of the loop
// always check for condition

let arr = [2, 4, 5, 6, 7, 8]
console.log(arr)
// const arr1 = arr.filter((item, index, array)=>item < 5)
// console.log(arr1)

Array.prototype.filter = null
Array.prototype.myFilter = function (calback) {
    const newArray = [];
    for(let i = 0; i < this.length; i++){
        if(calback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}
const arr3 = arr.myFilter((item, index, array)=>item < 5)
console.log(arr3)

// use only normal function not use es6 function