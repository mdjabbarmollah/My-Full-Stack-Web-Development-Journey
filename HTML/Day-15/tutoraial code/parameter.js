//parameter

function sayHello(name) {
  console.log("hello", name);
}
sayHello("jamal")
sayHello("kamal")
sayHello("yamal")
sayHello("Tamal")
function add(num1, num2) {
  console.log("you have provided", num1, num2);
  let sum = (num1 + num2);
  console.log("total of the provided number", sum);
  const mul = (num1 * num2);
  console.log("total of the provided number", mul);
  const total = (sum + mul);
  
}
add(4,7);