function hello(myName) {
    console.log(`Hello, ${ myName }.`);
}

hello("Kyle");
// Hello, Kyle.

// function variables behave like var decraled even if we use
// arrow function
const a = (b) => b + 1;
console.log(a(2));
console.log(b);

try {
    undefinedVariable / 2;
}
catch (err) {
    console.log(err);
}