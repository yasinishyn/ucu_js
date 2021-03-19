var x = 3.14;    // A number with decimals
var y = 3;       // A number without decimals

// Extra large or extra small numbers
var x = 123e5;    // 12300000
var y = 123e-5;   // 0.00123

// NaN
var x = 100 / "Apple";  // x will be NaN (Not a Number)

typeof NaN;            // returns "number"

// Infinity (or -Infinity)
var myNumber = 2;
while (myNumber != Infinity) {   // Execute until Infinity
  myNumber = myNumber * myNumber;
}
var x =  2 / 0;       // x will be Infinity
var y = -2 / 0;       // y will be -Infinity

typeof Infinity;     // returns "number"

// Can be Objects
var x = 123; // typeof x returns number
var y = new Number(123); // typeof y returns object
// ...
var x = new Number(500);             
var y = new Number(500);
x == y // false because objects cannot be compared