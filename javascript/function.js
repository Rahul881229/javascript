function showname() {
  console.log("rahul kumar");
  console.log("rakesh kumar");
  console.log("ravi kumar");
  console.log("ramesh kumar");
  console.log("suraj kumar");
}
showname();
function addtwonumber(number1, number2) {
  console.log(typeof number1); //number which is kind of string
  console.log(typeof number2);

  if (typeof number1 === "number" && typeof number2 == "number") {
    console.log(typeof typeof (number1 + number2)); //String
    console.log(number1 + number2);
    return number1 + number2; // returns the output to the calling method
  } else {
    console.log("not appropriate values");
  }
}
const resutl = addtwonumber(2, "e");
console.log(resutl);
// "=========================="
// login-message
function loginUserMessage(user = "rahul") {
  if (typeof user === "string") {
    return `${user} just loged in`;
  } else if (typeof user === "undefined" && "") {
    return "not defined user soo enter the defined user name ";
  }
}
let loginn = loginUserMessage("ravi");
console.log(loginn);
console.log(typeof "");
// "==============="
// passing mulitple values to  a function
function calculatecartvalue(...num) {
  return num;
}
const result = calculatecartvalue(200, 300, 400, "5000");
console.log(result);
//  one more exaomle.
function cartvalue(val1, val2, ...num) {
  return num;
}
const result1 = cartvalue(200, 300, 400, 500, 600);
console.log(result1);
// 😐😐😐😐😐😐😐😐😐😐passing object to a function
const user1 = {
  username: "rahul",
  price: 999,
};

function handelobject(anyobject) {
  (speical = 20), console.log(this.speical);
  console.log(
    `username ${anyobject.username} and price of this is ${anyobject.price}`
  );
}
const ress = handelobject(user1);
console.log(ress);
// another way of passing object
const ress1 = handelobject({
  // passing the direct object inside the argument
  username: "ravi",
  price: 999,
});
// passing array in the function
const mynewrray = [200, 300, 444, 555, 666];
function passingarray(getarray) {
  return `index 0 : ${getarray[0]} index 1: ${getarray[1]} index 2: ${getarray[2]} `;
}
const res3 = passingarray(mynewrray);
console.log(res3);
