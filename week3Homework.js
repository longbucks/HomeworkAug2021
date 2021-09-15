let pizzaToppings = ["sausage", "Onions", "Mushrooms", "Ham"];

const greetCustomer = () => {
  let greeting = "Welcome to Trish's Pizza Place, our current toppings are: ";

  for (let i = 0; i < pizzaToppings.length; i++) {
    if (i == pizzaToppings.length - 1) {
      greeting += `and ${pizzaToppings[i]} `;
    } else {
      greeting += `${pizzaToppings[i]}, `;
    }
  }
  console.log(greeting);
};
greetCustomer();

const getPizzaOrder = (size, crust, ...toppings) => {
  console.log(`One ${size} ${crust} crust pizza with ${toppings} coming up`);
  let pizzaOrder = [size, crust, toppings];
  return pizzaOrder;
};
let pizzaOrder = getPizzaOrder("large", "thin", "mushroom ", "onion");

const preparePizza = pizzaOrder => {
  console.log(`...Cooking Pizza...`);
  let pizzaObj = {
    Size: pizzaOrder[0],
    Crust: pizzaOrder[1],
    Toppings: pizzaOrder[2]
  };
  return pizzaObj;
};
let pizzaOven = preparePizza(pizzaOrder);

const servePizza = pizzaOven => {
  console.log(
    `Order up! Here's your ${pizzaOven.Size} ${pizzaOven.Crust} crust pizza with ${pizzaOven.Toppings}. Enjoy!`
  );
};
servePizza(pizzaOven);
