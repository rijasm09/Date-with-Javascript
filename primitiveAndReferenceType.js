// const number = 1;
// const num = number;
// console.log(num);

const person = {
    name : "rijas"
}
const newPers = {
    ...person
};
person.name = "naseeha"
console.log(newPers)