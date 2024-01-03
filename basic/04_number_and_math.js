const score=400
console.log(score);

// const balance =new Number(100)
// console.log(balance);

// console.log(balance.toFixed(2)); // fixing percision value to 2(.00)

// const bal=123.8699
// console.log(bal.toPrecision(3)); //percision for no at 3

// const hundreds=1000000

// console.log(hundreds.toLocaleString('en-IN')); //Converts a number to a string by using the current or specified locale.

//                                          // @param locales — A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.

//                                          // @param options — An object that contains one or more properties that specify comparison options.

//   **********************Math***************************

//console.log(Math.abs(-4)); // abstract value of negative 4(-4) that is 4

//console.log(Math.round(4.6)); // rounding off the decimals

//console.log(Math.ceil(4.2)); //ceil values -->5

//console.log(Math.floor(4.9)); //floor values  -->4

console.log(Math.min(4,6,7,3)); //minimum value
console.log(Math.max(4,6,7,3)); //maximum value

console.log(Math.random()); // random values etween 0 and 1

console.log((Math.random()*10) +1);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1) +min));