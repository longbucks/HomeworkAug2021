// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function functionWithTwoParams(x = 0, y = 1, ...z) {
  console.log(x);
  console.log(y);
  console.log("this is a rest operator ", z);
  return x + y;
}

// invoke the function and pass in two numbers
functionWithTwoParams(4, 3);
// invoke the function and pass in more than two numbers
functionWithTwoParams(5, 8);
// invoke the function and pass in only one number
functionWithTwoParams(2);
// change the function to set default values for the parameters

// again, invoke the function and pass in only one number

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
functionWithTwoParams(5, 8, 9, 3, 2, 1, 3);
