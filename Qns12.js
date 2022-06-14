
setTimeout(()=>{
    console.log(1)
},0)

console.log(2)

Promise.resolve().then(()=>{
    console.log(3)
})

setTimeout(() => {
    console.log(4)
}, 0);

console.log(5)

/*
2
5 
3
1
4

so why 3 print fast?

 In call stack there are 2 types of task

 MICRO-TASK:
 Promise Callback
Async functions
process.nextTik()
queueMicroTask

MACRO-TASK:
setInterval()
setTimeout()
setImediate()

so As promise is micro Task..so afetr complete all microTask macro Task start running....


*/