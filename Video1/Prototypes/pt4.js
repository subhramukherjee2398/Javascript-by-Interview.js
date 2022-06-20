class Dog{
    constructor(name){
        this.name = name;
    }
}

Dog.prototype.bark = function(){
    console.log(`Woo I am ${this.name}`)
}

const pet = new Dog('Mara');

pet.bark();
delete Dog.prototype.bark;
pet.bark();

/*using the delete we are deleting the link between the bark the Dog   */