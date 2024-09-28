// Advanced Level

// 16. Function Parameter Destructuring with Defaults: Superhero Info
// Write a function getHeroInfo that accepts an object with the properties name, power, and origin. The function should provide a default value for origin as 'Unknown' if it's not provided.
// Example object:

const hero = { name: 'Wonder Woman', power: 'Super strength' };

// Destructure and print the values inside the function.

function getHeroInfo({ name, power, origin = 'Unknown' }) {
  console.log(name, power, origin);
}

getHeroInfo(hero);

// ------------------------------------------------------------------------

// 17. Swapping Variables with Destructuring: Math Edition
// You are given two numbers:

let x = 10;
let y = 20;

// Use array destructuring to swap the values of x and y, so that x becomes 20 and y becomes 10.

[x, y] = [y, x];

console.log(x);
console.log(y);

// ------------------------------------------------------------------------

// 18. Rest Parameter Destructuring in Functions: Student Grades

// Create a function averageGrade that accepts a student object and then destructures the student's name, and uses the rest operator to collect their grades into an array.

// Example object:
const student = {
  name: 'John Doe',
  grades: [80, 90, 85, 92],
};

function averageGrade({ name, grades }) {
  const avgGrade =
    grades.reduce((acc, currentValue) => acc + currentValue) / grades.length;
  console.log(`${name}'s average grade is ${avgGrade}`);
}

averageGrade(student);

// The function should calculate the average of the grades and log the student's name and their average grade.

// ------------------------------------------------------------------------

// 19. Function Parameter Destructuring with Nested Objects: Shopping Cart
// Write a function getTotalPrice that accepts a shopping cart object with customerName and an array of items. Each item contains a name, price, and quantity. Destructure the customer name and use the rest operator to calculate the total price of all items.
// Example object:

const cart = {
  customerName: 'Sarah',
  items: [
    { name: 'Book', price: 10, quantity: 2 },
    { name: 'Pen', price: 1, quantity: 5 },
  ],
};

function getTotalPrice({ customerName, items: [...rest] }) {
  let sum = 0;

  for (i = 0; i < rest.length; i++) {
    sum = sum + rest[i].price * rest[i].quantity;
  }

  return `${customerName} has ${sum} dollars in the shopping cart.`;
}

console.log(getTotalPrice(cart));

// ------------------------------------------------------------------------

// 20. Function Destructuring with Defaults: Weather Report
// Create a function getWeatherReport that accepts an object with properties temperature, humidity, and condition. Destructure these properties inside the function, providing a default value of 'Clear' for condition if it's missing.
// Example object:

const weather = { temperature: 22, humidity: 55 };

function getWeatherReport({ temperature, humidity, condition = 'Clear' }) {
  return `The temperature today is ${temperature} degrees. Air humidity is at ${humidity}%. Today's general weather condition is ${condition}`;
}

console.log(getWeatherReport(weather));

// ------------------------------------------------------------------------

// 21. Swapping Multiple Variables with Array Destructuring: Color Palette
// You are given three colors:

let color1 = 'red';
let color2 = 'blue';
let color3 = 'green';

// Use array destructuring to rotate the values so that color1 becomes 'green', color2 becomes 'red', and color3 becomes 'blue'.

[color1, color2, color3] = [color3, color1, color2];
console.log(color1, color2, color3);

// ------------------------------------------------------------------------

// 22. Rest Parameter and Default Value in Function Destructuring: Pizza Order
// Write a function orderPizza that accepts an object with properties size, crust, and a rest parameter for toppings. Provide a default value of 'medium' for the size if it's not provided.
// Example object:

const order = { crust: 'thin', toppings: ['cheese', 'pepperoni'] };

function orderPizza({ crust, toppings: [...toppings], size = 'medium' }) {
  return `New order of a ${size} pizza, with ${crust} crust and  ${toppings}`;
}

console.log(orderPizza(order));


// ------------------------------------------------------------------------

// 23. Destructuring Function Parameters and Swapping: Spacecraft
// Write a function adjustCoordinates that accepts an object with properties x, y, and z. The function should swap the x and y coordinates using destructuring.
// Example object:

const coordinates = { x: 5, y: 10, z: 15 };

// ------------------------------------------------------------------------

// 24. Destructuring Nested Objects with Default Values: Movie Night
// Create a function movieDetails that accepts an object with properties title, director, and ratings (which contains imdb, rottenTomatoes, and metacritic). If any of these rating properties are missing, provide default values.
// Example object:

const movie = {
  title: 'Inception',
  director: 'Christopher Nolan',
  ratings: { imdb: 8.8, metacritic: 74 },
};

// ------------------------------------------------------------------------

// 25. Rest and Default Parameter Combination: Concert Setup
// Write a function setupConcert that accepts an object with properties band, venue, time, and a rest parameter for instruments. Provide a default value of '8:00 PM' for time if it's missing.
// Example object:

const concert = {
  band: 'The Rolling Stones',
  venue: 'Wembley Stadium',
  instruments: ['guitar', 'drums', 'bass'],
};

// Destructure the properties and log the concert setup.
