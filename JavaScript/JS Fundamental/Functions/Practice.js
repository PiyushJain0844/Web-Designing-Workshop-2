// Create a function  using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.
function countVowels(str) {
    let count = 0;
    for(const char of str) {
        if(char === "a" || char === "e" ||char === "i" ||char === "o" ||char === "u") {
            count++;
        }      
    }
    return count;
}
console.log(countVowels("hello"));         // 2


// Create an arrow function to perform the same task.
const countVowel = (str) => {
    let count = 0;
    for(const char of str) {
        if(char === "a" || char === "e" ||char === "i" ||char === "o" ||char === "u") {
            count++;
        }      
    }
    return count;
}
console.log(countVowel("hello"));           // 2



// For a given array of numbers, print the square of each value using the forEach loop.
let nums = [2, 3, 4, 5, 6];

nums.forEach((num) => {
    console.log(num * num);    // num ** 2
});
// 4
// 9
// 16
// 25
// 36 

let Nums = [2, 3, 4, 5, 6];
let calcSquare = (num) => {
    console.log(num * num);    // num ** 2
};
Nums.forEach(calcSquare);
// 4
// 9
// 16
// 25
// 36



// We are given array of marks of students. Filter out of the marks of students that scored 90+.

// Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.

let marks = [97, 64, 32, 49, 99, 96, 86];

let toppers = marks.filter((val) => {
    return val > 90;
})
console.log(toppers);       // [97, 99, 96] 


let n = prompt("Enter a number : ");
let arr = [];
for(let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}
console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res + curr;
})
console.log("Sum :", sum); 

// Enter a number : 5  ---- 15
// Enter a number : 10  ---- 55

let factorial = arr.reduce((res, curr) => {
    return res * curr;
})
console.log("Factorial :",factorial); 

// Enter a number : 5  ---- 120
// Enter a number : 10  ---- 3628800