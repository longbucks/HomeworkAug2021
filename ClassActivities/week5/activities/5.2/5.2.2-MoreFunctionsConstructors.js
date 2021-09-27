function Animal(name, type, weight) {
  this.name = name;
  this.type = type;
  this.weight = weight;
  this.greet = () => {
    return `Hey my name is ${this.name} and i am a ${this.type}`;
  };
}
const Cat = new Animal("gibby", "cat", 80);

Animal.prototype.age = () => {
  return `$ is am 30`;
};
console.log(Cat.age());
// create a function constructor that works as a template for an Animal
// include properties for name, type, weight, etc.

// create a new instance on an Animal

// add methods to the Animal prototype

// attach a method directly to the Animal instance that "overwrites" a prototype method

// console.log(Scarlet.foodType());

function Tanimal(name, color, weight, personality) {
  this.name = name;
  this.color = color;
  this.weight = weight;
  this.personality = personality;
  this.bio = `{this.name} is {this.color} and weighs ${this.weight} pounds`;
}

const garfield = new Tanimal("Garfield", "orange", 15, "sassy");
Tanimal.prototype.greet = () => {
  return `Hey there`;
};
// console.log(garfield.greet());

// garfield.greet = () => {
//   return `Go away`;
// };
