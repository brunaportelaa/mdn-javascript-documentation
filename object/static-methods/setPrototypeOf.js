// Object.setPrototypeOf()
// Sets the prototype of an object
// NOT recommended. Documentation recommends creating new objects with Object.create() instead of changing prototypes.

const dontReassignPrototypes = new Object;
Object.setPrototypeOf(dontReassignPrototypes, { yeah: 'looks like you did it either way...'})
console.log(Object.getPrototypeOf(dontReassignPrototypes))