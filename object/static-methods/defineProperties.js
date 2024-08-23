// Object.defineProperties()
// Defines a new properties or modifies existing ones
// Returns the object
// To define single property, use Object.defineProperty()

// Using this method allows for precise addition and modification of properties. Ordinary assignment, creates enumerable, writable and configurable properties. Object.defineProperty() creates non-enumerable, non-configurable and non-writable properties by default.

// Object.defineProperty(obj, props)

const obj1 = {};
Object.defineProperties(obj1, {
    property1: {
        value: 42,
        writable: true,
    },
    property2: {
        value: 'whatever'
    }
})
