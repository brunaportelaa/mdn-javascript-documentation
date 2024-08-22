//Every object has a constructor property that points to the constructor function used to build the instance. If object is created with an onbject literal, it is going to point to the constructor of that object type, like Array() or Object().

const o1 = {};
const o2 = new Object();
const a1 = [];
const a2 = new Array();
const n = 3;

console.log(o1.constructor); // returns [Function: Object]
console.log(o2.constructor === Object); // true
console.log(a1.constructor === Array); // true
console.log(a2.constructor === Array); // true
console.log(n.constructor === Number); // true

console.log(Array) // returns [Function: Array]

//You can't really see the constructors of Array and Object because it is a native function in lower level language
