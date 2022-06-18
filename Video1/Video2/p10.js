console.log(false || {} || null)
console.log(false || null || '');
console.log([] || 0 || false)

/*

|| operator returns actual truthy value so 

answer is {} =>1

all false then return last one

answer is '' =>2

answr is [] ( true) => 3



*/