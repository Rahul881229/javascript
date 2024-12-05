let myyoutube = "rahulfocus";
let another = myyoutube;
console.log(another);
console.log(myyoutube);
another = "newstorage";
console.log(another);
let user = {
  email: "userid",
  upi: " user@ybl",
};
console.log(user.email);
user.email = "tyuyug";
console.log(user.email);
const name = "Rahul";
const state = "jhrkhand";
console.log(`my name  is ${name}  i am from ${state}`);
const gamename1 = new String("rahul kumar          ");
for (let i = 0; i <= gamename1.length - 1; i++) {
  console.log(gamename1[i] + "  " + i);
  console.log(`charcters  ${gamename1[i]} is presentin ${i} position`);
}
console.log(gamename1[0]);
console.log(gamename1.length);
console.log(gamename1.toUpperCase());
console.log(gamename1.indexOf("k"));
console.log(gamename1.charAt(3));
console.log(gamename1.slice(1, 4));
console.log(gamename1.substring(1, 7));
console.log(gamename1.substring(1, 7));
console.log(gamename1.trim()); //removes starting and end spaces not removes in hbetween spaces
// console.log(gamename1.replace(l, y));
const url = "httop//rahul@.com";
console.log(url.replace("ttop", "ttp"));
console.log(url.includes("rahu"));
console.log(url.split("t"));
