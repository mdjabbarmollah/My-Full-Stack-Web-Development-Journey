const numbers = [12, 98, 77, 6, 23];
const numbers2 = [2, 3]
const players = ['abul', 'babul', 'cabul', 'dabul', 'kabul']

const hasItem = numbers.includes(600)
console.log(hasItem)

if (numbers.includes(77)) {

}

if (players.includes('Babul')) {
    console.log('babul is playing')
}

const allNumbers = numbers.concat(numbers2)
// console.log(allNumbers)

const numbs = [1, 3, 5, 2, 8];
const joined = numbs.join(', ')
console.log(joined)

const position = numbs.indexOf(28);
console.log('position of 5', position)

console.log(Array.isArray([45]));