/**
Phần 1: Giới thiệu JavaScript và môi trường chạy

1. Viết đoạn code in dòng chữ `"Hello, JavaScript!"` ra màn hình console.
2. Thực hành chạy JavaScript trong trình duyệt và qua Node.js.
3. Tạo tệp `.js` và nhúng vào trang HTML.

*/
console.log('"Hello, JavaScript!"');

/**
Phần 2: Khai báo biến (var, let, const)
*/

// 4. Tạo biến `x` với giá trị là `10` và in ra giá trị của nó.
let x = 10;
console.log("Gia tri cua x la:::", x);

// 5. Thử khai báo một biến bằng `const` và cố gắng thay đổi giá trị. Quan sát kết quả.
// const fruit = ["mango", "bannana", "peach", "orange"];
// fruit = ["bannana", "peach", "orange"]; //TypeError: Assignment to constant variable.
// console.log("Fruit:::", fruit);

// const myMoney = 0;
// myMoney = 100000; //TypeError: Assignment to constant variable.
// console.log("myMoney:::", myMoney);

// => Constant cannot be reassigned after it has been initialized.

// 6. Sử dụng cả `var`, `let`, và `const` để khai báo biến và so sánh phạm vi của chúng trong một block code (`if` hoặc `{}`).

function compareVariables() {
  const insideBlockCode = true;
  if (insideBlockCode) {
    var fullName = "Vanasa" + "_" + "Uyen" + " " + "Nguyen";
    let age = 18;
    const gender = "Female";

    console.log("Var inside block code:::", fullName);
    console.log("let inside block code:::", age);
    console.log("const inside block code:::", gender);
  }

  console.log("Var outside block code:::", fullName);
  //   console.log("let outside block code:::", age); // ReferenceError: age is not defined
  //   console.log("const outside block code:::", gender); //ReferenceError: gender is not defined
}

compareVariables();

/**
Phần 3: Kiểu dữ liệu
*/

// 7. Tạo một biến kiểu `string` và nối chuỗi với một biến khác.

let temp = "Hello";
let intro = "My name is Uyen";
let message = "Have a nice day!";

// Using '+'
console.log("Introduce:::", temp + ", " + intro + ". " + message);

// Using ``
console.log("Introduce:::", `${temp}, ${intro}. ${message}`);

// 8. Tạo biến kiểu `number` và thực hiện các phép toán cộng, trừ, nhân, chia.

let a = 3;
let b = 2;
let sum = a + b;
console.log("Tổng là:::", sum); // return: 5

let c = 1;
let different = a - c;
console.log("Hiệu là :::", different); // return: 2

let multiply = a * b;
console.log("Tích là :::", multiply); // return: 6

let split = b / c;
console.log("Thương là:::", split); // return: 2

// Kiểm tra kiểu dữ liệu của các biến bằng `typeof`.

function typeOfOperator() {
  let number = 18;
  let string = "Javascript khó như quỷ";
  let boolean = true;
  let object = { size: "37", color: "white" };
  let array = ["Banana", "Apple", "Orange"];
  let uyen = function () {
    console.log("Đang học Javascript");
  };
  let isNull = null;
  let none; //undefined

  console.log(typeof number);
  console.log(typeof string);
  console.log(typeof boolean);
  // setTimeout(function () {
  //   console.log("Chờ xíu 1");
  // }, 10000);
  console.log(typeof object);
  console.log(typeof array);
  console.log(typeof uyen);
  console.log(typeof isNull);
  console.log(typeof none);
}

typeOfOperator();

// Khai báo biến với giá trị `null` và biến khác không được gán giá trị (mặc định là `undefined`).
let isNull = null;
let none; //undefined

// Tạo một đối tượng đơn giản với các thuộc tính như `name`, `age`, `isStudent`.

let object = { name: "uyen", age: 18, isStudent: true };
console.log(object);

/**
Phần 3: Phần 4: Toán tử
*/

// 12. Thực hiện các phép toán số học: cộng, trừ, nhân, chia, chia lấy dư.
let first = 3;
let second = 2;
let third = 5;

let sum2 = first + second;
console.log("Tổng là:::", sum); // return: 5

let different2 = first - third;
console.log("Hiệu là :::", different); // return: 2

let multiply2 = first * second;
console.log("Tích là :::", multiply); // return: 6

let split2 = second / third;
console.log("Thương là:::", split); // return: 2

let divideBalance = (first * second) % 5;
console.log("Phép chia lấy phần dư:::", divideBalance); // return: 1

// 13. Kiểm tra kết quả của các phép so sánh (`>`, `<`, `>=`, `<=`, `===`, `!==`)
let i = 1;
let i1 = 2;
let i2 = 1;
let i3 = "1";

console.log(i > i1); // return: false
console.log(i < i1); // return : true
console.log(i >= i2); // return: true
console.log(i <= i1); //return: true
console.log(i <= i2); // return: true
console.log(i === i3); // return: false
console.log(i === i2); // return: true
console.log(i !== i3); // return: true

// 14. Thực hiện các phép toán logic (`&&`, `||`, `!`) với các giá trị boolean.
function logicalOperation() {
  let expession1 = 1;
  let expession2 = 2;
  let expession3 = true;
  let expession4 = false;

  console.log(expession1 > 0 && expession2 > 0); // return: true
  console.log(expession1 == 2 && expession2 == 2); // return: false
  console.log(expession1 == 2 || expession2 == 2); // return: true
  console.log(!expession3); // return: false
  console.log(!expession4); // return: true
}
// 15. Thử nghiệm với toán tử gán (`=`, `+=`, `-=`, `*=`, `/=`).
function assignmentOperator() {
  let height = 160;

  height += 1;
  console.log(height); // return: 161

  height -= 1;
  console.log(height); // return: 160

  height *= 2;
  console.log(height); // return: 320

  height /= 2;
  console.log(height); // return: 160

  height %= 3;
  console.log(height); // return: 1
}

assignmentOperator();

// 16. Viết một biểu thức logic kiểm tra một số có nằm trong khoảng từ 10 đến 50.
function isNumberRange(number) {
  console.log(number >= 10 && number <=50)
}

isNumberRange(25); // return: true
isNumberRange(5); // return: false