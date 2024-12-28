//  LESSON 20 : LOOPS

// A. For loops - Lặp với điều kiện đúng

// for (initialization; condition; increment) {
//   // code
// }

/*
Note: 
- Initialization (Chạy duy nhất 1l): khởi tạo biến được sử dụng trong vòng lặp (Có thể bđ bằng nhiều biến cách nhau bởi dấu ',' OR bỏ qua phần initialization)
- Condition: Xác định điều kiến cho vòng lặp chạy. Condition trả về true, vòng lặp sẽ bắt đầu check lại đk, nếu nó trả về false, vòng lặp sẽ kết thúc.
- Increment: Tăng giá trị (i++ tăng lên 1 gt) sau mỗi lần đoạn code trong vòng lặp được thực hiện.

break - Đúng đk thì đến đó sẽ dừng lại
continue - Đúng đk thì bỏ qua và lặp lại từ đầu 
*/
// Example:
for (let i = 0; i < 10; i++) {
    console.log("The number is " + i);
  }
  // Initialization: Bỏ qua phần initialization
  let i = 1;
  for (; i < 10; i++) {
    console.log("The number is:: " + i);
  }
  
  let index = 1;
  let sum1 = 0;
  for (; index <= 100; index++) {
    sum1 += index;
  }
  
  console.log(sum1);
  
  //Initialization: Có thể bđ bằng nhiều biến cách nhau bởi dấu ','
  for (let i = 0, len = 10, text = ""; i < len; i++) {
    text += i + " - ";
    console.log(text);
  }
  
  // Condition: Có thể bỏ qua, tuy nhiên lúc này vòng lặp sẽ không bao giờ kết thúc >> Nếu ko có Condtion thì phải cung cấp break trong vòng lặp
  // for (; ; i++) {
  //   console.log("The number is:: " + i);
  //   break;
  // }
  
  // Increment: cũng có thể được bỏ qua (như khi bạn tăng các giá trị của mình bên trong vòng lặp)
  for (let i = 0, len = 10, text = ""; i < len; ) {
    text += i + " - ";
    i++;
    console.log(text);
  }
  
  //Increment: Vòng lặp ngươc
  for (let i = 100; i > 0; i--) {
    console.log(i);
  }
  
  // for cho một string
  let str = "Javascript";
  for (i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
  
  // B. While loops - Lặp với điều kiện đúng
  /**
   while (condition){
    //do S.T
  }
   */
  let i1 = 0;
  while (i1 < 10) {
    console.log(i1);
    i1++;
  }
  
  let newLanguages = ["Javascript", "Ruby", "PHP"];
  let i2 = 0;
  while (i2 < newLanguages.length) {
    console.log(newLanguages[i2]); // Return: Javascript Ruby PHP
    i2++;
  }
  
  let i3 = 0;
  while (i3++ < 5) {
    console.log(i3); //return: 1 2 3 4 5
  }
  
  // Cách trả về mỗi vài giá trị, giá trị được tích lũy (cộng dần) cho tới khi thõa đk
  // Cách 1:
  let result1 = 0;
  while (result1 < 1) {
    result1 += 0.1;
    console.log(result1);
  }
  
  // Cách 2:
  let result2 = 0;
  while ((result2 += 0.1) < 1) {
    console.log(result2);
  }
  
  // C. Do While loops
  i = 0;
  isSuccess = false;
  do {
    i++;
    console.log("Nap thẻ lần " + i);
  
    //Thất bại
    if (false) {
      isSuccess = true; // điều kiện if (false) luôn sai, nên isSuccess sẽ không bao giờ được gán giá trị true.
    }
  } while (!isSuccess && i < 4);
  
  // D. For In loops
  let myInfo = {
    name: "Uyen Nguyen",
    age: 18,
  };
  
  for (let index in myInfo) {
    console.log(myInfo[index]);
  }
  
  languages = ["Js", "Ruby", "PHP"];
  for (let i in languages) {
    console.log(i); // Return: 0 1 2
  }
  
  languages = ["Js", "Ruby", "PHP"];
  for (let i in languages) {
    console.log(languages[i]); //Return: Js Ruby PHP
  }
  
  myString = "Javascript";
  for (let i in myString) {
    console.log(myString[i]); // Return: J A V A S C R I P T
  }
  
  // E. For Of loops
  myInfo = {
    name: "Uyen Nguyen",
    age: 18,
  };
  for (let i of Object.values(myInfo)) {
    console.log(i);
  }
  
  for (let i of Object.keys(myInfo)) {
    console.log(i);
  }