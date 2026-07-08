// Print Even Number from 1 to 100

// for(let num = 0; num <= 100; num++) {
//     if(num % 2 === 0) {
//         console.log(num);
//     }
// }


// Question 2
/* Create a game where you start with any random game number.
Ask the user to keep guessing the game number until the user enters correct value. */

let gameNum = 50;
let userNum = prompt("Guess the game number :");

while(userNum != gameNum) {
    userNum = prompt("You entered wrong number, Guess again :");
}
console.log("Congratulations, you entered the right number");