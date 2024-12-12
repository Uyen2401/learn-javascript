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

var a = 3;
var b = 2;
var sum = a + b;
console.log("Tổng là:::", sum); // return: 5

var c = 1;
var different = a - c;
console.log("Hiệu là :::", different); // return: 2

var multiply = a * b;
console.log("Tích là :::", multiply); // return: 6

var split = b / c;
console.log("Thương là:::", split); // return: 2

// Kiểm tra kiểu dữ liệu của các biến bằng `typeof`.

typeOfOperator = () => {
  var number = 18;
  var string = "Javascript khó như quỷ";
  var boolean = true;
  var object = { size: "37", color: "white" };
  var array = ["Banana", "Apple", "Orange"];
  var uyen = function () {
    console.log("Đang học Javascript");
  };
  var undefined = undefined; //undefined
  var isNull = null;
  var NaN = NaN;
  var none; //undefined

  setTimeout(function () {
    console.log("Chờ xíu 2");
  }, 20000);

  console.log(typeof number);
  console.log(typeof string);
  console.log(typeof boolean);
  setTimeout(function () {
    console.log("Chờ xíu 1");
  }, 10000);
  console.log(typeof object);
  console.log(typeof array);
  console.log(typeof uyen);
  console.log(typeof undefined);
  console.log(typeof isNull);
  console.log(typeof NaN);
  console.log(typeof none);
};

typeOfOperator();

// Khai báo biến với giá trị `null` và biến khác không được gán giá trị (mặc định là `undefined`).
var isNull = null;
var none; //undefined

// Tạo một đối tượng đơn giản với các thuộc tính như `name`, `age`, `isStudent`.

var object = { name: "uyen", age: 18, isStudent: true };
console.log(object);

/**
Phần 3: Phần 4: Toán tử
*/

// 12. Thực hiện các phép toán số học: cộng, trừ, nhân, chia, chia lấy dư.
var a = 3;
var b = 2;
var c = 5;

var sum = a + b;
console.log("Tổng là:::", sum); // return: 5

var different = a - c;
console.log("Hiệu là :::", different); // return: 2

var multiply = a * b;
console.log("Tích là :::", multiply); // return: 6

var split = b / c;
console.log("Thương là:::", split); // return: 2

var divideBalance = (a * b) / 5;
console.log("Phép chia lấy phần dư:::", divideBalance); // return: 1.2

// 13. Kiểm tra kết quả của các phép so sánh (`>`, `<`, `>=`, `<=`, `===`, `!==`)

// 14. Thực hiện các phép toán logic (`&&`, `||`, `!`) với các giá trị boolean.

// 15. Thử nghiệm với toán tử gán (`=`, `+=`, `-=`, `*=`, `/=`).

// 16. Viết một biểu thức logic kiểm tra một số có nằm trong khoảng từ 10 đến 50.

