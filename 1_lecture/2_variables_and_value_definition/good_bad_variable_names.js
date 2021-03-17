let name;    // Good
let myName;  // Good
let $myName; // Good
let _myName; // Good
let myName1; // Good

let my/name; // Bad (error)
let my-name; // Bad (error)
let my^name; // Bad (error)
let #myName; // Bad (error)
let 1myName; // Bad (error)
let my Name; // Bad (error)

// Bad (error) - use of reserved words
let this; 
let class;
let if;
let case;
let interface;
let super;
let delete;
let null; // etc...