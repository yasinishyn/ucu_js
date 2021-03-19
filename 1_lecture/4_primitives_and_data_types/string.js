// String.
console.log("String");

// String with single "quotes"
console.log('String with single "quotes"');

// Interpolation
let variable = 'Cat'
console.log(`String with embeded ${ variable }.`);

// Muliline string From the above example
console.log(`
  ${firstName} ${lastName}
  is ${age} years old,
  he has ${weapons} weapons,
  and his mission is ${mission}
`);

// Long string
let longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable."

// String defined with the String constructor
let constructedString = new String('I am important')
console.log(constructedString) // String {"I am important"}