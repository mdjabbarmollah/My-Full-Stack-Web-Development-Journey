const numbers = [1, 3, 5, 6, 2, 4, 5];

const slice = numbers.slice(2, 6)
// console.log(slice);
// console.log(numbers);

const parts = numbers.splice(2, 2, 99, 888, 999, 6666);
console.log(parts);
console.log(numbers);