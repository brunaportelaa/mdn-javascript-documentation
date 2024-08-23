// Static methods

// Object.assign()
// Copies all enumerable own properties from one or more source objects to a target object.
// Object.assign(target, source1, source2, ..., sourceN)
// Returns the target object.

const target = { a: 1, b: 2};
const source = { b: 4, c: 5};

const returnedTarget = Object.assign(target, source);
console.log(target) // Output: { a: 1, b: 4, c: 5 }
// Notice that properties with same key get overwritten
console.log(returnedTarget === target) // Output: true

// Cloning an object: add empty object as target
const copy = Object.assign({}, source)

