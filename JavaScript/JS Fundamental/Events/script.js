// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);   // 26
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("You are inside div");
// };


// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (event) => {
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX, event.clientY);
// };

// let div = document.querySelector("div");
// div.onmouseover = (event) => {
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX, event.clientY);
// };


// Event Listeners
// node.addEventListener(event, callback)
btn1.addEventListener("click", (event) => {
    console.log("Button 1 was clicked - handler1");
    console.log(event);
    console.log(event.type);
});

btn1.addEventListener("click", () => {
    console.log("Button 1 was clicked - handler2");
});

const handler3 = () => {
    console.log("Button 1 was clicked - handler3");
};

btn1.addEventListener("click", () => {
    console.log("Button 1 was clicked - handler4");
});

// node.removeEventListener(event, callback)  -- Note : The callback reference should be same to remove
btn1.removeEventListener("click", handler3);