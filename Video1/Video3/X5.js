function getPersonInfo(one,two,three){
    console.log(one,two,three)
}

const person  = "Kiran"
const occ = 'Engineer'

getPersonInfo`${person} is working as ${occ}`;

/*
output : ['',is working as, ''] "kiran"  "Enginner"
In ES6 along with template literals we also have the feature to call function with template strings . 
If the string is long we can also use rest parameters to take the arguments.

It divides the string where there is a variable so the first argument is displayed as an array and rest are two variables

*/