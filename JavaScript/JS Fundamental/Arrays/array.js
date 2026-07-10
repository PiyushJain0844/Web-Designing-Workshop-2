// Create Array
let marks = [97, 82,75,64,36];
console.log(marks);          // [ 97, 82, 75, 64, 36 ]
console.log(marks.length);   // 5
console.log(typeof marks);   // object


// Array Indices
console.log(marks[0]);       // 97 

marks[2] = 90;
console.log(marks[2]);       // 90
console.log(marks);          // [ 97, 82, 90, 64, 36 ]


// Looping over an Array

// for loop
for(let idx = 0; idx < marks.length; idx++) {
    console.log(marks[idx]);
}
// 97
// 82
// 90
// 64
// 36


// for-of loop
for(let element of marks) {
    console.log(element);
}
// 97
// 82
// 90
// 64
// 36


let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];
for(city of cities) {
    console.log(city.toUpperCase());
}
// DELHI
// PUNE
// MUMBAI
// HYDERABAD
// GURGAON
