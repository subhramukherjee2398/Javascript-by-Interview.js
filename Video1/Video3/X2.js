let person = {name : "Kiran"}

function helloBudyy(occupation){
 return `${this.name} is working as ${occupation}`
}

console.log(helloBudyy.call(person,'engineer'))
console.log(helloBudyy.bind(person,'engineer'))

/* 
Call method immediatley excuted the function
so output will :

kiran is ....

But Bind Method does'nt exected immediatley; it takes the reference
of that function, so we have to run it explicitly

*/