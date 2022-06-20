/*Explain protoType Chain?     */

/* Answer :   

1. All objects are the instances of an Object.SO it's inherits it's property and methods from it's protoType.
2. Example:
consider we have a shape of circle.
and another shape of rectringle.
so Both shape are going to inherit some of it's property  from it's prototype.That is shape here.
And again thne shape object inherit some of it's property  from it's own prototype.
And again it Can have a general prototype and that prototype will move on to one step above till th e chain reaches the base object.


*/

/* Explain with an example  */


/* creating a constructor and by using this contructor we can create as many person */

function Person(name,age){
    this.name = name;
    this.age = age
}

/* create a method and bind the method with Person so that anytime 
  a new person is created using this person constructor that method will automatically
  given to the object. 
 */

Person.prototype.getData = function(){
    return this.name + " is " + this.age + " old " 
}

let p1 = new Person("subhra",23);

console.log(p1.getData())

