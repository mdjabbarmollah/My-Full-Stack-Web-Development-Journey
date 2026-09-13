const commitment = 'i will work hard and will never give up';
const parts = commitment.split(' ')
const reversedParts = [...parts].reverse()//ekhane spread na korle orginal variable oo reverse hoye jabe.
const forjoinreversvariable = reversedParts.join(' ') // that is the join method
// console.log(parts);
// console.log(reversedParts)
// console.log(forjoinreversvariable)


// eta for loo diye oo kora jabe 
let reversecom = '';
for (const letter of commitment) {
  // console.log(letter);
  reversecom = letter + reversecom;// sudu ekhane letter ta age likhe deya tei reverse hoye gese
  console.log(letter,reversecom)
}
