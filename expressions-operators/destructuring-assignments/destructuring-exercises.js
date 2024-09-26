// Basic Destructuring
// Object Destructuring (Basic)
// You have the following object:

const person = {
  name: 'John',
  age: 30,
  city: 'New York',
};

// Destructure the name and age from the person object and store them in variables.

const { name, age } = person;
console.log(name, age);

// -----------------------------------------------------

// Array Destructuring (Basic)
// Given the array:

const colors = ['red', 'green', 'blue'];

// Destructure the first and third elements of the array into variables firstColor and thirdColor.
const [firstColor, , thirdColor] = colors;
console.log(firstColor, thirdColor);

// -----------------------------------------------------

// Intermediate Destructuring
// Renaming Variables During Object Destructuring
// Consider the object below:

const user = {
  username: 'jdoe',
  email: 'jdoe@example.com',
  location: 'USA',
};

// Destructure the username and location but rename them to userAlias and userCountry respectively.

const { username: userAlias, location: userCountry } = user;

// -----------------------------------------------------

// Nested Object Destructuring
// You have an object with nested properties:

const company = {
  name: 'TechCorp',
  address: {
    street: '123 Main St',
    city: 'San Francisco',
    zip: '94107',
  },
};

// Destructure the city and zip from the address object inside company.

const {
  address: { city, zip },
} = company;
console.log(city, zip);

// -----------------------------------------------------

// Default Values During Array Destructuring
// Given the array:

const fruits = ['apple'];
// Destructure the array such that fruit1 is 'apple' and fruit2 defaults to 'banana' if there is no second value in the array.
const [fruit1, fruit2 = 'banana'] = fruits;
console.log(fruit1, fruit2);

// -----------------------------------------------------

// Advanced Destructuring
// Skipping Elements in Array Destructuring
// You are given the following array:

const numbers = [10, 20, 30, 40, 50];
// Destructure this array to extract only the second and fourth elements into variables second and fourth.
const [, second, , fourth, ,] = numbers;
console.log(second);
console.log(fourth);

// -----------------------------------------------------

// Destructuring Function Parameters
// Suppose you have a function that takes an object as an argument:

function displayUserInfo({ name, age, country = 'Unknown' }) {
  console.log(`Name: ${name}, Age: ${age}, Country: ${country}`);
}
// Call the function displayUserInfo with the object:

const newUser = { name: 'Alice', age: 25 };
// Add destructuring and default value handling inside the function to make it work correctly when the country is missing from the object.
displayUserInfo(newUser);

// -----------------------------------------------------

// Complex Nested Destructuring
// You are given the following nested object:

const data = {
  id: 101,
  info: {
    name: 'Product',
    specs: {
      weight: '1kg',
      dimensions: {
        width: 10,
        height: 20,
      },
    },
  },
};

// Destructure to extract weight, width, and height from the data object.

const {
  info: {
    specs: { weight, dimensions:{ width, height }},
  },
} = data;
console.log(weight, width, height);
