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

if (isSuccess) {
  console.log("Valid");
} else {
  console.log("Invalid");
}

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

//  LESSON 16 : STRING
/**
 1.Tạo chuỗi
- Cách tạo
- Nên dùng cách nào ? Lý do ?
- Kiểm tra data type
 */

let gender = "Female"; //Cách 1 ==> Nên dùng cách này
gender = String("Female"); //Cách 2

console.log(typeof gender); // Data type: Object

// 2. Backslash (\) in Javascript

fullName = "Nguyen Thuy Uyen 'xinh dep'";

fullName = "Nguyen Thuy Uyen 'xinh dep'";

console.log("fullName:::", fullName);

// Template string ES6
console.log(`Toi la ${fullName} và là ${gender}`);

//  LESSON 17 : STRING (cont)

// A. String properties
// 1.Length
let myString = "   String Properties   ";
let sln = myString.length; // return: 17
// console.log(sln);

// B. String Method:

// 2. Find index : indexOf() Cung cấp vị trí của một giá trị char có trong chuỗi đã cho.
console.log(myString.indexOf("t")); //return 1
console.log(myString.lastIndexOf("t")); // return 13
// 3. Cut string: slice() trích xuất một phần của chuỗi và trả về nó dưới dạng một chuỗi mới mà không sửa đổi chuỗi gốc.
//e.g., str.slice(beginIndex[, endIndex])
console.log(myString.slice(7)); // return: Properties
console.log(myString.slice(0, -11)); // return: String

// 4. Replace: replace() Thay thế một chuỗi nhất định với sự thay thế được chỉ định.
console.log(myString.replace("Properties", "Replace"));

// 5. Convert to Upper case: toUpperCase() trả về giá trị chuỗi được chuyển đổi thành chữ hoa (giá trị sẽ được chuyển đổi thành chuỗi nếu không phải là một chuỗi).
// e.g., str.toUpperCase()

console.log(myString.toUpperCase()); // return: STRING PROPERTIES

// 6. Convert to lower case: toLowerCase() trả về giá trị chuỗi được chuyển đổi thành chữ thường
// e.g., str.toLowerCase()

console.log(myString.toLowerCase()); // Return: string properties

// 7. Trim: (trim(), trimStart(), trimEnd())

console.log(myString.trim());

// 8. Split:  biến 1 chuỗi thành 1 mảng các chuỗi, bằng cách tách chuỗi theo ký tự dc chỉ định
// Note: Tìm ra điểm chung để cắt hợp lý

console.log("The quick brown fox".split(" ")); //return: [ 'The', 'quick', 'brown', 'fox' ]

let languages = "Javascript, PHP, Ruby";
console.log(languages.split(", ")); //return: [ 'Javascript', 'PHP', 'Ruby' ]
console.log(languages.split(" ")); //return: [ 'Javascript,', 'PHP,', 'Ruby' ]
console.log(languages.split(",")); //return: [ 'Javascript', ' PHP', ' Ruby' ]

// 9. Get a character by index
const myName2 = "Vanasa";

console.log(myName2.charAt(0));
console.log(myName2[0]);
console.log(typeof myName2.charAt(10)); // return: chuỗi rỗng
console.log(myName2[10]); // return: undefined

//  LESSON 18 : Array
// Note: Index đánh tự động bắt đầu từ số 0

// A. Array
// Method 1:
const cars = [
  "Saab",
  "Volvo",
  "BMW",
  "Mercedes",
  "Tesla",
  null, // Array có thể chứa tất cả kiểu dữ liệu
  undefined,
  function () {
    console.log("Đang học Javascript");
  },
  { size: "37", color: "white" },
  123,
];

console.log(cars);

// Method 2: Ko khuyến khích sử dụng vì cách này sẽ tạo ra 1 instant làm mất tg hơn, thực thi chậm hơn
// const listCars = new Array(
//   "Saab",
//   "Volvo",
//   "BMW",
//   "Mercedes",
//   "Tesla",
//   null, // Array có thể chứa tất cả kiểu dữ liệu
//   undefined,
//   function () {
//     console.log("Đang học Javascript");
//   },
//   { size: "37", color: "white" },
//   123
// );

// 2. Check data type

console.log(typeof cars); //Return: Object =>> Làm s phân biệt Object và Array ?? >> Dùng Array.isArray()
console.log(Array.isArray(cars)); // return: true
console.log(Array.isArray({})); // return: false

// 3. Độ dài mảng
console.log(cars.length);

