// TO ADD NEW ELEMENTS INTO AN ARRAY
const fruits = ["apple", "banana", "orange"];
fruits.splice(2, 0, "grape", "pear"); // Adds "grape" and "pear" at index 2
console.log(fruits);

//REMOVING ELEMENTS FROM AN ARRAY
const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 2); // Removes 2 elements starting at index 2 (i.e., 3 and 4)
console.log(numbers); // Output: [1, 2, 5]

// REPLACE ELEMENTS IN AN ARRAY
const colors = ["red", "green", "blue"];
colors.splice(1, 1, "yellow", "purple"); // Replaces "green" with "yellow" and "purple"
console.log(colors); // Output: ["red", "yellow", "purple", "blue"]

