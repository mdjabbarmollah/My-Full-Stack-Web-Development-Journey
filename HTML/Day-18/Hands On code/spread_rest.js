// let name = [10, 20, 30, 40]
// console.log(name);
// console.log(...name)//spread kora hoyese ekhane ekhon kono array te out put asbe na
// let object = {
//   name :"fahad",
//   age: 24,
//   address: "faridpur",
  
// }//tobe ei object variable ta k jodi amra spread kori tahole abar hobe na..error asbe but refference hisabe use kora jabe kono kisu caile update ba push kora jabe

// object.favorite = "money";
// let obeject2 = {...object, gpa : "5.3"};//partial add
// console.log(obeject2)
// // console.log(...object);//error

// let maxnumber = [12, 14, 25, 543, 6546, 34, 43, 32434, 234]

// let findmaxnumber = Math.max(...maxnumber);
// console.log(findmaxnumber)

// //ekhane jodi spread na kora hoy tahole kintu output a nan asbe jodi spread kora hoy tahole max number ta pawa jabe
// abar Math.min diye jodi spread kora hoy tahole sobcaite soto number ta pawa jabe/

// let number = [10, 23, 42, 44, 55, 66, 77, 99, 100]
// // let number2 = number // without spread
// // let number2 =[...number] //with spread
// let number2 =[...number,5000,2134,213,232]

// //with spread // ekhan e abar partial vabe onno number add korajabe

// number.push(2444)

// // arry/object type howa te ekhane referential hoyese tai kono kisu jodi pore oo update kora hoy taholew seta number2 ba pore variable dhuke jabe

// ekhane jodi amra ekdom independent ly kono kisu update korte cai tahole tahole spread korte hobe independent ly bolte hoche j sudu mull/core object er majhe kono value ba kisu update hobe na output sudu core tai dekha jabe,,, tahole spread korte hobe
// console.log(number2);

// rest operator
// {eta muloto function er parameter a use kora hoy}
function sum(a, b, c, ... restNumbers) {
  // return a + b + c;
  let sum = 0;
  for (let number of restNumbers) {
    sum += number
  }
  // for (let i = 0; i < restNumbers.length; i++){
  //   let sum = a + b + c;
  //   sum = sum + restNumbers[i];
  // }
  return a + b + c + sum
}
console.log(sum(10, 20, 30, 40, 34, 654, 12, 543))

// rest operator er kaj koche koto gulo argument asbe seta jana jabe na age theke ei rokom jaga tei rest operator use kora hoy.. 
