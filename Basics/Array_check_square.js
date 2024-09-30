// checking square in another array
// arr1=[1,2,3,4], arr2=[1,4,9,16] //output true
// arr1=[1,2,3,4], arr2=[1,4,4,16] //output false


//M-1
// o(n2) quadatic
// function checkSquare(arr1, arr2){
//     for(let i=0; i<arr1.length; i++){
//         let isSquare = false;
//         for(let j=0; j<arr2.length; j++){
//            if((arr1[i] * arr1[i])==arr2[j]){
//                 isSquare = true
//            } 
//            if(j===arr2.length-1){
//                if(!isSquare){
//                    return false
//                }
//            }
//         }
//     }
//     return true
// }

// const result = checkSquare([1,2,3,4],[1,9,4,25])
// console.log(result)
//true


//M-2
// o(n) linear
//arr1=[1,2,3,4]
//arr2=[1,4,9,16]
//map1 = { '1': 1, '2': 1, '3': 1, '4': 1 }
//map2 = { '1': 1, '4': 1, '9': 1, '16': 1 }
//check key1 should be square of key2
//check value1 should be same of value2

function checkSquare(arr1, arr2){
    map1 = {}
    map2 = {}
    for(item of arr1){
        map1[item] = (map1[item]||0) + 1;
    }
    
    for(item of arr2){
        map2[item] = (map2[item]||0) + 1;
    }
    console.log(map1)
    console.log(map2)
    for(let key in map1){
        if(!map2[key*key]){ //obj key compare in term of square
            return false
        }
        if(map1[key]!==map2[key*key]){ //value compare 
            return false
        }       
    }
    return true
}

const result = checkSquare([1,2,3,4],[1,9,4,25])
console.log(result)
//false