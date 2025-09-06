
let marks=85
if(marks>=90)
 {
    console.log("A+ grade")
 }

else if(marks>=80){
    console.log("A grade")
 }
else
{
    console.log("B grade")
}

let choice=7
switch(choice)
{
   case 1:
    console.log("Monday")
    break
     case 2:
    console.log("Tuesday")
    break 
    case 3:
    console.log("Wednesday")
    break
     case 4:
    console.log("Thursday")
    break 
    case 5:
    console.log("Friday")
    break 
    case 6:
    console.log("Saturday")
    break
     case 7:
    console.log("Sunday")
    break
}


let num=100,i,count=0
for(i=1;i<num;i++)
{
    console.log(i)
}


let colours=["Red","Blue","Green","Yellow"]
for(let i=0;i<colours.length;i++)
{
    console.log(colours[i])
}

for(let colour of colours)
{
    console.log(colour)
}
 

let person=
{
    name:"Nani",
    age:19,
    college:"JNTUGV"
}

for(key in person)
{
    console.log(`${key}:${person[key]}`)
}


for(let i=5;i>=0;i--)
{
 if(i===3)
 {
    continue
 }
 else
{
  break
 }
}









