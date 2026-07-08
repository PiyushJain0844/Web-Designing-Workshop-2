// str.toUpperCase() 
let str = "Hello Everyone";
let newStr = str.toUpperCase();
console.log(str);           // Hello Everyone
console.log(newStr);        // HELLO EVERYONE


// str.toLowerCase() 
let str = "HELLO EVERYONE";
let newStr = str.toLowerCase();
console.log(str);           // HELLO EVERYONE
console.log(newStr);        // hello everyone


// str.trim()
let str = "          Hello Everyone   Welcome      ";
console.log(str.trim());           // Hello Everyone   Welcome


// str.slice(start, end?)   --- it does not give the value of last index
let str = "01234567";
console.log(str.slice(1,6));    // 12345


// str1.concat(str2)

let str1 = "Hello";
let str2 = "Everyone";

let result = str1.concat(str2);
console.log(result);             // HelloEveryone


// str.replace(searchVal, newVal)
let str = "hello";
console.log(str.replace("h", "y"));     // yello
console.log(str.replace("lo", "p"));    // help


// str.charAt(idx)
let str = "Hello";
console.log(str.charAt(1));       // e 