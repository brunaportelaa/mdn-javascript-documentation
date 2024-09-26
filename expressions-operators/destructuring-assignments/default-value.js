// Default value

const [a = 1] = [] // Javascript will attempt to destructure the array, and assign its first value to the variable a
const { b = 2 } = { b: undefined } // b is 2, because default values will overwrite undefined values.
const { c = 2 } = { c: null } // c is null, because default values will not overwrite null values.

console.log(a); // 1
console.log(b); // 2
console.log(c); // null



