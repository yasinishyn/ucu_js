console.log(Symbol('foo') === Symbol('foo'))  // false

var sym = Symbol('foo');
var sym2 = sym 

console.log(sym2 === sym) // true


let obj = {}

obj[Symbol('a')] = 'a'
obj[Symbol.for('b')] = 'b'
obj['c'] = 'c'
obj.d = 'd'

console.log(obj)

// Symbols are not enumerable in for...in iterations
for (let i in obj) {
   console.log(i)  // logs "c" and "d"
}