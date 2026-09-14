// let number = [500, 254, 555, 2222, 8888, 2289, 2349];
// let largest = number[0];
// for (let i = 1; i < number.length; i++){
//   let currentElement = number[i];
//   if (currentElement > largest) {
//     largest = currentElement;
//   }

// }
// console.log(largest);

let numbers = [100, 200, 3400, 5999, 353, 543, 6435, 2353453, 534635, 23534];
let numbers2 = [500, 22, 66, 6745, 5324, 4345, 999233, 2543, 25345, 534647, 6456247, 66575];

// function islargest(number) {
//   for (let i = 0; i < number.length; i++){
//     let currentElement = number[i];
//     if (currentElement > large) {
//       large = currentElement;
//     }
//   }
//   return large;
// }
// let result = islargest(numbers2);
// console.log(result);


function isSmall(number) {
  let small = number[0];//eta sob somoy function er vitore rakhai valo
  for (let i = 0; i < number.length; i++){
    let currentNumber = number[i];
    if (currentNumber < small) {
    small = currentNumber;
    }
  }
  return small;
}
let result = isSmall(numbers2);
console.log(result);