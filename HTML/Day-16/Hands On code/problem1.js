let number = 10;
let even = 11;
let odd = 12;

if (number % 2 === 0){
  console.log("even");
}
else {
  console.log("odd number");
}
function iseven(number) {
  if (number % 2 === 0) {
    return "even";
  }
  else {
    return "ODD";
  }
}
const result = iseven(number);
console.log(result)
const resultodd = iseven(even);
console.log(resultodd)
