const objEx={}
const student={
    Name:'Richard',   
    Age:28,
    Grade:'A'
}
student.Age=50
console.log(student)

delete student.Age;
console.log(student)

student.marks="Maths"
console.log(student)

console.log("-----------------------")

const books={
    title:"Wings Of Fire",
    Authors:"A.P.J Abdul Kalam",
    Details:{
                Pages:180,
                Geners:"Autobiography"
    }
}
books.Pages;
console.log(books.Details.Pages)

books.Geners;
console.log(books.Details.Geners)

console.log("-----------------------")
 
const product={
    Name:"Laptop",
    Price:70000,
    Stock:10
}
for (let key in product) {
    console.log(`${key}: ${product[key]}`);
}

console.log("-----------------------")

const person1={
    Name:"John Lee",
    Age:25,
    Contactno:564654533,
    Emailid:"john@gmail.com"
} 
const person2={
    Name:"Richard",
    Age:30,
    Contactno:6334588555,
    Emailid:"richard@gmail.com"
} 
if(JSON.stringify(person1) === JSON.stringify(person2)){
console.log("Persons are same");
}
else{
console.log("Persons are different");
} 

