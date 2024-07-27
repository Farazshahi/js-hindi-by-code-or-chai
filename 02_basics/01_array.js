const myArr = [0,1,2,3,4,5]
const heroes = ["superman","spiderman","thor"]

const myArr2 = new Array (1,2,3,4)
console.log(myArr);
console.log(myArr2);
myArr.push(6)
console.log(myArr);
myArr.pop(6)
console.log(myArr);
myArr.unshift(6)
console.log(myArr);
myArr.shift(6)
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
const newArr =  myArr.join
console.log(newArr);
console.log(typeof newArr);
console.log("A",myArr.slice(1,3))
const myn1 =  myArr.splice(1,3)
console.log(myn1)