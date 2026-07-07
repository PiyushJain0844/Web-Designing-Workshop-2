// Practice 

// Question 1
alert("Hello");
let num = prompt("Enter a number : ");

if(num % 5 === 0) {
    console.log(num, "is multiple of 5");
} else {
    console.log(num, "is not a multiple of 5");
} 

// Output through index.html
// In alert it will show popup of Hello
// In prompt it will ask to Enter a number and we can check the result through inspect


// Question 2
let score = prompt("Enter your score (0-100):");
let Grade;

if(score >= 90 && score <= 100) {
    Grade = "A";
} 
else if (score >= 70 && score <= 89) {
    Grade = "B";
} 
else if (score >= 60 && score <= 69) {
    Grade = "C";
} 
else if (score >= 50 && score <= 59) {
    Grade = "D";
} 
else {
    Grade = "F";
} 

console.log("Grade :", Grade);

// Output through index.html
// In prompt it will ask to Enter a score and we can check the result through inspect