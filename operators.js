//Arithmetic operators

let a=5,b=6
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)

//ASSIGNMENT OPERATORS
let x=9,y=7
console.log(x+=1)
console.log(y-=2)
console.log(x*=5)
console.log(y/=7)

//COMPARISION OPERATORS
let c=10,d="10"
console.log(c==d)
console.log(c!=d)
console.log(c===d)
console.log(c!==d)
console.log(c>=d)
console.log(c<=d)

//LOGICAL OPERATORS
let age=20
console.log(age>=20 && age>=40)
console.log(age<=20 || age>20)
console.log(!(age<18))



//STRING OPERATORS
let firstName="Sharath"
let lastName="Kumar"
let fullName=firstName+" "+lastName
console.log(fullName)
let correctName=`Hello ${firstName} ${lastName}, Welcome to Devastra`
console.log(correctName)


//TERNARY OPERATORS
let myAge=19
if(myAge>=18)
{
    console.log("You are eligible to vote")
}
else
{
    console.log("You are not eligible to  vote")
}

let result=myAge>=18 ? "Eligible to vote":"Not Eligible to vote"
console.log(result)


//INCREMENT AND DECREMENT OPERATORS
let count=6
console.log(count++)
 console.log(count)
 console.log(++count)
 

 //TYPEOF OPERATORS
 z=9
 names="saiprasad"
 console.log(typeof z)
 console.log(typeof names)
 console.log(typeof 18)