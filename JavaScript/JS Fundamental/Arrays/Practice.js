// Question 1
// For a given array with marks of students -> [85, 97, 44, 37, 76, 60]. Find the average marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for(let val of marks) {
    sum += val;
}
let average = sum / marks.length;
console.log(average);                                         // 66.5
console.log(`Average marks of the class = ${average}`);       // Average marks of the class = 66.5 



// Question 2
/* For a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them. 
Change the array to store final price after applying offer. */

// let items = [250, 645, 300, 900, 50];
// let idx = 0;
// for(let val of items) {
//     let offer = val / 10;
//     items[idx] = items[idx] - offer;
//     console.log(`Value after offer = ${items[idx]}`);
//     idx++;
// }

// Value after offer = 225
// Value after offer = 580.5
// Value after offer = 270
// Value after offer = 810
// Value after offer = 45


let items = [250, 645, 300, 900, 50];
for(let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
}
console.log(items);

// [ 225, 580.5, 270, 810, 45 ]



// Question 3
/* Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
(a) Remove the first company from the array
(b) Remove Uber & add Ola in its place
(c) Add Amazon at the end */

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

companies.shift();
console.log(companies);          // (a) ['Microsoft', 'Uber', 'Google', 'IBM', 'Netflix']

companies.splice(1,1, "Ola");
console.log(companies);          // (b) ['Microsoft', 'Ola', 'Google', 'IBM', 'Netflix']

companies.push("Amazon");
console.log(companies);          // (c) ['Microsoft', 'Ola', 'Google', 'IBM', 'Netflix', 'Amazon'] 