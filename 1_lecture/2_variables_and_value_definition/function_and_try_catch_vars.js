function hello(myName) {
    console.log(`Hello, ${ myName }.`);
}

hello("Kyle");
// Hello, Kyle.

try {
    undefinedVariable / 2;
}
catch (err) {
    console.log(err);
}