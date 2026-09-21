function register(cb) {
  // console.log("User is regestered")
//  console.log(cb);
  cb();
}
function userbasicInfo(Fahad) {
  let student = {
    name: "Fahad",
    id: 25,
    roll: 434431
  }
  console.log(student);
}

function academicInfo(twothousandsixteenbatch) {
  let studentacInfo = {
    subject: "science",
    shift: "day",
    gpa: 4.38
  }
  console.log(studentacInfo);
}

console.log(register(userbasicInfo));
console.log(register(academicInfo));

function calculator(a,b) {
  let sum = a + b;
  return sum;
}
function displayresult(result) {
  console.log(result);
}
console.log(calculator(5,5))
console.log(calculator(75,5))
console.log(calculator(5,555))
