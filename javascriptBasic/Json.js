/**
LESSON 20: JSON
Là 1 định dạng dữ liệu (String): JSON: JavaScript Object Notation 
(xử lý trên nhiều ngôn ngữ lập trình khác nhau, không chỉ riêng JavaScript.)
JSON: Number, String, Boolean, Null, Array, Object
Stringify: Từ JS types -> JSON
Parse: Từ JSON -> JS types
 */

/**
        JSON
String	'"Hello World"'
Number	'42', '3.14'
Boolean	'true', 'false'
Object	{"key": "value"}
Array	'[1, 2, 3]'
Null	'null'
 */

// Stringify:
const obj = {
    name: "Uyen",
    age: 18,
    isStudent: true,
  };
  const jsonString = JSON.stringify(obj);
  console.log(jsonString); // Return: '{"name":"Uyen","age":18,"isStudent":true}'
  
  // Parse:
  
  const json = "{'name':'Uyen','age':18,'isStudent':true}";
  const object = JSON.stringify(json);
  console.log(object); // { name: 'Uyen', age: 18, isStudent: true }
  