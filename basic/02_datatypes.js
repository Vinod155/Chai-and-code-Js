"use strict"

let name="vinnie"
let age=23
let loggin=true

// Number =>2^53
// string ->'' or ""
//boolean => true/false
//null => standalone value ,its type is an object
//undefined => when variable is defined but value not given
//symbol => unique

//object 

let score="23ab"

console.log(typeof(score))

score=Number(score)
// console.log(typeof(score))
// console.log(score)

//  ***************************************Operations*************************************

console.log(2**3); // 2^3 

// console.log("1" +1);
// console.log(1 +"1");
// console.log("1"+ 2 + 2);
// console.log(1 + 2 +"1");

// console.log(+true)
// console.log(+"")

// ******************* Comparison of Data ************************

// console.log("2" >1); // true // "2" is converting to integer
// console.log("02" >1); // true

// console.log(null >0)  // flase
// console.log(null ==0) // false
// console.log(null >=0)  // true

// console.log("2" ===2); // false as '===' check the data type also

// const id= Symbol('123')
// const anotherId= Symbol('123')
// console.log(id ==anotherId);

const arr=["shaks","doga","naagraj"]

let ob1={
    name:"vinnie",
    age:23
}

let myFunction=function(){
    console.log("hello world");
}

let myYoutubename="hiteshchaudhary"
let anotherName=myYoutubename
anotherName="chaiandcode"

// console.log(anotherName);
// console.log(myYoutubename);

let userOne={
    emai:"thakur@gmail.com",
    upi:"user@ybl"
}

let userTwo=userOne

userTwo.email="vinnie@gmail.com"

console.log(userOne.email);  //vinnie@gmail.com
console.log(userTwo.email); //vinnie@gmail.com

