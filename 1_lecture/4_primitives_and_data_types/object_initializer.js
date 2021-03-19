let o = {}
let o = {a: 'foo', b: 42, c: {}}
console.log(1, o);

let a = 'foo', b = 42, c = {}
let o = {a: a, b: b, c: c}
let o = {a, b, c}
console.log(2, o);

let o = {
  property: function (parameters) {},
  get property() {},
  set property(value) {}
};
console.log(3, o);