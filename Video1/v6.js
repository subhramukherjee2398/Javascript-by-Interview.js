const person  = {name : 'kiran'}

Object.seal(person)

person.age = 23;
delete person.name;
person.name = "HHHHHH"

console.log(person)

/*
With Object.seal we can prevent new properties from being added, or existing properties to be removed.

*/