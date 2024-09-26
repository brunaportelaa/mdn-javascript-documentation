// Object destructuring
// Allows you to unpack objcet properties into new variables

const brasil = {
  estados: 27,
  clima: 'tropical',
};

let { estados, clima } = brasil;
console.log(estados); // 27
console.log(clima); // tropical

// Assigning to new variable names
// creates a new variable and assigns to it the value of each property
let { estados: numberStates, clima: weather } = brasil;
console.log(numberStates, weather); // 27 tropical

// Assigning to new variable names + default values
const {
  burger: burger = 'ricco',
  sushi: sushi = 'nazo',
  hotdog: hotdog = 'jhow',
} = { burger: 'fogo no bigode', hotdog: 'dog do barto' };
console.log(burger, sushi, hotdog); // fogo no bigode nazo barto

// Destructuring objects as function parameters
const holidays = {
  christmas: 'december 25th',
  halloween: 'october 31st',
  valentines: 'february 14th',
  carnival: {
    firstDay: 'february 10th',
    lastDay: 'february 13th',
  },
};

function logHoliday({ christmas }) {
  return christmas;
}
// Here, we unpack the property of the object and assign its value to a variable with the same name

console.log(logHoliday(holidays)); // december 25th

function logAnotherHoliday({ halloween: diaDasBruxas }) {
  return diaDasBruxas;
}
// Here, we assign it to a new variable with name diaDasBruxas

console.log(logAnotherHoliday(holidays)) // October 31st

function logCarnival( { carnival: { firstDay, lastDay }}){
    return ` This year, Carnival starts in ${firstDay} and ends in ${lastDay}`
}

console.log(logCarnival(holidays))
// This year, Carnival starts in february 10th and ends in february 13th

// Destructuring function parameters with default value

function drawChart({
  size = 'big',
  coords = { x:0, y:0 },
  radius = 25,
} = {} ) {
  console.log(size, coords,radius);
}

drawChart({
  coords: { x: 18, y: 30 },
  radius: 30
})

drawChart()