// Delete
delete objectName;
delete objectName.property;
delete objectName[index];
delete property; // legal only within a with statement


// typeof
typeof operand
typeof (operand)


// void
void (expression)
void expression

// in (propNameOrNumber in objectName)
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees;        // returns true
3 in trees;        // returns true
6 in trees;        // returns false
'bay' in trees;    // returns false (you must specify the index number,
                   // not the value at that index)
'length' in trees; // returns true (length is an Array property)

// Custom objects
var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar;  // returns true
'model' in mycar; // returns true