function greet()
{
    console.log("Welcome to Dev Astra")
}
greet()

function add(a,b)
{
    return a+b
}
let result=add(20,40)
console.log(result)

const pi=22/7
console.log(pi)

const multiply=function(x,y)
{
    return x*y
}
console.log(multiply(6,5))


//Arrow function
const square=(x)=>x*x
console.log(square(5))

const subtract=(x,y)=>{
    return x-y
}
console.log(subtract(20,15))
