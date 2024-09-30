//count unique number in sorted array
//[1,1,2,2,2,3,4,5,6,7,8,8,9,11,11,11]
// output =>10
// O(n)

// login only for  sorted array
//condition
//take i = 0, j=1
//on loop then j++

//if arr[i] !== a[j]
//then i++ and arr[i] = a[j]

// at the loop end the value of arr[i] we be ans
function findUniqueNo(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] != arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;    
}

const ans = findUniqueNo([1, 1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 8, 9, 11, 11, 11])
console.log(ans)