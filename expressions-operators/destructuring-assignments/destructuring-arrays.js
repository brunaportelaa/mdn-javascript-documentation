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
console.log(x);
console.log(y);
console.log(z);
console.log(a);
console.log(b);

// Swapping variables

const habits = ['make bed', 'strech', 'study', 'drink water'];
let [one, two, three, four] = habits;
console.log(one, two, three, four);
[one, two, three, four] = [four, three, two, one];
console.log(one, two, three, four);

let hi = 1;
let there = 3;
[hi, there] = [there, hi];
console.log(hi);
console.log(there);

// Parsing an array returned from a function
function anitta() {
  return ['funk generation', 'versions of me', 'xeque mate'];
}

const [bestAlbum, globalPopstarAlbum, bigRelease] = anitta();
console.log(bestAlbum, globalPopstarAlbum, bigRelease);


// Ignoring some returned values
const [ latestRelease, secondLatestRelease, ,] = anitta();
console.log( latestRelease, secondLatestRelease )