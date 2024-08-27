// Object.is()
// Checks if two values are the same value
// Works very similarly to === operator

console.log(Object.is('a', 'a')) // True
console.log(Object.is(-0, 0)) // false. === operator returns true
console.log(Object.is(NaN, NaN)) // true. === operator returns false
console.log(Object.is(1, '1')) // false
console.log(Object.is(false, 0)) // false

