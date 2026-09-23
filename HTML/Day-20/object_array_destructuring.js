// object 
const responsedestructure = (object) => {
  const { user: { name: userName, age = 20} } = object
  // console.log(userName,age)
  return {
    userName,
    age,
  }
}
console.log(responsedestructure({ user: { name: "Rafi" } }));
// array 
let a = 10;
let b = 5;
[a, b] = [a,b]
console.log(b,a)
let number = [20, 30, 40, 50, 59, 543, 32, 33, 22, 33]
let [first, secoend, ...rest] = number
console.log(first,secoend,rest)