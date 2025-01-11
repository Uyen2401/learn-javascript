// LESSON 21 : Function

/**1. Hàm ?
- Một khối mã
- Làm 1 việc cụ thể
Mục đích:
- Giảm sự lặp lại code trong chương trình 
- Giúp các dòng code dễ bảo trì hơn
- Dễ dàng hơn để loại bỏ các lỗi
*/
function functionName() {
  // Code
}

function sayHello() {
  console.log("Hello");

}

// Calling function
sayHello(); // return: Hello

//2. Loại hàm
/**
 * 2.1 Built-in
    - Alert
    - Console
    - Confirm
    - Prompt
    - Set timeout
    - Set interval
    2.2 Tự định nghĩa
    - Declaration function
    - Expression function
    - Arrow function
    - callback() - Hàm được chuyền qua đối số khi gọi hàm khác
 */

/** 3. Tính chất

- Không thực thi khi định nghĩa
- Sẽ thực thi khi đc gọi
- Có thể nhận tham số
- Có thể trả về một giá trị
 */

// LESSON 22 : Function (cont)
/**
1. Tham số ?
- Định nghĩa
- Kiểu dữ liệu ?
- 1 tham số
- Nhiều tham số
2. Truyền tham số
 */
// Adding Parameters to Functions
function displaySum(num1, num2) {
  let total = num1 + num2;
  console.log(total);
}

displaySum(6, 20); // return: 26
displaySum(-5, 17); // return: 12

function showFullname(firstName, lastName) {
  console.log(firstName + " " + lastName);
}

showFullname("Uyen", "Nguyen"); // Return: Uyen Nguyen
showFullname("Uyen"); // Return: Uyen undefined

//callback() - Hàm được chuyền qua đối số khi gọi hàm khác
/**
 Là hàm
 Truyền qua đối số
 Được gọi lại (Trong hàm nhận đối số)
 */
function myFunction(param) {
  if (typeof param === "function") {
    param();
  }
}

function myCallback(value) {
  console.log("Value:", value);
}

myFunction(myCallback);

Array.prototype.map2 = function (callback) {
  //nhận một hàm callback làm tham số. callback được gọi trên từng phần tử của mảng trong vòng lặp.
  let output = [],
    arrayLength = this.length;
  for (let i = 0; i < arrayLength; i++) {
    let result = callback(this[i], i);
    console.log("result: ", result);
    output.push(result);
  }
  return output;
};
let courses = ["Javascript", "PHP", "Ruby"];
let htmls = courses.map2(function (course, index) {
  // console.log(index, course)
  return `<h2>${course}</h2>`;
});

console.log(htmls.join(""));
console.log("------------");

// map(): cho kq giống ở trên
htmls = courses.map(function (course) {
  return `<h2>${course}</h2>`;
});
console.log(htmls.join(""));

// Exercise làm tương tự cho: forEach(), every(), find(), filter(), reduce()
// 1.forEach2()
Array.prototype.forEach2 = function (callback) {
  let arrayLength = this.length;
  for (let i = 0; i < arrayLength; i++) {
    callback(this[i], i, this);
  }
};

courses.forEach2(function (course, index) {
  console.log(`${index}: ${course}`);
});

console.log("------------");
courses.forEach(function (course, index) {
  console.log(`${index}: ${course}`);
});

// 2.every2()
Array.prototype.every2 = function (callback) {
  let arrayLength = this.length;
  for (let i = 0; i < arrayLength; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

let numbers = [2, 4, 6];
let allEven = numbers.every2(function (num) {
  return num % 2 === 0;
});
console.log(allEven); // return: true

console.log("------------");

allEven = numbers.every(function (num) {
  return num % 2 === 0;
});
console.log(allEven);

// 3. find2()
Array.prototype.find2 = function (callback) {
  let arrayLength = this.length;
  for (let i = 0; i < arrayLength; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

let listNumber = [1, 2, 3, 4, 5];
let result = listNumber.find2((num) => num > 3);
console.log("Số đầu tiên lớn hơn 3 là::::", result);

console.log("------------");

result = listNumber.find((num) => num > 3);
console.log("Số đầu tiên lớn hơn 3 là::::", result);