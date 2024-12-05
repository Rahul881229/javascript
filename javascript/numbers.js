const score = 200.88;
console.log(score);
const myscore = new Number(100);
console.log(myscore);
console.log(typeof myscore);
console.log(typeof myscore.toString());
console.log(myscore.toString().length);
console.log(score.toFixed(5));
const number = 1000000;
console.log(number.toLocaleString("en-IN"));
// console.log(max.Number);
//maths_library
console.log(Math);
console.log(Math.abs(-2));
console.log(Math.round(45.2355));
console.log(Math.floor(234.223));
console.log(Math.random());
// console.log(Math.floor(Math.random() * 10 + 1));

console.log(`value ${Math.round(Math.random() * 10 + 1)}`);
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // tp get a range of random values
