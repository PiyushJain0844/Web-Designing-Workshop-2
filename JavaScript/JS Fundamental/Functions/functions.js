function myFunction() {                      // Function Definition
    console.log("Welcome");
    console.log("We are learning Functions in JS");
}

myFunction();            // Function Call
// OUTPUT -
// Welcome
// We are learning Functions in JS 


function MyFunction(msg) {       // parameter -- input
    console.log(msg);
}
MyFunction("I love JS");     // argument

// OUTPUT - I love JS


// 2 numbers sum
function SUM(x, y) {
    console.log(x + y);
}
SUM(34, 78);        // 112


function Sum(x, y) {
    s = x + y;
    return s;
}
let val = Sum(34, 78);
console.log(val);   // 112


// Arrow Functions  -- compact way of writing a function

// Sum
function sum(a, b) {
    return a + b;
}

const arrowSum = (a, b) => {
    return a + b;
}
console.log(arrowSum(3,4));   // 7

// Multiplication
function mul(a, b) {
    return a * b;
}
const arrowMultiplication = (a, b) => {
    return a * b;
}
console.log(arrowMultiplication(3, 4));   // 12


