const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];
// find the first index of "a", "b", and "c"

console.log("this is the first index of a", arr.indexOf("a"));
console.log("this is the first index of b", arr.indexOf("b"));
console.log("this is the first index of c", arr.indexOf("c"));

// find the last index of "a", "b", and "c"
console.log("This is the last index of a ", arr.lastIndexOf("a"));
console.log("This is the last index of b ", arr.lastIndexOf("b"));
console.log("This is the last index of c ", arr.lastIndexOf("c"));

// if the first index and last index of "a" is not the same, remove the last instance

function removeDuplicate(array, duplicateValue) {
  let firstIndex = array.indexOf(duplicateValue);
  let lastIndex = array.lastIndexOf(duplicateValue);
  while (firstIndex !== lastIndex) {
    array.splice(lastIndex, 1);
    lastIndex = array.lastIndex(duplicateValue);
  }
  return array;
}
console.log(arr);
removeDuplicate(arr, "a");
removeDuplicate(arr, "b");
console.log(arr, "b");

// repeat until there is just one "a"
