// forEach loop -- arr.forEach(call back function)
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
    console.log(val);
});
// 1
// 2
// 3
// 4
// 5 

arr.forEach((val) => {
    console.log(val);
});
// 1
// 2
// 3
// 4
// 5 

let Array = ["pune", "delhi", "mumbai"];
Array.forEach((val, idx) => {
    console.log(val.toUpperCase(), idx);
});
// PUNE 0
// DELHI 1
// MUMBAI 2



// Map  -- arr.map(callbackFnx(value, index, array))
let nums = [67, 52, 39];
let newArr = nums.map((val) => {
    return val;
});
console.log(newArr);       // [67, 52, 39]


// Filter
let Arr = [1, 2, 3, 4, 5, 6];
let evenArr = Arr.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);      // [2, 4, 6] 


// Reduce
// Question - Sum
let array = [1, 2, 3, 4];
const output = array.reduce((prev, currentVal) => {
    return prev + currentVal;
});
console.log(output);       // 10 

// Question - Largest number
let num = [1, 2, 3, 4];
const Output = num.reduce((prev, currentVal) => {
    return prev > currentVal ? prev : currentVal;
});
console.log(Output);       // 4

// return prev < currentVal ? prev : currentVal;    -- for smallest number