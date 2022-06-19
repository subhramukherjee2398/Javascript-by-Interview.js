
/* write a function to check palindrom or not */

console.log(palindrom("MADAM"))
console.log(palindrom("KIRAN"))

// solution : 

function palindrom(str){
 return str.split('').reverse('').join('') === str
}

/*
in js to resverse a string:

first split
reverse them 
and join them


*/