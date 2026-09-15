// let price = 100;
// let tax = 5;

// function ctp(price, tax) {
//   let total = price + tax;
//   return total;
// }
// let finalammount = ctp(price, tax);
// console.log(finalammount + 20);

// name age & city output
// let name = "Alex";
// let by = 2006;
// let city = "Dhaka";
// function introduce(a, b, c) {
//   let cy = new Date().getFullYear() - 2000;
//   return "My name is " + name + ",I am " + cy + " years old, from " + city + ".";
// }
// let result = introduce(name, by, city);
// console.log(result);

// discounted price

// function applyDiscount(price, percent) {
//   let afterpercent= price * percent / 100;
//   let adp = price - afterpercent;
//   return adp;
// }
// // console.log(applyDiscount(100, 5));
// // const total = 100;
// function discriborder(name, total) {
//   let ammount = applyDiscount(total,5);
//   return name + "s order total is $ " + ammount + "after discount.";
// }
// let result = discriborder("sam", 500);
// console.log(result);



// tutorial****************


function applyDiscount(price, percent) {
  return price - (price * percent) / 100;
}
function describedOrder(name, total, percentage) {
  let discounted = applyDiscount(total, name);
  console.log(discounted);
 return name + "s order total is $ " + discounted + "after discount.";
}
console.log(describedOrder("sam", 100,5));