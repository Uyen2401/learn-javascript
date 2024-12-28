// Exercise 1
// 1. Dùng vòng lặp để tìm giá trị lớn nhất trong một mảng.

// Method 1: for loop
const number = [1, 3, 5, 7, 10, 25, 5500, 90, 105];
let max = 0;
for (let i = 0; i < number.length; i++) {
  if (number[i] > max) {
    max = number[i];
  }
}
console.log("Giá trị lớn nhất:::", max);

// Method 2: white
max = 0;
let i = 0;
while (i < number.length) {
  if (number[i] > max) {
    max = number[i];
  }
  i++;
}
console.log("Giá trị lớn nhất:::", max);

// 2. Dùng vòng lặp để đếm số lần xuất hiện của một ký tự trong chuỗi.
let myString =
  "In this section we'll look at some of the most commonly-used options.";
let countCharacter = 0;
const character = "o";
for (let i = 0; i < myString.length; i++) {
  if (myString[i] === character) {
    countCharacter++;
  }
}

console.log(
  `Số lần xuất hiện của một ký tự "${character}" là ${countCharacter}`
);
// 3. Tính tổng các phần tử trong một mảng chỉ chứa số chẵn.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sum += numbers[i];
  }
}

console.log("Tổng các phần tử trong một mảng chỉ chứa số chẵn là :::", sum);

// 4. Tìm số lớn thứ hai trong một mảng số.

// Exercise 2
const productsCart = [
  {
    id: 1,
    name: "Tech Product 1",
    quantity: 96,
    price: 121,
    discountPrice: 96,
    stock: 10,
  },
  {
    id: 2,
    name: "Tech Product 2",
    quantity: 47,
    price: 236,
    discountPrice: 212,
    stock: 20,
  },
  {
    id: 3,
    name: "Tech Product 3",
    quantity: 66,
    price: 456,
    discountPrice: 364,
    stock: 0,
  },
  {
    id: 4,
    name: "Tech Product 4",
    quantity: 85,
    price: 668,
    discountPrice: 601,
    stock: 5,
  },
  {
    id: 5,
    name: "Tech Product 5",
    quantity: 30,
    price: 663,
    discountPrice: 563,
    stock: 4,
  },
];
/**
 * Yêu cầu
 * - Sử dụng cả tất cả những vòng lặp đã học để giải từng bài
 */
// Bài 1. Tính số lượng sản phẩm trong giỏ hàng

let totalQuantity = 0;
i = 0;
for (; i < productsCart.length; i++) {
  totalQuantity += productsCart[i].quantity;
}
console.log(totalQuantity);

// Bài 2. Tìm danh sách sản phẩm còn hàng
let available = [];
for (let i = 0; i < productsCart.length; i++) {
  if (productsCart[i].stock > 0) {
    available.push(productsCart[i].name);
  }
}
console.log("San pham con hang:::", available);

// Bài 3. Tính tổng tiền chưa giảm
let totalOriginPrice = 0;
for (let i = 0; i < productsCart.length; i++) {
  totalOriginPrice += productsCart[i].price * productsCart[i].quantity;
}

console.log("Tong tien chua giam:::", totalOriginPrice);

// Bài 4. Tính tổng tiền sau giảm
let totalDiscountPrice = 0;
for (let i = 0; i < productsCart.length; i++) {
  totalDiscountPrice +=
    productsCart[i].discountPrice * productsCart[i].quantity;
}

console.log("Tong tien sau giam:::", totalDiscountPrice);

// tính chênh lệch trước và sau khi giảm
totalOriginPrice = 0;
totalDiscountPrice = 0;

for (let i = 0; i < productsCart.length; i++) {
  totalOriginPrice += productsCart[i].price * productsCart[i].quantity;
  totalDiscountPrice +=
    productsCart[i].discountPrice * productsCart[i].quantity;
}

let total = totalOriginPrice - totalDiscountPrice;
console.log("Tong chenh lech:::", total);

// let n = 35;
// for (let i = 0; i < n; i += 2) {
//   console.log(i);
// }

// for (let i = 0; i < n; i += 3) {
//     console.log(i);
// }

// let i1 = 1;
// console.log(i1 + 1);
// console.log(i1);

// console.log(i1++);
// console.log(i1)

// console.log(++i1);
// console.log(i1);

// i = i + 1;
// console.log(i);

// Bài 5. Tính discount của từng sản phẩm và in ra danh sách sản phẩm + discountPercent
for (let i = 0; i < productsCart.length; i++) {
  productsCart[i].discountPercent =
    ((productsCart[i].price - productsCart[i].discountPrice) /
      productsCart[i].price) *
    100;
}

console.log(productsCart);
