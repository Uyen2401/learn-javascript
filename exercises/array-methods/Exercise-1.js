// 1. Filter even numbers and double their values:
// From the array [1, 2, 3, 4, 5, 6], filter the even numbers and double their values.
// Loop
let numbers = [1, 2, 3, 4, 5, 6];
let doubleEven = [];

for (let index in numbers) {
  if (numbers[index] % 2 === 0) {
    doubleEven.push(numbers[index] * 2);
  }
}
console.log(doubleEven);

//Filter
let evens = numbers.filter((num) => num % 2 == 0);
doubleEven = evens.map((even) => even * 2);
console.log(doubleEven);

//2. Calculate the sum of an array: Use reduce to calculate the sum of the array [10, 20, 30, 40, 50].
let listNumber = [10, 20, 30, 40, 50];
let totalNumber = listNumber.reduce(function (total, number) {
  // console.log('total', total);
  // console.log('number', number);
  return total + number;
});
console.log(totalNumber);

// 3. Find the first element greater than 10:
// Use find to locate the first number greater than 10 in [2, 5, 8, 12, 15].
numbers = [2, 5, 8, 12, 15];
let firstMatch = numbers.find((num) => num > 10);
console.log(firstMatch);

// 4. Sort an array in descending order:
// Sort the array [3, 1, 4, 2, 5] in descending order.
// TODO

// 5. Check if all elements are odd:
// Use every to check if all elements in [1, 3, 5, 7] are odd.
numbers = [1, 3, 5, 7];
let isOdd = numbers.every((num) => num % 2 !== 0);
console.log(isOdd);

// 6. Check if any number is divisible by 3:
// Use some to see if any number in [4, 5, 6, 7, 8] is divisible by 3.
numbers = [4, 5, 6, 7, 8];
let isDivisible = numbers.some(num => num % 3 === 0);
console.log(isDivisible);

//7. Count the occurrences of each element:
// From the array ['a', 'b', 'a', 'c', 'b', 'a'], count the occurrences of each element.
let array = ['a', 'b', 'a', 'c', 'b', 'a'];
let occurrences = {};
array.forEach(element => {
    occurrences[element] = (occurrences[element] || 0) + 1;
});

console.log(occurrences);

// 8. Create a new array of squared values:
// Use map on [1, 2, 3, 4] to create [1, 4, 9, 16].

numbers = [1, 2, 3, 4];
let squaredValues = numbers.map(num => num * num);
console.log(squaredValues);

// 9. Remove duplicate elements:
// From the array [1, 2, 3, 3, 4, 5, 5], create a new array with unique values.
numbers = [1, 2, 3, 3, 4, 5, 5];

let uniqueValues = numbers.filter((value, index, self) => {
    return self.indexOf(value) === index; 
});

console.log(uniqueValues);

// 10. Merge two arrays:
// Use concat to merge [1, 2, 3] and [4, 5, 6] into one array.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = [];
for (let i = 0; i < array1.length; i++) {
    mergedArray.push(array1[i]);
}
for (let i = 0; i < array2.length; i++) {
    mergedArray.push(array2[i]);
}
console.log(mergedArray);