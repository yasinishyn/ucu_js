typeof undefined     === "undefined"; // true
typeof true          === "boolean";   // true
typeof 42            === "number";    // true
typeof "42"          === "string";    // true
typeof { life: 42 }  === "object";    // true
typeof null          === "object";    // Ooops

// added in ES6!
typeof Symbol()      === "symbol";    // true