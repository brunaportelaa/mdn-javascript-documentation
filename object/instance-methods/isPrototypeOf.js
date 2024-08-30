// Object.prototype.isPrototypeOf()
// Checks if an object is inside the prototype chain of another. Returns boolean.

class Animal{}
class Mamifero extends Animal {}
class Felino extends Mamifero {}
class Gatinho extends Felino {}

const animal = new Animal
const mamifero = new Mamifero
const felino = new Felino
const gatinho = new Gatinho

console.log(Animal.prototype.isPrototypeOf(mamifero))
console.log(animal.prototype.isPrototypeOf(mamifero))
