//  problem 6 ********************

// let str = "programming Hero"
// let vowel = "aeiou"
// let count = 0;
// for (let i = 0; i < str.length; i++){
//   let letter = str[i];
//   if (vowel.includes(letter)) {
//     console.log("vowel");
//      count++;
//   }
//  console.log(letter);
 
// }
// console.log(count)


let string = "bangladesh";
let string2 = "programming Hero";
let sowel = "aeiou";

function checkvowel(swsd) {
  let count = 0;
  for (let i = 0; i < swsd.length; i++) {
    let store = swsd[i];
    if (sowel.includes(store)) {
      console.log("vowel");
      count++;
    }
  }
  return count;
} 
let result = checkvowel(string2);
console.log(checkvowel(string));
console.log(result);
