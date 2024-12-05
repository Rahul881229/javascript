const n = 10;
for (let i = 0; i <= n; i++) {
  console.log(i);
}
for (let i = 1; i <= 10; i++) {
  console.log(`table of ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
("=================================================================");
// for of loop
const arr = [1, 2, 3, 4];
for (const num of arr) {
  console.log(num);
}
for (const val of arr) {
  console.log(val);
}
const name = "rahul";
const greeting = "hello mr";
for (const greet of greeting) {
  console.log(` each word is   ${greet} `);
}
