/*fruits=['Pinapple','Watermelon','orange']
for(i=0;i< fruits.length;i++){
    console.log(fruits[i])
}*/

const objEx={}

const student={
    Name:"Dan Richard",
    Age:25,
    Grade:'A',
    Contactno:[3746247487,723486276],
    Fullname:function (){
        return this.Name+' ' +this.Fullname
    },
    isEmployee:true,
    Address:{
        Roadno:2,
        Nearby:'Zpschool',
        Area:'Masuchiwadi',
        Pincode:415413
    }
}

console.log(student.Address.Pincode)
pincode=student.Address.Pincode          //creating new varible for destucring
const {pin}=student.Address.Pincode   //destructuring


 console.log(student.Age)   //access the value

 //update 
student.Age=55
student.Age=55
console.log(student)

//creating array to access
student.Contactno.map((v,i)=>{
console.log(v)
})

//function call
fn=student.Fullname
console.log(fn)



/*userArr=[7475748399,'john','doe',55,'pune','mh']
console.log(typeof(objEx))*/