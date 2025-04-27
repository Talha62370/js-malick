// primitive

// 7 types : string, Number, Boolean, Null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTempp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1234567890123455n //bigInt

// Non primative

// Array, Objects, Functions

const heros = ["saktiman", "marvels", "doga"]

let myObj = {
    name: "malick",
    age: 20,
}

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof anotherId);


// +++++++++++++++++++++++++++++++++++++++++++++

// stack (every stack memory use primitive datatypes)
// Heap (every heap memory use non- primitive datatypes)

let myYoutubename = "malikcdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "malick@google.com"

console.log(userOne.email);
console.log(userTwo.email);








