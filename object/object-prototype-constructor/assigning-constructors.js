//You can assign constructors but that doesn't change the inner workings of that object.

const arr = [];
//arr.constructor = String
console.log(arr.constructor) // [Function: String]
console.log(arr instanceof String); // false
console.log(arr instanceof Array); // true

// You dont overwrite the original constructor, since it was not the instances own property. It was part of the prototype

const a = Object.hasOwn(arr, 'constructor');
console.log(`Notice the object itself doesn't have a constructor, since we didn't declare one: ${a}`);

const b = Object.hasOwn(Object.getPrototypeOf(arr), 'constructor');
console.log(`Its prototype however, does: ${b}`);

arr.constructor = String
const c = Object.hasOwn(arr, 'constructor')
console.log(`Now that we have assigned it, it has its own: ${c}`)

