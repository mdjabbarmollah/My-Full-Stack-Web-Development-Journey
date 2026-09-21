// function createForeclouserTest() {

//     let count = 0;
//   return function () {
//     return count++;
//   }
// }
// const counter = createForeclouserTest();
// console.log(counter())
// console.log(counter())
// console.log(counter())

// function cashregister(x) {
//   let ammount = x;
//   return function (payammount) {
//     // console.log("customer ammount",payammount);
//     ammount += payammount;
//     return `Total ammount ${ammount}`;
//   };
// }
// // let preammount = 500;eivabe lekha jai abar..
// let coffeShop = cashregister(500);
// let votkabar = cashregister(50);
// let sparaoom = cashregister(500);
// // let customerpayment = 200;// evabe lekha jai tradi..
// // let finalresult = (coffeShop(customerpayment));
// // console.log(finalresult);
// // es6 way 
// console.log(coffeShop(200));
// console.log(votkabar(200));
// console.log(sparoom(2000));
// //

// traditional way

// // ১. প্রথমে ক্যাশ রেজিস্টার ফাংশনটি ডিফাইন করা হলো
// function cashregister(x) {
//   let ammount = x;
  
//   // ফাংশনের ভেতরে রিটার্ন করার জন্য একটি আলাদা ফাংশন তৈরি করা হলো
//   let calculateTotal = function (payammount) {
//     ammount += payammount;
//     return "Total ammount " + ammount;
//   };

//   // সেই ফাংশনটি রিটার্ন করে দেওয়া হলো
//   return calculateTotal;
// }

// // ২. ক্যাশ রেজিস্টারে প্রাথমিক ৫০০ টাকা দিয়ে ফাংশনটি কল করা হলো এবং তা একটি ভেরিয়েবলে রাখা হলো
// let initialCash = 500;
// let coffeShop = cashregister(initialCash);

// // ৩. কাস্টমার কত টাকা দিচ্ছে তা আলাদা একটি ভেরিয়েবলে রাখা হলো
// let customerPayment = 200;

// // ৪. এবার coffeShop ফাংশনটি কল করে ফাইনাল রেজাল্ট অন্য একটি ভেরিয়েবলে নিয়ে তারপর প্রিন্ট করা হলো
// let finalResult = coffeShop(customerPayment);
// console.log(finalResult);

// practice part ekhon hobe ekta 5star hotel cash counter:
function Sheratonfivestar
  //ekhane kintu defult parameter oo add korechi
  (spa_ammount = 0) {
  let Totalammount = spa_ammount;
  return function (bookingAmmount) {
    console.log("new bokking advanced ammount " + bookingAmmount)
    Totalammount += bookingAmmount;
    return Totalammount;
  }
}
let Totalspaammount = Sheratonfivestar(50000);
let monthlyGumpackPrice= Sheratonfivestar();
console.log(Totalspaammount(5000));
console.log(monthlyGumpackPrice(10000));