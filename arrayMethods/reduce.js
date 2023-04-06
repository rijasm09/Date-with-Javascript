// const arr = [1, 2, 3, 4, 5]

// const sum = arr.reduce((acc, curr) => {
//     return acc += curr
// }, 0);
// console.log(sum); 

// Eg 2 : 
// To find the max in an array

// const arr = [1, 2, 3, 4, 5]
// let max = arr.reduce((max, curr) => {
//     if (curr > max) {
//         max = curr;
//     }
//     return max;
// }, 0)
// console.log(max);

// Eg 3: 
const users = [
    { firstName: "rijas", lastName: "muhammed", age: 30 },
    { firstName: "nass", lastName: "rij", age: 30 },
    { firstName: "majj", lastName: "paree", age: 60 },
    { firstName: "lovle", lastName: "vk", age: 50 }
]

// COUNT MAX AGE FROM GIVEN LIST
// const maxAge = users.reduce((max,curr)=>{
//     if (max < curr.age) {
//         max = curr.age
//     }
//     return max;
// },0)
// console.log(maxAge);

// to count occuring numbers of each age
// const ageCount = users.reduce((acc, curr) => {
//     if (acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age]
//     } else {
//         acc[curr.age] = 1
//     }
//     return acc;
// }, {});
// console.log(ageCount);






