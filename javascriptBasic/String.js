//  LESSON 16 : STRING
/**
 1.Tạo chuỗi
- Cách tạo
- Nên dùng cách nào ? Lý do ?
- Kiểm tra data type
 */

let gender = "Female"; //Cách 1 ==> Nên dùng cách này
gender = String("Female"); //Cách 2

console.log(typeof gender); // Data type: Object

// 2. Backslash (\) in Javascript

fullName = "Nguyen Thuy Uyen 'xinh dep'";

fullName = "Nguyen Thuy Uyen 'xinh dep'";

console.log("fullName:::", fullName);

// Template string ES6
console.log(`Toi la ${fullName} và là ${gender}`);

//  LESSON 17 : STRING (cont)

// A. String properties
// 1.Length
let myString = "   String Properties   ";
let sln = myString.length; // return: 17
// console.log(sln);

// B. String Method:

// 2. Find index : indexOf() Cung cấp vị trí của một giá trị char có trong chuỗi đã cho.
console.log(myString.indexOf("t")); //return 1
console.log(myString.lastIndexOf("t")); // return 13
// 3. Cut string: slice() trích xuất một phần của chuỗi và trả về nó dưới dạng một chuỗi mới mà không sửa đổi chuỗi gốc.
//e.g., str.slice(beginIndex[, endIndex])
console.log(myString.slice(7)); // return: Properties
console.log(myString.slice(0, -11)); // return: String

// 4. Replace: replace() Thay thế một chuỗi nhất định với sự thay thế được chỉ định.
console.log(myString.replace("Properties", "Replace"));

// 5. Convert to Upper case: toUpperCase() trả về giá trị chuỗi được chuyển đổi thành chữ hoa (giá trị sẽ được chuyển đổi thành chuỗi nếu không phải là một chuỗi).
// e.g., str.toUpperCase()

console.log(myString.toUpperCase()); // return: STRING PROPERTIES

// 6. Convert to lower case: toLowerCase() trả về giá trị chuỗi được chuyển đổi thành chữ thường
// e.g., str.toLowerCase()

console.log(myString.toLowerCase()); // Return: string properties

// 7. Trim: (trim(), trimStart(), trimEnd())

console.log(myString.trim());

// 8. Split:  biến 1 chuỗi thành 1 mảng các chuỗi, bằng cách tách chuỗi theo ký tự dc chỉ định
// Note: Tìm ra điểm chung để cắt hợp lý

console.log("The quick brown fox".split(" ")); //return: [ 'The', 'quick', 'brown', 'fox' ]

let languages = "Javascript, PHP, Ruby";
console.log(languages.split(", ")); //return: [ 'Javascript', 'PHP', 'Ruby' ]
console.log(languages.split(" ")); //return: [ 'Javascript,', 'PHP,', 'Ruby' ]
console.log(languages.split(",")); //return: [ 'Javascript', ' PHP', ' Ruby' ]

// 9. Get a character by index
const myName2 = "Vanasa";

console.log(myName2.charAt(0));
console.log(myName2[0]);
console.log(typeof myName2.charAt(10)); // return: chuỗi rỗng
console.log(myName2[10]); // return: undefined