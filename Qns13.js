"use strict"

let num = 1;

console.log(num)

let id = setInterval(function(){
    num++;
    if(num > 5) {
        clearInterval(id)
    }
    console.log(num)
},0)

console.log(num);

while(num < 5){
    num++;
}


/*

 line 5 : print 1
 
 put setInterval to  taskQueue and wait for clear in call stack

 line 15 : print 1

 while run
 num will be 1 , 2 , 3 , 4 , 5 ..then loop stop and now num  =   5;

 now interval come to call stack and run..
 line 8 : num = 6

 go inside that condition and stop the interval that's mean interval only run once

 line 12 : print 6


*/