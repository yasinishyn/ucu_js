const yes = true;
const no = false;

if(yes) {
  console.log("will be executed");
}

if(no) {
  console.log("will not be executed");
}


// What is falsy
new Boolean(""); // false
new Boolean(0); // false
new Boolean(undefined); // false
new Boolean(null); // false
new Boolean(NaN); // false
new Boolean("some text"); // true
new Boolean(1); // true

// What is falsy
if (!""){
    console.log("emply string", 'is falsy');
}

if (!0) {
    console.log(0, 'is falsy');
}

if (!undefined) {
    console.log(undefined, 'is falsy');
}

if (!null) {
    console.log(null, 'is falsy');
}

if (!NaN) {
    console.log(NaN, 'is falsy');
}

if (!false) {
    console.log(false, 'is falsy');
}