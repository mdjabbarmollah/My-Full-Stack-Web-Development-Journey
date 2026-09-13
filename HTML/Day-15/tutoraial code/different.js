//different create;
// 
//  function chowdurify(name) {
//   const fullName = name + " chowdury";
//   return fullName;
// }
// const robinchow = chowdurify('robin');
// console.log(robinchow);
// const shamichow = chowdurify(" shammi");
// console.log(shamichow);


// function fullname(firstName, lastName) {
//   const fullName = firstName + " " + lastName;
//   return fullName;
// }
// const mohabbat = fullname("mohobbat", "ali")
// console.log(mohabbat);


// function dobuleOrHalf(price, isdouble) {
//   if (isdouble === true) {
//     const leaders = price * 2;
//     return leaders;
//   }
//   else {
//     const mp = price / 2;
//     return mp;
//   }
// }
// const leader = dobuleOrHalf(100, true)

// console.log('price for leaders 50 or amjonota 200 lets see who are you = ', leader);
// // const mp = dobuleOrHalf(100, false)
// console.log('price for mp', mp);


// ****** arry diye function create


// function firstElement(fahad) {
//   console.log("got the parameter value", fahad)
//   const firstElement = fahad[0];
//   const multiply = firstElement * 2;
//   return multiply;
// }
// const numbers = [4, 6, 2, 6, 2, 7];
// const doubled = firstElement(numbers);
// console.log(doubled);


// object diye function create
const student = {
  name: "Monir abdul",
  id: 15,
  marks: 75
}
function isstudentplus(student) {
  console.log('got the student', student)
  const id = student.id;
  console.log(id);
  // return id; ekhane jodi return use kori tahole niche if else ba r kono kisu kaj korbe na
  if (id >= 18) {
    console.log("valid");
  }
  else {
    console.log("invalid");
  }
}

const isstudent = isstudentplus(student);
 console.log(isstudent);
