for (let ind = 1; ind <= 10; ind++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${ind} x ${j} = ${ind * j}`);
  }
  console.log("----------------");
}

// *
// **
// ***
// ****
// *****

let h = 5;

// for (let i = 1; i <= h; i++) {
//   let row = "";
//   for (let j = 0; j < i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

for (let i = h; i >= 1; i--) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += "*";
  }
  console.log(row);
}


//A.
h = 10;

for (let i = h; i >= 1; i--) {
  let row = "";
  for (let j = 0; j < h - i; j++) {
    row += " ";
  }
  for (let j = 0; j < i; j++) {
    row += "*";
  }
  console.log(row);
}

console.log('-----------')

//B.
for (let i = 1; i <= h; i++) {
  let row = "";
  for (let j = 0; j < h - i; j++) {
    row += " ";
  }
  for (let j = 0; j< i; j++) {
    row += "*";
  }
  console.log(row);
}