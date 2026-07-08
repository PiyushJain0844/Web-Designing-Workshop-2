// Create String
let str = "Hello";
let str2 = 'Everyone';

console.log(str);   // Hello
console.log(str2);    // Everyone

// String Length
console.log(str.length);   // 5

// Accessing Indices
console.log(str[0]);  // H 



// Template Literals
let specialString = `This is a template literal`;

console.log(specialString);    // This is a template literal
console.log(typeof specialString);     // string



let obj = {
    item: "pen",
    price: 10,
};

let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);           // The cost of pen is 10 rupees

console.log("The cost of", obj.item, "is", obj.price, "rupees");       // The cost of pen is 10 rupees