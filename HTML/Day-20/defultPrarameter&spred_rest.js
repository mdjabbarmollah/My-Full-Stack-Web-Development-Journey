// function discount(discountammount, ...prices) {
//   let total = 0;
//   for (let i = 0; i < prices.length; i++){
//     total = prices[i] + total;
//   }
//   let discouncalculation = (total * discountammount / 100)
//   let fp = total - discouncalculation;
//   return fp;
//     // console.log(total)
//   // return total;
// }
// // console.log(discount(10, 300))

// // using reduce method & template string
// function discount(discountammount2, ...prices) {
//   let total = prices.reduce((accumulator, currentvalue) => accumulator + currentvalue,
//     0)
//    console.log("Total Price:",total,"Taka.")
//   // let totalPrice = (total * discountammount2) / 100
//   // return totalPrice;
//   return `Discounted Ammount: ${(total * discountammount2) / 100} Taka.
// Sub Total Price: ${total - ((total * discountammount2) / 100)} Taka.`
// }

// console.log(discount(10, 300, 200,400,500,600,600,60,70));

// function discount(discountammount, ...prices) {
//   let total = 0;
//   // for (let i = 0; i < prices.length; i++){
//   //   total = prices[i] + total;
//   // }
//   for (sumPrice of prices) {
//   total += sumPrice
// }
//   return `Original total: ${total},Discount Amount : ${(total * discountammount)/100} Final Price : ${total - (total * discountammount) / 100}`;
//     // console.log(total)
//   // return total;
// }
// console.log(discount(10, 200))

// const discount = (discount, ...prices) => {
//   if (!discount) {
//     discount = 10;
  // }
  // let total = prices.reduce((accumulator, prices) => accumulator + prices)
//   console.log("Total Product Price:",total,"Taka (Only)")
//   return `Discounted Ammount : ${(total * discount) / 100} Taka (Only).
// Sub Total Ammount: ${total -  (total * discount) /100}`
// }
// console.log(discount(null, 50, 40, 50, 60))


// problem 3

let arr1 = [10, 39, 43, 546, 34, 44]
let arr2 = [234, 54, 665,39, 23,43,10, 65, 55]
let merge1 = [...arr1, ...arr2]
// let newarr = [];
// for (let rd of merge1) {
//   if (!newarr.includes(rd)) {
//     newarr.push(rd)
//   }
// }
// console.log(newarr)
// shortcut 1
let mergedarray = [...new Set([...arr1, ...arr2])];
console.log(mergedarray);
// shortcut 2
let merged = new Set(merge1)
console.log(merged);
let method3 = Array.from(new Set(merge1))
console.log(method3)
