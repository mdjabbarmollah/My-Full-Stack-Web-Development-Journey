// const calculateShiping = (orderAmmount,shippingFee = 60) => {
//   if (orderAmmount >= 1000) {
//     return "Free Shipping."
//   }
//   else {
//     return `Shipping Fee: ${shippingFee} Taka`
//   }
// }


// calculateShiping ternarry operator
// const calculateShiping = (orderammount, Shippingfee = 60) => {
//   return orderammount >= 1000 ? "Free Shipping" : `Shipping Fee: ${Shippingfee} Taka.`
// }
// console.log(calculateShiping(1200));
// console.log(calculateShiping(500, 100));

// assigns grade based on marks
const gradefiltering = (studentsMarks) => {
  // if (typeof studentsMarks != "number") {
  //   return "Invalid";
  // }
  // if (studentsMarks >= 80) {
  //   return "A+";
  // }
  // else if(studentsMarks >= 60){
  //   return "A";
  // }
  // //ternaarry operator 
return typeof studentsMarks != "number" ? "Invalid" : studentsMarks >= 90 ? "A+" : studentsMarks >= 80 ? "A" : studentsMarks >= 60 ? "A-" : studentsMarks >= 40 ? "B" : studentsMarks >= 33 ? "C" : "fail";

}
console.log(gradefiltering(35))