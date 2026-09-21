// const fruits = ["apple", "Drama", "mango", "orange", "grape"]

// const slice = fruits.slice(1, 4);
// console.log(slice)

// reduce 
let nums = [5, 5, 5, 5, 5, 5] 
let sumwithreduce = nums.reduce((accumulator, ele, ind, arry) => {
  console.log(accumulator, ele)
 return accumulator + ele;
  return 500;
}, 5)
console.log(sumwithreduce);