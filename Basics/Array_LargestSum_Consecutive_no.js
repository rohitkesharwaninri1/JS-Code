//Largest Sum of Consecutive Digits 
//[1,2,4,5,2,4,5,8,2,4,3,9,9,5]

//num = 4
// output => 26
//conditions
//num > array =>error message
// 10 - 4 +1 loop iteraion

function findConsecutive(arr, num){
    if(arr.length<num){
        throw new Error("num should not greater than array length")
    }
    else{
        let max = 0;
        for(let i=0; i<arr.length-num+1; i++){
            let temp = 0;
            for(let j=0; j<num; j++){
                console.log("i",arr[i],"j",arr[j])
                temp += arr[i+j]
            }
            if(max<temp) max = temp;
        }
        return max;
    }
}

const result = findConsecutive([1,2,3,8,8,8,4,5,6],4)  
console.log(result); //28 