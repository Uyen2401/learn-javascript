//B1: Viết một hàm in ra từng phần tử trong mảng số nguyên.
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num) {
  console.log(num);
});

//B2: Cộng thêm 10 vào từng phần tử trong mảng và in kết quả ra màn hình.
numbers.forEach(function (num) {
  console.log(`${num + 10}`);
});

let updatedNumbers = numbers.map((num) => num + 10); // Cập nhật lại mảng ban đầu
console.log(updatedNumbers);

//B3. Viết chương trình in ra các thông tin từ một mảng đối tượng.
let students = [
  { name: "Vanasa", age: 16 },
  { name: "Sonus", age: 17 },
  { name: "Tino", age: 24 },
];

students.forEach(function (student) {
  console.log(`Name:${student.name}, Age:${student.age}`);
});

//B4. Kiểm tra xem tất cả các số trong mảng có phải số chẵn không.
let listAge = [20, 24, 26, 17];
console.log(listAge.every((age) => age % 2 == 0));

//B5: Kiểm tra xem tất cả sinh viên trong danh sách (DS ở B3) có tuổi >= 18 không.
console.log(students.every((student) => student.age >= 18));

// B6: Bài 6: Kiểm tra xem trong mảng có số nào lớn hơn 10 không.
listAge = [8, 20, 4, 6, 17];
console.log(listAge.some((age) => age > 10));

// B7. Lọc các sinh viên có tuổi lớn hơn hoặc bằng 18.
console.log(students.filter((student) => student.age >= 18));


/* 
-- Clone Array
Write a JavaScript function to clone an array.
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]] */

function array_Clone(arr) {
  return arr.map((item) => (Array.isArray(item) ? array_Clone(item) : item));
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
/* 
-- First Elements of Array
Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]
*/

let first = function (arr, n) {
  if (arr == null) return void 0; // return undefined if true
  if (n == null) return arr[0];
  if (n < 0) return [];
  return arr.slice(0, n);
};

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

/*-- Last Elements of Array
Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2]
 */
let last = function (arr, n) {
  if (arr == null) return void 0; // return undefined if true
  if (n == null) return arr[arr.length - 1];
  if (n < 0) return [];
  return arr.slice(-n);
};

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
/* 
-- Join Array Elements

Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black" 
*/
let myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join(",")); 
console.log(myColor.join("+"));


/* 
-- Insert Dashes Between Evens

Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
 */
