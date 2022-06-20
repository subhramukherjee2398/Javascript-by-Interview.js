/* How to create an Object with prototype */

const p = {
    name : "Subhra"
}

const s = Object.create(p);

// using the object.create function the s can innherit property and methods from p //

console.log(s.name)