// VAR LET CONST DEFFERNCE BTWEEN SCOPE
// let something = "test"
// var something = "test2"
// const something = "test3"
// ei sob gulo holo golobal scope ei gulo je kono jaiga theke access kora jai

// var function scope maintain kore
// let & const block scope maintain kore
// if (true) {
//   let something1 = "test"
// var something2 = "test2"/// secoend block dile block create hoy
// const something3 = "test3"
// }
// ekhane  mull bisoy holo jokhon ei block er majhe variable declare kora hole block scope er vetorei thake sudu var block scope er baire cole jai without var you can test it .
// console.log(something2,something3)
// console.log(something2)

// function test() {
//   let something1 = "test"
// var something2 = "test2"
// const something3= "test3"
// }
// test()
// console.log(something2)
// when we are declare any variable in the function none of them access out of the function area

// now you can show why usally we can't use var , you can see  2 variable which is declare by var, if we are console it you can see the last age number [that is the var keyword behavior]  that's why   we are using a lot of var it make's mistake & make confusion;
var age = 35;
var age = 32;
console.log(age)


//amra jodi ekhon code ta run kori tahole ekhane undefiend dibe kintu jodi var er poriborte let / const thakto tahole kintu code access nito na soja suji refarece error dito
// eta k bola hoy hosting
console.log(id)
var id = 15;
var id = 15;
