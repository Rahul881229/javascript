let ar = new Array(5);
ar[0] = 3;
ar[1] = 0;
ar[2] = 3;
ar[3] = 5;
ar[4] = 7;
ar[5] = 3;
ar[6] = 9;
console.log(ar);

ar.push(10); //😐😐😐😐😐😐😐adds at the end of the array
console.log(ar);
ar.push(1);
console.log(ar);
ar.push(20);
console.log(ar);
ar.push(10);
console.log(ar);
ar.pop(); //😐😐😐😐😐😐 used to remove the last element from the array
console.log(ar);
ar.pop();
console.log(ar);
ar.pop();
console.log(ar);
ar.pop();
console.log(ar);
ar.unshift(9); // 😒😒😒😒😒😒used to add the element in the frist position by moving al the elements in the array
console.log(ar);
ar.shift(); // 😁😁😁😁😁it is used to delete the first elemtn of the array
console.log(ar);
ar.shift();
console.log(ar); //😁😁😁😁😁😁😁😁😁😁😁😁helps in  checking the element is present in the array or not
console.log(ar.includes(8));
console.log(ar.includes(2));
console.log(ar.includes(5));
console.log(ar.indexOf(3));
const newarr = ar.join(); //😁😁😁😁 helps in coverting array into string
console.log(ar);
console.log(newarr);
// console.log(ar);
// const mynew = ar.slice(1, 3);
//SLICE::://😁😁 used to extract the elements from the given index to given by excluding the last index
// console.log(mynew);it does not make any changes in  main original array
// console.log(ar);
// const mynew2 = ar.splice(1, 3);
//SPLICE : it will extract the array from the given  index to given arrray it will include the last index also 😐it wil directly  change the main array permanently , it also helps in adding the element and removing t=from it
// console.log(mynew2);
console.log(ar);
const arrr = ar.splice(2, 3, 4, 6, 7);
console.log(` splice ${ar}`);
console.log(ar);
console.log(ar.slice(2, 4));
// "============================================================="
//  working on array like 2D array
const arr = ["iron main", " super man", " thor ", " spider man", "hulk"];
console.log(arr);
const indian_hero = ["shakti man", "sonpari", "popat"];
const pushing = arr.push(indian_hero);
//here we can see that push and concat works in same way
console.log(arr);
arr.concat(indian_hero);
console.log(arr);
console.log([...arr, ...indian_hero]); //joinging two or more than two array susing ... operators
const nested_array = [23, 4, [6, 7, 9, 0, 1], 5, [3, 5, [7, 8], 9], 6, 6, 7, 7];
console.log(nested_array);
const flating = nested_array.flat(Infinity);
console.log(flating);
// isarray checking method
console.log(Array.isArray(arr));
console.log(Array.isArray("rahul"));
// to make array to any Element
console.log(Array.from("Rahul"));
const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1, score2, score3));
