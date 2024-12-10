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
const fruit = ["mango", "bannana", "peach", "orange"];
fruit = ["bannana", "peach", "orange"]; //TypeError: Assignment to constant variable.
console.log("Fruit:::", fruit);

const myMoney = 0;
myMoney = 100000; //TypeError: Assignment to constant variable.
console.log("myMoney:::", myMoney);

// => Constant cannot be reassigned after it has been initialized.

// 6. Sử dụng cả `var`, `let`, và `const` để khai báo biến và so sánh phạm vi của chúng trong một block code (`if` hoặc `{}`).

function compareVariables() {
  const insideBlockCode = true;
  if (insideBlockCode) {
    var fullName = "Vanasa" + "_" + "Uyen" + "" + "Nguyen";
    let age = 18;
    const gender = "Female";

    console.log("Var inside block code:::", fullName);
    console.log("let inside block code:::", age);
    console.log("const inside block code:::", gender);
  }

  console.log("Var outside block code:::", fullName);
  console.log("let outside block code:::", age); //Error
  console.log("const outside block code:::", gender); //Error
}

compareVariables();


/**
Phần 3: Kiểu dữ liệu
*/


