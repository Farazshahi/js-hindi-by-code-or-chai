const number = 400
const newNumber = new Number(100)
console.log(number);
console.log(newNumber);
console.log(newNumber.toString());
console.log(newNumber.toFixed(2));
const otherNumber = 23.889
console.log(newNumber.toPrecision(3));

const hundred = 10000000

console.log(hundred.toLocaleString(`en-IN`));

// +++++++++++   Maths ++++++++++
 console.log(Math);
 console.log(Math.abs(-4));
 console.log(Math.round(-4.55));
 console.log(Math.ceil(-4.55));
 console.log(Math.floor(-4.55));
 console.log(Math.min(-4.55));
 console.log(Math.max(-4.55));
 console.log(Math.random());

 const max = 10
 const min = 20
 
 console.log(Math.floor(Math.random() * (max-min+1))+min)