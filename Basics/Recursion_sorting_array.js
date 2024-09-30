//Sorting using recursive function

//[2,3,1,4] by default
//[2,1,3,4] step 1
//[1,2,3,4] final

//check 1st and 2nd elements if first is less than second then 
//increase elements to next
// if not than swap and again call same


let i = 0;
let j = 1;
let newArray=[];
let myArr =[2,3,1,4,5,5,9,8,8,7,5,10];

function isSorted(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]>arr[i+1]){
            return false;
        }        
    }
    return true;
}
function SortingArray(arr){
    if(isSorted(arr)){
        newArray = arr;
        return;
    }
    else if(arr[i]<=arr[j]){
        i++;
        j++;          
        SortingArray(arr)    
    }
    else{
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i=0;
        j=1;
        SortingArray(arr) 
    }
}

const result = SortingArray(myArr)
console.log(newArray);
//[1,2,3,4]

