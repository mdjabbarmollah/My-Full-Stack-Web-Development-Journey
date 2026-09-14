//  ********factorial with function

function factorial(number) {
let sum = 1;
  for (let i = 1; i <= number; i++){
    sum = i * sum
  }
  return sum;
}
let secoendfact = factorial(4);
console.log(factorial(6));
console.log(factorial(7));

// without function multiply

for (let i = 1; i <= number; i++){
  sum = i * sum
}
console.log(sum);