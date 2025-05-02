const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Hulk", "Dr Strange"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);


// Array Methods

// myArr.push(6)
// myArr.pop()

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// slice = Purpose = To extract a portion of an array,  Return Value = A new array with selected elements
// Use Case = Copying part of an array
// splice = Purpose = To add/remove/replace elements in an array, Return Value = An array of removed elements
// Use Case = Inserting, deleting, or replacing elements

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("c ", myArr);
console.log(myn2);