const person = {
    name : "SUbhra",
    hobbies : ['coding'],
}

function addHobby(hobby, hobbies = person.hobbies){
    hobbies.push(hobby);
    return hobbies;
}

addHobby('running',[]);
addHobby('dancing');
addHobby('baking',person.hobbies);

console.log(person.hobbies);

/*
output will be ['coding','dancing','banking'] 
because or first function call we are passing empty array so default parameter is not considered 
for second function call we are not passing any second argument so default parameter will take person object element hobbies array 
so dancing will be pushed in that array , 
and for third function call we are passing hobbies array from person object and hence banking will also be added in same array 
because object is referring to same memory location
*/