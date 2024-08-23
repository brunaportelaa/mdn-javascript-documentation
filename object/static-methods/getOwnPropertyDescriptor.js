// Object.getOwnPropertyDescriptors()
// Returns an object containing objects corresponding to each property. These property objects are populated with keys-value pairs for each descriptor.

const harryPotter = {
    age: 12,
    house: 'Gryfindor',
    enemy: 'Voldemort'
}

const descriptors = Object.getOwnPropertyDescriptors(harryPotter)
console.log(descriptors)
//Output:
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

// Object.getOwnDescriptor()
// You can also retrieve a single descriptors value

// Gets a specified property descriptors in the format of an object
const houseDescriptors = Object.getOwnPropertyDescriptor(harryPotter, 'house')
console.log(houseDescriptors.writable) // Output: true

// for Symbol keyed objects, use Object.getOwnPropertySymbols()