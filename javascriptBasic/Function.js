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
showFullname("Uyen"); // 0utputs: Uyen undefined

