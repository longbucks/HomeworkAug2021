let pizzaPlace = "trishten's pizza";
let numberOfToppings = 1;
// Declaration of the 2 variables

console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);
console.log(
  `Welcome to ${pizzaPlace} we offer ${numberOfToppings} toppings , which are sausage, bacon and hamburger.`
);
// Console the types and variables with the use in the template literal.

if (numberOfToppings < 10) {
  console.log("Quality, not Quantity");
} else {
  console.log("A whole lot of pizza");
}
// loop determination weather or not my pizza place toppings offer less than 10.
while (numberOfToppings <= 10) {
  if (numberOfToppings % 2 == 0) {
    console.log(numberOfToppings);
  }
  numberOfToppings++;
}
// extra credit
