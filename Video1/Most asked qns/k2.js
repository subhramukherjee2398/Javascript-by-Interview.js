console.log("0 || 1 = " + (0 || 1)); 
console.log("1 || 2 = "+(1 || 2));  
console.log("0 && 1 =" +(0 && 1)); 
console.log("1 && 2="+(1 && 2)); 

/* 

( 0 || 1) => ( f || t) => t => +t => 1
(1 || 2) => ( t || t) => t  => 1
(0 && 1) => (false && true) =>  both are not same( && will not work) so , => +false => 0
(1 && 2) => (t && t) => now && returns it's value 2=>2
( 1 && 99) => 99


*/