const myPromise = Promise.resolve("Heyaa");

(async()=>{
    try{
        console.log(await myPromise)
    }
    catch {
        throw new Error('ALSSS')
    }finally {
        console.log("Yeahh !!")
    }
})();

/*

it's resolve so try block will run.  it's await ... so it will wait and after end it will print Heyaa

and evertime no matter it's resolve or reject finally always called so it will print the console.


*/