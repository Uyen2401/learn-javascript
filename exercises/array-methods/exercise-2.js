// Use the built-in .reduce() method on arrays to solve all of these problems
// Feel free to copy and paste the code for easy testing.
// 1) Turn an array of numbers into a total of all the numbers
function total(arr) {
  return arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
}

console.log(total([1, 2, 3])); // 6

// 2) Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, "");
}

console.log(stringConcat([1, 2, 3])); // "123"

// 3) Turn an array of voter objects into a count of how many people voted
function totalVotes(arr) {
  return arr.reduce((accumulator, currentValue) => {
    // if (currentValue.voted === true) {
    //   return accumulator + 1;
    // } else {
    //   return accumulator;
    // }
    return currentValue.voted ? accumulator + 1 : accumulator;
  }, 0);
}

let voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
console.log(totalVotes(voters)); // 7

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
function shoppingSpree(arr) {
  //   return arr.reduce(
  //     (accumulator, currentValue) => accumulator + currentValue.price, 0
  //   );
  return arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);
  //   let total = 0;
  //   arr.forEach((item) => {
  //     total += item.price;
  //   });
  //   return total;
}

let wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

console.log(shoppingSpree(wishlist)); // 227005

// 5) Given an array of arrays, flatten them into a single array
function flatten(arr) {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
  }, []);
}

let arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(JSON.stringify(flatten(arrays))); // ["1", "2", "3", true, 4, 5, 6];

// 6) Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function voterResults(arr) {
  return arr.reduce((accumulator, currentValue) => {
      if (currentValue.age >= 18 && currentValue.age <= 25) {
        accumulator.numYoungPeople += 1;
        if (currentValue.voted === true) {
          accumulator.numYoungVotes += 1;
        }
      } else if (currentValue.age >= 26 && currentValue.age <= 35) {
        accumulator.numMidsPeople += 1;
        if (currentValue.voted === true) {
          accumulator.numMidVotesPeople += 1;
        }
      } else if (currentValue.age >= 36 && currentValue.age <= 55) {
        accumulator.numOldsPeople += 1;
        if (currentValue.voted === true) {
          accumulator.numOldVotesPeople += 1;
        }
      }
      return accumulator;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    }
  );
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/
