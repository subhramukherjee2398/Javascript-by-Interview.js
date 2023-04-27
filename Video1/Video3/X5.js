function getPersonInfo(one,two,three){
    console.log(one,two,three)
}

const person  = "Kiran"
const occ = 'Engineer'

getPersonInfo`${person} is working as ${occ}`;

/* It also defines two variables person and occ with string values.

The last line of the code calls the getPersonInfo function using a template literal that uses the ${} syntax to interpolate the values of person and occ into the string. This syntax is called a tagged template literal, and it allows the function to be called with the interpolated string as its first argument, followed by any additional arguments passed to the function.

In this case, the interpolated string is passed to the getPersonInfo function as its first argument, with no additional arguments provided. The getPersonInfo function will log the values of one, two, and three to the console, which will be the string "Kiran", the string "is working as", and the string "Engineer", respectively. */