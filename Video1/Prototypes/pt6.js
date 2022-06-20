function give(){
    return "Here Pizza"
}

const giveMeHey = () =>{
  "Here is give Me more ..."
}

console.log(give.prototype);
console.log(giveMeHey.prototype)

/* line : 9 get a empty constructor  */

/*
 line : 10 undefined , because it's a arrow function and it's does'nt gave the content of 'this' 
 also can't create the protoType chain.
*/