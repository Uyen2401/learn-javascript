// Khai bao bien
var fullName = "Nguyen Thuy Uyen";
var age = 18; // Khai bao tuoi

/**
 * Comment in JavaScript
 */

// Goi ham thong bao
// alert(fullName);
// alert(age);
//
/**
 * Ham Build-in JavaScript
 * 1. Alert
 * 2.Console
 * 3.Confirm
 * 4.Prompt
 * Set timeout
 * Set interval
 */
// 2. Console
console.log(fullName);
// 3.Confirm
// confirm("Xac nhan ban du tuoi!");
// 4.Prompt
// prompt("Xac nhan ban du tuoi!");
// 5. Set timeout
setTimeout(() => {
  console.log('Thong bao ne')
}, 1000);
// 6.Set interval
setInterval(()=>{
    console.log('Log::::' + Math.random())
},10)