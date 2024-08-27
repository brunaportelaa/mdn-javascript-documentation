// Object.hasOwn
// Checks weather the object has a property as its own

const harryPotter = {
    age: 12,
    house: 'Gryfindor',
    enemy: 'Voldemort'
}

console.log(Object.hasOwn(harryPotter, 'house')) // true
console.log(Object.hasOwn(harryPotter, 'constructor')) // false