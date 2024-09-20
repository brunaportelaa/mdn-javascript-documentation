// this
// Refers to the context of execution where a piece of code is supposed to run.
// Can refer to a function body or an object that a method runs on - obj.method()
// When running a standalone top-lovel function, refers to the global object
// Arrow functions inherit scope from their parent

// Function context

function getThis() {
    return this
}

const obj1 = { name: "obj1" }
const obj2 = { name: "obj2" }

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1, obj2)
// { name: 'obj1', getThis: [Function: getThis] } { name: 'obj2', getThis: [Function: getThis] }

// The value of this is the object that EXECUTES the method and not the one that contains it


// This substitution
// When this is set to undefined or null, it gets the value of the global object via globalThis
// If this is set to a primitive, it gets the wrapper object value

Number.prototype.getThis = getThis
console.log(typeof (1).getThis()) // object. The typeof operator wraps the primitive inside its wrapper object temporarily, hence why it is outputting "object"
console.log(getThis() === globalThis) // true.   Here, getThis is called without an object, so  it refers to the global object.
