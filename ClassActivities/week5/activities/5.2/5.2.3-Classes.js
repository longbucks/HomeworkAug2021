// refactor your Animal function constructor and methods to use the class keyword
class Animal {
  constructor(name, weight, type) {
    this.name = name;
    this.type = type;
    this.weight = weight;
  }
  greet() {
    return `Hey my name is ${this.name}`;
  }
}

// extend the Animal class with a type of animal
class Dog extends Animal {
  constructor(name, weight, type, interest) {
    super(name, weight, type);
    this.interest = interest;
  }
}
// add some unique methods and properties to the class extension
Dog.prototype.foodChoice = () => {
  return `I like trains`;
};
// create an instance of the class extension and call one of its methods
const sumo = new Dog("sumo", 30, "dog", "Playing games");
console.log(sumo.greet(), "and", sumo.foodChoice());
