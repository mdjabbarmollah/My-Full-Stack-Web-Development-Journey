// let name = "Utsho";
// let location = "Badda Dhaka";
// // console.log(location);
// let name_address = `hello ${name}. Your home address is ${location}`
// console.log(name_address)

// let name = "Fahad";
// let order = "productivity";
// let quantity = 5;
// let price = 200;
// let delevery_details = `${name} persel ${order} item of ${quantity} price ${price * quantity}
// lin 1
// line 2 
// line 3
// `
///// multi line a kora jabe  conditonal statement er kaj oo kora jabe math matical expresion er kaj o kora jabe 
// console.log(delevery_details);
// let ammount = 2500;
// let name = "Fahad"
// let message = `Hello ${name},
// your payment is successful,
// Your paid ammount is ${ammount}`
// console.log(message)
function admission(ammount, name) {
  let mess = `hello ${name || "Student"} 
  Your payment is successful
  your paid ammount is ${ammount}`
  return mess;
}
console.log(admission(2500,"Fahad"))
console.log(admission(5000,"Jasiya"))