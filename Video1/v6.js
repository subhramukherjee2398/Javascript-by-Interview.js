const person  = {name : 'kiran'}

Object.seal(person)

person.age = 23;
delete person.name;
person.name = "HHHHHH"

console.log(person)

/*
seal only allow any property changing value.
Not add or delete.


*/