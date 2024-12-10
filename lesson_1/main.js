// LESSON 1
// Khai bao bien
var fullName = "Nguyen Thuy Uyen";
// var age = 18; // Khai bao tuoi



// LESSON 2

/**
 * Comment in JavaScript
 */

// Goi ham thong bao
// alert(fullName);
// alert(age);
//



// LESSON 3
/**
 * Ham Build-in JavaScript
 * 1. Alert
 * 2.Console
 * 3.Confirm
 * 4.Prompt
 * Set timeout
 * Set interval
 */
// 2. Console
console.log(fullName);
// 3.Confirm
// confirm("Xac nhan ban du tuoi!");
// 4.Prompt
// prompt("Xac nhan ban du tuoi!");
// 5. Set timeout
setTimeout(() => {
  console.log("Thong bao ne");
}, 1000);
// 6.Set interval
// setInterval(()=>{
//     console.log('Log::::' + Math.random())
// },10)



// LESSON 4
/**
 1. Arithmetic: Toan tu so hoc
 2. Assignment: Toan tu gan
 3. Comparison: Toan tu so sánh
 4. Logical: Toan tu logic
 */

//  1.Arithmetic
let Arithmetic = 1 + 2;
console.log(Arithmetic);

// 2.Assignment
// let firstName = "Uyen"; // "="

// 3. Comparison
let age = 18;
let height = 160;

if (age < height) {
  console.log("Dung");
}

// 4.Logical

if (age > 0 && height > 0) {
  console.log("age & height lớn hơn 0");
}

// LESSON 5
/**
 Arithmetic operators
 1. + -> Add
 2. - ->Subtraction
 3. * ->Multiply
 4. ** ->Accumulated
 5. / ->Split
 6. % ->Divide the balance
 7. ++ -> Increment
 8. --  -> Decrement
 */

let weight = 50;

var BMI = weight / (height / 100) ** 2;

// BMI++
BMI--;

console.log(BMI);

// LESSON 6
/** Increment/Decrement operators (++/--)
 Prefix & Postfix
 */

// Prefix
console.log(++age);

//  var output = --age;
//  console.log('output::::', output);

//  Postfix
/**
 Step 1: Copy value "age" ('age copy')
 Step 2: age = age + 1 => age = 19
 Step 3: Return 'age copy'
 */
var output = age++;
console.log("output::::", output);
console.log("age:::", age);

output = age++ * 2 - --age * 2;
//  18 * 2 - 18 * 2
console.log("output::::", output);

// LESSON 7
/**
 Assignment Operators
 =	x = y	x = y
 +=	x += y	x = x + y
 -=	x -= y	x = x - y
 *=	x *= y	x = x * y
 /=	x /= y	x = x / y
 %=	x %= y	x = x % y
**= x **= y	x = x ** y
 */

var grade = 9;
grade **= 2
console.log('grade:::', grade);



// LESSON 8
/**
 String operator

 */
 var firstName = "Uyen"; 
 var lastName = 'Nguyen';

 firstName = 'Vanasa_' + firstName
 console.log(firstName + ' ' + lastName);


//  LESSON 9
/**
 Comparison Operators

 Operator || Description
 ==	|| equal to
 ===|| equal value and equal type
 !=	|| not equal
 !==|| not equal value or not equal type
 >	|| greater than
 <	|| less than
 >=	|| greater than or equal to
 <=	|| less than or equal to
 */


 let rangeFrom = 1;
 let rangTo = 2;

 if(rangeFrom >= rangTo){
    console.log('From value should be less than To value!')
 } else {
    console.log('Valid')
 }


 //  LESSON 10
 /*
  Boolean
  */

  let isSuccess = rangeFrom < rangTo;
  console.log(isSuccess);


// LESSON 11
/**
 If - else
 */

 /**
  Convert to Boolean -> False
  0
  false
  '' OR ""
  undefined
  NaN
  null
  */


 if (isSuccess){
    console.log('Valid')
 } else {
    console.log('Invalid')
 };


// LESSON 12
/**
 Logical Operators
 Operator || Description
  &&  logical and
  ||  logical or
  !	  logical not
 */

if (rangeFrom > 0 && rangTo > 0 && rangeFrom < rangTo) {
    console.log('Valid range')
}

if (rangeFrom < 0 || rangTo > 0 && rangeFrom < rangTo) {
    console.log('Valid range')
}

if (!(rangeFrom > rangTo)) {
    console.log('Valid range')
} else {
    console.log('Invalid range')
}


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

let string = 'Uyen Nguyen\'s' // == "Uyen Nguyen's" 
console.log(string);

// Boolean type

let isFalse = false;

// Undefined

let cat;

// Null

let isNull = null; //nothing

// Symbol

let id = Symbol ('id'); // unique
let id1 = Symbol ('id') // unique
console.log(id === id1)

// Function
let myFunction = function(){
    console.log('Hi. Xin chao cac ban') 
}

myFunction();

// Object types
// Object
 let myObject = {
    name: 'Uyen Nguyen', // key : value ,
    age: '18',
    myFunction: function(){
        //
    }
 }

 console.log('myObject:::', myObject)
//  Array
let myArray = [
    'Javascript',
    'PHP',
    'Ruby'
];
console.log('myArray:::', myArray);

// typeof: get the type of any value.
console.log(typeof myObject);
console.log(typeof id);
console.log(typeof rank);
console.log(typeof isNull); // return 'Object' ?????


//  LESSON 9
/**
 Comparison Operators_ Part 2
 Strict equality (===)
 Strict inequality (!==)
 */

 let myMoney = '0';
 let mySaving = 0;

 console.log( myMoney == mySaving); // return 'true'
 console.log( myMoney === mySaving); // return 'false'

 console.log( myMoney != mySaving); // return 'true'
 console.log( myMoney !== mySaving); // return 'false'