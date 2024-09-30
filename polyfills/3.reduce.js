//Initial value can be provided 
// Reduce the value to a particular element at each step with result from prev step
//logic for loop
// Always get a previous value on which next computation to be performed (accumlator)

const arr = [10, 20, 30, 40, 50]
const arr1 = arr.reduce((prev, current) => prev + current, 0) // 0 is initialValue

console.log(arr)
console.log(arr1)
// if we are providing initialValue then 8 iteration will be there
// if we are not providing initialValue then 7 iteration will be there

Array.prototype.reduce = null;
Array.prototype.myReduce = function (callback, initialValue = null) {
    let accumlator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumlator = callback(accumlator, this[i], i, this)
    }
    return accumlator
}
const arr2 = arr.myReduce((prev, current) => prev + current, 0)
console.log(arr2)

// [ 10, 20, 30, 40, 50 ]
// 150
// 150