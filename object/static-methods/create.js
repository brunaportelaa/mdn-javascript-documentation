// Object.create()
// Creates an object with a specified prototype
// Notice the properties of prototype are not assigned to the child object as their own

const gatinho = {
    nome: 'Putchuca',
    temperamento: 'braba',
    pelagem: 'rajado e branco'
}

const putchuca = Object.create(gatinho)
console.log(putchuca) // Output: {}. Don't have their own properties.
console.log(Object.getPrototypeOf(putchuca)) // Output: { nome: 'Putchuca', temperamento: 'braba', pelagem: 'rajado e branco' }
console.log(Object.getPrototypeOf(putchuca).constructor) // Output: [Function: Object]. Since it doesn't have its own, it inherits the constructor of its parent.

putchuca.hidratada = true
console.log(putchuca) // Output: { hidratada: true }
