// var status = "Order Placed";

// for (var i = 1; i <= 3; i++){
//   var status = "processinditem" + i;
//   console.log(status);
// }
// ekoi nam duita variable declare kora jai r console korar somoy confuse hote hoy kon variable diye access kora hoyese

// problem 2
// receipt generator(template Strings) build a receipt generator using template string take ime name, price qty as input, output formated multiline receipt
// example: Input ("pen",20,3)
function recepGenerator(name, price, qty) {
  
  return `Name :${name}.
  Quantity : ${qty}.
  Total Price: ${price * qty} Taka.`
}
console.log(recepGenerator("Fahad", 20, 3));
