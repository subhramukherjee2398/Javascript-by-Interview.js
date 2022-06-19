const animals  = {};

let dog  = {emoji : 'IOI'}

let cat = {emoji : 'XXX'}

animals[dog] = {...dog,name:'jony'}

animals[cat] = {...cat,name:'sara'}

console.log(animals[dog])

/*
when a[b] ;

we are trying b object to a object
now {key : b} first will be stringify and then assing to a ;

so now a[object object] = 123;
after that we are doing same thing 

a[object object] = 456;

now a[b] & a[c] referring to the same memory location which has the vlaue of 456.


*/