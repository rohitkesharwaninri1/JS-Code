//Recursion : when function call itself
//otherwise it will get called for infinite time
// if a function call itself then there must be end point 

let counter = 0;
function demo(num){
    if(counter > num){
        return
    }
    console.log(counter);
    counter++;
    demo(num)    
}
demo(10);