//Help Recursive function
//[1,2,3,4,5,6,7,8,9,10] find output
//[1,3,5,7,9] => output
//num%2 !=== 0

function findOdd(arr) {
    let result = [];
    function helperRecursive(arrInput) {
        if (arrInput.length === 0) {
            return;
        }
        if (arrInput[0] % 2 !== 0) {
            result.push(arrInput[0])
        }
        helperRecursive(arrInput.slice(1)); //recursively call
    }
    helperRecursive(arr)
    return result
}
const res = findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(res);
//[ 1, 3, 5, 7, 9 ]