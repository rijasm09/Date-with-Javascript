// const arr = [1, 2, 3, 4, 5]

// const sum = arr.reduce((acc, curr) => {
//     return acc += curr
// }, 0);
// console.log(sum); 

// Eg 2 : 
// To find the max in an array

const arr = [1, 2, 3, 4, 5]
let max = arr.reduce((max, curr) => {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0)
console.log(max);