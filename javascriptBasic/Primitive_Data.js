// LESSON 13
/**
 1. Primitive Data
 - Number
 - String
 - Boolean
 - Undefined
 - Null
 - Symbol 
 2.Complex Data
 - Function
 - Object : Array, Object
 */

//  Number type

let rank = 100;
let rate = 20.5;

//  String type

let string = "Uyen Nguyen's"; // == "Uyen Nguyen's"
console.log(string);

// Boolean type

let isFalse = false;

// Undefined

let cat;

// Null

let isNull = null; //nothing

// Symbol

let id = Symbol("id"); // unique
let id1 = Symbol("id"); // unique
console.log(id === id1);

// Function
let myFunction = function () {
  console.log("Hi. Xin chao cac ban");
};

myFunction();

// Object types
// Object
let myObject = {
  name: "Uyen Nguyen", // key : value ,
  age: "18",
  myFunction: function () {
    //
  },
};

console.log("myObject:::", myObject);
//  Array
let myArray = ["Javascript", "PHP", "Ruby"];
console.log("myArray:::", myArray);

// typeof: get the type of any value.
console.log(typeof myObject);
console.log(typeof id);
console.log(typeof rank);
console.log(typeof isNull); // return 'Object' ?????
