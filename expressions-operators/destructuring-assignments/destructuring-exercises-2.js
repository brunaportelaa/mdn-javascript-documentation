// Basic Level
// Object Destructuring: Cats Edition
// You have the following object:

const cat = {
  name: 'Whiskers',
  breed: 'Siamese',
  age: 3
};

// Destructure the name and age of the cat into variables.
 const { name, age } = cat
 console.log(name, age)


// ------------------------------------------------------------------------

// Array Destructuring: Colors of the Rainbow
// Given the array:

const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Destructure the first two colors into variables firstColor and secondColor.

const [ firstColor, secondColor ] = rainbowColors
console.log(firstColor, secondColor);


// ------------------------------------------------------------------------

// Renaming Variables During Destructuring: Pop Diva Edition
// You have this object of a pop star:

const popStar = {
  stageName: 'Beyoncé',
  genre: 'Pop',
  albums: 6
};

// Destructure stageName and rename it to queenB and destructure albums into a variable totalAlbums.
const { stageName: queenB, albums: totalAlbums } = popStar
console.log(queenB, totalAlbums)

// ------------------------------------------------------------------------

// Array Destructuring with Default Values: Movie Edition
// Given the array:

const movies = ['Inception'];

// Destructure the first movie as favoriteMovie and the second one as backupMovie, with a default value of 'The Matrix' if no second movie exists.

const [ firstMovie, secondMovie = 'The Matrix'] = movies
console.log(firstMovie, secondMovie)


// ------------------------------------------------------------------------


// Object Destructuring with Default Values: Fictional Characters
// You are given:

const character = {
  charName: 'Hermione Granger',
  role: 'Witch'
};

// Destructure name, and add a default value for house that is 'Gryffindor' if not present.

const { charName, role, house = 'Gryffindor'} = character
console.log(charName, role, house);


// ------------------------------------------------------------------------

// Intermediate Level
// Array Destructuring: Dancing Styles
// Given this array of dance styles:

const dances = ['Dancehall', 'Hip-hop', 'House', 'Jazz Funk'];

// Destructure the first and third styles into variables firstDance and thirdDance.
const [ , secondDance, , fourthDance] = dances
console.log(secondDance, fourthDance);



// ------------------------------------------------------------------------


// Nested Object Destructuring: Superheroes Edition
// You have this object representing a superhero:


// const superhero = {
//   alias: 'Spider-Man',
//   realName: 'Peter Parker',
//   powers: {
//     mainPower: 'web-shooting',
//     secondaryPower: 'spidey sense'
//   }
// };

// Destructure the mainPower and secondaryPower from the powers object.


// ------------------------------------------------------------------------


// Array Destructuring with Skipping: Travel Edition
// You have this array of popular cities:

// js
// Copiar código
// const cities = ['Tokyo', 'New York', 'Paris', 'London', 'Dubai'];
// Destructure only the second and fourth cities into variables secondCity and fourthCity.

// Renaming and Nested Destructuring: Fantasy Edition
// You have the following object of a fantasy character:

// js
// Copiar código
// const character = {
//   name: 'Frodo Baggins',
//   species: 'Hobbit',
//   weapons: {
//     primary: 'Sting',
//     secondary: 'Mithril Armor'
//   }
// };
// Destructure name as heroName and destructure primary weapon.


// ------------------------------------------------------------------------


// Function Parameter Destructuring: Car Edition
// Write a function displayCarDetails that takes in an object with properties make, model, and year. Use destructuring directly in the function's parameters.
// Example object:

// js
// Copiar código
// const car = {
//   make: 'Tesla',
//   model: 'Model 3',
//   year: 2020
// };
// Call the function to destructure and display the car details.


// ------------------------------------------------------------------------


// Advanced Level
// Complex Nested Destructuring: Music Edition
// You have the following object representing a music album:
// js
// Copiar código
// const album = {
//   title: 'Thriller',
//   artist: 'Michael Jackson',
//   tracks: [
//     { title: 'Beat It', duration: '4:18' },
//     { title: 'Billie Jean', duration: '4:54' }
//   ]
// };
// Destructure the title of the first track and its duration.


// ------------------------------------------------------------------------


// Array Destructuring with Rest Operator: Programming Languages
// You are given the following array of programming languages:
// js
// Copiar código
// const languages = ['JavaScript', 'Python', 'C++', 'Go', 'Rust'];
// Destructure the first two languages into variables, and then use the rest operator to capture the remaining languages into a new array called otherLanguages.


// ------------------------------------------------------------------------


// Destructuring Function Return Values: Movie Ratings
// Write a function getMovieRatings that returns an object with properties imdb, rottenTomatoes, and metacritic. Destructure the return values into individual variables when calling the function.
// Example return:
// js
// Copiar código
// return { imdb: 8.5, rottenTomatoes: '94%', metacritic: 85 };
// Complex Nested Destructuring with Arrays: Fitness Edition
// You have the following object representing a fitness class:
// js
// Copiar código
// const fitnessClass = {
//   name: 'Yoga',
//   instructors: ['Alice', 'Bob'],
//   schedule: {
//     weekday: ['8am', '6pm'],
//     weekend: ['10am', '4pm']
//   }
// };
// Destructure the first instructor and the weekend schedule times.

// ------------------------------------------------------------------------

// Destructuring with Defaults and Renaming: Cat Café Edition
// You have this object for a cat café:
// js
// Copiar código
// const cafe = {
//   name: 'Purrfect Café',
//   cats: {
//     favorite: 'Mittens',
//     others: ['Whiskers', 'Tiger']
//   }
// };
// Destructure favorite cat, but rename it to topCat. Also, set a default value for a property location to 'Downtown' if it doesn’t exist.