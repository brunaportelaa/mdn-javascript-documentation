// Object.getOwnPropertyNames()
// Returns array of all object string-keyed own properties

const harryPotter = {
    age: 12,
    house: 'Gryfindor',
    enemy: 'Voldemort'
}

const keys = Object.getOwnPropertyNames(harryPotter)
console.log(keys)
//Output: [ 'age', 'house', 'enemy' ]

// for Symbol keyed objects, use Object.getOwnPropertySymbols()