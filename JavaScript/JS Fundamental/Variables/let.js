// let cannot be re-declared but can be updated

let marks = 90;
console.log(marks);
// let marks = 95;            // Error as re-declaration not allowed
// console.log(marks);

if (true) {
    var marks1 = 85;
}
console.log(marks1);   //85



{
    let a = 5;
    console.log(a);
} 

{
    let a = 10;
    console.log(a);
} 