// Object.fromEntries()
// Creates an object from a list of key-value pairs

const gatinhos = [
    [1, 'putchuca'],
    [2, 'athena'],
    [3, 'potoco']
]

const gatinhosObj = Object.fromEntries(gatinhos)
console.log(gatinhosObj)