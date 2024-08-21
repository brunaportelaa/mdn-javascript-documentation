//Every object has a constructor property that points to the constructor function used to build the instance. If object is created with an onbject literal, it is going to point to the constructor of that object type, like Array() or Object().

const o1 = {};
const o2 = new Object();
const a1 = [];
const a2 = new Array();
const n = 3;

console.log(o1.constructor);
console.log(o2.constructor === Object);
console.log(a1.constructor === Array);
console.log(a2.constructor === Array);
console.log(n.constructor === Number);

console.log(Array)