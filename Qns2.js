async function getData(){
    return await Promise.resolve('I made it');
}
const data  = getData();
console.log(data)

/*

Async function always returns promise.
So in this case the Promise.resolve is in await situation; that's mean it's pending..

ans : return pending promise.

*/

/* if you want to see that will return after that promise...  */

console.log(data.then((res)=>console.log(res)))