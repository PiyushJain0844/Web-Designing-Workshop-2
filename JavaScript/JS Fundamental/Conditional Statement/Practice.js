let score = 85;
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


// Output -- Grade : B