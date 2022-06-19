let random = { person : 'ABC' }
random = 23;

if(!typeof random === 'string'){
    console.log('Its a string...')
}else{
    console.log('its String...')
}

/*
random  = 23
typeof 23 = number
! oprator will try to typecast and so 
Number  is true and  will be typecast to false
ex: !nunber = false
so false === 'string'  "No"



*/