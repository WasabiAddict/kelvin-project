//temp of K is ___
const kelvin =293;
console.log(kelvin);

//find the value of celsius
const celsius = kelvin - 273;
console.log(celsius);

//find value of fahrenheit and round it
const fahrenheit = (Math.round(celsius * (9/5) + 32));

const temperature = Math.floor(fahrenheit);

console.log(`The Temperature is ${temperature} deegrees Fahrenheit`)