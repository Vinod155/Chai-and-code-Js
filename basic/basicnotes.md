# let ,const ,var
-->in const we can not modify the value once assigned


# console.table([accountMail,accountPassword,accountCity])
   -->it will print all the variables in tabular form

# we will use let nowdays as var is not usable because of its scope confusion

->prefer not to use var because of issue in block and functional scope

# "use strict" / treat all js code as newer version

// Number =>2^53
// string ->'' or ""
//boolean => true/false
//null => standalone value ,its type is an object
//undefined => when variable is defined but value not given
//symbol => unique

//object 

# null is object and undefined is a type
   typeof(null) -->object
   typeof(undefined) -->undefined

# Conversion 
 
 n="23ab"
 n=Number(n)
 typeof(n)  --> number
 console.log(n) --> NaN (not a number)

 var1=""
 var1=Boolean(var1) // false

 var1="aba"
 var1=Boolean(var1) // true

console.log(2**3); // 2^3 

console.log("1" +1); //11
console.log(1 +"1"); //11
console.log("1"+ 2 + 2); //122
console.log(1 + 2 +"1"); //31

console.log(+true) // 1
console.log(+"")  // 0

# ******************* Comparison of Data ************************

  console.log("2" >1); // true // "2" is converting to integer
  console.log("02" >1); // true


   console.log(null >0)  // flase
   console.log(null ==0) // false
    console.log(null >=0)  // true
   
   this result is coming because the comparison operator and equality operator (==) work differently
   comparison operator convert null to a number ,treating it as zero(0) that is why null(0) >0 is false 
   and null(0) >=0 is true

   console.log("2" ===2); // false as '===' check the data type also

# primitive datatype
   
   7 types : String , Number ,Boolean , null , undefined , Symbol , BigInt

# Refrence or Non-Primitive
    
    Array , Objects , Functions 


// const id= Symbol('123')
// const anotherId= Symbol('123')
// console.log(id ==anotherId); //false

# ******************Stack And Heap Memory ***************

  Stack(Primitive) and Heap (Non-Primitive)

  let userOne={
    emai:"thakur@gmail.com",
    upi:"user@ybl"
}

let userTwo=userOne -->it give refrence not copy of object

userTwo.email="vinnie@gmail.com"

console.log(userOne.email);  //vinnie@gmail.com
console.log(userTwo.email); //vinnie@gmail.com

# ********************** String *****************************

console.log(`my name is ${name} and my repo count is ${repoCount} `); 

`  `  --> string interpolation

 const str=new String('vinnie')

console.log(str[3]);

// console.log(str.length);   //6
// console.log(str.toUpperCase())  //VINNIE
// console.log(str.charAt(3));    //n
// console.log(str.indexOf('i'));  //1

// const newStr=str.substring(0,4)  //vinn

// console.log(newStr);

// const str1= str.slice(-6,4)

// console.log(str1);  //vinn

# ***************************Numbers And Math ***********************

const balance =new Number(100)
console.log(balance);

console.log(balance.toFixed(2)); // fixing percision value to 2(.00)

const bal=123.8699
console.log(bal.toPrecision(3)); //percision for no at 3

const hundreds=1000000

console.log(hundreds.toLocaleString('en-IN')); //Converts a number to a string by using the current or specified locale.

                                         // @param locales — A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.

                                         // @param options — An object that contains one or more properties that specify comparison options.

# **********************Math***************************

console.log(Math.abs(-4)); // abstract value of negative 4(-4) that is 4

console.log(Math.round(4.6)); // rounding off the decimals

console.log(Math.ceil(4.2)); //ceil values -->5

console.log(Math.floor(4.9)); //floor values  -->4

console.log(Math.min(4,6,7,3)); //minimum value
console.log(Math.max(4,6,7,3)); //maximum value

console.log(Math.random()); // random values etween 0 and 1

console.log((Math.random()*10) +1);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1) +min));

# *******************Date And Time **********************

// Dates

let myDate=new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

let createDate=new Date(2023,0,23) // month start from 0 in js

//console.log(createDate.toDateString());

let date1=new Date("2023-02-23")
console.log(date1.toDateString());

let date2=new Date("02-14-2023")
console.log(date2.toDateString());

// ******************Date****************

let time1=Date.now()
// console.log(time1);
// console.log(date1.getTime());

//console.log(Math.floor(time1/1000)); //time in seconds 

let d1=new Date()

console.log(d1.getMonth() +1);
console.log(d1.getDay());

d1.toLocaleDateString('default',{
    weekday:'long',
    
})