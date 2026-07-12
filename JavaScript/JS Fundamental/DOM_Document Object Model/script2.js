// // Attributes
// // getAttribute(attr) -- to get the attribute value
// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// // setAttribute(attr, value) -- to set the attribute value
// para.setAttribute("class", "newclass");



// // style -- node.style
// div.style.backgroundColor = "green";
// div.style.fontSize = "26px";
// div.innerText = "Hello!";



// Insert Elements 
// -- let el = document.createElement("div")
let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
console.log(newBtn);

// node.append(el) -- adds at the end of node (inside)
let div = document.querySelector("div");
div.append(newBtn);

// node.prepend(el) -- adds at the start of node (inside)
div.prepend(newBtn);

// node.before(el) -- adds before the node (outside)
div.before(newBtn);

// node.after(el) -- adds after the node (outside)
div.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML= "<i>Hi, I am new!</i>";
document.querySelector("body").prepend(newHeading);

// Delete Elements 
// node.remove() -- removes the node
let para = document.querySelector("p");
para.remove();