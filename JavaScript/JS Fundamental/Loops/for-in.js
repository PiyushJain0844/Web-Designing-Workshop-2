let student = {
    name: "Rahul Kumar",
    age: 20,
    cgpa: 8.5,
    isPass: true,
};

for(let key in student) {
    console.log("key =", key, " value =", student[key]);
} 

// key = name  value = Rahul Kumar
// key = age  value = 20
// key = cgpa  value = 8.5
// key = isPass  value = true 