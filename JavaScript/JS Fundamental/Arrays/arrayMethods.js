// push()  -- add to end
let foodItems = ["potato", "litchi", "tomato"];
foodItems.push("chips");
console.log(foodItems);    // [ 'potato', 'litchi', 'tomato', 'chips' ]

foodItems.push("burger", "paneer", "apple");
console.log(foodItems);    // ['potato', 'apple', 'litchi', 'tomato', 'chips',  'burger', 'paneer', 'apple']


// pop() -- delete from end & return
foodItems.pop();
console.log(foodItems);    // ['potato', 'litchi', 'tomato', 'chips', 'burger', 'paneer'] 


// toString() -- converts array to string
console.log(foodItems);                 // // ['potato', 'litchi', 'tomato', 'chips', 'burger', 'paneer'] 
console.log(foodItems.toString());      // potato,litchi,tomato,chips,burger,paneer 


// concat() -- joins multiple arrays & returns output
let marvelHeroes = ["thor", "spiderman", "ironman"];
let dcHeroes = ["superman", "batman"];
let indianHeroes = ["shaktimaan", "krish"];

let heroes = marvelHeroes.concat(dcHeroes);
console.log(heroes);       // ['thor', 'spiderman', 'ironman', 'superman', 'batman'] 

let Heroes = marvelHeroes.concat(dcHeroes, indianHeroes);
console.log(Heroes);          // ['thor', 'spiderman', 'ironman', 'superman', 'batman', 'shaktimaan', 'krish']


// unshift() -- add to start
let MarvelHeroes = ["thor", "spiderman", "ironman"];
MarvelHeroes.unshift("antman");
console.log(MarvelHeroes);           // ['antman', 'thor', 'spiderman', 'ironman']


// shift() -- delete from start & return
let DcHeroes = ["superman", "batman"];
DcHeroes.shift();
console.log(DcHeroes);            // ['batman']


// slice() -- returns a piece of the array  -- slice(startIdx, endIdex)
let Marvel_Heroes = ["thor", "spiderman", "ironman", "antman", "Dr. Strange"];
console.log(Marvel_Heroes.slice(1,3));       // ['spiderman', 'ironman']
console.log(Marvel_Heroes.slice(2));         // ['ironman', 'antman', 'Dr. Strange']



// splice() -- change original array (add, remove, replace)    -- splice(startIdx, delCount, newEl1...)
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2, 2, 101, 102);
console.log(arr);                  // [1, 2, 101, 102, 5, 6, 7]

// Add element
arr.splice(2, 0, 101);
console.log(arr);                  // [1, 2, 101, 102,5, 6, 7] 

// Delete element
arr.splice(3,1);
console.log(arr);                  // [1, 2, 101, 102, 5, 6, 7]

// Replace element
arr.splice(3, 1, 101);
console.log(arr);                  // [1, 2, 101, 101, 5, 6, 7]