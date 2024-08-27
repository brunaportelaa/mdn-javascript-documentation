// Object.seal()
// Makes properties non-configurable. You also can't add new properties but you can modify existing ones.

const harryPotter = {
    age: 12,
    house: 'Gryfindor',
    enemy: 'Voldemort'
}

console.log(Object.getOwnPropertyDescriptors(harryPotter))

// age: { value: 12, writable: true, enumerable: true, configurable: true },
// house: {
//   value: 'Gryfindor',
//   writable: true,
//   enumerable: true,
//   configurable: true
// },
// enemy: {
//   value: 'Voldemort',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
// }

Object.seal(harryPotter)
console.log(Object.getOwnPropertyDescriptors(harryPotter))

