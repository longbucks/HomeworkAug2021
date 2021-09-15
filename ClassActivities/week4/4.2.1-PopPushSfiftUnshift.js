const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let rm1 = nums.pop(-1);
let rm2 = nums.pop(-2);
console.log("The last element: " + rm1, "Second to last element: " + rm2);
// remove each of the first two items with shift(), saving each item to a variable
let shift1 = nums.shift();

const shift2 = nums.shift();
console.log(
  "The value of the first shift method: " + shift1,
  "The value of the second shift method: " + shift2
);

// use push and unshift to add the variables back to the array in numerical order, 0-6
let pUp = nums.push(shift2, shift1);
let uSh = nums.unshift(rm1, rm2);
console.log(nums);
