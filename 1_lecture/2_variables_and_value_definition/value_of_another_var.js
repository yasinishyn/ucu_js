var name = prompt("What is your name?", "Type here...");
alert('var name ' + name);

var name2 = name;
alert('var name2 ' + name2);

name = prompt("Type something different", "Type here...");
alert('var name ' + name);
alert('var name2 ' + name2);

// There are only two hard things in Computer Science: cache invalidation and naming things.
// -- Phil Karlton