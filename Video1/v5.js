const value = {number : 10}

const multiply = (x = {...value}) =>{
     console.log((x.number *= 2))
}

multiply()
multiply()
multiply(value)
multiply(value)

/*
x = 10  - 7 
x  = 10 - 8

but now we are sending value as argument so now

x.number  = x.number * 2 ;

so now x.number  = 20;  -9

Now,

again we pass value means x.number = 20;
so x.number = x.number*2
            = 20 * 2 
             = 40  -> 10


*/