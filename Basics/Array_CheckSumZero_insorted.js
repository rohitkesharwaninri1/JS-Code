console.log("Jai Shree Ganesh");
// M-1 
// T.C. => O(n^2) quadratic time complexity 
// input = [-5,-4,-3,-2,0,2,4,6,8]
// output = [-4,4]


// function checkSumZero(arr){
//     for(arrElement in arr){
//        for(let j=1; j<arr.length; j++ ){           
//            if(arr[arrElement] + arr[j] == 0){
//                return [arr[arrElement],arr[j]]
//            }
//        }
//     }
// }
// const result = checkSumZero([-5,-4,-3,-2,0,2,4,6,8])
// console.log(result);

// M-2
// T.C. => O(n)
// input = [-5,-4,-3,-2,0,2,4,6,8]
// output = [-4,4]
// o(n) linear time complexity 

function checkSumZero(arr){
  left = 0,
  right = arr.length-1;
  
  while(left < right){
      sum = arr[left] + arr[right];
      if(sum===0){
          return [arr[left], arr[right]];
      }
      else if (sum>0){
          right--;
      }
      else{
          left++;
      }
  }
}
const result = checkSumZero([-5,-4,-3,-2,0,2,4,6,8])
console.log(result);
