// pass by value 
let myname = "Utsho";
let age = 26;
function myfunction(name,myage) {
  name = "habib";
  myage = 45;
  console.log(name, myage);
  // return [name, myage];
}
// console.log(myfunction(myname,age));
myfunction(myname, age);
console.log(myname, age)

// pass by reference 
let student = {
  name: "fahad",
  roll: 20
}
function reference2(data) {
  // data.name = "habib";//eta holo regerence type 
  data = {name : "jisan"}//replace way
  console.log(data);
}
reference2(student)
console.log(student)