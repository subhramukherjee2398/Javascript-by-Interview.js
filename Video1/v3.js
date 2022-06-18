const a  = {}
const b = {key : 'b'}
const c  = {key : 'c'}

a[b] = 123
a[c] = 456
console.log(a[b])

/*
when a[b] ;

we are trying b object to a object
now {key : b} first will be stringify and then assing to a ;

so now a[object object] = 123;
after that we are doing same thing 

a[object object] = 456;

now a[b] & a[c] referring to the same memory location which has the vlaue of 456.


*/