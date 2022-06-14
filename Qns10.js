let a = true;

setTimeout(()=>{
    a  =  false;
},2000)

setInterval(()=>{
    if(a){
        console.log("Hello")
    }
},200)

/* what's wrong in this code */
/* use clear intervsl to stop the code */

