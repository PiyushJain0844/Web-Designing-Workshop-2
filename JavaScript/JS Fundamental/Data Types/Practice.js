// Question 1
const product = {
    title : "Ball Pen",
    rating : 4,
    offer : 5,
    price : 270,
} 

console.log(product);    // { title: 'Ball Pen', rating: 4, offer: 5, price: 270 }
console.log(typeof product);    // object



// Question 2
const profile = {
    username : "@piyushjain",
    isFollow : true,
    followers : 500,
    following : 7,
} 

console.log(profile);     // { username: '@piyushjain', isFollow: true, followers: 500, following: 7}
console.log(typeof profile);   // object
console.log(typeof profile["followers"]);   // number