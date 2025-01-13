/**
LESSON 21: Promise
1. Sync/Async
Async (Bất đồng bộ): setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame
Xử lý bất đồng bộ thường dùng callback > Nhưng callback có thể dẫn đến callback hell (hàm lồng nhau quá nhiều và khó quản lý)
Promise giúp xử lý bất đồng bộ dễ đọc hơn so với callback.
- 3 Trạng thái của Promise:
Pending: Promise đang được thực thi nhưng chưa hoàn thành.
Fulfilled: Promise đã hoàn thành và trả về kết quả.
Rejected: Promise không hoàn thành và trả về lỗi.

 */

// setTimeout(function () {
//   console.log(1);
// }, 1000);
// console.log(2);

// callback hell
// setTimeout(function () {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//     setTimeout(function () {
//       console.log(3);
//       setTimeout(function () {
//         console.log(4);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Lý thuyết, cách hoạt động
/**
 const promise = new Promise((resolve, reject) => {
  // Logic bất đồng bộ
  if (thành công) {
    resolve(value); // Trả kết quả khi hoàn thành
  } else {
    reject(error); // Trả lỗi khi thất bại
  }
});

 */
/**
Steps:
1.new Promise
2.Executor
 */

// const myPromise = new Promise((resolve, reject) => {
//   const success = true;
//   setTimeout(() => {
//     if (success) {
//       resolve("Promise đã hoàn thành!");
//     } else {
//       reject("Promise thất bại.");
//     }
//   }, 2000);
// });

// console.log("Start...");
// myPromise
//   .then((result) => {
//     // Nhận tham số là callback -> trả về từ resolve
//     console.log("Successfully: ", result);
//   })
//   //   .then(function () { //Promise Chaining: nối nhiều Promise với nhau:gọi .then() liên tiếp
//   //     console.log(1);
//   //   })
//   //   .then(function () {
//   //     console.log(2);
//   //   })
//   //   .then(function () {
//   //     console.log(3);
//   //   })
//   .catch((error) => {
//     // Nhận tham số là callback -> trả về từ reject
//     console.error("Failure: ", error);
//   })
//   .finally(() => {
//     // Được gọi bất kể Promise thành công hay thất bại.
//     console.log("Done!");
//   });

// function sleep(ms) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, ms);
//   });
// }
// sleep(1000)
//   .then(function () {
//     console.log(1);
//     return sleep(1000);
//   })
//   .then(function () {
//     console.log(2);
//     return new Promise (function(resolve, reject){
//         reject('Error'); // reject ở đây sẽ ko chạy tiếp nữa
//     })
//   })
//   .then(function () {
//     console.log(3);
//     return sleep(1000);
//   })
//   .then(function () {
//     console.log(4);
//     return sleep(1000);
//   })
//   .catch(function(err){
//     console.log(err)
//   })

//  1. Promise.result(value):Trả về một Promise đã được resolve với (value) được cung cấp.
const resolvedPromise = Promise.resolve("Success");
resolvedPromise.then((value) => {
  console.log(value);
});
//  2. Promise.reject(reason): Trả về một Promise đã được reject với (reason) được cung cấp.
const rejectedPromise = Promise.reject("Error");
rejectedPromise.catch(function (reason) {
  console.log(reason);
});
//  3. Promise.all(promises): Nhận vào một mảng các Promise và trả về một Promise duy nhất.
//Chờ tất cả các Promise trong mảng hoàn thành, hoặc bị từ chối nếu có Promise nào bị reject.

let promise1 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([1]);
  }, 1000);
});

let promise2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([2, 3]);
  }, 2000);
});
// const promise2 = Promise.reject('Error!!!')

Promise.all([promise1, promise2])
.then(function([result1, result2]){
    console.log(result1.concat(result2))
})
.catch(function(err){
    console.log(err)
})
