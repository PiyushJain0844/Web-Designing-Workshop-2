// Comparison Operator

let a = 5;
let b = 2;

console.log("5 == 2 = ", a == b);    // 5 == 2 =  false
console.log("5 != 2 = ", a != b);    // 5 != 2 =  true
console.log("5 > 2 = ", a > b);    // 5 > 2 =  true
console.log("5 >= 2 = ", a >= b);    // 5 >= 2 =  true
console.log("5 < 2 = ", a < b);    // 5 < 2 =  false
console.log("5 <= 2 = ", a <= b);    // 5 <= 2 =  false

let c = "5";
console.log("5 == 5 = ", a == c);    // 5 == "5" =  true          // it only checks value
console.log("5 === 5 = ", a === c);    // 5 === "5" =  false        // it checks the value and datatype both
console.log("5 !== 5 = ", a !== c);    // 5 !== "5" =  true

let d = 5;
console.log("5 !== 5 = ", a !== d);    // 5 !== 5 =  false