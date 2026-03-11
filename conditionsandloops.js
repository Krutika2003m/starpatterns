/*  Example 
exp < 1year  sonapapdi
exp > 1year   Barfi
exp < 1lac   Gulabjamun
exp > 1lac   Kajukatali*/

if (exp > 1)
    {
        console.log("sonpapdi")
    }else{
    if(sal < 100000){
        console.log("Gulabjamun")
    }else{
        console.log("Kajukatli")
    }

}else{
    console.log("sonpapdi")
    if(sal < 100000){
        console.log("Gulabjamun")
    }else{
        console.log("Kajukatli")
    }
}
const today=new Date()

console.log(today)

month=today.getMonth()

console.log(month)

/*Swith stmt
2 3 4 5. summer
6 7 8 9. Raniy
10 11 0 1. Winter*/

switch(month){
    case'1':
        console.log("winter")
        break
    case'9':
        console.log("Rainay")
        break
    case'2':
        console.log("summer")
        break

    default:
        console.log("Invalid month")
}

/*
 7 * 1
7 * 2*/

 for(i=1; i<=10; i++)
    console.log(7 * i)

//initilization; condition;increment/ decreament;

console.log("--------------------------------")
for(i=1;i<=10;i++){
    console.log(7 * i)
    if(i==5){
     continue   
    }
    console
}


z=1
while(z<=10){
    console.log(7 * z)
}