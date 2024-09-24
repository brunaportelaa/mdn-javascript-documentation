// Rest property
// ...variable
// stores all remaining values in an object or array

// Objects
const { a, ...others } = { a: 1, b: 2, c: 3}
console.log( a, others) // Output: 1 { b: 2, c: 3 }

// Arrays
const [ x, ...rest ] = [ 1, 2, 3, 4, 5 ]
console.log(x, rest) // Output: 1 [ 2, 3, 4, 5 ]