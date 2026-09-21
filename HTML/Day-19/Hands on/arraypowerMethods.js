// let array = [2, 3, 4, 5, 6, 9]
// let double = []
// for (let i = 0; i < array.length; i++){
//   double.push(array[i]*2)
// }
// console.log(double)

let numbers = [2, 4, 5, 6, 3, 6]
const dobules = numbers.map((upadan, kiase, sobgulo) => {
  console.log(upadan, kiase, sobgulo);
  return upadan * 2;
})
console.log(dobules)// eta es6 way

// let numbers = [2, 4, 5, 6, 7]
// const doubles = [];
// function callback(num) 
//   // for (let i = 0; i < numbers.length; i++)
//   {
//     for (let num of numbers) {
//       doubles.push(num * 2);
//     // doubles.push(numbers[i] * 2)
    
//   }
//   return doubles;
// }
// console.log(callback(numbers));