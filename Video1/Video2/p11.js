
(()=>{
    let x,y;
    try{
        throw new Error();
    } catch (x){
        (x =1),(y = 2);
        console.log(x)
    }
    console.log(x)
    console.log(y)
})()

/* 
Here it is an IFEE so the function is called immediately in try an error is thrown and catch block runs here 
we calture the error in x and assign it to 1 so in catch block console.log(x) will give 1 
then catch block is over and in next console.log(x) it will give undefined because the x will be 1 in catch block scope , 
then the third console.log(y) will give 2 because in catch block y is assigned to 2 it doesn't find y in its scope so 
it looks to lexical environment and found variable y and assign 2 to it 
So the output will be
 1 
undefined
 2 */