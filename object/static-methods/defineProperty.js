// Object.defineProperty()
// Defines a new property or modifies an existing one
// Returns the object
// To define multiple properties, use Object.defineProperties()

// Using this method allows for precise addition and modification of properties. Ordinary assignment, creates enumerable, writable and configurable properties. Object.defineProperty() creates non-enumerable, non-configurable and non-writable properties by default.

// Object.defineProperty(obj, prop, descriptors)

const obj1 = {};
Object.defineProperty(obj1, 'property1', {
        value: 42,
        writable: true,
        enumerable: true,
        configurable: true
    }
)

console.log(obj1)