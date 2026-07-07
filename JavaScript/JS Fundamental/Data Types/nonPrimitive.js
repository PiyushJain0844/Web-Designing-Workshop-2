// Non-Primitive Data Types

// Objects
const student = {
    fullName : "Rahul Kumar",
    age : 20,
    cgpa : 8.2,
    isPass : true,
};

console.log(student);      // { fullName: 'Rahul Kumar', age: 20, cgpa: 8.2, isPass: true }
console.log(typeof student);     // object

//Both will give same value -> 20
console.log(student["age"]); 
console.log(student.age); 


student["age"] = student["age"] + 1;
console.log(student["age"]);     // 21 