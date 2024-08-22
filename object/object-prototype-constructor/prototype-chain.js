//In prototype chains, the constructors of the instances are usually inherited from their parents

const o = new TypeError;

// getPrototypeOf returns the prototype of that object
const proto = Object.getPrototypeOf;

//hasOwn returns true if object has the indicated property as its own property
// here, it returns false because "o" inherits the constructor from TypeError.prototype
Object.hasOwn(o, 'constructor') // false
console.log(proto(o).constructor === TypeError) // true
console.log(proto(o).constructor) // [Function: TypeError]
console.log(proto(proto(o)).constructor === Error)  // true
console.log(proto(proto(proto(o))).constructor === Object) // true
