const users = [
    { firstName: "rijas", lastName: "muhammed", age: 30 },
    { firstName: "nass", lastName: "rij", age: 30 },
    { firstName: "majj", lastName: "paree", age: 60 },
    { firstName: "lovle", lastName: "vk", age: 50 }
]
// PRINT FIRSTNAME OF PEOPLE WITH AGE < 50
const output = users.filter(curr => curr.age < 50).map(curr=>curr.firstName)
console.log(output);