// two data has exist;

// primitve data type: string,number,boolean,undefined,null:

// Non primitive data type: function , object and arry

// primitive data type 
// let name = "Utsho";
// let age = 25;
// let isMrrid = false;
// let result = undefined;
// let salary  = null;

// console.log(typeof name, typeof age, typeof isMrrid, typeof result, typeof salary)

let name = "Utsho";//amra jokon name 2 k call korechi thik tokhon name = habib aste parto karon niche likhe diyechi name = habib;

// but et ekta primitive data type tai acutal value change hobe na console korle first j name deya hoyese setai dekha jabe utsho

// let name2 = name;
// let age = 25;
// let isMrrid = false;
// let result = undefined;
// let salary  = null;

// name = "Habib"
// console.log(name2)

// non primitive data type 
// /
// ekhane object function arry ei gulo non primitive howar karone student er majhe amara jokhon age push koralam / add korlam tokhon student 2 console korle kintu value dekha giyese output tai eta holo reference type data /non primtive data

// but

//  uporer string number bulooen null undefiend ei gulo kintu change hobe na because ei gulo primitive/ non referencial data type tai eigulo change hobe na

// abar non primitive j gulo tate jodi actual value te kisu push ba add kora hoy se gulo jemon output dekha jai se rokom vabe jodi ekane kono kisu uporer tar moton sadhin vabe add korte cai ta hole spread kore dite hobe..

// ফাংশন ডিক্লেয়ার
function add(a, b) {
  return a + b;
}

// প্রপার্টি যুক্ত করা
add.description = "Original Description";

// স্প্রেড ছাড়া এসাইন (রেফারেন্স কপি)
let add2 = add;

// মূল 'add' ফাংশনের প্রপার্টি পরিবর্তন করা
add.description = "Modified Description";

// console.log("add2.description ->", add2.description);
console.log(add2);
console.log("Can call add2()? ->", add2(5, 5));

// out put
// add2.description -> Modified Description
// Type of add2 -> function
// Can call add2()? -> 10

// ফাংশন ডিক্লেয়ার
function add(a, b) {
  return a + b;
}

// প্রপার্টি যুক্ত করা
add.description = "Original Description";

// স্প্রেড ব্যবহার করে কপি করা
let add3 = { ...add };

// মূল 'add' ফাংশনের প্রপার্টি পরিবর্তন করা
add.description = "Modified Description";

console.log("add2.description ->", add3.description);
console.log("Type of add3 ->",add3);
// console.log(add3(5, 5)); // ❌ Error: add2 is not a function

// out put 
// add2.description -> Original Description
// Type of add2 -> object