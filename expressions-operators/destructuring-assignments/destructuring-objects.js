// Object destructuring
// Allows you to unpack objcet properties into new variables

const brasil = {
    estados: 27,
    clima: 'tropical'
}

let { estados, clima } = brasil
console.log(estados) // 27
console.log(clima) // tropical