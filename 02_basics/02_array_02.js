const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","batman","flash"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
let comb = marvel_heros.concat(dc_heros)
console.log(comb);
let spread = [...marvel_heros,...dc_heros]
console.log(spread);
const arrInArr = [1,2,3,[4,5,6],7,[8,9]]


const realArr = arrInArr.flat(Infinity)
console.log(realArr); 
console.log(Array.from("fraz"));
console.log(Array.from({name:"fraz"}));

let score1= 100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));