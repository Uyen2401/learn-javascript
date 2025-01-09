// LESSON 19: Object
// 1. By object literal (Theo nghĩa đen)
/**
 * var datas = {property1:value1, property2:value2.....propertyN:valueN};
 */
let datas = {
	name: "Uyen", 
	age: "18",
	adress: "Ben Tre"
};
// 2. Bằng cách tạo trực tiếp đối tượng (sử dụng từ khóa new)
/**
 var objectname = new Object();  
objectname.property1 = value1;
 */
//Example:
datas = new Object(); 
datas.name = "Uyen"

// 3. Sử dụng object constructor (using new keyword)
/**
Cần tạo hàm với các đối số. Mỗi giá trị đối số có thể được chỉ định trong đối tượng hiện tại bằng cách sử dụng từ khóa này.
Từ khóa this đề cập đến đối tượng hiện tại.
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
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

Car.prototype.start = function() {
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