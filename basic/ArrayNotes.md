# Array
The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

# Description
In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
# JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
Array indices
Array objects cannot use arbitrary strings as element indexes (as in an associative array) but must use nonnegative integers (or their respective string form). Setting or accessing via non-integers will not set or retrieve an element from the array list itself, but will set or access a variable associated with that array's object property collection. The array's object properties and list of array elements are separate, and the array's traversal and mutation operations cannot be applied to these named properties.


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