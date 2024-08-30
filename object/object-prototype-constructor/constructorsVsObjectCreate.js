const bruxo = {
    powers: true
}

const harrypotter = Object.create(bruxo)

console.log(harrypotter)  // {}
harrypotter.age = 12
harrypotter.house = 'gryfindor'
harrypotter.enemy= 'voldemort'

console.log(harrypotter) // { age: 12, house: 'gryfindor', enemy: 'voldemort' }
console.log(harrypotter.hasOwnProperty('powers')) // false
console.log(harrypotter.hasOwnProperty('house')) // true
console.log(harrypotter.constructor) // [Function: Object]
console.log(Object.getPrototypeOf(harrypotter)) // { powers: true }

// Here in the 1st example, we use the bruxo object as a prototype for the harrypotter object.
// powers is not its own property because it is inherited from the bruxo object.
// since we don't have a constructor in the bruxo object, our constructor is inherited from the Object object.


function Bruxo() {
    this.powers = true
}

const harryPotter = new Bruxo()

console.log(harryPotter) // Bruxo { powers: true }
harryPotter.age = 12
harryPotter.house = 'gryfindor'
harryPotter.enemy= 'voldemort'

console.log(harryPotter) // Bruxo { powers: true, age: 12, house: 'gryfindor', enemy: 'voldemort' }
console.log(harryPotter.hasOwnProperty('powers')) // true
console.log(harryPotter.hasOwnProperty('house')) // true
console.log(harryPotter.constructor) // [Function: Bruxo]
console.log(Object.getPrototypeOf(harryPotter)) // {}

// Here, the Bruxo function serves as a constructor rather than a prototype
// In this manner, powers is a property "owned" by Harry Potter himself