async function* range(start,end){
    for(let i = start ; i<= end ; i++){
        yield Promise.resolve(i)
    }
}

(async()=>{
    const gen = range(1,3);
    for await (const item of gen){
        console.log(item)
    }
})();

/*

the first function is an async func.. it always return promise object.
so we will get like

Promise {1}
Promise {2}
Promise {3}

so in the gen variable we will get those promises..

now we are using await ... it will halt the promise , untill and unless the promise resolved.

so now,

await Promise {1} => 1, after finised
await Promise {2} => 2, after finised
await Promise {3} => 3




*/