//String Anagram Problem
// 'hello' -> 'lleho' ==>true 
// 'hello' -> 'lheho' ==>false 

//apporoach
//check length of both the string
//if not equal return false
//string "hello"
//{h:1,e:1,l:2,o:1}

// Now take element of string 2 and do substring with -1 of string 1

//if {h:0,e:0,l:0,o:0} then return true otherwise false

function checkAnagram(string1, string2){
    if(string1.length !== string2.length){
        return false;
    }
    let counter = {}

    for(let letter of string1){
        counter[letter] = (counter[letter] || 0)+1
    }
    console.log(counter)

    for(let items of string2){
        if(!counter[items]){
            return false;
        }
        counter[items] -= 1
    }
    console.log(counter)
    return true;     
}

const isAnagram = checkAnagram('hello', 'llohe');
console.log(isAnagram);