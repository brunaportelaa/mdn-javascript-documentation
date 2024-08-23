// Object.entries()
// Returns an array oh an objects own enumerable string-keyed properties as key-value pairs.

const object1 = {
    a: 'some string',
    b: 8,
}

for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`) 
}

// Outputs:
// a: some string
// b: 8

const gatinhos = { 1: 'putchuca', 2: 'athena', 3: 'potoco'}

console.log(Object.entries(gatinhos))
// Output: [ [ '1', 'putchuca' ], [ '2', 'athena' ], [ '3', 'potoco' ] ]
// Return value is an array of arrays