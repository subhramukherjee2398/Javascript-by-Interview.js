function foo(){
    return {
        bar : 'hello'
    }
}

function foo2(){
    return 
    {
        bar : 'hello'
    }
}

console.log(foo())
console.log(foo2())

/*
15 => undefined ; becasue after spacing return it will consider it as a single line; like : return;

*/