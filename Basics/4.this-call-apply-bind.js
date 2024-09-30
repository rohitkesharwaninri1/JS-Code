// Apply, call, Bind
// this is used for self referencing
//////////////////// Call /////////////////////////////////
/////////////////// 1st senerio
//It’s a predefined method in javascript.
//This method invokes a method (function) by specifying the owner object.
//call() method allows an object to use the method (function) of another object.
let userDetails = {
  name: "rohit",
  printDetails: function () {
    console.log(this.name);
  },
};

userDetails.printDetails(); //"rohit"

let userDetails2 = {
  name: "kesharwani",
};

// to reduce function printDetails we can use call
//function borrowing
userDetails.printDetails.call(userDetails2); //kesharwani
// now here it will point userDetails2 for to access name

/////////////////// 2nd senerio
// this is used for to self reference

let userData = {
  name: "rohit",
};
const printDetails = function (state, country) {
  console.log(this.name, state, country);
};
printDetails.call(userData);
printDetails.call(userData, "MP", "india");

//////////////////// Apply /////////////////////////////////
//here 2nd parameter will be array of items
//
//The apply method is similar to the call() method. The only difference is that,
//call() method takes arguments separately whereas, apply() method takes arguments as an array.
printDetails.apply(userData, ["UP", "india"]);

//////////////////// Bind /////////////////////////////////
//Bind is similar to call but here instead of directly calling this function
// we can make copy of function and use the  same function when ever need
//This method returns a new function, where the value of “this” keyword will be bound to the owner object, which is provided as a parameter.

let newData = printDetails.bind(userData, "Bind", "india");
newData();
