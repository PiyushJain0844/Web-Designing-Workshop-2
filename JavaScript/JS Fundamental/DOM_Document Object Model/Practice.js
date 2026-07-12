// Question 1
// Create a H2 heading element with text - "Hello Everyone". Append "Let's study about Javascript" to this text using JS.
let h2 = document.querySelector("h2");
console.log(h2.innerText);
h2.innerText = h2.innerText + " Let's study about Javascript.";


// Question 2
// Create 3 divs with common class name - "box". Access them & add some unique value to them.
let divs = document.querySelectorAll(".box");
let index = 1;
for (div of divs) {
    console.log(div);
    console.log(div.innerText);
    div.innerText = `new unique value ${index}`;
    index++;
} 


// Question 3
// Create a new button element. Give it a text "click me", background color of red & text color of white. 
// Insert the button as the first element inside the body tag.
let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);


// Question 4
// Create a <p> tag in html, give it a class & some styling. 
// Now create a new class in CSS and try to append this class to the <p> element.
// Did you notice, how you overwrite the class name when you add a new one?
// Solve this problem using classList.

let para = document.querySelector("p");
para.getAttribute("class");
// para.setAttribute("class", "newClass");  -- overwrite

para.classList.add("newClass");
console.log(para.classList); 