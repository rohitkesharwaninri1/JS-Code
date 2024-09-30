// Binary Search 
// Divide nd Conquer technique
// Binary O(log(n))
//find the index of the given no. in a sorted array 7 
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ==> index 6 => output

//algo
//if array[midIndex] < number
//min = minIndex + 1;
//else if array[midIndex] > number
// max = midIndex-1
//else
//return midIndex

//number = 7
//min=0 , element=1
//max=array.length-1, element=15
//midIndex = (min+max) /2 => (0+14)/2 => 7(times), element= 8

//if array[midIndex] < number(7)
//min = minIndex + 1;
//else if array[midIndex] > number
// max = midIndex-1, min=0 , max=6 {1,2,3,4,5,6,7}
//(min+max)/2 =>3
//index+1 => 4(min), max=6 {5,6,7}
//midIndex = 6
//min=6 max=6
//return midIndex = 6

function SearchIndex(arr,num){
    let min = 0;
    let max = arr.length-1;
    let midIndex;
    while(min<=max){  
        midIndex = Math.floor((min+max)/2)
        console.log("min, max, midIndex,",min, max, midIndex)
        if(arr[midIndex] < num) min=midIndex+1
        else if(arr[midIndex] > num) max = midIndex-1
        else return midIndex
    }
    return -1
}

const ans = SearchIndex([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],7);
console.log(ans);
