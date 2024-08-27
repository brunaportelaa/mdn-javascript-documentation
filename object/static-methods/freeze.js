// Object.freeze()
// Makes object non-extensible, non-configurable and writable. Also prevents from changing prototype.
// Returns frozen object

const harryPotter = {
    age: 12,
    house: 'Gryfindor',
    enemy: 'Voldemort'
}

console.log(Object.getOwnPropertyDescriptor(harryPotter, 'house'))

// {
//     value: 'Gryfindor',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

Object.freeze(harryPotter)

try {
    Object.defineProperty(harryPotter, 'house', {
        value: 'slytherin'
    })
} catch {
    console.log('You cant switch houses, you know.')
}

// Throws TypeError: cannot redefine property

console.log(Object.getOwnPropertyDescriptor(harryPotter, 'house'))

// {
//     value: 'Gryfindor',
//     writable: false,
//     enumerable: true,
//     configurable: false
// }