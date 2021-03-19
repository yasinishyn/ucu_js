var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];

// ...

function f(x, y, z) {
    console.log(x, y, z)
}
var args = [0, 1, 2];
f(...args);