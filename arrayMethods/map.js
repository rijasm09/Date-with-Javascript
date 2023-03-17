// Eg 1 : 

// function transformToObjects(numberArray) {
//     return numberArray.map(number => {
//         return {val : number}
//     })
//     console.log(newArr)
//  }

//  const numberArray = [1,2,3]
//  transformToObjects(numberArray);

// Eg 2 : 
// let double = (i) => i*2;
// const arr = [1,2,3,4,5]
// const newarr = arr.map(double)
// console.log(newarr);

// Eg 3 : 
// const arr = [1,2,3,4,5]
// const newarr = arr.map((num)=>num*3)
// console.log(newarr);

// Eg 4 : 
// const arr = [1, 2, 3, 4, 5]
// const Oddarr = arr.filter((num) => num % 2 !== 0)
// console.log(Oddarr);

// Eg 5 : 
// finding sum using map function
const arr = [1, 2, 3, 4, 5]
let total = 0;
arr.map((i) => {
       total += i;
})
console.log(total);

