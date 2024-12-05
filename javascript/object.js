// objects were created in 2 ways
// 1) literal way
// 2)by using nw keyword and constructor
const mysym = Symbol("key1");
const obj = {
  // creating objects in jaba script
  name: "rahul",
  email: "rahulfrineds 1507@gmail.com",
  mobnumber: "8838383",
  [mysym]: "mykey1",
  fullname: "rahul kumar ",
};
console.log(obj.name); // 1way:acssesing obj in java script
console.log(obj.fullname);
console.log(obj[mysym]);
console.log(typeof obj[mysym]); //2nd way of acessing obj
console.log(obj["email"]);
const sym1 = Symbol("rahul");
const sym2 = Symbol("rahul");
console.log(sym1 == sym2);
obj.name = "rahul kumar"; //changing the object content
console.log(obj.name); //accessing the  changed object
// Object.freeze(obj); // freezing the object so that no one can modify it
obj.name = "rahul kumar yadav"; /// trying to chage after freezing
console.log(obj.name); // not possible to chage
console.log(obj);

obj.greeting = function () {
  console.log(`hello js user ${this.name}`);
};

console.log(obj.greeting());
// "2=================================================================================="
const tinderUser = {};
tinderUser.id = "234rtfd";
tinderUser.name = "adding to object";
tinderUser.isligoin = "false";
console.log(tinderUser);

//NESTING THE OBJECTS FORMING OBJCTES INDE THE OBJECT
const regularUser = {
  email: "raulkkyy@1223",
  full_name: " rahulkymr yadav",
  details: {
    village: "dhab tham",
    pincode: 825409,
  },
};
console.log(regularUser.details);
console.log(regularUser.details.village);
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "c" };
// const obj3 = { obj1, obj2 };
const obj3 = Object.assign({}, obj1, obj2); // joining two or more than two  objects using Object.assign
console.log(obj3);
const obj4 = { ...obj1, ...obj2 }; // ❤️❤️❤️❤️❤️😂this is the best way to   merge two  object in single objects
console.log(obj4);
console.log(Object.keys(tinderUser)); // will get all inn array  , will give  all the  lements data type
console.log(Object.values(tinderUser)); // will guve the exact elements in the object array
console.log(Object.entries(tinderUser)); // will guve
const obje = {
  name: "rahul",
  emailid: "rahulfrinds1507@gmail.com",
  mob: 88737371229,
};
console.log(obje.emailid); //extracting the elemnt from object
const { emailid: mai } = obje; // thisis another way tp extract element from the object
console.log(mai);
