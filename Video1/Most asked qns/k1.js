var a1 = "jonh".split("");

var a2 = a1.reverse();

var a3 = "jones".split("");

a2.push(a3);

console.log(a1.length);

/*

a1 = [j , o , n , h]

a2 = [h , n , o , j] and also a1 = [h , n , o , j] as a1  and a2 sharing the same array reference

a3 = [j , o , n , e , s]

a2.push  so a2 = [h , n , o , j , [j , o , n , e , s]]
         1   2   3  4         5
and a1 =[h , n , o , j , [j , o , n , e , s]]  =>  lenght  = 5


*/

console.log(a1.slice(-1))

/* [[j , o , n , e , s]]  */

console.log(a2.length)
console.log(a2.slice(-1))

