// Function.prototype.bind()
// Creates a new function, a bound function, and sets its 'this' value to the first argument presented
// function.bind(newThisValue)

// If I create a new object that contains a few properties and a method that refers to the objects own properties, it would look like this:

const currentlyReading = {
    name: 'Silent Patient',
    startDate: '10/11/2024',
    genre: 'thriller',
    currentlyEnjoying: true,
    getBook: function() {
        return `The book I'm currently reading is a ${this.genre}, named ${this.name}, which I started in ${this.startDate}. I am ${this.currentlyEnjoying ? 'really' : 'so not'} enjoying it.`
    },
}

console.log(currentlyReading.getBook());
// The book I'm currently reading is a thriller, named Silent Patient, which I started in 10/11/2024. I am really enjoying it.

//If I assign the method to a new variable, it will lose it's initial context and return undefined for the values related to 'this'
let book = currentlyReading.getBook
console.log(book())
// The book I'm currently reading is a undefined, named undefined, which I started in undefined. I am so not enjoying it.

// If I use bind(), the argument value will serve as the new context for the 'this' keyword
book = currentlyReading.getBook.bind(currentlyReading)
console.log(book())
// The book I'm currently reading is a thriller, named Silent Patient, which I started in 10/11/2024. I am really enjoying it.

// If the function has arguments, they can be passed right after
// function.bind(thisArg, arg1, ... ,argN)