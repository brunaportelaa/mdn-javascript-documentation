// Object.getPrototypeOf()
// Returns the value of the prototype of the specified object

class Gatinho {
    constructor(pelagem, temperamento, idade, quantidadeOlhos) {
        this.pelagem = pelagem;
        this.temperamento = temperamento
        this.idade = idade
        this.quantidadeOlhos = quantidadeOlhos 
    }
}

const potoco = new Gatinho('rajado e branco', 'tranquilão', 'adolescente', 1)
console.log(potoco)

const prototype = Object.getPrototypeOf(potoco)
console.log(prototype) // Output = {}
// The class doesn't have properties beside the constructor, which does not show up due to being non-enumerable
console.log(prototype.constructor) // Output: [class: Gatinho]