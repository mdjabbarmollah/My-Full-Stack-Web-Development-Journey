function greet(name = "guest") {
  return `hello , ${name}`;
}
console.log(greet());

function makeCoffe(sugar = 1) {
  return "coffe is prepared with " + sugar + " spoon sugar"
}
console.log(makeCoffe())
