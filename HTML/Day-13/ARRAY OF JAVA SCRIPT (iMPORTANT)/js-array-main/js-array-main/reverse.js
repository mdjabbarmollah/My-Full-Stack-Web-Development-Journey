const numbers = [87, 54, 12, 63, 41, 7, 51];

numbers.reverse()
// console.log(numbers);


const friends = ['abul', 'babul', 'cabul', 'dabul'];
const afterReverse = [];
for (const friend of friends) {
    // console.log(friend)
    afterReverse.unshift(friend);
    // console.log(afterReverse);
}


const digits = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < digits.length; i++) {
    // console.log(i, digits[i]);
}

const reversedDigits = [];
// reverse for loop to get array elements
for(let i = digits.length -1; i >= 0; i--){
    console.log(i, digits[i])
    reversedDigits.push(digits[i]);
}