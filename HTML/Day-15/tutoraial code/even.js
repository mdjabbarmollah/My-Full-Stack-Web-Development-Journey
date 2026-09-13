const numbers = [12, 13, 15, 16, 18];
const odd2 = [134,15,36,67,3423,222];

/**
 * loop through the array to get each element
 * 
 * identify even number
 */

// const evens = []
// for (const all of numbers) {
//   console.log(all);
//   if (all % 2 === 0) {
//     console.log("even numbers", all);
//     evens.push(all);
// }
// }
// console.log("All stored even numbers:", evens);
// eta ami nije amar moto korechi
function getEvenNumbers(array) {
  const odd = [];
  for (const all of array) {
    console.log(all)
    if (all % 2 === 1) {
      // console.log("bijor",all);
      odd.push(all);  
      
    }
  }
 return odd;
}
const all2 = getEvenNumbers(numbers);
 console.log("all odd numbers : ", all2);

const oddresult= getEvenNumbers(odd2);
console.log("all odd numbers for odd2 : ", oddresult);

