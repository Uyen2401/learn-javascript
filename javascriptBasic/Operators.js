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
grade **= 2;
console.log("grade:::", grade);

// LESSON 8
/**
 String operator

 */
 var firstName = "Uyen";
 var lastName = "Nguyen";
 
 firstName = "Vanasa_" + firstName;
 console.log(firstName + " " + lastName);
 
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
 
 if (rangeFrom >= rangTo) {
   console.log("From value should be less than To value!");
 } else {
   console.log("Valid");
 }
 
 //  LESSON 10
 /*
   Boolean
   */
 
 let isSuccess = rangeFrom < rangTo;
 console.log(isSuccess);


 // LESSON 12
/**
 Logical Operators
 Operator || Description
  &&  logical and
  ||  logical or
  !	  logical not
 */

if (rangeFrom > 0 && rangTo > 0 && rangeFrom < rangTo) {
    console.log("Valid range");
  }
  
  if (rangeFrom < 0 || (rangTo > 0 && rangeFrom < rangTo)) {
    console.log("Valid range");
  }
  
  if (!(rangeFrom > rangTo)) {
    console.log("Valid range");
  } else {
    console.log("Invalid range");
  }

  //  LESSON 14
/**
 Comparison Operators_ Part 2
 Strict equality (===) : equal value and equal type
 Strict inequality (!==) : 	not equal value or not equal type
 */

let myMoney = "0";
let mySaving = 0;

console.log(myMoney == mySaving); // return 'true'
console.log(myMoney === mySaving); // return 'false'

console.log(myMoney != mySaving); // return 'true'
console.log(myMoney !== mySaving); // return 'false'

//  LESSON 15
/**
 Comparison and Logical Operators +  Statement-if..else
 */

var a = 1;
var b = 2;

var result = a < b && a < 0; // Return "false": là kết quả của phép ss 2nd (a < 0 : false)
console.log("result:::", result);

var logicalAND = "A" && "B" && "C";
console.log("Logical operator_AND (&&):::", logicalAND); // Return "C"

logicalAND = null && "B" && "C";
console.log("Logical operator_AND (&&):::", logicalAND); // Return "null"

// if (result) {
//   console.log("A < B");
// } else {
//   console.log("A > B");
// }

if (!logicalAND) {
  console.log("DIEU KIEN DUNG");
} else {
  console.log("DIEU KIEN SAI");
}

var logicalOR = "A" || "B" || "C";
console.log("Logical operator_OR (||):::", logicalOR); // Return "A": Ngược lại với AND chỉ cần đọc value bên trái != 'false' là lấy luôn ko check tiếp

logicalOR = "A" || "B" || undefined || "D";
console.log("Logical operator_OR (||):::", logicalOR); // Return "A"

logicalOR = 0 || NaN || undefined || false;
console.log("Logical operator_OR (||):::", logicalOR); // Return "False"

if (!logicalOR) {
  console.log("DIEU KIEN DUNG");
} else {
  console.log("DIEU KIEN SAI");
}