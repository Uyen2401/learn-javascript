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


// Exercise
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