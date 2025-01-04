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
