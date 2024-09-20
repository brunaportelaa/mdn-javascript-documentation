// For objects and arrays, there are two kinds of destructuring patterns

// Binding pattern
// starts with a declaration keyword (let, var or const) and each value gets bound to a variable.

const obj = { a: 1, b: { c: 2 }}
const {
    a,
    b: {c: d} // Goes into b and renames the value of c as d
} = obj

console.log(a); // Output: 1
console.log(d); // Output: 2


// Assignment pattern
// Happens when a variablehas already been declared, but now gets assigned toa new value.

const numbers = [];
const obj2 = { a: 1, b: 2 };

({ a: numbers[0], b: numbers[1]}  = obj2);

console.log(numbers);


// Assignment pattern: Object properties

const user = {};
({ name: user.firstName, age: user.userAge } = { name: 'Alice', age: 25 })
console.log(user) // Outputs: { firstName: 'Alice', userAge: 25 }