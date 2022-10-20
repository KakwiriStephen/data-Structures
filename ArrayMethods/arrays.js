//Insertion of elemements into arrays
//.push() method is used to add elements at the end of an array

let Array = [3, 4, 5, 3, 5];

console.log(Array.push(9));
console.log(Array);

//deletion of elements in arrays
//.pop() returns the removed element
let Array1 = [3, 4, 5, 3, 5];

Array1.pop();
// 5 will be returned

//.shift() deletes and returns the first elment in the arayy
let Array2 = [3, 4, 5, 3, 5];

Array2.shift();

// ARRAYS

// Slice method
// does not mutate the original array
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice());
console.log(arr.slice(...arr));
//spread that performs slice without mutating the main array

// Splice method
// works in the same way as slice method but changes the main array and mutates it
// used to remove elements from an array
console.log(arr.splice(2));
console.log(arr);

// reverse method
// it revesrse the array
// it mutates the array and saves the changes permanantly on the array
const arr2 = ["k", "h", "l", "o", "s"];
arr = ["a", "b", "c", "d", "e"];
console.log(arr2);
console.log(arr2.reverse());

// Concat method
// Used to concatinate two arrays
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); //spread that concatinates without mutating the main array

// Join method
console.log(letters.join("*"));

// Other Methods
// Push method
// Pop method
// index of method

// for each loop

// implimenting a loop using for statement
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const movement of movements) {
    if (movement > 0) {
        console.log(`You have deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
}
console.log("====KAKWIRI====");
// implimenting the same loop using for each method
// for each does not support break and continues
movements.forEach(function(movement, i, arr) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You have deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
});

// Map
const currencies = new Map([
    ["USD", "United States dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"],
]);

currencies.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`);
});

// THE FIND METHOD ?
const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firsWithdrawal);

// the find method returns the first element that satisfy the condition
// filter returns all the element tha t satisfy the conditions

// INCLUDES METHOD
// checks if the number specified is in the Array...returns a bolean
console.log(movements);
console.log(movements.includes(-130));
// if -130 is in the movements aaray then  true is returned
//tests for equality

// SOME METHOD
//similar to includes method
// tests for a condition

// EVERY METHOd
// returns a true value when all the elements satisfy the specific condition

// Flat method

// in a nested Array, the flat method returns all the arrays as a single array ***for one level deep(1)
// const arr = [
// [1, 2, 3],
// [4, 5, 6], 78
// ];
// console.log(arr.flat());

// sorting
const owners = ["jonas", "kakwiri", "kabuda"];
console.log(owners.sort);

// does sorting based on strings
// mutates the original array

// for numbers we need to call a callback function with two parameters
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.sort((a, b) => {
    if (a > b) return -1;
    if (b > a) return 1;
});
// console.log(movements);