console.log(this);
() => {
  const user = "rahul";
  console.log(user);
  return user;
};

// "===================================================="

// "================================"
function chai() {
  let username = "rahul";
  console.log(this.username); // inside the function cannot be ised this
}
const res = chai();
console.log(res);
// "=======================================================/"
// 😐😐😐😐😐😐we cannnot use this keyword insde the  arrowfunction  directly
const arrow = () => {
  let username = "rahul";
  console.log(this.username);
};
//   "==============================================================="
const ress33 = () => {
  const user_name = "rahul kumar ";
  return user_name;
};
const result = ress33();
console.log(result);
// "================================================================"
// adding two number using arrow function
const addd = (number1, number2) => {
  console.log(typeof number2);
  if (typeof number1 === "number" && typeof number2 === "number") {
    const sum = number1 + number2;
    return number1 + number2;
  } else if (typeof number1 != "number" && typeof number2 != "number") {
    return "enter the integer value please";
  }
};
const resultadd = addd(3, 8);
console.log(resultadd);
("==============implicit= return=======================");
const implicite = (num1, num2) => num1 + num2;
const som = implicite(3, 5);
console.log(som);
// "========================================================="
//  vvi point🤢🤢🤢🤢🤢🤢🤢🤢🤢🤢🤢🤢🤢🤢🤢
//  🤢🤢🤢
// for single statement it is not compulsory to give  { } this braces and any return statement
// if we wrap the single statement in single { } this braces then  also we have to give return statement
// if we do not use { } this braces for a single statement it not neddded to give return statement
// "========================================================"
// returning object in arrow function
const objretur = (num) => {
  const obj = {
    username: "rahulkumar",
  };
  return obj.username;
};

console.log(objretur(8));
// "======================================================================="
// IIFE expression (Immediately Invoked Function Expression)-> it si used to  execute at the starting only by ignoring every thing in the program
(function imediate() {
  //na,ed iife
  console.log("DBb CONNECTED");
})();
"=========arrow funtion=============="((name) => {
  console.log(`second DBB connected ${name}`);
})("rahul");
