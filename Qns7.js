const myPromise = Promise.resolve(Promise.resolve("promise!"))

function funcOne(){
    myPromise.then(res=>res).then(res=>console.log(res))
    setTimeout(()=>console.log('Timeout !'),0)
    console.log('Last Line')
}

async function funcTwo(){
    const res = await myPromise;
    console.log(await res)
    setTimeout(()=>console.log('Timeout !'), 0)
    console.log('Last Line')
}

funcOne()
funcTwo()

/*

Last Line
promised
Promised
Last Line
Timeout
Timeout






*/