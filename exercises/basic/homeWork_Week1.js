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
function isNumberInRange(number) {
  if (number >= 10 && number <= 50) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

isNumberInRange(25);
isNumberInRange(5);

// Phần 5: Câu lệnh điều kiện

// 17. Viết một chương trình kiểm tra xem một số là chẵn hay lẻ bằng `if...else`.

function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

isEvenOrOdd(15);
isEvenOrOdd(20);

// 18. Dựa vào `age`, kiểm tra người dùng là trẻ em, thanh niên hay người lớn.
function categorizeAge(age) {
  if (age < 10) {
    console.log("Kid");
  } else if (age >= 10 && age <= 18) {
    console.log("Youth");
  } else {
    console.log("Adult");
  }
}

categorizeAge(5);
categorizeAge(16);
categorizeAge(30);

// 19. Viết một chương trình kiểm tra giá trị của một biến và trả về kết quả khác nhau dùng `switch`.
let day_of_week_name = 2;

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
    console.log("Khong biet");
}

//
// 20. Viết chương trình nhận đầu vào là một ngày trong tuần và in ra đó là ngày nào (ví dụ: thứ Hai).
function getDayOfWeek(day) {
  if (day === 2) {
    console.log("Monday");
  } else if (day === 3) {
    console.log("Tuesday");
  } else if (day === 4) {
    console.log("Wednesday");
  } else if (day === 5) {
    console.log("Thursday");
  } else if (day === 6) {
    console.log("Friday");
  } else if (day === 7) {
    console.log("Saturday");
  } else if (day === 8) {
    console.log("Sunday");
  } else {
    console.log("Invalid");
  }
}

getDayOfWeek(1);
getDayOfWeek(2);
getDayOfWeek(3);
getDayOfWeek(4);
getDayOfWeek(5);
getDayOfWeek(6);
getDayOfWeek(7);
getDayOfWeek(8);
getDayOfWeek(9);

// Phần 6: Vòng lặp

// 21. Dùng vòng lặp `for` in ra các số từ 1 đến 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// 22. Sử dụng vòng lặp `while` để in ra các số từ 10 đến 1.
let number = 10;
while (number >= 1) {
  console.log(number);
  number--;
}
// 23. Tạo một mảng và dùng vòng lặp `for` in ra từng phần tử.
const array = ["Uyen", 18, "Vanasa", 1999];
let isNumber = [];
let isString = [];
for (let index in array) {
  console.log(array[index]);
  if (typeof array[index] == "number") {
    isNumber.push(array[index]);
  } else {
    isString.push(array[index]);
  }
}

console.log(isNumber);
console.log(isString);

// 24. Tính tổng các số từ 1 đến 100 bằng vòng lặp.
let sum1 = 0;
for (let i = 1; i <= 100; i++) {
  sum1 += i;
}

console.log(sum1);

// 25. Dùng `do...while` để yêu cầu người dùng nhập một số lớn hơn 0.

//Phần 7: Kết hợp các kiến thức

// 26. Viết chương trình kiểm tra xem một số có phải là số nguyên tố hay không.
// 27. Tạo một bảng cửu chương sử dụng vòng lặp lồng nhau.
// 28. Dùng vòng lặp để tìm giá trị lớn nhất trong một mảng.
// 29. Tạo một trò chơi đoán số đơn giản (số ngẫu nhiên từ 1 đến 10).
// 30. Dùng `if` và vòng lặp để tìm tất cả các số chia hết cho 3 trong khoảng 1-100.
