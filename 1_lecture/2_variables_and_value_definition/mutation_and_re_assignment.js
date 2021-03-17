// you can change value in let(s) and var(s)
let name, age;
var ocupation;
name = 'Andrew';
age = 29;
ocupation = 'Software Engineer';
console.log(name, age, ocupation)

// you can change types
name = 101;
age = '29';
ocupation = true;
console.log(name, age, ocupation)

// you can re-assign parameter in the function
function doSomething(arg1){
	arg1 = 2;
	console.log(arg1)
}
doSomething('1')

// you can re-assign parameter in the try/catch
try {
  IDontExist('hello?')
}
catch (err) {
  err = "now you don't know what caused the issue"
  console.log(err);
}

// you can't re-declare variable, if it's already declared in the same scope
let email = 'email1@example.com';
let email = 'email2@example.com'; // error

// same with const
const email = 'email1@example.com';
const email = 'email2@example.com'; // error

// however it works with var
var a = 1;
var a = 2;
console.log(a) // 2

// you can't re-assign const
const myConst = 1;
myConst = 2; // error

// Advanced - You can't re-assign object property if the property
// "data accessor" is set as writable:false.
var myObject = {};

Object.defineProperty( myObject, "a", {
	value: 2,
	writable: false, // not writable!
	configurable: true,
	enumerable: true
});

myObject.a = 3; // no error

myObject.a; // 2