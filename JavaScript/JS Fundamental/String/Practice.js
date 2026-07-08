/* Prompt the user to enter their full name. Generate a username for them based on the input.
Start username with @ followed by their full name and ending with the username length. */

let fullName = prompt("Enter your full name :");
let username = "@" + fullName + fullName.length;
console.log(username);

// Output -- 
// Enter your full name : piyushjain
// @piyushjain10