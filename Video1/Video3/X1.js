let person = { name : "Kiran"}

const members  = [person]

person = null;

console.log(members);

/*

1st : person varible assign a object
2nd : In js every object  interact with reference
3rd : person = object means, person pointing to the reference of the object 
4th : members  = person , on that time member copy the referece of that object
5th : person = null means the connection with the object has removed
6th : so that after console we are still able to get {name : "Kiran"} obj.



*/