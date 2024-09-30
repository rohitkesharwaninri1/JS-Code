// always return new arr
// logic of the loop

let arr = [2, 4, 5, 6, 7, 8]
console.log(arr)
const arr1 = arr.map((item, t, arr) => item*2)
console.log(arr1)

Array.prototype.map = null
Array.prototype.myMap = function(calback){
    const newArr = []
    for(let i=0; i < this.length; i++){
        newArr.push(calback(this[i], i, this))
    }
    return newArr
}
const arr2 = arr.myMap((item, t, arr) => item*2)
console.log(arr2)