//  4. Lấy phần tử theo index
console.log(cars[1]);

// B. Array Methods
const fruits = ["Banana", "Apple", "Orange"];
// 1. To string
console.log(fruits.toString()); // Chuyển kiểu dữ liệu từ Array sang String. Mặc định khi chuyển sẽ auto thêm dấu ',' để ngăn cách các phần tử

// 2. Join: Kết hợp các phần tử của một mảng dưới dạng một chuỗi.
console.log(fruits.join(" - "));

// 3. Pop: Loại bỏ và trả về phần tử cuối cùng của một mảng.
console.log(fruits.pop());
console.log(fruits); // Return: [ 'Banana', 'Apple' ]

console.log(fruits.pop());
console.log(fruits); // Return: [ 'Banana']

console.log(fruits.pop());
console.log(fruits); // Return: []

// 4. Push: Thêm một hoặc nhiều phần tử vào cuối của một mảng.
console.log(fruits.push("Guava", "Avocado")); // return: 2
console.log(fruits); // return: ['Guava', 'Avocado' ]

// 5. Shift(): Loại bỏ và trả về phần tử đầu tiên của một mảng (Ngược lại với Pop)
console.log(fruits.shift());
console.log(fruits); // Return: [ 'Avocado']

// console.log(fruits.shift())
// console.log(fruits) // Return: []

// 6. unshift(): thêm một hoặc nhiều phần tử vào đầu mảng đã cho.
console.log(fruits.unshift("Starfruit", "Mango")); // return: 3
console.log(fruits); // return: [ 'Starfruit', 'Mango', 'Avocado' ]

// 7. splice(): Thêm / xóa các phần tử đến / từ mảng đã cho
console.log(fruits.unshift("Banana", "Apple", "Orange"));

fruits.splice(1, 1);
console.log(fruits);

fruits.splice(1, 2, "Apple");
console.log(fruits);

// 8. concat(): Trả về một đối tượng mảng mới chứa hai hoặc nhiều mảng được hợp nhất.
const fruits2 = ["Coconut", "Pitaya"];

console.log(fruits2.concat(fruits));

// 9. slice(): Trả về một mảng mới chứa bản sao của một phần của mảng đã cho.
console.log(fruits2.slice(1));

//  LESSON 19 : CONDITIONAL STATEMENTS
//A. IF-ELSE Statement

let date = 2;

if (date === 2) {
  console.log("Hom nay la thu 2");
} else if (date === 3) {
  console.log("Hom nay la thu 3");
} else if (date === 4) {
  console.log("Hom nay la thu 4");
} else {
  console.log("Khong biet");
}

function greatestNumber(a, b, c) {
  if (a > b && a > c) {
    console.log("The greatest number is " + a);
  } else if (b > a && b > c) {
    console.log("The greatest number is " + b);
  } else {
    console.log("The greatest number is " + c);
  }
}

greatestNumber(30, 20, 30.5);

// B. Switch Case

let day_of_week_name = 7;

switch (day_of_week_name) {
  case 0:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Unknown Day");
}

function categorizeBean() {
  let beanList = [
    "Soybeans",
    "Mung Beans",
    "Black Beans",
    "Soybeans",
    "Mung Beans",
    "Black Beans",
  ];

  let basketWhite = [];
  let basketGreen = [];
  let basketBlack = [];

  for (let index in beanList) {
    switch (beanList[index]) {
      case "Soybeans":
        basketWhite.push(beanList[index]);
        break;
      case "Mung Beans":
        basketGreen.push(beanList[index]);
        break;
      case "Black Beans":
        basketBlack.push(beanList[index]);
        break;
      default:
        console.log("ko biêt");
    }
  }

  console.log("Đậu trắng::::", basketWhite);
  console.log("Đậu xanh::::", basketGreen);
  console.log("Đậu đen::::", basketBlack);
}

categorizeBean();

//Cho 1 mảng  n > 10 p.tử
// Tính tổng các giá trị trong mảng
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let sum = 0;
let even = [];
for (let index in numbers) {
  sum += numbers[index];
}
console.log(sum);

// Lấy các phần tử có giá trị chia hết cho 2

for (let index in numbers) {
  if (numbers[index] % 2 === 0) {
    even.push(numbers[index]);
  }
}
console.log(even);

// Lấy các phần tử từ vị trí số 5
console.log(numbers.slice(5));
let getNumber = [];
for (let index in numbers) {
  if (index >= 5) {
    getNumber.push(numbers[index]);
  }
}
console.log(getNumber);