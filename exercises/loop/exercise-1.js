/* 
1. Write a program in C to display n terms of natural numbers and their sum.
    Test Data : 7
    Expected Output :
    The first 7 natural number is :
    1 2 3 4 5 6 7
    The Sum of Natural Number upto 7 terms : 28
*/

let n = 7;
let sum = 0;
let numbers = [];

for (let i = 1; i <= n; i++) {
  numbers.push(i);
  sum += i;
}

console.log(`The first ${n} natural numbers are: ${numbers.join(" ")}`);
console.log(`The sum of the first ${n} natural numbers is: ${sum}`);

/* 
3. Write a program in C to display the cube of the number up to an integer.
    Test Data :
    Input number of terms : 5
    Expected Output :
    Number is : 1 and cube of the 1 is :1
    Number is : 2 and cube of the 2 is :8
    Number is : 3 and cube of the 3 is :27
    Number is : 4 and cube of the 4 is :64
    Number is : 5 and cube of the 5 is :125
*/

n = 5;

for (let i = 1; i <= n; i++) {
  let cube = i * i * i;
  console.log(`Number is: ${i} and cube of the ${i} is: ${cube}`);
}

/* 
4. Write a program in C to display the multiplication table for a given integer.
    Test Data :
    Input the number (Table to be calculated) : 15
    Expected Output :
    15 X 1 = 15
    ...
    ...
    15 X 10 = 150
*/

let number = 15;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} X ${i} = ${number * i}`);
}

/* 
Write a program in C to display the multiplier table vertically from 1 to n.
    Test Data :
    Input upto the table number starting from 1 : 8
    Expected Output :
    Multiplication table from 1 to 8
    1x1 = 1, 2x1 = 2, 3x1 = 3, 4x1 = 4, 5x1 = 5, 6x1 = 6, 7x1 = 7, 8x1 = 8
    ...
    1x10 = 10, 2x10 = 20, 3x10 = 30, 4x10 = 40, 5x10 = 50, 6x10 = 60, 7x10 = 70, 8x10 = 80
 */

n = 8;

console.log(`Multiplication table from 1 to ${n}:`);

for (let i = 1; i <= 10; i++) {
  let row = [];
  for (let j = 1; j <= n; j++) {
    row.push(`${j}x${i} = ${j * i}`);
  }
  let output = "";
  for (let k = 0; k < row.length; k++) {
    output += row[k];
    if (k < row.length - 1) {
      output += ", ";
    }
  }

  console.log(output);
}

/*
Ref: https://www.w3resource.com/c-programming-exercises/for-loop/index.php
*/
