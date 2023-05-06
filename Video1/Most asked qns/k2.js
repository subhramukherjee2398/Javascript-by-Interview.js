console.log("0 || 1 = " + (0 || 1)); 
console.log("1 || 2 = "+(1 || 2));  
console.log("0 && 1 =" +(0 && 1)); 
console.log("1 && 2="+(1 && 2)); 

/**


```
0 || 1 = 1
1 || 2 = 1
0 && 1 =0
1 && 2=2
```

Here's an explanation of how the logical operators work in JavaScript:

- The `||` operator (logical OR) returns the first truthy value it encounters or the last falsy value. In the first line of code, `0` is falsy and `1` is truthy, so the expression `0 || 1` evaluates to `1`. Similarly, in the second line of code, `1` is truthy, so the expression `1 || 2` evaluates to `1`.

- The `&&` operator (logical AND) returns the first falsy value it encounters or the last truthy value. In the third line of code, `0` is falsy, so the expression `0 && 1` evaluates to `0`. In the fourth line of code, both `1` and `2` are truthy, so the expression `1 && 2` evaluates to `2`.
 */































/* 

( 0 || 1) => ( f || t) => t => +t => 1
(1 || 2) => ( t || t) => t  => 1
(0 && 1) => (false && true) =>  both are not same( && will not work) so , => +false => 0
(1 && 2) => (t && t) => now && returns it's value 2=>2
( 1 && 99) => 99


*/