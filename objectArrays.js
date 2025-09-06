/*
let person=
{
    name:"nani",
    age:20
}

console.log(person.name)
console.log(person["age"])

const {name,age}=person  //destructuring assignment
console.log(name)
console.log(age)


let fruits=["apples","banana","mango"]
console.log(fruits[1])

let numbers=[1,2,3,4,5]

let squares=numbers.map((num)=>num*num)  //Transform each element
console.log(squares)



let even=numbers.filter((num)=>num%2==0) //Filters the values based on the given condition
console.log(even)



let sum=numbers.reduce((present,num)=>present+num,0)  // used to add or subtract the elements in the array
console.log(sum)
*/

let persons=
[
    {
    name:"nani",
    marks:100
    },
    {
        name:"sai",
        marks:99
    },
    {
        name:"akhil",
        marks:101
    }
]

let maxMarks=0
let topper=""
for(let person of persons)
{
    if(person.marks>maxMarks)
{
    maxMarks=person.marks
    topper=person.name
}}
console.log(`Topper is ${topper} and he got ${maxMarks}`)