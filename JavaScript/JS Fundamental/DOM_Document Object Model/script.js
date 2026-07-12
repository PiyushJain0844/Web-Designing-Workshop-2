// DOM Manipulation

// Selecting with id -- document.getElementById("myId") 
let button = document.getElementById("myId");
console.dir(button);
console.log(button);

// Selecting with class -- document.getElementsByClassName("myClass")
let headings = document.getElementsByClassName("myClass");
console.dir(headings);
console.log(headings);

// Selecting with tag -- document.getElementsByTagName("p")
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);



// Query Selector -- 
// document.querySelector("myId / myClass / tag")  -- returns first element
// document.querySelectorAll("myId / myClass / tag")  -- returns a NodeList

let element = document.querySelector("p");  // 1st element
console.dir(element);

let elements = document.querySelectorAll("p");  // all elements
console.dir(elements);



// Properties

// tagName -- returns tag for element nodes
console.log(button.tagName);    // BUTTON
console.log(element.tagName);   // P

// innerText -- returns the text content of the element and all its children
let div = document.querySelector("div");
console.dir(div);
console.log(div.innerText);

// innerHTML -- returns the plain text or HTML contents in the element
console.log(div.innerHTML);

// textContent -- returns textual content even for hidden elements
let heading = document.querySelector("h1");
console.dir(heading);

heading.innerText = "new heading";
heading.innerHTML = "<i>new heading</i>";
heading.textContent; 