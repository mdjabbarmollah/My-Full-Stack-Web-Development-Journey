// ei line dile r niche kono number ba kisu likhte hobe na
// const numbers = [46, 44];
// function iseven(number1) {
//   if (number1 % 2 === 0) {
//     return "eta thik hoyse", true;
  
//   }
//   else {
//     return "eta thik hoy ni", false;
//   }
// }
// number = (44);
// const resut = iseven(number);
// console.log(resut);

// function isodd(number2) {
//   if (number2 % 2 === 1) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// number = (48);
// const result = isodd(number);

// console.log(result)

// khetroofl  ber korar function
// function calculation(width, height){
//   const area = width * height;
//   if (area >= 25) {
//     console.log(true);
//   }
//   else {
//     console.log(false);
//   }
//   return area;
// }
// width = 4;
// height = 5;
// const resut = calculation(width, height);
// console.log(resut);

// // math maticcal calculation er sutro 
// function triangel(half, width, height) {
//   const area = 1 / 2 * width * height;
//   if (area > 23) {
//     console.log(23);
//   }
//   else {
//     console.log(false);
//   }
//   return area * area;//square
// }
// half = 1 / 2;
// width = 5;
// height = 4;
// const result = triangel(half, width, height);
// console.log("trinagle khetrofol", result)

const student = {
  name : "Ajad",
  id : 15,
  marks : 35
}
function examresult(student) {
  let result = student.marks;
  console.log(result);
  if (result > 80) {
    console.log("student name Ajad : A+")
  }
  else if (result > 70) {
    console.log("student name Ajad : A")
  }
  else if (result > 50) {
    console.log("student name Ajad : A-")
  }
  else if (result > 40) {
    console.log("student name Ajad : b")
  }
    else if (result >30) {
    console.log("student name Ajad : C")
  }
  else if (result < 33) {
    console.log("student name Ajad : F")
  }
  }
// Function with default parameters (subject and totalMarks have default values)

sum 