var firstName = 'John';
console.log(firstName); // John

var lastName = 'Smith';
console.log(lastName); // Smith

var age = 30;
console.log(age); // 30

var isAgent = true;
console.log(isAgent); // true

var weapons = null;
console.log(weapons); // null

var mission;

console.log(`
  ${firstName} ${lastName}
  is ${age} years old,
  he has ${weapons} weapons,
  and his mission is ${mission}
`);

/*
  John Smith
  is 30 years old,
  he has null weapons,
  and his mission is undefined
*/