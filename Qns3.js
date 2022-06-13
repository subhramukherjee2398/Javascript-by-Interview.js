
const myPromise = () => Promise.resolve('I have resolved')

function firstFunc(){
 myPromise().then((res)=>{
     console.log(res);
 })
 console.log('second');
}

async function secondFunc(){
    console.log(await myPromise());
    console.log('second')
}

firstFunc()
secondFunc()

/*

for the first function 
as we are using .then to resolve the promise..it will keep that console.log on the heap stack and wait for call stack be empty.
and it will go to next line and print 'second', after that it will print that console.log(res)

for the second function
as we are  trying to resolve the promise using await , so it will not go to the next line untill and unless the promise resolve,
when the promise resolve it wil print the console.log(res) and then it will print 'second'


*/