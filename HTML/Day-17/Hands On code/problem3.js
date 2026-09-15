// array related******************

// eta hoche modeule 14 emni korlam
// let array = [122, 124, 33, 56.543, 35];
// let sum = 0;
// for (let i = 0; i < array.length; i++)
// {
//   // let store = array[i];
//   sum += Number(array[i].toFixed(1));
// }
// console.log(sum);
// count how many present number in the array;

// let array = [10, 5, 2, 56];
// function iseven(number)
//  {let count = 0;
//   for(let i = 0; i < number.length; i++){
//   if(number[i] % 2 === 0){
//     count++;
//     console.log(number[i]);
//   }
//   }
//   return count;
// }
// let result = iseven(array);
// console.log(result);

//last two

// let array = [12, 545, 44, 21];
// function lastTwo(arr) {
//   return arr.slice(arr.length - 2, arr.length);
// }
// let result = lastTwo(array);
// console.log(result);


// let narr = [10, 20, 35, 53, 3];
// let target = 100;
// function findTarget(index, value) {
//   for (let i = 0; i < narr.length; i++){
//     if (narr[i].toString() === value.toString()) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(findTarget(narr, target));

let narr = [10, 20, 35, 53, 3];
let sum = 0;
let count = 0;
function mav(muarr) {
  for (let i = 0; i < narr.length; i++){
    sum += Number(muarr[i].toFixed(2));
    count++;
  }
  return sum / count;
}
let result = mav(narr);
console.log(result);