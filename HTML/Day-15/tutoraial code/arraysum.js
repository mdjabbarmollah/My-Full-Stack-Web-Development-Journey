//for in loop
// const user = { name: "Rahim", age: 25, city: "Dhaka" };
// for (const key in user) {
//     console.log(key + ": " + user);
// }

// // ঘ. ForEach মেথড (For...Each)
// const numbers = [1, 2, 3];
// numbers.forEach(function(num) {
//     console.log(num);
// });

// // For...Of লুপের ডিটেইলস স্ট্রাকচার (Detailed Structure
// const colors = ["red", "green", "blue"];

// for (const color of colors) {
//     console.log(color);
// }
const numbers = [12, 4, 6, 18, 56];
const odds = [2,5,6,7,8];
const evens = [6,9,3,9,4];

// let num = 0;
// for (const sum of numbers) {
//     num = sum + num ;
//     console.log(sum, num);
    
// }
function sumOfArray(array) {
    console.log("inside the function", array);
    let sum = 0;
    for (const num of array) {
        console.log(num)
        sum = sum + num; 
    }
    return sum;
}

const result = sumOfArray(numbers);
console.log("sum of array numbers", result);

const resultodd = sumOfArray(odds);
console.log("sum of array odd", resultodd);

const resulteven = sumOfArray(evens);
console.log("sum of array even", resulteven);