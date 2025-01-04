// Bài 1: Viết một hàm nhận vào một mảng số và trả về một mảng mới chứa các số đã được nhân đôi.
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.map((number) => number * 2));

// Bài 2: Cho mảng [1, 2, 3, 4, 5], sử dụng map() để tạo một mảng mới, trong đó mỗi phần tử là "Lẻ" nếu số lẻ hoặc "Chẵn" nếu số chẵn.
// Cách 1: Dùng if
const result = numbers.map((number) => {
  if (number % 2 === 0) {
    return "Chẵn";
  } else {
    return "Lẽ";
  }
});

console.log(result);

// Cách 2:Dùng ternary operator (condition ? exprIfTrue : exprIfFalse)

console.log(numbers.map((num) => (num % 2 === 0 ? "Chẵn" : "Lẽ")));

// Bài 3: Cho một mảng đối tượng người dùng, mỗi đối tượng chứa id và name. Sử dụng map() để thêm một thuộc tính isAdmin với giá trị mặc định là false.
const users = [
  { id: 1, name: "Uyen" },
  { id: 2, name: "Vanasa" },
];
// spread operator (...): { ...obj, key: 'value' } sao chép tất cả các thuộc tính từ đối tượng vào đối tượng mới.
const updateUses = users.map((user) => ({
  ...user,
  isAdmin: false,
}));
console.log(updateUses);
