// Array destructuring
// Unpacks values from an array

const trips = [
  'rio de janeiro',
  'chapada',
  'universo paralello',
  'itacare',
  'boipeba',
];

const [x, y, z, a, b] = trips;
console.log(x); // rio de janeiro
console.log(y); // chapada
console.log(z); // universo paralello
console.log(a); // itacare
console.log(b); // boipeba


// Swapping variables

const habits = ['make bed', 'strech', 'study', 'drink water'];
let [one, two, three, four] = habits;
console.log(one, two, three, four); // make bed strech study drink water
[one, two, three, four] = [four, three, two, one];
console.log(one, two, three, four); // drink water study strech make bed

let hi = 1;
let there = 3;
[hi, there] = [there, hi];
console.log(hi); // 3
console.log(there); // 1

// Parsing an array returned from a function
function anitta() {
  return ['funk generation', 'versions of me', 'xeque mate'];
}

const [bestAlbum, globalPopstarAlbum, bigRelease] = anitta();
console.log(bestAlbum, globalPopstarAlbum, bigRelease); // funk generation versions of me xeque mate


// Ignoring some returned values
const [ latestRelease, secondLatestRelease, ,] = anitta();
console.log( latestRelease, secondLatestRelease ) // funk generation versions of me

// Using a binding pattern as the rest property
const [ c, d, ...{ length }] = [ 1, 2, 3, 4, 5, 6] 
console.log(c, d, length) // logs c, d, and the length of the new array [3, 4, 5, 6] crated using the rest property.

// Array destructuring with nested rest
const [ e, f, ...[g, h]] = [1, 2, 3, 4]
console.log(e, f, g, h);
