console.log(false || {} || null)
console.log(false || null || '');
console.log([] || 0 || false)
console.log("" && 0)

/*

|| operator returns actual truthy value so 

answer is {} =>1

all false then return last one

answer is '' =>2

answr is [] ( true) => 3

//When the logical AND operator (&&) is used between two operands, it returns the first operand if it is falsy, and returns the second operand if the first operand is truthy.

In this case, the first operand is an empty string "", which is a falsy value. The second operand is the number 0, which is also a falsy value. Therefore, the expression "" && 0 will return the first operand, which is an empty string "".

*/