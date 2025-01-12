// LESSON 19: Object
// 1. By object literal (Theo nghĩa đen)
/**
 * var datas = {property1:value1, property2:value2.....propertyN:valueN};
 */
let datas = {
  name: "Uyen",
  age: "18",
  adress: "Ben Tre",
};
// 2. Bằng cách tạo trực tiếp đối tượng (sử dụng từ khóa new)
/**
 var objectname = new Object();  
objectname.property1 = value1;
 */
//Example:
datas = new Object();
datas.name = "Uyen";

// 3. Sử dụng object constructor (using new keyword)
/**
Cần tạo hàm với các đối số. Mỗi giá trị đối số có thể được chỉ định trong đối tượng hiện tại bằng cách sử dụng từ khóa này.
Từ khóa this đề cập đến đối tượng hiện tại.
 */

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
  };
}

const vanasa = new Person("Vanasa", 18);
const sonus = new Person("Sonus", 18);

vanasa.greet();
sonus.greet();

// 4. Thêm phương thức vào prototype

function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.start = function () {
  console.log(`${this.make} ${this.model} is starting...`);
};

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

car1.start();
car2.start();

// Methods of Object
/**
Object.assign()
Object.create()
Object.entries()
Object.keys()
Object.values()
 */

// 1. Object.assign(): Sao chép tất cả các thuộc tính từ 1 hoặc nhìu object vào một object khác/ 'source' vào 'target'.
/**
Nếu các thuộc tính trong các đối tượng nguồn trùng key
=> thuộc tính của đối tượng 'source' sau sẽ ghi đè thuộc tính của đối tượng 'source' trước.
 */

const target = { a: 1, b: 2 };
const source1 = { b: 4, c: 5 };
const source2 = { c: 8, d: 9 };

const result = Object.assign(target, source1, source2);

console.log(result); // return: { a: 1, b: 4, c: 8, d: 9 }
console.log(target); // target đã bị thay đổi > return: { a: 1, b: 4, c: 8, d: 9 }
console.log(result === target); // true

// 2. Object.create():Tạo đối tượng mới kế thừa từ prototype(Thêm các thuộc tính mới vào đối tượng: truyền thêm propertiesObject)
// Gán prototype trực tiếp > không cần dùng đến constructor.
// Có thể dùng: Object.create(null) để tạo một đối tượng không có prototype.
// Object.create(prototypeObject, propertiesObject)

const person = {
  firstName: "Uyen",
  lastName: "Nguyen",
};

const man = Object.create(person);
man.firstName = "Vanasa";
console.log(man);

// 3. Object.entries(): Trả về một mảng các cặp [key, value] của các thuộc tính có thể liệt kê được trong một đối tượng.
// Object.entries(obj);
let user = {
  name: "Uyen",
  age: "18",
  job: "Tester-culi",
};

const entries = Object.entries(user);
console.log(entries);
// Có thể duyệt qua cặp [key, value] bằng for...of
for (const [key, value] of Object.entries(user)) {
  console.log(`${key} : ${value}`);
}

// 4. Object.keys():  Trả về một mảng chứa các key của đối tượng dưới dạng chuỗi.
const keys = Object.keys(user);
console.log(keys); //Return: [ 'name', 'age', 'job' ]

// Đếm số lượng key trong Obj >> Dùng kiểm trả Obj có rỗng hay ko?
const keyCount = Object.keys(user).length;
console.log(keyCount);

const isEmpty = (obj) => Object.keys(obj).length === 0;
console.log(isEmpty({})); // return: True;
console.log(isEmpty({name : 'Vanasa'})) // return: False;