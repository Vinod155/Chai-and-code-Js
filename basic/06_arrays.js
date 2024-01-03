const myArr=[0,1,2,3,4,5]

const arr1=["shaks","hats"]

const arr2=new Array(1,2,3,4,5)

console.log(myArr[1]);

// Array Methods 

// arr2.push(10)
// arr2.push(12)
// arr2.pop() // delt last element

// arr2.unshift(12)
// arr2.shift()

// console.log(arr2.includes(4)); //true
// console.log(arr2.indexOf(20)); //-1 as there is no element 20 in an array

const newarr=arr2.join()

// console.log(arr2);
// console.log(typeof newarr); //string

// slice , splice 

const arr4=arr2.slice(1,3)



const arr5=arr2.splice(1,3) // similar to slice but manuplate original array also 
// console.log(arr4);
// console.log(arr5);
// console.log("original array  ",arr2);

const marvel_heros=["ironman" ,"flash" ,"hulk"]

const dc_heros=["superman","batman","catman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros); //[ 'ironman', 'flash', 'hulk', [ 'superman', 'batman', 'catman' ] ]

const new_heros=[...marvel_heros, ...dc_heros] //spread operator will spread the array element as individual element

console.log(new_heros); //[ 'ironman', 'flash', 'hulk', 'superman', 'batman', 'catman' ]

const arr_1=[1,2,3,4,[5,6,7],8,[9,8,8,[8,9,6]],9]

const another_arr=arr_1.flat(Infinity) //flat will make array simple 1D and it takes input as  depth to which we want to flat our array

// console.log(another_arr);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh")); //[ 'h', 'i', 't', 'e', 's', 'h' ] converting to array 

console.log(Array.from({name:"vinnie"}));// it returns empty array

console.log(Array.of(1,2,3,4)); //of Returns a new array from a set of elements. [ 1, 2, 3, 4 ]