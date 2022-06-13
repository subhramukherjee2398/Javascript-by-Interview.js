const FirstPromisme = new Promise((res,rej)=>{
    setTimeout(res,500,'one')
})

const SecondPromisme = new Promise((res,rej)=>{
    setTimeout(res,100,'two')
})

Promise.race([FirstPromisme,SecondPromisme]).then((res)=>console.log(res))



/*

Promise Race always return the first excuted promise.
ans : two

*/