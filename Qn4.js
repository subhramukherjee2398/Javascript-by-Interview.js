console.log(Promise.resolve(5))


/*

if we pass anything in promise.resolve ( it could a promise or any known promise value as well );

so,
return typr of Promise-resolve will be a promise,
ans : Promise { 5 }

** nOtes :
 if we passed any promsie instaed of that 5, then will get 
 like : console.log(Promise.resolve(promise2()))

 Proimise { the resolve value of the promise2 }
*/