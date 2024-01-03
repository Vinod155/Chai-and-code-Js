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