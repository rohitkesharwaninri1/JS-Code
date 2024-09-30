//javascript is single threaded language,
//it runs first sync code and then async code

1. 
    for(let key in Map)  ==> if Map is object

2.
    for(let key of Map)  ==> if Map is array

3.  //Convert array to map or object
    let map = {}
    let arr = [1,8,2,4,5,6,1,2,8]
    for(item of arr){
        map[item] = (map[item]||0) + 1;
    }    
    console.log(map)
    //output => { '1': 2, '2': 2, '4': 1, '5': 1, '6': 1, '8': 2 }

4. Swapping in JS
    [arr[0],arr[1]] = [arr[1],arr[0]]

