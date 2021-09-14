// select the root node
// console.log(document.getRootNode());
console.log(document.getElementsByTagName("html"));
// select the last child of the root node
console.log(document.querySelector("html").lastElementChild);
console.log(document.querySelector("body").children);
// select all the children of the body element

// select the next sibling of the h2 node
console.log(document.querySelector("h1").nextSibling);
// select the parent element of the h1 node
console.log(document.querySelector("h1").parentElement);
